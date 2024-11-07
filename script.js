// Array de haikus
const haikus = [
  "Vento que passa,\na dança da vida,\nleve como ar.",
  "Rios correm livres,\no destino é fluir,\nsó o momento.",
  "Folhas no chão,\nciclo que se renova,\no mover da vida.",
  "No silêncio,\npulsar do mundo,\nsou parte do todo.",
  "Sol nasce e se põe,\no tempo é fugaz,\nabraça o agora.",
  "Caminho incerto,\num passo por vez,\nsou viajante.",
  "Árvore firme,\nraízes profundas,\na vida cresce.",
  "Mar infinito,\nondas vêm e vão,\naceita o agora.",
  "Flor desabrocha,\nbeleza breve,\nsem temor.",
  "Na água vejo,\num mundo ao avesso,\na verdade."
];

// ver se uma carta já foi escolhida
let cardChosen = false;

//  mostrar um haiku aleatório ao clicar
function showRandomHaiku(event) {
  if (cardChosen) return; // Se uma carta já foi escolhida, não faz nada
  cardChosen = true; // Marca como escolhido

  // Seleciona um haiku aleatório
  const randomHaiku = haikus[Math.floor(Math.random() * haikus.length)];
  
  // Encontra o texto no verso da carta
  const haikuBack = event.currentTarget.querySelector('.card-back');
  haikuBack.textContent = randomHaiku;

  //  para a carta virar
  event.currentTarget.classList.add('flip');
  
  // mostra o haiku no pop-up
  showPopup(randomHaiku);

  // Remove o clique de todas as cartas
  document.querySelectorAll('.card').forEach(card => {
    card.removeEventListener('click', showRandomHaiku);
  });
}

//  clique a cada carta
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', showRandomHaiku);
});

// Seleciona elementos do pop-up
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupClose = document.getElementById("popup-close");

//  mostrar o pop-up com o haiku
function showPopup(text) {
  popupText.textContent = text; // Insere o haiku no pop-up
  popup.style.display = "flex"; // Exibe o pop-up
}

// clique para fechar o pop-up
popupClose.addEventListener("click", () => {
  popup.style.display = "
