// Array de haikus em português
const haikus = [
  "Vento que passa,\na vida é uma dança,\nleve como o ar.",
  "Rios correm livres,\nsem pressa de chegar lá,\no destino é o fluir.",
  "Folhas caem no chão,\nciclos que se renovam,\nvida em movimento.",
  "No silêncio, paz,\nouço o pulsar do mundo,\nsou parte de tudo.",
  "Sol nasce e se põe,\ntempo que não volta mais,\nabraça o presente.",
  "Caminho incerto,\npasso a passo vou em frente,\nsou viajante.",
  "Árvore frondosa,\nraízes firmes no chão,\na vida se expande.",
  "Mar infinito,\nas ondas vêm e vão só,\naceita o agora.",
  "Flor que desabrocha,\nbeleza tão passageira,\nvive sem temor.",
  "No reflexo d'água,\nvejo o mundo invertido,\nverdade oculta."
];

// Variável para controlar se uma carta já foi escolhida
let cardChosen = false;

// Função para mostrar um haiku aleatório ao clicar
function showRandomHaiku(event) {
  if (cardChosen) return; // Se uma carta já foi escolhida, não faz nada
  cardChosen = true; // Marca como escolhido

  // Seleciona um haiku aleatório
  const randomHaiku = haikus[Math.floor(Math.random() * haikus.length)];
  
  // Encontra o elemento de texto no verso da carta
  const haikuBack = event.currentTarget.querySelector('.card-back');
  haikuBack.textContent = randomHaiku;
  
  // Aplica a classe 'flip' para a carta virar
  event.currentTarget.classList.add('flip');
  
  // Remove eventos de clique de todas as cartas
  document.querySelectorAll('.card').forEach(card => {
    card.removeEventListener('click', showRandomHaiku);
  });
}

// Adiciona evento de clique a cada carta
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', showRandomHaiku);
});