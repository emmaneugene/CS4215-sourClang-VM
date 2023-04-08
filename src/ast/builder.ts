import { WORD_SIZE } from '../constants'
import { getSizeofArrayVariable, getSizeofVariable } from '../utils/sizeHandler'
import { Program } from './ast.core'
import { ArrayDeclaration, FunctionDefinition, VariableDeclaration } from './ast.declaration'
import { Expression } from './ast.expression'
import { Statement, WhileStatement } from './ast.statement'
import { IdentifierHandler, IdentifierInfo } from './identifierHandler'

/**
 * Builds the AST.
 */
export class AstBuilder {
  // A mapping of the declared strings to their memory address
  // Initialised in the constructor
  private globalRODataMapping: Record<string, number> = {}

  // Used to track frames
  // Initialised in the constructor
  private identifierHandler: IdentifierHandler = new IdentifierHandler()

  // The root node of the AST being built
  private rootProgramNode: Program = {
    type: 'Program',
    body: []
  }

  /**
   * Constructs an AST builder instance.
   *
   * @param declaredStrings a list of strings in the user program.
   */
  constructor(declaredStrings: string[]) {
    this.initRODataMapping(declaredStrings)
  }

  /**
   * Creates a new function definition builder.
   *
   * It sets up the builder by giving it its own
   * function frame, but it doesn't place in
   * into the program node unless the builder's
   * build function is called.
   */
  createNewFunctionDefBuilder(args: Omit<FunctionDefinition, 'type'>): FunctionDefAstBuilder {
    const { name, params } = args
    this.identifierHandler.initFunctionFrame(name, params)
    const builder = new FunctionDefAstBuilder(
      args,
      this.identifierHandler,
      (node: FunctionDefinition) => {
        this.rootProgramNode.body.push(node)
      }
    )

    return builder
  }

  /**
   * Adds a global variable.
   */
  addGlobalVarDeclr(args: Omit<VariableDeclaration, 'type'>): VariableDeclaration {
    const { name, datatype } = args
    const varDeclaration: VariableDeclaration = {
      ...args,
      type: 'VariableDeclaration'
    }

    this.identifierHandler.addLocalVarToCurrentFrame({
      name,
      datatype,
      size: getSizeofVariable(varDeclaration)
    })

    this.rootProgramNode.body.push(varDeclaration)

    return varDeclaration
  }

  /**
   * Adds a global array variable.
   */
  addGlobalArrayDeclr(args: Omit<ArrayDeclaration, 'type'>): ArrayDeclaration {
    const { name, datatype } = args
    const arrayDeclaration: ArrayDeclaration = {
      ...args,
      type: 'ArrayDeclaration'
    }

    this.identifierHandler.addLocalVarToCurrentFrame({
      name,
      datatype,
      size: getSizeofArrayVariable(arrayDeclaration)
    })
    this.rootProgramNode.body.push(arrayDeclaration)

    return arrayDeclaration
  }

  /**
   * Initialise the address for RO data.
   *
   * @returns the total size of RO data segment
   */
  private initRODataMapping(list: string[]): number {
    let nextRODataAddr = 0
    list.forEach(s => {
      this.globalRODataMapping[s] = nextRODataAddr
      nextRODataAddr += (s.length + 1) * WORD_SIZE
    })
    return nextRODataAddr
  }
}

/**
 * Builds an AST subtree for a single function definition.
 */
export class FunctionDefAstBuilder {
  private functionDefinitionNode: FunctionDefinition
  private identifierHandler: IdentifierHandler
  private onBuildFunctionDef: (node: FunctionDefinition) => void

  /**
   * @param args the function info like name, return type and params
   * @param identifierHandler the handler for identifier
   * @param onBuildFunctionDef the function to call when the node has
   * been fully built
   */
  constructor(
    args: Omit<FunctionDefinition, 'type' | 'body'>,
    identifierHandler: IdentifierHandler,
    onBuildFunctionDef: (node: FunctionDefinition) => void
  ) {
    this.functionDefinitionNode = {
      ...args,
      type: 'FunctionDefinition',
      body: []
    }
    this.identifierHandler = identifierHandler
    this.onBuildFunctionDef = onBuildFunctionDef
  }

  addStatements(s: Statement[]): void {
    this.functionDefinitionNode.body.push(...s)
  }

  enterBlock(): void {
    this.identifierHandler.extendFrame()
  }

  exitBlock(): void {
    this.identifierHandler.popFrame()
  }

  /**
   * Creates a new expression builder.
   *
   * It sets up the builder by giving it a
   * lookup function to find variables that
   * it needs.
   */
  createNewExpressionBuilder(): ExpressionAstBuilder {
    return new ExpressionAstBuilder(this.identifierHandler.getIdentifierInfo)
  }

  build(): void {
    this.onBuildFunctionDef(this.functionDefinitionNode)
  }
}

/**
 * Builds an AST subtree for a single expression.
 */
export class ExpressionAstBuilder {
  private lookupFunction: (name: string) => IdentifierInfo

  /** The expression current being built. */
  private expressionProduct: Expression

  constructor(lookupFunction: (name: string) => IdentifierInfo) {
    this.lookupFunction = lookupFunction
  }

  buildExpression(): Expression {
    return this.expressionProduct
  }
}
