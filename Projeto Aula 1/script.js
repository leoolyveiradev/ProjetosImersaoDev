let valorDolar = parseFloat(prompt("Digite o valor em dólares:"));

// Define a taxa de câmbio fixa (você pode atualizar conforme necessário)
let taxaCambio = 5.683; // Exemplo: 1 dólar = 5.683 reais

// Calcula o valor convertido
if (!isNaN(valorDolar)) {
  let valorReais = valorDolar * taxaCambio;

  // Formata o valor em reais
  let valorFormatado = valorReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Exibe o resultado
  alert(`O valor em reais é: ${valorFormatado}`);
} else {
  alert("Por favor, insira um número válido.");
}
