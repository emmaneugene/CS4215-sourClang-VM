/* tslint:disable:max-classes-per-file */
import { arity } from '../stdlib/misc'
import { Context, Value } from '../types'
import {
  BinopCommand,
  CallCommand,
  ExitCommand,
  LeaCommand,
  Microcode,
  MovCommand,
  MovImmediateCommand,
  OffsetRspCommand,
  ReturnCommand,
  UnopCommand
} from './../typings/microcode'

export function* evaluate(context: Context) {
  // previous impl:
  // export function* evaluate(node: es.Node, context: Context) {
  //   const result = yield* evaluators[node.type](node, context)
  //   yield* leave(context)
  //   return result
  // }

  let returnValue: number | undefined
  while (true) {
    if (!context.cVmContext.isRunning) {
      returnValue = context.cVmContext.AX
      break
    }

    const cmd: Microcode | undefined = decodePC(context, context.cVmContext.PC)
    if (!cmd) {
      break
    }

    // Execute `cmd` and amend `context` accordingly
    yield* MACHINE[cmd.type](cmd, context)

    // debug
    const { SP } = context.cVmContext
    console.log(context.cVmContext.dataview.debug(SP, SP - 40, SP + 40))
  }

  yield* leave(context)
  return returnValue ?? undefined // undefined means some issue during execution
}

function* leave(context: Context) {
  context.runtime.break = false
  context.runtime.nodes.shift()
  yield context
}

function decodePC(ctx: Context, pc: number): Microcode | undefined {
  return ctx.cVmContext.instrs[pc]
}

/* Supporting typedef for MACHINE. */
type EvaluatorFunction = (cmd: Microcode, ctx: Context) => IterableIterator<Value>

/**
 * The virtual machine used for execution
 *
 * WARNING: Do not use object literal shorthands, e.g.
 *   {
 *     *Literal(node: es.Literal, ...) {...},
 *     *ThisExpression(node: es.ThisExpression, ..._ {...},
 *     ...
 *   }
 * They do not minify well, raising uncaught syntax errors in production.
 * See: https://github.com/webpack/webpack/issues/7566
 */
