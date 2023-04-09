import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { Program } from '../ast/ast.core'
import { FunctionDefinition } from '../ast/ast.declaration'
import { Identifier } from '../ast/ast.expression'
import { IdentifierHandler } from '../ast/identifierHandler'
import { RODataSegment } from '../compiler2/segment.ro'
import {
  DeclarationContext,
  FunctionDefinitionContext,
  ParamLsContext,
  ProgramContext,
  ProgramStmtContext
} from '../lang/SourCParser2'
import { BasePointer } from '../typings/microcode'
import { getSizeofVariable } from '../utils/sizeHandler'
import { convertTypedefCtxToTypeList } from '../utils/typeHandler'
import { SourCParser2Visitor } from './../lang/SourCParser2Visitor'
import { FatalSyntaxError, ParserMisconfigError } from './error'
import { contextToLocation, errorNodeToLocation, getStackFrameReturnPCLocation } from './utils'
import { DeclarationGenerator } from './visitor.declaration'
import { StatementGenerator } from './visitor.statement'

/**
 * Generates an AST for a program.
 */
export class ProgramGenerator implements SourCParser2Visitor<void> {
  private rootNode: Program

  private identifierHandler: IdentifierHandler

  private declarationGenerator: DeclarationGenerator
  private statementGenerator: StatementGenerator

  private rodataSegment: RODataSegment

  constructor(rodataSegment: RODataSegment) {
    this.rodataSegment = rodataSegment

    this.rootNode = {
      type: 'Program',
      body: []
    }

    this.identifierHandler = new IdentifierHandler(rodataSegment.getRODataSegmentSize())

    this.declarationGenerator = new DeclarationGenerator(
      name => this.identifierHandler.getIdentifierInfo(name),
      v => this.identifierHandler.addLocalVarToCurrentFrame(v).address,
      s => rodataSegment.getStringAddr(RODataSegment.convertToCString(s))
    )
    this.statementGenerator = new StatementGenerator(this.identifierHandler, s =>
      rodataSegment.getStringAddr(RODataSegment.convertToCString(s))
    )
  }

  visitProgram(ctx: ProgramContext): void {
    for (let i = 0; i < ctx.programStmt().length; i++) {
      this.visitProgramStmt(ctx.programStmt(i))
    }
  }

  visitProgramStmt(ctx: ProgramStmtContext): void {
    if (ctx.functionDefinition()) {
      this.visitFunctionDefinition(ctx.functionDefinition()!)
    }
    if (ctx.declaration()) {
      this.visitDeclaration(ctx.declaration()!)
    }
  }

  visitDeclaration(ctx: DeclarationContext): void {
    const d = this.declarationGenerator.visit(ctx)
    this.rootNode.body.push(d)
  }

  visitFunctionDefinition(ctx: FunctionDefinitionContext): void {
    const typeDef = ctx.typeDef()
    const name = ctx.Identifier().text
    const paramLs = ctx.paramLs()
    const stmt = ctx.compoundStatement()

    const datatype = convertTypedefCtxToTypeList(typeDef)
    const params = this.getParamsList(paramLs)

    this.identifierHandler.addFunctionNameToGlobalFrame({
      name,
      datatype
    })

    this.identifierHandler.initFunctionFrame(name, params)

    const body = this.statementGenerator.visitCompoundStatement(stmt)

    const functionDef: FunctionDefinition = {
      ...contextToLocation(ctx),
      type: 'FunctionDefinition',
      datatype,
      name,
      params,
      body,
      address: {
        isInstructionAddr: true
      }
    }

    this.rootNode.body.push(functionDef)
    this.identifierHandler.popFunctionFrame(name)
  }

  getAst(): Program {
    return this.rootNode
  }

  getStackFrameSizePerFunction() {
    return this.identifierHandler.getStackFrameSizePerFunction()
  }

  getGlobalVarSize() {
    return this.identifierHandler.getGlobalVarSize()
  }

  visit(tree: ParseTree): void {
    return tree.accept(this)
  }

  visitChildren(_node: RuleNode): void {
    throw new ParserMisconfigError()
  }

  visitTerminal(node: TerminalNode): void {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): void {
    throw new FatalSyntaxError(errorNodeToLocation(node))
  }

  private getParamsList(ctx?: ParamLsContext): Identifier[] {
    if (!ctx) {
      return []
    }

    const params: Identifier[] = []
    let prevOffset = getStackFrameReturnPCLocation()
    ctx._pLs.forEach(p => {
      const datatype = convertTypedefCtxToTypeList(p.typeDef())
      prevOffset -= getSizeofVariable(datatype)
      params.push({
        type: 'Identifier',
        name: p.Identifier().text,
        datatype,
        address: {
          isInstructionAddr: false,
          address: [BasePointer, prevOffset]
        }
      })
    })

    return params
  }
}
