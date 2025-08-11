const btnCoracao = document.getElementById('coracaopapel');
const triangulo = document.getElementById('triangulo');
const overlay = document.getElementById('overlay');

btnCoracao.addEventListener('click', () => {
    triangulo.style.transform = 'rotateX(180deg)';

    setInterval(() => {
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
    }, 600);
});

const btnNao = document.getElementById('nao');

btnNao.addEventListener('click', () => {
    btnNao.classList.add('respostaErrada');

    btnNao.addEventListener('animationend', () => {
        btnNao.classList.remove('respostaErrada');
    });
});