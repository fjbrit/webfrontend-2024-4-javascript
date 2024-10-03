// Importando a biblioteca readline-sync 
const readline = require('readline-sync');

// Função de boas-vindas ao usuário
console.log('Bem vindo garçom!\n');

// Início do atendimento
iniciarAtendimento();

// Função para verificar se o usuário deseja encerrar ou voltar ao início
function verificarEncerrarOuVoltar(input) {
  if (typeof input === 'string' && input.toLowerCase() === 'e') {
    console.log('Atendimento encerrado.\n');
    process.exit(); // Encerra o programa
  } else if (typeof input === 'string' && input.toLowerCase() === 'v') {
    console.log('Voltando ao início...\n');
    iniciarAtendimento(); // Reinicia o atendimento
    process.exit(); // Termina o ciclo atual para recomeçar
  }
}

// Função principal de atendimento
function iniciarAtendimento() {
  // Capturando o número da mesa
  let input = readline.question('Digite o numero da mesa (ou "E" para encerrar, "V" para voltar):\n');
  verificarEncerrarOuVoltar(input);
  const numeroMesa = parseInt(input, 10);

  // Capturando o número de pessoas na mesa
  input = readline.question('Digite o número de pessoas na mesa (ou "E" para encerrar, "V" para voltar):\n');
  verificarEncerrarOuVoltar(input);
  const numeroPessoas = parseInt(input, 10);

  // Capturando o valor total da conta
  input = readline.questionFloat('Digite o valor total da conta (ou "E" para encerrar, "V" para voltar):\n');
  verificarEncerrarOuVoltar(input);
  const valorTotal = parseFloat(input);

  // Exibindo as opções de pagamento para o usuário
  let opcaoPagamento = '';
  let valorFinal = valorTotal;
  let metodoPagamento = '';

  // Laço para garantir que o garçom selecione uma opção de pagamento válida
  while (true) {
    console.log('Escolha o método de pagamento:\n');
    console.log('1 - PIX\n');
    console.log('2 - Dinheiro\n');
    console.log('3 - Cartão\n');
    console.log('(ou "E" para encerrar, "V" para voltar)\n');

    opcaoPagamento = readline.question('Digite o número ou o nome correspondente ao método de pagamento:\n').toLowerCase();
    verificarEncerrarOuVoltar(opcaoPagamento);

    // Verificando a escolha do método de pagamento, aceitando tanto número quanto nome
    if (opcaoPagamento === '1' || opcaoPagamento === 'pix') {
      metodoPagamento = 'PIX';
      const desconto = 0.1; // 10% de desconto
      valorFinal = valorTotal - (valorTotal * desconto);
      console.log(`Você escolheu PIX e recebeu um desconto de 10%. Valor final: R$ ${valorFinal.toFixed(2)}\n`);
      break;
    } else if (opcaoPagamento === '2' || opcaoPagamento === 'dinheiro') {
      metodoPagamento = 'Dinheiro';
      const desconto = 0.1; // 10% de desconto
      valorFinal = valorTotal - (valorTotal * desconto);
      console.log(`Você escolheu Dinheiro e recebeu um desconto de 10%. Valor final: R$ ${valorFinal.toFixed(2)}\n`);
      break;
    } else if (opcaoPagamento === '3' || opcaoPagamento === 'cartão' || opcaoPagamento === 'cartao') {
      metodoPagamento = 'Cartão';
      console.log(`Você escolheu Cartão. Sem desconto aplicado. Valor total: R$ ${valorFinal.toFixed(2)}\n`);
      break;
    } else {
      console.log('Opção de pagamento inválida. Por favor, escolha uma opção válida.\n');
    }
  }

  // Exibindo o resultado final
  console.log(`Número da mesa: ${numeroMesa}`);
  console.log(`Número de pessoas: ${numeroPessoas}`);
  console.log(`Método de pagamento: ${metodoPagamento}`);
  console.log(`Valor final da conta: R$ ${valorFinal.toFixed(2)}\n`);

  // Perguntando se deseja fechar a conta ou voltar para o início
  while (true) {
    console.log('O que deseja fazer?');
    console.log('1 - Fechar a conta (ou digite F)');
    console.log('2 - Voltar e reiniciar o atendimento (ou digite V)');
    console.log('(ou "E" para encerrar)\n');

    const fecharOuVoltar = readline.question('Digite o número correspondente ou a letra (F/V/E):\n').toLowerCase();

    verificarEncerrarOuVoltar(fecharOuVoltar); // Verifica se o usuário quer encerrar ou voltar

    if (fecharOuVoltar === '1' || fecharOuVoltar === 'f' || fecharOuVoltar === 'fechar') {
      console.log('Mesa fechada, obrigado!\n');
      break;
    } else if (fecharOuVoltar === '2' || fecharOuVoltar === 'v' || fecharOuVoltar === 'voltar') {
      iniciarAtendimento(); // Retorna para o início do atendimento
      break;
    } else {
      console.log('Opção inválida. Por favor, escolha "1 - Fechar", "2 - Voltar", "F", "V" ou "E".\n');
    }
  }
}

// Iniciar o processo de atendimento
iniciarAtendimento();
