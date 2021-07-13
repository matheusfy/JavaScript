


// let myHTML = document.querySelector('html');

// myHTML.onclick = function()
// {
//     let submittButton = document.getElementById('submitt');

//     submittButton.onclick = function()
//     {
//         var name = document.getElementById('nomeid');
//         var tel = document.getElementById('foneid');
//         var mail = document.getElementById('emailid');

//     }
    
// }

function Enviar() {
    var name = document.getElementById('nomeid');
    var idade = document.getElementById('idade');

    // var tel = document.getElementById('foneid');
    // var mail = document.getElementById('emailid');

    if (nome.value != "" && tel.value != "" && mail.value != "") {
        //alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');

        // criar objeto que ira postar (Formato Json)
        // = {  
        //      nome:
        //      tel: 
        //      email: 
        //   }

        let dados = {
            nome: name.value,
            idade: idade.value
        };
        fetch('http://127.0.0.1:5500/cadastro.html', {
            method: 'POST',
            body: Json.stringify(dados) 
        }).then(function(response){
            console.log(response);
        })
    }

}

// // Entra no conteúdo HTML
//  let myHTML = document.querySelector('html');

//  // Click na página 
//  myHTML.onclick = function ()
//  {   

//     let myHeading = document.querySelector('h1');
 
//     // após ter selecionado a página se clicar na imagem muda a imagem

//     if(!localStorage.getItem('name')) {

//         setUserName();
//     }   
//     else{
//         var storedName = localStorage.getItem('name');
//         myHeading.textContent = 'Bem vindo ' + storedName;
//     }


//     let myImage = document.getElementById('img1');
    
//     myImage.onclick = function()
//     {
//         let mySrc = myImage.getAttribute('src');
   
//         if(mySrc === "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")
//         {  
//             myImage.setAttribute('src', 'https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png');
//         }
//         else{
//             myImage.setAttribute('src','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
//         }
//     }


    
//     let myButton = document.querySelector('button');
//     myButton.onclick = function() 
//     {
//         setUserName();
//     }
    
//  }




// function setUserName() 
// {   
//     let myHeading = document.querySelector('h1');
 
//     var myName = window.prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Bem vindo ' + myName;
// }



