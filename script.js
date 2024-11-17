
const haikus = [
  "A música guia\na alma ao desconhecido.",
  "O amor persiste,\nmesmo nas sombras.",
  "Cada caminho\né uma escolha tua.",
  "Olha para trás\nsó se o coração pedir.",
  "Nas trevas, a luz\né o teu próprio canto.",
  "O rio flui lento,\nbasta segui-lo.",
  "A esperança renasce\ncomo o sol da manhã.",
  "O eco responde\nà pergunta não feita.",
  "Escuta o silêncio:\no que procuras está lá.",
  "Eurídice espera,\nmas segue o teu destino.",
  "As estrelas cantam\nse souberes ouvi-las.",
  "Perder é encontrar\nsob uma nova forma.",
  "Cada nota tocada\né um passo para a verdade.",
  "O véu da noite\nesconde o que já sabes.",
  "Segue o som\nque ressoa no teu peito.",
  "A tua jornada\nnão termina aqui.",
  "As respostas moram\nno fundo do espelho.",
  "O labirinto abre-se\ncom paciência.",
  "Na dúvida, dança,\ne o caminho surgirá.",
  "O amor é força\nquando ouvido no coração.",
  "Os deuses sorriem\nàqueles que ousam.",
  "Cuidado com o olhar:\no passado é frágil.",
  "O canto cura,\nmas também pode ferir.",
  "Cava fundo:\na resposta está lá.",
  "A chave é sempre\no teu coração.",
  "Aceita o que vier\ncomo um presente.",
  "O fim e o início\nsão o mesmo círculo.",
  "O sopro do vento\nsabe mais que tu.",
  "Sê como a água:\ntudo ultrapassará.",
  "Nem tudo o que brilha\né verdadeiro.",
  "O teu reflexo\nmostra quem já foste.",
  "Os passos hesitantes\ntambém fazem o caminho.",
  "Confia no som,\nnão na visão.",
  "Os mortos falam,\nse escutares o bastante.",
  "Canta, mesmo que\no mundo esteja mudo.",
  "Orfeu tocou\ne tudo parou.",
  "A harpa vibra,\nsente a sua mensagem.",
  "O destino curva-se\na quem canta.",
  "As sombras têm\nmuito a ensinar.",
  "Desce aos infernos,\nmas não fiques lá.",
  "O teu canto é único:\ncanta-o sem medo.",
  "O amanhã dança\ncom o hoje.",
  "O tempo espera,\nmas não muito.",
  "Nem tudo que desce\nfica lá para sempre.",
  "A melodia abre\nportas invisíveis.",
  "A escuridão acolhe,\nnão temas.",
  "O amor desafia\ntodas as leis.",
  "Os olhos cegam;\nos ouvidos guiam.",
  "A harmonia surge\ndo caos.",
  "Confia no toque,\nnão no olhar.",
  "A luz vem\nquando menos esperas.",
  "Mesmo no Hades,\nhá beleza.",
  "A tua canção\nguia-te de volta.",
  "Na dúvida, canta:\na resposta virá.",
  "O fim é o início\nde algo maior.",
  "Nem sempre ver\né acreditar.",
  "Orfeu confiou\ne quase perdeu.",
  "O canto é força,\na dúvida é fraqueza.",
  "A harpa vibra\nem tua alma.",
  "Segue os sons\nque chamam por ti.",
  "As cordas do destino\nsão invisíveis.",
  "O coração sabe,\no que a mente esquece.",
  "A resposta espera\nna próxima nota.",
  "Nem todos os ecos\nsão teus.",
  "O caminho à frente\né onde estás.",
  "A tua sombra sabe\nmais do que tu.",
  "Canta, e o mundo\ncantará contigo."
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
  cardChosen = false; // escolher outra carta ao fechar o pop-up
});
