/** C 2011 grammar built from the C11 Spec */
grammar C;

primaryExpression:
	Identifier
	| Constant
	| StringLiteral+
	| '(' expression ')';

genericAssocList: genericAssociation (',' genericAssociation)*;

genericAssociation: (typeName | 'default') ':' assignmentExpression;

postfixExpression:
	(
		primaryExpression
		| '__extension__'? '(' typeName ')' '{' initializerList ','? '}'
	) (
		'[' expression ']'
		| '(' argumentExpressionList? ')'
		| ('.' | '->') Identifier
		| ('++' | '--')
	)*;

argumentExpressionList:
	assignmentExpression (',' assignmentExpression)*;

unaryExpression:
	('++' | '--' | 'sizeof')* (
		postfixExpression
		| unaryOperator castExpression
		| ('sizeof' | '_Alignof') '(' typeName ')'
		| '&&' Identifier // GCC extension address of label
	);

unaryOperator: '&' | '*' | '+' | '-' | '~' | '!';

castExpression:
	'__extension__'? '(' typeName ')' castExpression
	| unaryExpression
	| DigitSequence; // for

multiplicativeExpression:
	castExpression (('*' | '/' | '%') castExpression)*;

additiveExpression:
	multiplicativeExpression (
		('+' | '-') multiplicativeExpression
	)*;

shiftExpression:
	additiveExpression (('<<' | '>>') additiveExpression)*;

relationalExpression:
	shiftExpression (('<' | '>' | '<=' | '>=') shiftExpression)*;

equalityExpression:
	relationalExpression (('==' | '!=') relationalExpression)*;

andExpression: equalityExpression ( '&' equalityExpression)*;

exclusiveOrExpression: andExpression ('^' andExpression)*;

inclusiveOrExpression:
	exclusiveOrExpression ('|' exclusiveOrExpression)*;

logicalAndExpression:
	inclusiveOrExpression ('&&' inclusiveOrExpression)*;

logicalOrExpression:
	logicalAndExpression ('||' logicalAndExpression)*;

conditionalExpression:
	logicalOrExpression (
		'?' expression ':' conditionalExpression
	)?;

assignmentExpression:
	conditionalExpression // ternary operator
	| unaryExpression assignmentOperator assignmentExpression
	| DigitSequence; // for

assignmentOperator: '=' | '*=' | '/=' | '%=' | '+=' | '-=';

/* int x, y, z; */
expression: assignmentExpression (',' assignmentExpression)*;

constantExpression: conditionalExpression;

declaration:
	declarationSpecifiers initDeclaratorList? ';'
	| staticAssertDeclaration;

declarationSpecifiers: declarationSpecifier+;

declarationSpecifiers2: declarationSpecifier+;

declarationSpecifier:
	storageClassSpecifier
	| typeSpecifier
	| typeQualifier
	| functionSpecifier
	| alignmentSpecifier;

initDeclaratorList: initDeclarator (',' initDeclarator)*;

initDeclarator: declarator ('=' initializer)?;

storageClassSpecifier:
	'typedef'
	| 'extern'
	| 'static'
	| '_Thread_local'
	| 'auto'
	| 'register';

typeSpecifier: (
		'void'
		| 'char'
		| 'short'
		| 'int'
		| 'long'
		| 'float'
		| 'double'
		| 'signed'
		| 'unsigned'
		| '_Bool'
		| '_Complex'
		| '__m128'
		| '__m128d'
		| '__m128i'
	)
	| '__extension__' '(' ('__m128' | '__m128d' | '__m128i') ')'
	| atomicTypeSpecifier
	| structOrUnionSpecifier
	| enumSpecifier
	| typedefName
	| '__typeof__' '(' constantExpression ')'; // GCC extension

structOrUnionSpecifier:
	structOrUnion Identifier? '{' structDeclarationList '}'
	| structOrUnion Identifier;

structOrUnion: 'struct' | 'union';

structDeclarationList: structDeclaration+;

structDeclaration:
	// The first two rules have priority order and cannot be simplified to one expression.
	specifierQualifierList structDeclaratorList ';'
	| specifierQualifierList ';'
	| staticAssertDeclaration;

specifierQualifierList: (typeSpecifier | typeQualifier) specifierQualifierList?;

