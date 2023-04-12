import { Context } from '../types'
import {
  BasePointer,
  BinopCommand,
  BottomOfMemory,
  CallCommand,
  CastCommand,
  ExecuteBuiltInFxCommand,
  GotoRelativeCommand,
  JumpOnFalseRelativeCommand,
  LeaCommand,
  Microcode,
  MovCommand,
  MovImmediateCommand,
  OffsetRspCommand,
  Registers,
  ReturnValue,
  StackPointer,
  UnopCommand
} from '../typings/microcode'

export const getRegister = (ctx: Context) => ({
  [StackPointer]: ctx.cVmContext.SP,
  [BasePointer]: ctx.cVmContext.BP,
  [ReturnValue]: ctx.cVmContext.AX,
  [BottomOfMemory]: ctx.cVmContext.BOT
})

/**
 * Sets the value of a register in the current context
 * @param ctx
 * @param reg
 * @param value
 */
export const setRegister = (ctx: Context, reg: Registers, value: bigint) => {
  switch (reg) {
    case StackPointer:
      ctx.cVmContext.SP = value
      break
    case BasePointer:
      ctx.cVmContext.BP = value
      break
    case ReturnValue:
      ctx.cVmContext.AX = value
      break
    case BottomOfMemory:
      ctx.cVmContext.BOT = value
      break
  }
}

/**
 * Calculates the address of a register + offset
 * lea stands for load effective address
 * an x86 assembly language instruction that loads a memory address into a register
 * @param ctx
 * @param reg
 * @param offset
 * @returns address
 */
export function calculateAddress(ctx: Context, reg: Registers, offset: number): bigint {
  return getRegister(ctx)[reg] + BigInt(offset)
}

/**
 * Returns a nicely formatted string for each type of microcode.
 */
export const prettyPrintInstr: { [cmd: string]: (cmd: Microcode) => string } = {
  ExitCommand: function (_cmd) {
    return 'ExitCommand'
  },

  MovImmediateCommand: function (cmd) {
    const movCmd = cmd as MovImmediateCommand
    const { value, encoding } = movCmd
    return `MovImmediateCommand: ${value} in '${encoding}'`
  },

  MovCommand: function (cmd) {
    const movCmd = cmd as MovCommand
    const { from, to } = movCmd

    if (from.type === 'register' && to.type === 'register') {
      return `MovCommand: Reg[${from}] -> Reg[${to}]`
    }

    // Mem[reg+offset] = Reg[reg] + offset
    /**
     * Used for the following cases:
     * Returning Values: Mem[reg+offset] = AX
     * Storing variable value to memory: Mem[reg+offset] = BP + offset
     */
    if (from.type === 'register' && to.type === 'relative') {
      return `MovCommand: Reg[${from.reg}] -> Mem[${to.reg}${getNumberWithSign(to.offset)}]`
    }

    // R[reg] = Mem[reg+offset]
    // from's offset is ignore
    if (from.type === 'relative' && to.type === 'register') {
      return `MovCommand: Mem[${from.reg}${getNumberWithSign(from.offset)}] -> Reg[${to.reg}]`
    }

    // M[reg+offset] = M[reg+offset]
    if (from.type === 'relative' && to.type === 'relative') {
      return `MovCommand: Mem[${from.reg}${getNumberWithSign(from.offset)}] -> Mem[${
        to.reg
      }${getNumberWithSign(to.offset)}]`
    }

    return 'MovCommand: ???'
  },

  LeaCommand: function (cmd) {
    const leaCmd = cmd as LeaCommand
    const { value, dest } = leaCmd
    return `LeaCommand: ${value.reg}${getNumberWithSign(value.offset)} -> ${
      dest.reg
    }${getNumberWithSign(dest.offset)}`
  },

  OffsetRspCommand: function (cmd) {
    const offsetCmd = cmd as OffsetRspCommand
    return `OffsetRspCommand: ${getNumberWithSign(offsetCmd.value)}`
  },

  BinopCommand: function (cmd) {
    const binopCmd = cmd as BinopCommand
    return `BinopCommand: ${binopCmd.op} (encL: ${binopCmd.leftEncoding}, enR: ${binopCmd.rightEncoding})`
  },

  UnopCommand: function (cmd) {
    const unopCmd = cmd as UnopCommand
    return `UnopCommand: ${unopCmd.op} (enc: ${unopCmd.encoding})`
  },

  CallCommand: function (cmd) {
    const callCmd = cmd as CallCommand
    return `CallCommand: ${callCmd.addr}`
  },

  ReturnCommand: function (_cmd) {
    return `ReturnCommand`
  },

  ExecuteBuiltInFxCommand: function (cmd) {
    const xcmd = cmd as ExecuteBuiltInFxCommand
    return `ExecuteBuiltInFxCommand: ${xcmd.name}`
  },

  JumpOnFalseRelativeCommand: function (cmd) {
    const xcmd = cmd as JumpOnFalseRelativeCommand
    return `JumpOnFalseRelativeCommand: ${xcmd.relativeValue}`
  },

  GotoRelativeCommand: function (cmd) {
    const xcmd = cmd as GotoRelativeCommand
    return `GotoRelativeCommand: ${xcmd.relativeValue}`
  },

  CastCommand: function (cmd) {
    const xcmd = cmd as CastCommand
    const { from, to } = xcmd

    return `CastCommand: ${xcmd} ${from}->${to}`
  }
}

/**
 * Returns a positive number with the + sign.
 * Returns a negative number with the - sign
 */
function getNumberWithSign(n: number): string {
  if (n >= 0) {
    return `+${n}`
  } else {
    return `${n}`
  }
}
