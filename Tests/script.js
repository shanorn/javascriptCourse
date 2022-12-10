// Lista de jugadores
const players = [
  "Vinicius",
  "Messi",
  "Ronaldo",
  "Pedri",
  "Mbappe",
  "Modric",
  "Militao",
  "Morata",
  "Valverde",
  "Benzema",
  "Pique",
];

// Lista de vocales
const listaVocales = "aeiouAEIOU";

// Bucle que recorre la lista de jugadores
for (let player in players) {
  // Contador de vocales por nombre
  let vocales = 0;
  // Bucle que recorre el nombre letra a letra
  for (let i = 0; i < players[player].length; i++) {
    // Se comprueba si la letra en cuestión esta incluido en nuestra lista de vocales
    if (listaVocales.includes(players[player].charAt(i))) {
      vocales++;
    }
  }
  // Muestro el jugador junto al número de vocales de su nombre
  console.log(`${players[player]} tiene ${vocales}`);
}