structDeclaratorList: structDeclarator (',' structDeclarator)*;

structDeclarator:
	declarator
	| declarator? ':' constantExpression;

enumSpecifier:
	'enum' Identifier? '{' enumeratorList ','? '}'
	| 'enum' Identifier;

enumeratorList: enumerator (',' enumerator)*;

enumerator: enumerationConstant ('=' constantExpression)?;

enumerationConstant: Identifier;

atomicTypeSpecifier: '_Atomic' '(' typeName ')';

typeQualifier: 'const' | 'restrict' | 'volatile' | '_Atomic';

functionSpecifier: (
		'inline'
		| '_Noreturn'
		| '__inline__' // GCC extension
		| '__stdcall'
	)
	| gccAttributeSpecifier
	| '__declspec' '(' Identifier ')';

alignmentSpecifier:
	'_Alignas' '(' (typeName | constantExpression) ')';

declarator: pointer? directDeclarator gccDeclaratorExtension*;

directDeclarator:
	Identifier
	| '(' declarator ')'
	| directDeclarator '[' typeQualifierList? assignmentExpression? ']'
	| directDeclarator '[' 'static' typeQualifierList? assignmentExpression ']'
	| directDeclarator '[' typeQualifierList 'static' assignmentExpression ']'
	| directDeclarator '[' typeQualifierList? '*' ']'
	| directDeclarator '(' parameterTypeList ')'
	| directDeclarator '(' identifierList? ')'
	| Identifier ':' DigitSequence // bit field
	| vcSpecificModifer Identifier // Visual C Extension
	| '(' vcSpecificModifer declarator ')'; // Visual C Extension

vcSpecificModifer: (
		'__cdecl'
		| '__clrcall'
		| '__stdcall'
		| '__fastcall'
		| '__thiscall'
		| '__vectorcall'
	);

gccDeclaratorExtension:
	'__asm' '(' StringLiteral+ ')'
	| gccAttributeSpecifier;

gccAttributeSpecifier:
	'__attribute__' '(' '(' gccAttributeList ')' ')';

gccAttributeList: gccAttribute? (',' gccAttribute?)*;

gccAttribute:
	~(
		','
		| '('
		| ')'
	) // relaxed def for "identifier or reserved word"
	('(' argumentExpressionList? ')')?;

nestedParenthesesBlock: (
		~('(' | ')')
		| '(' nestedParenthesesBlock ')'
	)*;

pointer: (('*' | '^') typeQualifierList?)+; // ^ - Blocks language extension

typeQualifierList: typeQualifier+;

parameterTypeList: parameterList (',' '...')?;

parameterList: parameterDeclaration (',' parameterDeclaration)*;

parameterDeclaration:
	declarationSpecifiers declarator
	| declarationSpecifiers2 abstractDeclarator?;

identifierList: Identifier (',' Identifier)*;

typeName: specifierQualifierList abstractDeclarator?;

abstractDeclarator:
	pointer
	| pointer? directAbstractDeclarator gccDeclaratorExtension*;

directAbstractDeclarator:
	'(' abstractDeclarator ')' gccDeclaratorExtension*
	| '[' typeQualifierList? assignmentExpression? ']'
	| '[' 'static' typeQualifierList? assignmentExpression ']'
	| '[' typeQualifierList 'static' assignmentExpression ']'
	| '[' '*' ']'
	| '(' parameterTypeList? ')' gccDeclaratorExtension*
	| directAbstractDeclarator '[' typeQualifierList? assignmentExpression? ']'
	| directAbstractDeclarator '[' 'static' typeQualifierList? assignmentExpression ']'
	| directAbstractDeclarator '[' typeQualifierList 'static' assignmentExpression ']'
	| directAbstractDeclarator '[' '*' ']'
	| directAbstractDeclarator '(' parameterTypeList? ')' gccDeclaratorExtension*;

typedefName: Identifier;

initializer:
	assignmentExpression
	| '{' initializerList ','? '}';

initializerList:
	designation? initializer (',' designation? initializer)*;

designation: designatorList '=';

designatorList: designator+;

designator: '[' constantExpression ']' | '.' Identifier;

staticAssertDeclaration:
	'_Static_assert' '(' constantExpression ',' StringLiteral+ ')' ';';

