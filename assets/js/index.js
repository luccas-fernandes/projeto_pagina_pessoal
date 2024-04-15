/*const botaoAlterarTema = document.getElementById("mudanca-de-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".sol-imagem");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("assets", "./assets/images/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("assets", "./assets/images/moon.png");
  }
});*/


const botaoAlterarTema = document.getElementById("change-theme-button");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".image-button");


botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./assets/images/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./assets/images/moon.png");
  }
});