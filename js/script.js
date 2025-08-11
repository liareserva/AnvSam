let musica = document.getElementById('musica');
let btnMusic = document.getElementById('controlIcon');
let btnMusicPause = document.getElementById('pauseIcon');
let progresso = document.getElementById('progresso');
let vinilCoracao = document.getElementById('vinilCoracao');

musica.onloadedmetadata = function () {
    progresso.max = musica.duration;
    progresso.value = musica.currentTime;
    corBarra();
};


function playPause() {
    if (btnMusic.classList.contains('bxs-pause')) {
        musica.pause();
        btnMusic.classList.remove('bxs-pause');
        btnMusic.classList.add('bxs-play');

        vinilCoracao.classList.remove('rodando');
        vinilPararRodar();

    } else {
        musica.play();
        btnMusic.classList.add('bxs-pause');
        btnMusic.classList.remove('bxs-play');

        vinilCoracao.classList.add('rodando');
    };
};

function vinilPararRodar() {
    vinilCoracao.style.animation = 'none';
    vinilCoracao.offsetHeight;
}

musica.addEventListener('timeupdate', () => {
    progresso.value = musica.currentTime;
    const min = progresso.min || 0;
    const max = progresso.max || 100;
    const x = ((progresso.value - min) / (max - min)) * 100;
    let cor = 'linear-gradient(90deg, rgb(209, 209, 209)' + x + '%, rgb(136, 136, 136)' + x + '%)';

    progresso.style.background = cor;
});

//coloca a musica quando clicar em certa parte
progresso.onchange = function () {
    musica.currentTime = progresso.value;
}

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









const musicas = [

    {
        src: '../assets/audio/Feliz Aniversário - Parabéns pra Você [WQzWFU_IKR4].mp3',
        nome: 'Feliz aniversário - Parabéns para Você'
    },

    {
        src: '../assets/audio/A$AP Rocky - Everyday (Official Audio) ft. Rod Stewart, Miguel, Mark Ronson.mp3',
        nome: 'Everyday - A$AP Rocky'
    },

    {
        src: '../assets/audio/Patati Patatá - Parabéns (DVD No Castelo da fantasia) [U6GqHqVYZwE].mp3',
        nome: 'Patati Patatá - Parabéns'
    },

    {
        src: 'assets/audio/Love Sosa [ha8Z72fs27I].mp3',
        nome: 'Love Sosa - Chief Keef'
    },

    {
        src: '../assets/audio/Phantom Bride.mp3',
        nome: 'Phantom Bride - Deftones'
    }
];

let musicaIndex = 0;
let musicaAtual = 0;

function nextMusic() {

    let audio = document.getElementById('musica');
    const nomeMusica = document.getElementById('nameMusic');

    musicaIndex = (musicaIndex + 1) % musicas.length;
    musicaAtual = musicaIndex;

    audio.src = musicas[musicaAtual].src;
    nomeMusica.textContent = musicas[musicaAtual].nome;

    playPause();
};

function previousMusic() {
    let audio = document.getElementById('musica');
    const nomeMusica = document.getElementById('nameMusic');

    musicaIndex = (musicaIndex - 1 + musicas.length) % musicas.length;
    musicaAtual = musicaIndex;

    audio.src = musicas[musicaAtual].src;
    nomeMusica.textContent = musicas[musicaAtual].nome;

    playPause();
};



const imgsTv = [
    {
        src: 'assets/imgs/imgsTvCam/daviNoMar.jpg'
    },

    {
        src: 'assets/imgs/imgsTvCam/daviAssistindoTV.jpg'
    }
];

let contagem = 0;
let img = document.getElementById('imgTv');
const btnProx = document.getElementById('nextImgIcon');

function mostrarImg(index) {
    img.src = imgsTv[index].src;
}

mostrarImg(contagem);

btnProx.addEventListener('click', () => {
    contagem++;
    if (contagem >= imgsTv.length) {
        contagem = 0;
    }
    mostrarImg(contagem);
});












