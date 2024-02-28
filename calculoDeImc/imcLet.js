const leia = require("prompt-sync")()

//entrada
let peso = leia("Digite o seu peso em kg: ")
let altura = leia("Digite a sua altura em metros: ")

//processo
let imc = (peso/(altura*altura)).toFixed(2)


//saída
console.log("Seu IMC é: "+imc)

if(imc<18.5){
    console.log("Seu IMC é classificado como 'Baixo peso'.")
}

else if(imc>18.5 && imc<24.99){
    console.log("Seu IMC é classificado como 'Normal'.")
}

else if(imc>25 && imc<29.99){
    console.log("Seu IMC é classificado como 'Sobrepeso'.")
}

else{
    console.log("Seu IMC é classificado como 'Obesidade'.")
}