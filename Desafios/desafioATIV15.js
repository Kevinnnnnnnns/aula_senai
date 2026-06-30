// ============================================================
//   DESAFIOS (para quem já terminou a atividade 15)
//   Funções com Parâmetros e Retornos
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Validador de senhas
// ------------------------------------------------------------
// Crie um conjunto de funções para validar uma senha.
//
// a) 'temTamanhoMinimo(senha, min)'  → true/false (senha.length >= min).
// b) 'temNumero(senha)'              → true se houver algum dígito (0-9).
// c) 'temMaiuscula(senha)'           → true se houver alguma letra maiúscula.
// d) 'temEspecial(senha)'            → true se houver !@#$%&*?
// e) 'validarSenha(senha)'           → retorna um OBJETO com:
//        { valida, motivos }
//    'motivos' é um VETOR de strings com tudo que falta. Ex:
//        { valida: false, motivos: ["Mínimo de 8 caracteres", "Deve conter número"] }
// f) Pergunte uma senha ao usuário e exiba o resultado da validação.

// → Seu código aqui:

const prompt = require("prompt-sync")();

console.log("\n[DESAFIO 1 - VALIDADOR DE SENHAS]");

// a) Função que verifica o TAMANHO DA SENHA
function temTamanhoMinimo(senha, min) {
  // Se a senha tem 8 caracteres ou mais, retorna true
  // Senão, retorna false
  if (senha.length >= min) {
    return true;
  } else {
    return false;
  }
}

// b) Função que verifica se tem NÚMERO
function temNumero(senha) {
  // Percorre cada letra da senha
  for (let i = 0; i < senha.length; i++) {
    // Pega cada caractere: "a", "1", "B", etc
    let letra = senha[i];
    
    // Verifica se é um número (0 a 9)
    if (letra === "0" || letra === "1" || letra === "2" || 
        letra === "3" || letra === "4" || letra === "5" || 
        letra === "6" || letra === "7" || letra === "8" || 
        letra === "9") {
      return true; // Achou um número!
    }
  }
  return false; // Não achou nenhum número
}

// c) Função que verifica se tem MAIÚSCULA
function temMaiuscula(senha) {
  // Percorre cada letra da senha
  for (let i = 0; i < senha.length; i++) {
    let letra = senha[i];
    
    // Verifica se é uma letra maiúscula (A até Z)
    if (letra >= "A" && letra <= "Z") {
      return true; // Achou uma maiúscula!
    }
  }
  return false; // Não achou nenhuma maiúscula
}

// d) Função que verifica se tem CARACTERE ESPECIAL
function temEspecial(senha) {
  // Lista dos caracteres especiais que aceitamos
  let especiais = "!@#$%&*?";
  
  // Percorre cada letra da senha
  for (let i = 0; i < senha.length; i++) {
    let letra = senha[i];
    
    // Procura se esse caractere está na lista de especiais
    if (especiais.includes(letra)) {
      return true; // Achou um caractere especial!
    }
  }
  return false; // Não achou nenhum especial
}

// e) Função que VALIDA A SENHA COMPLETA
function validarSenha(senha) {
  // Cria um array vazio para guardar os PROBLEMAS
  let motivos = [];
  
  // Verifica cada requisito
  // Se não tem tamanho mínimo, adiciona o motivo
  if (!temTamanhoMinimo(senha, 8)) {
    motivos.push("Mínimo de 8 caracteres");
  }
  
  // Se não tem número, adiciona o motivo
  if (!temNumero(senha)) {
    motivos.push("Deve conter número");
  }
  
  // Se não tem maiúscula, adiciona o motivo
  if (!temMaiuscula(senha)) {
    motivos.push("Deve conter letra maiúscula");
  }
  
  // Se não tem especial, adiciona o motivo
  if (!temEspecial(senha)) {
    motivos.push("Deve conter caractere especial (!@#$%&*?)");
  }
  
  // Retorna um OBJETO com a resposta
  let resultado = {
    valida: motivos.length === 0, // É válida se não tem nenhum motivo
    motivos: motivos // Os problemas encontrados
  };
  
  return resultado;
}

// f) Pede a senha e valida
let senha = prompt("Digite uma senha: ");
let resultado = validarSenha(senha);

