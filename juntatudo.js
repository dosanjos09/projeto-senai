function mudarAba(evt, nomeAba) {
  const conteudos = document.getElementsByClassName("conteudo-aba");
  for (let i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = "none";
  }

  const botoes = document.getElementsByClassName("botao-aba");
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].className = botoes[i].className.replace(" ativo", "");
  }

  document.getElementById(nomeAba).style.display = "block";
  evt.currentTarget.className += " ativo";
}