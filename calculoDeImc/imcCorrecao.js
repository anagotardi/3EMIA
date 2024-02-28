const prompt = require("prompt-sync")()

//entrada
function getUserInfo(){
   let weight = prompt("Digite seu peso: ")  //valores podem mudar
   let height = prompt("Digite sua altura: ")

   return pessoa = { //nao retorna por padrao dois valores, portanto utilizar modo de objeto 
    peso: weight, 
    altura: height
   } 
}

//processamento 
function calcImc(pesoInformado=0, alturaInformada){ //parametro: "espaço virtual" para a função //="": definir padrao caso nao haja digitacoes

    return (pesoInformado / alturaInformada)**2
}

//exibicao de dados
function main(){

    let userData = getUserInfo() //"chamando" da funcao getUserInfo e guardando as informacoes

    let peso = userData.peso //"guardando" informacaoes // o . acessa uma propriedade dentro de um objeto (somente o peso)

    let altura = userData.altura //somente altura

    let resultadoImc = calcImc(peso,altura) //guarda o resultado 

    if(resultadoImc < 18){
        console.log(`Seu IMC é: ${resultadoImc}, e você está abaixo do peso`)
    }

    else if(resultadoImc > 18 && resultadoImc< 23.9){
        console.log(`Seu IMC é: ${resultadoImc}, e você está normal`)
    }
    
}

main() //chamando funcao







function imprimir(nome){
    console.log(nome)
}

const imprimir = nome => console.log('Olá')
