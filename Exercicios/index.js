
// primeiro código em javascript
// declarando variáveis 




var button = document.getElementById("clickme"),
  count = 0;
  
button.onclick = function() {
  count += 1;
  button.innerHTML = "Quantidade de vezes que o Allef foi GADO: " + count;
};
 
//let name;

//name = "matheus"
//console.log(name);

// declarando constantes
// constantes não podem ter seus valores alterados ao longo do código

//const TaxaInteresse = 0.3;
// TaxaInteresse = 1;  -> da erro pois nao pode ser alterado o valor
//console.log("taxa interesse = "+TaxaInteresse)





