// Generated from ./src/lang/SourCParser2.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { SourCParser2Listener } from './SourCParser2Listener'
import { SourCParser2Visitor } from './SourCParser2Visitor'

export class SourCParser2 extends Parser {
  public static readonly Break = 1
  public static readonly Char = 2
  public static readonly Const = 3
  public static readonly Continue = 4
  public static readonly Do = 5
  public static readonly Double = 6
  public static readonly Else = 7
  public static readonly Float = 8
  public static readonly For = 9
  public static readonly If = 10
  public static readonly Int = 11
  public static readonly Long = 12
  public static readonly Return = 13
  public static readonly Short = 14
  public static readonly Signed = 15
  public static readonly Sizeof = 16
  public static readonly Struct = 17
  public static readonly Union = 18
  public static readonly Unsigned = 19
  public static readonly Void = 20
  public static readonly While = 21
  public static readonly LeftParen = 22
  public static readonly RightParen = 23
  public static readonly LeftBracket = 24
  public static readonly RightBracket = 25
  public static readonly LeftBrace = 26
  public static readonly RightBrace = 27
  public static readonly Less = 28
  public static readonly LessEqual = 29
  public static readonly Greater = 30
  public static readonly GreaterEqual = 31
  public static readonly LeftShift = 32
  public static readonly RightShift = 33
  public static readonly Plus = 34
  public static readonly PlusPlus = 35
  public static readonly Minus = 36
  public static readonly MinusMinus = 37
  public static readonly Star = 38
  public static readonly Div = 39
  public static readonly Mod = 40
  public static readonly And = 41
  public static readonly AndAnd = 42
  public static readonly OrOr = 43
  public static readonly Not = 44
  public static readonly Question = 45
  public static readonly Colon = 46
  public static readonly Semi = 47
  public static readonly Comma = 48
  public static readonly Assign = 49
  public static readonly StarAssign = 50
  public static readonly DivAssign = 51
  public static readonly ModAssign = 52
  public static readonly PlusAssign = 53
  public static readonly MinusAssign = 54
  public static readonly Equal = 55
  public static readonly NotEqual = 56
  public static readonly Arrow = 57
  public static readonly Dot = 58
  public static readonly Identifier = 59
  public static readonly Constant = 60
  public static readonly DigitSequence = 61
  public static readonly StringLiteral = 62
  public static readonly ComplexDefine = 63
  public static readonly IncludeDirective = 64
  public static readonly AsmBlock = 65
  public static readonly LineAfterPreprocessing = 66
  public static readonly LineDirective = 67
  public static readonly PragmaDirective = 68
  public static readonly Whitespace = 69
  public static readonly Newline = 70
  public static readonly BlockComment = 71
  public static readonly LineComment = 72
  public static readonly RULE_type = 0
  public static readonly RULE_typeNameList = 1
  public static readonly RULE_program = 2
  public static readonly RULE_programStmt = 3
  public static readonly RULE_functionDefinition = 4
  public static readonly RULE_paramLs = 5
  public static readonly RULE_param = 6
  public static readonly RULE_compoundStatement = 7
  public static readonly RULE_stmt = 8
  public static readonly RULE_expr = 9
  public static readonly RULE_primaryIdentifier = 10
  public static readonly RULE_sizeOfOperands = 11
  public static readonly RULE_declaration = 12
  public static readonly RULE_typeDef = 13
  public static readonly RULE_exprLs = 14
  public static readonly RULE_seqExprLs = 15
  public static readonly RULE_assignment = 16
  public static readonly RULE_addressableOperands = 17
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'type',
    'typeNameList',
    'program',
    'programStmt',
    'functionDefinition',
    'paramLs',
    'param',
    'compoundStatement',
    'stmt',
    'expr',
    'primaryIdentifier',
    'sizeOfOperands',
    'declaration',
    'typeDef',
    'exprLs',
    'seqExprLs',
    'assignment',
    'addressableOperands'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'break'",
    "'char'",
    "'const'",
    "'continue'",
    "'do'",
    "'double'",
    "'else'",
    "'float'",
    "'for'",
    "'if'",
    "'int'",
    "'long'",
    "'return'",
    "'short'",
    "'signed'",
    "'sizeof'",
    "'struct'",
    "'union'",
    "'unsigned'",
    "'void'",
    "'while'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'<<'",
    "'>>'",
    "'+'",
    "'++'",
    "'-'",
    "'--'",
    "'*'",
    "'/'",
    "'%'",
    "'&'",
    "'&&'",
    "'||'",
    "'!'",
    "'?'",
    "':'",
    "';'",
    "','",
    "'='",
    "'*='",
    "'/='",
    "'%='",
    "'+='",
    "'-='",
    "'=='",
    "'!='",
    "'->'",
    "'.'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'Break',
    'Char',
    'Const',
    'Continue',
    'Do',
    'Double',
    'Else',
    'Float',
    'For',
    'If',
    'Int',
    'Long',
    'Return',
    'Short',
    'Signed',
    'Sizeof',
    'Struct',
    'Union',
    'Unsigned',
    'Void',
    'While',
    'LeftParen',
    'RightParen',
    'LeftBracket',
    'RightBracket',
    'LeftBrace',
    'RightBrace',
    'Less',
    'LessEqual',
    'Greater',
    'GreaterEqual',
    'LeftShift',
    'RightShift',
    'Plus',
    'PlusPlus',
    'Minus',
    'MinusMinus',
    'Star',
    'Div',
    'Mod',
    'And',
    'AndAnd',
    'OrOr',
    'Not',
    'Question',
    'Colon',
    'Semi',
    'Comma',
    'Assign',
    'StarAssign',
    'DivAssign',
    'ModAssign',
    'PlusAssign',
    'MinusAssign',
    'Equal',
    'NotEqual',
    'Arrow',
    'Dot',
    'Identifier',
    'Constant',
    'DigitSequence',
    'StringLiteral',
    'ComplexDefine',
    'IncludeDirective',
    'AsmBlock',
    'LineAfterPreprocessing',
    'LineDirective',
    'PragmaDirective',
    'Whitespace',
    'Newline',
    'BlockComment',
    'LineComment'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    SourCParser2._LITERAL_NAMES,
    SourCParser2._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return SourCParser2.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'SourCParser2.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return SourCParser2.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return SourCParser2._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(SourCParser2._ATN, this)
  }
  // @RuleVersion(0)
  public type(): TypeContext {
    const _localctx: TypeContext = new TypeContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, SourCParser2.RULE_type)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 36
        _la = this._input.LA(1)
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << SourCParser2.Char) |
                (1 << SourCParser2.Double) |
                (1 << SourCParser2.Float) |
                (1 << SourCParser2.Int) |
                (1 << SourCParser2.Long) |
                (1 << SourCParser2.Short) |
                (1 << SourCParser2.Void))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public typeNameList(): TypeNameListContext {
    const _localctx: TypeNameListContext = new TypeNameListContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, SourCParser2.RULE_typeNameList)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 43
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 38
                this.typeDef()
                this.state = 39
                this.match(SourCParser2.Comma)
              }
            }
          }
          this.state = 45
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx)
        }
        this.state = 46
        this.typeDef()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public program(): ProgramContext {
    const _localctx: ProgramContext = new ProgramContext(this._ctx, this.state)
    this.enterRule(_localctx, 4, SourCParser2.RULE_program)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 51
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << SourCParser2.Char) |
              (1 << SourCParser2.Double) |
              (1 << SourCParser2.Float) |
              (1 << SourCParser2.Int) |
              (1 << SourCParser2.Long) |
              (1 << SourCParser2.Short) |
              (1 << SourCParser2.Struct) |
              (1 << SourCParser2.Unsigned) |
              (1 << SourCParser2.Void))) !==
            0
        ) {
          {
            {
              this.state = 48
              this.programStmt()
            }
          }
          this.state = 53
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public programStmt(): ProgramStmtContext {
    const _localctx: ProgramStmtContext = new ProgramStmtContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, SourCParser2.RULE_programStmt)
    try {
      this.state = 58
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 54
            this.functionDefinition()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 55
            this.declaration()
            this.state = 56
            this.match(SourCParser2.Semi)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public functionDefinition(): FunctionDefinitionContext {
    const _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 8, SourCParser2.RULE_functionDefinition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 60
        this.typeDef()
        this.state = 61
        this.match(SourCParser2.Identifier)
        this.state = 62
        this.match(SourCParser2.LeftParen)
        this.state = 64
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << SourCParser2.Char) |
              (1 << SourCParser2.Double) |
              (1 << SourCParser2.Float) |
              (1 << SourCParser2.Int) |
              (1 << SourCParser2.Long) |
              (1 << SourCParser2.Short) |
              (1 << SourCParser2.Struct) |
              (1 << SourCParser2.Unsigned) |
              (1 << SourCParser2.Void))) !==
            0
        ) {
          {
            this.state = 63
            this.paramLs()
          }
        }

        this.state = 66
        this.match(SourCParser2.RightParen)
        this.state = 67
        this.compoundStatement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public paramLs(): ParamLsContext {
    const _localctx: ParamLsContext = new ParamLsContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, SourCParser2.RULE_paramLs)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 74
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 69
                _localctx._param = this.param()
                _localctx._pLs.push(_localctx._param)
                this.state = 70
                this.match(SourCParser2.Comma)
              }
            }
          }
          this.state = 76
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx)
        }
        this.state = 77
        _localctx._param = this.param()
        _localctx._pLs.push(_localctx._param)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public param(): ParamContext {
    const _localctx: ParamContext = new ParamContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, SourCParser2.RULE_param)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 79
        this.typeDef()
        this.state = 80
        this.match(SourCParser2.Identifier)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public compoundStatement(): CompoundStatementContext {
    const _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, SourCParser2.RULE_compoundStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 82
        this.match(SourCParser2.LeftBrace)
        this.state = 86
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << SourCParser2.Break) |
                (1 << SourCParser2.Char) |
                (1 << SourCParser2.Continue) |
                (1 << SourCParser2.Double) |
                (1 << SourCParser2.Float) |
                (1 << SourCParser2.For) |
                (1 << SourCParser2.If) |
                (1 << SourCParser2.Int) |
                (1 << SourCParser2.Long) |
                (1 << SourCParser2.Return) |
                (1 << SourCParser2.Short) |
                (1 << SourCParser2.Sizeof) |
                (1 << SourCParser2.Struct) |
                (1 << SourCParser2.Unsigned) |
                (1 << SourCParser2.Void) |
                (1 << SourCParser2.While) |
                (1 << SourCParser2.LeftParen) |
                (1 << SourCParser2.LeftBrace))) !==
              0) ||
          (((_la - 35) & ~0x1f) === 0 &&
            ((1 << (_la - 35)) &
              ((1 << (SourCParser2.PlusPlus - 35)) |
                (1 << (SourCParser2.Minus - 35)) |
                (1 << (SourCParser2.MinusMinus - 35)) |
                (1 << (SourCParser2.Star - 35)) |
                (1 << (SourCParser2.And - 35)) |
                (1 << (SourCParser2.Not - 35)) |
                (1 << (SourCParser2.Identifier - 35)) |
                (1 << (SourCParser2.Constant - 35)) |
                (1 << (SourCParser2.StringLiteral - 35)))) !==
              0)
        ) {
          {
            {
              this.state = 83
              this.stmt()
            }
          }
          this.state = 88
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 89
        this.match(SourCParser2.RightBrace)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public stmt(): StmtContext {
    let _localctx: StmtContext = new StmtContext(this._ctx, this.state)
    this.enterRule(_localctx, 16, SourCParser2.RULE_stmt)
    let _la: number
    try {
      this.state = 140
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
        case 1:
          _localctx = new ExprStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 91
            this.expr(0)
            this.state = 92
            this.match(SourCParser2.Semi)
          }
          break

        case 2:
          _localctx = new DeclrStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 94
            this.declaration()
            this.state = 95
            this.match(SourCParser2.Semi)
          }
          break

        case 3:
          _localctx = new AssgnStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 97
            this.assignment()
            this.state = 98
            this.match(SourCParser2.Semi)
          }
          break

        case 4:
          _localctx = new CmpdStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 100
            this.compoundStatement()
          }
          break

        case 5:
          _localctx = new IfElseStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 101
            this.match(SourCParser2.If)
            this.state = 102
            this.match(SourCParser2.LeftParen)
            this.state = 103
            this.expr(0)
            this.state = 104
            this.match(SourCParser2.RightParen)
            this.state = 105
            this.compoundStatement()
            this.state = 108
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser2.Else) {
              {
                this.state = 106
                this.match(SourCParser2.Else)
                this.state = 107
                this.compoundStatement()
              }
            }
          }
          break

        case 6:
          _localctx = new WhileStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 110
            this.match(SourCParser2.While)
            this.state = 111
            this.match(SourCParser2.LeftParen)
            this.state = 112
            this.expr(0)
            this.state = 113
            this.match(SourCParser2.RightParen)
            this.state = 114
            this.compoundStatement()
          }
          break

        case 7:
          _localctx = new ForStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 7)
          {
            this.state = 116
            this.match(SourCParser2.For)
            this.state = 117
            this.match(SourCParser2.LeftParen)
            this.state = 119
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser2.Star || _la === SourCParser2.Identifier) {
              {
                this.state = 118
                ;(_localctx as ForStmtContext)._init = this.assignment()
              }
            }

            this.state = 121
            this.match(SourCParser2.Semi)
            this.state = 123
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser2.Sizeof ||
              _la === SourCParser2.LeftParen ||
              (((_la - 35) & ~0x1f) === 0 &&
                ((1 << (_la - 35)) &
                  ((1 << (SourCParser2.PlusPlus - 35)) |
                    (1 << (SourCParser2.Minus - 35)) |
                    (1 << (SourCParser2.MinusMinus - 35)) |
                    (1 << (SourCParser2.Star - 35)) |
                    (1 << (SourCParser2.And - 35)) |
                    (1 << (SourCParser2.Not - 35)) |
                    (1 << (SourCParser2.Identifier - 35)) |
                    (1 << (SourCParser2.Constant - 35)) |
                    (1 << (SourCParser2.StringLiteral - 35)))) !==
                  0)
            ) {
              {
                this.state = 122
                ;(_localctx as ForStmtContext)._test = this.expr(0)
              }
            }

            this.state = 125
            this.match(SourCParser2.Semi)
            this.state = 127
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser2.Sizeof ||
              _la === SourCParser2.LeftParen ||
              (((_la - 35) & ~0x1f) === 0 &&
                ((1 << (_la - 35)) &
                  ((1 << (SourCParser2.PlusPlus - 35)) |
                    (1 << (SourCParser2.Minus - 35)) |
                    (1 << (SourCParser2.MinusMinus - 35)) |
                    (1 << (SourCParser2.Star - 35)) |
                    (1 << (SourCParser2.And - 35)) |
                    (1 << (SourCParser2.Not - 35)) |
                    (1 << (SourCParser2.Identifier - 35)) |
                    (1 << (SourCParser2.Constant - 35)) |
                    (1 << (SourCParser2.StringLiteral - 35)))) !==
                  0)
            ) {
              {
                this.state = 126
                ;(_localctx as ForStmtContext)._incr = this.expr(0)
              }
            }

            this.state = 129
            this.match(SourCParser2.RightParen)
            this.state = 130
            this.compoundStatement()
          }
          break

        case 8:
          _localctx = new ReturnExprContext(_localctx)
          this.enterOuterAlt(_localctx, 8)
          {
            this.state = 131
            this.match(SourCParser2.Return)
            this.state = 133
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser2.Sizeof ||
              _la === SourCParser2.LeftParen ||
              (((_la - 35) & ~0x1f) === 0 &&
                ((1 << (_la - 35)) &
                  ((1 << (SourCParser2.PlusPlus - 35)) |
                    (1 << (SourCParser2.Minus - 35)) |
                    (1 << (SourCParser2.MinusMinus - 35)) |
                    (1 << (SourCParser2.Star - 35)) |
                    (1 << (SourCParser2.And - 35)) |
                    (1 << (SourCParser2.Not - 35)) |
                    (1 << (SourCParser2.Identifier - 35)) |
                    (1 << (SourCParser2.Constant - 35)) |
                    (1 << (SourCParser2.StringLiteral - 35)))) !==
                  0)
            ) {
              {
                this.state = 132
                this.expr(0)
              }
            }

            this.state = 135
            this.match(SourCParser2.Semi)
          }
          break

        case 9:
          _localctx = new BreakStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 9)
          {
            this.state = 136
            this.match(SourCParser2.Break)
            this.state = 137
            this.match(SourCParser2.Semi)
          }
          break

        case 10:
          _localctx = new ContinueStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 10)
          {
            this.state = 138
            this.match(SourCParser2.Continue)
            this.state = 139
            this.match(SourCParser2.Semi)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public expr(): ExprContext
  public expr(_p: number): ExprContext
  // @RuleVersion(0)
  public expr(_p?: number): ExprContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ExprContext = new ExprContext(this._ctx, _parentState)
    let _prevctx: ExprContext = _localctx
    const _startState: number = 18
    this.enterRecursionRule(_localctx, 18, SourCParser2.RULE_expr, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 175
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
          case 1:
            {
              _localctx = new SuffixIncrContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 143
              this.addressableOperands()
              this.state = 144
              ;(_localctx as SuffixIncrContext)._suffix = this._input.LT(1)
              _la = this._input.LA(1)
              if (!(_la === SourCParser2.PlusPlus || _la === SourCParser2.MinusMinus)) {
                ;(_localctx as SuffixIncrContext)._suffix = this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
            }
            break

          case 2:
            {
              _localctx = new FunctionCallContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 146
              this.match(SourCParser2.Identifier)
              this.state = 147
              this.match(SourCParser2.LeftParen)
              this.state = 149
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (
                _la === SourCParser2.Sizeof ||
                _la === SourCParser2.LeftParen ||
                (((_la - 35) & ~0x1f) === 0 &&
                  ((1 << (_la - 35)) &
                    ((1 << (SourCParser2.PlusPlus - 35)) |
                      (1 << (SourCParser2.Minus - 35)) |
                      (1 << (SourCParser2.MinusMinus - 35)) |
                      (1 << (SourCParser2.Star - 35)) |
                      (1 << (SourCParser2.And - 35)) |
                      (1 << (SourCParser2.Not - 35)) |
                      (1 << (SourCParser2.Identifier - 35)) |
                      (1 << (SourCParser2.Constant - 35)) |
                      (1 << (SourCParser2.StringLiteral - 35)))) !==
                    0)
              ) {
                {
                  this.state = 148
                  this.seqExprLs()
                }
              }

              this.state = 151
              this.match(SourCParser2.RightParen)
            }
            break

          case 3:
            {
              _localctx = new PrefixIncrContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 152
              ;(_localctx as PrefixIncrContext)._prefix = this._input.LT(1)
              _la = this._input.LA(1)
              if (!(_la === SourCParser2.PlusPlus || _la === SourCParser2.MinusMinus)) {
                ;(_localctx as PrefixIncrContext)._prefix = this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
              this.state = 153
              this.addressableOperands()
            }
            break

          case 4:
            {
              _localctx = new UnopContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 154
              ;(_localctx as UnopContext)._unop = this._input.LT(1)
              _la = this._input.LA(1)
              if (!(_la === SourCParser2.Minus || _la === SourCParser2.Not)) {
                ;(_localctx as UnopContext)._unop = this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
              this.state = 155
              this.expr(14)
            }
            break

          case 5:
            {
              _localctx = new CastContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 156
              this.match(SourCParser2.LeftParen)
              this.state = 157
              this.type()
              this.state = 158
              this.match(SourCParser2.RightParen)
              this.state = 159
              this.expr(13)
            }
            break

          case 6:
            {
              _localctx = new DereferenceContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 161
              this.match(SourCParser2.Star)
              this.state = 162
              this.expr(12)
            }
            break

          case 7:
            {
              _localctx = new AddressOfContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 163
              this.match(SourCParser2.And)
              this.state = 164
              this.expr(11)
            }
            break

          case 8:
            {
              _localctx = new SizeofExprContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 165
              this.match(SourCParser2.Sizeof)
              this.state = 166
              this.match(SourCParser2.LeftParen)
              this.state = 167
              this.sizeOfOperands()
              this.state = 168
              this.match(SourCParser2.RightParen)
            }
            break

          case 9:
            {
              _localctx = new ParenContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 170
              this.match(SourCParser2.LeftParen)
              this.state = 171
              this.expr(0)
              this.state = 172
              this.match(SourCParser2.RightParen)
            }
            break

          case 10:
            {
              _localctx = new PriIdentifierContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 174
              this.primaryIdentifier()
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 203
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 201
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                  {
                    _localctx = new MultContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 177
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                    }
                    this.state = 178
                    ;(_localctx as MultContext)._op = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (
                      !(
                        ((_la - 38) & ~0x1f) === 0 &&
                        ((1 << (_la - 38)) &
                          ((1 << (SourCParser2.Star - 38)) |
                            (1 << (SourCParser2.Div - 38)) |
                            (1 << (SourCParser2.Mod - 38)))) !==
                          0
                      )
                    ) {
                      ;(_localctx as MultContext)._op = this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 179
                    this.expr(10)
                  }
                  break

                case 2:
                  {
                    _localctx = new AddContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 180
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 181
                    ;(_localctx as AddContext)._op = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (!(_la === SourCParser2.Plus || _la === SourCParser2.Minus)) {
                      ;(_localctx as AddContext)._op = this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 182
                    this.expr(9)
                  }
                  break

                case 3:
                  {
                    _localctx = new RelOprContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 183
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 184
                    ;(_localctx as RelOprContext)._op = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (
                      !(
                        (_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << SourCParser2.Less) |
                            (1 << SourCParser2.LessEqual) |
                            (1 << SourCParser2.Greater) |
                            (1 << SourCParser2.GreaterEqual))) !==
                          0
                      )
                    ) {
                      ;(_localctx as RelOprContext)._op = this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 185
                    this.expr(8)
                  }
                  break

                case 4:
                  {
                    _localctx = new EqualityContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 186
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 187
                    ;(_localctx as EqualityContext)._op = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (!(_la === SourCParser2.Equal || _la === SourCParser2.NotEqual)) {
                      ;(_localctx as EqualityContext)._op = this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 188
                    this.expr(7)
                  }
                  break

                case 5:
                  {
                    _localctx = new AndContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 189
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 190
                    ;(_localctx as AndContext)._op = this.match(SourCParser2.AndAnd)
                    this.state = 191
                    this.expr(6)
                  }
                  break

                case 6:
                  {
                    _localctx = new OrContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 192
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 193
                    ;(_localctx as OrContext)._op = this.match(SourCParser2.OrOr)
                    this.state = 194
                    this.expr(5)
                  }
                  break

                case 7:
                  {
                    _localctx = new TernaryContext(new ExprContext(_parentctx, _parentState))
                    ;(_localctx as TernaryContext)._cond = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 195
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 196
                    this.match(SourCParser2.Question)
                    this.state = 197
                    ;(_localctx as TernaryContext)._cons = this.expr(0)
                    this.state = 198
                    this.match(SourCParser2.Colon)
                    this.state = 199
                    ;(_localctx as TernaryContext)._alt = this.expr(3)
                  }
                  break
              }
            }
          }
          this.state = 205
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public primaryIdentifier(): PrimaryIdentifierContext {
    const _localctx: PrimaryIdentifierContext = new PrimaryIdentifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 20, SourCParser2.RULE_primaryIdentifier)
    try {
      this.state = 209
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser2.Identifier:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 206
            this.addressableOperands()
          }
          break
        case SourCParser2.Constant:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 207
            this.match(SourCParser2.Constant)
          }
          break
        case SourCParser2.StringLiteral:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 208
            this.match(SourCParser2.StringLiteral)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public sizeOfOperands(): SizeOfOperandsContext {
    const _localctx: SizeOfOperandsContext = new SizeOfOperandsContext(this._ctx, this.state)
    this.enterRule(_localctx, 22, SourCParser2.RULE_sizeOfOperands)
    let _la: number
    try {
      this.state = 229
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 214
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === SourCParser2.Star) {
              {
                {
                  this.state = 211
                  this.match(SourCParser2.Star)
                }
              }
              this.state = 216
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
            this.state = 217
            this.type()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 221
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === SourCParser2.Star) {
              {
                {
                  this.state = 218
                  this.match(SourCParser2.Star)
                }
              }
              this.state = 223
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
            this.state = 224
            this.match(SourCParser2.Identifier)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 225
            this.match(SourCParser2.And)
            this.state = 226
            this.match(SourCParser2.Identifier)
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 227
            this.match(SourCParser2.Struct)
            this.state = 228
            this.match(SourCParser2.Identifier)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declaration(): DeclarationContext {
    let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 24, SourCParser2.RULE_declaration)
    let _la: number
    try {
      this.state = 274
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
        case 1:
          _localctx = new VariableDeclContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 231
            this.typeDef()
            this.state = 232
            this.match(SourCParser2.Identifier)
            this.state = 238
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser2.Assign) {
              {
                this.state = 233
                this.match(SourCParser2.Assign)
                this.state = 236
                this._errHandler.sync(this)
                switch (this._input.LA(1)) {
                  case SourCParser2.Sizeof:
                  case SourCParser2.LeftParen:
                  case SourCParser2.PlusPlus:
                  case SourCParser2.Minus:
                  case SourCParser2.MinusMinus:
                  case SourCParser2.Star:
                  case SourCParser2.And:
                  case SourCParser2.Not:
                  case SourCParser2.Identifier:
                  case SourCParser2.Constant:
                  case SourCParser2.StringLiteral:
                    {
                      this.state = 234
                      this.expr(0)
                    }
                    break
                  case SourCParser2.LeftBrace:
                    {
                      this.state = 235
                      this.exprLs()
                    }
                    break
                  default:
                    throw new NoViableAltException(this)
                }
              }
            }
          }
          break

        case 2:
          _localctx = new ArrayDeclContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 240
            this.typeDef()
            this.state = 241
            this.match(SourCParser2.Identifier)
            this.state = 242
            this.match(SourCParser2.LeftBracket)
            this.state = 244
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser2.Constant) {
              {
                this.state = 243
                this.match(SourCParser2.Constant)
              }
            }

            this.state = 246
            this.match(SourCParser2.RightBracket)
            this.state = 249
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser2.Assign) {
              {
                this.state = 247
                this.match(SourCParser2.Assign)
                this.state = 248
                this.exprLs()
              }
            }
          }
          break

        case 3:
          _localctx = new FxPointerDeclContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 251
            this.typeDef()
            this.state = 252
            this.match(SourCParser2.LeftParen)
            this.state = 253
            this.match(SourCParser2.Star)
            this.state = 254
            this.match(SourCParser2.Identifier)
            this.state = 255
            this.match(SourCParser2.RightParen)
            this.state = 256
            this.match(SourCParser2.LeftParen)
            this.state = 258
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << SourCParser2.Char) |
                  (1 << SourCParser2.Double) |
                  (1 << SourCParser2.Float) |
                  (1 << SourCParser2.Int) |
                  (1 << SourCParser2.Long) |
                  (1 << SourCParser2.Short) |
                  (1 << SourCParser2.Struct) |
                  (1 << SourCParser2.Unsigned) |
                  (1 << SourCParser2.Void))) !==
                0
            ) {
              {
                this.state = 257
                this.paramLs()
              }
            }

            this.state = 260
            this.match(SourCParser2.RightParen)
          }
          break

        case 4:
          _localctx = new StructDeclContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 262
            this.match(SourCParser2.Struct)
            this.state = 263
            this.match(SourCParser2.Identifier)
            this.state = 264
            this.match(SourCParser2.LeftBrace)
            this.state = 268
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 265
                  this.declaration()
                  this.state = 266
                  this.match(SourCParser2.Semi)
                }
              }
              this.state = 270
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << SourCParser2.Char) |
                  (1 << SourCParser2.Double) |
                  (1 << SourCParser2.Float) |
                  (1 << SourCParser2.Int) |
                  (1 << SourCParser2.Long) |
                  (1 << SourCParser2.Short) |
                  (1 << SourCParser2.Struct) |
                  (1 << SourCParser2.Unsigned) |
                  (1 << SourCParser2.Void))) !==
                0
            )
            this.state = 272
            this.match(SourCParser2.RightBrace)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public typeDef(): TypeDefContext {
    const _localctx: TypeDefContext = new TypeDefContext(this._ctx, this.state)
    this.enterRule(_localctx, 26, SourCParser2.RULE_typeDef)
    let _la: number
    try {
      this.state = 294
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser2.Char:
        case SourCParser2.Double:
        case SourCParser2.Float:
        case SourCParser2.Int:
        case SourCParser2.Long:
        case SourCParser2.Short:
        case SourCParser2.Unsigned:
        case SourCParser2.Void:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 277
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser2.Unsigned) {
              {
                this.state = 276
                this.match(SourCParser2.Unsigned)
              }
            }

            this.state = 279
            this.type()
            this.state = 283
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === SourCParser2.Star) {
              {
                {
                  this.state = 280
                  this.match(SourCParser2.Star)
                }
              }
              this.state = 285
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
          }
          break
        case SourCParser2.Struct:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 286
            this.match(SourCParser2.Struct)
            this.state = 287
            this.match(SourCParser2.Identifier)
            this.state = 291
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === SourCParser2.Star) {
              {
                {
                  this.state = 288
                  this.match(SourCParser2.Star)
                }
              }
              this.state = 293
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public exprLs(): ExprLsContext {
    const _localctx: ExprLsContext = new ExprLsContext(this._ctx, this.state)
    this.enterRule(_localctx, 28, SourCParser2.RULE_exprLs)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 296
        this.match(SourCParser2.LeftBrace)
        this.state = 297
        this.seqExprLs()
        this.state = 298
        this.match(SourCParser2.RightBrace)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public seqExprLs(): SeqExprLsContext {
    const _localctx: SeqExprLsContext = new SeqExprLsContext(this._ctx, this.state)
    this.enterRule(_localctx, 30, SourCParser2.RULE_seqExprLs)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 305
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 300
                _localctx._expr = this.expr(0)
                _localctx._eLs.push(_localctx._expr)
                this.state = 301
                this.match(SourCParser2.Comma)
              }
            }
          }
          this.state = 307
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx)
        }
        this.state = 308
        _localctx._expr = this.expr(0)
        _localctx._eLs.push(_localctx._expr)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public assignment(): AssignmentContext {
    const _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state)
    this.enterRule(_localctx, 32, SourCParser2.RULE_assignment)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 313
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === SourCParser2.Star) {
          {
            {
              this.state = 310
              this.match(SourCParser2.Star)
            }
          }
          this.state = 315
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 316
        this.addressableOperands()
        this.state = 317
        this.match(SourCParser2.Assign)
        this.state = 320
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case SourCParser2.Sizeof:
          case SourCParser2.LeftParen:
          case SourCParser2.PlusPlus:
          case SourCParser2.Minus:
          case SourCParser2.MinusMinus:
          case SourCParser2.Star:
          case SourCParser2.And:
          case SourCParser2.Not:
          case SourCParser2.Identifier:
          case SourCParser2.Constant:
          case SourCParser2.StringLiteral:
            {
              this.state = 318
              this.expr(0)
            }
            break
          case SourCParser2.LeftBrace:
            {
              this.state = 319
              this.exprLs()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public addressableOperands(): AddressableOperandsContext {
    let _localctx: AddressableOperandsContext = new AddressableOperandsContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 34, SourCParser2.RULE_addressableOperands)
    try {
      this.state = 334
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
        case 1:
          _localctx = new ArraySubscriptContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 322
            this.match(SourCParser2.Identifier)
            this.state = 323
            this.match(SourCParser2.LeftBracket)
            this.state = 324
            this.expr(0)
            this.state = 325
            this.match(SourCParser2.RightBracket)
          }
          break

        case 2:
          _localctx = new StructAccessContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 327
            this.match(SourCParser2.Identifier)
            this.state = 328
            this.match(SourCParser2.Dot)
            this.state = 329
            this.match(SourCParser2.Identifier)
          }
          break

        case 3:
          _localctx = new StructAccessThruPointerContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 330
            this.match(SourCParser2.Identifier)
            this.state = 331
            this.match(SourCParser2.Arrow)
            this.state = 332
            this.match(SourCParser2.Identifier)
          }
          break

        case 4:
          _localctx = new AtomIdentifierContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 333
            this.match(SourCParser2.Identifier)
          }
          break
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 9:
        return this.expr_sempred(_localctx as ExprContext, predIndex)
    }
    return true
  }
  private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 9)

      case 1:
        return this.precpred(this._ctx, 8)

      case 2:
        return this.precpred(this._ctx, 7)

      case 3:
        return this.precpred(this._ctx, 6)

      case 4:
        return this.precpred(this._ctx, 5)

      case 5:
        return this.precpred(this._ctx, 4)

      case 6:
        return this.precpred(this._ctx, 2)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03J\u0153\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03,\n\x03\f\x03' +
    '\x0E\x03/\v\x03\x03\x03\x03\x03\x03\x04\x07\x044\n\x04\f\x04\x0E\x047' +
    '\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05=\n\x05\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x05\x06C\n\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07' +
    '\x03\x07\x07\x07K\n\x07\f\x07\x0E\x07N\v\x07\x03\x07\x03\x07\x03\b\x03' +
    '\b\x03\b\x03\t\x03\t\x07\tW\n\t\f\t\x0E\tZ\v\t\x03\t\x03\t\x03\n\x03\n' +
    '\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x05\no\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x05\nz\n\n\x03\n\x03\n\x05\n~\n\n\x03\n\x03\n\x05\n\x82' +
    '\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\x88\n\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x05\n\x8F\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x98\n' +
    '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x05\v\xB2\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v' +
    '\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x03\v\x07\v\xCC\n\v\f\v\x0E\v\xCF\v\v\x03\f\x03\f\x03\f' +
    '\x05\f\xD4\n\f\x03\r\x07\r\xD7\n\r\f\r\x0E\r\xDA\v\r\x03\r\x03\r\x07\r' +
    '\xDE\n\r\f\r\x0E\r\xE1\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xE8\n\r' +
    '\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xEF\n\x0E\x05\x0E\xF1' +
    '\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xF7\n\x0E\x03\x0E\x03\x0E' +
    '\x03\x0E\x05\x0E\xFC\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03' +
    '\x0E\x03\x0E\x05\x0E\u0105\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E' +
    '\x03\x0E\x03\x0E\x03\x0E\x06\x0E\u010F\n\x0E\r\x0E\x0E\x0E\u0110\x03\x0E' +
    '\x03\x0E\x05\x0E\u0115\n\x0E\x03\x0F\x05\x0F\u0118\n\x0F\x03\x0F\x03\x0F' +
    '\x07\x0F\u011C\n\x0F\f\x0F\x0E\x0F\u011F\v\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x07\x0F\u0124\n\x0F\f\x0F\x0E\x0F\u0127\v\x0F\x05\x0F\u0129\n\x0F\x03' +
    '\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0132\n\x11' +
    '\f\x11\x0E\x11\u0135\v\x11\x03\x11\x03\x11\x03\x12\x07\x12\u013A\n\x12' +
    '\f\x12\x0E\x12\u013D\v\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0143' +
    '\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0151\n\x13\x03\x13\x02\x02\x03' +
    '\x14\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12' +
    '\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02\x02' +
    "\t\b\x02\x04\x04\b\b\n\n\r\x0E\x10\x10\x16\x16\x04\x02%%''\x04\x02&" +
    '&..\x03\x02(*\x04\x02$$&&\x03\x02\x1E!\x03\x029:\x02\u017F\x02&\x03\x02' +
    '\x02\x02\x04-\x03\x02\x02\x02\x065\x03\x02\x02\x02\b<\x03\x02\x02\x02' +
    '\n>\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EQ\x03\x02\x02\x02\x10T\x03\x02' +
    '\x02\x02\x12\x8E\x03\x02\x02\x02\x14\xB1\x03\x02\x02\x02\x16\xD3\x03\x02' +
    '\x02\x02\x18\xE7\x03\x02\x02\x02\x1A\u0114\x03\x02\x02\x02\x1C\u0128\x03' +
    '\x02\x02\x02\x1E\u012A\x03\x02\x02\x02 \u0133\x03\x02\x02\x02"\u013B' +
    "\x03\x02\x02\x02$\u0150\x03\x02\x02\x02&'\t\x02\x02\x02'\x03\x03\x02" +
    '\x02\x02()\x05\x1C\x0F\x02)*\x072\x02\x02*,\x03\x02\x02\x02+(\x03\x02' +
    '\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02' +
    '\x02\x02/-\x03\x02\x02\x0201\x05\x1C\x0F\x021\x05\x03\x02\x02\x0224\x05' +
    '\b\x05\x0232\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x0256\x03' +
    '\x02\x02\x026\x07\x03\x02\x02\x0275\x03\x02\x02\x028=\x05\n\x06\x029:' +
    '\x05\x1A\x0E\x02:;\x071\x02\x02;=\x03\x02\x02\x02<8\x03\x02\x02\x02<9' +
    '\x03\x02\x02\x02=\t\x03\x02\x02\x02>?\x05\x1C\x0F\x02?@\x07=\x02\x02@' +
    'B\x07\x18\x02\x02AC\x05\f\x07\x02BA\x03\x02\x02\x02BC\x03\x02\x02\x02' +
    'CD\x03\x02\x02\x02DE\x07\x19\x02\x02EF\x05\x10\t\x02F\v\x03\x02\x02\x02' +
    'GH\x05\x0E\b\x02HI\x072\x02\x02IK\x03\x02\x02\x02JG\x03\x02\x02\x02KN' +
    '\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MO\x03\x02\x02\x02' +
    'NL\x03\x02\x02\x02OP\x05\x0E\b\x02P\r\x03\x02\x02\x02QR\x05\x1C\x0F\x02' +
    'RS\x07=\x02\x02S\x0F\x03\x02\x02\x02TX\x07\x1C\x02\x02UW\x05\x12\n\x02' +
    'VU\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02' +
    'Y[\x03\x02\x02\x02ZX\x03\x02\x02\x02[\\\x07\x1D\x02\x02\\\x11\x03\x02' +
    '\x02\x02]^\x05\x14\v\x02^_\x071\x02\x02_\x8F\x03\x02\x02\x02`a\x05\x1A' +
    '\x0E\x02ab\x071\x02\x02b\x8F\x03\x02\x02\x02cd\x05"\x12\x02de\x071\x02' +
    '\x02e\x8F\x03\x02\x02\x02f\x8F\x05\x10\t\x02gh\x07\f\x02\x02hi\x07\x18' +
    '\x02\x02ij\x05\x14\v\x02jk\x07\x19\x02\x02kn\x05\x10\t\x02lm\x07\t\x02' +
    '\x02mo\x05\x10\t\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\x8F\x03\x02' +
    '\x02\x02pq\x07\x17\x02\x02qr\x07\x18\x02\x02rs\x05\x14\v\x02st\x07\x19' +
    '\x02\x02tu\x05\x10\t\x02u\x8F\x03\x02\x02\x02vw\x07\v\x02\x02wy\x07\x18' +
    '\x02\x02xz\x05"\x12\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02' +
    '\x02\x02{}\x071\x02\x02|~\x05\x14\v\x02}|\x03\x02\x02\x02}~\x03\x02\x02' +
    '\x02~\x7F\x03\x02\x02\x02\x7F\x81\x071\x02\x02\x80\x82\x05\x14\v\x02\x81' +
    '\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83' +
    '\x84\x07\x19\x02\x02\x84\x8F\x05\x10\t\x02\x85\x87\x07\x0F\x02\x02\x86' +
    '\x88\x05\x14\v\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88' +
    '\x89\x03\x02\x02\x02\x89\x8F\x071\x02\x02\x8A\x8B\x07\x03\x02\x02\x8B' +
    '\x8F\x071\x02\x02\x8C\x8D\x07\x06\x02\x02\x8D\x8F\x071\x02\x02\x8E]\x03' +
    '\x02\x02\x02\x8E`\x03\x02\x02\x02\x8Ec\x03\x02\x02\x02\x8Ef\x03\x02\x02' +
    '\x02\x8Eg\x03\x02\x02\x02\x8Ep\x03\x02\x02\x02\x8Ev\x03\x02\x02\x02\x8E' +
    '\x85\x03\x02\x02\x02\x8E\x8A\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8F' +
    '\x13\x03\x02\x02\x02\x90\x91\b\v\x01\x02\x91\x92\x05$\x13\x02\x92\x93' +
    '\t\x03\x02\x02\x93\xB2\x03\x02\x02\x02\x94\x95\x07=\x02\x02\x95\x97\x07' +
    '\x18\x02\x02\x96\x98\x05 \x11\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03' +
    '\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\xB2\x07\x19\x02\x02\x9A\x9B\t' +
    '\x03\x02\x02\x9B\xB2\x05$\x13\x02\x9C\x9D\t\x04\x02\x02\x9D\xB2\x05\x14' +
    '\v\x10\x9E\x9F\x07\x18\x02\x02\x9F\xA0\x05\x02\x02\x02\xA0\xA1\x07\x19' +
    '\x02\x02\xA1\xA2\x05\x14\v\x0F\xA2\xB2\x03\x02\x02\x02\xA3\xA4\x07(\x02' +
    '\x02\xA4\xB2\x05\x14\v\x0E\xA5\xA6\x07+\x02\x02\xA6\xB2\x05\x14\v\r\xA7' +
    '\xA8\x07\x12\x02\x02\xA8\xA9\x07\x18\x02\x02\xA9\xAA\x05\x18\r\x02\xAA' +
    '\xAB\x07\x19\x02\x02\xAB\xB2\x03\x02\x02\x02\xAC\xAD\x07\x18\x02\x02\xAD' +
    '\xAE\x05\x14\v\x02\xAE\xAF\x07\x19\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0' +
    '\xB2\x05\x16\f\x02\xB1\x90\x03\x02\x02\x02\xB1\x94\x03\x02\x02\x02\xB1' +
    '\x9A\x03\x02\x02\x02\xB1\x9C\x03\x02\x02\x02\xB1\x9E\x03\x02\x02\x02\xB1' +
    '\xA3\x03\x02\x02\x02\xB1\xA5\x03\x02\x02\x02\xB1\xA7\x03\x02\x02\x02\xB1' +
    '\xAC\x03\x02\x02\x02\xB1\xB0\x03\x02\x02\x02\xB2\xCD\x03\x02\x02\x02\xB3' +
    '\xB4\f\v\x02\x02\xB4\xB5\t\x05\x02\x02\xB5\xCC\x05\x14\v\f\xB6\xB7\f\n' +
    '\x02\x02\xB7\xB8\t\x06\x02\x02\xB8\xCC\x05\x14\v\v\xB9\xBA\f\t\x02\x02' +
    '\xBA\xBB\t\x07\x02\x02\xBB\xCC\x05\x14\v\n\xBC\xBD\f\b\x02\x02\xBD\xBE' +
    '\t\b\x02\x02\xBE\xCC\x05\x14\v\t\xBF\xC0\f\x07\x02\x02\xC0\xC1\x07,\x02' +
    '\x02\xC1\xCC\x05\x14\v\b\xC2\xC3\f\x06\x02\x02\xC3\xC4\x07-\x02\x02\xC4' +
    '\xCC\x05\x14\v\x07\xC5\xC6\f\x04\x02\x02\xC6\xC7\x07/\x02\x02\xC7\xC8' +
    '\x05\x14\v\x02\xC8\xC9\x070\x02\x02\xC9\xCA\x05\x14\v\x05\xCA\xCC\x03' +
    '\x02\x02\x02\xCB\xB3\x03\x02\x02\x02\xCB\xB6\x03\x02\x02\x02\xCB\xB9\x03' +
    '\x02\x02\x02\xCB\xBC\x03\x02\x02\x02\xCB\xBF\x03\x02\x02\x02\xCB\xC2\x03' +
    '\x02\x02\x02\xCB\xC5\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03' +
    '\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\x15\x03\x02\x02\x02\xCF\xCD\x03' +
    '\x02\x02\x02\xD0\xD4\x05$\x13\x02\xD1\xD4\x07>\x02\x02\xD2\xD4\x07@\x02' +
    '\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02' +
    '\x02\xD4\x17\x03\x02\x02\x02\xD5\xD7\x07(\x02\x02\xD6\xD5\x03\x02\x02' +
    '\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02' +
    '\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xE8\x05\x02\x02' +
    '\x02\xDC\xDE\x07(\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\xE1\x03\x02\x02' +
    '\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x03\x02\x02' +
    '\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE8\x07=\x02\x02\xE3\xE4\x07+\x02\x02' +
    '\xE4\xE8\x07=\x02\x02\xE5\xE6\x07\x13\x02\x02\xE6\xE8\x07=\x02\x02\xE7' +
    '\xD8\x03\x02\x02\x02\xE7\xDF\x03\x02\x02\x02\xE7\xE3\x03\x02\x02\x02\xE7' +
    '\xE5\x03\x02\x02\x02\xE8\x19\x03\x02\x02\x02\xE9\xEA\x05\x1C\x0F\x02\xEA' +
    '\xF0\x07=\x02\x02\xEB\xEE\x073\x02\x02\xEC\xEF\x05\x14\v\x02\xED\xEF\x05' +
    '\x1E\x10\x02\xEE\xEC\x03\x02\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\xF1\x03' +
    '\x02\x02\x02\xF0\xEB\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\u0115' +
    '\x03\x02\x02\x02\xF2\xF3\x05\x1C\x0F\x02\xF3\xF4\x07=\x02\x02\xF4\xF6' +
    '\x07\x1A\x02\x02\xF5\xF7\x07>\x02\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7' +
    '\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFB\x07\x1B\x02\x02\xF9\xFA' +
    '\x073\x02\x02\xFA\xFC\x05\x1E\x10\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC' +
    '\x03\x02\x02\x02\xFC\u0115\x03\x02\x02\x02\xFD\xFE\x05\x1C\x0F\x02\xFE' +
    '\xFF\x07\x18\x02\x02\xFF\u0100\x07(\x02\x02\u0100\u0101\x07=\x02\x02\u0101' +
    '\u0102\x07\x19\x02\x02\u0102\u0104\x07\x18\x02\x02\u0103\u0105\x05\f\x07' +
    '\x02\u0104\u0103\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0106' +
    '\x03\x02\x02\x02\u0106\u0107\x07\x19\x02\x02\u0107\u0115\x03\x02\x02\x02' +
    '\u0108\u0109\x07\x13\x02\x02\u0109\u010A\x07=\x02\x02\u010A\u010E\x07' +
    '\x1C\x02\x02\u010B\u010C\x05\x1A\x0E\x02\u010C\u010D\x071\x02\x02\u010D' +
    '\u010F\x03\x02\x02\x02\u010E\u010B\x03\x02\x02\x02\u010F\u0110\x03\x02' +
    '\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111' +
    '\u0112\x03\x02\x02\x02\u0112\u0113\x07\x1D\x02\x02\u0113\u0115\x03\x02' +
    '\x02\x02\u0114\xE9\x03\x02\x02\x02\u0114\xF2\x03\x02\x02\x02\u0114\xFD' +
    '\x03\x02\x02\x02\u0114\u0108\x03\x02\x02\x02\u0115\x1B\x03\x02\x02\x02' +
    '\u0116\u0118\x07\x15\x02\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03' +
    '\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011D\x05\x02\x02\x02\u011A' +
    '\u011C\x07(\x02\x02\u011B\u011A\x03\x02\x02\x02\u011C\u011F\x03\x02\x02' +
    '\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0129' +
    '\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0121\x07\x13\x02\x02' +
    '\u0121\u0125\x07=\x02\x02\u0122\u0124\x07(\x02\x02\u0123\u0122\x03\x02' +
    '\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125' +
    '\u0126\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02' +
    '\x02\x02\u0128\u0117\x03\x02\x02\x02\u0128\u0120\x03\x02\x02\x02\u0129' +
    '\x1D\x03\x02\x02\x02\u012A\u012B\x07\x1C\x02\x02\u012B\u012C\x05 \x11' +
    '\x02\u012C\u012D\x07\x1D\x02\x02\u012D\x1F\x03\x02\x02\x02\u012E\u012F' +
    '\x05\x14\v\x02\u012F\u0130\x072\x02\x02\u0130\u0132\x03\x02\x02\x02\u0131' +
    '\u012E\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02' +
    '\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135' +
    '\u0133\x03\x02\x02\x02\u0136\u0137\x05\x14\v\x02\u0137!\x03\x02\x02\x02' +
    '\u0138\u013A\x07(\x02\x02\u0139\u0138\x03\x02\x02\x02\u013A\u013D\x03' +
    '\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C' +
    '\u013E\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E\u013F\x05$\x13' +
    '\x02\u013F\u0142\x073\x02\x02\u0140\u0143\x05\x14\v\x02\u0141\u0143\x05' +
    '\x1E\x10\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143' +
    '#\x03\x02\x02\x02\u0144\u0145\x07=\x02\x02\u0145\u0146\x07\x1A\x02\x02' +
    '\u0146\u0147\x05\x14\v\x02\u0147\u0148\x07\x1B\x02\x02\u0148\u0151\x03' +
    '\x02\x02\x02\u0149\u014A\x07=\x02\x02\u014A\u014B\x07<\x02\x02\u014B\u0151' +
    '\x07=\x02\x02\u014C\u014D\x07=\x02\x02\u014D\u014E\x07;\x02\x02\u014E' +
    '\u0151\x07=\x02\x02\u014F\u0151\x07=\x02\x02\u0150\u0144\x03\x02\x02\x02' +
    '\u0150\u0149\x03\x02\x02\x02\u0150\u014C\x03\x02\x02\x02\u0150\u014F\x03' +
    '\x02\x02\x02\u0151%\x03\x02\x02\x02%-5<BLXny}\x81\x87\x8E\x97\xB1\xCB' +
    '\xCD\xD3\xD8\xDF\xE7\xEE\xF0\xF6\xFB\u0104\u0110\u0114\u0117\u011D\u0125' +
    '\u0128\u0133\u013B\u0142\u0150'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!SourCParser2.__ATN) {
      SourCParser2.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(SourCParser2._serializedATN)
      )
    }

    return SourCParser2.__ATN
  }
}