// Mostra o resultado
console.log("\nResultado da validação:");
console.log("Senha válida?", resultado.valida);

if (resultado.motivos.length > 0) {
  console.log("\nProblemas encontrados:");
  // Mostra cada problema em uma nova linha
  for (let i = 0; i < resultado.motivos.length; i++) {
    console.log("  - " + resultado.motivos[i]);
  }
} else {
  console.log("✓ Parabéns! Senha atende todos os critérios!");
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// Crie uma "biblioteca" de funções de conversão.
//
// a) 'celsiusParaFahrenheit(c)'  → C * 1.8 + 32
// b) 'fahrenheitParaCelsius(f)'  → (F - 32) / 1.8
// c) 'kmParaMilhas(km)'          → km * 0.621371
// d) 'milhasParaKm(mi)'          → mi / 0.621371
// e) 'kgParaLibras(kg)'          → kg * 2.20462
// f) 'librasParaKg(lb)'          → lb / 2.20462
//
// g) Crie 'converter(valor, dePara)' que recebe a unidade de origem
//    e a unidade de destino e RETORNA o valor convertido, chamando a função correta.
//
// h) Faça um menu (do...while) onde o usuário digita o valor, e a unidade para qual deseja converter
//    e mostre o resultado formatado com toFixed(2).

// → Seu código aqui:

console.log("\n[DESAFIO 2 - CONVERSOR DE UNIDADES]");

// a) Converte Celsius para Fahrenheit
function celsiusParaFahrenheit(c) {
  let resultado = c * 1.8 + 32;
  return resultado;
}

// b) Converte Fahrenheit para Celsius
function fahrenheitParaCelsius(f) {
  let resultado = (f - 32) / 1.8;
  return resultado;
}

// c) Converte Quilômetros para Milhas
function kmParaMilhas(km) {
  let resultado = km * 0.621371;
  return resultado;
}

// d) Converte Milhas para Quilômetros
function milhasParaKm(mi) {
  let resultado = mi / 0.621371;
  return resultado;
}

// e) Converte Quilogramas para Libras
function kgParaLibras(kg) {
  let resultado = kg * 2.20462;
  return resultado;
}

// f) Converte Libras para Quilogramas
function librasParaKg(lb) {
  let resultado = lb / 2.20462;
  return resultado;
}

// g) Função genérica que escolhe qual conversão fazer
function converter(valor, dePara) {
  // Recebe o valor e a conversão desejada
  // E chama a função correta
  
  if (dePara === "C-F") {
    return celsiusParaFahrenheit(valor);
  }
  else if (dePara === "F-C") {
    return fahrenheitParaCelsius(valor);
  }
  else if (dePara === "KM-MI") {
    return kmParaMilhas(valor);
  }
  else if (dePara === "MI-KM") {
    return milhasParaKm(valor);
  }
  else if (dePara === "KG-LB") {
    return kgParaLibras(valor);
  }
  else if (dePara === "LB-KG") {
    return librasParaKg(valor);
  }
}

// h) Menu interativo
let continuarConvertendo = true;

do {
  console.log("\n--- Menu de Conversão ---");
  console.log("1. Celsius → Fahrenheit");
  console.log("2. Fahrenheit → Celsius");
  console.log("3. Quilômetros → Milhas");
  console.log("4. Milhas → Quilômetros");
  console.log("5. Quilogramas → Libras");
  console.log("6. Libras → Quilogramas");
  console.log("7. Sair");
  
  let opcao = prompt("\nEscolha uma conversão (1-7): ");
  
  // Se escolheu sair, para o programa
  if (opcao === "7") {
    console.log("Até logo!");
    continuarConvertendo = false;
    break; // Sai do loop
  }
  
  // Pede o valor a converter
  let valor = parseFloat(prompt("Digite o valor: "));
  
  // Variável para guardar o resultado
  let resultado = null;
  let descricao = "";
  
  // Faz a conversão de acordo com a escolha
  if (opcao === "1") {
    resultado = converter(valor, "C-F");
    descricao = "°C para °F";
  }
  else if (opcao === "2") {
    resultado = converter(valor, "F-C");
    descricao = "°F para °C";
  }
  else if (opcao === "3") {
    resultado = converter(valor, "KM-MI");
    descricao = "km para milhas";
  }
  else if (opcao === "4") {
    resultado = converter(valor, "MI-KM");
    descricao = "milhas para km";
  }
  else if (opcao === "5") {
    resultado = converter(valor, "KG-LB");
    descricao = "kg para libras";
  }
  else if (opcao === "6") {
    resultado = converter(valor, "LB-KG");
    descricao = "libras para kg";
  }
  else {
    console.log("Opção inválida!");
    continue; // Volta ao começo do loop
  }
  
  // Mostra o resultado com 2 casas decimais
  if (resultado !== null) {
    console.log(`\n${valor} ${descricao} = ${resultado.toFixed(2)}`);
  }
  
} while (continuarConvertendo);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Quizz
// ------------------------------------------------------------
// a) Declare uma lista com 5 objetos, contendo cada objeto:
//    pergunta: "..."
//    jaRespondida: false
//    acertou: false
// b) Crie a função 'exibirPergunta' que exibe a pergunta de forma estilizada.
// c) Crie a função 'verificarResposta' que verifica se a resposta está correta.
// d) Crie a função 'iniciarQuiz' que chama as perguntas em sequência.
// e) Crie a função 'mostrarResultado' que exibe o resultado atual.
// f) Crie a função 'iniciarQuiz' para iniciar o quiz.

// → Seu código aqui:

console.log("\n[DESAFIO 3 - QUIZ]");

// a) Lista com as perguntas
let perguntas = [
  {
    pergunta: "Qual é a capital da França?",
    resposta: "paris",
    jaRespondida: false,
    acertou: false
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    resposta: "jupiter",
    jaRespondida: false,
    acertou: false
  },
  {
    pergunta: "Em que ano terminou a Segunda Guerra Mundial?",
    resposta: "1945",
    jaRespondida: false,
    acertou: false
  },
  {
    pergunta: "Qual elemento químico tem símbolo Au?",
    resposta: "ouro",
    jaRespondida: false,
    acertou: false
  },
  {
    pergunta: "Quantos continentes existem?",
    resposta: "7",
    jaRespondida: false,
    acertou: false
  }
];

// b) Função que exibe a pergunta de forma bonita
function exibirPergunta(pergunta, numero) {
  console.log("\n" + "=".repeat(40));
  console.log("Pergunta " + numero);
  console.log("=".repeat(40));
  console.log(pergunta.pergunta);
  console.log("=".repeat(40));
}

// c) Função que verifica se a resposta está correta
function verificarResposta(pergunta, respostaDoUsuario) {
  // Remove espaços em branco e transforma em minúscula
  let resposta = respostaDoUsuario.trim().toLowerCase();
  
  // Compara com a resposta correta
  if (resposta === pergunta.resposta) {
    return true;
  } else {
    return false;
  }
}

// d) Função que executa o quiz
function iniciarQuiz(listaDePerguntas) {
  let totalAcertos = 0;
  
  // Percorre cada pergunta
  for (let i = 0; i < listaDePerguntas.length; i++) {
    let perguntaAtual = listaDePerguntas[i];
    
    // Exibe a pergunta
    exibirPergunta(perguntaAtual, i + 1);
    
    // Pede a resposta
    let respostaDoUsuario = prompt("Sua resposta: ");
    
    // Verifica se acertou
    if (verificarResposta(perguntaAtual, respostaDoUsuario)) {
      console.log("✓ Correto!");
      perguntaAtual.acertou = true;
      totalAcertos++;
    } else {
      console.log("✗ Incorreto! A resposta correta é: " + perguntaAtual.resposta);
      perguntaAtual.acertou = false;
    }
    
    // Marca como respondida
    perguntaAtual.jaRespondida = true;
  }
  
  // Mostra o resultado final
  mostrarResultado(listaDePerguntas, totalAcertos);
}

// e) Função que mostra o resultado final
function mostrarResultado(listaDePerguntas, acertos) {
  let total = listaDePerguntas.length;
  let percentual = (acertos / total) * 100;
  
  console.log("\n" + "=".repeat(40));
  console.log("RESULTADO FINAL");
  console.log("=".repeat(40));
  console.log("Você acertou: " + acertos + " de " + total);
  console.log("Percentual: " + percentual.toFixed(1) + "%");
  console.log("=".repeat(40));
}

// Executa o quiz
iniciarQuiz(perguntas);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Banco de funcionários
// ------------------------------------------------------------
//
// a) Estrutura do funcionário:
//        { id, nome, cargo, salario, ativo }
// b) Crie funções:
//    - 'criarFuncionario(lista, nome, cargo, salario)' → adiciona um novo objeto (funcionário) em uma lista de funcionários.
//    - 'buscarPorId(lista, id)'                        → retorna o objeto ou null.
//    - 'atualizarSalario(lista, id, novoSalario)'      → true/false (atualizou ou não).
//    - 'desligar(lista, id)'                           → marca ativo = false; true/false.
//    - 'reintegrar(lista, id)'                         → marca ativo = true; true/false.
//    - 'totalFolha(lista)'                             → soma dos salários dos ATIVOS.
//    - 'mediaSalarial(lista)'                          → média dos salários dos ATIVOS.
//    - 'maiorSalario(lista)'                           → retorna o funcionário ATIVO
//                                                        com maior salário.
// c) Construa um menu (do...while + switch) que permita usar todas as funções.
// d) Após cada operação, exiba a lista atualizada com console.table().

// → Seu código aqui:

console.log("\n[DESAFIO 4 - BANCO DE FUNCIONÁRIOS]");

// Lista de funcionários (começa vazia)
let funcionarios = [];
let proximoId = 1;

// a) Função para criar um novo funcionário
function criarFuncionario(lista, nome, cargo, salario) {
  // Cria um novo funcionário
  let novoFunc = {
    id: proximoId,
    nome: nome,
    cargo: cargo,
    salario: salario,
    ativo: true
  };
  
  // Adiciona na lista
  lista.push(novoFunc);
  
  // Incrementa o ID para o próximo
  proximoId++;
}

// b) Função para buscar um funcionário pelo ID
function buscarPorId(lista, id) {
  // Percorre a lista procurando o ID
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      return lista[i]; // Achou! Retorna o funcionário
    }
  }
  return null; // Não achou
}