statement:
	| compoundStatement // familar block construct in other prog. lang.
	| expressionStatement
	| selectionStatement // if/switch
	| iterationStatement // while/do-while/for
	| jumpStatement; // goto/continue/break/return - may take out goto

compoundStatement: '{' blockItemList? '}';

blockItemList: blockItem+;

blockItem: statement | declaration;

// C supports 'stray' semicolons that don't do anything
expressionStatement: expression? ';';

selectionStatement:
	'if' '(' expression ')' statement ('else' statement)?;

// reach goal: 	| Do statement While '(' expression ')' ';'
iterationStatement:
	While '(' expression ')' statement
	| For '(' forCondition ')' statement;

// | 'for' '(' expression? ';' expression? ';' forUpdate? ')' statement | For '(' declaration
// expression? ';' expression? ')' statement

forCondition: (forDeclaration | expression?) ';' forExpression? ';' forExpression?;

forDeclaration: declarationSpecifiers initDeclaratorList?;

forExpression: assignmentExpression (',' assignmentExpression)*;

jumpStatement: ( | ('continue' | 'break') | 'return' expression?) ';';

compilationUnit: translationUnit? EOF;

translationUnit: externalDeclaration+;

externalDeclaration:
	functionDefinition
	| declaration
	| ';'; // stray ;

functionDefinition:
	declarationSpecifiers? declarator declarationList? compoundStatement;

declarationList: declaration+;

/*
 * List of keywords and symbols used in the syntax.
 */

Break: 'break';
Case: 'case';
Char: 'char';
Const: 'const';
Continue: 'continue';
Default: 'default';
Do: 'do';
Double: 'double';
Else: 'else';
Enum: 'enum';
Extern: 'extern';
Float: 'float';
For: 'for';
If: 'if';
Inline: 'inline';
Int: 'int';
Long: 'long';
Return: 'return';
Short: 'short';
Signed: 'signed';
Sizeof: 'sizeof';
Static: 'static';
Struct: 'struct';
Switch: 'switch';
Typedef: 'typedef';
Union: 'union';
Unsigned: 'unsigned';
Void: 'void';
Volatile: 'volatile';
While: 'while';

LeftParen: '(';
RightParen: ')';
LeftBracket: '[';
RightBracket: ']';
LeftBrace: '{';
RightBrace: '}';

Less: '<';
LessEqual: '<=';
Greater: '>';
GreaterEqual: '>=';
LeftShift: '<<';
RightShift: '>>';

Plus: '+';
PlusPlus: '++';
Minus: '-';
MinusMinus: '--';
Star: '*';
Div: '/';
Mod: '%';

And: '&';
Or: '|';
AndAnd: '&&';
OrOr: '||';
Caret: '^';
Not: '!';
Tilde: '~';

Question: '?';
Colon: ':';
Semi: ';';
Comma: ',';

Assign: '=';
// '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|='
StarAssign: '*=';
DivAssign: '/=';
ModAssign: '%=';
PlusAssign: '+=';
MinusAssign: '-=';
LeftShiftAssign: '<<=';
RightShiftAssign: '>>=';
AndAssign: '&=';
XorAssign: '^=';
OrAssign: '|=';

Equal: '==';
NotEqual: '!=';

Arrow: '->';
Dot: '.';
Ellipsis: '...';

/*
 * List of symbols used to parse ints, variable names. Also helps to parse declarations like 0xffff
 * and 0b1010.
 */

Identifier: IdentifierNondigit ( IdentifierNondigit | Digit)*;

fragment IdentifierNondigit:
	Nondigit
	| UniversalCharacterName; //|   // other implementation-defined characters...

fragment Nondigit: [a-zA-Z_];

fragment Digit: [0-9];

fragment UniversalCharacterName:
	'\\u' HexQuad
	| '\\U' HexQuad HexQuad;

fragment HexQuad:
	HexadecimalDigit HexadecimalDigit HexadecimalDigit HexadecimalDigit;

Constant:
	IntegerConstant
	| FloatingConstant
	//|   EnumerationConstant
	| CharacterConstant;

fragment IntegerConstant:
	DecimalConstant IntegerSuffix?
	| OctalConstant IntegerSuffix?
	| HexadecimalConstant IntegerSuffix?
	| BinaryConstant;

