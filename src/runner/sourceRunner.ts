import * as es from 'estree'

import { IOptions, Result } from '..'
import { compile } from '../compiler/compiler'
import { WORD_SIZE } from '../constants'
import { CannotFindModuleError } from '../errors/localImportErrors'
import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import { PreemptiveScheduler } from '../schedulers'
import { Context, Scheduler, Variant } from '../types'
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
  const program: es.Program | undefined = parse(code, context)
  if (!program) {
    return resolvedErrorPromise
  }

  const globalCte = compile(program)
  if (globalCte) {
    // similar to C where segments are ordered in memory
    /**
     * 1. Data segment
     * 2. Read-only data segment
     * 3. Instructions segment
     * 4. Stack
     */
    addDataSegment(context, globalCte)
    addRODataSegment(context, globalCte)
    addInstrSegment(context, globalCte)
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
 * @throws {CompileTimeError} if main function is not defined
 */
function addInstrSegment(ctx: Context, gEnv: GlobalCTE): void {
  ctx.cVmContext = {
    ...ctx.cVmContext,
    instrs: gEnv.combinedInstrs
  }
}

/**
 * Inserts read-only segment of a program.
 * E.g. strings defined with double quotes
 */
function addRODataSegment(ctx: Context, gEnv: GlobalCTE): void {}

/**
 * Inserts global data defined at top level of the program.
 */
function addDataSegment(ctx: Context, gEnv: GlobalCTE): void {
  ctx.cVmContext = {
    ...ctx.cVmContext
    // DATASEGMENT: gEnv.
  }
}

/**
 * Set up the memory and registers prior to launch.
 *
 * For main,
 * rbp points to empty prev_rbp value
 * rbp-8 points to return address
 */
function setupMemAndReg(ctx: Context, gEnv: GlobalCTE): void {
  const dataview = new MemoryModel()

  // const START_OF_STACK = gEnv.totalDataSize + gEnv.totalRODataSize + gEnv.totalInstrSize
  const START_OF_STACK = gEnv.nextAvailableOffset
  dataview.setBytesAt(BigInt(START_OF_STACK), gEnv.EXIT_COMMAND_ADDR)

  ctx.cVmContext = {
    ...ctx.cVmContext,
    isRunning: true,
    PC: gEnv.getFunctionAddr('main'),
    BP: BigInt(START_OF_STACK + WORD_SIZE), // We add word size since the first memory space is reserved for the exit command address
    SP: BigInt(START_OF_STACK + WORD_SIZE * 2), // We add 2 word size since it's after the BP
    AX: BigInt(0), // default return value of main
    dataview: new MemoryModel()
  }
}

function runInterpreter(context: Context, options: IOptions): Promise<Result> {
  const it = evaluate(context)
  const scheduler: Scheduler = new PreemptiveScheduler(options.steps)
  return scheduler.run(it, context)
}
