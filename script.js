
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

// verificar se uma carta já foi escolhida
let cardChosen = false;

//  mostrar um haiku aleatório ao clicar
function showRandomHaiku(event) {
  if (cardChosen) return; // Se uma carta já foi escolhida, não faz nada
  cardChosen = true; // Marca como escolhido

  // Selecciona um haiku aleatório
  const randomHaiku = haikus[Math.floor(Math.random() * haikus.length)];

  // mostra o haiku no pop-up
  showPopup(randomHaiku);

  //  'flip' para a carta virar
  event.currentTarget.classList.add('flip');

  // Remove eventos de clique de todas as cartas
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
  popupText.textContent = text; // insere o haiku no pop-up
  popup.style.display = "flex"; // mostra o pop-up
}

// fechar o pop-up
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
  cardChosen = true; // Permite escolher outra carta ao fechar o pop-up
});