export class TypeContext extends ParserRuleContext {
  public Void(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Void, 0)
  }
  public Char(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Char, 0)
  }
  public Short(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Short, 0)
  }
  public Int(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Int, 0)
  }
  public Long(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Long, 0)
  }
  public Float(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Float, 0)
  }
  public Double(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Double, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_type
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterType) {
      listener.enterType(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitType) {
      listener.exitType(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitType) {
      return visitor.visitType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeNameListContext extends ParserRuleContext {
  public typeDef(): TypeDefContext[]
  public typeDef(i: number): TypeDefContext
  public typeDef(i?: number): TypeDefContext | TypeDefContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeDefContext)
    } else {
      return this.getRuleContext(i, TypeDefContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Comma)
    } else {
      return this.getToken(SourCParser2.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_typeNameList
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterTypeNameList) {
      listener.enterTypeNameList(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitTypeNameList) {
      listener.exitTypeNameList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitTypeNameList) {
      return visitor.visitTypeNameList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ProgramContext extends ParserRuleContext {
  public programStmt(): ProgramStmtContext[]
  public programStmt(i: number): ProgramStmtContext
  public programStmt(i?: number): ProgramStmtContext | ProgramStmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ProgramStmtContext)
    } else {
      return this.getRuleContext(i, ProgramStmtContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_program
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterProgram) {
      listener.enterProgram(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitProgram) {
      listener.exitProgram(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitProgram) {
      return visitor.visitProgram(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ProgramStmtContext extends ParserRuleContext {
  public functionDefinition(): FunctionDefinitionContext | undefined {
    return this.tryGetRuleContext(0, FunctionDefinitionContext)
  }
  public declaration(): DeclarationContext | undefined {
    return this.tryGetRuleContext(0, DeclarationContext)
  }
  public Semi(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Semi, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_programStmt
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterProgramStmt) {
      listener.enterProgramStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitProgramStmt) {
      listener.exitProgramStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitProgramStmt) {
      return visitor.visitProgramStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionDefinitionContext extends ParserRuleContext {
  public typeDef(): TypeDefContext {
    return this.getRuleContext(0, TypeDefContext)
  }
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser2.LeftParen, 0)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser2.RightParen, 0)
  }
  public compoundStatement(): CompoundStatementContext {
    return this.getRuleContext(0, CompoundStatementContext)
  }
  public paramLs(): ParamLsContext | undefined {
    return this.tryGetRuleContext(0, ParamLsContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_functionDefinition
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterFunctionDefinition) {
      listener.enterFunctionDefinition(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitFunctionDefinition) {
      listener.exitFunctionDefinition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitFunctionDefinition) {
      return visitor.visitFunctionDefinition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParamLsContext extends ParserRuleContext {
  public _param!: ParamContext
  public _pLs: ParamContext[] = []
  public param(): ParamContext[]
  public param(i: number): ParamContext
  public param(i?: number): ParamContext | ParamContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ParamContext)
    } else {
      return this.getRuleContext(i, ParamContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Comma)
    } else {
      return this.getToken(SourCParser2.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_paramLs
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterParamLs) {
      listener.enterParamLs(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitParamLs) {
      listener.exitParamLs(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitParamLs) {
      return visitor.visitParamLs(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParamContext extends ParserRuleContext {
  public typeDef(): TypeDefContext {
    return this.getRuleContext(0, TypeDefContext)
  }
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_param
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterParam) {
      listener.enterParam(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitParam) {
      listener.exitParam(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitParam) {
      return visitor.visitParam(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CompoundStatementContext extends ParserRuleContext {
  public LeftBrace(): TerminalNode {
    return this.getToken(SourCParser2.LeftBrace, 0)
  }
  public RightBrace(): TerminalNode {
    return this.getToken(SourCParser2.RightBrace, 0)
  }
  public stmt(): StmtContext[]
  public stmt(i: number): StmtContext
  public stmt(i?: number): StmtContext | StmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StmtContext)
    } else {
      return this.getRuleContext(i, StmtContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_compoundStatement
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterCompoundStatement) {
      listener.enterCompoundStatement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitCompoundStatement) {
      listener.exitCompoundStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitCompoundStatement) {
      return visitor.visitCompoundStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StmtContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_stmt
  }
  public copyFrom(ctx: StmtContext): void {
    super.copyFrom(ctx)
  }
}
export class ExprStmtContext extends StmtContext {
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)
  }
  public Semi(): TerminalNode {
    return this.getToken(SourCParser2.Semi, 0)
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterExprStmt) {
      listener.enterExprStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitExprStmt) {
      listener.exitExprStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitExprStmt) {
      return visitor.visitExprStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DeclrStmtContext extends StmtContext {
  public declaration(): DeclarationContext {
    return this.getRuleContext(0, DeclarationContext)
  }
  public Semi(): TerminalNode {
    return this.getToken(SourCParser2.Semi, 0)
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterDeclrStmt) {
      listener.enterDeclrStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitDeclrStmt) {
      listener.exitDeclrStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitDeclrStmt) {
      return visitor.visitDeclrStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AssgnStmtContext extends StmtContext {
  public assignment(): AssignmentContext {
    return this.getRuleContext(0, AssignmentContext)
  }
  public Semi(): TerminalNode {
    return this.getToken(SourCParser2.Semi, 0)
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterAssgnStmt) {
      listener.enterAssgnStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitAssgnStmt) {
      listener.exitAssgnStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitAssgnStmt) {
      return visitor.visitAssgnStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class CmpdStmtContext extends StmtContext {
  public compoundStatement(): CompoundStatementContext {
    return this.getRuleContext(0, CompoundStatementContext)
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterCmpdStmt) {
      listener.enterCmpdStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitCmpdStmt) {
      listener.exitCmpdStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitCmpdStmt) {
      return visitor.visitCmpdStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class IfElseStmtContext extends StmtContext {
  public If(): TerminalNode {
    return this.getToken(SourCParser2.If, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser2.LeftParen, 0)
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser2.RightParen, 0)
  }
  public compoundStatement(): CompoundStatementContext[]
  public compoundStatement(i: number): CompoundStatementContext
  public compoundStatement(i?: number): CompoundStatementContext | CompoundStatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CompoundStatementContext)
    } else {
      return this.getRuleContext(i, CompoundStatementContext)
    }
  }
  public Else(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Else, 0)
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterIfElseStmt) {
      listener.enterIfElseStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitIfElseStmt) {
      listener.exitIfElseStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitIfElseStmt) {
      return visitor.visitIfElseStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class WhileStmtContext extends StmtContext {
  public While(): TerminalNode {
    return this.getToken(SourCParser2.While, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser2.LeftParen, 0)
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser2.RightParen, 0)
  }
  public compoundStatement(): CompoundStatementContext {
    return this.getRuleContext(0, CompoundStatementContext)
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterWhileStmt) {
      listener.enterWhileStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitWhileStmt) {
      listener.exitWhileStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitWhileStmt) {
      return visitor.visitWhileStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ForStmtContext extends StmtContext {
  public _init!: AssignmentContext
  public _test!: ExprContext
  public _incr!: ExprContext
  public For(): TerminalNode {
    return this.getToken(SourCParser2.For, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser2.LeftParen, 0)
  }
  public Semi(): TerminalNode[]
  public Semi(i: number): TerminalNode
  public Semi(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Semi)
    } else {
      return this.getToken(SourCParser2.Semi, i)
    }
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser2.RightParen, 0)
  }
  public compoundStatement(): CompoundStatementContext {
    return this.getRuleContext(0, CompoundStatementContext)
  }
  public assignment(): AssignmentContext | undefined {
    return this.tryGetRuleContext(0, AssignmentContext)
  }
  public expr(): ExprContext[]
  public expr(i: number): ExprContext
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext)
    } else {
      return this.getRuleContext(i, ExprContext)
    }
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterForStmt) {
      listener.enterForStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitForStmt) {
      listener.exitForStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitForStmt) {
      return visitor.visitForStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ReturnExprContext extends StmtContext {
  public Return(): TerminalNode {
    return this.getToken(SourCParser2.Return, 0)
  }
  public Semi(): TerminalNode {
    return this.getToken(SourCParser2.Semi, 0)
  }
  public expr(): ExprContext | undefined {
    return this.tryGetRuleContext(0, ExprContext)
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterReturnExpr) {
      listener.enterReturnExpr(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitReturnExpr) {
      listener.exitReturnExpr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitReturnExpr) {
      return visitor.visitReturnExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class BreakStmtContext extends StmtContext {
  public Break(): TerminalNode {
    return this.getToken(SourCParser2.Break, 0)
  }
  public Semi(): TerminalNode {
    return this.getToken(SourCParser2.Semi, 0)
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterBreakStmt) {
      listener.enterBreakStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitBreakStmt) {
      listener.exitBreakStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitBreakStmt) {
      return visitor.visitBreakStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ContinueStmtContext extends StmtContext {
  public Continue(): TerminalNode {
    return this.getToken(SourCParser2.Continue, 0)
  }
  public Semi(): TerminalNode {
    return this.getToken(SourCParser2.Semi, 0)
  }
  constructor(ctx: StmtContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterContinueStmt) {
      listener.enterContinueStmt(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitContinueStmt) {
      listener.exitContinueStmt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitContinueStmt) {
      return visitor.visitContinueStmt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExprContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_expr
  }
  public copyFrom(ctx: ExprContext): void {
    super.copyFrom(ctx)
  }
}
export class SuffixIncrContext extends ExprContext {
  public _suffix!: Token
  public addressableOperands(): AddressableOperandsContext {
    return this.getRuleContext(0, AddressableOperandsContext)
  }
  public PlusPlus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.PlusPlus, 0)
  }
  public MinusMinus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.MinusMinus, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterSuffixIncr) {
      listener.enterSuffixIncr(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitSuffixIncr) {
      listener.exitSuffixIncr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitSuffixIncr) {
      return visitor.visitSuffixIncr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class FunctionCallContext extends ExprContext {
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser2.LeftParen, 0)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser2.RightParen, 0)
  }
  public seqExprLs(): SeqExprLsContext | undefined {
    return this.tryGetRuleContext(0, SeqExprLsContext)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterFunctionCall) {
      listener.enterFunctionCall(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitFunctionCall) {
      listener.exitFunctionCall(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitFunctionCall) {
      return visitor.visitFunctionCall(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PrefixIncrContext extends ExprContext {
  public _prefix!: Token
  public addressableOperands(): AddressableOperandsContext {
    return this.getRuleContext(0, AddressableOperandsContext)
  }
  public PlusPlus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.PlusPlus, 0)
  }
  public MinusMinus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.MinusMinus, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterPrefixIncr) {
      listener.enterPrefixIncr(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitPrefixIncr) {
      listener.exitPrefixIncr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitPrefixIncr) {
      return visitor.visitPrefixIncr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class UnopContext extends ExprContext {
  public _unop!: Token
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)
  }
  public Not(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Not, 0)
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Minus, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterUnop) {
      listener.enterUnop(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitUnop) {
      listener.exitUnop(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitUnop) {
      return visitor.visitUnop(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class CastContext extends ExprContext {
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser2.LeftParen, 0)
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser2.RightParen, 0)
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterCast) {
      listener.enterCast(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitCast) {
      listener.exitCast(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitCast) {
      return visitor.visitCast(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DereferenceContext extends ExprContext {
  public Star(): TerminalNode {
    return this.getToken(SourCParser2.Star, 0)
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterDereference) {
      listener.enterDereference(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitDereference) {
      listener.exitDereference(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitDereference) {
      return visitor.visitDereference(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AddressOfContext extends ExprContext {
  public And(): TerminalNode {
    return this.getToken(SourCParser2.And, 0)
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterAddressOf) {
      listener.enterAddressOf(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitAddressOf) {
      listener.exitAddressOf(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitAddressOf) {
      return visitor.visitAddressOf(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class SizeofExprContext extends ExprContext {
  public Sizeof(): TerminalNode {
    return this.getToken(SourCParser2.Sizeof, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser2.LeftParen, 0)
  }
  public sizeOfOperands(): SizeOfOperandsContext {
    return this.getRuleContext(0, SizeOfOperandsContext)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser2.RightParen, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterSizeofExpr) {
      listener.enterSizeofExpr(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitSizeofExpr) {
      listener.exitSizeofExpr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitSizeofExpr) {
      return visitor.visitSizeofExpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class MultContext extends ExprContext {
  public _op!: Token
  public expr(): ExprContext[]
  public expr(i: number): ExprContext
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext)
    } else {
      return this.getRuleContext(i, ExprContext)
    }
  }
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Star, 0)
  }
  public Div(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Div, 0)
  }
  public Mod(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Mod, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterMult) {
      listener.enterMult(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitMult) {
      listener.exitMult(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitMult) {
      return visitor.visitMult(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AddContext extends ExprContext {
  public _op!: Token
  public expr(): ExprContext[]
  public expr(i: number): ExprContext
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext)
    } else {
      return this.getRuleContext(i, ExprContext)
    }
  }
  public Plus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Plus, 0)
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Minus, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterAdd) {
      listener.enterAdd(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitAdd) {
      listener.exitAdd(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitAdd) {
      return visitor.visitAdd(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class RelOprContext extends ExprContext {
  public _op!: Token
  public expr(): ExprContext[]
  public expr(i: number): ExprContext
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext)
    } else {
      return this.getRuleContext(i, ExprContext)
    }
  }
  public Greater(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Greater, 0)
  }
  public GreaterEqual(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.GreaterEqual, 0)
  }
  public Less(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Less, 0)
  }
  public LessEqual(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.LessEqual, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterRelOpr) {
      listener.enterRelOpr(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitRelOpr) {
      listener.exitRelOpr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitRelOpr) {
      return visitor.visitRelOpr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class EqualityContext extends ExprContext {
  public _op!: Token
  public expr(): ExprContext[]
  public expr(i: number): ExprContext
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext)
    } else {
      return this.getRuleContext(i, ExprContext)
    }
  }
  public Equal(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Equal, 0)
  }
  public NotEqual(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.NotEqual, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterEquality) {
      listener.enterEquality(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitEquality) {
      listener.exitEquality(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitEquality) {
      return visitor.visitEquality(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AndContext extends ExprContext {
  public _op!: Token
  public expr(): ExprContext[]
  public expr(i: number): ExprContext
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext)
    } else {
      return this.getRuleContext(i, ExprContext)
    }
  }
  public AndAnd(): TerminalNode {
    return this.getToken(SourCParser2.AndAnd, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterAnd) {
      listener.enterAnd(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitAnd) {
      listener.exitAnd(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitAnd) {
      return visitor.visitAnd(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class OrContext extends ExprContext {
  public _op!: Token
  public expr(): ExprContext[]
  public expr(i: number): ExprContext
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext)
    } else {
      return this.getRuleContext(i, ExprContext)
    }
  }
  public OrOr(): TerminalNode {
    return this.getToken(SourCParser2.OrOr, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterOr) {
      listener.enterOr(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitOr) {
      listener.exitOr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitOr) {
      return visitor.visitOr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ParenContext extends ExprContext {
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser2.LeftParen, 0)
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser2.RightParen, 0)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterParen) {
      listener.enterParen(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitParen) {
      listener.exitParen(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitParen) {
      return visitor.visitParen(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class TernaryContext extends ExprContext {
  public _cond!: ExprContext
  public _cons!: ExprContext
  public _alt!: ExprContext
  public Question(): TerminalNode {
    return this.getToken(SourCParser2.Question, 0)
  }
  public Colon(): TerminalNode {
    return this.getToken(SourCParser2.Colon, 0)
  }
  public expr(): ExprContext[]
  public expr(i: number): ExprContext
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext)
    } else {
      return this.getRuleContext(i, ExprContext)
    }
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterTernary) {
      listener.enterTernary(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitTernary) {
      listener.exitTernary(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitTernary) {
      return visitor.visitTernary(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PriIdentifierContext extends ExprContext {
  public primaryIdentifier(): PrimaryIdentifierContext {
    return this.getRuleContext(0, PrimaryIdentifierContext)
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterPriIdentifier) {
      listener.enterPriIdentifier(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitPriIdentifier) {
      listener.exitPriIdentifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitPriIdentifier) {
      return visitor.visitPriIdentifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PrimaryIdentifierContext extends ParserRuleContext {
  public addressableOperands(): AddressableOperandsContext | undefined {
    return this.tryGetRuleContext(0, AddressableOperandsContext)
  }
  public Constant(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Constant, 0)
  }
  public StringLiteral(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.StringLiteral, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_primaryIdentifier
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterPrimaryIdentifier) {
      listener.enterPrimaryIdentifier(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitPrimaryIdentifier) {
      listener.exitPrimaryIdentifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitPrimaryIdentifier) {
      return visitor.visitPrimaryIdentifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SizeOfOperandsContext extends ParserRuleContext {
  public type(): TypeContext | undefined {
    return this.tryGetRuleContext(0, TypeContext)
  }
  public Star(): TerminalNode[]
  public Star(i: number): TerminalNode
  public Star(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Star)
    } else {
      return this.getToken(SourCParser2.Star, i)
    }
  }
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Identifier, 0)
  }
  public And(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.And, 0)
  }
  public Struct(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Struct, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_sizeOfOperands
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterSizeOfOperands) {
      listener.enterSizeOfOperands(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitSizeOfOperands) {
      listener.exitSizeOfOperands(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitSizeOfOperands) {
      return visitor.visitSizeOfOperands(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_declaration
  }
  public copyFrom(ctx: DeclarationContext): void {
    super.copyFrom(ctx)
  }
}
export class VariableDeclContext extends DeclarationContext {
  public typeDef(): TypeDefContext {
    return this.getRuleContext(0, TypeDefContext)
  }
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
  }
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Assign, 0)
  }
  public expr(): ExprContext | undefined {
    return this.tryGetRuleContext(0, ExprContext)
  }
  public exprLs(): ExprLsContext | undefined {
    return this.tryGetRuleContext(0, ExprLsContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterVariableDecl) {
      listener.enterVariableDecl(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitVariableDecl) {
      listener.exitVariableDecl(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitVariableDecl) {
      return visitor.visitVariableDecl(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ArrayDeclContext extends DeclarationContext {
  public typeDef(): TypeDefContext {
    return this.getRuleContext(0, TypeDefContext)
  }
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
  }
  public LeftBracket(): TerminalNode {
    return this.getToken(SourCParser2.LeftBracket, 0)
  }
  public RightBracket(): TerminalNode {
    return this.getToken(SourCParser2.RightBracket, 0)
  }
  public Constant(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Constant, 0)
  }
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Assign, 0)
  }
  public exprLs(): ExprLsContext | undefined {
    return this.tryGetRuleContext(0, ExprLsContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterArrayDecl) {
      listener.enterArrayDecl(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitArrayDecl) {
      listener.exitArrayDecl(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitArrayDecl) {
      return visitor.visitArrayDecl(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class FxPointerDeclContext extends DeclarationContext {
  public typeDef(): TypeDefContext {
    return this.getRuleContext(0, TypeDefContext)
  }
  public LeftParen(): TerminalNode[]
  public LeftParen(i: number): TerminalNode
  public LeftParen(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.LeftParen)
    } else {
      return this.getToken(SourCParser2.LeftParen, i)
    }
  }
  public Star(): TerminalNode {
    return this.getToken(SourCParser2.Star, 0)
  }
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
  }
  public RightParen(): TerminalNode[]
  public RightParen(i: number): TerminalNode
  public RightParen(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.RightParen)
    } else {
      return this.getToken(SourCParser2.RightParen, i)
    }
  }
  public paramLs(): ParamLsContext | undefined {
    return this.tryGetRuleContext(0, ParamLsContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterFxPointerDecl) {
      listener.enterFxPointerDecl(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitFxPointerDecl) {
      listener.exitFxPointerDecl(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitFxPointerDecl) {
      return visitor.visitFxPointerDecl(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StructDeclContext extends DeclarationContext {
  public Struct(): TerminalNode {
    return this.getToken(SourCParser2.Struct, 0)
  }
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
  }
  public LeftBrace(): TerminalNode {
    return this.getToken(SourCParser2.LeftBrace, 0)
  }
  public RightBrace(): TerminalNode {
    return this.getToken(SourCParser2.RightBrace, 0)
  }
  public declaration(): DeclarationContext[]
  public declaration(i: number): DeclarationContext
  public declaration(i?: number): DeclarationContext | DeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationContext)
    } else {
      return this.getRuleContext(i, DeclarationContext)
    }
  }
  public Semi(): TerminalNode[]
  public Semi(i: number): TerminalNode
  public Semi(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Semi)
    } else {
      return this.getToken(SourCParser2.Semi, i)
    }
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterStructDecl) {
      listener.enterStructDecl(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitStructDecl) {
      listener.exitStructDecl(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitStructDecl) {
      return visitor.visitStructDecl(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeDefContext extends ParserRuleContext {
  public type(): TypeContext | undefined {
    return this.tryGetRuleContext(0, TypeContext)
  }
  public Unsigned(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Unsigned, 0)
  }
  public Star(): TerminalNode[]
  public Star(i: number): TerminalNode
  public Star(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Star)
    } else {
      return this.getToken(SourCParser2.Star, i)
    }
  }
  public Struct(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Struct, 0)
  }
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser2.Identifier, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_typeDef
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterTypeDef) {
      listener.enterTypeDef(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitTypeDef) {
      listener.exitTypeDef(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitTypeDef) {
      return visitor.visitTypeDef(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExprLsContext extends ParserRuleContext {
  public LeftBrace(): TerminalNode {
    return this.getToken(SourCParser2.LeftBrace, 0)
  }
  public seqExprLs(): SeqExprLsContext {
    return this.getRuleContext(0, SeqExprLsContext)
  }
  public RightBrace(): TerminalNode {
    return this.getToken(SourCParser2.RightBrace, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_exprLs
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterExprLs) {
      listener.enterExprLs(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitExprLs) {
      listener.exitExprLs(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitExprLs) {
      return visitor.visitExprLs(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SeqExprLsContext extends ParserRuleContext {
  public _expr!: ExprContext
  public _eLs: ExprContext[] = []
  public expr(): ExprContext[]
  public expr(i: number): ExprContext
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext)
    } else {
      return this.getRuleContext(i, ExprContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Comma)
    } else {
      return this.getToken(SourCParser2.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_seqExprLs
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterSeqExprLs) {
      listener.enterSeqExprLs(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitSeqExprLs) {
      listener.exitSeqExprLs(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitSeqExprLs) {
      return visitor.visitSeqExprLs(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssignmentContext extends ParserRuleContext {
  public addressableOperands(): AddressableOperandsContext {
    return this.getRuleContext(0, AddressableOperandsContext)
  }
  public Assign(): TerminalNode {
    return this.getToken(SourCParser2.Assign, 0)
  }
  public expr(): ExprContext | undefined {
    return this.tryGetRuleContext(0, ExprContext)
  }
  public exprLs(): ExprLsContext | undefined {
    return this.tryGetRuleContext(0, ExprLsContext)
  }
  public Star(): TerminalNode[]
  public Star(i: number): TerminalNode
  public Star(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Star)
    } else {
      return this.getToken(SourCParser2.Star, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_assignment
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterAssignment) {
      listener.enterAssignment(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitAssignment) {
      listener.exitAssignment(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitAssignment) {
      return visitor.visitAssignment(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AddressableOperandsContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser2.RULE_addressableOperands
  }
  public copyFrom(ctx: AddressableOperandsContext): void {
    super.copyFrom(ctx)
  }
}
export class ArraySubscriptContext extends AddressableOperandsContext {
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
  }
  public LeftBracket(): TerminalNode {
    return this.getToken(SourCParser2.LeftBracket, 0)
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext)
  }
  public RightBracket(): TerminalNode {
    return this.getToken(SourCParser2.RightBracket, 0)
  }
  constructor(ctx: AddressableOperandsContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterArraySubscript) {
      listener.enterArraySubscript(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitArraySubscript) {
      listener.exitArraySubscript(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitArraySubscript) {
      return visitor.visitArraySubscript(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StructAccessContext extends AddressableOperandsContext {
  public Identifier(): TerminalNode[]
  public Identifier(i: number): TerminalNode
  public Identifier(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Identifier)
    } else {
      return this.getToken(SourCParser2.Identifier, i)
    }
  }
  public Dot(): TerminalNode {
    return this.getToken(SourCParser2.Dot, 0)
  }
  constructor(ctx: AddressableOperandsContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterStructAccess) {
      listener.enterStructAccess(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitStructAccess) {
      listener.exitStructAccess(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitStructAccess) {
      return visitor.visitStructAccess(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StructAccessThruPointerContext extends AddressableOperandsContext {
  public Identifier(): TerminalNode[]
  public Identifier(i: number): TerminalNode
  public Identifier(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser2.Identifier)
    } else {
      return this.getToken(SourCParser2.Identifier, i)
    }
  }
  public Arrow(): TerminalNode {
    return this.getToken(SourCParser2.Arrow, 0)
  }
  constructor(ctx: AddressableOperandsContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterStructAccessThruPointer) {
      listener.enterStructAccessThruPointer(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitStructAccessThruPointer) {
      listener.exitStructAccessThruPointer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitStructAccessThruPointer) {
      return visitor.visitStructAccessThruPointer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AtomIdentifierContext extends AddressableOperandsContext {
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
  }
  constructor(ctx: AddressableOperandsContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: SourCParser2Listener): void {
    if (listener.enterAtomIdentifier) {
      listener.enterAtomIdentifier(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParser2Listener): void {
    if (listener.exitAtomIdentifier) {
      listener.exitAtomIdentifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParser2Visitor<Result>): Result {
    if (visitor.visitAtomIdentifier) {
      return visitor.visitAtomIdentifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
