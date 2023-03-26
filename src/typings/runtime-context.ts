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

  dataview: DataView
}
