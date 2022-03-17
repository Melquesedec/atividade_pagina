// document.addEventListener('DOMContentLoaded', function(){
//     var modeSwitch = document.querySelector('.nav-link-esquerda')

//     modeSwitch.addEventListener('click', function(){
//         document.documentElement.classList.toggle('dark')
//         modeSwitch.classList.toggle('active')
//     });
// })

var ativo = 0
var modeSwitch = document.querySelector('.nav-link-esquerda')
if(ativo == 0){
modeSwitch.addEventListener('click', function(){
    document.documentElement.classList.toggle('dark')
    document.querySelector("body").classList.toggle('active')
    document.querySelector("#cabecalho").classList.toggle('active')
    document.querySelector(".bg-dark").classList.toggle('active')
    document.querySelector("#port").classList.toggle('active')
    document.querySelector(".nav-link-direita").classList.toggle('active')
    document.querySelector("#name-a").classList.toggle('active')
    document.querySelector(".nav-link-meio").classList.toggle('active')
    document.querySelector(".nav-link-meio-dois").classList.toggle('active')
    document.querySelector(".nav-link-meio-tres").classList.toggle('active')
    document.querySelector(".nav-link-primeiro").classList.toggle('active')
    document.querySelector("#geral_meio").classList.toggle('active')
    document.querySelector(".nav-link-esquerda").classList.toggle('active')
    document.querySelector("#client").classList.toggle('active')
    document.querySelector("#step").classList.toggle('active')
    document.querySelector("#estrela").classList.toggle('active')
    document.querySelector("#direito").classList.toggle('active')
    document.querySelector("#comentario-um").classList.toggle('active')
    document.querySelector("p").classList.toggle('active')
    document.querySelector(".stepum").classList.toggle('active')
    document.querySelector(".stepdois").classList.toggle('active')
    document.querySelector(".steptres").classList.toggle('active')
    document.querySelector(".estrelaum").classList.toggle('active')
    document.querySelector(".estreladois").classList.toggle('active')
    document.querySelector(".estrelatres").classList.toggle('active')
    document.querySelector(".fa-align-right").classList.toggle('active')
    document.querySelector(".fa-th-large").classList.toggle('active')
    document.querySelector("#progress").classList.toggle('active')
    document.querySelector("#december").classList.toggle('active')
    document.querySelector("#porcentagem").classList.toggle('active')
    document.querySelector("a").classList.toggle('active')
    document.querySelector("a").classList.toggle('active')
    document.querySelector("a").classList.toggle('active')
    });
    ativo = 1
} else {
    modeSwitch.addEventListener('click', function(){
        modeSwitch.classList.remove('active')
    })
    ativo = 0
}

let teste = document.querySelectorAll('.blocos')
let selecionar_quadrado = document.querySelector('.fa-align-right')
let selecionar_lista = document.querySelector('.fa-th-large')

selecionar_quadrado.addEventListener("click", function(){   
    for(i=0; i < teste.length; i++){ 
        teste[i].classList.remove("blocos")        
        teste[i].classList.add("blocosdois")   
    }
})

selecionar_lista.addEventListener("click", function(){  
    let testedois = document.querySelectorAll('.blocosdois') 
    for(i=0; i < testedois.length; i++){ 
        testedois[i].classList.remove("blocosdois")
        testedois[i].classList.add("blocos")          
    }
})

// let notificacao = document.querySelector('.notificacao')
// let aparecer_notificacao = document.querySelector('.fa-bell')

// aparecer_notificacao.addEventListener("click", function(){
//     notificacao.style.display = "block"        
// })

let mensagem = document.querySelector(".notificacao") 

// mostra a mensagem
function showMessage(){   
   mensagem.style.display = "block";   
 }
// esconde a mensagem
function hideMessage(){
  mensagem.style.display = "none"; 
}

let mais = document.querySelector(".me-2")
let maisdois = document.querySelector(".btn-outline-success") 

// mostra a mensagem
function mostrarpesquisa(){   
   mais.style.display = "block";   
   maisdois.style.display = "block"; 
 }
// esconde a mensagem
function sairpesquisa(){
   mais.style.display = "none"; 
   maisdois.style.display = "none";
}

let perfiln = document.querySelector(".perfil") 

// mostra a mensagem
function mostrarperfil(){   
    perfiln.style.display = "block";
  }
 // esconde a mensagem
 function sairperfil(){
    perfiln.style.display = "none";
 }

