parser grammar SourCParser;
options { tokenVocab=SourCLexer; }

type_specifier:
    Void
    | Char
    | Short
    | Int
    | Long
    | Float
    | Double
    | Signed
    | Unsigned
    | struct_specifier
    ;

translation_unit: 
    external_declaration*
    ;

external_declaration:
    function_definition
    | declaration
    ;

// init_declarator is optional for struct declaration
// code like `int;` can be ignored bc it doesn't do anything
// code like `struct X { int id; };` is correct because it is sort of a typedef
declaration:
    type_specifier+ init_declarator? Semi 
    ;

init_declarator:
    declarator
    | declarator Assign initializer
    ;

declarator:
    Identifier // variables
    | pointer? Identifier // pointers
    | LeftParen Star Identifier RightParen LeftParen type_name_list? RightParen // function pointers
    | Identifier LeftBracket constant_expression? RightBracket // arrays
    | Identifier LeftParen parameter_list? RightParen // function prototypes
    ;

// for function pointers param list
type_name_list:
    type_name+ pointer?
    | type_name+ pointer? Comma type_name_list?
    ;

initializer:
    assignment_expression
    | LeftBrace initializer_list RightBrace // for struct and arrays initializing
    ;

initializer_list:
    initializer
    | initializer_list Comma initializer // for struct and arrays initializing
    ;


assignment_expression:
    conditional_expression // Resolves into tree of operators with identifers/constants as leaf
    | unary_expression Assign assignment_expression
    ;

conditional_expression:
    logical_or_expression
    | logical_or_expression Question conditional_expression Colon conditional_expression
    ;

logical_or_expression:
    logical_and_expression
    | logical_or_expression OrOr logical_and_expression
    ;

logical_and_expression:
    equality_expression
    | logical_and_expression AndAnd equality_expression
    ;

equality_expression:
    relational_expression
    | equality_expression Equal relational_expression
    | equality_expression NotEqual relational_expression
    ;

relational_expression:
    additive_expression
    | relational_expression Less additive_expression
    | relational_expression Greater additive_expression
    | relational_expression LessEqual additive_expression
    | relational_expression GreaterEqual additive_expression
    ;

additive_expression:
    multiplicative_expression
    | additive_expression Plus multiplicative_expression
    | additive_expression Minus multiplicative_expression
    ;

multiplicative_expression:
    cast_expression // Resolves into tree of operators involving unary operators like ++,--
    | multiplicative_expression Star cast_expression
    | multiplicative_expression Div cast_expression
    | multiplicative_expression Mod cast_expression
    ;

cast_expression:
    unary_expression
//    | ( <type-name> ) <cast-expression>
    ;

unary_expression:
    postfix_expression
    | PlusPlus unary_expression
    | MinusMinus unary_expression
    | unary_operator cast_expression
    | Sizeof LeftParen sizeof_operands RightParen // Simplified to only primitive types
    ;

unary_operator: And | Star | Plus | Minus | Not;

type_name:
    Char
    | Short
    | Int
    | Long
    | Float
    | Double
    ;

sizeof_operands:
    pointer? type_name
    | pointer? Identifier
    | And Identifier
    ;

postfix_expression:
    primary_expression
    | postfix_expression LeftBracket expression RightBracket // array access
    | postfix_expression LeftParen expression* RightParen // function call
    | postfix_expression Dot Identifier // struct access
    | postfix_expression Arrow Identifier // struct access
    | postfix_expression PlusPlus
    | postfix_expression MinusMinus
    ;

primary_expression:
    Identifier
    | Constant
    | StringLiteral
    | LeftParen expression RightParen // support () operator precedence
    ;

expression:
    assignment_expression
    | expression Comma assignment_expression
    ;

constant_expression:
    conditional_expression
    ;

function_definition:
    type_specifier+ pointer? Identifier LeftParen parameter_list* RightParen compound_statement
    ;

pointer:
    Star pointer?
    ;

parameter_list:
    parameter_declaration
    | parameter_list Comma parameter_declaration
    ;

parameter_declaration:
    type_specifier+ pointer? Identifier
    ;

compound_statement:
    LeftBrace statement* RightBrace
    ;

statement:
    declaration
    | expression_statement
    | compound_statement
    | selection_statement
    | iteration_statement
    | jump_statement
    ;

expression_statement:
    expression? Semi
    ;

selection_statement:
    If LeftParen expression RightParen statement
    | If LeftParen expression RightParen statement Else statement
    ;

iteration_statement:
    While LeftParen expression RightParen statement
    | Do statement While LeftParen expression RightParen Semi
    | For LeftParen expression? Semi expression? Semi expression? RightParen statement
    ;

jump_statement:
    Continue Semi
    | Break Semi
    | Return expression? Semi
    ;

struct_specifier:
    Struct Identifier
    | Struct Identifier LeftBrace struct_declaration+ RightBrace
    ;

struct_declaration:
    type_specifier+ declarator Semi
    ;
