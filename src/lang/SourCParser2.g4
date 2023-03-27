parser grammar SourCParser2;
options { tokenVocab=SourCLexer; }

type:
    Void
    | Char
    | Short
    | Int
    | Long
    | Float
    | Double
    ;

typeNameList:
    (typeDef Comma)* typeDef
    ;

program:
    (functionDefinition | declaration Semi)*
    ;

functionDefinition:
    typeDef Identifier LeftParen paramLs? RightParen compoundStatement
    ;

paramLs:
    (pLs+=param Comma)* pLs+=param
    ;

param:
    typeDef Identifier
    ;

compoundStatement:
    LeftBrace stmt* RightBrace
    ;

stmt:
    expr Semi # ExprStmt
    | declaration Semi # DeclrStmt 
    | assignment Semi # AssgnStmt
    | compoundStatement # CmpdStmt
    | If LeftParen expr RightParen compoundStatement (Else compoundStatement) # IfElseStmt
    | While LeftParen expr RightParen compoundStatement # WhileStmt
    | For LeftParen init=expr? Semi test=expr? Semi incr=expr? compoundStatement # ForStmt
    | Return expr? Semi # ReturnExpr
    | Break Semi # BreakStmt
    | Continue Semi # ContinueStmt
    ;

expr:
    addressableOperands suffix=(PlusPlus | MinusMinus) # SuffixIncr
    | Identifier LeftParen seqExprLs? RightParen # FunctionCall
    | prefix=(PlusPlus | MinusMinus) addressableOperands # PrefixIncr
    | unop=(Not | Minus) expr               # Unop
    | LeftParen type RightParen expr        # Cast
    | Star expr                             # Dereference
    | And expr                              # AddressOf
    | Sizeof LeftParen sizeOfOperands RightParen  # SizeofExpr
    | expr op=(Star | Div | Mod) expr       # Mult
    | expr op=( Plus | Minus ) expr         # Add
    | expr op=(Greater | GreaterEqual | Less | LessEqual) expr # RelOpr
    | expr op=( Equal | NotEqual ) expr     # Equality
    | expr op=AndAnd expr                   # And
    | expr op=OrOr expr                     # Or
    | '(' expr ')'                          # Paren
    | cond=expr Question cons=expr Colon alt=expr         # Ternary
    | primaryIdentifier                     # PriIdentifier
    ;

primaryIdentifier:
    addressableOperands
    | Constant
    | StringLiteral
    ;

sizeOfOperands:
    Star* type
    | Star* Identifier
    | And Identifier
    | Struct Identifier
    ;

declaration:
    typeDef Identifier (Assign (expr | exprLs))? # VariableDecl
    | typeDef Identifier LeftBracket expr? RightBracket (Assign exprLs)? # ArrayDecl
    | typeDef LeftParen Star Identifier RightParen LeftParen paramLs? RightParen # FxPointerDecl
    | Struct Identifier LeftBrace (declaration Semi)+ RightBrace # StructDecl
    ;

typeDef:
    (Unsigned)? type Star*
    | Struct Identifier Star*
    ;

exprLs:
    LeftBrace seqExprLs RightBrace
    ;

seqExprLs:
    (eLs+=expr Comma)* eLs+=expr
    ;

assignment:
    (Star)* Identifier Assign (expr | exprLs)
    ;

addressableOperands:
    Identifier LeftBracket expr RightBracket # ArraySubscript
    | Identifier Dot Identifier             # StructAccess
    | Identifier Arrow Identifier           # StructAccessThruPointer
    | Identifier                            # AtomIdentifier
    ;
