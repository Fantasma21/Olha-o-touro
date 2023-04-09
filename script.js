const toureiro = document.querySelector(".touriero");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");
const score = document.querySelector(".score");
const startButton = document.querySelector(".start-button");

 let count = 0;
 let interval;
 let animationDuration = 2; // duração inicial da animação

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
    stopCounting(); // para a contagem do score
  }
  
  count++;
  score.innerHTML = `SCORE: ${count}`;

}, 10);

setInterval(() => {
  animationDuration -= 0.1; // diminui em 0.1 segundos a duração da animação
  eggman.style.animationDuration = `${animationDuration}s`; // atualiza a duração da animação
}, 10000); // a cada 10 segundos diminui em 0.1 segundos a duração da animação


document.addEventListener("click", jump);