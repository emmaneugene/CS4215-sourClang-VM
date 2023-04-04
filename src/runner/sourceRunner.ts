import { IOptions, Result } from '..'
import { compile } from '../compiler/compiler'
import { WORD_SIZE } from '../constants'
import { CannotFindModuleError } from '../errors/localImportErrors'
import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import { PreemptiveScheduler } from '../schedulers'
import { Context, Scheduler, Variant } from '../types'
import { convertCharToASCII } from '../utils/asciiConvertor'
import { GlobalCTE } from './../compiler/compileTimeEnv'
import { MemoryModel } from './../typings/runtime-context'
import { determineVariant, resolvedErrorPromise } from './utils'

const DEFAULT_SOURCE_OPTIONS: IOptions = {
  scheduler: 'async',
  steps: 1000,
  stepLimit: 1000,
  executionMethod: 'auto',
  variant: Variant.DEFAULT,
  originalMaxExecTime: 1000,
  useSubst: false,
  isPrelude: false,
  throwInfiniteLoops: true
}

export async function sourceRunner(
  code: string,
  context: Context,
  options: Partial<IOptions> = {}
): Promise<Result> {
  const theOptions: IOptions = { ...DEFAULT_SOURCE_OPTIONS, ...options }
  context.variant = determineVariant(context, options)
  context.errors = []

  // Parse and validate
  const parseResult = parse(code, context)
  if (!parseResult) {
    return resolvedErrorPromise
  }

  // similar to C where segments are ordered in memory
  // Memory layout (by segments):
  // - ROData:        [0, roDataSegmentSize - 1]
  // - Writable data: [roDataSegment, dataSegmentSize - 1]
  // - Instructions:  [dataSegmentSize, globalCTE.nextInstrLocation - 1]
  // - Stack:         [globalCTE.nextInstrLocation, ...]
  const { ast, declaredStrings, declaredStructDefinitions, globalVariableSize } = parseResult
  const roDataSegmentSize = getRODataSegmentSize(declaredStrings)
  const dataSegmentSize = roDataSegmentSize + globalVariableSize

  const globalCte = compile(ast, declaredStructDefinitions, roDataSegmentSize, dataSegmentSize)
  if (globalCte) {
    addRODataSegment(context, declaredStrings)
    addInstrSegment(context, globalCte, dataSegmentSize)
    setupMemAndReg(context, globalCte)
  }

  return runInterpreter(context, theOptions)
}

export async function sourceFilesRunner(
  files: Partial<Record<string, string>>,
  entrypointFilePath: string,
  context: Context,
  options: Partial<IOptions> = {}
): Promise<Result> {
  const entrypointCode = files[entrypointFilePath]
  if (entrypointCode === undefined) {
    context.errors.push(new CannotFindModuleError(entrypointFilePath))
    return resolvedErrorPromise
  }

  context.variant = determineVariant(context, options)

  return sourceRunner(entrypointCode, context, options)
}

/**
 * Using the `declaredStrings`, determines the amount
 * of memory needed for all the strings.
 */
function getRODataSegmentSize(declaredStrings: string[]): number {
  let count = 0
  declaredStrings.forEach(s => {
    // Each character in the string occupies 8 bytes
    count += s.length * WORD_SIZE
  })
  return count
}

/**
 * Inserts read-only segment of a program.
 * E.g. strings defined with double quotes
 *
 * Each character takes 8 bytes, and is allocated space
 * on the memory model.
 */
function addRODataSegment(ctx: Context, declaredStrings: string[]): void {
  const { dataview } = ctx.cVmContext
  let nextAddr = 0

  declaredStrings.forEach(str => {
    ;[...str].forEach(char => {
      dataview.setBytesAt(BigInt(nextAddr), BigInt(convertCharToASCII(char)))
      nextAddr += WORD_SIZE
    })
  })
}

/**
 * Inserts the instruction/text segment of the program.
 *
 * Each instruction takes up 8 bytes, and is allocated space
 * on the memory model.
 *
 * @throws {CompileTimeError} if main function is not defined
 */
function addInstrSegment(ctx: Context, gEnv: GlobalCTE, startingAddr: number): void {
  const { dataview } = ctx.cVmContext
  const instrs = gEnv.combinedInstrs
  let nextInstrAddr = startingAddr

  ctx.cVmContext = {
    ...ctx.cVmContext,
    instrs
  }

  instrs.forEach((_instruction, index) => {
    dataview.setBytesAt(BigInt(nextInstrAddr), BigInt(index))
    nextInstrAddr += WORD_SIZE
  })

  console.log(nextInstrAddr, gEnv.nextAvailableInstructionAddress)
}

/**
 * Set up the memory and registers prior to launch.
 *
 * For main,
 * rbp points to empty prev_rbp value
 * rbp-8 points to return address
 */
function setupMemAndReg(ctx: Context, gEnv: GlobalCTE): void {
  const START_OF_PROGRAM = gEnv.getStartingPC()
  const nextFreeAddr = gEnv.getNextFreeAddr()

  ctx.cVmContext = {
    ...ctx.cVmContext,
    isRunning: true,
    PC: START_OF_PROGRAM!,
    BP: nextFreeAddr!,
    SP: nextFreeAddr!,
    AX: BigInt(0) // default return value of main
  }
}

function runInterpreter(context: Context, options: IOptions): Promise<Result> {
  const it = evaluate(context)
  const scheduler: Scheduler = new PreemptiveScheduler(options.steps)
  return scheduler.run(it, context)
}
