function Formulario(){
    return(
        <div>
            <h1 class="text-center">Formulário de Contato</h1>

            <p class="text-center">Entre em contato com nossa empresa!</p>

        <form/>
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Qual é o seu nome?</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp"/>
              <div id="nameHelp" class="form-text">Insira seu nome aqui</div>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Qual é o seu email?</label>
              <input type="email" class="form-control" id="exampleInputEmail1"/>
            </div>

            <div class="mb-3">
                <label for="exampleInputText1" class="form-label">Faça aqui seu comentário</label>
                <input type="text" class="form-control" id="exampleInputText1"/>
              </div>
              
              <button type="submit" class="btn btn-primary">Enviar</button>
              
          </div>
        
    )
}

export default Formulario