// b) Função para atualizar o salário
function atualizarSalario(lista, id, novoSalario) {
  let funcionario = buscarPorId(lista, id);
  
  if (funcionario !== null) {
    funcionario.salario = novoSalario;
    return true; // Conseguiu atualizar
  }
  return false; // Não achou o funcionário
}

// b) Função para desligar um funcionário
function desligar(lista, id) {
  let funcionario = buscarPorId(lista, id);
  
  if (funcionario !== null) {
    funcionario.ativo = false;
    return true;
  }
  return false;
}

// b) Função para reintegrar um funcionário
function reintegrar(lista, id) {
  let funcionario = buscarPorId(lista, id);
  
  if (funcionario !== null) {
    funcionario.ativo = true;
    return true;
  }
  return false;
}

// b) Função para calcular a FOLHA DE PAGAMENTO (soma dos ativos)
function totalFolha(lista) {
  let total = 0;
  
  // Percorre cada funcionário
  for (let i = 0; i < lista.length; i++) {
    // Se ele está ativo, soma o salário
    if (lista[i].ativo === true) {
      total = total + lista[i].salario;
    }
  }
  
  return total;
}

// b) Função para calcular a MÉDIA SALARIAL (apenas ativos)
function mediaSalarial(lista) {
  let total = totalFolha(lista);
  let quantosAtivos = 0;
  
  // Conta quantos funcionários ativos tem
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].ativo === true) {
      quantosAtivos++;
    }
  }
  
  // Se não tem ninguém ativo, retorna 0
  if (quantosAtivos === 0) {
    return 0;
  }
  
  // Divide o total pela quantidade
  return total / quantosAtivos;
}

