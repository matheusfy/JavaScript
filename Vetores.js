// teste interacao vetor
let vetor = ['a','b','c'];

vetor.forEach( function(elem, indice) {
    console.log("indice: " + indice + "." + elem);
});

let vetor2 = []; // caso o vetor de entrada nao for número no console aparecerá NaN Not a Number
vetor2 = ['1','2','3'].map( function(x){
  return x*x;
});

console.log(vetor2);

// --------------------------------------------------------------------------------------------------------
console.log("Teste de expressao regular");

let entrada_expressao = '_abbba_aba_'

let e1 = /a(b+)a/.exec(entrada_expressao);
console.log(e1);
