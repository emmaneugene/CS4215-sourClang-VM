export enum DataType {
  VOID = 'void',
  CHAR = 'char',
  UNSIGNED_CHAR = 'unsigned_char',
  SHORT = 'short',
  UNSIGNED_SHORT = 'unsigned_short',
  INT = 'int',
  UNSIGNED_INT = 'unsigned_int',
  LONG = 'long',
  UNSIGNED_LONG = 'unsigned_long',
  FLOAT = 'float',
  DOUBLE = 'double',

  /**
   * Unknown during parsing.
   * E.g. int z = x;
   */
  UNKNOWN = 'unknown'
}
