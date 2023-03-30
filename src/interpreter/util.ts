import { Context } from "../types"

/**
 * Calculates the address of a register + offset
 * @param ctx
 * @param reg
 * @param offset
 * @returns address
 */
export function lea(ctx: Context, reg: 'rbp' | 'rsp' | 'rip' | 'rax', offset: number): bigint {
  if (reg === 'rbp') {
    return ctx.cVmContext.BP + BigInt(offset)
  }

  if (reg === 'rsp') {
    return ctx.cVmContext.SP + BigInt(offset)
  }

  if (reg === 'rax') {
    // Ignore offset, since AX is not
    // a 'controlled' reg like rbp or rbp
    return ctx.cVmContext.AX
  }

  throw new Error()
}
