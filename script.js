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

// saber se uma carta já foi escolhida
let cardChosen = false;

// Função para mostrar um haiku aleatório 
function showRandomHaiku(event) {
  if (cardChosen) return; // Se uma carta já foi escolhida, não faz nada
  cardChosen = true; // Marca como escolhido

  // random de haiku
  const randomHaiku = haikus[Math.floor(Math.random() * haikus.length)];
  
  // Encontra o elemento de texto no verso da carta
  const haikuBack = event.currentTarget.querySelector('.card-back');
  haikuBack.textContent = randomHaiku;
  
  //   'flip' para a carta virar
  event.currentTarget.classList.add('flip');
  
  // Remove eventos de clique de todas as cartas
  document.querySelectorAll('.card').forEach(card => {
    card.removeEventListener('click', showRandomHaiku);
  });
}

//  evento clique a cada carta
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', showRandomHaiku);
});
