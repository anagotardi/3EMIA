//desestruturação

const nomes = ['Ryu','Akuma','Ken','Chun-Li']

//operador rest, é quando não é necessario escrever todas as outras informações que estao dentro do array 
const [nome1,...resto] = nomes

//mostrando o nome1 e depois o resto
console.log(nome1)
console.log(resto)