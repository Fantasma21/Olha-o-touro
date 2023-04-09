const toureiro = document.querySelector(".touriero");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");

const jump = () => {
    toureiro.classList.add("jump");
    toureiro.src = "/img/toureiro-pulo.gif";

  setTimeout(() => {
    toureiro.classList.remove("jump");
    toureiro.src = "/img/toureiro.gif";
  }, 900);
};

const loop = setInterval(() => {
  const eggmanPosition = eggman.offsetLeft;
  const tourieroPosition = +window
    .getComputedStyle(toureiro)
    .bottom.replace("px", "");

  if (eggmanPosition < 20 && eggmanPosition > 0 && tourieroPosition < 250) {
    eggman.style.animation = "none";
    eggman.style.left = `${eggmanPosition}px`;

    toureiro.style.animation = "none";
    toureiro.src = "/img/ferido1.png";
    toureiro.style.width = "140px";

    fundo.src = "/img/game-over.png";
  }
}, 10);

document.addEventListener("click", jump);