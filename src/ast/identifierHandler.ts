import { CompileTimeError } from '../compiler/error'
import { BasePointer, BottomOfMemory, Registers } from '../typings/microcode'
import { Address, DataType, TypeList } from './ast.core'
import { FunctionDefinition } from './ast.declaration'

/**
 * This class handles identifiers by:
 * - Assigning memory addresses
 * - Allowing for identifier lookup
 *
 * Identifiers encompasses:
 * - Function names
 * - Variables
 */
export class IdentifierHandler {
  private frames: Frame[] = []

  /**
   * Construct an IdentifierHandler.
   */
  constructor() {
    const globalFrame: Frame = {
      nextOffset: 0,
      mapping: {}
    }
    this.frames.push(globalFrame)
  }

  /**
   * Adds a new local var declaration to the current frame.
   * Used for new variable declarations (both at global and
   * local).
   */
  addLocalVarToCurrentFrame(v: { name: string; datatype: TypeList; size: number }): IdentifierInfo {
    if (this.isDuplicateIdentifier(v.name)) {
      throw new CompileTimeError()
    }

    const topmostFrame = this.peekTopmostFrame()

    topmostFrame.mapping[v.name] = {
      name: v.name,
      datatype: v.datatype,
      address: {
        isInstructionAddr: false,
        address: [BasePointer, topmostFrame.nextOffset]
      }
    }
    topmostFrame.nextOffset += v.size

    return topmostFrame.mapping[v.name]
  }

  /**
   * Initialises a function frame.
   */
  initFunctionFrame(functionName: string, functionArgs: FunctionDefinition['params']): Frame {
    if (!this.hasOnlyGlobalFrame()) throw new CompileTimeError()

    const newFrame: Frame = {
      nextOffset: -1,
      mapping: {}
    }

    newFrame.mapping[functionName] = {
      name: functionName,
      datatype: {
        typeList: [DataType.FUNCTION]
      },
      address: {
        isInstructionAddr: true
      }
    }

    functionArgs.forEach(arg => {
      newFrame.mapping[arg.name] = {
        name: arg.name,
        datatype: arg.datatype,
        address: arg.address
      }
    })

    return newFrame
  }

  /**
   * Extends the current frame.
   * Used for entering blocks within a function.
   */
  extendFrame(): Frame {
    if (!this.hasFunctionFrame()) {
      throw new CompileTimeError()
    }

    const topmostFrame = this.peekTopmostFrame()

    const newFrame: Frame = {
      nextOffset: topmostFrame.nextOffset,
      mapping: {}
    }

    return newFrame
  }

  /**
   * Pops off (and deletes) the topmost frame.
   * Used for exiting blocks within a function.
   *
   * @returns the new topmost frame
   */
  popFrame(): Frame {
    if (!this.hasFunctionFrame()) throw new CompileTimeError()

    const oldFrame = this.popTopmostFrame()
    const oldFrameNextOffset = oldFrame.nextOffset

    const topmostFrame = this.peekTopmostFrame()
    topmostFrame.nextOffset = oldFrameNextOffset

    return topmostFrame
  }

  /**
   * Pops off and returns the top most function frame.
   *
   * @throws if attempt to pop off any other frame
   */
  popFunctionFrame(): Frame {
    if (!this.hasOnlyFunctionFrame()) throw new CompileTimeError()
    const functionFrame = this.popTopmostFrame()
    return functionFrame
  }

  /**
   * Gets the information for an information in the current frame or its parents
   *
   * @param {string} name - The name of the variable.
   * @returns {VariableInfo} The information for the variable
   * @throws {CompileTimeError} if the identifier doesn't exist
   */
  getIdentifierInfo(name: string): IdentifierInfo {
    for (let i = this.frames.length - 1; i >= 0; i--) {
      if (this.frames[i][name]) {
        return this.frames[i][name]
      }
    }
    throw new CompileTimeError()
  }

  /**
   * Returns true if the identifier has already been declared,
   * either as a function or global variable.
   */
  private isDuplicateIdentifier(name: string): boolean {
    return this.frames[name] !== undefined
  }

  /**
   * Checks that there is only the global frame.
   */
  private hasOnlyGlobalFrame(): boolean {
    return this.frames.length === 1
  }

  /**
   * Checks that there is only the global
   * frame + the function frame.
   */
  private hasOnlyFunctionFrame(): boolean {
    return this.frames.length === 2
  }

  /**
   * Checks that the function frame exists.
   *
   * Basically this prevents extending a frame at
   * the global level.
   */
  private hasFunctionFrame(): boolean {
    return this.frames.length >= 2
  }

  private peekTopmostFrame(): Frame {
    return this.frames[this.frames.length - 1]
  }

  private popTopmostFrame(): Frame {
    const frame = this.frames.pop()
    if (!frame) throw new CompileTimeError()
    return frame
  }
}

/**
 * An object that tracks the scope of a
 * variable / the set of variables a statement
 * can see.
 *
 * Similar to environment model in the HW.
 */
type Frame = {
  nextOffset: number
  mapping: Record<string, IdentifierInfo>
}

/**
 * An object that provides more information
 * about an identifier.
 */
export type IdentifierInfo = {
  /** Identifier name. */
  name: string
  /** Its type definition. */
  datatype: TypeList
  /** Its address. */
  address: Address
}