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
  public static readonly RULE_type_specifier = 0
  public static readonly RULE_translation_unit = 1
  public static readonly RULE_external_declaration = 2
  public static readonly RULE_declaration = 3
  public static readonly RULE_init_declarator = 4
  public static readonly RULE_declarator = 5
  public static readonly RULE_initializer = 6
  public static readonly RULE_initializer_list = 7
  public static readonly RULE_assignment_expression = 8
  public static readonly RULE_conditional_expression = 9
  public static readonly RULE_logical_or_expression = 10
  public static readonly RULE_logical_and_expression = 11
  public static readonly RULE_equality_expression = 12
  public static readonly RULE_relational_expression = 13
  public static readonly RULE_additive_expression = 14
  public static readonly RULE_multiplicative_expression = 15
  public static readonly RULE_cast_expression = 16
  public static readonly RULE_unary_expression = 17
  public static readonly RULE_unary_operator = 18
  public static readonly RULE_type_name = 19
  public static readonly RULE_sizeof_operands = 20
  public static readonly RULE_postfix_expression = 21
  public static readonly RULE_primary_expression = 22
  public static readonly RULE_expression = 23
  public static readonly RULE_constant_expression = 24
  public static readonly RULE_function_definition = 25
  public static readonly RULE_pointer = 26
  public static readonly RULE_parameter_list = 27
  public static readonly RULE_parameter_declaration = 28
  public static readonly RULE_compound_statement = 29
  public static readonly RULE_statement = 30
  public static readonly RULE_expression_statement = 31
  public static readonly RULE_selection_statement = 32
  public static readonly RULE_iteration_statement = 33
  public static readonly RULE_jump_statement = 34
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'type_specifier',
    'translation_unit',
    'external_declaration',
    'declaration',
    'init_declarator',
    'declarator',
    'initializer',
    'initializer_list',
    'assignment_expression',
    'conditional_expression',
    'logical_or_expression',
    'logical_and_expression',
    'equality_expression',
    'relational_expression',
    'additive_expression',
    'multiplicative_expression',
    'cast_expression',
    'unary_expression',
    'unary_operator',
    'type_name',
    'sizeof_operands',
    'postfix_expression',
    'primary_expression',
    'expression',
    'constant_expression',
    'function_definition',
    'pointer',
    'parameter_list',
    'parameter_declaration',
    'compound_statement',
    'statement',
    'expression_statement',
    'selection_statement',
    'iteration_statement',
    'jump_statement'
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
  public type_specifier(): Type_specifierContext {
    const _localctx: Type_specifierContext = new Type_specifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, SourCParser.RULE_type_specifier)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 70
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
                (1 << SourCParser.Short) |
                (1 << SourCParser.Signed) |
                (1 << SourCParser.Unsigned) |
                (1 << SourCParser.Void))) !==
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
  public translation_unit(): Translation_unitContext {
    const _localctx: Translation_unitContext = new Translation_unitContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, SourCParser.RULE_translation_unit)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 75
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
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        ) {
          {
            {
              this.state = 72
              this.external_declaration()
            }
          }
          this.state = 77
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
  public external_declaration(): External_declarationContext {
    const _localctx: External_declarationContext = new External_declarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 4, SourCParser.RULE_external_declaration)
    try {
      this.state = 80
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 78
            this.function_definition()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 79
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
        this.state = 83
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 82
              this.type_specifier()
            }
          }
          this.state = 85
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
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        )
        this.state = 87
        this.init_declarator()
        this.state = 88
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
  public init_declarator(): Init_declaratorContext {
    const _localctx: Init_declaratorContext = new Init_declaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, SourCParser.RULE_init_declarator)
    try {
      this.state = 95
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 90
            this.declarator()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 91
            this.declarator()
            this.state = 92
            this.match(SourCParser.Assign)
            this.state = 93
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
      this.state = 129
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 97
            this.match(SourCParser.Identifier)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 99
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 98
                this.pointer()
              }
            }

            this.state = 101
            this.match(SourCParser.Identifier)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 102
            this.match(SourCParser.LeftParen)
            this.state = 103
            this.match(SourCParser.Star)
            this.state = 104
            this.match(SourCParser.Identifier)
            this.state = 105
            this.match(SourCParser.RightParen)
            this.state = 106
            this.match(SourCParser.LeftParen)
            this.state = 110
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
                  (1 << SourCParser.Short))) !==
                0
            ) {
              {
                {
                  this.state = 107
                  this.type_name()
                }
              }
              this.state = 112
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
            this.state = 113
            this.match(SourCParser.RightParen)
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 114
            this.match(SourCParser.Identifier)
            this.state = 115
            this.match(SourCParser.LeftBracket)
            this.state = 117
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
                this.state = 116
                this.constant_expression()
              }
            }

            this.state = 119
            this.match(SourCParser.RightBracket)
          }
          break

        case 5:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 120
            this.match(SourCParser.Identifier)
            this.state = 121
            this.match(SourCParser.LeftParen)
            this.state = 125
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
                  (1 << SourCParser.Unsigned) |
                  (1 << SourCParser.Void))) !==
                0
            ) {
              {
                {
                  this.state = 122
                  this.parameter_list(0)
                }
              }
              this.state = 127
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            }
            this.state = 128
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
  public initializer(): InitializerContext {
    const _localctx: InitializerContext = new InitializerContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, SourCParser.RULE_initializer)
    try {
      this.state = 136
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
            this.state = 131
            this.assignment_expression()
          }
          break
        case SourCParser.LeftBrace:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 132
            this.match(SourCParser.LeftBrace)
            this.state = 133
            this.initializer_list(0)
            this.state = 134
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

  public initializer_list(): Initializer_listContext
  public initializer_list(_p: number): Initializer_listContext
  // @RuleVersion(0)
  public initializer_list(_p?: number): Initializer_listContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Initializer_listContext = new Initializer_listContext(this._ctx, _parentState)
    let _prevctx: Initializer_listContext = _localctx
    const _startState: number = 14
    this.enterRecursionRule(_localctx, 14, SourCParser.RULE_initializer_list, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 139
          this.initializer()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 146
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Initializer_listContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  SourCParser.RULE_initializer_list
                )
                this.state = 141
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 142
                this.match(SourCParser.Comma)
                this.state = 143
                this.initializer()
              }
            }
          }
          this.state = 148
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx)
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
  public assignment_expression(): Assignment_expressionContext {
    const _localctx: Assignment_expressionContext = new Assignment_expressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 16, SourCParser.RULE_assignment_expression)
    try {
      this.state = 154
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 149
            this.conditional_expression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 150
            this.unary_expression()
            this.state = 151
            this.match(SourCParser.Assign)
            this.state = 152
            this.assignment_expression()
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
  public conditional_expression(): Conditional_expressionContext {
    const _localctx: Conditional_expressionContext = new Conditional_expressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 18, SourCParser.RULE_conditional_expression)
    try {
      this.state = 163
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 156
            this.logical_or_expression(0)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 157
            this.logical_or_expression(0)
            this.state = 158
            this.match(SourCParser.Question)
            this.state = 159
            this.conditional_expression()
            this.state = 160
            this.match(SourCParser.Colon)
            this.state = 161
            this.conditional_expression()
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

  public logical_or_expression(): Logical_or_expressionContext
  public logical_or_expression(_p: number): Logical_or_expressionContext
  // @RuleVersion(0)
  public logical_or_expression(_p?: number): Logical_or_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Logical_or_expressionContext = new Logical_or_expressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: Logical_or_expressionContext = _localctx
    const _startState: number = 20
    this.enterRecursionRule(_localctx, 20, SourCParser.RULE_logical_or_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 166
          this.logical_and_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 173
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Logical_or_expressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  SourCParser.RULE_logical_or_expression
                )
                this.state = 168
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 169
                this.match(SourCParser.OrOr)
                this.state = 170
                this.logical_and_expression(0)
              }
            }
          }
          this.state = 175
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx)
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

  public logical_and_expression(): Logical_and_expressionContext
  public logical_and_expression(_p: number): Logical_and_expressionContext
  // @RuleVersion(0)
  public logical_and_expression(_p?: number): Logical_and_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Logical_and_expressionContext = new Logical_and_expressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: Logical_and_expressionContext = _localctx
    const _startState: number = 22
    this.enterRecursionRule(_localctx, 22, SourCParser.RULE_logical_and_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 177
          this.equality_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 184
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Logical_and_expressionContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  SourCParser.RULE_logical_and_expression
                )
                this.state = 179
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 180
                this.match(SourCParser.AndAnd)
                this.state = 181
                this.equality_expression(0)
              }
            }
          }
          this.state = 186
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

  public equality_expression(): Equality_expressionContext
  public equality_expression(_p: number): Equality_expressionContext
  // @RuleVersion(0)
  public equality_expression(_p?: number): Equality_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Equality_expressionContext = new Equality_expressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: Equality_expressionContext = _localctx
    const _startState: number = 24
    this.enterRecursionRule(_localctx, 24, SourCParser.RULE_equality_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 188
          this.relational_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 198
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 196
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                case 1:
                  {
                    _localctx = new Equality_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_equality_expression
                    )
                    this.state = 190
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 191
                    this.match(SourCParser.Equal)
                    this.state = 192
                    this.relational_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new Equality_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_equality_expression
                    )
                    this.state = 193
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 194
                    this.match(SourCParser.NotEqual)
                    this.state = 195
                    this.relational_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 200
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx)
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

  public relational_expression(): Relational_expressionContext
  public relational_expression(_p: number): Relational_expressionContext
  // @RuleVersion(0)
  public relational_expression(_p?: number): Relational_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Relational_expressionContext = new Relational_expressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: Relational_expressionContext = _localctx
    const _startState: number = 26
    this.enterRecursionRule(_localctx, 26, SourCParser.RULE_relational_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 202
          this.additive_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 218
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 216
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                  {
                    _localctx = new Relational_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_relational_expression
                    )
                    this.state = 204
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 205
                    this.match(SourCParser.Less)
                    this.state = 206
                    this.additive_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new Relational_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_relational_expression
                    )
                    this.state = 207
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 208
                    this.match(SourCParser.Greater)
                    this.state = 209
                    this.additive_expression(0)
                  }
                  break

                case 3:
                  {
                    _localctx = new Relational_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_relational_expression
                    )
                    this.state = 210
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 211
                    this.match(SourCParser.LessEqual)
                    this.state = 212
                    this.additive_expression(0)
                  }
                  break

                case 4:
                  {
                    _localctx = new Relational_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_relational_expression
                    )
                    this.state = 213
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 214
                    this.match(SourCParser.GreaterEqual)
                    this.state = 215
                    this.additive_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 220
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

  public additive_expression(): Additive_expressionContext
  public additive_expression(_p: number): Additive_expressionContext
  // @RuleVersion(0)
  public additive_expression(_p?: number): Additive_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Additive_expressionContext = new Additive_expressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: Additive_expressionContext = _localctx
    const _startState: number = 28
    this.enterRecursionRule(_localctx, 28, SourCParser.RULE_additive_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 222
          this.multiplicative_expression(0)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 232
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 230
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                  {
                    _localctx = new Additive_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_additive_expression
                    )
                    this.state = 224
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 225
                    this.match(SourCParser.Plus)
                    this.state = 226
                    this.multiplicative_expression(0)
                  }
                  break

                case 2:
                  {
                    _localctx = new Additive_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_additive_expression
                    )
                    this.state = 227
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 228
                    this.match(SourCParser.Minus)
                    this.state = 229
                    this.multiplicative_expression(0)
                  }
                  break
              }
            }
          }
          this.state = 234
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx)
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

  public multiplicative_expression(): Multiplicative_expressionContext
  public multiplicative_expression(_p: number): Multiplicative_expressionContext
  // @RuleVersion(0)
  public multiplicative_expression(_p?: number): Multiplicative_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: Multiplicative_expressionContext = _localctx
    const _startState: number = 30
    this.enterRecursionRule(_localctx, 30, SourCParser.RULE_multiplicative_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 236
          this.cast_expression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 249
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 247
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
                case 1:
                  {
                    _localctx = new Multiplicative_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_multiplicative_expression
                    )
                    this.state = 238
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 239
                    this.match(SourCParser.Star)
                    this.state = 240
                    this.cast_expression()
                  }
                  break

                case 2:
                  {
                    _localctx = new Multiplicative_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_multiplicative_expression
                    )
                    this.state = 241
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 242
                    this.match(SourCParser.Div)
                    this.state = 243
                    this.cast_expression()
                  }
                  break

                case 3:
                  {
                    _localctx = new Multiplicative_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_multiplicative_expression
                    )
                    this.state = 244
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 245
                    this.match(SourCParser.Mod)
                    this.state = 246
                    this.cast_expression()
                  }
                  break
              }
            }
          }
          this.state = 251
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
  // @RuleVersion(0)
  public cast_expression(): Cast_expressionContext {
    const _localctx: Cast_expressionContext = new Cast_expressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 32, SourCParser.RULE_cast_expression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 252
        this.unary_expression()
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
  public unary_expression(): Unary_expressionContext {
    const _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 34, SourCParser.RULE_unary_expression)
    try {
      this.state = 267
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.LeftParen:
        case SourCParser.Identifier:
        case SourCParser.Constant:
        case SourCParser.StringLiteral:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 254
            this.postfix_expression(0)
          }
          break
        case SourCParser.PlusPlus:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 255
            this.match(SourCParser.PlusPlus)
            this.state = 256
            this.unary_expression()
          }
          break
        case SourCParser.MinusMinus:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 257
            this.match(SourCParser.MinusMinus)
            this.state = 258
            this.unary_expression()
          }
          break
        case SourCParser.Plus:
        case SourCParser.Minus:
        case SourCParser.Star:
        case SourCParser.And:
        case SourCParser.Not:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 259
            this.unary_operator()
            this.state = 260
            this.cast_expression()
          }
          break
        case SourCParser.Sizeof:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 262
            this.match(SourCParser.Sizeof)
            this.state = 263
            this.match(SourCParser.LeftParen)
            this.state = 264
            this.sizeof_operands()
            this.state = 265
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
  public unary_operator(): Unary_operatorContext {
    const _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state)
    this.enterRule(_localctx, 36, SourCParser.RULE_unary_operator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 269
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
  public type_name(): Type_nameContext {
    const _localctx: Type_nameContext = new Type_nameContext(this._ctx, this.state)
    this.enterRule(_localctx, 38, SourCParser.RULE_type_name)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 271
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
  public sizeof_operands(): Sizeof_operandsContext {
    const _localctx: Sizeof_operandsContext = new Sizeof_operandsContext(this._ctx, this.state)
    this.enterRule(_localctx, 40, SourCParser.RULE_sizeof_operands)
    let _la: number
    try {
      this.state = 283
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 274
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 273
                this.pointer()
              }
            }

            this.state = 276
            this.type_name()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 278
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === SourCParser.Star) {
              {
                this.state = 277
                this.pointer()
              }
            }

            this.state = 280
            this.match(SourCParser.Identifier)
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 281
            this.match(SourCParser.And)
            this.state = 282
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

  public postfix_expression(): Postfix_expressionContext
  public postfix_expression(_p: number): Postfix_expressionContext
  // @RuleVersion(0)
  public postfix_expression(_p?: number): Postfix_expressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Postfix_expressionContext = new Postfix_expressionContext(
      this._ctx,
      _parentState
    )
    let _prevctx: Postfix_expressionContext = _localctx
    const _startState: number = 42
    this.enterRecursionRule(_localctx, 42, SourCParser.RULE_postfix_expression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 286
          this.primary_expression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 314
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 312
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfix_expression
                    )
                    this.state = 288
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 289
                    this.match(SourCParser.LeftBracket)
                    this.state = 290
                    this.expression(0)
                    this.state = 291
                    this.match(SourCParser.RightBracket)
                  }
                  break

                case 2:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfix_expression
                    )
                    this.state = 293
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 294
                    this.match(SourCParser.LeftParen)
                    this.state = 298
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
                          this.state = 295
                          this.expression(0)
                        }
                      }
                      this.state = 300
                      this._errHandler.sync(this)
                      _la = this._input.LA(1)
                    }
                    this.state = 301
                    this.match(SourCParser.RightParen)
                  }
                  break

                case 3:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfix_expression
                    )
                    this.state = 302
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 303
                    this.match(SourCParser.Dot)
                    this.state = 304
                    this.match(SourCParser.Identifier)
                  }
                  break

                case 4:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfix_expression
                    )
                    this.state = 305
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 306
                    this.match(SourCParser.Arrow)
                    this.state = 307
                    this.match(SourCParser.Identifier)
                  }
                  break

                case 5:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfix_expression
                    )
                    this.state = 308
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 309
                    this.match(SourCParser.PlusPlus)
                  }
                  break

                case 6:
                  {
                    _localctx = new Postfix_expressionContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      SourCParser.RULE_postfix_expression
                    )
                    this.state = 310
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 311
                    this.match(SourCParser.MinusMinus)
                  }
                  break
              }
            }
          }
          this.state = 316
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx)
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
  public primary_expression(): Primary_expressionContext {
    const _localctx: Primary_expressionContext = new Primary_expressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 44, SourCParser.RULE_primary_expression)
    try {
      this.state = 324
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Identifier:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 317
            this.match(SourCParser.Identifier)
          }
          break
        case SourCParser.Constant:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 318
            this.match(SourCParser.Constant)
          }
          break
        case SourCParser.StringLiteral:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 319
            this.match(SourCParser.StringLiteral)
          }
          break
        case SourCParser.LeftParen:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 320
            this.match(SourCParser.LeftParen)
            this.state = 321
            this.expression(0)
            this.state = 322
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
    const _startState: number = 46
    this.enterRecursionRule(_localctx, 46, SourCParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 327
          this.assignment_expression()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 334
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx)
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
                this.state = 329
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 330
                this.match(SourCParser.Comma)
                this.state = 331
                this.assignment_expression()
              }
            }
          }
          this.state = 336
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx)
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
  public constant_expression(): Constant_expressionContext {
    const _localctx: Constant_expressionContext = new Constant_expressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 48, SourCParser.RULE_constant_expression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 337
        this.conditional_expression()
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
  public function_definition(): Function_definitionContext {
    const _localctx: Function_definitionContext = new Function_definitionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 50, SourCParser.RULE_function_definition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 340
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 339
              this.type_specifier()
            }
          }
          this.state = 342
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
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        )
        this.state = 345
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === SourCParser.Star) {
          {
            this.state = 344
            this.pointer()
          }
        }

        this.state = 347
        this.match(SourCParser.Identifier)
        this.state = 348
        this.match(SourCParser.LeftParen)
        this.state = 352
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
              (1 << SourCParser.Unsigned) |
              (1 << SourCParser.Void))) !==
            0
        ) {
          {
            {
              this.state = 349
              this.parameter_list(0)
            }
          }
          this.state = 354
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 355
        this.match(SourCParser.RightParen)
        this.state = 356
        this.compound_statement()
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
    this.enterRule(_localctx, 52, SourCParser.RULE_pointer)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 358
        this.match(SourCParser.Star)
        this.state = 360
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === SourCParser.Star) {
          {
            this.state = 359
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

  public parameter_list(): Parameter_listContext
  public parameter_list(_p: number): Parameter_listContext
  // @RuleVersion(0)
  public parameter_list(_p?: number): Parameter_listContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: Parameter_listContext = new Parameter_listContext(this._ctx, _parentState)
    let _prevctx: Parameter_listContext = _localctx
    const _startState: number = 54
    this.enterRecursionRule(_localctx, 54, SourCParser.RULE_parameter_list, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 363
          this.parameter_declaration()
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 370
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new Parameter_listContext(_parentctx, _parentState)
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  SourCParser.RULE_parameter_list
                )
                this.state = 365
                if (!this.precpred(this._ctx, 1)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                }
                this.state = 366
                this.match(SourCParser.Comma)
                this.state = 367
                this.parameter_declaration()
              }
            }
          }
          this.state = 372
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx)
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
  public parameter_declaration(): Parameter_declarationContext {
    const _localctx: Parameter_declarationContext = new Parameter_declarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 56, SourCParser.RULE_parameter_declaration)
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
              this.type_specifier()
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
  public compound_statement(): Compound_statementContext {
    const _localctx: Compound_statementContext = new Compound_statementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 58, SourCParser.RULE_compound_statement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 383
        this.match(SourCParser.LeftBrace)
        this.state = 387
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
              this.state = 384
              this.statement()
            }
          }
          this.state = 389
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 390
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
    this.enterRule(_localctx, 60, SourCParser.RULE_statement)
    try {
      this.state = 398
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Char:
        case SourCParser.Double:
        case SourCParser.Float:
        case SourCParser.Int:
        case SourCParser.Long:
        case SourCParser.Short:
        case SourCParser.Signed:
        case SourCParser.Unsigned:
        case SourCParser.Void:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 392
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
            this.state = 393
            this.expression_statement()
          }
          break
        case SourCParser.LeftBrace:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 394
            this.compound_statement()
          }
          break
        case SourCParser.If:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 395
            this.selection_statement()
          }
          break
        case SourCParser.Do:
        case SourCParser.For:
        case SourCParser.While:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 396
            this.iteration_statement()
          }
          break
        case SourCParser.Break:
        case SourCParser.Continue:
        case SourCParser.Return:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 397
            this.jump_statement()
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
  public expression_statement(): Expression_statementContext {
    const _localctx: Expression_statementContext = new Expression_statementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 62, SourCParser.RULE_expression_statement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 401
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
            this.state = 400
            this.expression(0)
          }
        }

        this.state = 403
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
  public selection_statement(): Selection_statementContext {
    const _localctx: Selection_statementContext = new Selection_statementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 64, SourCParser.RULE_selection_statement)
    try {
      this.state = 419
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 405
            this.match(SourCParser.If)
            this.state = 406
            this.match(SourCParser.LeftParen)
            this.state = 407
            this.expression(0)
            this.state = 408
            this.match(SourCParser.RightParen)
            this.state = 409
            this.statement()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 411
            this.match(SourCParser.If)
            this.state = 412
            this.match(SourCParser.LeftParen)
            this.state = 413
            this.expression(0)
            this.state = 414
            this.match(SourCParser.RightParen)
            this.state = 415
            this.statement()
            this.state = 416
            this.match(SourCParser.Else)
            this.state = 417
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
  public iteration_statement(): Iteration_statementContext {
    const _localctx: Iteration_statementContext = new Iteration_statementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 66, SourCParser.RULE_iteration_statement)
    let _la: number
    try {
      this.state = 450
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.While:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 421
            this.match(SourCParser.While)
            this.state = 422
            this.match(SourCParser.LeftParen)
            this.state = 423
            this.expression(0)
            this.state = 424
            this.match(SourCParser.RightParen)
            this.state = 425
            this.statement()
          }
          break
        case SourCParser.Do:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 427
            this.match(SourCParser.Do)
            this.state = 428
            this.statement()
            this.state = 429
            this.match(SourCParser.While)
            this.state = 430
            this.match(SourCParser.LeftParen)
            this.state = 431
            this.expression(0)
            this.state = 432
            this.match(SourCParser.RightParen)
            this.state = 433
            this.match(SourCParser.Semi)
          }
          break
        case SourCParser.For:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 435
            this.match(SourCParser.For)
            this.state = 436
            this.match(SourCParser.LeftParen)
            this.state = 438
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
                this.state = 437
                this.expression(0)
              }
            }

            this.state = 440
            this.match(SourCParser.Semi)
            this.state = 442
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
                this.state = 441
                this.expression(0)
              }
            }

            this.state = 444
            this.match(SourCParser.Semi)
            this.state = 446
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
                this.state = 445
                this.expression(0)
              }
            }

            this.state = 448
            this.match(SourCParser.RightParen)
            this.state = 449
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
  public jump_statement(): Jump_statementContext {
    const _localctx: Jump_statementContext = new Jump_statementContext(this._ctx, this.state)
    this.enterRule(_localctx, 68, SourCParser.RULE_jump_statement)
    let _la: number
    try {
      this.state = 461
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case SourCParser.Continue:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 452
            this.match(SourCParser.Continue)
            this.state = 453
            this.match(SourCParser.Semi)
          }
          break
        case SourCParser.Break:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 454
            this.match(SourCParser.Break)
            this.state = 455
            this.match(SourCParser.Semi)
          }
          break
        case SourCParser.Return:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 456
            this.match(SourCParser.Return)
            this.state = 458
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
                this.state = 457
                this.expression(0)
              }
            }

            this.state = 460
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

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 7:
        return this.initializer_list_sempred(_localctx as Initializer_listContext, predIndex)

      case 10:
        return this.logical_or_expression_sempred(
          _localctx as Logical_or_expressionContext,
          predIndex
        )

      case 11:
        return this.logical_and_expression_sempred(
          _localctx as Logical_and_expressionContext,
          predIndex
        )

      case 12:
        return this.equality_expression_sempred(_localctx as Equality_expressionContext, predIndex)

      case 13:
        return this.relational_expression_sempred(
          _localctx as Relational_expressionContext,
          predIndex
        )

      case 14:
        return this.additive_expression_sempred(_localctx as Additive_expressionContext, predIndex)

      case 15:
        return this.multiplicative_expression_sempred(
          _localctx as Multiplicative_expressionContext,
          predIndex
        )

      case 21:
        return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex)

      case 23:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)

      case 27:
        return this.parameter_list_sempred(_localctx as Parameter_listContext, predIndex)
    }
    return true
  }
  private initializer_list_sempred(_localctx: Initializer_listContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logical_or_expression_sempred(
    _localctx: Logical_or_expressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private logical_and_expression_sempred(
    _localctx: Logical_and_expressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 1)
    }
    return true
  }
  private equality_expression_sempred(
    _localctx: Equality_expressionContext,
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
  private relational_expression_sempred(
    _localctx: Relational_expressionContext,
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
  private additive_expression_sempred(
    _localctx: Additive_expressionContext,
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
  private multiplicative_expression_sempred(
    _localctx: Multiplicative_expressionContext,
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
  private postfix_expression_sempred(
    _localctx: Postfix_expressionContext,
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
  private parameter_list_sempred(_localctx: Parameter_listContext, predIndex: number): boolean {
    switch (predIndex) {
      case 21:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03J\u01D2\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    '\t#\x04$\t$\x03\x02\x03\x02\x03\x03\x07\x03L\n\x03\f\x03\x0E\x03O\v\x03' +
    '\x03\x04\x03\x04\x05\x04S\n\x04\x03\x05\x06\x05V\n\x05\r\x05\x0E\x05W' +
    '\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06' +
    'b\n\x06\x03\x07\x03\x07\x05\x07f\n\x07\x03\x07\x03\x07\x03\x07\x03\x07' +
    '\x03\x07\x03\x07\x03\x07\x07\x07o\n\x07\f\x07\x0E\x07r\v\x07\x03\x07\x03' +
    '\x07\x03\x07\x03\x07\x05\x07x\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07' +
    '\x07~\n\x07\f\x07\x0E\x07\x81\v\x07\x03\x07\x05\x07\x84\n\x07\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x05\b\x8B\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t' +
    '\x07\t\x93\n\t\f\t\x0E\t\x96\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x9D' +
    '\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xA6\n\v\x03\f\x03' +
    '\f\x03\f\x03\f\x03\f\x03\f\x07\f\xAE\n\f\f\f\x0E\f\xB1\v\f\x03\r\x03\r' +
    '\x03\r\x03\r\x03\r\x03\r\x07\r\xB9\n\r\f\r\x0E\r\xBC\v\r\x03\x0E\x03\x0E' +
    '\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xC7\n' +
    '\x0E\f\x0E\x0E\x0E\xCA\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03' +
    '\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03' +
    '\x0F\x07\x0F\xDB\n\x0F\f\x0F\x0E\x0F\xDE\v\x0F\x03\x10\x03\x10\x03\x10' +
    '\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xE9\n\x10\f\x10' +
    '\x0E\x10\xEC\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03' +
    '\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xFA\n\x11\f\x11\x0E' +
    '\x11\xFD\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13' +
    '\u010E\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x05\x16\u0115\n\x16' +
    '\x03\x16\x03\x16\x05\x16\u0119\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u011E' +
    '\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17' +
    '\x03\x17\x03\x17\x03\x17\x07\x17\u012B\n\x17\f\x17\x0E\x17\u012E\v\x17' +
    '\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17' +
    '\x03\x17\x03\x17\x07\x17\u013B\n\x17\f\x17\x0E\x17\u013E\v\x17\x03\x18' +
    '\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0147\n\x18\x03' +
    '\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u014F\n\x19\f\x19' +
    '\x0E\x19\u0152\v\x19\x03\x1A\x03\x1A\x03\x1B\x06\x1B\u0157\n\x1B\r\x1B' +
    '\x0E\x1B\u0158\x03\x1B\x05\x1B\u015C\n\x1B\x03\x1B\x03\x1B\x03\x1B\x07' +
    '\x1B\u0161\n\x1B\f\x1B\x0E\x1B\u0164\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03' +
    '\x1C\x03\x1C\x05\x1C\u016B\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D' +
    '\x03\x1D\x07\x1D\u0173\n\x1D\f\x1D\x0E\x1D\u0176\v\x1D\x03\x1E\x06\x1E' +
    '\u0179\n\x1E\r\x1E\x0E\x1E\u017A\x03\x1E\x05\x1E\u017E\n\x1E\x03\x1E\x03' +
    '\x1E\x03\x1F\x03\x1F\x07\x1F\u0184\n\x1F\f\x1F\x0E\x1F\u0187\v\x1F\x03' +
    '\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0191\n \x03!\x05!\u0194' +
    '\n!\x03!\x03!\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x03"\x03' +
    '"\x03"\x03"\x03"\x03"\x05"\u01A6\n"\x03#\x03#\x03#\x03#\x03#\x03' +
    '#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01B9\n' +
    '#\x03#\x03#\x05#\u01BD\n#\x03#\x03#\x05#\u01C1\n#\x03#\x03#\x05#\u01C5' +
    '\n#\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u01CD\n$\x03$\x05$\u01D0\n$\x03' +
    '$\x02\x02\f\x10\x16\x18\x1A\x1C\x1E ,08%\x02\x02\x04\x02\x06\x02\b\x02' +
    '\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C' +
    '\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026' +
    '\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02\x02\x05\b\x02\x04\x04\b\b' +
    '\n\n\r\x0E\x10\x11\x15\x16\x07\x02$$&&((++..\x07\x02\x04\x04\b\b\n\n\r' +
    '\x0E\x10\x10\x02\u01F5\x02H\x03\x02\x02\x02\x04M\x03\x02\x02\x02\x06R' +
    '\x03\x02\x02\x02\bU\x03\x02\x02\x02\na\x03\x02\x02\x02\f\x83\x03\x02\x02' +
    '\x02\x0E\x8A\x03\x02\x02\x02\x10\x8C\x03\x02\x02\x02\x12\x9C\x03\x02\x02' +
    '\x02\x14\xA5\x03\x02\x02\x02\x16\xA7\x03\x02\x02\x02\x18\xB2\x03\x02\x02' +
    '\x02\x1A\xBD\x03\x02\x02\x02\x1C\xCB\x03\x02\x02\x02\x1E\xDF\x03\x02\x02' +
    '\x02 \xED\x03\x02\x02\x02"\xFE\x03\x02\x02\x02$\u010D\x03\x02\x02\x02' +
    '&\u010F\x03\x02\x02\x02(\u0111\x03\x02\x02\x02*\u011D\x03\x02\x02\x02' +
    ',\u011F\x03\x02\x02\x02.\u0146\x03\x02\x02\x020\u0148\x03\x02\x02\x02' +
    '2\u0153\x03\x02\x02\x024\u0156\x03\x02\x02\x026\u0168\x03\x02\x02\x02' +
    '8\u016C\x03\x02\x02\x02:\u0178\x03\x02\x02\x02<\u0181\x03\x02\x02\x02' +
    '>\u0190\x03\x02\x02\x02@\u0193\x03\x02\x02\x02B\u01A5\x03\x02\x02\x02' +
    'D\u01C4\x03\x02\x02\x02F\u01CF\x03\x02\x02\x02HI\t\x02\x02\x02I\x03\x03' +
    '\x02\x02\x02JL\x05\x06\x04\x02KJ\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03' +
    '\x02\x02\x02MN\x03\x02\x02\x02N\x05\x03\x02\x02\x02OM\x03\x02\x02\x02' +
    'PS\x054\x1B\x02QS\x05\b\x05\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02S\x07' +
    '\x03\x02\x02\x02TV\x05\x02\x02\x02UT\x03\x02\x02\x02VW\x03\x02\x02\x02' +
    'WU\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x05\n\x06\x02' +
    'Z[\x071\x02\x02[\t\x03\x02\x02\x02\\b\x05\f\x07\x02]^\x05\f\x07\x02^_' +
    '\x073\x02\x02_`\x05\x0E\b\x02`b\x03\x02\x02\x02a\\\x03\x02\x02\x02a]\x03' +
    '\x02\x02\x02b\v\x03\x02\x02\x02c\x84\x07=\x02\x02df\x056\x1C\x02ed\x03' +
    '\x02\x02\x02ef\x03\x02\x02\x02fg\x03\x02\x02\x02g\x84\x07=\x02\x02hi\x07' +
    '\x18\x02\x02ij\x07(\x02\x02jk\x07=\x02\x02kl\x07\x19\x02\x02lp\x07\x18' +
    '\x02\x02mo\x05(\x15\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02' +
    '\x02\x02pq\x03\x02\x02\x02qs\x03\x02\x02\x02rp\x03\x02\x02\x02s\x84\x07' +
    '\x19\x02\x02tu\x07=\x02\x02uw\x07\x1A\x02\x02vx\x052\x1A\x02wv\x03\x02' +
    '\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02y\x84\x07\x1B\x02\x02z{\x07' +
    '=\x02\x02{\x7F\x07\x18\x02\x02|~\x058\x1D\x02}|\x03\x02\x02\x02~\x81\x03' +
    '\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03' +
    '\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x82\x84\x07\x19\x02\x02\x83c\x03' +
    '\x02\x02\x02\x83e\x03\x02\x02\x02\x83h\x03\x02\x02\x02\x83t\x03\x02\x02' +
    '\x02\x83z\x03\x02\x02\x02\x84\r\x03\x02\x02\x02\x85\x8B\x05\x12\n\x02' +
    '\x86\x87\x07\x1C\x02\x02\x87\x88\x05\x10\t\x02\x88\x89\x07\x1D\x02\x02' +
    '\x89\x8B\x03\x02\x02\x02\x8A\x85\x03\x02\x02\x02\x8A\x86\x03\x02\x02\x02' +
    '\x8B\x0F\x03\x02\x02\x02\x8C\x8D\b\t\x01\x02\x8D\x8E\x05\x0E\b\x02\x8E' +
    '\x94\x03\x02\x02\x02\x8F\x90\f\x03\x02\x02\x90\x91\x072\x02\x02\x91\x93' +
    '\x05\x0E\b\x02\x92\x8F\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92' +
    '\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x11\x03\x02\x02\x02\x96\x94' +
    '\x03\x02\x02\x02\x97\x9D\x05\x14\v\x02\x98\x99\x05$\x13\x02\x99\x9A\x07' +
    '3\x02\x02\x9A\x9B\x05\x12\n\x02\x9B\x9D\x03\x02\x02\x02\x9C\x97\x03\x02' +
    '\x02\x02\x9C\x98\x03\x02\x02\x02\x9D\x13\x03\x02\x02\x02\x9E\xA6\x05\x16' +
    '\f\x02\x9F\xA0\x05\x16\f\x02\xA0\xA1\x07/\x02\x02\xA1\xA2\x05\x14\v\x02' +
    '\xA2\xA3\x070\x02\x02\xA3\xA4\x05\x14\v\x02\xA4\xA6\x03\x02\x02\x02\xA5' +
    '\x9E\x03\x02\x02\x02\xA5\x9F\x03\x02\x02\x02\xA6\x15\x03\x02\x02\x02\xA7' +
    '\xA8\b\f\x01\x02\xA8\xA9\x05\x18\r\x02\xA9\xAF\x03\x02\x02\x02\xAA\xAB' +
    '\f\x03\x02\x02\xAB\xAC\x07-\x02\x02\xAC\xAE\x05\x18\r\x02\xAD\xAA\x03' +
    '\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03' +
    '\x02\x02\x02\xB0\x17\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\b' +
    '\r\x01\x02\xB3\xB4\x05\x1A\x0E\x02\xB4\xBA\x03\x02\x02\x02\xB5\xB6\f\x03' +
    '\x02\x02\xB6\xB7\x07,\x02\x02\xB7\xB9\x05\x1A\x0E\x02\xB8\xB5\x03\x02' +
    '\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02' +
    '\x02\x02\xBB\x19\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\b\x0E' +
    '\x01\x02\xBE\xBF\x05\x1C\x0F\x02\xBF\xC8\x03\x02\x02\x02\xC0\xC1\f\x04' +
    '\x02\x02\xC1\xC2\x079\x02\x02\xC2\xC7\x05\x1C\x0F\x02\xC3\xC4\f\x03\x02' +
    '\x02\xC4\xC5\x07:\x02\x02\xC5\xC7\x05\x1C\x0F\x02\xC6\xC0\x03\x02\x02' +
    '\x02\xC6\xC3\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02' +
    '\x02\xC8\xC9\x03\x02\x02\x02\xC9\x1B\x03\x02\x02\x02\xCA\xC8\x03\x02\x02' +
    '\x02\xCB\xCC\b\x0F\x01\x02\xCC\xCD\x05\x1E\x10\x02\xCD\xDC\x03\x02\x02' +
    '\x02\xCE\xCF\f\x06\x02\x02\xCF\xD0\x07\x1E\x02\x02\xD0\xDB\x05\x1E\x10' +
    '\x02\xD1\xD2\f\x05\x02\x02\xD2\xD3\x07 \x02\x02\xD3\xDB\x05\x1E\x10\x02' +
    '\xD4\xD5\f\x04\x02\x02\xD5\xD6\x07\x1F\x02\x02\xD6\xDB\x05\x1E\x10\x02' +
    '\xD7\xD8\f\x03\x02\x02\xD8\xD9\x07!\x02\x02\xD9\xDB\x05\x1E\x10\x02\xDA' +
    '\xCE\x03\x02\x02\x02\xDA\xD1\x03\x02\x02\x02\xDA\xD4\x03\x02\x02\x02\xDA' +
    '\xD7\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC' +
    '\xDD\x03\x02\x02\x02\xDD\x1D\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF' +
    '\xE0\b\x10\x01\x02\xE0\xE1\x05 \x11\x02\xE1\xEA\x03\x02\x02\x02\xE2\xE3' +
    '\f\x04\x02\x02\xE3\xE4\x07$\x02\x02\xE4\xE9\x05 \x11\x02\xE5\xE6\f\x03' +
    '\x02\x02\xE6\xE7\x07&\x02\x02\xE7\xE9\x05 \x11\x02\xE8\xE2\x03\x02\x02' +
    '\x02\xE8\xE5\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02' +
    '\x02\xEA\xEB\x03\x02\x02\x02\xEB\x1F\x03\x02\x02\x02\xEC\xEA\x03\x02\x02' +
    '\x02\xED\xEE\b\x11\x01\x02\xEE\xEF\x05"\x12\x02\xEF\xFB\x03\x02\x02\x02' +
    '\xF0\xF1\f\x05\x02\x02\xF1\xF2\x07(\x02\x02\xF2\xFA\x05"\x12\x02\xF3' +
    '\xF4\f\x04\x02\x02\xF4\xF5\x07)\x02\x02\xF5\xFA\x05"\x12\x02\xF6\xF7' +
    '\f\x03\x02\x02\xF7\xF8\x07*\x02\x02\xF8\xFA\x05"\x12\x02\xF9\xF0\x03' +
    '\x02\x02\x02\xF9\xF3\x03\x02\x02\x02\xF9\xF6\x03\x02\x02\x02\xFA\xFD\x03' +
    '\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC!\x03' +
    '\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\xFF\x05$\x13\x02\xFF#\x03\x02' +
    '\x02\x02\u0100\u010E\x05,\x17\x02\u0101\u0102\x07%\x02\x02\u0102\u010E' +
    "\x05$\x13\x02\u0103\u0104\x07'\x02\x02\u0104\u010E\x05$\x13\x02\u0105" +
    '\u0106\x05&\x14\x02\u0106\u0107\x05"\x12\x02\u0107\u010E\x03\x02\x02' +
    '\x02\u0108\u0109\x07\x12\x02\x02\u0109\u010A\x07\x18\x02\x02\u010A\u010B' +
    '\x05*\x16\x02\u010B\u010C\x07\x19\x02\x02\u010C\u010E\x03\x02\x02\x02' +
    '\u010D\u0100\x03\x02\x02\x02\u010D\u0101\x03\x02\x02\x02\u010D\u0103\x03' +
    '\x02\x02\x02\u010D\u0105\x03\x02\x02\x02\u010D\u0108\x03\x02\x02\x02\u010E' +
    "%\x03\x02\x02\x02\u010F\u0110\t\x03\x02\x02\u0110'\x03\x02\x02\x02\u0111" +
    '\u0112\t\x04\x02\x02\u0112)\x03\x02\x02\x02\u0113\u0115\x056\x1C\x02\u0114' +
    '\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02' +
    '\x02\x02\u0116\u011E\x05(\x15\x02\u0117\u0119\x056\x1C\x02\u0118\u0117' +
    '\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02' +
    '\u011A\u011E\x07=\x02\x02\u011B\u011C\x07+\x02\x02\u011C\u011E\x07=\x02' +
    '\x02\u011D\u0114\x03\x02\x02\x02\u011D\u0118\x03\x02\x02\x02\u011D\u011B' +
    '\x03\x02\x02\x02\u011E+\x03\x02\x02\x02\u011F\u0120\b\x17\x01\x02\u0120' +
    '\u0121\x05.\x18\x02\u0121\u013C\x03\x02\x02\x02\u0122\u0123\f\b\x02\x02' +
    '\u0123\u0124\x07\x1A\x02\x02\u0124\u0125\x050\x19\x02\u0125\u0126\x07' +
    '\x1B\x02\x02\u0126\u013B\x03\x02\x02\x02\u0127\u0128\f\x07\x02\x02\u0128' +
    '\u012C\x07\x18\x02\x02\u0129\u012B\x050\x19\x02\u012A\u0129\x03\x02\x02' +
    '\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D' +
    '\x03\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02' +
    '\u012F\u013B\x07\x19\x02\x02\u0130\u0131\f\x06\x02\x02\u0131\u0132\x07' +
    '<\x02\x02\u0132\u013B\x07=\x02\x02\u0133\u0134\f\x05\x02\x02\u0134\u0135' +
    '\x07;\x02\x02\u0135\u013B\x07=\x02\x02\u0136\u0137\f\x04\x02\x02\u0137' +
    "\u013B\x07%\x02\x02\u0138\u0139\f\x03\x02\x02\u0139\u013B\x07'\x02\x02" +
    '\u013A\u0122\x03\x02\x02\x02\u013A\u0127\x03\x02\x02\x02\u013A\u0130\x03' +
    '\x02\x02\x02\u013A\u0133\x03\x02\x02\x02\u013A\u0136\x03\x02\x02\x02\u013A' +
    '\u0138\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02' +
    '\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D-\x03\x02\x02\x02\u013E\u013C' +
    '\x03\x02\x02\x02\u013F\u0147\x07=\x02\x02\u0140\u0147\x07>\x02\x02\u0141' +
    '\u0147\x07@\x02\x02\u0142\u0143\x07\x18\x02\x02\u0143\u0144\x050\x19\x02' +
    '\u0144\u0145\x07\x19\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146\u013F\x03' +
    '\x02\x02\x02\u0146\u0140\x03\x02\x02\x02\u0146\u0141\x03\x02\x02\x02\u0146' +
    '\u0142\x03\x02\x02\x02\u0147/\x03\x02\x02\x02\u0148\u0149\b\x19\x01\x02' +
    '\u0149\u014A\x05\x12\n\x02\u014A\u0150\x03\x02\x02\x02\u014B\u014C\f\x03' +
    '\x02\x02\u014C\u014D\x072\x02\x02\u014D\u014F\x05\x12\n\x02\u014E\u014B' +
    '\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02' +
    '\u0150\u0151\x03\x02\x02\x02\u01511\x03\x02\x02\x02\u0152\u0150\x03\x02' +
    '\x02\x02\u0153\u0154\x05\x14\v\x02\u01543\x03\x02\x02\x02\u0155\u0157' +
    '\x05\x02\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02' +
    '\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x03' +
    '\x02\x02\x02\u015A\u015C\x056\x1C\x02\u015B\u015A\x03\x02\x02\x02\u015B' +
    '\u015C\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015E\x07=\x02' +
    '\x02\u015E\u0162\x07\x18\x02\x02\u015F\u0161\x058\x1D\x02\u0160\u015F' +
    '\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02' +
    '\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u0162\x03' +
    '\x02\x02\x02\u0165\u0166\x07\x19\x02\x02\u0166\u0167\x05<\x1F\x02\u0167' +
    '5\x03\x02\x02\x02\u0168\u016A\x07(\x02\x02\u0169\u016B\x056\x1C\x02\u016A' +
    '\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B7\x03\x02\x02' +
    '\x02\u016C\u016D\b\x1D\x01\x02\u016D\u016E\x05:\x1E\x02\u016E\u0174\x03' +
    '\x02\x02\x02\u016F\u0170\f\x03\x02\x02\u0170\u0171\x072\x02\x02\u0171' +
    '\u0173\x05:\x1E\x02\u0172\u016F\x03\x02\x02\x02\u0173\u0176\x03\x02\x02' +
    '\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u01759\x03' +
    '\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0177\u0179\x05\x02\x02\x02\u0178' +
    '\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u0178\x03\x02' +
    '\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x03\x02\x02\x02\u017C' +
    '\u017E\x056\x1C\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02' +
    '\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x07=\x02\x02\u0180;\x03\x02' +
    '\x02\x02\u0181\u0185\x07\x1C\x02\x02\u0182\u0184\x05> \x02\u0183\u0182' +
    '\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02' +
    '\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x03\x02\x02\x02\u0187\u0185\x03' +
    '\x02\x02\x02\u0188\u0189\x07\x1D\x02\x02\u0189=\x03\x02\x02\x02\u018A' +
    '\u0191\x05\b\x05\x02\u018B\u0191\x05@!\x02\u018C\u0191\x05<\x1F\x02\u018D' +
    '\u0191\x05B"\x02\u018E\u0191\x05D#\x02\u018F\u0191\x05F$\x02\u0190\u018A' +
    '\x03\x02\x02\x02\u0190\u018B\x03\x02\x02\x02\u0190\u018C\x03\x02\x02\x02' +
    '\u0190\u018D\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190\u018F\x03' +
    '\x02\x02\x02\u0191?\x03\x02\x02\x02\u0192\u0194\x050\x19\x02\u0193\u0192' +
    '\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02' +
    '\u0195\u0196\x071\x02\x02\u0196A\x03\x02\x02\x02\u0197\u0198\x07\f\x02' +
    '\x02\u0198\u0199\x07\x18\x02\x02\u0199\u019A\x050\x19\x02\u019A\u019B' +
    '\x07\x19\x02\x02\u019B\u019C\x05> \x02\u019C\u01A6\x03\x02\x02\x02\u019D' +
    '\u019E\x07\f\x02\x02\u019E\u019F\x07\x18\x02\x02\u019F\u01A0\x050\x19' +
    '\x02\u01A0\u01A1\x07\x19\x02\x02\u01A1\u01A2\x05> \x02\u01A2\u01A3\x07' +
    '\t\x02\x02\u01A3\u01A4\x05> \x02\u01A4\u01A6\x03\x02\x02\x02\u01A5\u0197' +
    '\x03\x02\x02\x02\u01A5\u019D\x03\x02\x02\x02\u01A6C\x03\x02\x02\x02\u01A7' +
    '\u01A8\x07\x17\x02\x02\u01A8\u01A9\x07\x18\x02\x02\u01A9\u01AA\x050\x19' +
    '\x02\u01AA\u01AB\x07\x19\x02\x02\u01AB\u01AC\x05> \x02\u01AC\u01C5\x03' +
    '\x02\x02\x02\u01AD\u01AE\x07\x07\x02\x02\u01AE\u01AF\x05> \x02\u01AF\u01B0' +
    '\x07\x17\x02\x02\u01B0\u01B1\x07\x18\x02\x02\u01B1\u01B2\x050\x19\x02' +
    '\u01B2\u01B3\x07\x19\x02\x02\u01B3\u01B4\x071\x02\x02\u01B4\u01C5\x03' +
    '\x02\x02\x02\u01B5\u01B6\x07\v\x02\x02\u01B6\u01B8\x07\x18\x02\x02\u01B7' +
    '\u01B9\x050\x19\x02\u01B8\u01B7\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02' +
    '\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BC\x071\x02\x02\u01BB\u01BD' +
    '\x050\x19\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02' +
    '\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01C0\x071\x02\x02\u01BF\u01C1\x05' +
    '0\x19\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1' +
    '\u01C2\x03\x02\x02\x02\u01C2\u01C3\x07\x19\x02\x02\u01C3\u01C5\x05> \x02' +
    '\u01C4\u01A7\x03\x02\x02\x02\u01C4\u01AD\x03\x02\x02\x02\u01C4\u01B5\x03' +
    '\x02\x02\x02\u01C5E\x03\x02\x02\x02\u01C6\u01C7\x07\x06\x02\x02\u01C7' +
    '\u01D0\x071\x02\x02\u01C8\u01C9\x07\x03\x02\x02\u01C9\u01D0\x071\x02\x02' +
    '\u01CA\u01CC\x07\x0F\x02\x02\u01CB\u01CD\x050\x19\x02\u01CC\u01CB\x03' +
    '\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE' +
    '\u01D0\x071\x02\x02\u01CF\u01C6\x03\x02\x02\x02\u01CF\u01C8\x03\x02\x02' +
    '\x02\u01CF\u01CA\x03\x02\x02\x02\u01D0G\x03\x02\x02\x023MRWaepw\x7F\x83' +
    '\x8A\x94\x9C\xA5\xAF\xBA\xC6\xC8\xDA\xDC\xE8\xEA\xF9\xFB\u010D\u0114\u0118' +
    '\u011D\u012C\u013A\u013C\u0146\u0150\u0158\u015B\u0162\u016A\u0174\u017A' +
    '\u017D\u0185\u0190\u0193\u01A5\u01B8\u01BC\u01C0\u01C4\u01CC\u01CF'
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

export class Type_specifierContext extends ParserRuleContext {
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_type_specifier
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterType_specifier) {
      listener.enterType_specifier(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitType_specifier) {
      listener.exitType_specifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitType_specifier) {
      return visitor.visitType_specifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Translation_unitContext extends ParserRuleContext {
  public external_declaration(): External_declarationContext[]
  public external_declaration(i: number): External_declarationContext
  public external_declaration(
    i?: number
  ): External_declarationContext | External_declarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(External_declarationContext)
    } else {
      return this.getRuleContext(i, External_declarationContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_translation_unit
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterTranslation_unit) {
      listener.enterTranslation_unit(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitTranslation_unit) {
      listener.exitTranslation_unit(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitTranslation_unit) {
      return visitor.visitTranslation_unit(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class External_declarationContext extends ParserRuleContext {
  public function_definition(): Function_definitionContext | undefined {
    return this.tryGetRuleContext(0, Function_definitionContext)
  }
  public declaration(): DeclarationContext | undefined {
    return this.tryGetRuleContext(0, DeclarationContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_external_declaration
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterExternal_declaration) {
      listener.enterExternal_declaration(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitExternal_declaration) {
      listener.exitExternal_declaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitExternal_declaration) {
      return visitor.visitExternal_declaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends ParserRuleContext {
  public init_declarator(): Init_declaratorContext {
    return this.getRuleContext(0, Init_declaratorContext)
  }
  public Semi(): TerminalNode {
    return this.getToken(SourCParser.Semi, 0)
  }
  public type_specifier(): Type_specifierContext[]
  public type_specifier(i: number): Type_specifierContext
  public type_specifier(i?: number): Type_specifierContext | Type_specifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Type_specifierContext)
    } else {
      return this.getRuleContext(i, Type_specifierContext)
    }
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

export class Init_declaratorContext extends ParserRuleContext {
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
    return SourCParser.RULE_init_declarator
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterInit_declarator) {
      listener.enterInit_declarator(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitInit_declarator) {
      listener.exitInit_declarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitInit_declarator) {
      return visitor.visitInit_declarator(this)
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
  public type_name(): Type_nameContext[]
  public type_name(i: number): Type_nameContext
  public type_name(i?: number): Type_nameContext | Type_nameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Type_nameContext)
    } else {
      return this.getRuleContext(i, Type_nameContext)
    }
  }
  public LeftBracket(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftBracket, 0)
  }
  public RightBracket(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightBracket, 0)
  }
  public constant_expression(): Constant_expressionContext | undefined {
    return this.tryGetRuleContext(0, Constant_expressionContext)
  }
  public parameter_list(): Parameter_listContext[]
  public parameter_list(i: number): Parameter_listContext
  public parameter_list(i?: number): Parameter_listContext | Parameter_listContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Parameter_listContext)
    } else {
      return this.getRuleContext(i, Parameter_listContext)
    }
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

export class InitializerContext extends ParserRuleContext {
  public assignment_expression(): Assignment_expressionContext | undefined {
    return this.tryGetRuleContext(0, Assignment_expressionContext)
  }
  public LeftBrace(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftBrace, 0)
  }
  public initializer_list(): Initializer_listContext | undefined {
    return this.tryGetRuleContext(0, Initializer_listContext)
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

export class Initializer_listContext extends ParserRuleContext {
  public initializer(): InitializerContext {
    return this.getRuleContext(0, InitializerContext)
  }
  public initializer_list(): Initializer_listContext | undefined {
    return this.tryGetRuleContext(0, Initializer_listContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_initializer_list
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterInitializer_list) {
      listener.enterInitializer_list(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitInitializer_list) {
      listener.exitInitializer_list(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitInitializer_list) {
      return visitor.visitInitializer_list(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Assignment_expressionContext extends ParserRuleContext {
  public conditional_expression(): Conditional_expressionContext | undefined {
    return this.tryGetRuleContext(0, Conditional_expressionContext)
  }
  public unary_expression(): Unary_expressionContext | undefined {
    return this.tryGetRuleContext(0, Unary_expressionContext)
  }
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Assign, 0)
  }
  public assignment_expression(): Assignment_expressionContext | undefined {
    return this.tryGetRuleContext(0, Assignment_expressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_assignment_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterAssignment_expression) {
      listener.enterAssignment_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitAssignment_expression) {
      listener.exitAssignment_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitAssignment_expression) {
      return visitor.visitAssignment_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Conditional_expressionContext extends ParserRuleContext {
  public logical_or_expression(): Logical_or_expressionContext {
    return this.getRuleContext(0, Logical_or_expressionContext)
  }
  public Question(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Question, 0)
  }
  public conditional_expression(): Conditional_expressionContext[]
  public conditional_expression(i: number): Conditional_expressionContext
  public conditional_expression(
    i?: number
  ): Conditional_expressionContext | Conditional_expressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Conditional_expressionContext)
    } else {
      return this.getRuleContext(i, Conditional_expressionContext)
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
    return SourCParser.RULE_conditional_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterConditional_expression) {
      listener.enterConditional_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitConditional_expression) {
      listener.exitConditional_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitConditional_expression) {
      return visitor.visitConditional_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Logical_or_expressionContext extends ParserRuleContext {
  public logical_and_expression(): Logical_and_expressionContext {
    return this.getRuleContext(0, Logical_and_expressionContext)
  }
  public logical_or_expression(): Logical_or_expressionContext | undefined {
    return this.tryGetRuleContext(0, Logical_or_expressionContext)
  }
  public OrOr(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.OrOr, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_logical_or_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterLogical_or_expression) {
      listener.enterLogical_or_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitLogical_or_expression) {
      listener.exitLogical_or_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitLogical_or_expression) {
      return visitor.visitLogical_or_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Logical_and_expressionContext extends ParserRuleContext {
  public equality_expression(): Equality_expressionContext {
    return this.getRuleContext(0, Equality_expressionContext)
  }
  public logical_and_expression(): Logical_and_expressionContext | undefined {
    return this.tryGetRuleContext(0, Logical_and_expressionContext)
  }
  public AndAnd(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.AndAnd, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_logical_and_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterLogical_and_expression) {
      listener.enterLogical_and_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitLogical_and_expression) {
      listener.exitLogical_and_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitLogical_and_expression) {
      return visitor.visitLogical_and_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Equality_expressionContext extends ParserRuleContext {
  public relational_expression(): Relational_expressionContext {
    return this.getRuleContext(0, Relational_expressionContext)
  }
  public equality_expression(): Equality_expressionContext | undefined {
    return this.tryGetRuleContext(0, Equality_expressionContext)
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
    return SourCParser.RULE_equality_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterEquality_expression) {
      listener.enterEquality_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitEquality_expression) {
      listener.exitEquality_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitEquality_expression) {
      return visitor.visitEquality_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Relational_expressionContext extends ParserRuleContext {
  public additive_expression(): Additive_expressionContext {
    return this.getRuleContext(0, Additive_expressionContext)
  }
  public relational_expression(): Relational_expressionContext | undefined {
    return this.tryGetRuleContext(0, Relational_expressionContext)
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
    return SourCParser.RULE_relational_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterRelational_expression) {
      listener.enterRelational_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitRelational_expression) {
      listener.exitRelational_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitRelational_expression) {
      return visitor.visitRelational_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Additive_expressionContext extends ParserRuleContext {
  public multiplicative_expression(): Multiplicative_expressionContext {
    return this.getRuleContext(0, Multiplicative_expressionContext)
  }
  public additive_expression(): Additive_expressionContext | undefined {
    return this.tryGetRuleContext(0, Additive_expressionContext)
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
    return SourCParser.RULE_additive_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterAdditive_expression) {
      listener.enterAdditive_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitAdditive_expression) {
      listener.exitAdditive_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitAdditive_expression) {
      return visitor.visitAdditive_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Multiplicative_expressionContext extends ParserRuleContext {
  public cast_expression(): Cast_expressionContext {
    return this.getRuleContext(0, Cast_expressionContext)
  }
  public multiplicative_expression(): Multiplicative_expressionContext | undefined {
    return this.tryGetRuleContext(0, Multiplicative_expressionContext)
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
    return SourCParser.RULE_multiplicative_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterMultiplicative_expression) {
      listener.enterMultiplicative_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitMultiplicative_expression) {
      listener.exitMultiplicative_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitMultiplicative_expression) {
      return visitor.visitMultiplicative_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Cast_expressionContext extends ParserRuleContext {
  public unary_expression(): Unary_expressionContext {
    return this.getRuleContext(0, Unary_expressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_cast_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterCast_expression) {
      listener.enterCast_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitCast_expression) {
      listener.exitCast_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitCast_expression) {
      return visitor.visitCast_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Unary_expressionContext extends ParserRuleContext {
  public postfix_expression(): Postfix_expressionContext | undefined {
    return this.tryGetRuleContext(0, Postfix_expressionContext)
  }
  public PlusPlus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.PlusPlus, 0)
  }
  public unary_expression(): Unary_expressionContext | undefined {
    return this.tryGetRuleContext(0, Unary_expressionContext)
  }
  public MinusMinus(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.MinusMinus, 0)
  }
  public unary_operator(): Unary_operatorContext | undefined {
    return this.tryGetRuleContext(0, Unary_operatorContext)
  }
  public cast_expression(): Cast_expressionContext | undefined {
    return this.tryGetRuleContext(0, Cast_expressionContext)
  }
  public Sizeof(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Sizeof, 0)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.LeftParen, 0)
  }
  public sizeof_operands(): Sizeof_operandsContext | undefined {
    return this.tryGetRuleContext(0, Sizeof_operandsContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.RightParen, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_unary_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterUnary_expression) {
      listener.enterUnary_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitUnary_expression) {
      listener.exitUnary_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitUnary_expression) {
      return visitor.visitUnary_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Unary_operatorContext extends ParserRuleContext {
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
    return SourCParser.RULE_unary_operator
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterUnary_operator) {
      listener.enterUnary_operator(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitUnary_operator) {
      listener.exitUnary_operator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitUnary_operator) {
      return visitor.visitUnary_operator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Type_nameContext extends ParserRuleContext {
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
    return SourCParser.RULE_type_name
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterType_name) {
      listener.enterType_name(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitType_name) {
      listener.exitType_name(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitType_name) {
      return visitor.visitType_name(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Sizeof_operandsContext extends ParserRuleContext {
  public type_name(): Type_nameContext | undefined {
    return this.tryGetRuleContext(0, Type_nameContext)
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
    return SourCParser.RULE_sizeof_operands
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterSizeof_operands) {
      listener.enterSizeof_operands(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitSizeof_operands) {
      listener.exitSizeof_operands(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitSizeof_operands) {
      return visitor.visitSizeof_operands(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Postfix_expressionContext extends ParserRuleContext {
  public primary_expression(): Primary_expressionContext | undefined {
    return this.tryGetRuleContext(0, Primary_expressionContext)
  }
  public postfix_expression(): Postfix_expressionContext | undefined {
    return this.tryGetRuleContext(0, Postfix_expressionContext)
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
    return SourCParser.RULE_postfix_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterPostfix_expression) {
      listener.enterPostfix_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitPostfix_expression) {
      listener.exitPostfix_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitPostfix_expression) {
      return visitor.visitPostfix_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Primary_expressionContext extends ParserRuleContext {
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
    return SourCParser.RULE_primary_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterPrimary_expression) {
      listener.enterPrimary_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitPrimary_expression) {
      listener.exitPrimary_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitPrimary_expression) {
      return visitor.visitPrimary_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public assignment_expression(): Assignment_expressionContext {
    return this.getRuleContext(0, Assignment_expressionContext)
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

export class Constant_expressionContext extends ParserRuleContext {
  public conditional_expression(): Conditional_expressionContext {
    return this.getRuleContext(0, Conditional_expressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_constant_expression
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterConstant_expression) {
      listener.enterConstant_expression(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitConstant_expression) {
      listener.exitConstant_expression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitConstant_expression) {
      return visitor.visitConstant_expression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Function_definitionContext extends ParserRuleContext {
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser.Identifier, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(SourCParser.LeftParen, 0)
  }
  public RightParen(): TerminalNode {
    return this.getToken(SourCParser.RightParen, 0)
  }
  public compound_statement(): Compound_statementContext {
    return this.getRuleContext(0, Compound_statementContext)
  }
  public type_specifier(): Type_specifierContext[]
  public type_specifier(i: number): Type_specifierContext
  public type_specifier(i?: number): Type_specifierContext | Type_specifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Type_specifierContext)
    } else {
      return this.getRuleContext(i, Type_specifierContext)
    }
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  public parameter_list(): Parameter_listContext[]
  public parameter_list(i: number): Parameter_listContext
  public parameter_list(i?: number): Parameter_listContext | Parameter_listContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Parameter_listContext)
    } else {
      return this.getRuleContext(i, Parameter_listContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_function_definition
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterFunction_definition) {
      listener.enterFunction_definition(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitFunction_definition) {
      listener.exitFunction_definition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitFunction_definition) {
      return visitor.visitFunction_definition(this)
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

export class Parameter_listContext extends ParserRuleContext {
  public parameter_declaration(): Parameter_declarationContext {
    return this.getRuleContext(0, Parameter_declarationContext)
  }
  public parameter_list(): Parameter_listContext | undefined {
    return this.tryGetRuleContext(0, Parameter_listContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(SourCParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return SourCParser.RULE_parameter_list
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterParameter_list) {
      listener.enterParameter_list(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitParameter_list) {
      listener.exitParameter_list(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitParameter_list) {
      return visitor.visitParameter_list(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Parameter_declarationContext extends ParserRuleContext {
  public Identifier(): TerminalNode {
    return this.getToken(SourCParser.Identifier, 0)
  }
  public type_specifier(): Type_specifierContext[]
  public type_specifier(i: number): Type_specifierContext
  public type_specifier(i?: number): Type_specifierContext | Type_specifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Type_specifierContext)
    } else {
      return this.getRuleContext(i, Type_specifierContext)
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
    return SourCParser.RULE_parameter_declaration
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterParameter_declaration) {
      listener.enterParameter_declaration(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitParameter_declaration) {
      listener.exitParameter_declaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitParameter_declaration) {
      return visitor.visitParameter_declaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Compound_statementContext extends ParserRuleContext {
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
    return SourCParser.RULE_compound_statement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterCompound_statement) {
      listener.enterCompound_statement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitCompound_statement) {
      listener.exitCompound_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitCompound_statement) {
      return visitor.visitCompound_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public declaration(): DeclarationContext | undefined {
    return this.tryGetRuleContext(0, DeclarationContext)
  }
  public expression_statement(): Expression_statementContext | undefined {
    return this.tryGetRuleContext(0, Expression_statementContext)
  }
  public compound_statement(): Compound_statementContext | undefined {
    return this.tryGetRuleContext(0, Compound_statementContext)
  }
  public selection_statement(): Selection_statementContext | undefined {
    return this.tryGetRuleContext(0, Selection_statementContext)
  }
  public iteration_statement(): Iteration_statementContext | undefined {
    return this.tryGetRuleContext(0, Iteration_statementContext)
  }
  public jump_statement(): Jump_statementContext | undefined {
    return this.tryGetRuleContext(0, Jump_statementContext)
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

export class Expression_statementContext extends ParserRuleContext {
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
    return SourCParser.RULE_expression_statement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterExpression_statement) {
      listener.enterExpression_statement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitExpression_statement) {
      listener.exitExpression_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitExpression_statement) {
      return visitor.visitExpression_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Selection_statementContext extends ParserRuleContext {
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
    return SourCParser.RULE_selection_statement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterSelection_statement) {
      listener.enterSelection_statement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitSelection_statement) {
      listener.exitSelection_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitSelection_statement) {
      return visitor.visitSelection_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Iteration_statementContext extends ParserRuleContext {
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
    return SourCParser.RULE_iteration_statement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterIteration_statement) {
      listener.enterIteration_statement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitIteration_statement) {
      listener.exitIteration_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitIteration_statement) {
      return visitor.visitIteration_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class Jump_statementContext extends ParserRuleContext {
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
    return SourCParser.RULE_jump_statement
  }
  // @Override
  public enterRule(listener: SourCParserListener): void {
    if (listener.enterJump_statement) {
      listener.enterJump_statement(this)
    }
  }
  // @Override
  public exitRule(listener: SourCParserListener): void {
    if (listener.exitJump_statement) {
      listener.exitJump_statement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: SourCParserVisitor<Result>): Result {
    if (visitor.visitJump_statement) {
      return visitor.visitJump_statement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
