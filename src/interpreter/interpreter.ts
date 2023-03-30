/* tslint:disable:max-classes-per-file */
import { Context, Value } from '../types'
import { RelativeAddrMode } from './../typings/microcode'
import {
  BinopCommand,
  CallCommand,
  ExecuteBuiltInFxCommand,
  ExitCommand,
  LeaCommand,
  Microcode,
  MovCommand,
  MovImmediateCommand,
  OffsetRspCommand,
  ReturnCommand,
  UnopCommand
} from './../typings/microcode'
import { lea } from './util'

export function* evaluate(context: Context) {
  // previous impl:
  // export function* evaluate(node: es.Node, context: Context) {
  //   const result = yield* evaluators[node.type](node, context)
  //   yield* leave(context)
  //   return result
  // }

  let returnValue: bigint | undefined
  while (true) {
    if (!context.cVmContext.isRunning) {
      returnValue = context.cVmContext.AX
      break
    }

    const cmd: Microcode | undefined = decodePC(context, context.cVmContext.PC)
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

function decodePC(ctx: Context, pc: bigint): Microcode | undefined {
  return ctx.cVmContext.instrs[Number(pc)]
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

    dataview.setBytesAt(lea(ctx, 'rsp', 0), BigInt(immCmd.value))
    ctx.cVmContext.SP += BigInt(8)

    ctx.cVmContext.PC++
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
    if (from.type === 'register' && to.type === 'relative') {
      const { reg, offset } = to as RelativeAddrMode
      const toAddr = lea(ctx, reg, offset)

      const fromOffset = BigInt(from.offset ?? 0)
      if (from.reg === 'rax') {
        dataview.setBytesAt(toAddr, ctx.cVmContext.AX + fromOffset)
      } else if (from.reg === 'rbp') {
        dataview.setBytesAt(toAddr, ctx.cVmContext.BP + fromOffset)
      } else {
        // Unsupported
      }
    }

    // R[reg] = Mem[reg+offset]
    // from's offset is ignore
    if (from.type === 'relative' && to.type === 'register') {
      const { reg, offset } = from as RelativeAddrMode
      const fromAddr = lea(ctx, reg, offset)

      if (to.reg === 'rax') {
        ctx.cVmContext.AX = dataview.getBytesAt(fromAddr)
      } else if (to.reg === 'rbp') {
        ctx.cVmContext.BP = dataview.getBytesAt(fromAddr)
      } else {
        // Unsupported
      }
    }

    // M[reg+offset] = M[reg+offset]
    if (from.type === 'relative' && to.type === 'relative') {
      const { reg: fReg, offset: fOff } = from as RelativeAddrMode
      const fromAddr = lea(ctx, fReg, fOff)

      const { reg: tReg, offset: tOff } = to as RelativeAddrMode
      const toAddr = lea(ctx, tReg, tOff)

      dataview.setBytesAt(toAddr, dataview.getBytesAt(fromAddr))
    }

    ctx.cVmContext.PC++
  },

  /**
   * Calculates `value` and puts it into `dest`.
   * @param cmd
   * @param ctx
   */
  LeaCommand: function* (cmd, ctx) {
    const leaCmd = cmd as LeaCommand
    const { dataview } = ctx.cVmContext
    const { value, dest } = leaCmd

    const toAddr = lea(ctx, dest.reg, dest.offset)
    const computedVal = lea(ctx, value.reg, value.offset)

    dataview.setBytesAt(toAddr, BigInt(computedVal))

    ctx.cVmContext.PC++
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
    ctx.cVmContext.PC++
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

    const arg1 = dataview.getBytesAt(lea(ctx, 'rsp', -16))
    const arg2 = dataview.getBytesAt(lea(ctx, 'rsp', -8))
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
        res = BigInt(arg1 == arg2)
        break
      case '!=':
        res = BigInt(arg1 != arg2)
        break
      case '||':
        res = BigInt(arg1 || arg2)
        break
      case '&&':
        res = BigInt(arg1 && arg2)
        break
    }
    dataview.setBytesAt(lea(ctx, 'rsp', -16), res)

    ctx.cVmContext.SP -= BigInt(8)
    ctx.cVmContext.PC++
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

    const arg = dataview.getBytesAt(lea(ctx, 'rsp', -8))
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
    dataview.setBytesAt(lea(ctx, 'rsp', -8), res)

    ctx.cVmContext.PC++
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
    dataview.setBytesAt(ctx.cVmContext.SP, ctx.cVmContext.PC + BigInt(1))
    ctx.cVmContext.SP += BigInt(8)

    // Pushes and save the caller's rbp onto stack
    // Then, set the BP to the current SP
    // to mark the start of a new function frame
    // i.e. rbp points to the caller's rbp
    dataview.setBytesAt(ctx.cVmContext.SP, ctx.cVmContext.BP)
    ctx.cVmContext.BP = ctx.cVmContext.SP

    ctx.cVmContext.SP += BigInt(8)
    ctx.cVmContext.PC = addr
  },

  /**
   * Processes the `ReturnCommand` microcode within the context of a running
   * program. Technically, it reverses the operations that `CallCommand` did
   * on the memory.
   *
   * It performs the following:
   * - Pops bp off stack
   * - Pops return address off stack
   * @param cmd
   * @param ctx
   */
  ReturnCommand: function* (cmd, ctx) {
    const { dataview } = ctx.cVmContext

    // Restore SP
    // Pops bp off stack
    // Pops return address
    ctx.cVmContext.SP -= BigInt(16)

    const currFrameBP = ctx.cVmContext.BP

    // restore caller's BP
    ctx.cVmContext.BP = dataview.getBytesAt(currFrameBP)
    ctx.cVmContext.PC = dataview.getBytesAt(currFrameBP - BigInt(8))
  },

  /**
   * Processes the `ExecuteBuiltInFxCommand` microcode within the context of a running
   * program
   * @param cmd
   * @param ctx
   */
  ExecuteBuiltInFxCommand: function* (cmd, ctx) {},

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

function debugPrint(str: string, ctx: Context): void {
  if (ctx.externalBuiltIns?.rawDisplay) {
    ctx.externalBuiltIns.rawDisplay(undefined, str, ctx)
  } else {
    console.log(str)
  }
}
