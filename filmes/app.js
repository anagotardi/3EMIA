const btn1 = document.querySelector('button') 
const listaFilmes = document.querySelector('#listaFilmes') //pegando do html o id listaFilmes



btn1.addEventListener('click',()=>{

    const valorDigitado = document.querySelector('#filmeInput').value
    //cria o elemento li
    const itemLista = document.createElement('li')

    //adiciona o li à lista
    listaFilmes.append(itemLista)


    //acidiona o conteúdo ao li
    itemLista.innerHTML = valorDigitado
})