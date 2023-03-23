import { Microcode } from './microcode'
/**
 * Represents the VM needed for C to run, which is passed
 * around during evaluation.
 */
export interface CVMContext {
  /* Determines if the virtual machine is still running. */
  isRunning: boolean

  /**
   * Program counter. This number should be an address/index
   * into the dataview. The value at dataview should point to
   * some valid instruction location.
   *
   * In other words:
   * dataview[PC] = <some instruction node>
   */
  PC: number

  /** The returned value of `main` */
  returnValue: number

  /**
   * List of instructions.
   * TODO: Should go into dataview?
   */
  instrs: Microcode[]

  dataview: DataView
}
