grammar Tablero;

//gramatica
programa : 'tablero' IDENTIFICADOR '{' elemento* '}'  EOF;
 elemento :  fuente
            |metrica
            |grafico
            |filtro
            |alerta
            ;
fuente : 'fuente' IDENTIFICADOR 'tipo' tipo_fuente 'ruta' CADENA ';';
tipo_fuente : 'csv' | 'json' | 'sql';
metrica : 'metrica' IDENTIFICADOR '=' agregacion '('campo')'';';
agregacion : 'suma' | 'promedio' | 'maximo' | 'minimo' | 'contar';
grafico : 'grafico' IDENTIFICADOR '{' 'tipo' '=' tipo_grafico ';' 'usar' '=' IDENTIFICADOR ';' '}';
tipo_grafico : 'barras' | 'lineas' | 'torta' | 'tabla';
filtro : 'filtro' campo OPERADOR valor ';';
alerta : 'alerta' 'si' IDENTIFICADOR  OPERADOR valor 'entonces' CADENA ';';
campo : IDENTIFICADOR ('.' IDENTIFICADOR)*;
valor : CADENA | NUMERO | BOOLEANO;

//lexemas
OPERADOR : '>' | '<' | '>=' | '<=' | '==' | '!=';
BOOLEANO : 'true' | 'false';
NUMERO : [0-9]+ ('.' [0-9]+)?;
CADENA : '"' (~["])* '"';
IDENTIFICADOR : [a-zA-Z_][a-zA-Z0-9_]*;
WS : [ \t\r\n]+ -> skip;