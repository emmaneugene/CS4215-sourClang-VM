import {
  BinopCommand,
  CallCommand,
  LeaCommand,
  MovCommand,
  MovImmediateCommand,
  OffsetRspCommand,
  ReturnCommand,
  UnopCommand
} from '../typings/microcode'
type RegOffset = ['rsp' | 'rbp' | 'rax', number]

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

  movMemToReg: (reg: 'rbp' | 'rax', from: RegOffset): MovCommand => ({
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

  movRegToMem: (reg: RegOffset, mem: RegOffset): MovCommand => ({
    type: 'MovCommand',
    from: {
      type: 'register',
      reg: reg[0],
      offset: reg[1]
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

  leal: (from: RegOffset, to: RegOffset): LeaCommand => ({
    type: 'LeaCommand',
    value: {
      reg: from[0],
      offset: from[1]
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
  } as ReturnCommand
}
