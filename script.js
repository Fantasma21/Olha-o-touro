const toureiro = document.querySelector(".touriero");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");
const score = document.querySelector(".score");
const startButton = document.querySelector(".start-button");

const audio2 = document.querySelector(".audio2")
let playedAudio = false; // adiciona a variável playedAudio para indicar se o áudio já foi tocado

 let count = 0;
 let interval;
 let animationDuration = 3; // duração inicial da animação



function jump() {
  toureiro.classList.add("jump");
  toureiro.src = "/img/toureiro-pulo.gif";

  setTimeout(() => {
    toureiro.classList.remove("jump");
    toureiro.src = "/img/toureiro.gif";
  }, 400);
}

const loop = setInterval(() => {
  const eggmanPosition = eggman.offsetLeft;
  const tourieroPosition = +window
    .getComputedStyle(toureiro)
    .bottom.replace("px", "");

  if (eggmanPosition < 20 && eggmanPosition > 0 && tourieroPosition < 149) {
    eggman.style.animation = "none";
    eggman.style.left = `${eggmanPosition}px`;
    toureiro.style.animation = "none";
    toureiro.src = "/img/ferido1.png";
    toureiro.style.width = "140px";
    
    fundo.src = "/img/game-over.png";
     // adiciona verificação para saber se o áudio já foi tocado ou não
     if (!playedAudio) {
      audio2.play();
      playedAudio = true; // define playedAudio como true para indicar que o áudio já foi tocado
    }
       
    stopCounting(); // para a contagem do score
  }

  
  count++;
  score.innerHTML = `SCORE: ${count}`;

}, 20);


 // Adiciona um ouvinte de evento de clique ao elemento 'body'
 document.body.addEventListener('click', function() {
  // Seleciona o elemento de áudio com a classe 'audio_salto'
  var audio = document.querySelector('.audio_salto');
  // Define o tempo atual do áudio como zero
  audio.currentTime = 0;
  // Reproduz o áudio
  audio.play();
});

setInterval(() => {
  animationDuration -= 0.002; // diminui em 0.1 segundos a duração da animação
  eggman.style.animationDuration = `${animationDuration}s`; // atualiza a duração da animação
}, 50); // a cada 10 segundos diminui em 0.1 segundos a duração da animação


document.addEventListener("click", jump);