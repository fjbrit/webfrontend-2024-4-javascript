// Importando a biblioteca readline-sync
const readline = require('readline-sync');

function iniciarAtendimento() {
  console.log ('Olá Garçon Fulano! Seja bem vindo de volta.')
  
  // Capturando o número da mesa
  const numeroMesa = readline.questionInt('Digite o numero da mesa: ');

  // Capturando o número de pessoas na mesa
  const numeroPessoas = readline.questionInt('Digite o numero de pessoas na mesa: ');

  // Capturando o valor total da conta
  const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

  // Exibindo as opções de pagamento para o usuário
  let opcaoPagamento = '';
  let valorFinal = valorTotal;
  let metodoPagamento = '';

  // Laço para garantir que o garçom selecione uma opção de pagamento válida
  while (true) {
    console.log('Escolha o método de pagamento:');
    console.log('1 - PIX');
    console.log('2 - Dinheiro');
    console.log('3 - Cartão');

    opcaoPagamento = readline.question('Digite o numero ou o nome correspondente ao método de pagamento: ').toLowerCase();

    // Verificando a escolha do método de pagamento, aceitando tanto número quanto nome
    if (opcaoPagamento === '1' || opcaoPagamento === 'pix') {
      metodoPagamento = 'PIX';
      const desconto = 0.1; // 10% de desconto
      valorFinal = valorTotal - (valorTotal * desconto);
      console.log(`Você escolheu PIX e recebeu um desconto de 10%. Valor final: R$ ${valorFinal.toFixed(2)}`);
      break;
    } else if (opcaoPagamento === '2' || opcaoPagamento === 'dinheiro') {
      metodoPagamento = 'Dinheiro';
      const desconto = 0.1; // 10% de desconto
      valorFinal = valorTotal - (valorTotal * desconto);
      console.log(`Você escolheu Dinheiro e recebeu um desconto de 10%. Valor final: R$ ${valorFinal.toFixed(2)}`);
      break;
    } else if (opcaoPagamento === '3' || opcaoPagamento === 'cartão' || opcaoPagamento === 'cartao') {
      metodoPagamento = 'Cartão';
      console.log(`Você escolheu Cartão. Sem desconto aplicado. Valor total: R$ ${valorFinal.toFixed(2)}`);
      break;
    } else {
      console.log('Opção de pagamento inválida. Por favor, escolha uma opção válida.');
    }
  }

  // Exibindo o resultado final
  console.log(`Número da mesa: ${numeroMesa}`);
  console.log(`Número de pessoas: ${numeroPessoas}`);
  console.log(`Método de pagamento: ${metodoPagamento}`);
  console.log(`Valor final da conta: R$ ${valorFinal.toFixed(2)}`);

  // Perguntando se deseja fechar a conta ou voltar para o início
  while (true) {
    console.log('O que deseja fazer?');
    console.log('1 - Fechar a conta (ou digite F)');
    console.log('2 - Voltar e reiniciar o atendimento (ou digite V)');

    const fecharOuVoltar = readline.question('Digite o nu1mero correspondente ou a letra (F/V): ').toLowerCase();

    if (fecharOuVoltar === '1' || fecharOuVoltar === 'f' || fecharOuVoltar === 'fechar') {
      console.log('Mesa fechada, obrigado!');
      break;
    } else if (fecharOuVoltar === '2' || fecharOuVoltar === 'v' || fecharOuVoltar === 'voltar') {
      iniciarAtendimento(); // Retorna para o início do atendimento
      break;
    } else {
      console.log('Opção inválida. Por favor, escolha "1 - Fechar", "2 - Voltar", "F" ou "V".');
    }
  }
}

// Iniciar o processo de atendimento
iniciarAtendimento();
