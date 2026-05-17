import fs from 'fs';
import antlr4 from 'antlr4';
import TableroLexer from './generated/TableroLexer.js';
import TableroParser from './generated/TableroParser.js';

const archivoEntrada = process.argv[2] || 'input.txt';

const input = fs.readFileSync(archivoEntrada, 'utf-8');
const chars = new antlr4.CharStream(input);


const lexer = new TableroLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

console.log("=== TABLA DE LEXEMAS Y TOKENS ===");
console.log("LEXEMA".padEnd(20) + "Token");
console.log("-".repeat(35));

tokens.fill(); // Cargar todos los tokens
tokens.tokens.forEach(t => {
    const tokenName = TableroLexer.symbolicNames[t.type] ||
                  TableroLexer.literalNames[t.type] ||
                  t.type;;
    console.log(`${t.text.padEnd(20)}${tokenName}`);
});


const parser = new TableroParser(tokens);
parser.removeErrorListeners(); // Eliminar los listeners de error por defecto
parser.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg, e){
        console.error(`Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
        process.exit(1); // Salir del programa en caso de error de sintaxis
    }
});

const tree = parser.programa();
console.log("\n=== ÁRBOL DE ANÁLISIS SINTÁCTICO ===");
console.log(tree.toStringTree(parser.ruleNames));

console.log("\n=== INTERPRETACION (SALIDA JS) ===");
interpretar(tree);

function interpretar(ctx) {
    if(ctx.IDENTIFICADOR && ctx.getChildCount() > 0) {
        const nombreTablero = ctx.IDENTIFICADOR().getText();
        console.log(`console.log("Ejecutando Tablero: ${nombreTablero}");`);
    }
}

console.log("\nAnalisis completado exitosamente.");


