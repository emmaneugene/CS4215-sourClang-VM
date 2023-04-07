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
  PC: bigint

  /**
   * Base pointer of the current function.
   */
  BP: bigint

  /**
   * Current top of the operand stack.
   */
  SP: bigint

  /**
   * The return value.
   */
  AX: bigint

  /**
   * bottom of stack (default is 0)
   */
  BOT: bigint

  /**
   * List of instructions.
   * TODO: Should go into dataview?
   */
  instrs: Microcode[]

  dataview: MemoryModel
}

/**
 * Represents the total memory allocated a running program. The memory model 
 * comprises a stack and heap. We enforce a stack limit of 3 / 4 of the total
 * size, with the remainder reserved for the heap.
 */
export class MemoryModel {
  private dv: DataView

  private SIZE: number

  /**
   * Impose a limit on the size of the stack
  */
  private STACK_LIMIT: number

  private static DEFAULT_SIZE = 2 ** 13 // 8KiB

  /**
   * @param size Defaults to 8KiB
  */
  constructor(size: number = MemoryModel.DEFAULT_SIZE) {
    this.dv = new DataView(new ArrayBuffer(size))
    this.SIZE = size
    this.STACK_LIMIT = (size * 3 / 4) as number
  }

  getSize(): number {
    return this.SIZE
  }

  getStackLimit(): number {
    return this.STACK_LIMIT
  }

  getHeapLimit(): number {
    return this.SIZE - this.STACK_LIMIT
  }

  getBytesAt(addr: bigint): bigint {
    return this.dv.getBigUint64(Number(addr))
  }

  setBytesAt(addr: bigint, v: bigint): void {
    this.dv.setBigUint64(Number(addr), v)
  }

  debug(sp?: bigint, from: number = 0, to: number = this.SIZE): string {
    let rv = ''
    for (let i = Math.max(from, 0); i < Math.min(to, this.SIZE); i += 8) {
      const hexStr = this.dv.getBigUint64(i).toString(16).padStart(16, '0')
      let s = ''
      for (let j = 0; j < hexStr.length; j += 2) {
        s += hexStr.substring(j, j + 2) + ' '
      }
      rv += `${i}\t: ${s} ${Number(sp) === i ? '<-- SP' : ''}\n`
    }
    return rv
  }
}

/**
 * Manages the allocation of memory on the heap.
 */
export class Allocator {
  private memory: MemoryModel

  private limit: number

  private heapStart: number

  private tracker: HeapEntry[]

  constructor(memory: MemoryModel) {
    this.memory = memory
    this.limit = memory.getHeapLimit()
    this.heapStart = this.memory.getSize()
  }

  allocate(size: number): bigint {
    // TODO
  }

  deallocate(addr: bigint): void {
    // TODO
  }
}

/**
 * Represents a chunk of allocated memory in the heap
 */
class HeapEntry {
  private size: number
  
  private addr: number

  constructor(size: number, addr: number) {
    this.size = size
    this.addr = addr
  }

  getSize(): number {
    return this.size
  }

  getAddr(): number {
    return this.addr
  }
}