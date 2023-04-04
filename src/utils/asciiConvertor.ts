/**
 * Converts a character into its ASCII number.
 */
export function convertCharToASCII(char: string): number {
  return char.charCodeAt(0)
}

/**
 * Converts an ASCII number into a character.
 */
export function convertASCIIToChar(char: bigint): string {
  return String.fromCharCode(Number(char))
}
