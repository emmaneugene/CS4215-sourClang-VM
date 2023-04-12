import { WORD_SIZE } from '../constants'
import { prettyPrintInstr } from '../interpreter/util'
import { Context } from '../types'
import { Microcode } from '../typings/microcode'
import { MICROCODE } from './utils'

export class InstrSegment {
  private startingAddr: number

  private stackFrameSizePerFunction: Record<string, number>

  private instrsLs: Microcode[] = []

  private labeledInstr: Record<string, number> = {}

  private startingPC: number | undefined

  constructor(args: {
    instrStartingOffset: number
    stackFrameSizePerFunction: Record<string, number>
  }) {
    this.startingAddr = args.instrStartingOffset
    this.stackFrameSizePerFunction = args.stackFrameSizePerFunction
  }

  getNextPos(): number {
    return this.instrsLs.length
  }

  /**
   * Inserts the given instruction into current
   * set of instructions.
   *
   * @return the position where the given instruction
   * is
   */
  addInstr(instr: Microcode): number {
    this.instrsLs.push(instr)
    const instrPos = this.instrsLs.length - 1
    return instrPos
  }

  /**
   * Inserts the given instruction list into current
   * set of instructions.
   *
   * @return the position where the given instruction
   * is
   */
  addInstrs(instrs: Microcode[]): number {
    this.instrsLs.push(...instrs)
    const instrPos = this.instrsLs.length - 1
    return instrPos
  }

  /**
   * Labels an instruction with its position.
   */
  labelInstr(name: string, instrPos: number) {
    this.labeledInstr[name] = instrPos
  }

  /**
   * Returns the a labelled instruction's
   * memory address.
   */
  getLabelledInstrAddr(name: string): number {
    return this.startingAddr + WORD_SIZE * this.labeledInstr[name]
  }

  setGlobalDataInitialisationInstrs(globalInstrs: Microcode[]): void {
    const globalVarInitInstrPos = this.getNextPos()
    this.startingPC = this.startingAddr + WORD_SIZE * globalVarInitInstrPos
    this.addInstrs([
      ...globalInstrs,
      MICROCODE.call(BigInt(this.getLabelledInstrAddr('main'))),
      MICROCODE.exit
    ])
  }

  /**
   * Get stack frame size for a given
   * function.
   */
  getStackFrameSizeForFunction(functionName: string): number {
    return this.stackFrameSizePerFunction[functionName]
  }

  getInstrs(): Microcode[] {
    return this.instrsLs
  }

  getStartingPC(): number | undefined {
    return this.startingPC
  }

  /**
   * Inserts instr of a program.
   *
   * Each instruction takes 8 bytes, and is allocated space
   * on the memory model.
   */
  setupSegment(ctx: Context): number {
    const { dataview } = ctx.cVmContext

    let nextAvailableAddr = this.startingAddr
    this.instrsLs.forEach((_instr, index) => {
      dataview.setBytesAt(BigInt(nextAvailableAddr), BigInt(index))
      nextAvailableAddr += WORD_SIZE
    })

    return nextAvailableAddr
  }

  getFormattedInstrs(): string[] {
    const res: string[] = []
    for (let i = 0; i < this.instrsLs.length; i++) {
      const addr = this.startingAddr + i * WORD_SIZE
      const instr = this.instrsLs[i]
      res.push(`${addr}: <instr at idx ${i}}----> ${prettyPrintInstr[instr.type](instr)}`)
    }
    return res
  }
}
