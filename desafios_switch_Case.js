// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

const lerTeclado = require("readline-sync");

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:
// const cardapio = [
//   { numero: 1, nome: "Frango Grelhado", preco: 32.00 },
//   { numero: 2, nome: "Filé ao Molho", preco: 45.00 },
//   { numero: 3, nome: "Massa Italiana", preco: 28.00 },
//   { numero: 4, nome: "Salada Caesar", preco: 22.00 },
//   { numero: 5, nome: "Sopa do Dia", preco: 18.00 }
// ];

// const bebidas = [
//   { numero: 1, nome: "Suco Natural", preco: 9.00 },
//   { numero: 2, nome: "Refrigerante", preco: 7.00 },
//   { numero: 3, nome: "Água", preco: 4.00 },
//   { numero: 4, nome: "Sem bebida", preco: 0.00 }
// ];

// const nomeCliente = lerTeclado.question("Digite seu nome: ");
// const numeroPrato = lerTeclado.questionInt("Digite o número do prato desejado: ");
// const numeroBebida = lerTeclado.questionInt("Digite o número da bebida desejada: ");

// let nomePrato, precoPrato;
// switch (numeroPrato) {
//   case 1:
//     nomePrato = cardapio[0].nome;
//     precoPrato = cardapio[0].preco;
//     break;
//   case 2:
//     nomePrato = cardapio[1].nome;
//     precoPrato = cardapio[1].preco;
//     break;
//   case 3:
//     nomePrato = cardapio[2].nome;
//     precoPrato = cardapio[2].preco;
//     break;
//   case 4:
//     nomePrato = cardapio[3].nome;
//     precoPrato = cardapio[3].preco;
//     break;
//   case 5:
//     nomePrato = cardapio[4].nome;
//     precoPrato = cardapio[4].preco;
//     break;
//   default:
//     console.log("Item inválido.");
//     nomePrato = "Prato inválido";
//     precoPrato = 0.00;
// }

// let nomeBebida, precoBebida;
// switch (numeroBebida) {
//   case 1:
//     nomeBebida = bebidas[0].nome;
//     precoBebida = bebidas[0].preco;
//     break;
//   case 2:
//     nomeBebida = bebidas[1].nome;
//     precoBebida = bebidas[1].preco;
//     break;
//   case 3:
//     nomeBebida = bebidas[2].nome;
//     precoBebida = bebidas[2].preco;
//     break;
//   case 4:
//     nomeBebida = bebidas[3].nome;
//     precoBebida = bebidas[3].preco;
//     break;
//   default:
//     console.log("Item inválido.");
//     nomeBebida = "Bebida inválida";
//     precoBebida = 0.00;
// }

// let total = precoPrato + precoBebida;

// const pedido = {
//   nomeCliente,
//   nomePrato,
//   precoPrato,
//   nomeBebida,
//   precoBebida,
//   total
// };

// const pagarPix = lerTeclado.keyInYN("Vai pagar no pix? ");
// if (pagarPix) {
//   total *= 0.90;
//   pedido.total = total;
// }

// console.table(pedido);
// console.log(`${pedido.nomeCliente}, seu pedido é: ${pedido.nomePrato} + ${pedido.nomeBebida} = R$ ${pedido.total.toFixed(2)}`);
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:

// const valor = lerTeclado.questionFloat("Digite o valor a converter: ");
// const tipoConversao = lerTeclado.questionInt(
//   "Escolha o tipo de conversão:\n" +
//   "1 – Km para Milhas\n" +
//   "2 – Milhas para Km\n" +
//   "3 – Celsius para Fahrenheit\n" +
//   "4 – Fahrenheit para Celsius\n" +
//   "5 – Kg para Libras\n" +
//   "6 – Libras para Kg\n" +
//   "Digite o número da opção: "
// );

// let tipo, unidadeOriginal, resultado, unidadeResultado;

// switch (tipoConversao) {
//   case 1:
//     tipo = "Km para Milhas";
//     unidadeOriginal = "Km";
//     resultado = valor * 0.621371;
//     unidadeResultado = "Milhas";
//     break;
//   case 2:
//     tipo = "Milhas para Km";
//     unidadeOriginal = "Milhas";
//     resultado = valor * 1.60934;
//     unidadeResultado = "Km";
//     break;
//   case 3:
//     tipo = "Celsius para Fahrenheit";
//     unidadeOriginal = "°C";
//     resultado = (valor * 9/5) + 32;
//     unidadeResultado = "°F";
//     break;
//   case 4:
//     tipo = "Fahrenheit para Celsius";
//     unidadeOriginal = "°F";
//     resultado = (valor - 32) * 5/9;
//     unidadeResultado = "°C";
//     break;
//   case 5:
//     tipo = "Kg para Libras";
//     unidadeOriginal = "Kg";
//     resultado = valor * 2.20462;
//     unidadeResultado = "Libras";
//     break;
//   case 6:
//     tipo = "Libras para Kg";
//     unidadeOriginal = "Libras";
//     resultado = valor / 2.20462;
//     unidadeResultado = "Kg";
//     break;
//   default:
//     console.log("Tipo de conversão inválido.");
//     tipo = "Conversão inválida";
//     unidadeOriginal = "";
//     resultado = 0;
//     unidadeResultado = "";
// }