const MACHINE: { [microcode: string]: EvaluatorFunction } = {
  ExitCommand: function* (cmd, ctx) {
    ctx.cVmContext.isRunning = false
    return
  },

  /**
   * Processes the `CallCommand` microcode within the context of a running
   * program.
   * @param cmd
   * @param ctx
   */
  CallCommand: function* (cmd, ctx) {
    const callCmd = cmd as CallCommand
    if (ctx.externalBuiltIns?.rawDisplay) {
      ctx.externalBuiltIns.rawDisplay(undefined, `${cmd.type}`, ctx)
    } else {
      console.log('hellllllooooooo', { cmd })
    }

    ctx.cVmContext.PC++
  },

  /**
   * Processes the `MovImmediateCommand` microcode within the context of a
   * running program.
   * @param cmd
   * @param ctx
   */
  MovImmediateCommand: function* (cmd, ctx) {
    const immCmd = cmd as MovImmediateCommand
    debugPrint(immCmd.type + ' ' + immCmd.value + ' ' + immCmd.encoding, ctx)
    const { dataview } = ctx.cVmContext

    dataview.setBytesAt(lea(ctx, 'rsp', 0), BigInt(immCmd.value))
    ctx.cVmContext.SP += 8

    ctx.cVmContext.PC++
  },

  /**
   * Processes the `MovCommand` microcode within the context of a running
   * program.
   * @param cmd
   * @param ctx
   */
  MovCommand: function* (cmd, ctx) {
    const movCmd = cmd as MovCommand
    const { dataview } = ctx.cVmContext
    const { from, to } = movCmd
    const fromAddr = lea(ctx, from.reg, from.offset)
    const toAddr = lea(ctx, to.reg, to.offset)

    debugPrint(`${movCmd.type} ${fromAddr} ${toAddr}`, ctx)
    if (from.type === 'relative' && to.type === 'relative') {
      dataview.setBytesAt(toAddr, dataview.getBytesAt(fromAddr))
    }

    if (from.type === 'relative' && to.type === 'absolute') {
    }

    if (from.type === 'absolute' && to.type === 'relative') {
    }

    if (from.type === 'absolute' && to.type === 'absolute') {
    }

    ctx.cVmContext.PC++
    dataview.debug()
  },

  /**
   *
   * @param cmd
   * @param ctx
   */
  LeaCommand: function* (cmd, ctx) {},

  /**
   * Processes the `OffsetRspCommand` microcode within the context of a running
   * program.
   * @param cmd
   * @param ctx
   */
  OffsetRspCommand: function* (cmd, ctx) {
    const offsetCmd = cmd as OffsetRspCommand
    ctx.cVmContext.SP += offsetCmd.value
    ctx.cVmContext.PC++
  },

  /**
   * Applies the binary operation `op` to the top two values of the stack
   * @param cmd
   * @param ctx
   */
  BinopCommand: function* (cmd, ctx) {
    const binopCmd = cmd as BinopCommand
    const { dataview } = ctx.cVmContext
    const { op } = binopCmd

    const arg1 = dataview.getBytesAt(lea(ctx, 'rsp', -16))
    const arg2 = dataview.getBytesAt(lea(ctx, 'rsp', -8))
    debugPrint(`${binopCmd.type} ${op} ${arg1} ${arg2} `, ctx)

    const arithOps: Array<string> = ['+', '-', '*', '/', '%']

    if (arithOps.includes(op)) {
      let res = arg1
      switch (op) {
        case '+':
          res += arg2
          break
        case '-':
          res -= arg2
          break
        case '*':
          res *= arg2
          break
        case '/':
          res /= arg2
          break
        case '%':
          res %= arg2
          break
      }
      dataview.setBytesAt(lea(ctx, 'rsp', -16), res)
    } else {
      // TODO: Boolean operators
    }

    ctx.cVmContext.SP -= 8
    ctx.cVmContext.PC++
    dataview.debug()
  },

  /**
   * Applies the unary operation `op` to the top value of the stack
   * @param cmd
   * @param ctx
   */
  UnopCommand: function* (cmd, ctx) {},

  /**
   * Processes the `ReturnCommand` microcode within the context of a running
   * program.
   * @param cmd
   * @param ctx
   */
  ReturnCommand: function* (cmd, ctx) {},

  /**
   * Processes the `PushCommand` microcode within the context of a running
   * program.
   * @param cmd
   * @param ctx
   */
  PushCommand: function* (cmd, ctx) {},

  /**
   * Processes the `PopCommand` microcode within the context of a running
   * program
   * @param cmd
   * @param ctx
   */
  PopCommand: function* (cmd, ctx) {}
}

function debugPrint(str: string, ctx: Context): void {
  if (ctx.externalBuiltIns?.rawDisplay) {
    ctx.externalBuiltIns.rawDisplay(undefined, str, ctx)
  } else {
    console.log(str)
  }
}

/**
 * Loads the address of a register + offset
 * @param ctx
 * @param reg
 * @param offset
 * @returns address
 */
function lea(ctx: Context, reg: 'rbp' | 'rsp', offset: number) {
  if (reg === 'rbp') {
    return ctx.cVmContext.BP + offset
  }

  if (reg === 'rsp') {
    return ctx.cVmContext.SP + offset
  }

  throw new Error()
}

// import * as es from 'estree'

// import { RuntimeSourceError } from '../errors/runtimeSourceError'
// import { Context, Environment, Value } from '../types'
// import { MemoryContext } from '../typings/memory-context'
// import { evaluateBinaryExpression, evaluateUnaryExpression } from '../utils/operators'
// import * as rttc from '../utils/rttc'

// class Thunk {
//   public value: Value
//   public isMemoized: boolean
//   constructor(public exp: es.Node, public env: Environment) {
//     this.isMemoized = false
//     this.value = null
//   }
// }

// function* forceIt(val: any, context: Context): Value {
//   if (val instanceof Thunk) {
//     if (val.isMemoized) return val.value

//     pushEnvironment(context, val.env)
//     const evalRes = yield* actualValue(val.exp, context)
//     popEnvironment(context)
//     val.value = evalRes
//     val.isMemoized = true
//     return evalRes
//   } else return val
// }

// export function* actualValue(exp: es.Node, context: Context): Value {
//   const evalResult = yield* evaluate(exp, context)
//   const forced = yield* forceIt(evalResult, context)
//   return forced
// }

// const handleRuntimeError = (context: Context, error: RuntimeSourceError): never => {
//   context.errors.push(error)
//   context.runtime.environments = context.runtime.environments.slice(
//     -context.numberOfOuterEnvironments
//   )
//   throw error
// }

