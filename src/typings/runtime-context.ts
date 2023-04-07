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

  private heapStart: bigint

  private heapCurr: bigint

  private tracker: HeapEntry[]

  constructor(memory: MemoryModel) {
    this.memory = memory
    this.limit = memory.getHeapLimit()
    this.heapStart = BigInt(this.memory.getSize())
    this.heapCurr = this.heapStart
    this.tracker = []
  }

  /**
   * Allocates `size` bytes of memory on the heap and returns the address
   * @param size The size of the memory to allocate (in bytes)
   * @returns address of the allocated memory
   */
  allocate(size: number): bigint {
    if (this.heapCurr - BigInt(size) < this.heapStart) {
      // TODO: Heap overflow error handling
      throw new Error('Out of memory')
    }

    let entry: HeapEntry = new HeapEntry(size, this.heapCurr - BigInt(size))
    this.tracker.push(entry)
    this.heapCurr = entry.getAddr()

    return this.heapCurr
  }

  /**
   * Deallocates the chunk of memory stores at `addr` and shrinks the heap if possible
   * @param addr The address of the memory to free
   */
  deallocate(addr: bigint): void {
    let entry: HeapEntry | undefined = this.tracker.find(e => e.getAddr() === addr)
    if (entry === undefined) {
      throw new Error('Attempted to free unallocated memory')
    }

    this.tracker = this.tracker.filter(e => e.getAddr() !== addr)
    this.heapCurr = this.tracker.length > 0 ? this.tracker.at(-1).getAddr() : this.heapStart
  }
}

/**
 * Represents a chunk of allocated memory in the heap
 */
class HeapEntry {
  private size: number
  
  private addr: bigint

  constructor(size: number, addr: bigint) {
    this.size = size
    this.addr = addr
  }

  getSize(): number {
    return this.size
  }

  getAddr(): bigint {
    return this.addr
  }
}