// Menu Hamburger
const btnMobile = document.getElementById("btnMobile");

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById("nav");
  nav.classList.toggle('active');
   const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if(active) {event.currentTarget.setAttribute('aria-label', "Fechar Menu")
  } else {
event.currentTarget.setAttribute('aria-label', 'Abrir Menu')}

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Animação após carregamento

function apareceElemento() {
  const introducaoConteudo = document.querySelector(".introducao-conteudo");
  introducaoConteudo.classList.add("surgeEsquerda");
  const introducaoImagem = document.querySelector(".introducao-imagem");
  introducaoImagem.classList.add("surgeDireita");

}

window.addEventListener('load', apareceElemento);