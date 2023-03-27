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
  public static readonly RULE_functionDefinition = 3
  public static readonly RULE_paramLs = 4
  public static readonly RULE_param = 5
  public static readonly RULE_compoundStatement = 6
  public static readonly RULE_stmt = 7
  public static readonly RULE_expr = 8
  public static readonly RULE_primaryIdentifier = 9
  public static readonly RULE_sizeOfOperands = 10
  public static readonly RULE_declaration = 11
  public static readonly RULE_typeDef = 12
  public static readonly RULE_exprLs = 13
  public static readonly RULE_seqExprLs = 14
  public static readonly RULE_assignment = 15
  public static readonly RULE_addressableOperands = 16
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'type',
    'typeNameList',
    'program',
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
        this.state = 34
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
        this.state = 41
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 36
                this.typeDef()
                this.state = 37
                this.match(SourCParser2.Comma)
              }
            }
          }
          this.state = 43
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx)
        }
        this.state = 44
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
        this.state = 52
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
            this.state = 50
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
              case 1:
                {
                  this.state = 46
                  this.functionDefinition()
                }
                break

              case 2:
                {
                  this.state = 47
                  this.declaration()
                  this.state = 48
                  this.match(SourCParser2.Semi)
                }
                break
            }
          }
          this.state = 54
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
  public functionDefinition(): FunctionDefinitionContext {
    const _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 6, SourCParser2.RULE_functionDefinition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 55
        this.typeDef()
        this.state = 56
        this.match(SourCParser2.Identifier)
        this.state = 57
        this.match(SourCParser2.LeftParen)
        this.state = 59
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
            this.state = 58
            this.paramLs()
          }
        }

        this.state = 61
        this.match(SourCParser2.RightParen)
        this.state = 62
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
    this.enterRule(_localctx, 8, SourCParser2.RULE_paramLs)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 69
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 64
                _localctx._param = this.param()
                _localctx._pLs.push(_localctx._param)
                this.state = 65
                this.match(SourCParser2.Comma)
              }
            }
          }
          this.state = 71
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx)
        }
        this.state = 72
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
    this.enterRule(_localctx, 10, SourCParser2.RULE_param)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 74
        this.typeDef()
        this.state = 75
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
    this.enterRule(_localctx, 12, SourCParser2.RULE_compoundStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 77
        this.match(SourCParser2.LeftBrace)
        this.state = 81
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
              this.state = 78
              this.stmt()
            }
          }
          this.state = 83
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 84
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
    this.enterRule(_localctx, 14, SourCParser2.RULE_stmt)
    let _la: number
    try {
      this.state = 133
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          _localctx = new ExprStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 86
            this.expr(0)
            this.state = 87
            this.match(SourCParser2.Semi)
          }
          break

        case 2:
          _localctx = new DeclrStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 89
            this.declaration()
            this.state = 90
            this.match(SourCParser2.Semi)
          }
          break

        case 3:
          _localctx = new AssgnStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 92
            this.assignment()
            this.state = 93
            this.match(SourCParser2.Semi)
          }
          break

        case 4:
          _localctx = new CmpdStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 95
            this.compoundStatement()
          }
          break

        case 5:
          _localctx = new IfElseStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 96
            this.match(SourCParser2.If)
            this.state = 97
            this.match(SourCParser2.LeftParen)
            this.state = 98
            this.expr(0)
            this.state = 99
            this.match(SourCParser2.RightParen)
            this.state = 100
            this.compoundStatement()
            {
              this.state = 101
              this.match(SourCParser2.Else)
              this.state = 102
              this.compoundStatement()
            }
          }
          break

        case 6:
          _localctx = new WhileStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 104
            this.match(SourCParser2.While)
            this.state = 105
            this.match(SourCParser2.LeftParen)
            this.state = 106
            this.expr(0)
            this.state = 107
            this.match(SourCParser2.RightParen)
            this.state = 108
            this.compoundStatement()
          }
          break

        case 7:
          _localctx = new ForStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 7)
          {
            this.state = 110
            this.match(SourCParser2.For)
            this.state = 111
            this.match(SourCParser2.LeftParen)
            this.state = 113
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
                this.state = 112
                ;(_localctx as ForStmtContext)._init = this.expr(0)
              }
            }

            this.state = 115
            this.match(SourCParser2.Semi)
            this.state = 117
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
                this.state = 116
                ;(_localctx as ForStmtContext)._test = this.expr(0)
              }
            }

            this.state = 119
            this.match(SourCParser2.Semi)
            this.state = 121
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
                this.state = 120
                ;(_localctx as ForStmtContext)._incr = this.expr(0)
              }
            }

            this.state = 123
            this.compoundStatement()
          }
          break

        case 8:
          _localctx = new ReturnExprContext(_localctx)
          this.enterOuterAlt(_localctx, 8)
          {
            this.state = 124
            this.match(SourCParser2.Return)
            this.state = 126
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
                this.state = 125
                this.expr(0)
              }
            }

            this.state = 128
            this.match(SourCParser2.Semi)
          }
          break

        case 9:
          _localctx = new BreakStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 9)
          {
            this.state = 129
            this.match(SourCParser2.Break)
            this.state = 130
            this.match(SourCParser2.Semi)
          }
          break

        case 10:
          _localctx = new ContinueStmtContext(_localctx)
          this.enterOuterAlt(_localctx, 10)
          {
            this.state = 131
            this.match(SourCParser2.Continue)
            this.state = 132
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
    const _startState: number = 16
    this.enterRecursionRule(_localctx, 16, SourCParser2.RULE_expr, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 168
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
          case 1:
            {
              _localctx = new SuffixIncrContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 136
              this.addressableOperands()
              this.state = 137
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
              this.state = 139
              this.match(SourCParser2.Identifier)
              this.state = 140
              this.match(SourCParser2.LeftParen)
              this.state = 142
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
                  this.state = 141
                  this.seqExprLs()
                }
              }

              this.state = 144
              this.match(SourCParser2.RightParen)
            }
            break

          case 3:
            {
              _localctx = new PrefixIncrContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 145
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
              this.state = 146
              this.addressableOperands()
            }
            break

          case 4:
            {
              _localctx = new UnopContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 147
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
              this.state = 148
              this.expr(14)
            }
            break

          case 5:
            {
              _localctx = new CastContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 149
              this.match(SourCParser2.LeftParen)
              this.state = 150
              this.type()
              this.state = 151
              this.match(SourCParser2.RightParen)
              this.state = 152
              this.expr(13)
            }
            break

          case 6:
            {
              _localctx = new DereferenceContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 154
              this.match(SourCParser2.Star)
              this.state = 155
              this.expr(12)
            }
            break

          case 7:
            {
              _localctx = new AddressOfContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 156
              this.match(SourCParser2.And)
              this.state = 157
              this.expr(11)
            }
            break

          case 8:
            {
              _localctx = new SizeofExprContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 158
              this.match(SourCParser2.Sizeof)
              this.state = 159
              this.match(SourCParser2.LeftParen)
              this.state = 160
              this.sizeOfOperands()
              this.state = 161
              this.match(SourCParser2.RightParen)
            }
            break

          case 9:
            {
              _localctx = new ParenContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 163
              this.match(SourCParser2.LeftParen)
              this.state = 164
              this.expr(0)
              this.state = 165
              this.match(SourCParser2.RightParen)
            }
            break

          case 10:
            {
              _localctx = new PriIdentifierContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 167
              this.primaryIdentifier()
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 196
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 194
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                  {
                    _localctx = new MultContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 170
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                    }
                    this.state = 171
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
                    this.state = 172
                    this.expr(10)
                  }
                  break

                case 2:
                  {
                    _localctx = new AddContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 173
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 174
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
                    this.state = 175
                    this.expr(9)
                  }
                  break

                case 3:
                  {
                    _localctx = new RelOprContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 176
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 177
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
                    this.state = 178
                    this.expr(8)
                  }
                  break

                case 4:
                  {
                    _localctx = new EqualityContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 179
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 180
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
                    this.state = 181
                    this.expr(7)
                  }
                  break

                case 5:
                  {
                    _localctx = new AndContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 182
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 183
                    ;(_localctx as AndContext)._op = this.match(SourCParser2.AndAnd)
                    this.state = 184
                    this.expr(6)
                  }
                  break

                case 6:
                  {
                    _localctx = new OrContext(new ExprContext(_parentctx, _parentState))
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 185
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 186
                    ;(_localctx as OrContext)._op = this.match(SourCParser2.OrOr)
                    this.state = 187
                    this.expr(5)
                  }
                  break

                case 7:
                  {
                    _localctx = new TernaryContext(new ExprContext(_parentctx, _parentState))
                    ;(_localctx as TernaryContext)._cond = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, SourCParser2.RULE_expr)
                    this.state = 188
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 189
                    this.match(SourCParser2.Question)
                    this.state = 190
                    ;(_localctx as TernaryContext)._cons = this.expr(0)
                    this.state = 191
                    this.match(SourCParser2.Colon)
                    this.state = 192
                    ;(_localctx as TernaryContext)._alt = this.expr(3)
                  }
                  break
              }
            }
          }
          this.state = 198
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx)
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
    this.enterRule(_localctx, 18, SourCParser2.RULE_primaryIdentifier)
    try {
      this.state = 202
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser2.Identifier:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 199
            this.addressableOperands()
          }
          break
        case SourCParser2.Constant:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 200
            this.match(SourCParser2.Constant)
          }
          break
        case SourCParser2.StringLiteral:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 201
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
    this.enterRule(_localctx, 20, SourCParser2.RULE_sizeOfOperands)
    let _la: number
    try {
      this.state = 222
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 207
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === SourCParser2.Star) {
              {
                {
                  this.state = 204
                  this.match(SourCParser2.Star)
                }
              }
              this.state = 209
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
            this.state = 210
            this.type()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
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
            this.match(SourCParser2.Identifier)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 218
            this.match(SourCParser2.And)
            this.state = 219
            this.match(SourCParser2.Identifier)
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 220
            this.match(SourCParser2.Struct)
            this.state = 221
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
    this.enterRule(_localctx, 22, SourCParser2.RULE_declaration)
    let _la: number
    try {
      this.state = 267
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
        case 1:
          _localctx = new VariableDeclContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 224
            this.typeDef()
            this.state = 225
            this.match(SourCParser2.Identifier)
            this.state = 231
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser2.Assign) {
              {
                this.state = 226
                this.match(SourCParser2.Assign)
                this.state = 229
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
                      this.state = 227
                      this.expr(0)
                    }
                    break
                  case SourCParser2.LeftBrace:
                    {
                      this.state = 228
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
            this.state = 233
            this.typeDef()
            this.state = 234
            this.match(SourCParser2.Identifier)
            this.state = 235
            this.match(SourCParser2.LeftBracket)
            this.state = 237
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
                this.state = 236
                this.expr(0)
              }
            }

            this.state = 239
            this.match(SourCParser2.RightBracket)
            this.state = 242
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser2.Assign) {
              {
                this.state = 240
                this.match(SourCParser2.Assign)
                this.state = 241
                this.exprLs()
              }
            }
          }
          break

        case 3:
          _localctx = new FxPointerDeclContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 244
            this.typeDef()
            this.state = 245
            this.match(SourCParser2.LeftParen)
            this.state = 246
            this.match(SourCParser2.Star)
            this.state = 247
            this.match(SourCParser2.Identifier)
            this.state = 248
            this.match(SourCParser2.RightParen)
            this.state = 249
            this.match(SourCParser2.LeftParen)
            this.state = 251
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
                this.state = 250
                this.paramLs()
              }
            }

            this.state = 253
            this.match(SourCParser2.RightParen)
          }
          break

        case 4:
          _localctx = new StructDeclContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 255
            this.match(SourCParser2.Struct)
            this.state = 256
            this.match(SourCParser2.Identifier)
            this.state = 257
            this.match(SourCParser2.LeftBrace)
            this.state = 261
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 258
                  this.declaration()
                  this.state = 259
                  this.match(SourCParser2.Semi)
                }
              }
              this.state = 263
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
            this.state = 265
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
    this.enterRule(_localctx, 24, SourCParser2.RULE_typeDef)
    let _la: number
    try {
      this.state = 287
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
            this.state = 270
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser2.Unsigned) {
              {
                this.state = 269
                this.match(SourCParser2.Unsigned)
              }
            }

            this.state = 272
            this.type()
            this.state = 276
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === SourCParser2.Star) {
              {
                {
                  this.state = 273
                  this.match(SourCParser2.Star)
                }
              }
              this.state = 278
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
          }
          break
        case SourCParser2.Struct:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 279
            this.match(SourCParser2.Struct)
            this.state = 280
            this.match(SourCParser2.Identifier)
            this.state = 284
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while (_la === SourCParser2.Star) {
              {
                {
                  this.state = 281
                  this.match(SourCParser2.Star)
                }
              }
              this.state = 286
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
    this.enterRule(_localctx, 26, SourCParser2.RULE_exprLs)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 289
        this.match(SourCParser2.LeftBrace)
        this.state = 290
        this.seqExprLs()
        this.state = 291
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
    this.enterRule(_localctx, 28, SourCParser2.RULE_seqExprLs)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 298
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 293
                _localctx._expr = this.expr(0)
                _localctx._eLs.push(_localctx._expr)
                this.state = 294
                this.match(SourCParser2.Comma)
              }
            }
          }
          this.state = 300
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx)
        }
        this.state = 301
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
    this.enterRule(_localctx, 30, SourCParser2.RULE_assignment)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 306
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === SourCParser2.Star) {
          {
            {
              this.state = 303
              this.match(SourCParser2.Star)
            }
          }
          this.state = 308
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 309
        this.match(SourCParser2.Identifier)
        this.state = 310
        this.match(SourCParser2.Assign)
        this.state = 313
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
              this.state = 311
              this.expr(0)
            }
            break
          case SourCParser2.LeftBrace:
            {
              this.state = 312
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
    this.enterRule(_localctx, 32, SourCParser2.RULE_addressableOperands)
    try {
      this.state = 327
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
        case 1:
          _localctx = new ArraySubscriptContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 315
            this.match(SourCParser2.Identifier)
            this.state = 316
            this.match(SourCParser2.LeftBracket)
            this.state = 317
            this.expr(0)
            this.state = 318
            this.match(SourCParser2.RightBracket)
          }
          break

        case 2:
          _localctx = new StructAccessContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 320
            this.match(SourCParser2.Identifier)
            this.state = 321
            this.match(SourCParser2.Dot)
            this.state = 322
            this.match(SourCParser2.Identifier)
          }
          break

        case 3:
          _localctx = new StructAccessThruPointerContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 323
            this.match(SourCParser2.Identifier)
            this.state = 324
            this.match(SourCParser2.Arrow)
            this.state = 325
            this.match(SourCParser2.Identifier)
          }
          break

        case 4:
          _localctx = new AtomIdentifierContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 326
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
      case 8:
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03J\u014C\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03' +
    '\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03*\n\x03\f\x03\x0E\x03-\v\x03' +
    '\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x045\n\x04\f\x04' +
    '\x0E\x048\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05>\n\x05\x03\x05' +
    '\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06F\n\x06\f\x06\x0E\x06' +
    'I\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\bR\n\b' +
    '\f\b\x0E\bU\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t' +
    '\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03' +
    '\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tt\n\t\x03\t\x03' +
    '\t\x05\tx\n\t\x03\t\x03\t\x05\t|\n\t\x03\t\x03\t\x03\t\x05\t\x81\n\t\x03' +
    '\t\x03\t\x03\t\x03\t\x03\t\x05\t\x88\n\t\x03\n\x03\n\x03\n\x03\n\x03\n' +
    '\x03\n\x03\n\x05\n\x91\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x05\n\xAB\n\n\x03\n\x03\n\x03\n\x03\n\x03\n' +
    '\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xC5\n\n\f\n\x0E\n\xC8' +
    '\v\n\x03\v\x03\v\x03\v\x05\v\xCD\n\v\x03\f\x07\f\xD0\n\f\f\f\x0E\f\xD3' +
    '\v\f\x03\f\x03\f\x07\f\xD7\n\f\f\f\x0E\f\xDA\v\f\x03\f\x03\f\x03\f\x03' +
    '\f\x03\f\x05\f\xE1\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xE8\n\r\x05' +
    '\r\xEA\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xF0\n\r\x03\r\x03\r\x03\r\x05' +
    '\r\xF5\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xFE\n\r\x03' +
    '\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\u0108\n\r\r\r\x0E\r' +
    '\u0109\x03\r\x03\r\x05\r\u010E\n\r\x03\x0E\x05\x0E\u0111\n\x0E\x03\x0E' +
    '\x03\x0E\x07\x0E\u0115\n\x0E\f\x0E\x0E\x0E\u0118\v\x0E\x03\x0E\x03\x0E' +
    '\x03\x0E\x07\x0E\u011D\n\x0E\f\x0E\x0E\x0E\u0120\v\x0E\x05\x0E\u0122\n' +
    '\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u012B' +
    '\n\x10\f\x10\x0E\x10\u012E\v\x10\x03\x10\x03\x10\x03\x11\x07\x11\u0133' +
    '\n\x11\f\x11\x0E\x11\u0136\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11' +
    '\u013C\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03' +
    '\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u014A\n\x12\x03\x12\x02\x02' +
    '\x03\x12\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02' +
    '\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02\x02' +
    "\t\b\x02\x04\x04\b\b\n\n\r\x0E\x10\x10\x16\x16\x04\x02%%''\x04\x02&" +
    '&..\x03\x02(*\x04\x02$$&&\x03\x02\x1E!\x03\x029:\x02\u0178\x02$\x03\x02' +
    '\x02\x02\x04+\x03\x02\x02\x02\x066\x03\x02\x02\x02\b9\x03\x02\x02\x02' +
    '\nG\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EO\x03\x02\x02\x02\x10\x87\x03' +
    '\x02\x02\x02\x12\xAA\x03\x02\x02\x02\x14\xCC\x03\x02\x02\x02\x16\xE0\x03' +
    '\x02\x02\x02\x18\u010D\x03\x02\x02\x02\x1A\u0121\x03\x02\x02\x02\x1C\u0123' +
    '\x03\x02\x02\x02\x1E\u012C\x03\x02\x02\x02 \u0134\x03\x02\x02\x02"\u0149' +
    "\x03\x02\x02\x02$%\t\x02\x02\x02%\x03\x03\x02\x02\x02&'\x05\x1A\x0E\x02" +
    "'(\x072\x02\x02(*\x03\x02\x02\x02)&\x03\x02\x02\x02*-\x03\x02\x02\x02" +
    '+)\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02\x02-+\x03\x02\x02\x02' +
    './\x05\x1A\x0E\x02/\x05\x03\x02\x02\x0205\x05\b\x05\x0212\x05\x18\r\x02' +
    '23\x071\x02\x0235\x03\x02\x02\x0240\x03\x02\x02\x0241\x03\x02\x02\x02' +
    '58\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x027\x07\x03\x02\x02' +
    '\x0286\x03\x02\x02\x029:\x05\x1A\x0E\x02:;\x07=\x02\x02;=\x07\x18\x02' +
    '\x02<>\x05\n\x06\x02=<\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02' +
    '\x02?@\x07\x19\x02\x02@A\x05\x0E\b\x02A\t\x03\x02\x02\x02BC\x05\f\x07' +
    '\x02CD\x072\x02\x02DF\x03\x02\x02\x02EB\x03\x02\x02\x02FI\x03\x02\x02' +
    '\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IG\x03\x02\x02' +
    '\x02JK\x05\f\x07\x02K\v\x03\x02\x02\x02LM\x05\x1A\x0E\x02MN\x07=\x02\x02' +
    'N\r\x03\x02\x02\x02OS\x07\x1C\x02\x02PR\x05\x10\t\x02QP\x03\x02\x02\x02' +
    'RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02' +
    'US\x03\x02\x02\x02VW\x07\x1D\x02\x02W\x0F\x03\x02\x02\x02XY\x05\x12\n' +
    '\x02YZ\x071\x02\x02Z\x88\x03\x02\x02\x02[\\\x05\x18\r\x02\\]\x071\x02' +
    '\x02]\x88\x03\x02\x02\x02^_\x05 \x11\x02_`\x071\x02\x02`\x88\x03\x02\x02' +
    '\x02a\x88\x05\x0E\b\x02bc\x07\f\x02\x02cd\x07\x18\x02\x02de\x05\x12\n' +
    '\x02ef\x07\x19\x02\x02fg\x05\x0E\b\x02gh\x07\t\x02\x02hi\x05\x0E\b\x02' +
    'i\x88\x03\x02\x02\x02jk\x07\x17\x02\x02kl\x07\x18\x02\x02lm\x05\x12\n' +
    '\x02mn\x07\x19\x02\x02no\x05\x0E\b\x02o\x88\x03\x02\x02\x02pq\x07\v\x02' +
    '\x02qs\x07\x18\x02\x02rt\x05\x12\n\x02sr\x03\x02\x02\x02st\x03\x02\x02' +
    '\x02tu\x03\x02\x02\x02uw\x071\x02\x02vx\x05\x12\n\x02wv\x03\x02\x02\x02' +
    'wx\x03\x02\x02\x02xy\x03\x02\x02\x02y{\x071\x02\x02z|\x05\x12\n\x02{z' +
    '\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}\x88\x05\x0E\b\x02' +
    '~\x80\x07\x0F\x02\x02\x7F\x81\x05\x12\n\x02\x80\x7F\x03\x02\x02\x02\x80' +
    '\x81\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x88\x071\x02\x02\x83' +
    '\x84\x07\x03\x02\x02\x84\x88\x071\x02\x02\x85\x86\x07\x06\x02\x02\x86' +
    '\x88\x071\x02\x02\x87X\x03\x02\x02\x02\x87[\x03\x02\x02\x02\x87^\x03\x02' +
    '\x02\x02\x87a\x03\x02\x02\x02\x87b\x03\x02\x02\x02\x87j\x03\x02\x02\x02' +
    '\x87p\x03\x02\x02\x02\x87~\x03\x02\x02\x02\x87\x83\x03\x02\x02\x02\x87' +
    '\x85\x03\x02\x02\x02\x88\x11\x03\x02\x02\x02\x89\x8A\b\n\x01\x02\x8A\x8B' +
    '\x05"\x12\x02\x8B\x8C\t\x03\x02\x02\x8C\xAB\x03\x02\x02\x02\x8D\x8E\x07' +
    '=\x02\x02\x8E\x90\x07\x18\x02\x02\x8F\x91\x05\x1E\x10\x02\x90\x8F\x03' +
    '\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\xAB\x07' +
    '\x19\x02\x02\x93\x94\t\x03\x02\x02\x94\xAB\x05"\x12\x02\x95\x96\t\x04' +
    '\x02\x02\x96\xAB\x05\x12\n\x10\x97\x98\x07\x18\x02\x02\x98\x99\x05\x02' +
    '\x02\x02\x99\x9A\x07\x19\x02\x02\x9A\x9B\x05\x12\n\x0F\x9B\xAB\x03\x02' +
    '\x02\x02\x9C\x9D\x07(\x02\x02\x9D\xAB\x05\x12\n\x0E\x9E\x9F\x07+\x02\x02' +
    '\x9F\xAB\x05\x12\n\r\xA0\xA1\x07\x12\x02\x02\xA1\xA2\x07\x18\x02\x02\xA2' +
    '\xA3\x05\x16\f\x02\xA3\xA4\x07\x19\x02\x02\xA4\xAB\x03\x02\x02\x02\xA5' +
    '\xA6\x07\x18\x02\x02\xA6\xA7\x05\x12\n\x02\xA7\xA8\x07\x19\x02\x02\xA8' +
    '\xAB\x03\x02\x02\x02\xA9\xAB\x05\x14\v\x02\xAA\x89\x03\x02\x02\x02\xAA' +
    '\x8D\x03\x02\x02\x02\xAA\x93\x03\x02\x02\x02\xAA\x95\x03\x02\x02\x02\xAA' +
    '\x97\x03\x02\x02\x02\xAA\x9C\x03\x02\x02\x02\xAA\x9E\x03\x02\x02\x02\xAA' +
    '\xA0\x03\x02\x02\x02\xAA\xA5\x03\x02\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB' +
    '\xC6\x03\x02\x02\x02\xAC\xAD\f\v\x02\x02\xAD\xAE\t\x05\x02\x02\xAE\xC5' +
    '\x05\x12\n\f\xAF\xB0\f\n\x02\x02\xB0\xB1\t\x06\x02\x02\xB1\xC5\x05\x12' +
    '\n\v\xB2\xB3\f\t\x02\x02\xB3\xB4\t\x07\x02\x02\xB4\xC5\x05\x12\n\n\xB5' +
    '\xB6\f\b\x02\x02\xB6\xB7\t\b\x02\x02\xB7\xC5\x05\x12\n\t\xB8\xB9\f\x07' +
    '\x02\x02\xB9\xBA\x07,\x02\x02\xBA\xC5\x05\x12\n\b\xBB\xBC\f\x06\x02\x02' +
    '\xBC\xBD\x07-\x02\x02\xBD\xC5\x05\x12\n\x07\xBE\xBF\f\x04\x02\x02\xBF' +
    '\xC0\x07/\x02\x02\xC0\xC1\x05\x12\n\x02\xC1\xC2\x070\x02\x02\xC2\xC3\x05' +
    '\x12\n\x05\xC3\xC5\x03\x02\x02\x02\xC4\xAC\x03\x02\x02\x02\xC4\xAF\x03' +
    '\x02\x02\x02\xC4\xB2\x03\x02\x02\x02\xC4\xB5\x03\x02\x02\x02\xC4\xB8\x03' +
    '\x02\x02\x02\xC4\xBB\x03\x02\x02\x02\xC4\xBE\x03\x02\x02\x02\xC5\xC8\x03' +
    '\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\x13\x03' +
    '\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCD\x05"\x12\x02\xCA\xCD\x07' +
    '>\x02\x02\xCB\xCD\x07@\x02\x02\xCC\xC9\x03\x02\x02\x02\xCC\xCA\x03\x02' +
    '\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\x15\x03\x02\x02\x02\xCE\xD0\x07(' +
    '\x02\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02' +
    '\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xD1\x03\x02' +
    '\x02\x02\xD4\xE1\x05\x02\x02\x02\xD5\xD7\x07(\x02\x02\xD6\xD5\x03\x02' +
    '\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02' +
    '\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xE1\x07=' +
    '\x02\x02\xDC\xDD\x07+\x02\x02\xDD\xE1\x07=\x02\x02\xDE\xDF\x07\x13\x02' +
    '\x02\xDF\xE1\x07=\x02\x02\xE0\xD1\x03\x02\x02\x02\xE0\xD8\x03\x02\x02' +
    '\x02\xE0\xDC\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\x17\x03\x02\x02' +
    '\x02\xE2\xE3\x05\x1A\x0E\x02\xE3\xE9\x07=\x02\x02\xE4\xE7\x073\x02\x02' +
    '\xE5\xE8\x05\x12\n\x02\xE6\xE8\x05\x1C\x0F\x02\xE7\xE5\x03\x02\x02\x02' +
    '\xE7\xE6\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE4\x03\x02\x02\x02' +
    '\xE9\xEA\x03\x02\x02\x02\xEA\u010E\x03\x02\x02\x02\xEB\xEC\x05\x1A\x0E' +
    '\x02\xEC\xED\x07=\x02\x02\xED\xEF\x07\x1A\x02\x02\xEE\xF0\x05\x12\n\x02' +
    '\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02' +
    '\xF1\xF4\x07\x1B\x02\x02\xF2\xF3\x073\x02\x02\xF3\xF5\x05\x1C\x0F\x02' +
    '\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\u010E\x03\x02\x02' +
    '\x02\xF6\xF7\x05\x1A\x0E\x02\xF7\xF8\x07\x18\x02\x02\xF8\xF9\x07(\x02' +
    '\x02\xF9\xFA\x07=\x02\x02\xFA\xFB\x07\x19\x02\x02\xFB\xFD\x07\x18\x02' +
    '\x02\xFC\xFE\x05\n\x06\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE\x03\x02\x02' +
    '\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x07\x19\x02\x02\u0100\u010E\x03' +
    '\x02\x02\x02\u0101\u0102\x07\x13\x02\x02\u0102\u0103\x07=\x02\x02\u0103' +
    '\u0107\x07\x1C\x02\x02\u0104\u0105\x05\x18\r\x02\u0105\u0106\x071\x02' +
    '\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0104\x03\x02\x02\x02\u0108\u0109' +
    '\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02' +
    '\u010A\u010B\x03\x02\x02\x02\u010B\u010C\x07\x1D\x02\x02\u010C\u010E\x03' +
    '\x02\x02\x02\u010D\xE2\x03\x02\x02\x02\u010D\xEB\x03\x02\x02\x02\u010D' +
    '\xF6\x03\x02\x02\x02\u010D\u0101\x03\x02\x02\x02\u010E\x19\x03\x02\x02' +
    '\x02\u010F\u0111\x07\x15\x02\x02\u0110\u010F\x03\x02\x02\x02\u0110\u0111' +
    '\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0116\x05\x02\x02\x02' +
    '\u0113\u0115\x07(\x02\x02\u0114\u0113\x03\x02\x02\x02\u0115\u0118\x03' +
    '\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117' +
    '\u0122\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\x07\x13' +
    '\x02\x02\u011A\u011E\x07=\x02\x02\u011B\u011D\x07(\x02\x02\u011C\u011B' +
    '\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02' +
    '\u011E\u011F\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02\u0120\u011E\x03' +
    '\x02\x02\x02\u0121\u0110\x03\x02\x02\x02\u0121\u0119\x03\x02\x02\x02\u0122' +
    '\x1B\x03\x02\x02\x02\u0123\u0124\x07\x1C\x02\x02\u0124\u0125\x05\x1E\x10' +
    '\x02\u0125\u0126\x07\x1D\x02\x02\u0126\x1D\x03\x02\x02\x02\u0127\u0128' +
    '\x05\x12\n\x02\u0128\u0129\x072\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A' +
    '\u0127\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02' +
    '\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E' +
    '\u012C\x03\x02\x02\x02\u012F\u0130\x05\x12\n\x02\u0130\x1F\x03\x02\x02' +
    '\x02\u0131\u0133\x07(\x02\x02\u0132\u0131\x03\x02\x02\x02\u0133\u0136' +
    '\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02' +
    '\u0135\u0137\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0137\u0138\x07' +
    '=\x02\x02\u0138\u013B\x073\x02\x02\u0139\u013C\x05\x12\n\x02\u013A\u013C' +
    '\x05\x1C\x0F\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013A\x03\x02\x02\x02' +
    '\u013C!\x03\x02\x02\x02\u013D\u013E\x07=\x02\x02\u013E\u013F\x07\x1A\x02' +
    '\x02\u013F\u0140\x05\x12\n\x02\u0140\u0141\x07\x1B\x02\x02\u0141\u014A' +
    '\x03\x02\x02\x02\u0142\u0143\x07=\x02\x02\u0143\u0144\x07<\x02\x02\u0144' +
    '\u014A\x07=\x02\x02\u0145\u0146\x07=\x02\x02\u0146\u0147\x07;\x02\x02' +
    '\u0147\u014A\x07=\x02\x02\u0148\u014A\x07=\x02\x02\u0149\u013D\x03\x02' +
    '\x02\x02\u0149\u0142\x03\x02\x02\x02\u0149\u0145\x03\x02\x02\x02\u0149' +
    '\u0148\x03\x02\x02\x02\u014A#\x03\x02\x02\x02$+46=GSsw{\x80\x87\x90\xAA' +
    '\xC4\xC6\xCC\xD1\xD8\xE0\xE7\xE9\xEF\xF4\xFD\u0109\u010D\u0110\u0116\u011E' +
    '\u0121\u012C\u0134\u013B\u0149'
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
  public functionDefinition(): FunctionDefinitionContext[]
  public functionDefinition(i: number): FunctionDefinitionContext
  public functionDefinition(i?: number): FunctionDefinitionContext | FunctionDefinitionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(FunctionDefinitionContext)
    } else {
      return this.getRuleContext(i, FunctionDefinitionContext)
    }
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
  public _init!: ExprContext
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
  public compoundStatement(): CompoundStatementContext {
    return this.getRuleContext(0, CompoundStatementContext)
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
  public expr(): ExprContext | undefined {
    return this.tryGetRuleContext(0, ExprContext)
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
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser2.Identifier, 0)
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
