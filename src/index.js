// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');

// Lógica para aplicar desconto para pagamento em PIX ou dinheiro
let valorFinal = valorTotal;

if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
  const desconto = 0.1; // 10% de desconto
  valorFinal = valorTotal - (valorTotal * desconto);
  console.log(`Você recebeu um desconto de 10%. Valor final: R$ ${valorFinal.toFixed(2)}`);
} else {
  console.log(`Sem desconto aplicado. Valor total: R$ ${valorFinal.toFixed(2)}`);
}

// Exibindo o resultado final
console.log(`Número de pessoas: ${numeroPessoas}`);
console.log(`Método de pagamento: ${metodoPagamento}`);
console.log(`Valor final da conta: R$ ${valorFinal.toFixed(2)}`);
