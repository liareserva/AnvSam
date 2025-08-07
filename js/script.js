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



progresso.addEventListener('input', function () {
    const min = progresso.min || 0;
    const max = progresso.max || 100;
    const x = ((progresso.value - min) / (max - min)) * 100;
    let cor = 'linear-gradient(90deg, rgb(209, 209, 209)' + x + '%, rgb(136, 136, 136)' + x + '%)';

    progresso.style.background = cor;
});


/* function mudarLetra(idImg, arrayImg, intervalo = 1000) {

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
}; */

/* function mudarLetra(idImg, nomeArquivo) {

    let id = document.getElementById(idImg);
    document.getElementById(idImg).innerHTML = nomeArquivo;

    setInterval(() => {
        if (id.innerHTML.includes('2')) {
            
        }
        
    }, 1000);

} */



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