// function* visit(context: Context, node: es.Node) {
//   context.runtime.nodes.unshift(node)
//   yield context
// }

// function* leave(context: Context) {
//   context.runtime.break = false
//   context.runtime.nodes.shift()
//   yield context
// }

// const popEnvironment = (context: Context) => context.runtime.environments.shift()
// export const pushEnvironment = (context: Context, environment: Environment) => {
//   context.runtime.environments.unshift(environment)
//   context.runtime.environmentTree.insert(environment)
// }

// export type Evaluator<T extends es.Node> = (node: T, context: Context) => IterableIterator<Value>

// function* evaluateBlockSatement(context: Context, node: es.BlockStatement) {
//   let result
//   for (const statement of node.body) {
//     result = yield* evaluate(statement, context)
//   }
//   return result
// }

// /**
//  * WARNING: Do not use object literal shorthands, e.g.
//  *   {
//  *     *Literal(node: es.Literal, ...) {...},
//  *     *ThisExpression(node: es.ThisExpression, ..._ {...},
//  *     ...
//  *   }
//  * They do not minify well, raising uncaught syntax errors in production.
//  * See: https://github.com/webpack/webpack/issues/7566
//  */
// // tslint:disable:object-literal-shorthand
// // prettier-ignore
// export const evaluators: { [nodeType: string]: Evaluator<es.Node> } = {
//   /** Simple Values */
//   Literal: function* (node: es.Literal, _context: Context) {
//     return node.value
//   },

//   TemplateLiteral: function* (node: es.TemplateLiteral) {
//     // Expressions like `${1}` are not allowed, so no processing needed
//     return node.quasis[0].value.cooked
//   },

//   ThisExpression: function* (node: es.ThisExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   ArrayExpression: function* (node: es.ArrayExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   FunctionExpression: function* (node: es.FunctionExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   ArrowFunctionExpression: function* (node: es.ArrowFunctionExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   Identifier: function* (node: es.Identifier, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   CallExpression: function* (node: es.CallExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   NewExpression: function* (node: es.NewExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   UnaryExpression: function* (node: es.UnaryExpression, context: Context) {
//     const value = yield* actualValue(node.argument, context)

//     const error = rttc.checkUnaryExpression(node, node.operator, value)
//     if (error) {
//       return handleRuntimeError(context, error)
//     }
//     return evaluateUnaryExpression(node.operator, value)
//   },

//   BinaryExpression: function* (node: es.BinaryExpression, context: Context) {
//     const left = yield* actualValue(node.left, context)
//     const right = yield* actualValue(node.right, context)
//     const error = rttc.checkBinaryExpression(node, node.operator, left, right)
//     if (error) {
//       return handleRuntimeError(context, error)
//     }
//     return evaluateBinaryExpression(node.operator, left, right)
//   },

//   ConditionalExpression: function* (node: es.ConditionalExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   LogicalExpression: function* (node: es.LogicalExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   VariableDeclaration: function* (node: es.VariableDeclaration, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   ContinueStatement: function* (_node: es.ContinueStatement, _context: Context) {
//     throw new Error(`not supported yet: ${_node.type}`)
//   },

//   BreakStatement: function* (_node: es.BreakStatement, _context: Context) {
//     throw new Error(`not supported yet: ${_node.type}`)
//   },

//   ForStatement: function* (node: es.ForStatement, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   AssignmentExpression: function* (node: es.AssignmentExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   FunctionDeclaration: function* (node: es.FunctionDeclaration, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   IfStatement: function* (node: es.IfStatement | es.ConditionalExpression, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   ExpressionStatement: function* (node: es.ExpressionStatement, context: Context) {
//     return yield* evaluate(node.expression, context)
//   },

//   ReturnStatement: function* (node: es.ReturnStatement, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   WhileStatement: function* (node: es.WhileStatement, context: Context) {
//     throw new Error(`not supported yet: ${node.type}`)
//   },

//   BlockStatement: function* (node: es.BlockStatement, context: Context) {
//     return
//   },

//   Program: function* (node: es.BlockStatement, context: Context) {
//     const result = yield* forceIt(yield* evaluateBlockSatement(context, node), context);
//     return result;
//   }
// }
// tslint:enable:object-literal-shorthand
