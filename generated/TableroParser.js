// Generated from Tablero.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TableroListener from './TableroListener.js';
import TableroVisitor from './TableroVisitor.js';

const serializedATN = [4,1,36,105,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
0,1,0,5,0,29,8,0,10,0,12,0,32,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,42,
8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,
1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,5,10,98,8,10,10,10,12,10,101,9,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,
12,14,16,18,20,22,0,4,1,0,8,10,1,0,15,19,1,0,22,25,1,0,32,34,98,0,24,1,0,
0,0,2,41,1,0,0,0,4,43,1,0,0,0,6,51,1,0,0,0,8,53,1,0,0,0,10,62,1,0,0,0,12,
64,1,0,0,0,14,77,1,0,0,0,16,79,1,0,0,0,18,85,1,0,0,0,20,94,1,0,0,0,22,102,
1,0,0,0,24,25,5,1,0,0,25,26,5,35,0,0,26,30,5,2,0,0,27,29,3,2,1,0,28,27,1,
0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,33,1,0,0,0,32,30,1,0,
0,0,33,34,5,3,0,0,34,35,5,0,0,1,35,1,1,0,0,0,36,42,3,4,2,0,37,42,3,8,4,0,
38,42,3,12,6,0,39,42,3,16,8,0,40,42,3,18,9,0,41,36,1,0,0,0,41,37,1,0,0,0,
41,38,1,0,0,0,41,39,1,0,0,0,41,40,1,0,0,0,42,3,1,0,0,0,43,44,5,4,0,0,44,
45,5,35,0,0,45,46,5,5,0,0,46,47,3,6,3,0,47,48,5,6,0,0,48,49,5,34,0,0,49,
50,5,7,0,0,50,5,1,0,0,0,51,52,7,0,0,0,52,7,1,0,0,0,53,54,5,11,0,0,54,55,
5,35,0,0,55,56,5,12,0,0,56,57,3,10,5,0,57,58,5,13,0,0,58,59,3,20,10,0,59,
60,5,14,0,0,60,61,5,7,0,0,61,9,1,0,0,0,62,63,7,1,0,0,63,11,1,0,0,0,64,65,
5,20,0,0,65,66,5,35,0,0,66,67,5,2,0,0,67,68,5,5,0,0,68,69,5,12,0,0,69,70,
3,14,7,0,70,71,5,7,0,0,71,72,5,21,0,0,72,73,5,12,0,0,73,74,5,35,0,0,74,75,
5,7,0,0,75,76,5,3,0,0,76,13,1,0,0,0,77,78,7,2,0,0,78,15,1,0,0,0,79,80,5,
26,0,0,80,81,3,20,10,0,81,82,5,31,0,0,82,83,3,22,11,0,83,84,5,7,0,0,84,17,
1,0,0,0,85,86,5,27,0,0,86,87,5,28,0,0,87,88,5,35,0,0,88,89,5,31,0,0,89,90,
3,22,11,0,90,91,5,29,0,0,91,92,5,34,0,0,92,93,5,7,0,0,93,19,1,0,0,0,94,99,
5,35,0,0,95,96,5,30,0,0,96,98,5,35,0,0,97,95,1,0,0,0,98,101,1,0,0,0,99,97,
1,0,0,0,99,100,1,0,0,0,100,21,1,0,0,0,101,99,1,0,0,0,102,103,7,3,0,0,103,
23,1,0,0,0,3,30,41,99];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TableroParser extends antlr4.Parser {

    static grammarFileName = "Tablero.g4";
    static literalNames = [ null, "'tablero'", "'{'", "'}'", "'fuente'", 
                            "'tipo'", "'ruta'", "';'", "'csv'", "'json'", 
                            "'sql'", "'metrica'", "'='", "'('", "')'", "'suma'", 
                            "'promedio'", "'maximo'", "'minimo'", "'contar'", 
                            "'grafico'", "'usar'", "'barras'", "'lineas'", 
                            "'torta'", "'tabla'", "'filtro'", "'alerta'", 
                            "'si'", "'entonces'", "'.'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "OPERADOR", 
                             "BOOLEANO", "NUMERO", "CADENA", "IDENTIFICADOR", 
                             "WS" ];
    static ruleNames = [ "programa", "elemento", "fuente", "tipo_fuente", 
                         "metrica", "agregacion", "grafico", "tipo_grafico", 
                         "filtro", "alerta", "campo", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TableroParser.ruleNames;
        this.literalNames = TableroParser.literalNames;
        this.symbolicNames = TableroParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TableroParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(TableroParser.T__0);
	        this.state = 25;
	        this.match(TableroParser.IDENTIFICADOR);
	        this.state = 26;
	        this.match(TableroParser.T__1);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 202377232) !== 0)) {
	            this.state = 27;
	            this.elemento();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
	        this.match(TableroParser.T__2);
	        this.state = 34;
	        this.match(TableroParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elemento() {
	    let localctx = new ElementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TableroParser.RULE_elemento);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.fuente();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.metrica();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 38;
	            this.grafico();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 39;
	            this.filtro();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 40;
	            this.alerta();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fuente() {
	    let localctx = new FuenteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TableroParser.RULE_fuente);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(TableroParser.T__3);
	        this.state = 44;
	        this.match(TableroParser.IDENTIFICADOR);
	        this.state = 45;
	        this.match(TableroParser.T__4);
	        this.state = 46;
	        this.tipo_fuente();
	        this.state = 47;
	        this.match(TableroParser.T__5);
	        this.state = 48;
	        this.match(TableroParser.CADENA);
	        this.state = 49;
	        this.match(TableroParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo_fuente() {
	    let localctx = new Tipo_fuenteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TableroParser.RULE_tipo_fuente);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	metrica() {
	    let localctx = new MetricaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TableroParser.RULE_metrica);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(TableroParser.T__10);
	        this.state = 54;
	        this.match(TableroParser.IDENTIFICADOR);
	        this.state = 55;
	        this.match(TableroParser.T__11);
	        this.state = 56;
	        this.agregacion();
	        this.state = 57;
	        this.match(TableroParser.T__12);
	        this.state = 58;
	        this.campo();
	        this.state = 59;
	        this.match(TableroParser.T__13);
	        this.state = 60;
	        this.match(TableroParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	agregacion() {
	    let localctx = new AgregacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TableroParser.RULE_agregacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1015808) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	grafico() {
	    let localctx = new GraficoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TableroParser.RULE_grafico);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(TableroParser.T__19);
	        this.state = 65;
	        this.match(TableroParser.IDENTIFICADOR);
	        this.state = 66;
	        this.match(TableroParser.T__1);
	        this.state = 67;
	        this.match(TableroParser.T__4);
	        this.state = 68;
	        this.match(TableroParser.T__11);
	        this.state = 69;
	        this.tipo_grafico();
	        this.state = 70;
	        this.match(TableroParser.T__6);
	        this.state = 71;
	        this.match(TableroParser.T__20);
	        this.state = 72;
	        this.match(TableroParser.T__11);
	        this.state = 73;
	        this.match(TableroParser.IDENTIFICADOR);
	        this.state = 74;
	        this.match(TableroParser.T__6);
	        this.state = 75;
	        this.match(TableroParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo_grafico() {
	    let localctx = new Tipo_graficoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TableroParser.RULE_tipo_grafico);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 62914560) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filtro() {
	    let localctx = new FiltroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TableroParser.RULE_filtro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(TableroParser.T__25);
	        this.state = 80;
	        this.campo();
	        this.state = 81;
	        this.match(TableroParser.OPERADOR);
	        this.state = 82;
	        this.valor();
	        this.state = 83;
	        this.match(TableroParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alerta() {
	    let localctx = new AlertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TableroParser.RULE_alerta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(TableroParser.T__26);
	        this.state = 86;
	        this.match(TableroParser.T__27);
	        this.state = 87;
	        this.match(TableroParser.IDENTIFICADOR);
	        this.state = 88;
	        this.match(TableroParser.OPERADOR);
	        this.state = 89;
	        this.valor();
	        this.state = 90;
	        this.match(TableroParser.T__28);
	        this.state = 91;
	        this.match(TableroParser.CADENA);
	        this.state = 92;
	        this.match(TableroParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TableroParser.RULE_campo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(TableroParser.IDENTIFICADOR);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 95;
	            this.match(TableroParser.T__29);
	            this.state = 96;
	            this.match(TableroParser.IDENTIFICADOR);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TableroParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        _la = this._input.LA(1);
	        if(!(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TableroParser.EOF = antlr4.Token.EOF;
TableroParser.T__0 = 1;
TableroParser.T__1 = 2;
TableroParser.T__2 = 3;
TableroParser.T__3 = 4;
TableroParser.T__4 = 5;
TableroParser.T__5 = 6;
TableroParser.T__6 = 7;
TableroParser.T__7 = 8;
TableroParser.T__8 = 9;
TableroParser.T__9 = 10;
TableroParser.T__10 = 11;
TableroParser.T__11 = 12;
TableroParser.T__12 = 13;
TableroParser.T__13 = 14;
TableroParser.T__14 = 15;
TableroParser.T__15 = 16;
TableroParser.T__16 = 17;
TableroParser.T__17 = 18;
TableroParser.T__18 = 19;
TableroParser.T__19 = 20;
TableroParser.T__20 = 21;
TableroParser.T__21 = 22;
TableroParser.T__22 = 23;
TableroParser.T__23 = 24;
TableroParser.T__24 = 25;
TableroParser.T__25 = 26;
TableroParser.T__26 = 27;
TableroParser.T__27 = 28;
TableroParser.T__28 = 29;
TableroParser.T__29 = 30;
TableroParser.OPERADOR = 31;
TableroParser.BOOLEANO = 32;
TableroParser.NUMERO = 33;
TableroParser.CADENA = 34;
TableroParser.IDENTIFICADOR = 35;
TableroParser.WS = 36;

TableroParser.RULE_programa = 0;
TableroParser.RULE_elemento = 1;
TableroParser.RULE_fuente = 2;
TableroParser.RULE_tipo_fuente = 3;
TableroParser.RULE_metrica = 4;
TableroParser.RULE_agregacion = 5;
TableroParser.RULE_grafico = 6;
TableroParser.RULE_tipo_grafico = 7;
TableroParser.RULE_filtro = 8;
TableroParser.RULE_alerta = 9;
TableroParser.RULE_campo = 10;
TableroParser.RULE_valor = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_programa;
    }

	IDENTIFICADOR() {
	    return this.getToken(TableroParser.IDENTIFICADOR, 0);
	};

	EOF() {
	    return this.getToken(TableroParser.EOF, 0);
	};

	elemento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementoContext);
	    } else {
	        return this.getTypedRuleContext(ElementoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_elemento;
    }

	fuente() {
	    return this.getTypedRuleContext(FuenteContext,0);
	};

	metrica() {
	    return this.getTypedRuleContext(MetricaContext,0);
	};

	grafico() {
	    return this.getTypedRuleContext(GraficoContext,0);
	};

	filtro() {
	    return this.getTypedRuleContext(FiltroContext,0);
	};

	alerta() {
	    return this.getTypedRuleContext(AlertaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterElemento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitElemento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitElemento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuenteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_fuente;
    }

	IDENTIFICADOR() {
	    return this.getToken(TableroParser.IDENTIFICADOR, 0);
	};

	tipo_fuente() {
	    return this.getTypedRuleContext(Tipo_fuenteContext,0);
	};

	CADENA() {
	    return this.getToken(TableroParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterFuente(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitFuente(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitFuente(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Tipo_fuenteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_tipo_fuente;
    }


	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterTipo_fuente(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitTipo_fuente(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitTipo_fuente(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MetricaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_metrica;
    }

	IDENTIFICADOR() {
	    return this.getToken(TableroParser.IDENTIFICADOR, 0);
	};

	agregacion() {
	    return this.getTypedRuleContext(AgregacionContext,0);
	};

	campo() {
	    return this.getTypedRuleContext(CampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterMetrica(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitMetrica(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitMetrica(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AgregacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_agregacion;
    }


	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterAgregacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitAgregacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitAgregacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GraficoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_grafico;
    }

	IDENTIFICADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TableroParser.IDENTIFICADOR);
	    } else {
	        return this.getToken(TableroParser.IDENTIFICADOR, i);
	    }
	};


	tipo_grafico() {
	    return this.getTypedRuleContext(Tipo_graficoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterGrafico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitGrafico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitGrafico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Tipo_graficoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_tipo_grafico;
    }


	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterTipo_grafico(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitTipo_grafico(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitTipo_grafico(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FiltroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_filtro;
    }

	campo() {
	    return this.getTypedRuleContext(CampoContext,0);
	};

	OPERADOR() {
	    return this.getToken(TableroParser.OPERADOR, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterFiltro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitFiltro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitFiltro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AlertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_alerta;
    }

	IDENTIFICADOR() {
	    return this.getToken(TableroParser.IDENTIFICADOR, 0);
	};

	OPERADOR() {
	    return this.getToken(TableroParser.OPERADOR, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	CADENA() {
	    return this.getToken(TableroParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterAlerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitAlerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitAlerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_campo;
    }

	IDENTIFICADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TableroParser.IDENTIFICADOR);
	    } else {
	        return this.getToken(TableroParser.IDENTIFICADOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TableroParser.RULE_valor;
    }

	CADENA() {
	    return this.getToken(TableroParser.CADENA, 0);
	};

	NUMERO() {
	    return this.getToken(TableroParser.NUMERO, 0);
	};

	BOOLEANO() {
	    return this.getToken(TableroParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TableroListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TableroVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TableroParser.ProgramaContext = ProgramaContext; 
TableroParser.ElementoContext = ElementoContext; 
TableroParser.FuenteContext = FuenteContext; 
TableroParser.Tipo_fuenteContext = Tipo_fuenteContext; 
TableroParser.MetricaContext = MetricaContext; 
TableroParser.AgregacionContext = AgregacionContext; 
TableroParser.GraficoContext = GraficoContext; 
TableroParser.Tipo_graficoContext = Tipo_graficoContext; 
TableroParser.FiltroContext = FiltroContext; 
TableroParser.AlertaContext = AlertaContext; 
TableroParser.CampoContext = CampoContext; 
TableroParser.ValorContext = ValorContext; 
