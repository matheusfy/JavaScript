// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = parseInt(Math.random() * 10 + 1);
// console.log(numeroSecreto)
// let chute;
// let tentativas = 1;

// // enquanto chute não for igual ao n.s.
// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 10');
//     // se chute for igual ao número secreto
//     if (chute == numeroSecreto) {
//        break;
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`)
//         } else {
//             alert(`O número secreto é maior que ${chute}`)
//         }
//         // tentativas = tentativas + 1
//         tentativas++
//     }
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
// alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/////////////////////// Desafio parte 3

// 1.
alert("Bem vindo ao desafio parte 3");

// //2.
// let nome = "matheus";
// console.log(`Olá, ${nome}!`);

//3.
let nome = "matheus";
alert(`Olá, ${nome}!`);

// 4.
let linguagemProg = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagemProg);

// //5.
// let valor1 = 3;
// let valor2 = 4;
// let resultadoSoma = valor1 + valor2;

// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);

//6.
let valor1 = 3;
let valor2 = 4;
let resultadoSoma = valor1 - valor2;

console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);

// //7.

let idade = prompt("insira sua idade");
if (idade > 18){
    console.log(`Você é maior de idade! Idade: ${idade}`);
} else {
    console.log(`Você não é maior de idade! Idade: ${idade}`);
}

// //8.
let numero = prompt("Insira um valor qualquer.");
if (numero > 0)
{
    console.log("positivo");
} else if (numero == 0){
        console.log("zero");
    } else {
        console.log("negativo");
}


// //9.
let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

// //10.

let nota = 5;

if(nota > 7){
    console.log("Aprovado");
} else{
    console.log("Reprovado");
}

// //11.

let numeroRandom = parseInt(Math.random());
console.log(`numero aleatorio gerado = ${numeroRandom}`);

// //12.

let numeroRandom2 = parseInt(Math.random() * 10) + 1 ;
console.log(`numero2 aleatorio gerado = ${numeroRandom2}`);

// //13.
let numeroRandom3 = parseInt(Math.random() * 1000) + 1 ;
console.log(`numero3 aleatorio gerado = ${numeroRandom3}`);