// b) Função para encontrar o funcionário com MAIOR SALÁRIO (apenas ativo)
function maiorSalario(lista) {
  let maiorFunc = null;
  
  for (let i = 0; i < lista.length; i++) {
    // Se está ativo
    if (lista[i].ativo === true) {
      // Se é o primeiro ativo OU tem salário maior que o atual
      if (maiorFunc === null || lista[i].salario > maiorFunc.salario) {
        maiorFunc = lista[i];
      }
    }
  }
  
  return maiorFunc; // Pode ser null se não tiver ninguém ativo
}

// c) MENU INTERATIVO
let menuAberto = true;

do {
  console.log("\n╔═════════════════════════════════╗");
  console.log("║     MENU - BANCO DE FUNCIONÁRIOS║");
  console.log("╠═════════════════════════════════╣");
  console.log("║ 1. Adicionar funcionário        ║");
  console.log("║ 2. Buscar por ID                ║");
  console.log("║ 3. Atualizar salário            ║");
  console.log("║ 4. Desligar funcionário         ║");
  console.log("║ 5. Reintegrar funcionário       ║");
  console.log("║ 6. Ver total da folha           ║");
  console.log("║ 7. Ver média salarial           ║");
  console.log("║ 8. Ver maior salário            ║");
  console.log("║ 9. Listar todos                 ║");
  console.log("║ 0. Sair                         ║");
  console.log("╚═════════════════════════════════╝");

  let opcao = prompt("Escolha uma opção: ");

  if (opcao === "1") {
    // Adicionar
    let nome = prompt("Nome do funcionário: ");
    let cargo = prompt("Cargo: ");
    let salario = parseFloat(prompt("Salário: "));
    criarFuncionario(funcionarios, nome, cargo, salario);
    console.log("✓ Funcionário adicionado!");
    console.table(funcionarios);
  }
  else if (opcao === "2") {
    // Buscar
    let id = parseInt(prompt("ID do funcionário: "));
    let func = buscarPorId(funcionarios, id);
    if (func !== null) {
      console.table([func]);
    } else {
      console.log("Funcionário não encontrado!");
    }
  }
  else if (opcao === "3") {
    // Atualizar salário
    let id = parseInt(prompt("ID do funcionário: "));
    let novoSal = parseFloat(prompt("Novo salário: "));
    if (atualizarSalario(funcionarios, id, novoSal)) {
      console.log("✓ Salário atualizado!");
      console.table(funcionarios);
    } else {
      console.log("Funcionário não encontrado!");
    }
  }
  else if (opcao === "4") {
    // Desligar
    let id = parseInt(prompt("ID do funcionário a desligar: "));
    if (desligar(funcionarios, id)) {
      console.log("✓ Funcionário desligado!");
      console.table(funcionarios);
    } else {
      console.log("Funcionário não encontrado!");
    }
  }
  else if (opcao === "5") {
    // Reintegrar
    let id = parseInt(prompt("ID do funcionário a reintegrar: "));
    if (reintegrar(funcionarios, id)) {
      console.log("✓ Funcionário reintegrado!");
      console.table(funcionarios);
    } else {
      console.log("Funcionário não encontrado!");
    }
  }
  else if (opcao === "6") {
    // Total folha
    let folha = totalFolha(funcionarios);
    console.log("Total da folha de pagamento: R$ " + folha.toFixed(2));
  }
  else if (opcao === "7") {
    // Média
    let media = mediaSalarial(funcionarios);
    console.log("Média salarial: R$ " + media.toFixed(2));
  }
  else if (opcao === "8") {
    // Maior salário
    let maior = maiorSalario(funcionarios);
    if (maior !== null) {
      console.log("Funcionário com maior salário:");
      console.table([maior]);
    } else {
      console.log("Nenhum funcionário ativo!");
    }
  }
  else if (opcao === "9") {
    // Listar todos
    if (funcionarios.length === 0) {
      console.log("Nenhum funcionário cadastrado!");
    } else {
      console.table(funcionarios);
    }
  }
  else if (opcao === "0") {
    // Sair
    menuAberto = false;
    console.log("Saindo do sistema...");
  }
  else {
    console.log("Opção inválida!");
  }
} while (menuAberto);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Jogo de adivinhação modularizado
// ------------------------------------------------------------
// Recrie o "jogo da adivinhação", agora SEPARADO em funções.
//
// a) 'sortearNumero(min, max)'              → retorna um inteiro aleatório no intervalo.
// b) 'pedirPalpite(min, max)'               → pergunta e retorna um inteiro válido
//                                              (refaz a pergunta se estiver fora).
// c) 'compararPalpite(palpite, alvo)'       → retorna "maior", "menor" ou "acertou".
// d) 'classificarTentativas(qtd)'           → retorna uma string:
//                                              1     → "Sorte de principiante!"
//                                              2-3   → "Excelente!"
//                                              4-6   → "Bom!"
//                                              7-10  → "Regular."
//                                              >10   → "Continue tentando!"
// e) 'jogar(min, max)'                      → executa o jogo completo:
//                                              sorteia, faz o loop de palpites,
//                                              e RETORNA a quantidade de tentativas.
// f) No programa principal, pergunte se o usuário quer jogar de novo (keyInYN()).
//    Mantenha um vetor 'historico' com todas as partidas:
//        { partida, tentativas, classificacao }
//    Ao final, exiba console.table(historico).

