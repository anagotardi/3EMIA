//baixar o prompt-sync // npm install prompt-sync
const prompt = require('prompt-sync')()

//hoisting

//chamar uma função
printar()

//explicar o que ela vai fazer
function printar(){
    console.log("Hello")
}

//nao conseguimos mudar o valor de uma const, mas sim mudar suas caracteristicas

//declarando uma const
const nome1 = 'Ana'

//alterando uma característica, deixando todos os caracteres maiúsculos
console.log(nome1.toUpperCase())

//typeof corrige erros, mostrando o tipo da variavel, se é string, number, etc
console.log(typeof nome1)
