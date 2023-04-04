/* tslint:disable:max-classes-per-file */
import { WORD_SIZE } from '../constants'
import { Context, Value } from '../types'
import { GotoRelativeCommand, StackPointer } from './../typings/microcode'
import { JumpOnFalseRelativeCommand } from './../typings/microcode'
import { RelativeAddrMode } from './../typings/microcode'
import {
  BinopCommand,
  CallCommand,
  ExecuteBuiltInFxCommand,
  LeaCommand,
  Microcode,
  MovCommand,
  MovImmediateCommand,
  OffsetRspCommand,
  UnopCommand
} from './../typings/microcode'
import { BUILT_IN_IMPL_CTX } from './builtin'
import { calculateAddress, getRegister, setRegister } from './util'

export function* evaluate(context: Context) {
  let returnValue: bigint | undefined
  while (true) {
    if (!context.cVmContext.isRunning) {
      returnValue = context.cVmContext.AX
      break
    }

    const node = getInstrNode(context)
    const cmd: Microcode | undefined = getCmdFromNode(context.cVmContext.instrs, node)

    if (!cmd) {
      break
    }

    // Execute `cmd` and amend `context` accordingly
    yield* MACHINE[cmd.type](cmd, context)

    // debug
    const { SP } = context.cVmContext
    debugPrint(`Executed command: ${cmd.type}`, context)
    debugPrint(`AX: ${context.cVmContext.AX} | BP: ${context.cVmContext.BP}`, context)
    debugPrint(context.cVmContext.dataview.debug(SP, Number(SP) - 32, Number(SP) + 32), context)
  }

  yield* leave(context)
  return returnValue ?? undefined // undefined means some issue during execution
}

function* leave(context: Context) {
  context.runtime.break = false
  context.runtime.nodes.shift()
  yield context
}

/**
 * Based on the current PC, get the instruction node
 * that is placed onto the memory.
 */
function getInstrNode(context: Context): bigint {
  const { dataview } = context.cVmContext
  return dataview.getBytesAt(context.cVmContext.PC)
}

/**
 * Interpret the node's contents and then get the
 * actual command to execute.
 */
function getCmdFromNode(instrsList: Microcode[], node: bigint): Microcode | undefined {
  return instrsList[Number(node)]
}

/* Supporting typedef for MACHINE. */
type EvaluatorFunction = (cmd: Microcode, ctx: Context) => IterableIterator<Value>

/**
 * The virtual machine used for execution
 *
 * WARNING: Do not use object literal shorthands, e.g.
 *   {
 *     *Literal(node: es.Literal, ...) {...},
 *     *ThisExpression(node: es.ThisExpression, ..._ {...},
 *     ...
 *   }
 * They do not minify well, raising uncaught syntax errors in production.
 * See: https://github.com/webpack/webpack/issues/7566
 */
