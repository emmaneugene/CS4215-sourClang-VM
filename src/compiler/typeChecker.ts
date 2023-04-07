import * as es from 'estree'

import { DataType } from '../typings/datatype'
import { CompileType, FunctionCTE, getFxDecl, getVar, GlobalCTE } from './compileTimeEnv'
import { CompileTimeError } from './error'

/**
 * Returns type information about the given expression.
 */
export function getExprType(node: es.Expression, gEnv: GlobalCTE, fEnv?: FunctionCTE): CompileType {
  if (fEnv) {
    if (node.type === 'MemberExpression') {
      if (node.computed) {
        // array acccess
        const arrayObj = node.object as es.Identifier
        const [, varInfo] = getVar(arrayObj.name, fEnv, gEnv)
        const { typeList } = varInfo
        return {
          t: typeList[typeList.length - 1] as DataType,
          typeList: typeList
        }
      }

      throw new CompileTimeError() // TODO: implement for struct
    }

    if (node.type === 'CallExpression') {
      const callee = node.callee

      if (callee.type !== 'Identifier') throw new CompileTimeError()
      const functionInfo = getFxDecl(callee.name, gEnv)
      const returnType = functionInfo.returnType

      return {
        t: returnType[returnType.length - 1] as DataType,
        typeList: returnType
      }
    }

    if (node.type === 'SequenceExpression') {
      throw new CompileTimeError() // TODO: implement for array and struct
    }

    if (node.type === 'DereferenceExpression') {
      const t = getExprType(node.expression, gEnv, fEnv)

      throwIfNotPointer([t])

      // Remove the top most * in the pointerList
      // To reflect that one 'hop' has been done
      return {
        ...t,
        typeList: t.typeList.slice(1, t.typeList.length)
      }
    }

    if (node.type === 'ConditionalExpression') {
      throw new CompileTimeError() // TODO
    }

    if (node.type === 'CastExpression') {
      throw new CompileTimeError() // TODO
    }

    if (node.type === 'UpdateExpression') {
      const ident = node.argument
      if (ident.type !== 'Identifier') throw new CompileTimeError()
      const [, varInfo] = getVar(ident.name, fEnv, gEnv)

      return {
        t: varInfo.typeList[varInfo.typeList.length - 1] as DataType,
        typeList: varInfo.typeList
      }
    }

    if (node.type === 'Identifier') {
      const [, varInfo] = getVar(node.name, fEnv, gEnv)
      return {
        t: varInfo.typeList[varInfo.typeList.length - 1] as DataType,
        typeList: varInfo.typeList
      }
    }
  }

  if (node.type === 'Literal') {
    return getLiteralType(node)
  }

  if (node.type === 'LogicalExpression') {
    // Logical expressions just return 1 or 0
    return {
      t: DataType.LONG,
      typeList: [DataType.LONG]
    }
  }

  if (node.type === 'BinaryExpression') {
    const typeofLeft = getExprType(node.left, gEnv, fEnv)
    const typeofRight = getExprType(node.right, gEnv, fEnv)

    const isLeftAPtr = isPointer(typeofLeft.typeList)
    const isRightAPtr = isPointer(typeofRight.typeList)

    if (isLeftAPtr && isRightAPtr) {
      // if they are both pointers, it is not allowed
      throw new CompileTimeError()
    } else if (isLeftAPtr || isRightAPtr) {
      // if either one is a pointer
      // return the ptr's type
      return isLeftAPtr ? typeofLeft : typeofRight
    } else {
      // if both are not pointers
      // return the bigger type
      // e.g. int + long should return a long
      return getBiggerType(typeofLeft, typeofRight)
    }
  }

  if (node.type === 'SizeofExpression') {
    throw new CompileTimeError() // TODO: to implement
  }

  if (node.type === 'AddressofExpression') {
    const exprType = getExprType(node.expression, gEnv, fEnv)

    // Append an additional * to the typelist
    // to indicate memory address
    return {
      ...exprType,
      typeList: ['*', ...exprType.typeList]
    }
  }

  if (node.type === 'UnaryExpression') {
    if (node.operator === '!') {
      // Logical expressions just return 1 or 0
      return {
        t: DataType.LONG,
        typeList: [DataType.LONG]
      }
    } else {
      // Refers to the '-' operator
      const exprType = getExprType(node.argument, gEnv, fEnv)
      return exprType
    }
  }

  throw new CompileTimeError()
}

export function isPointer(ls: es.TypeList): boolean {
  return ls[0] === '*'
}

export function throwIfNotPointer(ls: CompileType[]): void {
  ls.forEach(e => {
    if (!isPointer(e.typeList)) throw new CompileTimeError()
  })
}

/**
 * This function is meant to simplify the type checking when
 * a binary operator is applied onto 2 normal/primitive types.
 *
 * For example, if we have an `int x` and `long y`,
 * `x+y` is permitted.
 *
 * What this function does is that it compares 2 types, and returns the
 * one that is "bigger". The type of a binary expression between 2 different
 * types is the type that is bigger - or implying that the "smaller" type
 * has been type-casted/extended to bigger one.
 *
 * In the example above, `x+y` is of the type `long` - `int x` is considered
 * to be (safely) casted to `long`.
 *
 * The concept of "bigger" uses a ranking system of each type.
 */
export function getBiggerType(t1: CompileType, t2: CompileType): CompileType {
  const RANKING = [DataType.CHAR, DataType.SHORT, DataType.INT, DataType.LONG]
  const assignRanking = (t: DataType) => RANKING.indexOf(t)

  const t1Rank = assignRanking(t1.t)
  const t2Rank = assignRanking(t2.t)

  return t1Rank >= t2Rank ? t1 : t2
}

/**
 * Given a literal node in the AST (like 3 or "hello"),
 * check if it is a number or a string.
 */
function getLiteralType(node: es.Literal): CompileType {
  const isStrLiteral = (input: string) => input.charAt(0) === '"'

  if (typeof node.value === 'number') {
    return {
      // Return the largest possible
      // primitive type
      t: DataType.LONG,
      typeList: [DataType.LONG]
    }
  }

  if (node.raw && isStrLiteral(node.raw)) {
    return {
      t: DataType.CHAR,
      typeList: ['*', DataType.CHAR]
    }
  }

  throw new CompileTimeError()
}

/**
 * Checks if the binary expression meets the
 * type requirements.
 *
 * For +/-, allow if one side is a pointer,
 * the other side is normal.
 *
 * For all other operators, only allow if
 * both sides are normal.
 */
export function isBinaryExprAllowed(
  operator: string,
  left: CompileType,
  right: CompileType
): boolean {
  if (['+', '-'].includes(operator)) {
    const areBothPointers = isPointer(left.typeList) && isPointer(right.typeList)
    return !areBothPointers
  } else {
    const areAnyPointers = isPointer(left.typeList) || isPointer(right.typeList)
    return !areAnyPointers
  }
}