// → Seu código aqui:

console.log("\n[DESAFIO 5 - JOGO DE ADIVINHAÇÃO MODULARIZADO]");

const prompt5 = require("prompt-sync")();

// a) Função para sortear um número aleatório
function sortearNumero(min, max) {
  // Gera um número aleatório
  let numero = Math.floor(Math.random() * (max - min + 1)) + min;
  return numero;
}

// b) Função para pedir um palpite válido
function pedirPalpite(min, max) {
  let palpite = null;
  
  // Fica pedindo enquanto não receber um número válido
  do {
    palpite = parseInt(prompt5("Digite um número entre " + min + " e " + max + ": "));
    
    // Verifica se é um número válido
    if (isNaN(palpite) || palpite < min || palpite > max) {
      console.log("Palpite inválido! Tente novamente.");
      palpite = null;
    }
  } while (palpite === null);
  
  return palpite;
}

// c) Função para comparar o palpite com o número sorteado
function compararPalpite(palpite, alvo) {
  if (palpite > alvo) {
    return "maior"; // O palpite é MAIOR que o alvo
  }
  else if (palpite < alvo) {
    return "menor"; // O palpite é MENOR que o alvo
  }
  else {
    return "acertou"; // Acertou!
  }
}

// d) Função para classificar a quantidade de tentativas
function classificarTentativas(qtd) {
  if (qtd === 1) {
    return "Sorte de principiante!";
  }
  else if (qtd >= 2 && qtd <= 3) {
    return "Excelente!";
  }
  else if (qtd >= 4 && qtd <= 6) {
    return "Bom!";
  }
  else if (qtd >= 7 && qtd <= 10) {
    return "Regular.";
  }
  else {
    return "Continue tentando!";
  }
}

