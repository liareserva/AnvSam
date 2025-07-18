let musica = document.getElementById('musica');
let btnMusic = document.getElementById('controlIcon');
let progresso = document.getElementById('progresso');

musica.onloadedmetadata = function () {
    progresso.max = musica.duration;
    progresso.value = musica.currentTime;
    corBarra();
};


function playPause () {
    if (btnMusic.classList.contains('bxs-pause')) {
        musica.pause();
        btnMusic.classList.remove('bxs-pause');
        btnMusic.classList.add('bxs-play')
    } else {
        musica.play();
        btnMusic.classList.add('bxs-pause');
        btnMusic.classList.remove('bxs-play')
    }
};

/* function corBarra () {
    let valor = (progresso.value / progresso.max) * 100;
    progresso.style.background = '#454545';
} */

progresso.addEventListener('input', function() {
     const min = progresso.min || 0;
    const max = progresso.max || 100;
    const x = ((progresso.value - min) / (max - min)) * 100;
    let cor = 'linear-gradient(90deg, rgb(209, 209, 209)' + x + '%, rgb(69, 69, 69)' + x + '%)';

    progresso.style.background = cor;
});