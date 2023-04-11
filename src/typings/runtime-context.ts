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

  /**
   * Returns the instructions in a
   * displayable format.
   */
  formattedInstrs(): string[]

  /**
   * Returns the rodata segment in a
   * displayable format.
   */
  formattedRODataSegment(): string[]

  /**
   * Returns the data segment in a
   * displayable format.
   */
  formattedDataSegment(): string[]
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

  private allocator: Allocator

  /**
   * @param size Defaults to 8KiB
   */
  constructor(size: number = MemoryModel.DEFAULT_SIZE) {
    this.dv = new DataView(new ArrayBuffer(size))
    this.SIZE = size
    this.STACK_LIMIT = ((size * 3) / 4) as number
    this.allocator = new Allocator(BigInt(this.STACK_LIMIT), BigInt(this.SIZE))
  }

  getSize(): number {
    return this.SIZE
  }

  getStackLimit(): number {
    return this.STACK_LIMIT
  }

  getBytesAt(addr: bigint): bigint {
    return this.dv.getBigUint64(Number(addr))
  }

  setBytesAt(addr: bigint, v: bigint): void {
    this.dv.setBigUint64(Number(addr), v)
  }

  getBytesAsFloat64At(addr: number): number {
    return this.dv.getFloat64(addr)
  }

  setBytesAsFloat64At(addr: number, v: number): void {
    return this.dv.setFloat64(addr, v)
  }

  allocate(size: bigint): bigint {
    return this.allocator.allocate(size)
  }

  free(addr: bigint): void {
    this.allocator.deallocate(addr)
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
 * Represents a chunk of allocated memory in the heap
 */
type HeapEntry = {
  start: bigint
  end: bigint
}

/**
 * Keeps track of allocated heap memory in an interval list. For simplicity, the
 * allocator assigns memory from low-high addresses.
 *
 * In order to minimize fragmentation, the allocator performs a linear search
 * over the interval list to find the smallest free interval.
 */
class Allocator {
  private heapStart: bigint

  private heapEnd: bigint

  private tracker: HeapEntry[]

  constructor(heapStart: bigint, heapEnd: bigint) {
    this.heapStart = heapStart
    this.heapEnd = heapEnd
    this.tracker = []
  }

  /**
   * Allocates `size` bytes of memory on the heap and returns the address
   * @param size The size of the memory to allocate (in bytes)
   * @returns address of the allocated memory, or 0 if unsuccessful
   */
  allocate(size: bigint): bigint {
    if (size > this.heapEnd - this.heapStart) {
      return BigInt(0)
    }

    if (this.tracker.length === 0) {
      this.tracker.push({ start: this.heapStart, end: this.heapStart + size })
      return this.heapStart
    }

    let addr: bigint = BigInt(0)
    let intervalFound: boolean = false
    let smallestInterval: bigint = BigInt(0)

    if (this.heapStart - this.tracker[0].end >= size) {
      addr = this.heapStart
      intervalFound = true
      smallestInterval = this.tracker[0].start - this.heapStart
    }

    for (let i = 0; i < this.tracker.length - 1; i++) {
      const curr = this.tracker[i]
      const next = this.tracker[i + 1]

      const nextInterval = next.start - curr.end

      if (nextInterval >= size && (!intervalFound || nextInterval < smallestInterval)) {
        if (!intervalFound) intervalFound = true
        addr = curr.end
        smallestInterval = nextInterval
      }
    }

    const nextInterval = this.heapEnd - this.tracker[this.tracker.length - 1].end
    if (nextInterval >= size && (!intervalFound || nextInterval < smallestInterval)) {
      addr = this.tracker[this.tracker.length - 1].end
    }

    this.tracker.push({ start: addr, end: addr + size })
    return addr
  }

  /**
   * Deallocates the chunk of memory stores at `addr` and shrinks the heap if possible
   * @param addr The address of the memory to free
   *
   * If the address provided does not map to a valid HeapEntry, no operations are performed.
   */
  deallocate(addr: bigint): void {
    this.tracker = this.tracker.filter(e => e.start !== addr)
  }
}