// e) Função que EXECUTA UMA PARTIDA COMPLETA
function jogar(min, max) {
  // Sorteia um número
  let numero = sortearNumero(min, max);
  let tentativas = 0;
  let resultado = "";
  
  console.log("\nTente adivinhar um número entre " + min + " e " + max + "!\n");
  
  // Fica pedindo palpites até acertar
  do {
    let palpite = pedirPalpite(min, max);
    tentativas++;
    
    // Compara o palpite com o número sorteado
    resultado = compararPalpite(palpite, numero);
    
    if (resultado === "maior") {
      console.log("O número é MENOR!");
    }
    else if (resultado === "menor") {
      console.log("O número é MAIOR!");
    }
    else {
      console.log("✓ Você acertou em " + tentativas + " tentativa(s)!");
    }
  } while (resultado !== "acertou");
  
  // Retorna a quantidade de tentativas
  return tentativas;
}

// f) Programa principal com histórico
let historico = [];
let numeroPartida = 1;
let continuarJogando = true;

do {
  // Executa uma partida
  let tentativas = jogar(1, 100);
  
  // Classifica a partida
  let classificacao = classificarTentativas(tentativas);
  
  // Adiciona no histórico
  let partida = {
    partida: numeroPartida,
    tentativas: tentativas,
    classificacao: classificacao
  };
  historico.push(partida);
  
  numeroPartida++;
  
  // Pergunta se quer jogar novamente
  let resposta = prompt5("\nDeseja jogar novamente? (s/n): ");
  if (resposta === "s" || resposta === "sim") {
    continuarJogando = true;
  } else {
    continuarJogando = false;
  }
  
} while (continuarJogando);

// Mostra o histórico de todas as partidas
console.log("\n" + "=".repeat(40));
console.log("HISTÓRICO DE PARTIDAS");
console.log("=".repeat(40));
console.table(historico);

console.log("_______________________________");