/**
 * Represents the runtime context, which is passed
 * around during evaluation.
 *
 * This is embedded into Context.
 *
 * See also: `Context.externalContext`
 */
export interface RuntimeContext {
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
  programReturnValue: number

  dataview: DataView
}
