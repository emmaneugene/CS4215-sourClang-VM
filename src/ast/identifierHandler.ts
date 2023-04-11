import { BUILTINS } from '../builtin/parser'
import { CompileTimeError } from '../compiler/error'
import { WORD_SIZE } from '../constants'
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

  private stackFrameSizePerFunction: Record<string, number> = {}

  /**
   * Construct an IdentifierHandler.
   */
  constructor(rodataSegmentSize: number) {
    const globalFrame: Frame = {
      nextOffset: rodataSegmentSize,
      mapping: {}
    }
    this.frames.push(globalFrame)

    this.initBuiltInFunctions()
  }

  /**
   * Adds a function name to the global frame.
   */
  addFunctionNameToGlobalFrame(v: { name: string; datatype: TypeList }): IdentifierInfo {
    if (!this.hasOnlyGlobalFrame()) {
      throw new CompileTimeError()
    }

    const { name, datatype } = v
    this.frames[0].mapping[name] = {
      name,
      datatype,
      address: {
        isInstructionAddr: true
      }
    }

    return this.frames[0].mapping[name]
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

    const register: Registers = this.hasOnlyGlobalFrame() ? BottomOfMemory : BasePointer

    const topmostFrame = this.peekTopmostFrame()

    topmostFrame.mapping[v.name] = {
      name: v.name,
      datatype: v.datatype,
      address: {
        isInstructionAddr: false,
        address: [register, topmostFrame.nextOffset]
      }
    }
    topmostFrame.nextOffset += v.size

    return topmostFrame.mapping[v.name]
  }

  /**
   * Initialises a function frame.
   */
  initFunctionFrame(
    functionName: string,
    functionArgs: FunctionDefinition['params'],
    hasVariableArgs?: boolean
  ): Frame {
    if (!this.hasOnlyGlobalFrame()) throw new CompileTimeError()

    // Setup the new function frame
    const functionFrame: Frame = {
      nextOffset: 8,
      mapping: {}
    }

    functionFrame.mapping[functionName] = {
      name: functionName,
      datatype: {
        typeList: [DataType.FUNCTION],
        functionParams: functionArgs.map(arg => arg.datatype),
        functionHasVariableArguments: hasVariableArgs ?? false
      },
      address: {
        isInstructionAddr: true
      }
    }

    functionArgs.forEach(arg => {
      functionFrame.mapping[arg.name] = {
        name: arg.name,
        datatype: arg.datatype,
        address: arg.address
      }
    })

    // The global frame also needs the functionName
    this.frames[0].mapping[functionName] = functionFrame.mapping[functionName]

    this.frames.push(functionFrame)
    return functionFrame
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

    this.frames.push(newFrame)

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
  popFunctionFrame(functionName: string): Frame {
    if (!this.hasOnlyFunctionFrame()) throw new CompileTimeError()
    const functionFrame = this.popTopmostFrame()
    // Minus WORD_SIZE because the nextOffset considers that
    // rbp points to the caller's base-pointer value
    this.stackFrameSizePerFunction[functionName] = functionFrame.nextOffset - WORD_SIZE
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
      if (this.frames[i].mapping[name]) {
        return this.frames[i].mapping[name]
      }
    }
    throw new CompileTimeError()
  }

  getStackFrameSizePerFunction(): Record<string, number> {
    return this.stackFrameSizePerFunction
  }

  getGlobalVarSize(): number {
    return this.getGlobalFrame().nextOffset
  }

  getGlobalFrame(): Frame {
    if (!this.hasOnlyGlobalFrame()) {
      throw new CompileTimeError()
    }
    return this.frames[0]
  }

  /**
   * Returns true if the identifier has already been declared
   * in the current frame.
   */
  private isDuplicateIdentifier(name: string): boolean {
    const topmostFrame = this.peekTopmostFrame()
    if (topmostFrame.mapping[name]) {
      return true
    } else {
      return false
    }
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

  /**
   * Initialise the global functions.
   */
  private initBuiltInFunctions(): void {
    BUILTINS.forEach(builtin => {
      const { name, hasVariableArgs, args } = builtin
      this.frames[0].mapping[name] = {
        name,
        datatype: {
          typeList: [DataType.FUNCTION],
          functionParams: args,
          functionHasVariableArguments: hasVariableArgs ?? false
        },
        address: {
          isInstructionAddr: true
        }
      }
    })
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
export type Frame = {
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
