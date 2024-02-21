//revisão javascript

//instalando o prompt-sync -- npm install prompt-sync
const prompt = require('prompt-sync')()

//exibindo o console.log:

//usando a function (é necessário posicionar o console dentro da function)
function teste (){
    var nome1 = 'Ana'
    console.log(nome1)
}
teste()

//usando o if (o posicionamento é fora do if)
if(true){
    var nome1 = 'Ana'
}
console.log(nome1)

//usando o let