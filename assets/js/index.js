const meuNome = document.querySelector('.my-name');
const fName = meuNome.innerHTML;
const botaoVerMais = document.querySelector('.button-text');
const habilidades = document.querySelectorAll('.hidden');

meuNome.innerHTML = '';

function changeClass() {
    habilidades.forEach((elemento) => {
        if (elemento.classList.contains('hidden')) {
            elemento.classList.remove('hidden');
            elemento.classList.add('visible');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('hidden');
            elemento.classList.remove('visible');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    })
}

function verMais(elemento) {
    elemento.addEventListener('click', changeClass)
}

function typeWriter(nome) {
    setTimeout(() => {
        const meuNomeF = nome.split('');
        meuNome.innerHTML = '';
        meuNomeF.forEach((letra, index) => {
            setTimeout(function () {
                meuNome.innerHTML += letra;
            }, 180 * index)
        })
    }, 1500)

}

typeWriter(fName);
verMais(botaoVerMais)

// dark theme
const chk = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light');
});


