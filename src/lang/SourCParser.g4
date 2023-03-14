parser grammar SourCParser;
options { tokenVocab=SourCLexer; }

typeSpecifier:
    Void
    | Char
    | Short
    | Int
    | Long
    | Float
    | Double
    | Signed
    | Unsigned
    | structSpecifier
    ;

translationUnit: 
    externalDeclaration*
    ;

externalDeclaration:
    functionDefinition
    | declaration
    ;

// initDeclarator is optional for struct declaration
// code like `int;` can be ignored bc it doesn't do anything
// code like `struct X { int id; };` is correct because it is sort of a typedef
declaration:
    typeSpecifier+ initDeclarator? Semi 
    ;

initDeclarator:
    declarator
    | declarator Assign initializer
    ;

declarator:
    pointer? var=Identifier // Variables
    | LeftParen Star funcPointer=Identifier RightParen LeftParen typeNameList? RightParen // FunctionPointers
    | array=Identifier LeftBracket constantExpression? RightBracket // Arrays
    | funcProto=Identifier LeftParen parameterList? RightParen // FunctionPrototypes
    ;

// for function pointers param list
typeNameList:
    typeName+ pointer?
    | typeName+ pointer? Comma typeNameList?
    ;

initializer:
    assignmentExpression
    | LeftBrace initializerList RightBrace // for struct and arrays initializing
    ;

initializerList:
    initializer
    | initializerList Comma initializer // for struct and arrays initializing
    ;

assignmentExpression:
    conditionalExpression // Resolves into tree of operators with identifers/constants as leaf
    | unaryExpression Assign assignmentExpression
    ;

conditionalExpression:
    logicalOrExpression
    | logicalOrExpression Question cons=conditionalExpression Colon alt=conditionalExpression
    ;

logicalOrExpression:
    logicalAndExpression
    | logicalOrExpression OrOr logicalAndExpression
    ;

logicalAndExpression:
    equalityExpression
    | logicalAndExpression AndAnd equalityExpression
    ;

equalityExpression:
    relationalExpression
    | equalityExpression Equal relationalExpression
    | equalityExpression NotEqual relationalExpression
    ;

relationalExpression:
    additiveExpression
    | relationalExpression Less additiveExpression
    | relationalExpression Greater additiveExpression
    | relationalExpression LessEqual additiveExpression
    | relationalExpression GreaterEqual additiveExpression
    ;

additiveExpression:
    multiplicativeExpression
    | additiveExpression Plus multiplicativeExpression
    | additiveExpression Minus multiplicativeExpression
    ;

multiplicativeExpression:
    castExpression // Resolves into tree of operators involving unary operators like ++,--
    | multiplicativeExpression Star castExpression
    | multiplicativeExpression Div castExpression
    | multiplicativeExpression Mod castExpression
    ;

castExpression:
    unaryExpression
    | LeftParen typeName RightParen castExpression
    ;

unaryExpression:
    postfixExpression
    | PlusPlus unaryExpression
    | MinusMinus unaryExpression
    | unaryOperator castExpression
    | Sizeof LeftParen sizeofOperands RightParen // Simplified to only primitive types
    ;

unaryOperator: And | Star | Plus | Minus | Not;

typeName:
    Char
    | Short
    | Int
    | Long
    | Float
    | Double
    ;

sizeofOperands:
    pointer? typeName
    | pointer? Identifier
    | And Identifier
    ;

postfixExpression:
    primaryExpression
    | postfixExpression LeftBracket expression RightBracket // array access
    | postfixExpression LeftParen functionCallArg? RightParen // function call
    | postfixExpression Dot Identifier // struct access
    | postfixExpression Arrow Identifier // struct access
    | postfixExpression PlusPlus
    | postfixExpression MinusMinus
    ;

functionCallArg:
    assignmentExpression
    | functionCallArg Comma assignmentExpression
    ;

primaryExpression:
    Identifier
    | Constant
    | StringLiteral
    | LeftParen expression RightParen // support () operator precedence
    ;

expression:
    assignmentExpression
    ;

constantExpression:
    conditionalExpression
    ;

functionDefinition:
    typeSpecifier+ pointer? Identifier LeftParen parameterList? RightParen compoundStatement
    ;

pointer:
    Star pointer?
    ;

parameterList:
    parameterDeclaration
    | parameterList Comma parameterDeclaration
    ;

parameterDeclaration:
    typeSpecifier+ pointer? Identifier
    ;

compoundStatement:
    LeftBrace statement* RightBrace
    ;

statement:
    declaration
    | expressionStatement
    | compoundStatement
    | selectionStatement
    | iterationStatement
    | jumpStatement
    ;

expressionStatement:
    expression? Semi
    ;

selectionStatement:
    If LeftParen expression RightParen cons=statement (Else alt=statement)?
    ;

iterationStatement:
    While LeftParen expression RightParen statement
    | Do statement While LeftParen expression RightParen Semi
    | For LeftParen init=expression? Semi test=expression? Semi step=expression? RightParen statement
    ;

jumpStatement:
    Continue Semi
    | Break Semi
    | Return expression? Semi
    ;

structSpecifier:
    Struct Identifier
    | Struct Identifier LeftBrace structDeclaration+ RightBrace
    ;

structDeclaration:
    typeSpecifier+ declarator Semi
    ;