const MACHINE: { [microcode: string]: EvaluatorFunction } = {
  ExitCommand: function* (cmd, ctx) {
    ctx.cVmContext.isRunning = false
    return
  },

  /**
   * Processes the `MovImmediateCommand` microcode within the context of a
   * running program.
   * @param cmd
   * @param ctx
   */
  MovImmediateCommand: function* (cmd, ctx) {
    const immCmd = cmd as MovImmediateCommand
    debugPrint(immCmd.type + ' ' + immCmd.value + ' ' + immCmd.encoding, ctx)
    const { dataview } = ctx.cVmContext

    dataview.setBytesAt(calculateAddress(ctx, StackPointer, 0), BigInt(immCmd.value))
    ctx.cVmContext.SP += BigInt(WORD_SIZE)

    incrementPC(ctx)
  },

  /**
   * Processes the `MovCommand` microcode within the context of a running
   * program.
   * @param cmd
   * @param ctx
   */
  MovCommand: function* (cmd, ctx) {
    const movCmd = cmd as MovCommand
    const { dataview } = ctx.cVmContext
    const { from, to } = movCmd

    if (from.type === 'register' && to.type === 'register') {
      // This pair shouldn't be supported actually
      // TODO: Throw runtime error, likely a compiler bug
      ctx.cVmContext.AX = ctx.cVmContext.AX
    }

    // Mem[reg+offset] = Reg[reg] + offset
    /**
     * Used for the following cases:
     * Returning Values: Mem[reg+offset] = AX
     * Storing variable value to memory: Mem[reg+offset] = BP + offset
     */
    if (from.type === 'register' && to.type === 'relative') {
      const { reg, offset } = to as RelativeAddrMode
      const toAddr = calculateAddress(ctx, reg, offset)

      const fromOffset = BigInt(from.offset ?? 0)
      dataview.setBytesAt(toAddr, getRegister(ctx)[from.reg] + fromOffset)
    }

    // R[reg] = Mem[reg+offset]
    // from's offset is ignore
    if (from.type === 'relative' && to.type === 'register') {
      const { reg, offset } = from as RelativeAddrMode
      const fromAddr = calculateAddress(ctx, reg, offset)
      const valueFromMem = dataview.getBytesAt(fromAddr)
      setRegister(ctx, to.reg, valueFromMem)
    }

    // M[reg+offset] = M[reg+offset]
    if (from.type === 'relative' && to.type === 'relative') {
      const { reg: fromReg, offset: fOff } = from as RelativeAddrMode
      const fromAddr = calculateAddress(ctx, fromReg, fOff)

      const { reg: toReg, offset: tOff } = to as RelativeAddrMode
      const toAddr = calculateAddress(ctx, toReg, tOff)

      dataview.setBytesAt(toAddr, dataview.getBytesAt(fromAddr))
    }

    incrementPC(ctx)
  },

  /**
   * Calculates `value` and puts it into `dest`.
   * To get the address of a certain variable (i.e. &x)
   * @param cmd
   * @param ctx
   */
  LeaCommand: function* (cmd, ctx) {
    const leaCmd = cmd as LeaCommand
    const { dataview } = ctx.cVmContext
    const { value, dest } = leaCmd

    const toAddr = calculateAddress(ctx, dest.reg, dest.offset)
    const computedVal = calculateAddress(ctx, value.reg, value.offset)

    dataview.setBytesAt(toAddr, BigInt(computedVal))

    incrementPC(ctx)
  },

  /**
   * Processes the `OffsetRspCommand` microcode within the context of a running
   * program.
   * @param cmd
   * @param ctx
   */
  OffsetRspCommand: function* (cmd, ctx) {
    const offsetCmd = cmd as OffsetRspCommand
    ctx.cVmContext.SP += BigInt(offsetCmd.value)
    incrementPC(ctx)
  },

  /**
   * Applies the binary operation `op` to the top two values of the stack
   * @param cmd
   * @param ctx
   */
  BinopCommand: function* (cmd, ctx) {
    const binopCmd = cmd as BinopCommand
    const { dataview } = ctx.cVmContext
    const { op } = binopCmd

    const arg1 = dataview.getBytesAt(calculateAddress(ctx, StackPointer, -WORD_SIZE * 2))
    const arg2 = dataview.getBytesAt(calculateAddress(ctx, StackPointer, -WORD_SIZE))
    debugPrint(`${binopCmd.type} ${op} ${arg1} ${arg2} `, ctx)

    let res = arg1
    switch (op) {
      case '+':
        res += arg2
        break
      case '-':
        res -= arg2
        break
      case '*':
        res *= arg2
        break
      case '/':
        res /= arg2
        break
      case '%':
        res %= arg2
        break
      case '>':
        res = BigInt(arg1 > arg2)
        break
      case '>=':
        res = BigInt(arg1 >= arg2)
        break
      case '<':
        res = BigInt(arg1 < arg2)
        break
      case '<=':
        res = BigInt(arg1 <= arg2)
        break
      case '==':
        res = BigInt(arg1 === arg2)
        break
      case '!=':
        res = BigInt(arg1 !== arg2)
        break
      case '||':
        res = BigInt(arg1 || arg2)
        break
      case '&&':
        res = BigInt(arg1 && arg2)
        break
    }
    dataview.setBytesAt(calculateAddress(ctx, StackPointer, -WORD_SIZE * 2), res)

    ctx.cVmContext.SP -= BigInt(WORD_SIZE)
    incrementPC(ctx)
    dataview.debug()
  },

  /**
   * Applies the unary operation `op` to the top value of the stack
   * @param cmd
   * @param ctx
   */
  UnopCommand: function* (cmd, ctx) {
    const unopCmd = cmd as UnopCommand
    const { dataview } = ctx.cVmContext
    const { op } = unopCmd

    const arg = dataview.getBytesAt(calculateAddress(ctx, StackPointer, -WORD_SIZE))
    debugPrint(`${unopCmd.type} ${op} ${arg}`, ctx)

    let res = arg
    switch (op) {
      case '!':
        res = BigInt(!res)
        break
      case '-':
        res = -res
        break
    }
    dataview.setBytesAt(calculateAddress(ctx, StackPointer, -WORD_SIZE), res)

    incrementPC(ctx)
  },
  /**
   * Processes the `CallCommand` microcode within the context of a running
   * program.
   *
   * It performs the following:
   * - Pushes the return address onto stack
   * - Pushes the caller's rbp onto stack
   * - Assigns new BP (to setup up the next fx's function BP)
   * - Assigns new PC
   * @param cmd
   * @param ctx
   */
  CallCommand: function* (cmd, ctx) {
    const callCmd = cmd as CallCommand
    const { addr } = callCmd
    const { dataview } = ctx.cVmContext

    // Pushes the return address onto stack
    dataview.setBytesAt(ctx.cVmContext.SP, ctx.cVmContext.PC + BigInt(WORD_SIZE))
    ctx.cVmContext.SP += BigInt(WORD_SIZE)

    // Pushes and save the caller's rbp onto stack
    // Then, set the BP to the current SP
    // to mark the start of a new function frame
    // i.e. rbp points to the caller's rbp
    dataview.setBytesAt(ctx.cVmContext.SP, ctx.cVmContext.BP)
    ctx.cVmContext.BP = ctx.cVmContext.SP

    ctx.cVmContext.SP += BigInt(WORD_SIZE)
    ctx.cVmContext.PC = addr
  },

  /**
   * Processes the `ReturnCommand` microcode within the context of a running
   * program. Technically, it reverses the operations that `CallCommand` did
   * on the memory.
   *
   * It performs the following:
   * - Restores the old bp (since it must be stored at Mem[rbp])
   * - Restores the old return addresss [since it must be stored at Mem[rbp-WORD_SIZE]]
   *
   * @param cmd
   * @param ctx
   */
  ReturnCommand: function* (cmd, ctx) {
    const { dataview } = ctx.cVmContext

    const currFrameBP = ctx.cVmContext.BP

    // restore caller's registers
    ctx.cVmContext.BP = dataview.getBytesAt(currFrameBP)
    ctx.cVmContext.PC = dataview.getBytesAt(currFrameBP - BigInt(WORD_SIZE))
    ctx.cVmContext.SP = currFrameBP - BigInt(WORD_SIZE)
  },

  /**
   * Processes the `ExecuteBuiltInFxCommand` microcode within the context of a running
   * program
   * @param cmd
   * @param ctx
   */
  ExecuteBuiltInFxCommand: function* (cmd, ctx) {
    const builtIn = cmd as ExecuteBuiltInFxCommand
    const { name } = builtIn
    if (BUILT_IN_IMPL_CTX[name]) {
      BUILT_IN_IMPL_CTX[name](ctx)
    }
    incrementPC(ctx)
  },

  /**
   * Processes the `JumpOnFalseRelativeCommand` microcode within the context of a running
   * program.
   *
   * Reads the top of stack. If false, sets PC via PC = PC + relativeValue.
   * It will always pop the top of stack.
   */
  JumpOnFalseRelativeCommand: function* (cmd, ctx) {
    const jofr = cmd as JumpOnFalseRelativeCommand
    const { relativeValue } = jofr
    const topOfStack = ctx.cVmContext.dataview.getBytesAt(
      calculateAddress(ctx, StackPointer, -WORD_SIZE)
    )

    if (topOfStack == BigInt(0)) {
      ctx.cVmContext.PC += relativeValue * BigInt(WORD_SIZE)
    } else {
      incrementPC(ctx)
    }

    ctx.cVmContext.SP -= BigInt(WORD_SIZE)
  },

  /**
   * Processes the `GotoRelativeCommand` microcode within the context of a running
   * program.
   *
   * Sets PC via PC = PC + relativeValue.
   */
  GotoRelativeCommand: function* (cmd, ctx) {
    const gotor = cmd as GotoRelativeCommand
    const { relativeValue } = gotor
    ctx.cVmContext.PC += relativeValue * BigInt(WORD_SIZE)
  },

  /**
   * Processes the `PushCommand` microcode within the context of a running
   * program.
   * @param cmd
   * @param ctx
   */
  PushCommand: function* (cmd, ctx) {},

  /**
   * Processes the `PopCommand` microcode within the context of a running
   * program
   * @param cmd
   * @param ctx
   */
  PopCommand: function* (cmd, ctx) {}
}

function incrementPC(ctx: Context): void {
  ctx.cVmContext.PC += BigInt(WORD_SIZE)
}

function debugPrint(str: string, ctx: Context): void {
  if (ctx.externalBuiltIns?.rawDisplay) {
    ctx.externalBuiltIns.rawDisplay(undefined, str, ctx)
  } else {
    console.log(str)
  }
}
