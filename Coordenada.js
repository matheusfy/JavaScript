//
// class Coordenada {
//   private var x;
//   private var y;
//
//   Coordenada() {
//     this.x = 0;
//     this.y = 0;
//   }
//   Coordenada(x) {
//     this.x = x;
//     this.y = 0;
//   }
//   Coordenada(x,y) {
//     this.x = x;
//     this.y = y;
//   }
//
// }

// Ajeita a instancia da classe
function Coordenada(x,y){

  this.x = x;
  this.y = y;

  if(!x) // verifica se o valor é definido/vazio ou nullo -> se for atribui o valor 0 como default
  {
    this.x = 0;
  }

  if(!y)
  {
    this.y = 0;
  }

}

Coordenada.prototype.Soma = function (p2) {
  this.x = this.x + p2.x;
  this.y = this.y + p2.y;

}

Coordenada.prototype.Multiplicacao = function (p2) {
  this.x = this.x * p2.x;
  this.y = this.y * p2.y;

}

var p1 = new Coordenada(1,2);
var p2 = new Coordenada(2,1);

console.log("x : " + p1.x);
console.log("y : " + p1.y);


console.log("Soma:");
p1.Soma(p2);
console.log("novo p1x: " + p1.x);
console.log("novo p1y: " + p1.y);

console.log("Multiplicação:");
p1.Multiplicacao(p2);

console.log("novo p1x: " + p1.x);
console.log("novo p1y: " + p1.y);
