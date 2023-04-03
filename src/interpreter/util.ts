import { Context } from '../types'
import {
  BasePointer,
  BottomOfMemory,
  Registers,
  ReturnValue,
  StackPointer
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
