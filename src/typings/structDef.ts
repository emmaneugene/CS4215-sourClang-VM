import { DataType } from './datatype'

export type StructDef = { [attribute: string]: StructDef | DataType }