// const conversao = {
//   tipo,
//   valorOriginal: valor,
//   unidadeOriginal,
//   resultado,
//   unidadeResultado
// };

// console.table(conversao);
// if (tipo !== "Conversão inválida") {
//   console.log(`${conversao.valorOriginal} ${conversao.unidadeOriginal} = ${conversao.resultado.toFixed(2)} ${conversao.unidadeResultado}`);
// }

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:

// const jogada = ["pedra", "papel", "tesoura"];
// const computador = jogada[Math.floor(Math.random() * 3)];
// const escolhaUsuario = lerTeclado.questionInt(
//   "Escolha sua jogada:\n" +
//   "1 – Pedra\n" +
//   "2 – Papel\n" +
//   "3 – Tesoura\n" +
//   "Digite o número da opção: "
// );
// let usuario;
// switch (escolhaUsuario) {
//   case 1:
//     usuario = "pedra";
//     break;
//   case 2:
//     usuario = "papel";
//     break;
//   case 3:
//     usuario = "tesoura";
//     break;
//   default:
//     console.log("Jogada inválida.");
//     process.exit(0); // Encerra o programa
// }
// console.log(`Você: ${usuario} | Computador: ${computador}`);
// switch (usuario) {
//   case "pedra":
//     if (computador === "pedra") {
//       resultado = "Empate!";
//     } else if (computador === "papel") {
//       resultado = "Computador vence!";
//     } else {
//       resultado = "Você vence!";
//     }
//     break;
//   case "papel":
//     if (computador === "pedra") {
//       resultado = "Você vence!";
//     } else if (computador === "papel") {
//       resultado = "Empate!";
//     } else {
//       resultado = "Computador vence!";
//     }
//     break;
//   case "tesoura":
//     if (computador === "pedra") {
//       resultado = "Computador vence!";
//     } else if (computador === "papel") {
//       resultado = "Você vence!";
//     } else {
//       resultado = "Empate!";
//     }
//     break;
// }
// console.log(resultado);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:
const menuPrincipal = lerTeclado.questionInt(
  "Menu Principal:\n" +
  "1 – Internet\n" +
  "2 – TV\n" +
  "3 – Telefone\n" +
  "4 – Falar com atendente\n" +
  "0 – Encerrar\n" +
  "Digite o número da opção: "
);

switch (menuPrincipal) {
  case 1:
    const internet = lerTeclado.questionInt(
      "Internet:\n" +
      "1 – Sem conexão\n" +
      "2 – Conexão lenta\n" +
      "3 – Wi-Fi não aparece\n" +
      "Digite o número da opção: "
    );
    switch (internet) {
      case 1:
        console.log("Verifique se o modem está ligado e reinicie-o.");
        break;
      case 2:
        console.log("Tente reiniciar o modem e verifique a velocidade contratada.");
        break;
      case 3:
        console.log("Certifique-se de que o Wi-Fi está ativado no seu dispositivo e reinicie o modem.");
        break;
      default:
        console.log("Opção inválida.");
    }
    break;
  case 2:
    const tv = lerTeclado.questionInt(
      "TV:\n" +
      "1 – Sem sinal\n" +
      "2 – Imagem ruim\n" +
      "3 – Canais sumidos\n" +
      "Digite o número da opção: "
    );
    switch (tv) {
      case 1:
        console.log("Verifique as conexões do cabo e reinicie a TV.");
        break;
      case 2:
        console.log("Ajuste as configurações de imagem ou verifique a antena.");
        break;
      case 3:
        console.log("Reinicie a TV e verifique se há atualizações de software.");
        break;
      default:
        console.log("Opção inválida.");
    }
    break;
  case 3:
  case 4:
    console.log("Por favor, aguarde na linha.");
    break;
  case 0:
    console.log("Atendimento encerrado.");
    break;
  default:
    console.log("Opção inválida.");
}

console.log("_______________________________");