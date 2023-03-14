// Generated from ./src/lang/SourCParser.g4 by ANTLR 4.9.0-SNAPSHOT

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

import { SourCParserListener } from './SourCParserListener'
import { SourCParserVisitor } from './SourCParserVisitor'

export class SourCParser extends Parser {
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
  public static readonly UnaryOperator = 59
  public static readonly TypeName = 60
  public static readonly Identifier = 61
  public static readonly Constant = 62
  public static readonly DigitSequence = 63
  public static readonly StringLiteral = 64
  public static readonly ComplexDefine = 65
  public static readonly IncludeDirective = 66
  public static readonly AsmBlock = 67
  public static readonly LineAfterPreprocessing = 68
  public static readonly LineDirective = 69
  public static readonly PragmaDirective = 70
  public static readonly Whitespace = 71
  public static readonly Newline = 72
  public static readonly BlockComment = 73
  public static readonly LineComment = 74
  public static readonly RULE_typeSpecifier = 0
  public static readonly RULE_translationUnit = 1
  public static readonly RULE_externalDeclaration = 2
  public static readonly RULE_declaration = 3
  public static readonly RULE_initDeclarator = 4
  public static readonly RULE_declarator = 5
  public static readonly RULE_typeNameList = 6
  public static readonly RULE_initializer = 7
  public static readonly RULE_initializerList = 8
  public static readonly RULE_assignmentExpression = 9
  public static readonly RULE_conditionalExpression = 10
  public static readonly RULE_logicalOrExpression = 11
  public static readonly RULE_logicalAndExpression = 12
  public static readonly RULE_equalityExpression = 13
  public static readonly RULE_relationalExpression = 14
  public static readonly RULE_additiveExpression = 15
  public static readonly RULE_multiplicativeExpression = 16
  public static readonly RULE_castExpression = 17
  public static readonly RULE_unaryExpression = 18
  public static readonly RULE_sizeofOperands = 19
  public static readonly RULE_postfixExpression = 20
  public static readonly RULE_primaryExpression = 21
  public static readonly RULE_expression = 22
  public static readonly RULE_constantExpression = 23
  public static readonly RULE_functionDefinition = 24
  public static readonly RULE_pointer = 25
  public static readonly RULE_parameterList = 26
  public static readonly RULE_parameterDeclaration = 27
  public static readonly RULE_compoundStatement = 28
  public static readonly RULE_statement = 29
  public static readonly RULE_expressionStatement = 30
  public static readonly RULE_selectionStatement = 31
  public static readonly RULE_iterationStatement = 32
  public static readonly RULE_jumpStatement = 33
  public static readonly RULE_structSpecifier = 34
  public static readonly RULE_structDeclaration = 35
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'typeSpecifier',
    'translationUnit',
    'externalDeclaration',
    'declaration',
    'initDeclarator',
    'declarator',
    'typeNameList',
    'initializer',
    'initializerList',
    'assignmentExpression',
    'conditionalExpression',
    'logicalOrExpression',
    'logicalAndExpression',
    'equalityExpression',
    'relationalExpression',
    'additiveExpression',
    'multiplicativeExpression',
    'castExpression',
    'unaryExpression',
    'sizeofOperands',
    'postfixExpression',
    'primaryExpression',
    'expression',
    'constantExpression',
    'functionDefinition',
    'pointer',
    'parameterList',
    'parameterDeclaration',
    'compoundStatement',
    'statement',
    'expressionStatement',
    'selectionStatement',
    'iterationStatement',
    'jumpStatement',
    'structSpecifier',
    'structDeclaration'
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
    'UnaryOperator',
    'TypeName',
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
    SourCParser._LITERAL_NAMES,
    SourCParser._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return SourCParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'SourCParser.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return SourCParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return SourCParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(SourCParser._ATN, this)
  }
  // @RuleVersion(0)
  public typeSpecifier(): TypeSpecifierContext {
    const _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, SourCParser.RULE_typeSpecifier)
    try {
      this.state = 82
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Void:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 72
            this.match(SourCParser.Void)
          }
          break
        case SourCParser.Char:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 73
            this.match(SourCParser.Char)
          }
          break
        case SourCParser.Short:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 74
            this.match(SourCParser.Short)
          }
          break
        case SourCParser.Int:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 75
            this.match(SourCParser.Int)
          }
          break
        case SourCParser.Long:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 76
            this.match(SourCParser.Long)
          }
          break
        case SourCParser.Float:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 77
            this.match(SourCParser.Float)
          }
          break
        case SourCParser.Double:
          this.enterOuterAlt(_localctx, 7)
          {
            this.state = 78
            this.match(SourCParser.Double)
          }
          break
        case SourCParser.Signed:
          this.enterOuterAlt(_localctx, 8)
          {
            this.state = 79
            this.match(SourCParser.Signed)
          }
          break
        case SourCParser.Unsigned:
          this.enterOuterAlt(_localctx, 9)
          {
            this.state = 80
            this.match(SourCParser.Unsigned)
          }
          break
        case SourCParser.Struct:
          this.enterOuterAlt(_localctx, 10)
          {
            this.state = 81
            this.structSpecifier()
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
  public translationUnit(): TranslationUnitContext {
    const _localctx: TranslationUnitContext = new TranslationUnitContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, SourCParser.RULE_translationUnit)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 87
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << SourCParser.Char) |
              (1 << SourCParser.Double) |
              (1 << SourCParser.Float) |
              (1 << SourCParser.Int) |
              (1 << SourCParser.Long) |
              (1 << SourCParser.Short) |
              (1 << SourCParser.Signed) |
              (1 << SourCParser.Struct) |
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        ) {
          {
            {
              this.state = 84
              this.externalDeclaration()
            }
          }
          this.state = 89
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
  public externalDeclaration(): ExternalDeclarationContext {
    const _localctx: ExternalDeclarationContext = new ExternalDeclarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 4, SourCParser.RULE_externalDeclaration)
    try {
      this.state = 92
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 90
            this.functionDefinition()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 91
            this.declaration()
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
    const _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, SourCParser.RULE_declaration)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 95
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 94
              this.typeSpecifier()
            }
          }
          this.state = 97
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << SourCParser.Char) |
              (1 << SourCParser.Double) |
              (1 << SourCParser.Float) |
              (1 << SourCParser.Int) |
              (1 << SourCParser.Long) |
              (1 << SourCParser.Short) |
              (1 << SourCParser.Signed) |
              (1 << SourCParser.Struct) |
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        )
        this.state = 100
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          _la === SourCParser.LeftParen ||
          _la === SourCParser.Star ||
          _la === SourCParser.Identifier
        ) {
          {
            this.state = 99
            this.initDeclarator()
          }
        }

        this.state = 102
        this.match(SourCParser.Semi)
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
  public initDeclarator(): InitDeclaratorContext {
    const _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, SourCParser.RULE_initDeclarator)
    try {
      this.state = 109
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 104
            this.declarator()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 105
            this.declarator()
            this.state = 106
            this.match(SourCParser.Assign)
            this.state = 107
            this.initializer()
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
  public declarator(): DeclaratorContext {
    const _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, SourCParser.RULE_declarator)
    let _la: number
    try {
      this.state = 136
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 112
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 111
                this.pointer()
              }
            }

            this.state = 114
            _localctx._var = this.match(SourCParser.Identifier)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 115
            this.match(SourCParser.LeftParen)
            this.state = 116
            this.match(SourCParser.Star)
            this.state = 117
            _localctx._funcPointer = this.match(SourCParser.Identifier)
            this.state = 118
            this.match(SourCParser.RightParen)
            this.state = 119
            this.match(SourCParser.LeftParen)
            this.state = 121
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.TypeName) {
              {
                this.state = 120
                this.typeNameList()
              }
            }

            this.state = 123
            this.match(SourCParser.RightParen)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 124
            _localctx._array = this.match(SourCParser.Identifier)
            this.state = 125
            this.match(SourCParser.LeftBracket)
            this.state = 127
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 35) & ~0x1f) === 0 &&
                ((1 << (_la - 35)) &
                  ((1 << (SourCParser.PlusPlus - 35)) |
                    (1 << (SourCParser.MinusMinus - 35)) |
                    (1 << (SourCParser.UnaryOperator - 35)) |
                    (1 << (SourCParser.Identifier - 35)) |
                    (1 << (SourCParser.Constant - 35)) |
                    (1 << (SourCParser.StringLiteral - 35)))) !==
                  0)
            ) {
              {
                this.state = 126
                this.constantExpression()
              }
            }

            this.state = 129
            this.match(SourCParser.RightBracket)
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 130
            _localctx._funcProto = this.match(SourCParser.Identifier)
            this.state = 131
            this.match(SourCParser.LeftParen)
            this.state = 133
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << SourCParser.Char) |
                  (1 << SourCParser.Double) |
                  (1 << SourCParser.Float) |
                  (1 << SourCParser.Int) |
                  (1 << SourCParser.Long) |
                  (1 << SourCParser.Short) |
                  (1 << SourCParser.Signed) |
                  (1 << SourCParser.Struct) |
                  (1 << SourCParser.Unsigned) |
                  (1 << SourCParser.Void))) !==
                0
            ) {
              {
                this.state = 132
                this.parameterList(0)
              }
            }

            this.state = 135
            this.match(SourCParser.RightParen)
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
  public typeNameList(): TypeNameListContext {
    const _localctx: TypeNameListContext = new TypeNameListContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, SourCParser.RULE_typeNameList)
    let _la: number
    try {
      this.state = 158
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 139
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 138
                  this.match(SourCParser.TypeName)
                }
              }
              this.state = 141
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (_la === SourCParser.TypeName)
            this.state = 144
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 143
                this.pointer()
              }
            }
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 147
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 146
                  this.match(SourCParser.TypeName)
                }
              }
              this.state = 149
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (_la === SourCParser.TypeName)
            this.state = 152
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 151
                this.pointer()
              }
            }

            this.state = 154
            this.match(SourCParser.Comma)
            this.state = 156
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.TypeName) {
              {
                this.state = 155
                this.typeNameList()
              }
            }
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
  public initializer(): InitializerContext {
    const _localctx: InitializerContext = new InitializerContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, SourCParser.RULE_initializer)
    try {
      this.state = 165
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Sizeof:
        case SourCParser.LeftParen:
        case SourCParser.PlusPlus:
        case SourCParser.MinusMinus:
        case SourCParser.UnaryOperator:
        case SourCParser.Identifier:
        case SourCParser.Constant:
        case SourCParser.StringLiteral:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 160
            this.assignmentExpression()
          }
          break
        case SourCParser.LeftBrace:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 161
            this.match(SourCParser.LeftBrace)
            this.state = 162
            this.initializerList(0)
            this.state = 163
            this.match(SourCParser.RightBrace)
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

  public initializerList(): InitializerListContext
  public initializerList(_p: number): InitializerListContext
  // @RuleVersion(0)
  public initializerList(_p?: number): InitializerListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: InitializerListContext = new InitializerListContext(this._ctx, _parentState)
    let _prevctx: InitializerListContext = _localctx
    const _startState: number = 16
    this.enterRecursionRule(_localctx, 16, SourCParser.RULE_initializerList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 168
          this.initializer()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 175
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new InitializerListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  SourCParser.RULE_initializerList
                )
                this.state = 170
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 171
                this.match(SourCParser.Comma)
                this.state = 172
                this.initializer()
              }
            }
          }
          this.state = 177
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx)
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
  public assignmentExpression(): AssignmentExpressionContext {
    const _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 18, SourCParser.RULE_assignmentExpression)
    try {
      this.state = 183
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 178
            this.conditionalExpression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 179
            this.unaryExpression()
            this.state = 180
            this.match(SourCParser.Assign)
            this.state = 181
            this.assignmentExpression()
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
  public conditionalExpression(): ConditionalExpressionContext {
    const _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 20, SourCParser.RULE_conditionalExpression)
    try {
      this.state = 192
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 185
            this.logicalOrExpression(0)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 186
            this.logicalOrExpression(0)
            this.state = 187
            this.match(SourCParser.Question)
            this.state = 188
            _localctx._cons = this.conditionalExpression()
            this.state = 189
            this.match(SourCParser.Colon)
            this.state = 190
            _localctx._alt = this.conditionalExpression()
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

  public logicalOrExpression(): LogicalOrExpressionContext
  public logicalOrExpression(_p: number): LogicalOrExpressionContext
  // @RuleVersion(0)
  public logicalOrExpression(_p?: number): LogicalOrExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: LogicalOrExpressionContext = _localctx
    const _startState: number = 22
    this.enterRecursionRule(_localctx, 22, SourCParser.RULE_logicalOrExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 195
          this.logicalAndExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 202
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new LogicalOrExpressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  SourCParser.RULE_logicalOrExpression
                )
                this.state = 197
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 198
                this.match(SourCParser.OrOr)
                this.state = 199
                this.logicalAndExpression(0)
              }
            }
          }
          this.state = 204
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx)
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

  public logicalAndExpression(): LogicalAndExpressionContext
  public logicalAndExpression(_p: number): LogicalAndExpressionContext
  // @RuleVersion(0)
  public logicalAndExpression(_p?: number): LogicalAndExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: LogicalAndExpressionContext = _localctx
    const _startState: number = 24
    this.enterRecursionRule(_localctx, 24, SourCParser.RULE_logicalAndExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 206
          this.equalityExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 213
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new LogicalAndExpressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  SourCParser.RULE_logicalAndExpression
                )
                this.state = 208
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 209
                this.match(SourCParser.AndAnd)
                this.state = 210
                this.equalityExpression(0)
              }
            }
          }
          this.state = 215
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
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

  public equalityExpression(): EqualityExpressionContext
  public equalityExpression(_p: number): EqualityExpressionContext
  // @RuleVersion(0)
  public equalityExpression(_p?: number): EqualityExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: EqualityExpressionContext = new EqualityExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: EqualityExpressionContext = _localctx
    const _startState: number = 26
    this.enterRecursionRule(_localctx, 26, SourCParser.RULE_equalityExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 217
          this.relationalExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 227
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 225
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                  {
                    _localctx = new EqualityExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_equalityExpression
                    )
                    this.state = 219
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 220
                    this.match(SourCParser.Equal)
                    this.state = 221
                    this.relationalExpression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new EqualityExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_equalityExpression
                    )
                    this.state = 222
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 223
                    this.match(SourCParser.NotEqual)
                    this.state = 224
                    this.relationalExpression(0)
                  }
                  break
              }
            }
          }
          this.state = 229
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx)
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

  public relationalExpression(): RelationalExpressionContext
  public relationalExpression(_p: number): RelationalExpressionContext
  // @RuleVersion(0)
  public relationalExpression(_p?: number): RelationalExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: RelationalExpressionContext = new RelationalExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: RelationalExpressionContext = _localctx
    const _startState: number = 28
    this.enterRecursionRule(_localctx, 28, SourCParser.RULE_relationalExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 231
          this.additiveExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 247
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 245
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                  {
                    _localctx = new RelationalExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_relationalExpression
                    )
                    this.state = 233
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 234
                    this.match(SourCParser.Less)
                    this.state = 235
                    this.additiveExpression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new RelationalExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_relationalExpression
                    )
                    this.state = 236
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 237
                    this.match(SourCParser.Greater)
                    this.state = 238
                    this.additiveExpression(0)
                  }
                  break

                case 3:
                  {
                    _localctx = new RelationalExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_relationalExpression
                    )
                    this.state = 239
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 240
                    this.match(SourCParser.LessEqual)
                    this.state = 241
                    this.additiveExpression(0)
                  }
                  break

                case 4:
                  {
                    _localctx = new RelationalExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_relationalExpression
                    )
                    this.state = 242
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 243
                    this.match(SourCParser.GreaterEqual)
                    this.state = 244
                    this.additiveExpression(0)
                  }
                  break
              }
            }
          }
          this.state = 249
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx)
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

  public additiveExpression(): AdditiveExpressionContext
  public additiveExpression(_p: number): AdditiveExpressionContext
  // @RuleVersion(0)
  public additiveExpression(_p?: number): AdditiveExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: AdditiveExpressionContext = _localctx
    const _startState: number = 30
    this.enterRecursionRule(_localctx, 30, SourCParser.RULE_additiveExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 251
          this.multiplicativeExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 261
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 259
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                  {
                    _localctx = new AdditiveExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_additiveExpression
                    )
                    this.state = 253
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 254
                    this.match(SourCParser.Plus)
                    this.state = 255
                    this.multiplicativeExpression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new AdditiveExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_additiveExpression
                    )
                    this.state = 256
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 257
                    this.match(SourCParser.Minus)
                    this.state = 258
                    this.multiplicativeExpression(0)
                  }
                  break
              }
            }
          }
          this.state = 263
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx)
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

  public multiplicativeExpression(): MultiplicativeExpressionContext
  public multiplicativeExpression(_p: number): MultiplicativeExpressionContext
  // @RuleVersion(0)
  public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: MultiplicativeExpressionContext = _localctx
    const _startState: number = 32
    this.enterRecursionRule(_localctx, 32, SourCParser.RULE_multiplicativeExpression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 265
          this.castExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 278
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 276
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                case 1:
                  {
                    _localctx = new MultiplicativeExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_multiplicativeExpression
                    )
                    this.state = 267
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 268
                    this.match(SourCParser.Star)
                    this.state = 269
                    this.castExpression()
                  }
                  break

                case 2:
                  {
                    _localctx = new MultiplicativeExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_multiplicativeExpression
                    )
                    this.state = 270
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 271
                    this.match(SourCParser.Div)
                    this.state = 272
                    this.castExpression()
                  }
                  break

                case 3:
                  {
                    _localctx = new MultiplicativeExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_multiplicativeExpression
                    )
                    this.state = 273
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 274
                    this.match(SourCParser.Mod)
                    this.state = 275
                    this.castExpression()
                  }
                  break
              }
            }
          }
          this.state = 280
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx)
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
  public castExpression(): CastExpressionContext {
    const _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 34, SourCParser.RULE_castExpression)
    try {
      this.state = 286
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 281
            this.unaryExpression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 282
            this.match(SourCParser.LeftParen)
            this.state = 283
            this.match(SourCParser.TypeName)
            this.state = 284
            this.match(SourCParser.RightParen)
            this.state = 285
            this.castExpression()
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
  public unaryExpression(): UnaryExpressionContext {
    const _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 36, SourCParser.RULE_unaryExpression)
    try {
      this.state = 300
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.LeftParen:
        case SourCParser.Identifier:
        case SourCParser.Constant:
        case SourCParser.StringLiteral:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 288
            this.postfixExpression(0)
          }
          break
        case SourCParser.PlusPlus:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 289
            this.match(SourCParser.PlusPlus)
            this.state = 290
            this.unaryExpression()
          }
          break
        case SourCParser.MinusMinus:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 291
            this.match(SourCParser.MinusMinus)
            this.state = 292
            this.unaryExpression()
          }
          break
        case SourCParser.UnaryOperator:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 293
            this.match(SourCParser.UnaryOperator)
            this.state = 294
            this.castExpression()
          }
          break
        case SourCParser.Sizeof:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 295
            this.match(SourCParser.Sizeof)
            this.state = 296
            this.match(SourCParser.LeftParen)
            this.state = 297
            this.sizeofOperands()
            this.state = 298
            this.match(SourCParser.RightParen)
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
  public sizeofOperands(): SizeofOperandsContext {
    const _localctx: SizeofOperandsContext = new SizeofOperandsContext(this._ctx, this.state)
    this.enterRule(_localctx, 38, SourCParser.RULE_sizeofOperands)
    let _la: number
    try {
      this.state = 312
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 303
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 302
                this.pointer()
              }
            }

            this.state = 305
            this.match(SourCParser.TypeName)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 307
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 306
                this.pointer()
              }
            }

            this.state = 309
            this.match(SourCParser.Identifier)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 310
            this.match(SourCParser.And)
            this.state = 311
            this.match(SourCParser.Identifier)
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

  public postfixExpression(): PostfixExpressionContext
  public postfixExpression(_p: number): PostfixExpressionContext
  // @RuleVersion(0)
  public postfixExpression(_p?: number): PostfixExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, _parentState)
    let _prevctx: PostfixExpressionContext = _localctx
    const _startState: number = 40
    this.enterRecursionRule(_localctx, 40, SourCParser.RULE_postfixExpression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 315
          this.primaryExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 343
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 341
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfixExpression
                    )
                    this.state = 317
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 318
                    this.match(SourCParser.LeftBracket)
                    this.state = 319
                    this.expression(0)
                    this.state = 320
                    this.match(SourCParser.RightBracket)
                  }
                  break

                case 2:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfixExpression
                    )
                    this.state = 322
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 323
                    this.match(SourCParser.LeftParen)
                    this.state = 327
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    while (
                      _la === SourCParser.Sizeof ||
                      _la === SourCParser.LeftParen ||
                      (((_la - 35) & ~0x1f) === 0 &&
                        ((1 << (_la - 35)) &
                          ((1 << (SourCParser.PlusPlus - 35)) |
                            (1 << (SourCParser.MinusMinus - 35)) |
                            (1 << (SourCParser.UnaryOperator - 35)) |
                            (1 << (SourCParser.Identifier - 35)) |
                            (1 << (SourCParser.Constant - 35)) |
                            (1 << (SourCParser.StringLiteral - 35)))) !==
                          0)
                    ) {
                      {
                        {
                          this.state = 324
                          this.expression(0)
                        }
                      }
                      this.state = 329
                      this._errHandler.sync(this)
                      _la = this._input.LA(1)
                    }
                    this.state = 330
                    this.match(SourCParser.RightParen)
                  }
                  break

                case 3:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfixExpression
                    )
                    this.state = 331
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 332
                    this.match(SourCParser.Dot)
                    this.state = 333
                    this.match(SourCParser.Identifier)
                  }
                  break

                case 4:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfixExpression
                    )
                    this.state = 334
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 335
                    this.match(SourCParser.Arrow)
                    this.state = 336
                    this.match(SourCParser.Identifier)
                  }
                  break

                case 5:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfixExpression
                    )
                    this.state = 337
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 338
                    this.match(SourCParser.PlusPlus)
                  }
                  break

                case 6:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfixExpression
                    )
                    this.state = 339
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 340
                    this.match(SourCParser.MinusMinus)
                  }
                  break
              }
            }
          }
          this.state = 345
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx)
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
  public primaryExpression(): PrimaryExpressionContext {
    const _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 42, SourCParser.RULE_primaryExpression)
    try {
      this.state = 353
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Identifier:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 346
            this.match(SourCParser.Identifier)
          }
          break
        case SourCParser.Constant:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 347
            this.match(SourCParser.Constant)
          }
          break
        case SourCParser.StringLiteral:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 348
            this.match(SourCParser.StringLiteral)
          }
          break
        case SourCParser.LeftParen:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 349
            this.match(SourCParser.LeftParen)
            this.state = 350
            this.expression(0)
            this.state = 351
            this.match(SourCParser.RightParen)
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

  public expression(): ExpressionContext
  public expression(_p: number): ExpressionContext
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState)
    let _prevctx: ExpressionContext = _localctx
    const _startState: number = 44
    this.enterRecursionRule(_localctx, 44, SourCParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 356
          this.assignmentExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 363
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ExpressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, SourCParser.RULE_expression)
                this.state = 358
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 359
                this.match(SourCParser.Comma)
                this.state = 360
                this.assignmentExpression()
              }
            }
          }
          this.state = 365
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx)
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
  public constantExpression(): ConstantExpressionContext {
    const _localctx: ConstantExpressionContext = new ConstantExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 46, SourCParser.RULE_constantExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 366
        this.conditionalExpression()
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
    this.enterRule(_localctx, 48, SourCParser.RULE_functionDefinition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 369
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 368
              this.typeSpecifier()
            }
          }
          this.state = 371
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << SourCParser.Char) |
              (1 << SourCParser.Double) |
              (1 << SourCParser.Float) |
              (1 << SourCParser.Int) |
              (1 << SourCParser.Long) |
              (1 << SourCParser.Short) |
              (1 << SourCParser.Signed) |
              (1 << SourCParser.Struct) |
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        )
        this.state = 374
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === SourCParser.Star) {
          {
            this.state = 373
            this.pointer()
          }
        }

        this.state = 376
        this.match(SourCParser.Identifier)
        this.state = 377
        this.match(SourCParser.LeftParen)
        this.state = 379
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << SourCParser.Char) |
              (1 << SourCParser.Double) |
              (1 << SourCParser.Float) |
              (1 << SourCParser.Int) |
              (1 << SourCParser.Long) |
              (1 << SourCParser.Short) |
              (1 << SourCParser.Signed) |
              (1 << SourCParser.Struct) |
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        ) {
          {
            this.state = 378
            this.parameterList(0)
          }
        }

        this.state = 381
        this.match(SourCParser.RightParen)
        this.state = 382
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
  public pointer(): PointerContext {
    const _localctx: PointerContext = new PointerContext(this._ctx, this.state)
    this.enterRule(_localctx, 50, SourCParser.RULE_pointer)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 384
        this.match(SourCParser.Star)
        this.state = 386
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === SourCParser.Star) {
          {
            this.state = 385
            this.pointer()
          }
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

  public parameterList(): ParameterListContext
  public parameterList(_p: number): ParameterListContext
  // @RuleVersion(0)
  public parameterList(_p?: number): ParameterListContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ParameterListContext = new ParameterListContext(this._ctx, _parentState)
    let _prevctx: ParameterListContext = _localctx
    const _startState: number = 52
    this.enterRecursionRule(_localctx, 52, SourCParser.RULE_parameterList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 389
          this.parameterDeclaration()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 396
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ParameterListContext(_parentctx, _parentState)
                this.pushNewRecursionContext(_localctx, _startState, SourCParser.RULE_parameterList)
                this.state = 391
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 392
                this.match(SourCParser.Comma)
                this.state = 393
                this.parameterDeclaration()
              }
            }
          }
          this.state = 398
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx)
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
  public parameterDeclaration(): ParameterDeclarationContext {
    const _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 54, SourCParser.RULE_parameterDeclaration)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 400
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 399
              this.typeSpecifier()
            }
          }
          this.state = 402
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << SourCParser.Char) |
              (1 << SourCParser.Double) |
              (1 << SourCParser.Float) |
              (1 << SourCParser.Int) |
              (1 << SourCParser.Long) |
              (1 << SourCParser.Short) |
              (1 << SourCParser.Signed) |
              (1 << SourCParser.Struct) |
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        )
        this.state = 405
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === SourCParser.Star) {
          {
            this.state = 404
            this.pointer()
          }
        }

        this.state = 407
        this.match(SourCParser.Identifier)
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
    this.enterRule(_localctx, 56, SourCParser.RULE_compoundStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 409
        this.match(SourCParser.LeftBrace)
        this.state = 413
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << SourCParser.Break) |
                (1 << SourCParser.Char) |
                (1 << SourCParser.Continue) |
                (1 << SourCParser.Do) |
                (1 << SourCParser.Double) |
                (1 << SourCParser.Float) |
                (1 << SourCParser.For) |
                (1 << SourCParser.If) |
                (1 << SourCParser.Int) |
                (1 << SourCParser.Long) |
                (1 << SourCParser.Return) |
                (1 << SourCParser.Short) |
                (1 << SourCParser.Signed) |
                (1 << SourCParser.Sizeof) |
                (1 << SourCParser.Struct) |
                (1 << SourCParser.Unsigned) |
                (1 << SourCParser.Void) |
                (1 << SourCParser.While) |
                (1 << SourCParser.LeftParen) |
                (1 << SourCParser.LeftBrace))) !==
              0) ||
          (((_la - 35) & ~0x1f) === 0 &&
            ((1 << (_la - 35)) &
              ((1 << (SourCParser.PlusPlus - 35)) |
                (1 << (SourCParser.MinusMinus - 35)) |
                (1 << (SourCParser.Semi - 35)) |
                (1 << (SourCParser.UnaryOperator - 35)) |
                (1 << (SourCParser.Identifier - 35)) |
                (1 << (SourCParser.Constant - 35)) |
                (1 << (SourCParser.StringLiteral - 35)))) !==
              0)
        ) {
          {
            {
              this.state = 410
              this.statement()
            }
          }
          this.state = 415
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 416
        this.match(SourCParser.RightBrace)
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
  public statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 58, SourCParser.RULE_statement)
    try {
      this.state = 424
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Char:
        case SourCParser.Double:
        case SourCParser.Float:
        case SourCParser.Int:
        case SourCParser.Long:
        case SourCParser.Short:
        case SourCParser.Signed:
        case SourCParser.Struct:
        case SourCParser.Unsigned:
        case SourCParser.Void:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 418
            this.declaration()
          }
          break
        case SourCParser.Sizeof:
        case SourCParser.LeftParen:
        case SourCParser.PlusPlus:
        case SourCParser.MinusMinus:
        case SourCParser.Semi:
        case SourCParser.UnaryOperator:
        case SourCParser.Identifier:
        case SourCParser.Constant:
        case SourCParser.StringLiteral:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 419
            this.expressionStatement()
          }
          break
        case SourCParser.LeftBrace:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 420
            this.compoundStatement()
          }
          break
        case SourCParser.If:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 421
            this.selectionStatement()
          }
          break
        case SourCParser.Do:
        case SourCParser.For:
        case SourCParser.While:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 422
            this.iterationStatement()
          }
          break
        case SourCParser.Break:
        case SourCParser.Continue:
        case SourCParser.Return:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 423
            this.jumpStatement()
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
  public expressionStatement(): ExpressionStatementContext {
    const _localctx: ExpressionStatementContext = new ExpressionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 60, SourCParser.RULE_expressionStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 427
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          _la === SourCParser.Sizeof ||
          _la === SourCParser.LeftParen ||
          (((_la - 35) & ~0x1f) === 0 &&
            ((1 << (_la - 35)) &
              ((1 << (SourCParser.PlusPlus - 35)) |
                (1 << (SourCParser.MinusMinus - 35)) |
                (1 << (SourCParser.UnaryOperator - 35)) |
                (1 << (SourCParser.Identifier - 35)) |
                (1 << (SourCParser.Constant - 35)) |
                (1 << (SourCParser.StringLiteral - 35)))) !==
              0)
        ) {
          {
            this.state = 426
            this.expression(0)
          }
        }

        this.state = 429
        this.match(SourCParser.Semi)
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
  public selectionStatement(): SelectionStatementContext {
    const _localctx: SelectionStatementContext = new SelectionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 62, SourCParser.RULE_selectionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 431
        this.match(SourCParser.If)
        this.state = 432
        this.match(SourCParser.LeftParen)
        this.state = 433
        this.expression(0)
        this.state = 434
        this.match(SourCParser.RightParen)
        this.state = 435
        _localctx._cons = this.statement()
        this.state = 438
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
          case 1:
            {
              this.state = 436
              this.match(SourCParser.Else)
              this.state = 437
              _localctx._alt = this.statement()
            }
            break
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
  public iterationStatement(): IterationStatementContext {
    const _localctx: IterationStatementContext = new IterationStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 64, SourCParser.RULE_iterationStatement)
    let _la: number
    try {
      this.state = 469
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.While:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 440
            this.match(SourCParser.While)
            this.state = 441
            this.match(SourCParser.LeftParen)
            this.state = 442
            this.expression(0)
            this.state = 443
            this.match(SourCParser.RightParen)
            this.state = 444
            this.statement()
          }
          break
        case SourCParser.Do:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 446
            this.match(SourCParser.Do)
            this.state = 447
            this.statement()
            this.state = 448
            this.match(SourCParser.While)
            this.state = 449
            this.match(SourCParser.LeftParen)
            this.state = 450
            this.expression(0)
            this.state = 451
            this.match(SourCParser.RightParen)
            this.state = 452
            this.match(SourCParser.Semi)
          }
          break
        case SourCParser.For:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 454
            this.match(SourCParser.For)
            this.state = 455
            this.match(SourCParser.LeftParen)
            this.state = 457
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 35) & ~0x1f) === 0 &&
                ((1 << (_la - 35)) &
                  ((1 << (SourCParser.PlusPlus - 35)) |
                    (1 << (SourCParser.MinusMinus - 35)) |
                    (1 << (SourCParser.UnaryOperator - 35)) |
                    (1 << (SourCParser.Identifier - 35)) |
                    (1 << (SourCParser.Constant - 35)) |
                    (1 << (SourCParser.StringLiteral - 35)))) !==
                  0)
            ) {
              {
                this.state = 456
                _localctx._init = this.expression(0)
              }
            }

            this.state = 459
            this.match(SourCParser.Semi)
            this.state = 461
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 35) & ~0x1f) === 0 &&
                ((1 << (_la - 35)) &
                  ((1 << (SourCParser.PlusPlus - 35)) |
                    (1 << (SourCParser.MinusMinus - 35)) |
                    (1 << (SourCParser.UnaryOperator - 35)) |
                    (1 << (SourCParser.Identifier - 35)) |
                    (1 << (SourCParser.Constant - 35)) |
                    (1 << (SourCParser.StringLiteral - 35)))) !==
                  0)
            ) {
              {
                this.state = 460
                _localctx._test = this.expression(0)
              }
            }

            this.state = 463
            this.match(SourCParser.Semi)
            this.state = 465
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 35) & ~0x1f) === 0 &&
                ((1 << (_la - 35)) &
                  ((1 << (SourCParser.PlusPlus - 35)) |
                    (1 << (SourCParser.MinusMinus - 35)) |
                    (1 << (SourCParser.UnaryOperator - 35)) |
                    (1 << (SourCParser.Identifier - 35)) |
                    (1 << (SourCParser.Constant - 35)) |
                    (1 << (SourCParser.StringLiteral - 35)))) !==
                  0)
            ) {
              {
                this.state = 464
                _localctx._step = this.expression(0)
              }
            }

            this.state = 467
            this.match(SourCParser.RightParen)
            this.state = 468
            this.statement()
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
  public jumpStatement(): JumpStatementContext {
    const _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 66, SourCParser.RULE_jumpStatement)
    let _la: number
    try {
      this.state = 480
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Continue:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 471
            this.match(SourCParser.Continue)
            this.state = 472
            this.match(SourCParser.Semi)
          }
          break
        case SourCParser.Break:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 473
            this.match(SourCParser.Break)
            this.state = 474
            this.match(SourCParser.Semi)
          }
          break
        case SourCParser.Return:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 475
            this.match(SourCParser.Return)
            this.state = 477
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 35) & ~0x1f) === 0 &&
                ((1 << (_la - 35)) &
                  ((1 << (SourCParser.PlusPlus - 35)) |
                    (1 << (SourCParser.MinusMinus - 35)) |
                    (1 << (SourCParser.UnaryOperator - 35)) |
                    (1 << (SourCParser.Identifier - 35)) |
                    (1 << (SourCParser.Constant - 35)) |
                    (1 << (SourCParser.StringLiteral - 35)))) !==
                  0)
            ) {
              {
                this.state = 476
                this.expression(0)
              }
            }

            this.state = 479
            this.match(SourCParser.Semi)
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
  public structSpecifier(): StructSpecifierContext {
    const _localctx: StructSpecifierContext = new StructSpecifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 68, SourCParser.RULE_structSpecifier)
    let _la: number
    try {
      this.state = 494
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 482
            this.match(SourCParser.Struct)
            this.state = 483
            this.match(SourCParser.Identifier)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 484
            this.match(SourCParser.Struct)
            this.state = 485
            this.match(SourCParser.Identifier)
            this.state = 486
            this.match(SourCParser.LeftBrace)
            this.state = 488
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 487
                  this.structDeclaration()
                }
              }
              this.state = 490
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << SourCParser.Char) |
                  (1 << SourCParser.Double) |
                  (1 << SourCParser.Float) |
                  (1 << SourCParser.Int) |
                  (1 << SourCParser.Long) |
                  (1 << SourCParser.Short) |
                  (1 << SourCParser.Signed) |
                  (1 << SourCParser.Struct) |
                  (1 << SourCParser.Unsigned) |
                  (1 << SourCParser.Void))) !==
                0
            )
            this.state = 492
            this.match(SourCParser.RightBrace)
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
  public structDeclaration(): StructDeclarationContext {
    const _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 70, SourCParser.RULE_structDeclaration)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 497
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 496
              this.typeSpecifier()
            }
          }
          this.state = 499
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << SourCParser.Char) |
              (1 << SourCParser.Double) |
              (1 << SourCParser.Float) |
              (1 << SourCParser.Int) |
              (1 << SourCParser.Long) |
              (1 << SourCParser.Short) |
              (1 << SourCParser.Signed) |
              (1 << SourCParser.Struct) |
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        )
        this.state = 501
        this.declarator()
        this.state = 502
        this.match(SourCParser.Semi)
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
        return this.initializerList_sempred(_localctx as InitializerListContext, predIndex)

      case 11:
        return this.logicalOrExpression_sempred(_localctx as LogicalOrExpressionContext, predIndex)

      case 12:
        return this.logicalAndExpression_sempred(
          _localctx as LogicalAndExpressionContext,
          predIndex
        )

      case 13:
        return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex)

      case 14:
        return this.relationalExpression_sempred(
          _localctx as RelationalExpressionContext,
          predIndex
        )

      case 15:
        return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex)

      case 16:
        return this.multiplicativeExpression_sempred(
          _localctx as MultiplicativeExpressionContext,
          predIndex
        )

      case 20:
        return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex)

      case 22:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)

      case 26:
        return this.parameterList_sempred(_localctx as ParameterListContext, predIndex)
    }
    return true
  }
  private initializerList_sempred(_localctx: InitializerListContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logicalOrExpression_sempred(
    _localctx: LogicalOrExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logicalAndExpression_sempred(
    _localctx: LogicalAndExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private equalityExpression_sempred(
    _localctx: EqualityExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 3:
        return this.precpred(this._ctx, 2)

      case 4:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private relationalExpression_sempred(
    _localctx: RelationalExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 5:
        return this.precpred(this._ctx, 4)

      case 6:
        return this.precpred(this._ctx, 3)

      case 7:
        return this.precpred(this._ctx, 2)

      case 8:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private additiveExpression_sempred(
    _localctx: AdditiveExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 9:
        return this.precpred(this._ctx, 2)

      case 10:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private multiplicativeExpression_sempred(
    _localctx: MultiplicativeExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 11:
        return this.precpred(this._ctx, 3)

      case 12:
        return this.precpred(this._ctx, 2)

      case 13:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private postfixExpression_sempred(
    _localctx: PostfixExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 14:
        return this.precpred(this._ctx, 6)

      case 15:
        return this.precpred(this._ctx, 5)

      case 16:
        return this.precpred(this._ctx, 4)

      case 17:
        return this.precpred(this._ctx, 3)

      case 18:
        return this.precpred(this._ctx, 2)

      case 19:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 20:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private parameterList_sempred(_localctx: ParameterListContext, predIndex: number): boolean {
    switch (predIndex) {
      case 21:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\u01FB\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    '\t#\x04$\t$\x04%\t%\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03' +
    '\x02\x03\x02\x03\x02\x03\x02\x05\x02U\n\x02\x03\x03\x07\x03X\n\x03\f\x03' +
    '\x0E\x03[\v\x03\x03\x04\x03\x04\x05\x04_\n\x04\x03\x05\x06\x05b\n\x05' +
    '\r\x05\x0E\x05c\x03\x05\x05\x05g\n\x05\x03\x05\x03\x05\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x03\x06\x05\x06p\n\x06\x03\x07\x05\x07s\n\x07\x03\x07' +
    '\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07|\n\x07\x03\x07' +
    '\x03\x07\x03\x07\x03\x07\x05\x07\x82\n\x07\x03\x07\x03\x07\x03\x07\x03' +
    '\x07\x05\x07\x88\n\x07\x03\x07\x05\x07\x8B\n\x07\x03\b\x06\b\x8E\n\b\r' +
    '\b\x0E\b\x8F\x03\b\x05\b\x93\n\b\x03\b\x06\b\x96\n\b\r\b\x0E\b\x97\x03' +
    '\b\x05\b\x9B\n\b\x03\b\x03\b\x05\b\x9F\n\b\x05\b\xA1\n\b\x03\t\x03\t\x03' +
    '\t\x03\t\x03\t\x05\t\xA8\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n' +
    '\xB0\n\n\f\n\x0E\n\xB3\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xBA\n\v' +
    '\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xC3\n\f\x03\r\x03\r\x03' +
    '\r\x03\r\x03\r\x03\r\x07\r\xCB\n\r\f\r\x0E\r\xCE\v\r\x03\x0E\x03\x0E\x03' +
    '\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xD6\n\x0E\f\x0E\x0E\x0E\xD9\v\x0E' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x07\x0F\xE4\n\x0F\f\x0F\x0E\x0F\xE7\v\x0F\x03\x10\x03\x10\x03\x10\x03' +
    '\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03' +
    '\x10\x03\x10\x03\x10\x07\x10\xF8\n\x10\f\x10\x0E\x10\xFB\v\x10\x03\x11' +
    '\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11' +
    '\u0106\n\x11\f\x11\x0E\x11\u0109\v\x11\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12' +
    '\u0117\n\x12\f\x12\x0E\x12\u011A\v\x12\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x05\x13\u0121\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u012F\n\x14' +
    '\x03\x15\x05\x15\u0132\n\x15\x03\x15\x03\x15\x05\x15\u0136\n\x15\x03\x15' +
    '\x03\x15\x03\x15\x05\x15\u013B\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03' +
    '\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0148\n\x16' +
    '\f\x16\x0E\x16\u014B\v\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03' +
    '\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0158\n\x16\f\x16' +
    '\x0E\x16\u015B\v\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03' +
    '\x17\x05\x17\u0164\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18' +
    '\x07\x18\u016C\n\x18\f\x18\x0E\x18\u016F\v\x18\x03\x19\x03\x19\x03\x1A' +
    '\x06\x1A\u0174\n\x1A\r\x1A\x0E\x1A\u0175\x03\x1A\x05\x1A\u0179\n\x1A\x03' +
    '\x1A\x03\x1A\x03\x1A\x05\x1A\u017E\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B' +
    '\x03\x1B\x05\x1B\u0185\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03' +
    '\x1C\x07\x1C\u018D\n\x1C\f\x1C\x0E\x1C\u0190\v\x1C\x03\x1D\x06\x1D\u0193' +
    '\n\x1D\r\x1D\x0E\x1D\u0194\x03\x1D\x05\x1D\u0198\n\x1D\x03\x1D\x03\x1D' +
    '\x03\x1E\x03\x1E\x07\x1E\u019E\n\x1E\f\x1E\x0E\x1E\u01A1\v\x1E\x03\x1E' +
    '\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01AB' +
    '\n\x1F\x03 \x05 \u01AE\n \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03' +
    '!\x05!\u01B9\n!\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x03"' +
    '\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x05"\u01CC\n"\x03"' +
    '\x03"\x05"\u01D0\n"\x03"\x03"\x05"\u01D4\n"\x03"\x03"\x05"\u01D8' +
    '\n"\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01E0\n#\x03#\x05#\u01E3\n#\x03' +
    '$\x03$\x03$\x03$\x03$\x03$\x06$\u01EB\n$\r$\x0E$\u01EC\x03$\x03$\x05$' +
    '\u01F1\n$\x03%\x06%\u01F4\n%\r%\x0E%\u01F5\x03%\x03%\x03%\x03%\x02\x02' +
    '\f\x12\x18\x1A\x1C\x1E "*.6&\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02' +
    '\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02' +
    ' \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02' +
    '<\x02>\x02@\x02B\x02D\x02F\x02H\x02\x02\x02\x02\u0230\x02T\x03\x02\x02' +
    '\x02\x04Y\x03\x02\x02\x02\x06^\x03\x02\x02\x02\ba\x03\x02\x02\x02\no\x03' +
    '\x02\x02\x02\f\x8A\x03\x02\x02\x02\x0E\xA0\x03\x02\x02\x02\x10\xA7\x03' +
    '\x02\x02\x02\x12\xA9\x03\x02\x02\x02\x14\xB9\x03\x02\x02\x02\x16\xC2\x03' +
    '\x02\x02\x02\x18\xC4\x03\x02\x02\x02\x1A\xCF\x03\x02\x02\x02\x1C\xDA\x03' +
    '\x02\x02\x02\x1E\xE8\x03\x02\x02\x02 \xFC\x03\x02\x02\x02"\u010A\x03' +
    '\x02\x02\x02$\u0120\x03\x02\x02\x02&\u012E\x03\x02\x02\x02(\u013A\x03' +
    '\x02\x02\x02*\u013C\x03\x02\x02\x02,\u0163\x03\x02\x02\x02.\u0165\x03' +
    '\x02\x02\x020\u0170\x03\x02\x02\x022\u0173\x03\x02\x02\x024\u0182\x03' +
    '\x02\x02\x026\u0186\x03\x02\x02\x028\u0192\x03\x02\x02\x02:\u019B\x03' +
    '\x02\x02\x02<\u01AA\x03\x02\x02\x02>\u01AD\x03\x02\x02\x02@\u01B1\x03' +
    '\x02\x02\x02B\u01D7\x03\x02\x02\x02D\u01E2\x03\x02\x02\x02F\u01F0\x03' +
    '\x02\x02\x02H\u01F3\x03\x02\x02\x02JU\x07\x16\x02\x02KU\x07\x04\x02\x02' +
    'LU\x07\x10\x02\x02MU\x07\r\x02\x02NU\x07\x0E\x02\x02OU\x07\n\x02\x02P' +
    'U\x07\b\x02\x02QU\x07\x11\x02\x02RU\x07\x15\x02\x02SU\x05F$\x02TJ\x03' +
    '\x02\x02\x02TK\x03\x02\x02\x02TL\x03\x02\x02\x02TM\x03\x02\x02\x02TN\x03' +
    '\x02\x02\x02TO\x03\x02\x02\x02TP\x03\x02\x02\x02TQ\x03\x02\x02\x02TR\x03' +
    '\x02\x02\x02TS\x03\x02\x02\x02U\x03\x03\x02\x02\x02VX\x05\x06\x04\x02' +
    'WV\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02' +
    'Z\x05\x03\x02\x02\x02[Y\x03\x02\x02\x02\\_\x052\x1A\x02]_\x05\b\x05\x02' +
    '^\\\x03\x02\x02\x02^]\x03\x02\x02\x02_\x07\x03\x02\x02\x02`b\x05\x02\x02' +
    '\x02a`\x03\x02\x02\x02bc\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02' +
    '\x02df\x03\x02\x02\x02eg\x05\n\x06\x02fe\x03\x02\x02\x02fg\x03\x02\x02' +
    '\x02gh\x03\x02\x02\x02hi\x071\x02\x02i\t\x03\x02\x02\x02jp\x05\f\x07\x02' +
    'kl\x05\f\x07\x02lm\x073\x02\x02mn\x05\x10\t\x02np\x03\x02\x02\x02oj\x03' +
    '\x02\x02\x02ok\x03\x02\x02\x02p\v\x03\x02\x02\x02qs\x054\x1B\x02rq\x03' +
    '\x02\x02\x02rs\x03\x02\x02\x02st\x03\x02\x02\x02t\x8B\x07?\x02\x02uv\x07' +
    '\x18\x02\x02vw\x07(\x02\x02wx\x07?\x02\x02xy\x07\x19\x02\x02y{\x07\x18' +
    '\x02\x02z|\x05\x0E\b\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02' +
    '\x02\x02}\x8B\x07\x19\x02\x02~\x7F\x07?\x02\x02\x7F\x81\x07\x1A\x02\x02' +
    '\x80\x82\x050\x19\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02' +
    '\x82\x83\x03\x02\x02\x02\x83\x8B\x07\x1B\x02\x02\x84\x85\x07?\x02\x02' +
    '\x85\x87\x07\x18\x02\x02\x86\x88\x056\x1C\x02\x87\x86\x03\x02\x02\x02' +
    '\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8B\x07\x19\x02\x02' +
    '\x8Ar\x03\x02\x02\x02\x8Au\x03\x02\x02\x02\x8A~\x03\x02\x02\x02\x8A\x84' +
    '\x03\x02\x02\x02\x8B\r\x03\x02\x02\x02\x8C\x8E\x07>\x02\x02\x8D\x8C\x03' +
    '\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03' +
    '\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x93\x054\x1B\x02\x92\x91\x03' +
    '\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\xA1\x03\x02\x02\x02\x94\x96\x07' +
    '>\x02\x02\x95\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x95\x03' +
    '\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x9B\x05' +
    '4\x1B\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x03' +
    '\x02\x02\x02\x9C\x9E\x072\x02\x02\x9D\x9F\x05\x0E\b\x02\x9E\x9D\x03\x02' +
    '\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x8D\x03\x02' +
    '\x02\x02\xA0\x95\x03\x02\x02\x02\xA1\x0F\x03\x02\x02\x02\xA2\xA8\x05\x14' +
    '\v\x02\xA3\xA4\x07\x1C\x02\x02\xA4\xA5\x05\x12\n\x02\xA5\xA6\x07\x1D\x02' +
    '\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA2\x03\x02\x02\x02\xA7\xA3\x03\x02\x02' +
    '\x02\xA8\x11\x03\x02\x02\x02\xA9\xAA\b\n\x01\x02\xAA\xAB\x05\x10\t\x02' +
    '\xAB\xB1\x03\x02\x02\x02\xAC\xAD\f\x03\x02\x02\xAD\xAE\x072\x02\x02\xAE' +
    '\xB0\x05\x10\t\x02\xAF\xAC\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1' +
    '\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\x13\x03\x02\x02\x02\xB3' +
    '\xB1\x03\x02\x02\x02\xB4\xBA\x05\x16\f\x02\xB5\xB6\x05&\x14\x02\xB6\xB7' +
    '\x073\x02\x02\xB7\xB8\x05\x14\v\x02\xB8\xBA\x03\x02\x02\x02\xB9\xB4\x03' +
    '\x02\x02\x02\xB9\xB5\x03\x02\x02\x02\xBA\x15\x03\x02\x02\x02\xBB\xC3\x05' +
    '\x18\r\x02\xBC\xBD\x05\x18\r\x02\xBD\xBE\x07/\x02\x02\xBE\xBF\x05\x16' +
    '\f\x02\xBF\xC0\x070\x02\x02\xC0\xC1\x05\x16\f\x02\xC1\xC3\x03\x02\x02' +
    '\x02\xC2\xBB\x03\x02\x02\x02\xC2\xBC\x03\x02\x02\x02\xC3\x17\x03\x02\x02' +
    '\x02\xC4\xC5\b\r\x01\x02\xC5\xC6\x05\x1A\x0E\x02\xC6\xCC\x03\x02\x02\x02' +
    '\xC7\xC8\f\x03\x02\x02\xC8\xC9\x07-\x02\x02\xC9\xCB\x05\x1A\x0E\x02\xCA' +
    '\xC7\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC' +
    '\xCD\x03\x02\x02\x02\xCD\x19\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF' +
    '\xD0\b\x0E\x01\x02\xD0\xD1\x05\x1C\x0F\x02\xD1\xD7\x03\x02\x02\x02\xD2' +
    '\xD3\f\x03\x02\x02\xD3\xD4\x07,\x02\x02\xD4\xD6\x05\x1C\x0F\x02\xD5\xD2' +
    '\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8' +
    '\x03\x02\x02\x02\xD8\x1B\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDB' +
    '\b\x0F\x01\x02\xDB\xDC\x05\x1E\x10\x02\xDC\xE5\x03\x02\x02\x02\xDD\xDE' +
    '\f\x04\x02\x02\xDE\xDF\x079\x02\x02\xDF\xE4\x05\x1E\x10\x02\xE0\xE1\f' +
    '\x03\x02\x02\xE1\xE2\x07:\x02\x02\xE2\xE4\x05\x1E\x10\x02\xE3\xDD\x03' +
    '\x02\x02\x02\xE3\xE0\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03' +
    '\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\x1D\x03\x02\x02\x02\xE7\xE5\x03' +
    '\x02\x02\x02\xE8\xE9\b\x10\x01\x02\xE9\xEA\x05 \x11\x02\xEA\xF9\x03\x02' +
    '\x02\x02\xEB\xEC\f\x06\x02\x02\xEC\xED\x07\x1E\x02\x02\xED\xF8\x05 \x11' +
    '\x02\xEE\xEF\f\x05\x02\x02\xEF\xF0\x07 \x02\x02\xF0\xF8\x05 \x11\x02\xF1' +
    '\xF2\f\x04\x02\x02\xF2\xF3\x07\x1F\x02\x02\xF3\xF8\x05 \x11\x02\xF4\xF5' +
    '\f\x03\x02\x02\xF5\xF6\x07!\x02\x02\xF6\xF8\x05 \x11\x02\xF7\xEB\x03\x02' +
    '\x02\x02\xF7\xEE\x03\x02\x02\x02\xF7\xF1\x03\x02\x02\x02\xF7\xF4\x03\x02' +
    '\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02' +
    '\x02\x02\xFA\x1F\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFD\b\x11' +
    '\x01\x02\xFD\xFE\x05"\x12\x02\xFE\u0107\x03\x02\x02\x02\xFF\u0100\f\x04' +
    '\x02\x02\u0100\u0101\x07$\x02\x02\u0101\u0106\x05"\x12\x02\u0102\u0103' +
    '\f\x03\x02\x02\u0103\u0104\x07&\x02\x02\u0104\u0106\x05"\x12\x02\u0105' +
    '\xFF\x03\x02\x02\x02\u0105\u0102\x03\x02\x02\x02\u0106\u0109\x03\x02\x02' +
    '\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108!\x03' +
    '\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010B\b\x12\x01\x02\u010B' +
    '\u010C\x05$\x13\x02\u010C\u0118\x03\x02\x02\x02\u010D\u010E\f\x05\x02' +
    '\x02\u010E\u010F\x07(\x02\x02\u010F\u0117\x05$\x13\x02\u0110\u0111\f\x04' +
    '\x02\x02\u0111\u0112\x07)\x02\x02\u0112\u0117\x05$\x13\x02\u0113\u0114' +
    '\f\x03\x02\x02\u0114\u0115\x07*\x02\x02\u0115\u0117\x05$\x13\x02\u0116' +
    '\u010D\x03\x02\x02\x02\u0116\u0110\x03\x02\x02\x02\u0116\u0113\x03\x02' +
    '\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118' +
    '\u0119\x03\x02\x02\x02\u0119#\x03\x02\x02\x02\u011A\u0118\x03\x02\x02' +
    '\x02\u011B\u0121\x05&\x14\x02\u011C\u011D\x07\x18\x02\x02\u011D\u011E' +
    '\x07>\x02\x02\u011E\u011F\x07\x19\x02\x02\u011F\u0121\x05$\x13\x02\u0120' +
    '\u011B\x03\x02\x02\x02\u0120\u011C\x03\x02\x02\x02\u0121%\x03\x02\x02' +
    '\x02\u0122\u012F\x05*\x16\x02\u0123\u0124\x07%\x02\x02\u0124\u012F\x05' +
    "&\x14\x02\u0125\u0126\x07'\x02\x02\u0126\u012F\x05&\x14\x02\u0127\u0128" +
    '\x07=\x02\x02\u0128\u012F\x05$\x13\x02\u0129\u012A\x07\x12\x02\x02\u012A' +
    '\u012B\x07\x18\x02\x02\u012B\u012C\x05(\x15\x02\u012C\u012D\x07\x19\x02' +
    '\x02\u012D\u012F\x03\x02\x02\x02\u012E\u0122\x03\x02\x02\x02\u012E\u0123' +
    '\x03\x02\x02\x02\u012E\u0125\x03\x02\x02\x02\u012E\u0127\x03\x02\x02\x02' +
    "\u012E\u0129\x03\x02\x02\x02\u012F'\x03\x02\x02\x02\u0130\u0132\x054" +
    '\x1B\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132' +
    '\u0133\x03\x02\x02\x02\u0133\u013B\x07>\x02\x02\u0134\u0136\x054\x1B\x02' +
    '\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x03' +
    '\x02\x02\x02\u0137\u013B\x07?\x02\x02\u0138\u0139\x07+\x02\x02\u0139\u013B' +
    '\x07?\x02\x02\u013A\u0131\x03\x02\x02\x02\u013A\u0135\x03\x02\x02\x02' +
    '\u013A\u0138\x03\x02\x02\x02\u013B)\x03\x02\x02\x02\u013C\u013D\b\x16' +
    '\x01\x02\u013D\u013E\x05,\x17\x02\u013E\u0159\x03\x02\x02\x02\u013F\u0140' +
    '\f\b\x02\x02\u0140\u0141\x07\x1A\x02\x02\u0141\u0142\x05.\x18\x02\u0142' +
    '\u0143\x07\x1B\x02\x02\u0143\u0158\x03\x02\x02\x02\u0144\u0145\f\x07\x02' +
    '\x02\u0145\u0149\x07\x18\x02\x02\u0146\u0148\x05.\x18\x02\u0147\u0146' +
    '\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02' +
    '\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x03\x02\x02\x02\u014B\u0149\x03' +
    '\x02\x02\x02\u014C\u0158\x07\x19\x02\x02\u014D\u014E\f\x06\x02\x02\u014E' +
    '\u014F\x07<\x02\x02\u014F\u0158\x07?\x02\x02\u0150\u0151\f\x05\x02\x02' +
    '\u0151\u0152\x07;\x02\x02\u0152\u0158\x07?\x02\x02\u0153\u0154\f\x04\x02' +
    '\x02\u0154\u0158\x07%\x02\x02\u0155\u0156\f\x03\x02\x02\u0156\u0158\x07' +
    "'\x02\x02\u0157\u013F\x03\x02\x02\x02\u0157\u0144\x03\x02\x02\x02\u0157" +
    '\u014D\x03\x02\x02\x02\u0157\u0150\x03\x02\x02\x02\u0157\u0153\x03\x02' +
    '\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159' +
    '\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A+\x03\x02\x02' +
    '\x02\u015B\u0159\x03\x02\x02\x02\u015C\u0164\x07?\x02\x02\u015D\u0164' +
    '\x07@\x02\x02\u015E\u0164\x07B\x02\x02\u015F\u0160\x07\x18\x02\x02\u0160' +
    '\u0161\x05.\x18\x02\u0161\u0162\x07\x19\x02\x02\u0162\u0164\x03\x02\x02' +
    '\x02\u0163\u015C\x03\x02\x02\x02\u0163\u015D\x03\x02\x02\x02\u0163\u015E' +
    '\x03\x02\x02\x02\u0163\u015F\x03\x02\x02\x02\u0164-\x03\x02\x02\x02\u0165' +
    '\u0166\b\x18\x01\x02\u0166\u0167\x05\x14\v\x02\u0167\u016D\x03\x02\x02' +
    '\x02\u0168\u0169\f\x03\x02\x02\u0169\u016A\x072\x02\x02\u016A\u016C\x05' +
    '\x14\v\x02\u016B\u0168\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D' +
    '\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E/\x03\x02\x02' +
    '\x02\u016F\u016D\x03\x02\x02\x02\u0170\u0171\x05\x16\f\x02\u01711\x03' +
    '\x02\x02\x02\u0172\u0174\x05\x02\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174' +
    '\u0175\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02' +
    '\x02\x02\u0176\u0178\x03\x02\x02\x02\u0177\u0179\x054\x1B\x02\u0178\u0177' +
    '\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02' +
    '\u017A\u017B\x07?\x02\x02\u017B\u017D\x07\x18\x02\x02\u017C\u017E\x05' +
    '6\x1C\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E' +
    '\u017F\x03\x02\x02\x02\u017F\u0180\x07\x19\x02\x02\u0180\u0181\x05:\x1E' +
    '\x02\u01813\x03\x02\x02\x02\u0182\u0184\x07(\x02\x02\u0183\u0185\x054' +
    '\x1B\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185' +
    '5\x03\x02\x02\x02\u0186\u0187\b\x1C\x01\x02\u0187\u0188\x058\x1D\x02\u0188' +
    '\u018E\x03\x02\x02\x02\u0189\u018A\f\x03\x02\x02\u018A\u018B\x072\x02' +
    '\x02\u018B\u018D\x058\x1D\x02\u018C\u0189\x03\x02\x02\x02\u018D\u0190' +
    '\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02' +
    '\u018F7\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191\u0193\x05\x02' +
    '\x02\x02\u0192\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194' +
    '\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0197\x03\x02' +
    '\x02\x02\u0196\u0198\x054\x1B\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198' +
    '\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x07?\x02\x02' +
    '\u019A9\x03\x02\x02\x02\u019B\u019F\x07\x1C\x02\x02\u019C\u019E\x05<\x1F' +
    '\x02\u019D\u019C\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D' +
    '\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A2\x03\x02\x02\x02' +
    '\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\x07\x1D\x02\x02\u01A3;\x03\x02' +
    '\x02\x02\u01A4\u01AB\x05\b\x05\x02\u01A5\u01AB\x05> \x02\u01A6\u01AB\x05' +
    ':\x1E\x02\u01A7\u01AB\x05@!\x02\u01A8\u01AB\x05B"\x02\u01A9\u01AB\x05' +
    'D#\x02\u01AA\u01A4\x03\x02\x02\x02\u01AA\u01A5\x03\x02\x02\x02\u01AA\u01A6' +
    '\x03\x02\x02\x02\u01AA\u01A7\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02' +
    '\u01AA\u01A9\x03\x02\x02\x02\u01AB=\x03\x02\x02\x02\u01AC\u01AE\x05.\x18' +
    '\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF' +
    '\x03\x02\x02\x02\u01AF\u01B0\x071\x02\x02\u01B0?\x03\x02\x02\x02\u01B1' +
    '\u01B2\x07\f\x02\x02\u01B2\u01B3\x07\x18\x02\x02\u01B3\u01B4\x05.\x18' +
    '\x02\u01B4\u01B5\x07\x19\x02\x02\u01B5\u01B8\x05<\x1F\x02\u01B6\u01B7' +
    '\x07\t\x02\x02\u01B7\u01B9\x05<\x1F\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8' +
    '\u01B9\x03\x02\x02\x02\u01B9A\x03\x02\x02\x02\u01BA\u01BB\x07\x17\x02' +
    '\x02\u01BB\u01BC\x07\x18\x02\x02\u01BC\u01BD\x05.\x18\x02\u01BD\u01BE' +
    '\x07\x19\x02\x02\u01BE\u01BF\x05<\x1F\x02\u01BF\u01D8\x03\x02\x02\x02' +
    '\u01C0\u01C1\x07\x07\x02\x02\u01C1\u01C2\x05<\x1F\x02\u01C2\u01C3\x07' +
    '\x17\x02\x02\u01C3\u01C4\x07\x18\x02\x02\u01C4\u01C5\x05.\x18\x02\u01C5' +
    '\u01C6\x07\x19\x02\x02\u01C6\u01C7\x071\x02\x02\u01C7\u01D8\x03\x02\x02' +
    '\x02\u01C8\u01C9\x07\v\x02\x02\u01C9\u01CB\x07\x18\x02\x02\u01CA\u01CC' +
    '\x05.\x18\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02' +
    '\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CF\x071\x02\x02\u01CE\u01D0\x05' +
    '.\x18\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0' +
    '\u01D1\x03\x02\x02\x02\u01D1\u01D3\x071\x02\x02\u01D2\u01D4\x05.\x18\x02' +
    '\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03' +
    '\x02\x02\x02\u01D5\u01D6\x07\x19\x02\x02\u01D6\u01D8\x05<\x1F\x02\u01D7' +
    '\u01BA\x03\x02\x02\x02\u01D7\u01C0\x03\x02\x02\x02\u01D7\u01C8\x03\x02' +
    '\x02\x02\u01D8C\x03\x02\x02\x02\u01D9\u01DA\x07\x06\x02\x02\u01DA\u01E3' +
    '\x071\x02\x02\u01DB\u01DC\x07\x03\x02\x02\u01DC\u01E3\x071\x02\x02\u01DD' +
    '\u01DF\x07\x0F\x02\x02\u01DE\u01E0\x05.\x18\x02\u01DF\u01DE\x03\x02\x02' +
    '\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E3' +
    '\x071\x02\x02\u01E2\u01D9\x03\x02\x02\x02\u01E2\u01DB\x03\x02\x02\x02' +
    '\u01E2\u01DD\x03\x02\x02\x02\u01E3E\x03\x02\x02\x02\u01E4\u01E5\x07\x13' +
    '\x02\x02\u01E5\u01F1\x07?\x02\x02\u01E6\u01E7\x07\x13\x02\x02\u01E7\u01E8' +
    '\x07?\x02\x02\u01E8\u01EA\x07\x1C\x02\x02\u01E9\u01EB\x05H%\x02\u01EA' +
    '\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01EA\x03\x02' +
    '\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE' +
    '\u01EF\x07\x1D\x02\x02\u01EF\u01F1\x03\x02\x02\x02\u01F0\u01E4\x03\x02' +
    '\x02\x02\u01F0\u01E6\x03\x02\x02\x02\u01F1G\x03\x02\x02\x02\u01F2\u01F4' +
    '\x05\x02\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02' +
    '\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03' +
    '\x02\x02\x02\u01F7\u01F8\x05\f\x07\x02\u01F8\u01F9\x071\x02\x02\u01F9' +
    'I\x03\x02\x02\x02?TY^cfor{\x81\x87\x8A\x8F\x92\x97\x9A\x9E\xA0\xA7\xB1' +
    '\xB9\xC2\xCC\xD7\xE3\xE5\xF7\xF9\u0105\u0107\u0116\u0118\u0120\u012E\u0131' +
    '\u0135\u013A\u0149\u0157\u0159\u0163\u016D\u0175\u0178\u017D\u0184\u018E' +
    '\u0194\u0197\u019F\u01AA\u01AD\u01B8\u01CB\u01CF\u01D3\u01D7\u01DF\u01E2' +
    '\u01EC\u01F0\u01F5'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!SourCParser.__ATN) {
      SourCParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(SourCParser._serializedATN)
      )
    }

    return SourCParser.__ATN
  }
}

export class TypeSpecifierContext extends ParserRuleContext {
  public Void(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Void, 0)
  }
  public Char(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Char, 0)
  }
  public Short(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Short, 0)
  }
  public Int(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Int, 0)
  }
  public Long(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Long, 0)
  }
  public Float(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Float, 0)
  }
  public Double(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Double, 0)
  }
  public Signed(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Signed, 0)
  }
  public Unsigned(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Unsigned, 0)
  }
  public structSpecifier(): StructSpecifierContext | undefined {
    return this.tryGetRuleContext(0, StructSpecifierContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_typeSpecifier
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterTypeSpecifier) {
      listener.enterTypeSpecifier(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitTypeSpecifier) {
      listener.exitTypeSpecifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitTypeSpecifier) {
      return visitor.visitTypeSpecifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TranslationUnitContext extends ParserRuleContext {
  public externalDeclaration(): ExternalDeclarationContext[]
  public externalDeclaration(i: number): ExternalDeclarationContext
  public externalDeclaration(
    i?: number
  ): ExternalDeclarationContext | ExternalDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExternalDeclarationContext)
    } else {
      return this.getRuleContext(i, ExternalDeclarationContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_translationUnit
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterTranslationUnit) {
      listener.enterTranslationUnit(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitTranslationUnit) {
      listener.exitTranslationUnit(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitTranslationUnit) {
      return visitor.visitTranslationUnit(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExternalDeclarationContext extends ParserRuleContext {
  public functionDefinition(): FunctionDefinitionContext | undefined {
    return this.tryGetRuleContext(0, FunctionDefinitionContext)
  }
  public declaration(): DeclarationContext | undefined {
    return this.tryGetRuleContext(0, DeclarationContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_externalDeclaration
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterExternalDeclaration) {
      listener.enterExternalDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitExternalDeclaration) {
      listener.exitExternalDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitExternalDeclaration) {
      return visitor.visitExternalDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends ParserRuleContext {
  public Semi(): TerminalNode {
    return this.getToken(SourCParser.Semi, 0)
  }
  public typeSpecifier(): TypeSpecifierContext[]
  public typeSpecifier(i: number): TypeSpecifierContext
  public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeSpecifierContext)
    } else {
      return this.getRuleContext(i, TypeSpecifierContext)
    }
  }
  public initDeclarator(): InitDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, InitDeclaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_declaration
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterDeclaration) {
      listener.enterDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitDeclaration) {
      listener.exitDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitDeclaration) {
      return visitor.visitDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitDeclaratorContext extends ParserRuleContext {
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Assign, 0)
  }
  public initializer(): InitializerContext | undefined {
    return this.tryGetRuleContext(0, InitializerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_initDeclarator
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterInitDeclarator) {
      listener.enterInitDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitInitDeclarator) {
      listener.exitInitDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitInitDeclarator) {
      return visitor.visitInitDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclaratorContext extends ParserRuleContext {
  public _var!: Token
  public _funcPointer!: Token
  public _array!: Token
  public _funcProto!: Token
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser.Identifier, 0)
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  public LeftParen(): TerminalNode[]
  public LeftParen(i: number): TerminalNode
  public LeftParen(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser.LeftParen)
    } else {
      return this.getToken(SourCParser.LeftParen, i)
    }
  }
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Star, 0)
  }
  public RightParen(): TerminalNode[]
  public RightParen(i: number): TerminalNode
  public RightParen(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser.RightParen)
    } else {
      return this.getToken(SourCParser.RightParen, i)
    }
  }
  public typeNameList(): TypeNameListContext | undefined {
    return this.tryGetRuleContext(0, TypeNameListContext)
  }
  public LeftBracket(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftBracket, 0)
  }
  public RightBracket(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightBracket, 0)
  }
  public constantExpression(): ConstantExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConstantExpressionContext)
  }
  public parameterList(): ParameterListContext | undefined {
    return this.tryGetRuleContext(0, ParameterListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_declarator
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterDeclarator) {
      listener.enterDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitDeclarator) {
      listener.exitDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitDeclarator) {
      return visitor.visitDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeNameListContext extends ParserRuleContext {
  public TypeName(): TerminalNode[]
  public TypeName(i: number): TerminalNode
  public TypeName(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser.TypeName)
    } else {
      return this.getToken(SourCParser.TypeName, i)
    }
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Comma, 0)
  }
  public typeNameList(): TypeNameListContext | undefined {
    return this.tryGetRuleContext(0, TypeNameListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_typeNameList
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterTypeNameList) {
      listener.enterTypeNameList(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitTypeNameList) {
      listener.exitTypeNameList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitTypeNameList) {
      return visitor.visitTypeNameList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext | undefined {
    return this.tryGetRuleContext(0, AssignmentExpressionContext)
  }
  public LeftBrace(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftBrace, 0)
  }
  public initializerList(): InitializerListContext | undefined {
    return this.tryGetRuleContext(0, InitializerListContext)
  }
  public RightBrace(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightBrace, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_initializer
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterInitializer) {
      listener.enterInitializer(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitInitializer) {
      listener.exitInitializer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitInitializer) {
      return visitor.visitInitializer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerListContext extends ParserRuleContext {
  public initializer(): InitializerContext {
    return this.getRuleContext(0, InitializerContext)
  }
  public initializerList(): InitializerListContext | undefined {
    return this.tryGetRuleContext(0, InitializerListContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_initializerList
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterInitializerList) {
      listener.enterInitializerList(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitInitializerList) {
      listener.exitInitializerList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitInitializerList) {
      return visitor.visitInitializerList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssignmentExpressionContext extends ParserRuleContext {
  public conditionalExpression(): ConditionalExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConditionalExpressionContext)
  }
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext)
  }
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Assign, 0)
  }
  public assignmentExpression(): AssignmentExpressionContext | undefined {
    return this.tryGetRuleContext(0, AssignmentExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_assignmentExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterAssignmentExpression) {
      listener.enterAssignmentExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitAssignmentExpression) {
      listener.exitAssignmentExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitAssignmentExpression) {
      return visitor.visitAssignmentExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConditionalExpressionContext extends ParserRuleContext {
  public _cons!: ConditionalExpressionContext
  public _alt!: ConditionalExpressionContext
  public logicalOrExpression(): LogicalOrExpressionContext {
    return this.getRuleContext(0, LogicalOrExpressionContext)
  }
  public Question(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Question, 0)
  }
  public Colon(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Colon, 0)
  }
  public conditionalExpression(): ConditionalExpressionContext[]
  public conditionalExpression(i: number): ConditionalExpressionContext
  public conditionalExpression(
    i?: number
  ): ConditionalExpressionContext | ConditionalExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ConditionalExpressionContext)
    } else {
      return this.getRuleContext(i, ConditionalExpressionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_conditionalExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterConditionalExpression) {
      listener.enterConditionalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitConditionalExpression) {
      listener.exitConditionalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitConditionalExpression) {
      return visitor.visitConditionalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LogicalOrExpressionContext extends ParserRuleContext {
  public logicalAndExpression(): LogicalAndExpressionContext {
    return this.getRuleContext(0, LogicalAndExpressionContext)
  }
  public logicalOrExpression(): LogicalOrExpressionContext | undefined {
    return this.tryGetRuleContext(0, LogicalOrExpressionContext)
  }
  public OrOr(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.OrOr, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_logicalOrExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterLogicalOrExpression) {
      listener.enterLogicalOrExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitLogicalOrExpression) {
      listener.exitLogicalOrExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitLogicalOrExpression) {
      return visitor.visitLogicalOrExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LogicalAndExpressionContext extends ParserRuleContext {
  public equalityExpression(): EqualityExpressionContext {
    return this.getRuleContext(0, EqualityExpressionContext)
  }
  public logicalAndExpression(): LogicalAndExpressionContext | undefined {
    return this.tryGetRuleContext(0, LogicalAndExpressionContext)
  }
  public AndAnd(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.AndAnd, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_logicalAndExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterLogicalAndExpression) {
      listener.enterLogicalAndExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitLogicalAndExpression) {
      listener.exitLogicalAndExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitLogicalAndExpression) {
      return visitor.visitLogicalAndExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EqualityExpressionContext extends ParserRuleContext {
  public relationalExpression(): RelationalExpressionContext {
    return this.getRuleContext(0, RelationalExpressionContext)
  }
  public equalityExpression(): EqualityExpressionContext | undefined {
    return this.tryGetRuleContext(0, EqualityExpressionContext)
  }
  public Equal(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Equal, 0)
  }
  public NotEqual(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.NotEqual, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_equalityExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterEqualityExpression) {
      listener.enterEqualityExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitEqualityExpression) {
      listener.exitEqualityExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitEqualityExpression) {
      return visitor.visitEqualityExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class RelationalExpressionContext extends ParserRuleContext {
  public additiveExpression(): AdditiveExpressionContext {
    return this.getRuleContext(0, AdditiveExpressionContext)
  }
  public relationalExpression(): RelationalExpressionContext | undefined {
    return this.tryGetRuleContext(0, RelationalExpressionContext)
  }
  public Less(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Less, 0)
  }
  public Greater(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Greater, 0)
  }
  public LessEqual(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LessEqual, 0)
  }
  public GreaterEqual(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.GreaterEqual, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_relationalExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterRelationalExpression) {
      listener.enterRelationalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitRelationalExpression) {
      listener.exitRelationalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitRelationalExpression) {
      return visitor.visitRelationalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AdditiveExpressionContext extends ParserRuleContext {
  public multiplicativeExpression(): MultiplicativeExpressionContext {
    return this.getRuleContext(0, MultiplicativeExpressionContext)
  }
  public additiveExpression(): AdditiveExpressionContext | undefined {
    return this.tryGetRuleContext(0, AdditiveExpressionContext)
  }
  public Plus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Plus, 0)
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Minus, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_additiveExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterAdditiveExpression) {
      listener.enterAdditiveExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitAdditiveExpression) {
      listener.exitAdditiveExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitAdditiveExpression) {
      return visitor.visitAdditiveExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class MultiplicativeExpressionContext extends ParserRuleContext {
  public castExpression(): CastExpressionContext {
    return this.getRuleContext(0, CastExpressionContext)
  }
  public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
    return this.tryGetRuleContext(0, MultiplicativeExpressionContext)
  }
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Star, 0)
  }
  public Div(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Div, 0)
  }
  public Mod(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Mod, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_multiplicativeExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterMultiplicativeExpression) {
      listener.enterMultiplicativeExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitMultiplicativeExpression) {
      listener.exitMultiplicativeExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitMultiplicativeExpression) {
      return visitor.visitMultiplicativeExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CastExpressionContext extends ParserRuleContext {
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftParen, 0)
  }
  public TypeName(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.TypeName, 0)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightParen, 0)
  }
  public castExpression(): CastExpressionContext | undefined {
    return this.tryGetRuleContext(0, CastExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_castExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterCastExpression) {
      listener.enterCastExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitCastExpression) {
      listener.exitCastExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitCastExpression) {
      return visitor.visitCastExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryExpressionContext extends ParserRuleContext {
  public postfixExpression(): PostfixExpressionContext | undefined {
    return this.tryGetRuleContext(0, PostfixExpressionContext)
  }
  public PlusPlus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.PlusPlus, 0)
  }
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext)
  }
  public MinusMinus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.MinusMinus, 0)
  }
  public UnaryOperator(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.UnaryOperator, 0)
  }
  public castExpression(): CastExpressionContext | undefined {
    return this.tryGetRuleContext(0, CastExpressionContext)
  }
  public Sizeof(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Sizeof, 0)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftParen, 0)
  }
  public sizeofOperands(): SizeofOperandsContext | undefined {
    return this.tryGetRuleContext(0, SizeofOperandsContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightParen, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_unaryExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterUnaryExpression) {
      listener.enterUnaryExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitUnaryExpression) {
      listener.exitUnaryExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitUnaryExpression) {
      return visitor.visitUnaryExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SizeofOperandsContext extends ParserRuleContext {
  public TypeName(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.TypeName, 0)
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Identifier, 0)
  }
  public And(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.And, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_sizeofOperands
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterSizeofOperands) {
      listener.enterSizeofOperands(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitSizeofOperands) {
      listener.exitSizeofOperands(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitSizeofOperands) {
      return visitor.visitSizeofOperands(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PostfixExpressionContext extends ParserRuleContext {
  public primaryExpression(): PrimaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, PrimaryExpressionContext)
  }
  public postfixExpression(): PostfixExpressionContext | undefined {
    return this.tryGetRuleContext(0, PostfixExpressionContext)
  }
  public LeftBracket(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftBracket, 0)
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public RightBracket(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightBracket, 0)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftParen, 0)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightParen, 0)
  }
  public Dot(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Dot, 0)
  }
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Identifier, 0)
  }
  public Arrow(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Arrow, 0)
  }
  public PlusPlus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.PlusPlus, 0)
  }
  public MinusMinus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.MinusMinus, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_postfixExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterPostfixExpression) {
      listener.enterPostfixExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitPostfixExpression) {
      listener.exitPostfixExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitPostfixExpression) {
      return visitor.visitPostfixExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PrimaryExpressionContext extends ParserRuleContext {
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Identifier, 0)
  }
  public Constant(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Constant, 0)
  }
  public StringLiteral(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.StringLiteral, 0)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftParen, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightParen, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_primaryExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterPrimaryExpression) {
      listener.enterPrimaryExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitPrimaryExpression) {
      listener.exitPrimaryExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitPrimaryExpression) {
      return visitor.visitPrimaryExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext {
    return this.getRuleContext(0, AssignmentExpressionContext)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConstantExpressionContext extends ParserRuleContext {
  public conditionalExpression(): ConditionalExpressionContext {
    return this.getRuleContext(0, ConditionalExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_constantExpression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterConstantExpression) {
      listener.enterConstantExpression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitConstantExpression) {
      listener.exitConstantExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitConstantExpression) {
      return visitor.visitConstantExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionDefinitionContext extends ParserRuleContext {
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser.Identifier, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser.LeftParen, 0)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser.RightParen, 0)
  }
  public compoundStatement(): CompoundStatementContext {
    return this.getRuleContext(0, CompoundStatementContext)
  }
  public typeSpecifier(): TypeSpecifierContext[]
  public typeSpecifier(i: number): TypeSpecifierContext
  public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeSpecifierContext)
    } else {
      return this.getRuleContext(i, TypeSpecifierContext)
    }
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  public parameterList(): ParameterListContext | undefined {
    return this.tryGetRuleContext(0, ParameterListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_functionDefinition
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterFunctionDefinition) {
      listener.enterFunctionDefinition(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitFunctionDefinition) {
      listener.exitFunctionDefinition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitFunctionDefinition) {
      return visitor.visitFunctionDefinition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PointerContext extends ParserRuleContext {
  public Star(): TerminalNode {
    return this.getToken(SourCParser.Star, 0)
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_pointer
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterPointer) {
      listener.enterPointer(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitPointer) {
      listener.exitPointer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitPointer) {
      return visitor.visitPointer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterListContext extends ParserRuleContext {
  public parameterDeclaration(): ParameterDeclarationContext {
    return this.getRuleContext(0, ParameterDeclarationContext)
  }
  public parameterList(): ParameterListContext | undefined {
    return this.tryGetRuleContext(0, ParameterListContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_parameterList
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterParameterList) {
      listener.enterParameterList(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitParameterList) {
      listener.exitParameterList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitParameterList) {
      return visitor.visitParameterList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterDeclarationContext extends ParserRuleContext {
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser.Identifier, 0)
  }
  public typeSpecifier(): TypeSpecifierContext[]
  public typeSpecifier(i: number): TypeSpecifierContext
  public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeSpecifierContext)
    } else {
      return this.getRuleContext(i, TypeSpecifierContext)
    }
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_parameterDeclaration
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterParameterDeclaration) {
      listener.enterParameterDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitParameterDeclaration) {
      listener.exitParameterDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitParameterDeclaration) {
      return visitor.visitParameterDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CompoundStatementContext extends ParserRuleContext {
  public LeftBrace(): TerminalNode {
    return this.getToken(SourCParser.LeftBrace, 0)
  }
  public RightBrace(): TerminalNode {
    return this.getToken(SourCParser.RightBrace, 0)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_compoundStatement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterCompoundStatement) {
      listener.enterCompoundStatement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitCompoundStatement) {
      listener.exitCompoundStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitCompoundStatement) {
      return visitor.visitCompoundStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public declaration(): DeclarationContext | undefined {
    return this.tryGetRuleContext(0, DeclarationContext)
  }
  public expressionStatement(): ExpressionStatementContext | undefined {
    return this.tryGetRuleContext(0, ExpressionStatementContext)
  }
  public compoundStatement(): CompoundStatementContext | undefined {
    return this.tryGetRuleContext(0, CompoundStatementContext)
  }
  public selectionStatement(): SelectionStatementContext | undefined {
    return this.tryGetRuleContext(0, SelectionStatementContext)
  }
  public iterationStatement(): IterationStatementContext | undefined {
    return this.tryGetRuleContext(0, IterationStatementContext)
  }
  public jumpStatement(): JumpStatementContext | undefined {
    return this.tryGetRuleContext(0, JumpStatementContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_statement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionStatementContext extends ParserRuleContext {
  public Semi(): TerminalNode {
    return this.getToken(SourCParser.Semi, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_expressionStatement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SelectionStatementContext extends ParserRuleContext {
  public _cons!: StatementContext
  public _alt!: StatementContext
  public If(): TerminalNode {
    return this.getToken(SourCParser.If, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser.LeftParen, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser.RightParen, 0)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  public Else(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Else, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_selectionStatement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterSelectionStatement) {
      listener.enterSelectionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitSelectionStatement) {
      listener.exitSelectionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitSelectionStatement) {
      return visitor.visitSelectionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IterationStatementContext extends ParserRuleContext {
  public _init!: ExpressionContext
  public _test!: ExpressionContext
  public _step!: ExpressionContext
  public While(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.While, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser.LeftParen, 0)
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser.RightParen, 0)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  public Do(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Do, 0)
  }
  public Semi(): TerminalNode[]
  public Semi(i: number): TerminalNode
  public Semi(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(SourCParser.Semi)
    } else {
      return this.getToken(SourCParser.Semi, i)
    }
  }
  public For(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.For, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_iterationStatement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterIterationStatement) {
      listener.enterIterationStatement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitIterationStatement) {
      listener.exitIterationStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitIterationStatement) {
      return visitor.visitIterationStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class JumpStatementContext extends ParserRuleContext {
  public Continue(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Continue, 0)
  }
  public Semi(): TerminalNode {
    return this.getToken(SourCParser.Semi, 0)
  }
  public Break(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Break, 0)
  }
  public Return(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Return, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_jumpStatement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterJumpStatement) {
      listener.enterJumpStatement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitJumpStatement) {
      listener.exitJumpStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitJumpStatement) {
      return visitor.visitJumpStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StructSpecifierContext extends ParserRuleContext {
  public Struct(): TerminalNode {
    return this.getToken(SourCParser.Struct, 0)
  }
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser.Identifier, 0)
  }
  public LeftBrace(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftBrace, 0)
  }
  public RightBrace(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightBrace, 0)
  }
  public structDeclaration(): StructDeclarationContext[]
  public structDeclaration(i: number): StructDeclarationContext
  public structDeclaration(i?: number): StructDeclarationContext | StructDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StructDeclarationContext)
    } else {
      return this.getRuleContext(i, StructDeclarationContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_structSpecifier
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterStructSpecifier) {
      listener.enterStructSpecifier(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitStructSpecifier) {
      listener.exitStructSpecifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitStructSpecifier) {
      return visitor.visitStructSpecifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StructDeclarationContext extends ParserRuleContext {
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  public Semi(): TerminalNode {
    return this.getToken(SourCParser.Semi, 0)
  }
  public typeSpecifier(): TypeSpecifierContext[]
  public typeSpecifier(i: number): TypeSpecifierContext
  public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeSpecifierContext)
    } else {
      return this.getRuleContext(i, TypeSpecifierContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_structDeclaration
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterStructDeclaration) {
      listener.enterStructDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitStructDeclaration) {
      listener.exitStructDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitStructDeclaration) {
      return visitor.visitStructDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
