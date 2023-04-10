import { Context } from '../types'

export class DataSegment {
  private startingAddr: number
  private totalSize: number

  constructor(args: { startingAddr: number; totalSize: number }) {
    this.startingAddr = args.startingAddr
    this.totalSize = args.totalSize
  }

  getNextAvailableAddr(): number {
    return this.startingAddr + this.totalSize
  }

  setupSegment(_ctx: Context): number {
    return this.startingAddr + this.totalSize
  }
}
