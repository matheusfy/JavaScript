
// var valor = criaIncrementador(5);


// // função que incrementa toda vez que é chamado
// function criaIncrementador(start){
//     return function inc(){
//         start++;
//         return start;
//     }
// }

// for(i= 0; i<5; i++)
// {
//     console.log("o valor é: " + valor());
// }


var result = [];
x = 7;
y = 10;
z = 20;

// cada casa do vetor é possível referenciar uma função
for (var i=0; i < 5; i++) {
    if(i===1)
    {
        result.push(function () { return x }); 
    }else if( i===2)
    {
        result.push(function () { return y}); 
    }else if (i===3)
    {   
        result.push(function () { return z}); 
    }
    else 
    {
        result.push(function (){ return i});
    }
}


for(j=0; j<5; j++)
{
    console.log(result[j]()); 
}

