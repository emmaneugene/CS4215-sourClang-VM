import { WORD_SIZE } from '../constants'
import { Context } from '../types'
import { convertCharToASCII } from '../utils/asciiConvertor'

/**
 * A class describing the ROData segment.
 *
 * It is defined to start from address 0.
 */
export class RODataSegment {
  private declaredStrings: string[]

  private stringToAddr: Record<string, number> = {}

  private rodataSize: number = 0

  constructor(ls: string[]) {
    this.declaredStrings = ls

    let nextAvailableAddr = 0
    ls.forEach(rawString => {
      const str = RODataSegment.convertToCString(rawString)

      this.stringToAddr[str] = nextAvailableAddr
      nextAvailableAddr += str.length * WORD_SIZE
    })

    this.rodataSize = nextAvailableAddr
  }

  /**
   * Using the `declaredStrings`, determines the amount
   * of memory needed for all the strings.
   */
  getRODataSegmentSize(): number {
    return this.rodataSize
  }

  /**
   * Inserts read-only segment of a program.
   * E.g. strings defined with double quotes
   *
   * Each character takes 8 bytes, and is allocated space
   * on the memory model.
   *
   */
  setupSegment(ctx: Context): number {
    const { dataview } = ctx.cVmContext

    Object.entries(this.stringToAddr).forEach(entry => {
      const [strToken, address] = entry
      let nextAddr = address

      ;[...strToken].forEach(char => {
        dataview.setBytesAt(BigInt(nextAddr), BigInt(convertCharToASCII(char)))
        nextAddr += WORD_SIZE
      })
    })

    return this.rodataSize
  }

  getStringAddr(s: string): number {
    return this.stringToAddr[RODataSegment.convertToCString(s)]
  }

  /**
   * During parsing, the string is provided with
   * the leading and trailing double quotes (").
   *
   * This function removes it.
   */
  static removeDoubleQuotes(s: string): string {
    let returnValue = s
    if (returnValue.charAt(0) === '"') {
      returnValue = returnValue.substring(1)
    }
    if (returnValue.charAt(returnValue.length - 1) === '"') {
      returnValue = returnValue.substring(0, returnValue.length - 1)
    }
    return returnValue
  }

  /**
   * For any user defined string,
   * we need to append the \0 (i.e. null terminator character).
   * This character needs to be considered as part of the length of
   * the string.
   */
  static appendNullTerminator(s: string): string {
    return s + '\0'
  }

  /**
   * Converting to C string entails:
   * - Removing the leading and trailing double quote character if it exists
   * (from the parsing)
   * - Appending the null terminator
   */
  static convertToCString(s: string): string {
    return this.appendNullTerminator(this.removeDoubleQuotes(s))
  }
}
