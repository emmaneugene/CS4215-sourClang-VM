import { Microcode } from './microcode'
/**
 * Represents the VM needed for C to run, which is passed
 * around during evaluation.
 */
export interface CVMContext {
  /* Determines if the virtual machine is still running. */
  isRunning: boolean

  /**
   * Program counter. This number should be an index
   * into the `instrs`.
   */
  PC: bigint

  /**
   * Base pointer of the current function.
   */
  BP: bigint

  /**
   * Current top of the operand stack.
   */
  SP: bigint

  /**
   * The return value.
   */
  AX: bigint

  /**
   * bottom of stack (default is 0)
   */
  BOT: bigint

  /**
   * List of instructions.
   * TODO: Should go into dataview?
   */
  instrs: Microcode[]

  dataview: MemoryModel
}

export class MemoryModel {
  private dv: DataView

  private SIZE: number
  
  /**
   * Impose a limit on the size of the stack
  */
  private STACK_LIMIT: number

  private static DEFAULT_SIZE = 2 ** 13 // 8KiB
  /**
   * @param size Defaults to 1KB
   */
  constructor(size: number = MemoryModel.DEFAULT_SIZE) {
    this.dv = new DataView(new ArrayBuffer(size))
    this.SIZE = size
    this.STACK_LIMIT = (size * 3 / 4) as number
  }

  getBytesAt(addr: bigint): bigint {
    return this.dv.getBigUint64(Number(addr))
  }

  setBytesAt(addr: bigint, v: bigint): void {
    this.dv.setBigUint64(Number(addr), v)
  }

  debug(sp?: bigint, from: number = 0, to: number = this.SIZE): string {
    let rv = ''
    for (let i = Math.max(from, 0); i < Math.min(to, this.SIZE); i += 8) {
      const hexStr = this.dv.getBigUint64(i).toString(16).padStart(16, '0')
      let s = ''
      for (let j = 0; j < hexStr.length; j += 2) {
        s += hexStr.substring(j, j + 2) + ' '
      }
      rv += `${i}\t: ${s} ${Number(sp) === i ? '<-- SP' : ''}\n`
    }
    return rv
  }
}
