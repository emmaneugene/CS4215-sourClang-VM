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
  public static readonly RULE_unaryOperator = 19
  public static readonly RULE_typeName = 20
  public static readonly RULE_sizeofOperands = 21
  public static readonly RULE_postfixExpression = 22
  public static readonly RULE_primaryExpression = 23
  public static readonly RULE_expression = 24
  public static readonly RULE_constantExpression = 25
  public static readonly RULE_functionDefinition = 26
  public static readonly RULE_pointer = 27
  public static readonly RULE_parameterList = 28
  public static readonly RULE_parameterDeclaration = 29
  public static readonly RULE_compoundStatement = 30
  public static readonly RULE_statement = 31
  public static readonly RULE_expressionStatement = 32
  public static readonly RULE_selectionStatement = 33
  public static readonly RULE_iterationStatement = 34
  public static readonly RULE_jumpStatement = 35
  public static readonly RULE_structSpecifier = 36
  public static readonly RULE_structDeclaration = 37
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
    'unaryOperator',
    'typeName',
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
      this.state = 86
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Void:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 76
            this.match(SourCParser.Void)
          }
          break
        case SourCParser.Char:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 77
            this.match(SourCParser.Char)
          }
          break
        case SourCParser.Short:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 78
            this.match(SourCParser.Short)
          }
          break
        case SourCParser.Int:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 79
            this.match(SourCParser.Int)
          }
          break
        case SourCParser.Long:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 80
            this.match(SourCParser.Long)
          }
          break
        case SourCParser.Float:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 81
            this.match(SourCParser.Float)
          }
          break
        case SourCParser.Double:
          this.enterOuterAlt(_localctx, 7)
          {
            this.state = 82
            this.match(SourCParser.Double)
          }
          break
        case SourCParser.Signed:
          this.enterOuterAlt(_localctx, 8)
          {
            this.state = 83
            this.match(SourCParser.Signed)
          }
          break
        case SourCParser.Unsigned:
          this.enterOuterAlt(_localctx, 9)
          {
            this.state = 84
            this.match(SourCParser.Unsigned)
          }
          break
        case SourCParser.Struct:
          this.enterOuterAlt(_localctx, 10)
          {
            this.state = 85
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
        this.state = 91
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
              this.state = 88
              this.externalDeclaration()
            }
          }
          this.state = 93
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
      this.state = 96
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 94
            this.functionDefinition()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 95
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
        this.state = 99
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 98
              this.typeSpecifier()
            }
          }
          this.state = 101
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
        this.state = 104
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          _la === SourCParser.LeftParen ||
          _la === SourCParser.Star ||
          _la === SourCParser.Identifier
        ) {
          {
            this.state = 103
            this.initDeclarator()
          }
        }

        this.state = 106
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
      this.state = 113
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 108
            this.declarator()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 109
            this.declarator()
            this.state = 110
            this.match(SourCParser.Assign)
            this.state = 111
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
      this.state = 141
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 115
            this.match(SourCParser.Identifier)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 117
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 116
                this.pointer()
              }
            }

            this.state = 119
            this.match(SourCParser.Identifier)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 120
            this.match(SourCParser.LeftParen)
            this.state = 121
            this.match(SourCParser.Star)
            this.state = 122
            this.match(SourCParser.Identifier)
            this.state = 123
            this.match(SourCParser.RightParen)
            this.state = 124
            this.match(SourCParser.LeftParen)
            this.state = 126
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
                  (1 << SourCParser.Short))) !==
                0
            ) {
              {
                this.state = 125
                this.typeNameList()
              }
            }

            this.state = 128
            this.match(SourCParser.RightParen)
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 129
            this.match(SourCParser.Identifier)
            this.state = 130
            this.match(SourCParser.LeftBracket)
            this.state = 132
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (SourCParser.Plus - 34)) |
                    (1 << (SourCParser.PlusPlus - 34)) |
                    (1 << (SourCParser.Minus - 34)) |
                    (1 << (SourCParser.MinusMinus - 34)) |
                    (1 << (SourCParser.Star - 34)) |
                    (1 << (SourCParser.And - 34)) |
                    (1 << (SourCParser.Not - 34)) |
                    (1 << (SourCParser.Identifier - 34)) |
                    (1 << (SourCParser.Constant - 34)) |
                    (1 << (SourCParser.StringLiteral - 34)))) !==
                  0)
            ) {
              {
                this.state = 131
                this.constantExpression()
              }
            }

            this.state = 134
            this.match(SourCParser.RightBracket)
          }
          break

        case 5:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 135
            this.match(SourCParser.Identifier)
            this.state = 136
            this.match(SourCParser.LeftParen)
            this.state = 138
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
                this.state = 137
                this.parameterList(0)
              }
            }

            this.state = 140
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
      this.state = 163
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 144
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 143
                  this.typeName()
                }
              }
              this.state = 146
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
                  (1 << SourCParser.Short))) !==
                0
            )
            this.state = 149
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 148
                this.pointer()
              }
            }
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 152
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 151
                  this.typeName()
                }
              }
              this.state = 154
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
                  (1 << SourCParser.Short))) !==
                0
            )
            this.state = 157
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 156
                this.pointer()
              }
            }

            this.state = 159
            this.match(SourCParser.Comma)
            this.state = 161
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
                  (1 << SourCParser.Short))) !==
                0
            ) {
              {
                this.state = 160
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
      this.state = 170
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Sizeof:
        case SourCParser.LeftParen:
        case SourCParser.Plus:
        case SourCParser.PlusPlus:
        case SourCParser.Minus:
        case SourCParser.MinusMinus:
        case SourCParser.Star:
        case SourCParser.And:
        case SourCParser.Not:
        case SourCParser.Identifier:
        case SourCParser.Constant:
        case SourCParser.StringLiteral:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 165
            this.assignmentExpression()
          }
          break
        case SourCParser.LeftBrace:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 166
            this.match(SourCParser.LeftBrace)
            this.state = 167
            this.initializerList(0)
            this.state = 168
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
          this.state = 173
          this.initializer()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 180
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
                this.state = 175
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 176
                this.match(SourCParser.Comma)
                this.state = 177
                this.initializer()
              }
            }
          }
          this.state = 182
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
      this.state = 188
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 183
            this.conditionalExpression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 184
            this.unaryExpression()
            this.state = 185
            this.match(SourCParser.Assign)
            this.state = 186
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
      this.state = 197
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 190
            this.logicalOrExpression(0)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 191
            this.logicalOrExpression(0)
            this.state = 192
            this.match(SourCParser.Question)
            this.state = 193
            this.conditionalExpression()
            this.state = 194
            this.match(SourCParser.Colon)
            this.state = 195
            this.conditionalExpression()
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
          this.state = 200
          this.logicalAndExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 207
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
                this.state = 202
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 203
                this.match(SourCParser.OrOr)
                this.state = 204
                this.logicalAndExpression(0)
              }
            }
          }
          this.state = 209
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
          this.state = 211
          this.equalityExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 218
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
                this.state = 213
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 214
                this.match(SourCParser.AndAnd)
                this.state = 215
                this.equalityExpression(0)
              }
            }
          }
          this.state = 220
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
          this.state = 222
          this.relationalExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 232
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 230
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
                    this.state = 224
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 225
                    this.match(SourCParser.Equal)
                    this.state = 226
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
                    this.state = 227
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 228
                    this.match(SourCParser.NotEqual)
                    this.state = 229
                    this.relationalExpression(0)
                  }
                  break
              }
            }
          }
          this.state = 234
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
          this.state = 236
          this.additiveExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 252
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 250
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
                    this.state = 238
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 239
                    this.match(SourCParser.Less)
                    this.state = 240
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
                    this.state = 241
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 242
                    this.match(SourCParser.Greater)
                    this.state = 243
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
                    this.state = 244
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 245
                    this.match(SourCParser.LessEqual)
                    this.state = 246
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
                    this.state = 247
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 248
                    this.match(SourCParser.GreaterEqual)
                    this.state = 249
                    this.additiveExpression(0)
                  }
                  break
              }
            }
          }
          this.state = 254
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
          this.state = 256
          this.multiplicativeExpression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 266
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 264
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
                    this.state = 258
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 259
                    this.match(SourCParser.Plus)
                    this.state = 260
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
                    this.state = 261
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 262
                    this.match(SourCParser.Minus)
                    this.state = 263
                    this.multiplicativeExpression(0)
                  }
                  break
              }
            }
          }
          this.state = 268
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
          this.state = 270
          this.castExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 283
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 281
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
                    this.state = 272
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 273
                    this.match(SourCParser.Star)
                    this.state = 274
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
                    this.state = 275
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 276
                    this.match(SourCParser.Div)
                    this.state = 277
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
                    this.state = 278
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 279
                    this.match(SourCParser.Mod)
                    this.state = 280
                    this.castExpression()
                  }
                  break
              }
            }
          }
          this.state = 285
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
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 286
        this.unaryExpression()
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
      this.state = 301
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
        case SourCParser.Plus:
        case SourCParser.Minus:
        case SourCParser.Star:
        case SourCParser.And:
        case SourCParser.Not:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 293
            this.unaryOperator()
            this.state = 294
            this.castExpression()
          }
          break
        case SourCParser.Sizeof:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 296
            this.match(SourCParser.Sizeof)
            this.state = 297
            this.match(SourCParser.LeftParen)
            this.state = 298
            this.sizeofOperands()
            this.state = 299
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
  public unaryOperator(): UnaryOperatorContext {
    const _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state)
    this.enterRule(_localctx, 38, SourCParser.RULE_unaryOperator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 303
        _la = this._input.LA(1)
        if (
          !(
            ((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (SourCParser.Plus - 34)) |
                (1 << (SourCParser.Minus - 34)) |
                (1 << (SourCParser.Star - 34)) |
                (1 << (SourCParser.And - 34)) |
                (1 << (SourCParser.Not - 34)))) !==
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
  public typeName(): TypeNameContext {
    const _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state)
    this.enterRule(_localctx, 40, SourCParser.RULE_typeName)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 305
        _la = this._input.LA(1)
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << SourCParser.Char) |
                (1 << SourCParser.Double) |
                (1 << SourCParser.Float) |
                (1 << SourCParser.Int) |
                (1 << SourCParser.Long) |
                (1 << SourCParser.Short))) !==
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
  public sizeofOperands(): SizeofOperandsContext {
    const _localctx: SizeofOperandsContext = new SizeofOperandsContext(this._ctx, this.state)
    this.enterRule(_localctx, 42, SourCParser.RULE_sizeofOperands)
    let _la: number
    try {
      this.state = 317
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 308
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 307
                this.pointer()
              }
            }

            this.state = 310
            this.typeName()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 312
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 311
                this.pointer()
              }
            }

            this.state = 314
            this.match(SourCParser.Identifier)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 315
            this.match(SourCParser.And)
            this.state = 316
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
    const _startState: number = 44
    this.enterRecursionRule(_localctx, 44, SourCParser.RULE_postfixExpression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 320
          this.primaryExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 348
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 346
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                  {
                    _localctx = new PostfixExpressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfixExpression
                    )
                    this.state = 322
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 323
                    this.match(SourCParser.LeftBracket)
                    this.state = 324
                    this.expression(0)
                    this.state = 325
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
                    this.state = 327
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 328
                    this.match(SourCParser.LeftParen)
                    this.state = 332
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    while (
                      _la === SourCParser.Sizeof ||
                      _la === SourCParser.LeftParen ||
                      (((_la - 34) & ~0x1f) === 0 &&
                        ((1 << (_la - 34)) &
                          ((1 << (SourCParser.Plus - 34)) |
                            (1 << (SourCParser.PlusPlus - 34)) |
                            (1 << (SourCParser.Minus - 34)) |
                            (1 << (SourCParser.MinusMinus - 34)) |
                            (1 << (SourCParser.Star - 34)) |
                            (1 << (SourCParser.And - 34)) |
                            (1 << (SourCParser.Not - 34)) |
                            (1 << (SourCParser.Identifier - 34)) |
                            (1 << (SourCParser.Constant - 34)) |
                            (1 << (SourCParser.StringLiteral - 34)))) !==
                          0)
                    ) {
                      {
                        {
                          this.state = 329
                          this.expression(0)
                        }
                      }
                      this.state = 334
                      this._errHandler.sync(this)
                      _la = this._input.LA(1)
                    }
                    this.state = 335
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
                    this.state = 336
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 337
                    this.match(SourCParser.Dot)
                    this.state = 338
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
                    this.state = 339
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 340
                    this.match(SourCParser.Arrow)
                    this.state = 341
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
                    this.state = 342
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 343
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
                    this.state = 344
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 345
                    this.match(SourCParser.MinusMinus)
                  }
                  break
              }
            }
          }
          this.state = 350
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx)
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
    this.enterRule(_localctx, 46, SourCParser.RULE_primaryExpression)
    try {
      this.state = 358
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Identifier:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 351
            this.match(SourCParser.Identifier)
          }
          break
        case SourCParser.Constant:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 352
            this.match(SourCParser.Constant)
          }
          break
        case SourCParser.StringLiteral:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 353
            this.match(SourCParser.StringLiteral)
          }
          break
        case SourCParser.LeftParen:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 354
            this.match(SourCParser.LeftParen)
            this.state = 355
            this.expression(0)
            this.state = 356
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
    const _startState: number = 48
    this.enterRecursionRule(_localctx, 48, SourCParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 361
          this.assignmentExpression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 368
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx)
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
                this.state = 363
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 364
                this.match(SourCParser.Comma)
                this.state = 365
                this.assignmentExpression()
              }
            }
          }
          this.state = 370
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx)
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
    this.enterRule(_localctx, 50, SourCParser.RULE_constantExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 371
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
    this.enterRule(_localctx, 52, SourCParser.RULE_functionDefinition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 374
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 373
              this.typeSpecifier()
            }
          }
          this.state = 376
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
        this.state = 379
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === SourCParser.Star) {
          {
            this.state = 378
            this.pointer()
          }
        }

        this.state = 381
        this.match(SourCParser.Identifier)
        this.state = 382
        this.match(SourCParser.LeftParen)
        this.state = 386
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
              this.state = 383
              this.parameterList(0)
            }
          }
          this.state = 388
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 389
        this.match(SourCParser.RightParen)
        this.state = 390
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
    this.enterRule(_localctx, 54, SourCParser.RULE_pointer)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 392
        this.match(SourCParser.Star)
        this.state = 394
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === SourCParser.Star) {
          {
            this.state = 393
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
    const _startState: number = 56
    this.enterRecursionRule(_localctx, 56, SourCParser.RULE_parameterList, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 397
          this.parameterDeclaration()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 404
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx)
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
                this.state = 399
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 400
                this.match(SourCParser.Comma)
                this.state = 401
                this.parameterDeclaration()
              }
            }
          }
          this.state = 406
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx)
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
    this.enterRule(_localctx, 58, SourCParser.RULE_parameterDeclaration)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 408
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 407
              this.typeSpecifier()
            }
          }
          this.state = 410
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
        this.state = 413
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === SourCParser.Star) {
          {
            this.state = 412
            this.pointer()
          }
        }

        this.state = 415
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
    this.enterRule(_localctx, 60, SourCParser.RULE_compoundStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 417
        this.match(SourCParser.LeftBrace)
        this.state = 421
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
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (SourCParser.Plus - 34)) |
                (1 << (SourCParser.PlusPlus - 34)) |
                (1 << (SourCParser.Minus - 34)) |
                (1 << (SourCParser.MinusMinus - 34)) |
                (1 << (SourCParser.Star - 34)) |
                (1 << (SourCParser.And - 34)) |
                (1 << (SourCParser.Not - 34)) |
                (1 << (SourCParser.Semi - 34)) |
                (1 << (SourCParser.Identifier - 34)) |
                (1 << (SourCParser.Constant - 34)) |
                (1 << (SourCParser.StringLiteral - 34)))) !==
              0)
        ) {
          {
            {
              this.state = 418
              this.statement()
            }
          }
          this.state = 423
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 424
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
    this.enterRule(_localctx, 62, SourCParser.RULE_statement)
    try {
      this.state = 432
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
            this.state = 426
            this.declaration()
          }
          break
        case SourCParser.Sizeof:
        case SourCParser.LeftParen:
        case SourCParser.Plus:
        case SourCParser.PlusPlus:
        case SourCParser.Minus:
        case SourCParser.MinusMinus:
        case SourCParser.Star:
        case SourCParser.And:
        case SourCParser.Not:
        case SourCParser.Semi:
        case SourCParser.Identifier:
        case SourCParser.Constant:
        case SourCParser.StringLiteral:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 427
            this.expressionStatement()
          }
          break
        case SourCParser.LeftBrace:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 428
            this.compoundStatement()
          }
          break
        case SourCParser.If:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 429
            this.selectionStatement()
          }
          break
        case SourCParser.Do:
        case SourCParser.For:
        case SourCParser.While:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 430
            this.iterationStatement()
          }
          break
        case SourCParser.Break:
        case SourCParser.Continue:
        case SourCParser.Return:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 431
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
    this.enterRule(_localctx, 64, SourCParser.RULE_expressionStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 435
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          _la === SourCParser.Sizeof ||
          _la === SourCParser.LeftParen ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (SourCParser.Plus - 34)) |
                (1 << (SourCParser.PlusPlus - 34)) |
                (1 << (SourCParser.Minus - 34)) |
                (1 << (SourCParser.MinusMinus - 34)) |
                (1 << (SourCParser.Star - 34)) |
                (1 << (SourCParser.And - 34)) |
                (1 << (SourCParser.Not - 34)) |
                (1 << (SourCParser.Identifier - 34)) |
                (1 << (SourCParser.Constant - 34)) |
                (1 << (SourCParser.StringLiteral - 34)))) !==
              0)
        ) {
          {
            this.state = 434
            this.expression(0)
          }
        }

        this.state = 437
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
    this.enterRule(_localctx, 66, SourCParser.RULE_selectionStatement)
    try {
      this.state = 453
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 439
            this.match(SourCParser.If)
            this.state = 440
            this.match(SourCParser.LeftParen)
            this.state = 441
            this.expression(0)
            this.state = 442
            this.match(SourCParser.RightParen)
            this.state = 443
            this.statement()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 445
            this.match(SourCParser.If)
            this.state = 446
            this.match(SourCParser.LeftParen)
            this.state = 447
            this.expression(0)
            this.state = 448
            this.match(SourCParser.RightParen)
            this.state = 449
            this.statement()
            this.state = 450
            this.match(SourCParser.Else)
            this.state = 451
            this.statement()
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
  public iterationStatement(): IterationStatementContext {
    const _localctx: IterationStatementContext = new IterationStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 68, SourCParser.RULE_iterationStatement)
    let _la: number
    try {
      this.state = 484
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.While:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 455
            this.match(SourCParser.While)
            this.state = 456
            this.match(SourCParser.LeftParen)
            this.state = 457
            this.expression(0)
            this.state = 458
            this.match(SourCParser.RightParen)
            this.state = 459
            this.statement()
          }
          break
        case SourCParser.Do:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 461
            this.match(SourCParser.Do)
            this.state = 462
            this.statement()
            this.state = 463
            this.match(SourCParser.While)
            this.state = 464
            this.match(SourCParser.LeftParen)
            this.state = 465
            this.expression(0)
            this.state = 466
            this.match(SourCParser.RightParen)
            this.state = 467
            this.match(SourCParser.Semi)
          }
          break
        case SourCParser.For:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 469
            this.match(SourCParser.For)
            this.state = 470
            this.match(SourCParser.LeftParen)
            this.state = 472
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (SourCParser.Plus - 34)) |
                    (1 << (SourCParser.PlusPlus - 34)) |
                    (1 << (SourCParser.Minus - 34)) |
                    (1 << (SourCParser.MinusMinus - 34)) |
                    (1 << (SourCParser.Star - 34)) |
                    (1 << (SourCParser.And - 34)) |
                    (1 << (SourCParser.Not - 34)) |
                    (1 << (SourCParser.Identifier - 34)) |
                    (1 << (SourCParser.Constant - 34)) |
                    (1 << (SourCParser.StringLiteral - 34)))) !==
                  0)
            ) {
              {
                this.state = 471
                this.expression(0)
              }
            }

            this.state = 474
            this.match(SourCParser.Semi)
            this.state = 476
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (SourCParser.Plus - 34)) |
                    (1 << (SourCParser.PlusPlus - 34)) |
                    (1 << (SourCParser.Minus - 34)) |
                    (1 << (SourCParser.MinusMinus - 34)) |
                    (1 << (SourCParser.Star - 34)) |
                    (1 << (SourCParser.And - 34)) |
                    (1 << (SourCParser.Not - 34)) |
                    (1 << (SourCParser.Identifier - 34)) |
                    (1 << (SourCParser.Constant - 34)) |
                    (1 << (SourCParser.StringLiteral - 34)))) !==
                  0)
            ) {
              {
                this.state = 475
                this.expression(0)
              }
            }

            this.state = 478
            this.match(SourCParser.Semi)
            this.state = 480
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (SourCParser.Plus - 34)) |
                    (1 << (SourCParser.PlusPlus - 34)) |
                    (1 << (SourCParser.Minus - 34)) |
                    (1 << (SourCParser.MinusMinus - 34)) |
                    (1 << (SourCParser.Star - 34)) |
                    (1 << (SourCParser.And - 34)) |
                    (1 << (SourCParser.Not - 34)) |
                    (1 << (SourCParser.Identifier - 34)) |
                    (1 << (SourCParser.Constant - 34)) |
                    (1 << (SourCParser.StringLiteral - 34)))) !==
                  0)
            ) {
              {
                this.state = 479
                this.expression(0)
              }
            }

            this.state = 482
            this.match(SourCParser.RightParen)
            this.state = 483
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
    this.enterRule(_localctx, 70, SourCParser.RULE_jumpStatement)
    let _la: number
    try {
      this.state = 495
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Continue:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 486
            this.match(SourCParser.Continue)
            this.state = 487
            this.match(SourCParser.Semi)
          }
          break
        case SourCParser.Break:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 488
            this.match(SourCParser.Break)
            this.state = 489
            this.match(SourCParser.Semi)
          }
          break
        case SourCParser.Return:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 490
            this.match(SourCParser.Return)
            this.state = 492
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === SourCParser.Sizeof ||
              _la === SourCParser.LeftParen ||
              (((_la - 34) & ~0x1f) === 0 &&
                ((1 << (_la - 34)) &
                  ((1 << (SourCParser.Plus - 34)) |
                    (1 << (SourCParser.PlusPlus - 34)) |
                    (1 << (SourCParser.Minus - 34)) |
                    (1 << (SourCParser.MinusMinus - 34)) |
                    (1 << (SourCParser.Star - 34)) |
                    (1 << (SourCParser.And - 34)) |
                    (1 << (SourCParser.Not - 34)) |
                    (1 << (SourCParser.Identifier - 34)) |
                    (1 << (SourCParser.Constant - 34)) |
                    (1 << (SourCParser.StringLiteral - 34)))) !==
                  0)
            ) {
              {
                this.state = 491
                this.expression(0)
              }
            }

            this.state = 494
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
    this.enterRule(_localctx, 72, SourCParser.RULE_structSpecifier)
    let _la: number
    try {
      this.state = 509
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 497
            this.match(SourCParser.Struct)
            this.state = 498
            this.match(SourCParser.Identifier)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 499
            this.match(SourCParser.Struct)
            this.state = 500
            this.match(SourCParser.Identifier)
            this.state = 501
            this.match(SourCParser.LeftBrace)
            this.state = 503
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 502
                  this.structDeclaration()
                }
              }
              this.state = 505
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
            this.state = 507
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
    this.enterRule(_localctx, 74, SourCParser.RULE_structDeclaration)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 512
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 511
              this.typeSpecifier()
            }
          }
          this.state = 514
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
        this.state = 516
        this.declarator()
        this.state = 517
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

      case 22:
        return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex)

      case 24:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)

      case 28:
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03J\u020A\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x03\x02\x03\x02\x03\x02\x03\x02" +
    '\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02Y\n\x02\x03\x03' +
    '\x07\x03\\\n\x03\f\x03\x0E\x03_\v\x03\x03\x04\x03\x04\x05\x04c\n\x04\x03' +
    '\x05\x06\x05f\n\x05\r\x05\x0E\x05g\x03\x05\x05\x05k\n\x05\x03\x05\x03' +
    '\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06t\n\x06\x03\x07\x03' +
    '\x07\x05\x07x\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03' +
    '\x07\x05\x07\x81\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x87\n\x07' +
    '\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x8D\n\x07\x03\x07\x05\x07\x90' +
    '\n\x07\x03\b\x06\b\x93\n\b\r\b\x0E\b\x94\x03\b\x05\b\x98\n\b\x03\b\x06' +
    '\b\x9B\n\b\r\b\x0E\b\x9C\x03\b\x05\b\xA0\n\b\x03\b\x03\b\x05\b\xA4\n\b' +
    '\x05\b\xA6\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xAD\n\t\x03\n\x03\n' +
    '\x03\n\x03\n\x03\n\x03\n\x07\n\xB5\n\n\f\n\x0E\n\xB8\v\n\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x05\v\xBF\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f' +
    '\x05\f\xC8\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xD0\n\r\f\r\x0E' +
    '\r\xD3\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xDB' +
    '\n\x0E\f\x0E\x0E\x0E\xDE\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xE9\n\x0F\f\x0F\x0E\x0F\xEC\v' +
    '\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03' +
    '\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xFD\n\x10' +
    '\f\x10\x0E\x10\u0100\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03' +
    '\x11\x03\x11\x03\x11\x03\x11\x07\x11\u010B\n\x11\f\x11\x0E\x11\u010E\v' +
    '\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03' +
    '\x12\x03\x12\x03\x12\x03\x12\x07\x12\u011C\n\x12\f\x12\x0E\x12\u011F\v' +
    '\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0130\n\x14' +
    '\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x05\x17\u0137\n\x17\x03\x17\x03' +
    '\x17\x05\x17\u013B\n\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0140\n\x17\x03' +
    '\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03' +
    '\x18\x03\x18\x07\x18\u014D\n\x18\f\x18\x0E\x18\u0150\v\x18\x03\x18\x03' +
    '\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03' +
    '\x18\x07\x18\u015D\n\x18\f\x18\x0E\x18\u0160\v\x18\x03\x19\x03\x19\x03' +
    '\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0169\n\x19\x03\x1A\x03\x1A' +
    '\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0171\n\x1A\f\x1A\x0E\x1A\u0174' +
    '\v\x1A\x03\x1B\x03\x1B\x03\x1C\x06\x1C\u0179\n\x1C\r\x1C\x0E\x1C\u017A' +
    '\x03\x1C\x05\x1C\u017E\n\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0183\n\x1C' +
    '\f\x1C\x0E\x1C\u0186\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x05' +
    '\x1D\u018D\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E' +
    '\u0195\n\x1E\f\x1E\x0E\x1E\u0198\v\x1E\x03\x1F\x06\x1F\u019B\n\x1F\r\x1F' +
    '\x0E\x1F\u019C\x03\x1F\x05\x1F\u01A0\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x07' +
    ' \u01A6\n \f \x0E \u01A9\v \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x05' +
    '!\u01B3\n!\x03"\x05"\u01B6\n"\x03"\x03"\x03#\x03#\x03#\x03#\x03#' +
    '\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01C8\n#\x03$\x03$' +
    '\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03' +
    '$\x03$\x05$\u01DB\n$\x03$\x03$\x05$\u01DF\n$\x03$\x03$\x05$\u01E3\n$\x03' +
    '$\x03$\x05$\u01E7\n$\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u01EF\n%\x03%' +
    '\x05%\u01F2\n%\x03&\x03&\x03&\x03&\x03&\x03&\x06&\u01FA\n&\r&\x0E&\u01FB' +
    "\x03&\x03&\x05&\u0200\n&\x03'\x06'\u0203\n'\r'\x0E'\u0204\x03'\x03" +
    "'\x03'\x03'\x02\x02\f\x12\x18\x1A\x1C\x1E \".2:(\x02\x02\x04\x02\x06" +
    '\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02' +
    '\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02' +
    '2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02' +
    '\x02\x04\x07\x02$$&&((++..\x07\x02\x04\x04\b\b\n\n\r\x0E\x10\x10\x02\u023D' +
    '\x02X\x03\x02\x02\x02\x04]\x03\x02\x02\x02\x06b\x03\x02\x02\x02\be\x03' +
    '\x02\x02\x02\ns\x03\x02\x02\x02\f\x8F\x03\x02\x02\x02\x0E\xA5\x03\x02' +
    '\x02\x02\x10\xAC\x03\x02\x02\x02\x12\xAE\x03\x02\x02\x02\x14\xBE\x03\x02' +
    '\x02\x02\x16\xC7\x03\x02\x02\x02\x18\xC9\x03\x02\x02\x02\x1A\xD4\x03\x02' +
    '\x02\x02\x1C\xDF\x03\x02\x02\x02\x1E\xED\x03\x02\x02\x02 \u0101\x03\x02' +
    '\x02\x02"\u010F\x03\x02\x02\x02$\u0120\x03\x02\x02\x02&\u012F\x03\x02' +
    '\x02\x02(\u0131\x03\x02\x02\x02*\u0133\x03\x02\x02\x02,\u013F\x03\x02' +
    '\x02\x02.\u0141\x03\x02\x02\x020\u0168\x03\x02\x02\x022\u016A\x03\x02' +
    '\x02\x024\u0175\x03\x02\x02\x026\u0178\x03\x02\x02\x028\u018A\x03\x02' +
    '\x02\x02:\u018E\x03\x02\x02\x02<\u019A\x03\x02\x02\x02>\u01A3\x03\x02' +
    '\x02\x02@\u01B2\x03\x02\x02\x02B\u01B5\x03\x02\x02\x02D\u01C7\x03\x02' +
    '\x02\x02F\u01E6\x03\x02\x02\x02H\u01F1\x03\x02\x02\x02J\u01FF\x03\x02' +
    '\x02\x02L\u0202\x03\x02\x02\x02NY\x07\x16\x02\x02OY\x07\x04\x02\x02PY' +
    '\x07\x10\x02\x02QY\x07\r\x02\x02RY\x07\x0E\x02\x02SY\x07\n\x02\x02TY\x07' +
    '\b\x02\x02UY\x07\x11\x02\x02VY\x07\x15\x02\x02WY\x05J&\x02XN\x03\x02\x02' +
    '\x02XO\x03\x02\x02\x02XP\x03\x02\x02\x02XQ\x03\x02\x02\x02XR\x03\x02\x02' +
    '\x02XS\x03\x02\x02\x02XT\x03\x02\x02\x02XU\x03\x02\x02\x02XV\x03\x02\x02' +
    '\x02XW\x03\x02\x02\x02Y\x03\x03\x02\x02\x02Z\\\x05\x06\x04\x02[Z\x03\x02' +
    '\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^\x05\x03' +
    '\x02\x02\x02_]\x03\x02\x02\x02`c\x056\x1C\x02ac\x05\b\x05\x02b`\x03\x02' +
    '\x02\x02ba\x03\x02\x02\x02c\x07\x03\x02\x02\x02df\x05\x02\x02\x02ed\x03' +
    '\x02\x02\x02fg\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02hj\x03' +
    '\x02\x02\x02ik\x05\n\x06\x02ji\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03' +
    '\x02\x02\x02lm\x071\x02\x02m\t\x03\x02\x02\x02nt\x05\f\x07\x02op\x05\f' +
    '\x07\x02pq\x073\x02\x02qr\x05\x10\t\x02rt\x03\x02\x02\x02sn\x03\x02\x02' +
    '\x02so\x03\x02\x02\x02t\v\x03\x02\x02\x02u\x90\x07=\x02\x02vx\x058\x1D' +
    '\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02y\x90\x07=\x02' +
    '\x02z{\x07\x18\x02\x02{|\x07(\x02\x02|}\x07=\x02\x02}~\x07\x19\x02\x02' +
    '~\x80\x07\x18\x02\x02\x7F\x81\x05\x0E\b\x02\x80\x7F\x03\x02\x02\x02\x80' +
    '\x81\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x90\x07\x19\x02\x02\x83' +
    '\x84\x07=\x02\x02\x84\x86\x07\x1A\x02\x02\x85\x87\x054\x1B\x02\x86\x85' +
    '\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x90' +
    '\x07\x1B\x02\x02\x89\x8A\x07=\x02\x02\x8A\x8C\x07\x18\x02\x02\x8B\x8D' +
    '\x05:\x1E\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E' +
    '\x03\x02\x02\x02\x8E\x90\x07\x19\x02\x02\x8Fu\x03\x02\x02\x02\x8Fw\x03' +
    '\x02\x02\x02\x8Fz\x03\x02\x02\x02\x8F\x83\x03\x02\x02\x02\x8F\x89\x03' +
    '\x02\x02\x02\x90\r\x03\x02\x02\x02\x91\x93\x05*\x16\x02\x92\x91\x03\x02' +
    '\x02\x02\x93\x94\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02' +
    '\x02\x02\x95\x97\x03\x02\x02\x02\x96\x98\x058\x1D\x02\x97\x96\x03\x02' +
    '\x02\x02\x97\x98\x03\x02\x02\x02\x98\xA6\x03\x02\x02\x02\x99\x9B\x05*' +
    '\x16\x02\x9A\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9A\x03\x02' +
    '\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\xA0\x058' +
    '\x1D\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02' +
    '\x02\x02\xA1\xA3\x072\x02\x02\xA2\xA4\x05\x0E\b\x02\xA3\xA2\x03\x02\x02' +
    '\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5\x92\x03\x02\x02' +
    '\x02\xA5\x9A\x03\x02\x02\x02\xA6\x0F\x03\x02\x02\x02\xA7\xAD\x05\x14\v' +
    '\x02\xA8\xA9\x07\x1C\x02\x02\xA9\xAA\x05\x12\n\x02\xAA\xAB\x07\x1D\x02' +
    '\x02\xAB\xAD\x03\x02\x02\x02\xAC\xA7\x03\x02\x02\x02\xAC\xA8\x03\x02\x02' +
    '\x02\xAD\x11\x03\x02\x02\x02\xAE\xAF\b\n\x01\x02\xAF\xB0\x05\x10\t\x02' +
    '\xB0\xB6\x03\x02\x02\x02\xB1\xB2\f\x03\x02\x02\xB2\xB3\x072\x02\x02\xB3' +
    '\xB5\x05\x10\t\x02\xB4\xB1\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6' +
    '\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\x13\x03\x02\x02\x02\xB8' +
    '\xB6\x03\x02\x02\x02\xB9\xBF\x05\x16\f\x02\xBA\xBB\x05&\x14\x02\xBB\xBC' +
    '\x073\x02\x02\xBC\xBD\x05\x14\v\x02\xBD\xBF\x03\x02\x02\x02\xBE\xB9\x03' +
    '\x02\x02\x02\xBE\xBA\x03\x02\x02\x02\xBF\x15\x03\x02\x02\x02\xC0\xC8\x05' +
    '\x18\r\x02\xC1\xC2\x05\x18\r\x02\xC2\xC3\x07/\x02\x02\xC3\xC4\x05\x16' +
    '\f\x02\xC4\xC5\x070\x02\x02\xC5\xC6\x05\x16\f\x02\xC6\xC8\x03\x02\x02' +
    '\x02\xC7\xC0\x03\x02\x02\x02\xC7\xC1\x03\x02\x02\x02\xC8\x17\x03\x02\x02' +
    '\x02\xC9\xCA\b\r\x01\x02\xCA\xCB\x05\x1A\x0E\x02\xCB\xD1\x03\x02\x02\x02' +
    '\xCC\xCD\f\x03\x02\x02\xCD\xCE\x07-\x02\x02\xCE\xD0\x05\x1A\x0E\x02\xCF' +
    '\xCC\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1' +
    '\xD2\x03\x02\x02\x02\xD2\x19\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4' +
    '\xD5\b\x0E\x01\x02\xD5\xD6\x05\x1C\x0F\x02\xD6\xDC\x03\x02\x02\x02\xD7' +
    '\xD8\f\x03\x02\x02\xD8\xD9\x07,\x02\x02\xD9\xDB\x05\x1C\x0F\x02\xDA\xD7' +
    '\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD' +
    '\x03\x02\x02\x02\xDD\x1B\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0' +
    '\b\x0F\x01\x02\xE0\xE1\x05\x1E\x10\x02\xE1\xEA\x03\x02\x02\x02\xE2\xE3' +
    '\f\x04\x02\x02\xE3\xE4\x079\x02\x02\xE4\xE9\x05\x1E\x10\x02\xE5\xE6\f' +
    '\x03\x02\x02\xE6\xE7\x07:\x02\x02\xE7\xE9\x05\x1E\x10\x02\xE8\xE2\x03' +
    '\x02\x02\x02\xE8\xE5\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03' +
    '\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\x1D\x03\x02\x02\x02\xEC\xEA\x03' +
    '\x02\x02\x02\xED\xEE\b\x10\x01\x02\xEE\xEF\x05 \x11\x02\xEF\xFE\x03\x02' +
    '\x02\x02\xF0\xF1\f\x06\x02\x02\xF1\xF2\x07\x1E\x02\x02\xF2\xFD\x05 \x11' +
    '\x02\xF3\xF4\f\x05\x02\x02\xF4\xF5\x07 \x02\x02\xF5\xFD\x05 \x11\x02\xF6' +
    '\xF7\f\x04\x02\x02\xF7\xF8\x07\x1F\x02\x02\xF8\xFD\x05 \x11\x02\xF9\xFA' +
    '\f\x03\x02\x02\xFA\xFB\x07!\x02\x02\xFB\xFD\x05 \x11\x02\xFC\xF0\x03\x02' +
    '\x02\x02\xFC\xF3\x03\x02\x02\x02\xFC\xF6\x03\x02\x02\x02\xFC\xF9\x03\x02' +
    '\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03' +
    '\x02\x02\x02\xFF\x1F\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0102' +
    '\b\x11\x01\x02\u0102\u0103\x05"\x12\x02\u0103\u010C\x03\x02\x02\x02\u0104' +
    '\u0105\f\x04\x02\x02\u0105\u0106\x07$\x02\x02\u0106\u010B\x05"\x12\x02' +
    '\u0107\u0108\f\x03\x02\x02\u0108\u0109\x07&\x02\x02\u0109\u010B\x05"' +
    '\x12\x02\u010A\u0104\x03\x02\x02\x02\u010A\u0107\x03\x02\x02\x02\u010B' +
    '\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02' +
    '\x02\x02\u010D!\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0110' +
    '\b\x12\x01\x02\u0110\u0111\x05$\x13\x02\u0111\u011D\x03\x02\x02\x02\u0112' +
    '\u0113\f\x05\x02\x02\u0113\u0114\x07(\x02\x02\u0114\u011C\x05$\x13\x02' +
    '\u0115\u0116\f\x04\x02\x02\u0116\u0117\x07)\x02\x02\u0117\u011C\x05$\x13' +
    '\x02\u0118\u0119\f\x03\x02\x02\u0119\u011A\x07*\x02\x02\u011A\u011C\x05' +
    '$\x13\x02\u011B\u0112\x03\x02\x02\x02\u011B\u0115\x03\x02\x02\x02\u011B' +
    '\u0118\x03\x02\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02' +
    '\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E#\x03\x02\x02\x02\u011F\u011D' +
    '\x03\x02\x02\x02\u0120\u0121\x05&\x14\x02\u0121%\x03\x02\x02\x02\u0122' +
    '\u0130\x05.\x18\x02\u0123\u0124\x07%\x02\x02\u0124\u0130\x05&\x14\x02' +
    "\u0125\u0126\x07'\x02\x02\u0126\u0130\x05&\x14\x02\u0127\u0128\x05(\x15" +
    '\x02\u0128\u0129\x05$\x13\x02\u0129\u0130\x03\x02\x02\x02\u012A\u012B' +
    '\x07\x12\x02\x02\u012B\u012C\x07\x18\x02\x02\u012C\u012D\x05,\x17\x02' +
    '\u012D\u012E\x07\x19\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0122\x03' +
    '\x02\x02\x02\u012F\u0123\x03\x02\x02\x02\u012F\u0125\x03\x02\x02\x02\u012F' +
    "\u0127\x03\x02\x02\x02\u012F\u012A\x03\x02\x02\x02\u0130'\x03\x02\x02" +
    '\x02\u0131\u0132\t\x02\x02\x02\u0132)\x03\x02\x02\x02\u0133\u0134\t\x03' +
    '\x02\x02\u0134+\x03\x02\x02\x02\u0135\u0137\x058\x1D\x02\u0136\u0135\x03' +
    '\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138' +
    '\u0140\x05*\x16\x02\u0139\u013B\x058\x1D\x02\u013A\u0139\x03\x02\x02\x02' +
    '\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u0140\x07' +
    '=\x02\x02\u013D\u013E\x07+\x02\x02\u013E\u0140\x07=\x02\x02\u013F\u0136' +
    '\x03\x02\x02\x02\u013F\u013A\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02' +
    '\u0140-\x03\x02\x02\x02\u0141\u0142\b\x18\x01\x02\u0142\u0143\x050\x19' +
    '\x02\u0143\u015E\x03\x02\x02\x02\u0144\u0145\f\b\x02\x02\u0145\u0146\x07' +
    '\x1A\x02\x02\u0146\u0147\x052\x1A\x02\u0147\u0148\x07\x1B\x02\x02\u0148' +
    '\u015D\x03\x02\x02\x02\u0149\u014A\f\x07\x02\x02\u014A\u014E\x07\x18\x02' +
    '\x02\u014B\u014D\x052\x1A\x02\u014C\u014B\x03\x02\x02\x02\u014D\u0150' +
    '\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02' +
    '\u014F\u0151\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u015D\x07' +
    '\x19\x02\x02\u0152\u0153\f\x06\x02\x02\u0153\u0154\x07<\x02\x02\u0154' +
    '\u015D\x07=\x02\x02\u0155\u0156\f\x05\x02\x02\u0156\u0157\x07;\x02\x02' +
    '\u0157\u015D\x07=\x02\x02\u0158\u0159\f\x04\x02\x02\u0159\u015D\x07%\x02' +
    "\x02\u015A\u015B\f\x03\x02\x02\u015B\u015D\x07'\x02\x02\u015C\u0144\x03" +
    '\x02\x02\x02\u015C\u0149\x03\x02\x02\x02\u015C\u0152\x03\x02\x02\x02\u015C' +
    '\u0155\x03\x02\x02\x02\u015C\u0158\x03\x02\x02\x02\u015C\u015A\x03\x02' +
    '\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E' +
    '\u015F\x03\x02\x02\x02\u015F/\x03\x02\x02\x02\u0160\u015E\x03\x02\x02' +
    '\x02\u0161\u0169\x07=\x02\x02\u0162\u0169\x07>\x02\x02\u0163\u0169\x07' +
    '@\x02\x02\u0164\u0165\x07\x18\x02\x02\u0165\u0166\x052\x1A\x02\u0166\u0167' +
    '\x07\x19\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168\u0161\x03\x02\x02\x02' +
    '\u0168\u0162\x03\x02\x02\x02\u0168\u0163\x03\x02\x02\x02\u0168\u0164\x03' +
    '\x02\x02\x02\u01691\x03\x02\x02\x02\u016A\u016B\b\x1A\x01\x02\u016B\u016C' +
    '\x05\x14\v\x02\u016C\u0172\x03\x02\x02\x02\u016D\u016E\f\x03\x02\x02\u016E' +
    '\u016F\x072\x02\x02\u016F\u0171\x05\x14\v\x02\u0170\u016D\x03\x02\x02' +
    '\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0173' +
    '\x03\x02\x02\x02\u01733\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175' +
    '\u0176\x05\x16\f\x02\u01765\x03\x02\x02\x02\u0177\u0179\x05\x02\x02\x02' +
    '\u0178\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u0178\x03' +
    '\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x03\x02\x02\x02\u017C' +
    '\u017E\x058\x1D\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02' +
    '\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x07=\x02\x02\u0180\u0184' +
    '\x07\x18\x02\x02\u0181\u0183\x05:\x1E\x02\u0182\u0181\x03\x02\x02\x02' +
    '\u0183\u0186\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03' +
    '\x02\x02\x02\u0185\u0187\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187' +
    '\u0188\x07\x19\x02\x02\u0188\u0189\x05> \x02\u01897\x03\x02\x02\x02\u018A' +
    '\u018C\x07(\x02\x02\u018B\u018D\x058\x1D\x02\u018C\u018B\x03\x02\x02\x02' +
    '\u018C\u018D\x03\x02\x02\x02\u018D9\x03\x02\x02\x02\u018E\u018F\b\x1E' +
    '\x01\x02\u018F\u0190\x05<\x1F\x02\u0190\u0196\x03\x02\x02\x02\u0191\u0192' +
    '\f\x03\x02\x02\u0192\u0193\x072\x02\x02\u0193\u0195\x05<\x1F\x02\u0194' +
    '\u0191\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194\x03\x02' +
    '\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197;\x03\x02\x02\x02\u0198\u0196' +
    '\x03\x02\x02\x02\u0199\u019B\x05\x02\x02\x02\u019A\u0199\x03\x02\x02\x02' +
    '\u019B\u019C\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D\x03' +
    '\x02\x02\x02\u019D\u019F\x03\x02\x02\x02\u019E\u01A0\x058\x1D\x02\u019F' +
    '\u019E\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02' +
    '\x02\x02\u01A1\u01A2\x07=\x02\x02\u01A2=\x03\x02\x02\x02\u01A3\u01A7\x07' +
    '\x1C\x02\x02\u01A4\u01A6\x05@!\x02\u01A5\u01A4\x03\x02\x02\x02\u01A6\u01A9' +
    '\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02' +
    '\u01A8\u01AA\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AB\x07' +
    '\x1D\x02\x02\u01AB?\x03\x02\x02\x02\u01AC\u01B3\x05\b\x05\x02\u01AD\u01B3' +
    '\x05B"\x02\u01AE\u01B3\x05> \x02\u01AF\u01B3\x05D#\x02\u01B0\u01B3\x05' +
    'F$\x02\u01B1\u01B3\x05H%\x02\u01B2\u01AC\x03\x02\x02\x02\u01B2\u01AD\x03' +
    '\x02\x02\x02\u01B2\u01AE\x03\x02\x02\x02\u01B2\u01AF\x03\x02\x02\x02\u01B2' +
    '\u01B0\x03\x02\x02\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3A\x03\x02\x02' +
    '\x02\u01B4\u01B6\x052\x1A\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6' +
    '\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x071\x02\x02' +
    '\u01B8C\x03\x02\x02\x02\u01B9\u01BA\x07\f\x02\x02\u01BA\u01BB\x07\x18' +
    '\x02\x02\u01BB\u01BC\x052\x1A\x02\u01BC\u01BD\x07\x19\x02\x02\u01BD\u01BE' +
    '\x05@!\x02\u01BE\u01C8\x03\x02\x02\x02\u01BF\u01C0\x07\f\x02\x02\u01C0' +
    '\u01C1\x07\x18\x02\x02\u01C1\u01C2\x052\x1A\x02\u01C2\u01C3\x07\x19\x02' +
    '\x02\u01C3\u01C4\x05@!\x02\u01C4\u01C5\x07\t\x02\x02\u01C5\u01C6\x05@' +
    '!\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7\u01B9\x03\x02\x02\x02\u01C7\u01BF' +
    '\x03\x02\x02\x02\u01C8E\x03\x02\x02\x02\u01C9\u01CA\x07\x17\x02\x02\u01CA' +
    '\u01CB\x07\x18\x02\x02\u01CB\u01CC\x052\x1A\x02\u01CC\u01CD\x07\x19\x02' +
    '\x02\u01CD\u01CE\x05@!\x02\u01CE\u01E7\x03\x02\x02\x02\u01CF\u01D0\x07' +
    '\x07\x02\x02\u01D0\u01D1\x05@!\x02\u01D1\u01D2\x07\x17\x02\x02\u01D2\u01D3' +
    '\x07\x18\x02\x02\u01D3\u01D4\x052\x1A\x02\u01D4\u01D5\x07\x19\x02\x02' +
    '\u01D5\u01D6\x071\x02\x02\u01D6\u01E7\x03\x02\x02\x02\u01D7\u01D8\x07' +
    '\v\x02\x02\u01D8\u01DA\x07\x18\x02\x02\u01D9\u01DB\x052\x1A\x02\u01DA' +
    '\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DC\x03\x02' +
    '\x02\x02\u01DC\u01DE\x071\x02\x02\u01DD\u01DF\x052\x1A\x02\u01DE\u01DD' +
    '\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02' +
    '\u01E0\u01E2\x071\x02\x02\u01E1\u01E3\x052\x1A\x02\u01E2\u01E1\x03\x02' +
    '\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4' +
    '\u01E5\x07\x19\x02\x02\u01E5\u01E7\x05@!\x02\u01E6\u01C9\x03\x02\x02\x02' +
    '\u01E6\u01CF\x03\x02\x02\x02\u01E6\u01D7\x03\x02\x02\x02\u01E7G\x03\x02' +
    '\x02\x02\u01E8\u01E9\x07\x06\x02\x02\u01E9\u01F2\x071\x02\x02\u01EA\u01EB' +
    '\x07\x03\x02\x02\u01EB\u01F2\x071\x02\x02\u01EC\u01EE\x07\x0F\x02\x02' +
    '\u01ED\u01EF\x052\x1A\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03' +
    '\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x071\x02\x02\u01F1' +
    '\u01E8\x03\x02\x02\x02\u01F1\u01EA\x03\x02\x02\x02\u01F1\u01EC\x03\x02' +
    '\x02\x02\u01F2I\x03\x02\x02\x02\u01F3\u01F4\x07\x13\x02\x02\u01F4\u0200' +
    '\x07=\x02\x02\u01F5\u01F6\x07\x13\x02\x02\u01F6\u01F7\x07=\x02\x02\u01F7' +
    "\u01F9\x07\x1C\x02\x02\u01F8\u01FA\x05L'\x02\u01F9\u01F8\x03\x02\x02" +
    '\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FC' +
    '\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FE\x07\x1D\x02\x02' +
    '\u01FE\u0200\x03\x02\x02\x02\u01FF\u01F3\x03\x02\x02\x02\u01FF\u01F5\x03' +
    '\x02\x02\x02\u0200K\x03\x02\x02\x02\u0201\u0203\x05\x02\x02\x02\u0202' +
    '\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0202\x03\x02' +
    '\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206' +
    '\u0207\x05\f\x07\x02\u0207\u0208\x071\x02\x02\u0208M\x03\x02\x02\x02>' +
    'X]bgjsw\x80\x86\x8C\x8F\x94\x97\x9C\x9F\xA3\xA5\xAC\xB6\xBE\xC7\xD1\xDC' +
    '\xE8\xEA\xFC\xFE\u010A\u010C\u011B\u011D\u012F\u0136\u013A\u013F\u014E' +
    '\u015C\u015E\u0168\u0172\u017A\u017D\u0184\u018C\u0196\u019C\u019F\u01A7' +
    '\u01B2\u01B5\u01C7\u01DA\u01DE\u01E2\u01E6\u01EE\u01F1\u01FB\u01FF\u0204'
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
  public typeName(): TypeNameContext[]
  public typeName(i: number): TypeNameContext
  public typeName(i?: number): TypeNameContext | TypeNameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeNameContext)
    } else {
      return this.getRuleContext(i, TypeNameContext)
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
  public logicalOrExpression(): LogicalOrExpressionContext {
    return this.getRuleContext(0, LogicalOrExpressionContext)
  }
  public Question(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Question, 0)
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
  public Colon(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Colon, 0)
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
  public unaryExpression(): UnaryExpressionContext {
    return this.getRuleContext(0, UnaryExpressionContext)
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
  public unaryOperator(): UnaryOperatorContext | undefined {
    return this.tryGetRuleContext(0, UnaryOperatorContext)
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

export class UnaryOperatorContext extends ParserRuleContext {
  public And(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.And, 0)
  }
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Star, 0)
  }
  public Plus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Plus, 0)
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Minus, 0)
  }
  public Not(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Not, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_unaryOperator
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterUnaryOperator) {
      listener.enterUnaryOperator(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitUnaryOperator) {
      listener.exitUnaryOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitUnaryOperator) {
      return visitor.visitUnaryOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeNameContext extends ParserRuleContext {
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_typeName
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterTypeName) {
      listener.enterTypeName(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitTypeName) {
      listener.exitTypeName(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitTypeName) {
      return visitor.visitTypeName(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SizeofOperandsContext extends ParserRuleContext {
  public typeName(): TypeNameContext | undefined {
    return this.tryGetRuleContext(0, TypeNameContext)
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
  public parameterList(): ParameterListContext[]
  public parameterList(i: number): ParameterListContext
  public parameterList(i?: number): ParameterListContext | ParameterListContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ParameterListContext)
    } else {
      return this.getRuleContext(i, ParameterListContext)
    }
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
