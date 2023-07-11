const personagens = document.querySelectorAll(".personagem");
console.log(personagens);



personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    removerSelecaoDoPersonagem();

    adicionarSelecaoDoPersonagem(personagem);

    alterarImagemDoPersonagem(personagem);

    alterarNomeDoPersonagem(personagem);

    alterarDescricaoDoPersonagem(personagem);
  });
});
function adicionarSelecaoDoPersonagem(personagem) {
  personagem.classList.add("selecionado");
}

function alterarDescricaoDoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomeDoPersonagem(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemDoPersonagem(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}



// const personagens = document.querySelectorAll(".personagem");
// console.log(personagens);

// //8888888888

// personagens.forEach((personagem) => {
//   personagem.addEventListener("mouseenter", () => {
//     if (window.innerWidth < 450) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//     const personagemSelecionado = document.querySelector(".selecionado");
//     personagemSelecionado.classList.remove("selecionado");
//     personagem.classList.add("selecionado");

//     const imagemPersonagemGrande = document.querySelector(".personagem-grande");
//     const idPersonagem = personagem.attributes.id.value;
//     imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;

//     const nomePersonagem = document.getElementById("nome-personagem");
//     nomePersonagem.innerText = personagem.getAttribute("data-name");

//     const descricaoPersonagem = document.getElementById("descricao-personagem");
//     descricaoPersonagem.innerText = personagem.getAttribute("data-description");
//   });
// });
