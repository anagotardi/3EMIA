    document.addEventListener('DOMContentLoaded', function () {
    
    $('#banner-carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Ajuste conforme necessário
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Quem somos nós?
    const apresentacaoContainer = document.getElementById('apresentacao-container');
    const apresentacao = [
        'Somos 3 estudantes da Fiap School, Ana, Maria e Maytê.',
        'Estamos atualmente no 3° ano do ensino médio.'
    ];

    apresentacao.forEach(paragrafo => {
        const p = document.createElement('p');
        p.textContent = paragrafo;
        apresentacaoContainer.appendChild(p);
    });


//Habilidades
    const habilidadesContainer = document.getElementById('habilidades-container');
    const habilidades = ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'HTML'];

    habilidades.forEach(habilidade => {
        const card = document.createElement('div');
        habilidadesContainer.appendChild(card);
    });

    //Formulário de contato
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

//Confirmação de envio de formulário
        alert('Formulário enviado!');
    });
});   card.classList.add('habilidade-card');
        card.textContent = habilidade;
     