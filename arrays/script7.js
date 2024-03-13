//desestruturação

//valores
const nomes = [
    {
        nome: 'Ryu',
        tipo: 'vermelho',
        idade: 187
    },
    
   {nome: 'Akuma',
   tipo: 'fogo',
   idade: 250
   }
]


//selecionando os personagens que possuem a idade maior que 200
nomes.filter((element) =>{
    console.log(element.idade > 200)
})