//desestruturação

const nomes = ['Ryu','Akuma','Ken','Chun-Li']

console.log("----------")

//fazendo um looping
for(let i =0; i < nomes.length; i++){
    console.log(nomes[i])
}

console.log("----------")

//looping pegando apenas metade dos valores, ou seja, pegando apenas 2 valores

for(let i =0; i < nomes.length; i+=2){
    console.log(nomes[i])
}

console.log("----------")

//looping que te devolve uma mensagem
nomes.forEach(function(meuItem){
    console.log(meuItem)
})

console.log("----------")

//looping que tedevolve uma mensagem !!!!!!!!!!!(MÉTODO MAIS CERTO)!!!!!!!!!!!
nomes.forEach(element=>{
    console.log(element)
})

console.log("----------")

//método que faz modificações
nomes.map((element) =>{
    console.log(`Lutador selecionado: ${element}`)
})

console.log("----------")

//filtrando, todos os elementos que possuem A serão exibidos como true, os que não tem serão exibidos como false
nomes.filter((element) =>{
    console.log(element.includes('A'))
})

