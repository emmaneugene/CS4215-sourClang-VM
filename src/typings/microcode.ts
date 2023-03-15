/**
 * Collection of recognised microcode.
 *
 * This is the API between the compiler and interpreter.
 */
export interface MicrocodeMap {
  MovCommand: MovCommand
  LoadCommand: LoadCommand
  BinopCommand: BinopCommand
  CallCommand: CallCommand
  ReturnCommand: ReturnCommand
  PushCommand: PushCommand
}

/* Union types in MicrocodeMap */
export type Microcode = MicrocodeMap[keyof MicrocodeMap]

/* Base of all commands */
export interface BaseCommand {
  type: string
}

export interface MovCommand extends BaseCommand {
  type: 'MovCommand'
  numBytes: number
  from: any // ?
  to: string
}

export interface LoadCommand extends BaseCommand {
  type: 'LoadCommand'
  value: number
}

export interface BinopCommand extends BaseCommand {
  type: 'BinopCommand'
  op: '+' | '-' | '*' | '/' | '%'
}

export interface CallCommand extends BaseCommand {
  type: 'CallCommand'
  instr: number
}

export interface ReturnCommand extends BaseCommand {
  type: 'ReturnCommand'
}

export interface PushCommand extends BaseCommand {
  type: 'PushCommand'
  from: any
}