fragment BinaryConstant: '0' [bB] [0-1]+;

fragment DecimalConstant: NonzeroDigit Digit*;

fragment OctalConstant: '0' OctalDigit*;

fragment HexadecimalConstant:
	HexadecimalPrefix HexadecimalDigit+;

fragment HexadecimalPrefix: '0' [xX];

fragment NonzeroDigit: [1-9];

fragment OctalDigit: [0-7];

fragment HexadecimalDigit: [0-9a-fA-F];

fragment IntegerSuffix:
	UnsignedSuffix LongSuffix?
	| UnsignedSuffix LongLongSuffix
	| LongSuffix UnsignedSuffix?
	| LongLongSuffix UnsignedSuffix?;

fragment UnsignedSuffix: [uU];

fragment LongSuffix: [lL];

fragment LongLongSuffix: 'll' | 'LL';

fragment FloatingConstant:
	DecimalFloatingConstant
	| HexadecimalFloatingConstant;

fragment DecimalFloatingConstant:
	FractionalConstant ExponentPart? FloatingSuffix?
	| DigitSequence ExponentPart FloatingSuffix?;

fragment HexadecimalFloatingConstant:
	HexadecimalPrefix (
		HexadecimalFractionalConstant
		| HexadecimalDigitSequence
	) BinaryExponentPart FloatingSuffix?;

fragment FractionalConstant:
	DigitSequence? '.' DigitSequence
	| DigitSequence '.';

fragment ExponentPart: [eE] Sign? DigitSequence;

fragment Sign: [+-];

DigitSequence: Digit+;

fragment HexadecimalFractionalConstant:
	HexadecimalDigitSequence? '.' HexadecimalDigitSequence
	| HexadecimalDigitSequence '.';

fragment BinaryExponentPart: [pP] Sign? DigitSequence;

fragment HexadecimalDigitSequence: HexadecimalDigit+;

fragment FloatingSuffix: [flFL];

fragment CharacterConstant:
	'\'' CCharSequence '\''
	| 'L\'' CCharSequence '\''
	| 'u\'' CCharSequence '\''
	| 'U\'' CCharSequence '\'';

fragment CCharSequence: CChar+;

fragment CChar: ~['\\\r\n] | EscapeSequence;

fragment EscapeSequence:
	SimpleEscapeSequence
	| OctalEscapeSequence
	| HexadecimalEscapeSequence
	| UniversalCharacterName;

fragment SimpleEscapeSequence: '\\' ['"?abfnrtv\\];

fragment OctalEscapeSequence:
	'\\' OctalDigit OctalDigit? OctalDigit?;

fragment HexadecimalEscapeSequence: '\\x' HexadecimalDigit+;

StringLiteral: EncodingPrefix? '"' SCharSequence? '"';

fragment EncodingPrefix: 'u8' | 'u' | 'U' | 'L';

fragment SCharSequence: SChar+;

fragment SChar:
	~["\\\r\n]
	| EscapeSequence
	| '\\\n' // Added line
	| '\\\r\n'; // Added line

ComplexDefine: '#' Whitespace? 'define' ~[#\r\n]* -> skip;

IncludeDirective:
	'#' Whitespace? 'include' Whitespace? (
		('"' ~[\r\n]* '"')
		| ('<' ~[\r\n]* '>')
	) Whitespace? Newline -> skip;

// ignore the following asm blocks:
/*
 asm { mfspr x, 286; }
 */
AsmBlock: 'asm' ~'{'* '{' ~'}'* '}' -> skip;

// ignore the lines generated by c preprocessor sample line : '#line 1 "/home/dm/files/dk1.h" 1'
LineAfterPreprocessing: '#line' Whitespace* ~[\r\n]* -> skip;

LineDirective:
	'#' Whitespace? DecimalConstant Whitespace? StringLiteral ~[\r\n]* -> skip;

PragmaDirective:
	'#' Whitespace? 'pragma' Whitespace ~[\r\n]* -> skip;

Whitespace: [ \t]+ -> skip;

Newline: ( '\r' '\n'? | '\n') -> skip;

BlockComment: '/*' .*? '*/' -> skip;

LineComment: '//' ~[\r\n]* -> skip;