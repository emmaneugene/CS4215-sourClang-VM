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
  PC: number

  /**
   * Base pointer of the current function.
   */
  BP: number

  /**
   * Current top of the operand stack.
   */
  SP: number

  /**
   * The return value.
   */
  AX: number

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
   * @param size Defaults to 1KB
   */
  constructor(size: number = 2 ** 10) {
    this.dv = new DataView(new ArrayBuffer(size))
    this.SIZE = size
  }

  getBytesAt(addr: number): bigint {
    return this.dv.getBigUint64(addr)
  }

  setBytesAt(addr: number, v: bigint): void {
    this.dv.setBigUint64(addr, v)
  }

  debug(sp?: number, from: number = 0, to: number = this.SIZE): string {
    let rv = ''
    for (let i = Math.max(from, 0); i < Math.min(to, this.SIZE); i += 8) {
      const hexStr = this.dv.getBigUint64(i).toString(16).padStart(8, '0')
      let s = ''
      for (let j = 0; j < hexStr.length; j += 2) {
        s += hexStr.substring(j, j + 2) + ' '
      }
      rv += `${i}\t: ${s} ${sp === i ? '<-- SP' : ''}\n`
    }
    return rv
  }
}
