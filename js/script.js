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

function corBarra () {
    let valor = (progresso.value / progresso.max) * 100;
    progresso.style.background = '#454545';
}
