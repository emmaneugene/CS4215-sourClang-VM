import {
  BinopCommand,
  CallCommand,
  ExitCommand,
  LeaCommand,
  MovCommand,
  MovImmediateCommand,
  OffsetRspCommand,
  Registers,
  ReturnCommand,
  UnopCommand
} from '../typings/microcode'
import { GotoRelativeCommand, JumpOnFalseRelativeCommand } from './../typings/microcode'

// TODO: use a record
type RegOffset = [Registers, number]

export const MICROCODE = {
  movImm: (value: number, encoding: '2s' | 'ieee'): MovImmediateCommand => ({
    type: 'MovImmediateCommand',
    value,
    encoding
  }),

  movMemToMem: (from: RegOffset, to: RegOffset): MovCommand => ({
    type: 'MovCommand',
    from: {
      type: 'relative',
      reg: from[0],
      offset: from[1]
    },
    to: {
      type: 'relative',
      reg: to[0],
      offset: to[1]
    }
  }),

  movMemToReg: (reg: Registers, from: RegOffset): MovCommand => ({
    type: 'MovCommand',
    from: {
      type: 'relative',
      reg: from[0],
      offset: from[1]
    },
    to: {
      type: 'register',
      reg
    }
  }),

  movRegToMem: (reg: Registers, mem: RegOffset): MovCommand => ({
    type: 'MovCommand',
    from: {
      type: 'register',
      reg: reg
    },
    to: {
      type: 'relative',
      reg: mem[0],
      offset: mem[1]
    }
  }),

  offsetRSP: (value: number): OffsetRspCommand => ({
    type: 'OffsetRspCommand',
    value
  }),

  binop: (op: BinopCommand['op']): BinopCommand => ({
    type: 'BinopCommand',
    op: op
  }),

  leal: (value: RegOffset, to: RegOffset): LeaCommand => ({
    type: 'LeaCommand',
    value: {
      reg: value[0],
      offset: value[1]
    },
    dest: {
      reg: to[0],
      offset: to[1]
    }
  }),

  unop: (op: UnopCommand['op']): UnopCommand => ({
    type: 'UnopCommand',
    op
  }),

  call: (addr: bigint): CallCommand => ({
    type: 'CallCommand',
    addr
  }),

  return: {
    type: 'ReturnCommand'
  } as ReturnCommand,

  jofr: (relativeValue: bigint): JumpOnFalseRelativeCommand => ({
    type: 'JumpOnFalseRelativeCommand',
    relativeValue
  }),

  gotor: (relativeValue: bigint): GotoRelativeCommand => ({
    type: 'GotoRelativeCommand',
    relativeValue
  }),

  exit: {
    type: 'ExitCommand'
  } as ExitCommand
}
