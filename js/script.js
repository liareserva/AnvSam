let musica = document.getElementById('musica');
let btnMusic = document.getElementById('controlIcon');
let progresso = document.getElementById('progresso');

musica.onloadedmetadata = function () {
    progresso.max = musica.duration;
    progresso.value = musica.currentTime;
    corBarra();
};


function playPause() {
    if (btnMusic.classList.contains('bxs-pause')) {
        musica.pause();
        btnMusic.classList.remove('bxs-pause');
        btnMusic.classList.add('bxs-play')
    } else {
        musica.play();
        btnMusic.classList.add('bxs-pause');
        btnMusic.classList.remove('bxs-play');
    };
};

if (musica.play()) {
    setInterval(() => {
        progresso.value = musica.currentTime;
    }, 505)
}

progresso.onchange = function () {
    musica.play();
    musica.currentTime = progresso.value;
    btnMusic.classList.add('bxs-pause');
    btnMusic.classList.remove('bxs-play');
}



progresso.addEventListener('input', function () {
    const min = progresso.min || 0;
    const max = progresso.max || 100;
    const x = ((progresso.value - min) / (max - min)) * 100;
    let cor = 'linear-gradient(90deg, rgb(209, 209, 209)' + x + '%, rgb(136, 136, 136)' + x + '%)';

    progresso.style.background = cor;
});



function hiddenLetter(classe) {
    let imagens = document.querySelectorAll(`.${classe}`);
    let contagem = 0;

    setInterval(() => {

        imagens.forEach((img) => {
            img.classList.add('hidden');
        });
        imagens[contagem].classList.remove('hidden');
        contagem = (contagem + 1) % imagens.length;

    }, 1000);
}

hiddenLetter('mLetter');
hiddenLetter('eLetter');
hiddenLetter('uLetter');
hiddenLetter('aLetter');
hiddenLetter('mLetter2');
hiddenLetter('oLetter');
hiddenLetter('rLetter');


