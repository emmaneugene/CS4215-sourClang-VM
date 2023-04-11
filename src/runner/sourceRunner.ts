import { IOptions, Result } from '..'
import { compile } from '../compiler/compiler'
import { RODataSegment } from '../compiler/rodataSegment'
import { compile as compile2 } from '../compiler2/compiler'
import { DataSegment } from '../compiler2/segment.data'
import { InstrSegment } from '../compiler2/segment.instr'
import { RODataSegment as RODataSegment2 } from '../compiler2/segment.ro'
import { WORD_SIZE } from '../constants'
import { CannotFindModuleError } from '../errors/localImportErrors'
import { evaluate } from '../interpreter/interpreter'
import { prettyPrintInstr } from '../interpreter/util'
import { parse } from '../parser/parser'
import { parse as parse2 } from '../parser2/parser'
import { PreemptiveScheduler } from '../schedulers'
import { Context, Scheduler, Variant } from '../types'
import { GlobalCTE } from './../compiler/compileTimeEnv'
import { determineVariant, resolvedErrorPromise } from './utils'

const VERSION: 1 | 2 = 2

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
  if (VERSION === 2) {
    return sourceRunner2(code, context, options)
  }

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

  const roDataSegment = new RODataSegment(declaredStrings)
  const roDataSegmentSize = roDataSegment.getRODataSegmentSize()
  const dataSegmentSize = roDataSegmentSize + globalVariableSize

  const globalCte = compile(
    ast,
    declaredStructDefinitions,
    roDataSegmentSize,
    dataSegmentSize,
    roDataSegment
  )
  if (globalCte) {
    roDataSegment.setupRODataSegment(context)
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

function sourceRunner2(
  code: string,
  context: Context,
  options: Partial<IOptions> = {}
): Promise<Result> {
  const theOptions: IOptions = { ...DEFAULT_SOURCE_OPTIONS, ...options }
  context.variant = determineVariant(context, options)
  context.errors = []

  if (code === '') {
    return runInterpreter(context, theOptions)
  }

  // Parse and validate
  const parseResult = parse2(code, context)
  if (!parseResult) {
    return resolvedErrorPromise
  }

  const { dataSegment, rodataSegment, instrSegment } = compile2(parseResult)
  rodataSegment.setupSegment(context)
  const startOfStack = instrSegment.setupSegment(context)
  const startingPC = instrSegment.getStartingPC()
  context.cVmContext.instrs = instrSegment.getInstrs()

  if (!startingPC) {
    return resolvedErrorPromise
  }

  context.cVmContext = {
    ...context.cVmContext,
    isRunning: true,
    PC: BigInt(startingPC),
    BP: BigInt(startOfStack)!,
    SP: BigInt(startOfStack)!,
    AX: BigInt(0) // default return value of main
  }

  setupContextForVisualisation(context, rodataSegment, dataSegment, instrSegment)

  return runInterpreter(context, theOptions)
}

function setupContextForVisualisation(ctx: Context, rodataSegment: RODataSegment2, dataSegment: DataSegment, instrSegment: InstrSegment): void {
  ctx.cVmContext.formattedInstrs = () => {
    return instrSegment.getFormattedInstrs()
  }

  ctx.cVmContext.formattedRODataSegment = () => {
    return rodataSegment.getFormattedStringToAddr()
  }

  ctx.cVmContext.formattedDataSegment = () => {
    return dataSegment.getFormattedGlobalVars(ctx)
  }
}





