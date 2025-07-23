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
        btnMusic.classList.remove('bxs-play')
    }
};



progresso.addEventListener('input', function () {
    const min = progresso.min || 0;
    const max = progresso.max || 100;
    const x = ((progresso.value - min) / (max - min)) * 100;
    let cor = 'linear-gradient(90deg, rgb(209, 209, 209)' + x + '%, rgb(69, 69, 69)' + x + '%)';

    progresso.style.background = cor;
});


function mudarLetra(idImg, arrayImg, intervalo = 1000) {

    let indexAtual = 0;
    const img = document.getElementById(idImg);

    setInterval(() => {
        let imgIndexada = arrayImg[indexAtual];
        img.src = imgIndexada;

        const nomeArquivoShort = imgIndexada.split('/').pop();
        
        //M
        if(nomeArquivoShort === 'm2.png') {
            img.style.marginTop = '12px';
            img.style.width = '40px';
        } else if (nomeArquivoShort === 'm3.png') {
            img.style.width = '30px';
        } else if (nomeArquivoShort === 'm1.png') {
            img.style.marginBottom = '10px';
            img.style.width = '38px';
        }

        //E
        if(nomeArquivoShort === 'e1.png') {
            img.style.width = '27px'
        } else if (nomeArquivoShort === 'e2.png') {
            img.style.width = '29px';
        } else if (nomeArquivoShort === 'e3.png') {
            img.style.width = '30px';
        }

        //U
        if(nomeArquivoShort === 'u1.png') {
            img.style.width = '25px';
        } else if (nomeArquivoShort === 'u2.png') {
            img.style.width = '30px';
        } else if (nomeArquivoShort === 'u3.png') {
            img.style.width = '35px';
        }

        

        indexAtual++;

        if (indexAtual >= arrayImg.length) {
            indexAtual = 0;
        }
    }, intervalo);
}

const letrasM = ['../assets/imgs/letras/M/m1.png', '../assets/imgs/letras/M/m2.png', '../assets/imgs/letras/M/m3.png'];
mudarLetra('m1', letrasM, 1000);
const letrasE = ['../assets/imgs/letras/E/e1.png', '../assets/imgs/letras/E/e2.png', '../assets/imgs/letras/E/e3.png'];
mudarLetra('e1', letrasE, 1000);
const letrasU = ['../assets/imgs/letras/U/u1.png', '../assets/imgs/letras/U/u2.png', '../assets/imgs/letras/U/u3.png'];
mudarLetra('u1', letrasU, 1000);

const letrasA = ['../assets/imgs/letras/A/a1.png', '../assets/imgs/letras/A/a2.png', '../assets/imgs/letras/A/a3.png'];
mudarLetra('a1', letrasA, 1000);
const letrasM2 = ['../assets/imgs/letras/M/m4.png', '../assets/imgs/letras/M/m5.png', '../assets/imgs/letras/M/m6.png'];
mudarLetra('m2', letrasM2, 1000);
const letrasO = ['../assets/imgs/letras/O/o1.png', '../assets/imgs/letras/O/o2.png', '../assets/imgs/letras/O/o3.png'];
mudarLetra('o1', letrasO, 1000);
const letrasR = ['../assets/imgs/letras/R/r1.png', '../assets/imgs/letras/R/r2.png', '../assets/imgs/letras/R/r3.png'];
mudarLetra('r1', letrasR, 1000);


/* function widthDef (idImg, imagem, pixels) {
    const id = document.getElementById(idImg);
    if (id.src.includes(imagem)) {
    id.style.width = pixels;
}
};

widthDef('m1', 'm2.png', '1200px');
widthDef('e1', 'e2.png', '1200px'); */

