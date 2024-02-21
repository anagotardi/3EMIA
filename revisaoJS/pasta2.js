const prompt = require('prompt-sync')()

const nome1 = 'Ana'

//dentro de $() é possivel colocar uma variavel, fazer uma soma, colocar um if

//dentro de ${} ele faz: se o nome for Ana (variável), coloque olá, se não for Ana, falar "Não te conheço"
console.log(`${nome1 === 'Ana'? 'Olá': 'Não te conheço'}`)
