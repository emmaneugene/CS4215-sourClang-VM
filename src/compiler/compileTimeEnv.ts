import * as es from 'estree'

import { DataType } from '../typings/datatype'
import { Microcode } from './../typings/microcode'
import { CompileTimeError } from './error'

/** A Block maps a variable name to its information. */
export type Block = Record<string, VariableInfo>

/**
 * A BlockNode is a tree structure that
 * helps to track the block nesting levels. */
export class BlockNode {
  /** The actual block at this node. */
  block: Block = {}

  /** A list of its children. */
  children: BlockNode[] = []

  /** A block's parent. */
  parent?: BlockNode | undefined

  /**
   * Gets a variable using its symbol.
   *
   * Looks at the current node, then traverse
   * upwards if parent exists.
   */
  getVariable(symbol: string): VariableInfo {
    if (this.block[symbol]) {
      return this.block[symbol]
    }

    if (!this.parent) {
      throw new CompileTimeError()
    }

    return this.parent.getVariable(symbol)
  }

  addVariable(variable: VariableInfo): void {
    if (this.block[variable.name]) {
      throw new CompileTimeError()
    }

    this.block[variable.name] = variable
  }

  addChild(child: BlockNode): void {
    this.children.push(child)
    child.parent = this
  }
}

/**
 * Represents a variable's information.
 */
export interface VariableInfo {
  name: string

  /* The variable's datatype */
  type: DataType

  /** The "home" of a variable = rbp + offset */
  offset: number

  /** The initial value of a variable */
  initialValue?: es.Expression
}

export class FunctionCTE {
  name: string

  returnType: DataType

  params: VariableInfo[] = []

  instrs: Microcode[] = []

  /**
   * Overall tree of BlockNodes.
   *
   * This tree is built at the start of the
   * compilation process of FunctionDeclaration.
   *
   * During the compilation of each statement,
   * `currBlockNode` is used to traverse up and down.
   */
  variables: BlockNode

  /**
   * A counter to track the next offset.
   */
  nextOffset: number = 0

  /**
   * Current BlockNode while compiling each stmt/block.
   */
  currBlockNode?: BlockNode | undefined

  constructor(name: string, returnType: DataType, params: VariableInfo[], blockNode: BlockNode) {
    this.name = name
    this.returnType = returnType

    const firstBlk = new BlockNode()

    // Initialise the first block with function arguments and topLevelVars.
    for (let i = 0; i < params.length; i++) {
      const param = params[i]
      const paramInfo = {
        ...param,
        offset: i * -8,
        initialValue: undefined,
        depth: 0
      }
      firstBlk.block[param.name] = paramInfo
    }

    const topLevelVars = Object.values(blockNode.block)
    for (const v of topLevelVars) {
      if (firstBlk.block[v.name]) {
        throw new CompileTimeError()
      }

      firstBlk.block[v.name] = v
    }

    firstBlk.children = blockNode.children
    this.variables = firstBlk
    this.currBlockNode = firstBlk
  }

  /** Performs a lookup for a variable based on its block. */
  getVariable(name: string): VariableInfo {
    if (!this.currBlockNode) {
      throw new CompileTimeError()
    }

    return this.currBlockNode.getVariable(name)
  }

  /* For entering a block. */
  enterBlock(blockNum: number): void {
    if (!this.currBlockNode) {
      throw new CompileTimeError()
    }

    this.currBlockNode = this.currBlockNode.children[blockNum]
  }

  /* For exiting a block. */
  exitBlock(): void {
    this.currBlockNode = this.currBlockNode?.parent
  }
}

export class GlobalCTE {
  functions: Record<string, FunctionCTE> = {}
}
