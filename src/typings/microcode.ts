/**
 * Collection of recognised microcode.
 *
 * This is the API between the compiler and interpreter.
 */
export interface MicrocodeMap {
  MovImmediateCommand: MovImmediateCommand
  MovCommand: MovCommand
  LeaCommand: LeaCommand
  OffsetRspCommand: OffsetRspCommand
  BinopCommand: BinopCommand
  UnopCommand: UnopCommand
  CallCommand: CallCommand
  ReturnCommand: ReturnCommand
  ExitCommand: ExitCommand
  ExecuteBuiltInFxCommand: ExecuteBuiltInFxCommand
  JumpOnFalseRelativeCommand: JumpOnFalseRelativeCommand
  GotoRelativeCommand: GotoRelativeCommand
}

/* Union types in MicrocodeMap */
export type Microcode = MicrocodeMap[keyof MicrocodeMap]

export const StackPointer = 'rsp'
export const BasePointer = 'rbp'
export const ReturnValue = 'rax'
export const BottomOfMemory = 'bot'

/**
 * Represents the various registers we have
 * RSP = Stack Pointer
 * RBP = Base Pointer
 * RAX = Return Value
 * TOP = Top of the stack
 */
export type Registers = typeof StackPointer | typeof BasePointer | typeof ReturnValue | typeof BottomOfMemory

/* Base of all commands */
export interface BaseCommand {
  type: string
}

/**
 * Moves an immediate value onto RSP.
 */
export interface MovImmediateCommand extends BaseCommand {
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
  type: 'OffsetRspCommand'
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
  op: '!' | '-'
}

/**
 * Computes a memory address at runtime and
 * pushes it to dest.reg + dest.offset.
 *
 * Should evaluate to:
 * `M[dest.reg + dest.offset] = value.reg + offset`
 */
export interface LeaCommand extends BaseCommand {
  type: 'LeaCommand'
  value: {
    reg: Registers
    offset: number
  }
  dest: {
    reg: Registers
    offset: number
  }
}

/**
 * A helper interface to define the possible addressing modes.
 */
export type MovAddressingMode = RegisterAddrMode | RelativeAddrMode

export type RegisterAddrMode = {
  type: 'register'
  reg: Registers
  offset?: number
}
export type RelativeAddrMode = {
  type: 'relative'
  reg: Registers
  offset: number
}

/**
 * Calls some function f, where f is located at `addr`.
 */
export interface CallCommand extends BaseCommand {
  type: 'CallCommand'
  addr: bigint
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

/** Supported built-in functions. */
export type BuiltInFxName = 'printf' | 'scanf' | 'malloc' | 'free'

export interface ExecuteBuiltInFxCommand extends BaseCommand {
  type: 'ExecuteBuiltInFxCommand'
  name: BuiltInFxName
}

export interface JumpOnFalseRelativeCommand extends BaseCommand {
  type: 'JumpOnFalseRelativeCommand'
  relativeValue: bigint
}

export interface GotoRelativeCommand extends BaseCommand {
  type: 'GotoRelativeCommand'
  relativeValue: bigint
}
