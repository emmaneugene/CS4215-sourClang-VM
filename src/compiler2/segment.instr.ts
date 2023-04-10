import { WORD_SIZE } from '../constants'
import { Microcode } from '../typings/microcode'

export class InstrSegment {
  private startingAddr: number

  private stackFrameSizePerFunction: Record<string, number>

  private instrsLs: Microcode[] = []

  private labeledInstr: Record<string, number> = {}

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

  setGlobalDataInitialisationInstrs(instrs: Microcode[]): void {}

  /**
   * Get stack frame size for a given
   * function.
   */
  getStackFrameSizeForFunction(functionName: string): number {
    return this.stackFrameSizePerFunction[functionName]
  }
}
