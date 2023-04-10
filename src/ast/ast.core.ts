import { Registers } from '../typings/microcode'
import { Declaration, FunctionDefinition } from './ast.declaration'

/**
 * Defines the supported datatypes.
 */
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

  STRUCT = 'struct',

  FUNCTION = 'function',

  /**
   * Unknown during parsing.
   * E.g. int z = x;
   */
  UNKNOWN = 'unknown'
}

/**
 * Describes the position of the code.
 */
export interface Position {
  /** >= 1 */
  line: number
  /** >= 0 */
  column: number
}

/**
 * Describes the position of the code.
 */
export interface SourceLocation {
  source?: string | undefined
  start: Position
  end: Position
}

/**
 * A base node to describe the
 * source of the code.
 */
export interface BaseNode {
  type: string
  source?: string | undefined
  loc?: SourceLocation | undefined
  range?: [number, number] | undefined
}

/**
 * A JS object to describe a struct definition.
 */
export type StructDef = { [attribute: string]: StructDef | TypeList }

/**
 * Used to describe a type of an identifier.
 */
export type TypeList = {
  typeList: Array<'*' | DataType>
  structDef?: StructDef | undefined
  functionParams?: TypeList[]
  functionHasVariableArguments?: boolean
}

/**
 * The root node of an AST.
 */
export interface Program extends BaseNode {
  type: 'Program'
  body: Array<Declaration | FunctionDefinition>
}

/**
 * Used to describe an array of an identifier.
 */
export type Address =
  | {
      isInstructionAddr: true
    }
  | {
      isInstructionAddr: false
      address: [Registers, number]
    }
