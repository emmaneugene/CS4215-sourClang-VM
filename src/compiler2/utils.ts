import { TypeList } from '../ast/ast.core'
import { WORD_SIZE } from '../constants'
import {
  BinopCommand,
  CallCommand,
  CastCommand,
  ExitCommand,
  GotoRelativeCommand,
  JumpOnFalseRelativeCommand,
  LeaCommand,
  Microcode,
  MovCommand,
  MovImmediateCommand,
  OffsetRspCommand,
  Registers,
  ReturnCommand,
  StackPointer,
  UnopCommand
} from '../typings/microcode'

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

  movMemToReg: (from: RegOffset, reg: Registers): MovCommand => ({
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

  binop: (
    op: BinopCommand['op'],
    leftEncoding: '2s' | 'ieee',
    rightEncoding: '2s' | 'ieee'
  ): BinopCommand => ({
    type: 'BinopCommand',
    op: op,
    leftEncoding,
    rightEncoding
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

  unop: (op: UnopCommand['op'], encoding: '2s' | 'ieee'): UnopCommand => ({
    type: 'UnopCommand',
    op,
    encoding
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
  } as ExitCommand,

  castFromIntToFloat: {
    type: 'CastCommand',
    from: '2s',
    to: 'ieee'
  } as CastCommand,

  castFromFloatToInt: {
    type: 'CastCommand',
    from: 'ieee',
    to: '2s'
  } as CastCommand,

  pushMemOntoStack: (from: RegOffset): Microcode[] => [
    MICROCODE.movMemToMem(from, [StackPointer, 0]),
    MICROCODE.offsetRSP(WORD_SIZE)
  ],

  popFromStack: (to?: RegOffset): Microcode[] => {
    if (!to) {
      return [MICROCODE.offsetRSP(-WORD_SIZE)]
    } else {
      return [
        MICROCODE.movMemToMem([StackPointer, -WORD_SIZE], to),
        MICROCODE.offsetRSP(-WORD_SIZE)
      ]
    }
  }
}

export type GetIdentifierFunction = (name: string) => TypeList

export type GetInstrAddress = (name: string) => number
