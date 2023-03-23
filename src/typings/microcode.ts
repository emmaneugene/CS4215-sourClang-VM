/**
 * Collection of recognised microcode.
 *
 * This is the API between the compiler and interpreter.
 */
export interface MicrocodeMap {
  MovImmediateCommand: MovImmediateCommand
  MovCommand: MovCommand
  OffsetRspCommand: OffsetRspCommand
  BinopCommand: BinopCommand
  UnopCommand: UnopCommand
  CallCommand: CallCommand
  ReturnCommand: ReturnCommand
  ExitCommand: ExitCommand
}

/* Union types in MicrocodeMap */
export type Microcode = MicrocodeMap[keyof MicrocodeMap]

/* Base of all commands */
export interface BaseCommand {
  type: string
}

/**
 * Moves an immediate value onto RSP.
 */
export interface MovImmediateCommand {
  type: 'MovImmediateCommand'
  value: number

  /**
   * This field indicates how to store the `value in binary.
   *
   * 'ieee': refers to using IEEE format
   * '2s': refers to using the 2s complement
   */
  encoding: 'ieee' | '2s'
}

/**
 * Moves a value from the one memory location to
 * another memory location.
 */
export interface MovCommand extends BaseCommand {
  type: 'MovCommand'
  from: MovAddressingMode
  to: MovAddressingMode
}

/**
 * Sets the rsp by:
 *
 * `rsp = rsp + value`
 */
export interface OffsetRspCommand extends BaseCommand {
  type: 'OffsetRSP'
  value: number
}

/**
 * Encapusulates the various binary operators.
 */
export interface BinopCommand extends BaseCommand {
  type: 'BinopCommand'
  op: '+' | '-' | '*' | '/' | '%' | '>' | '>=' | '<' | '<=' | '==' | '!=' | '||' | '&&'
}

/**
 * Encapsulates the unary operators.
 *
 * Note: `*` here refers to the dereference operator.
 */
export interface UnopCommand extends BaseCommand {
  type: 'UnopCommand'
  op: '*' | '!' | 'sizeof' | '++' | '--' | '-'
}

/**
 * A helper interface to define the possible addressing modes.
 *
 * See also the type guard `isAbsAddressingMode()`
 */
export type MovAddressingMode =
  | {
      type: 'absolute'
      address: number
    }
  | {
      type: 'relative'
      reg: 'rsp' | 'rbp'
      offset: number
    }

/**
 * Calls some function f, where f is located at `addr`.
 */
export interface CallCommand extends BaseCommand {
  type: 'CallCommand'
  addr: number
}

/**
 * Returns from some function call to previous one.
 */
export interface ReturnCommand extends BaseCommand {
  type: 'ReturnCommand'
}

export interface ExitCommand extends BaseCommand {
  type: 'ExitCommand'
}
