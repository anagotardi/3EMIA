//codigo com erros 

const leia = require("prompt-sync")()

function imc(){

    //entrada
    let peso = leia("Digite seu peso em kg: ")
    let altura = leia("Digite sua altura em metros: ")

    //processo
    let calculoIMC = (peso/(altura*altura)).toFixed(2)

    if(calculoIMC<18.5){
        console.log("Seu IMC é classificado como 'Baixo peso'.")
    }
    
    else if(calculoIMC>18.5 && calculoIMC<24.99){
        console.log("Seu IMC é classificado como 'Normal'.")
    }
    
    else if(calculoIMC>25 && calculoIMC<29.99){
        console.log("Seu IMC é classificado como 'Sobrepeso'.")
    }
    
    else{
        console.log("Seu IMC é classificado como 'Obesidade'.")
    }
}

//saída
console.log("Seu IMC é: ")




