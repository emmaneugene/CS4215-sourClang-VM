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

  VOID_PTR = 'void_ptr',
  CHAR_PTR = 'char_ptr',
  UNSIGNED_CHAR_PTR = 'unsigned_char_ptr',
  SHORT_PTR = 'short_ptr',
  UNSIGNED_SHORT_PTR = 'unsigned_short_ptr',
  INT_PTR = 'int_ptr',
  UNSIGNED_INT_PTR = 'unsigned_int_ptr',
  LONG_PTR = 'long_ptr',
  UNSIGNED_LONG_PTR = 'unsigned_long_ptr',
  FLOAT_PTR = 'float_ptr',
  DOUBLE_PTR = 'double_ptr',

  /**
   * Unknown during parsing.
   * E.g. int z = x;
   */
  UNKNOWN = 'unknown'
}
