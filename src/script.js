idade = prompt("Quantos anos você tem?");
if (idade < 18) {
  alert("Você não possui a idade mínima");
}

//alert("Vamos jogar!")

if (idade >= 18) {
  escolhaJogador = prompt("Digite 1- Pedra, 2- Papel ou 3- Tesoura?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  // Jogador Pedra, Computador Pedra --> empate!
  // Jogador Papel, Computador Papel --> empate!
  // Jogador Tesoura, Computador Tesoura --> empate!

  if (escolhaJogador == escolhaComputador) {
    alert("Empate!");
  }

  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      // Jogador Pedra, Computador Papel --> Computador vence!
      alert("Computador venceu, escolheu Papel!");
    }
    if (escolhaComputador == 3) {
      // Jogador Pedra, Computador Tesoura --> Jogador vence!
      alert("Jogador venceu, escolheu Pedra!");
    }
  }

  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      // Jogador Papel, Computador Pedra --> Jogador vence!
      alert("Jogador venceu, escolheu Pedra!");
    }
    if (escolhaComputador == 3) {
      // Jogador Papel, Computador Tesoura --> Computador vence!
      alert("Computador venceu, ecolheu Tesoura!");
    }
  }

  if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      // Jogador Tesoura, Computador Pedra --> Computador vence!
      alert("Computador vence, escolheu Pedra!");
    }
    if (escolhaComputador == 2) {
      // Jogador Tesoura, Computador Papel --> Jogador vence!
      alert("Jogador venceu, escolheu Tesoura!");
    }
  }

  alert("escolhaComputador:  " + escolhaComputador);
}
