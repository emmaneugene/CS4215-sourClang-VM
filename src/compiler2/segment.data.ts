import { WORD_SIZE } from '../constants'
import { Context } from '../types'

export class DataSegment {
  private startingAddr: number
  private totalSize: number

  constructor(args: { startingAddr: number; totalSize: number }) {
    this.startingAddr = args.startingAddr
    // includes rodata and writable data
    this.totalSize = args.totalSize
  }

  getNextAvailableAddr(): number {
    return this.totalSize
  }

  setupSegment(_ctx: Context): number {
    return this.totalSize
  }

  getFormattedGlobalVars(ctx: Context): string[] {
    const res: string[] = []
    for (let addr = this.startingAddr; addr < this.totalSize; addr += WORD_SIZE) {
      const v = ctx.cVmContext.dataview.getBytesAt(BigInt(addr))
      res.push(`${addr}: 0x${v.toString(16).padStart(16, '0')}`)
    }
    return res
  }
}
