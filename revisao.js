// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
// ============================================================

let lerTeclado = require('readline-sync');
// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:
// const usuario = {
//     nome: lerTeclado.question("Me diga seu nome: "),
//     idade: lerTeclado.questionInt("Me informe sua idade: "),
//     profissao: lerTeclado.question("Qual sua profissao: "),
//     cidade: lerTeclado.question("Qual a cidade q vc reside: "),
//     gosta: lerTeclado.keyIn("Voce gosta de JavaScript. s/n: "),
//     comidas_favoritas: [
//             lerTeclado.question("Me diga qual a sua primeira comida favorita: "),
//             lerTeclado.question("Me diga qual a sua segunda comida favorita: "),
//             lerTeclado.question("Me diga qual a sua terceira comida favorita: "),
//     ],
//     moraCom: [
//         {
//             nome: lerTeclado.question("Nome de uma pessoa com quem voce mora: "),
//             idade: lerTeclado.questionInt("Idade dessa pessoa: ")
//         },
//         {
//             nome: lerTeclado.question("Nome da outra pessoa: "),
//             idade: lerTeclado.questionInt("Qual a idade dessa pessoa: ")
//         }
//     ]
// }
// const cadastro = [usuario]
// console.table(usuario)
// console.log (`
//  Nome: ${usuario.nome}.
//  Idade: ${usuario.idade} anos. 
//  Profissão: ${usuario.profissao} na cidade de ${usuario.cidade}.
//  Gosta de java: ${usuario.gosta ? 'gosta' : 'não gosta'} de java script.`);
 console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e cidade de cada uma).
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 2º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
// const pessoa1 = {
//     nome: lerTeclado.question("Me diga seu nome: "),
//     idade: lerTeclado.questionInt("Me informe sua idade: "),
//     endereco: {
//         cidade: lerTeclado.question("Qual a cidade q vc reside: "),
//         rua: lerTeclado.question("Qual Rua: ")
// }
// }
// const pessoa2 = {
//     nome: lerTeclado.question("Me diga seu nome: "),
//     idade: lerTeclado.questionInt("Me informe sua idade: "),
//     endereco: {
//         cidade: lerTeclado.question("Qual a cidade q vc reside: "),
//         rua: lerTeclado.question("Qual Rua: ")
//     }
// }
// const amigos = [pessoa1, pessoa2]
// console.table(amigos)
// console.log(`Nome: ${amigos[1].nome} Idade: ${amigos[1].idade}`)
// console.log(`Cidade: ${amigos[1].endereco.cidade}, Rua: ${amigos[0].endereco.rua}`)
// console.log(`Nome: ${amigos[0].nome} rua: ${amigos[1].endereco.rua}`)
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:
// console.info(" Bem-vindo ao sistema de pedidos!");
// console.info("Você irá montar seu pedido.\n");

// // MENU
// console.log("========== MENU ==========");
// console.log("    ENTRADAS");
// console.log("1 - Salada");
// console.log("2 - Sopa");
// console.log("3 - Bruschetta");

// console.log("\n PRATOS PRINCIPAIS");
// console.log("1 - Macarrão");
// console.log("2 - Pizza");
// console.log("3 - Hambúrguer");

// console.log("\n SOBREMESAS");
// console.log("1 - Sorvete");
// console.log("2 - Bolo");
// console.log("3 - Pudim");

// console.log("\n BEBIDAS");
// console.log("1 - Água");
// console.log("2 - Refrigerante");
// console.log("3 - Suco");
// console.log("4 - Café");
// console.log("==========================\n");

// // ESCOLHAS
// let entrada = lerTeclado.question("Escolha sua entrada: ");
// let pratoPrincipal = lerTeclado.question("Escolha seu prato principal: ");
// let sobremesa = lerTeclado.question("Escolha sua sobremesa: ");

// let bebida1 = lerTeclado.question("Escolha a primeira bebida: ");
// let bebida2 = lerTeclado.question("Escolha a segunda bebida: ");

// // OBJETO PEDIDO
// const pedido = {
//     entrada: entrada,
//     pratoPrincipal: pratoPrincipal,
//     sobremesa: sobremesa,
//     listaBebidas: [bebida1, bebida2]
// };

// // MOSTRAR PEDIDO
// console.table(pedido);

// // MENSAGEM FINAL
// console.log(`Seu pedido:
// Entrada: ${pedido.entrada},
// Prato Principal: ${pedido.pratoPrincipal},
// Sobremesa: ${pedido.sobremesa},
// Bebida 1: ${pedido.listaBebidas[0]},
// Bebida 2: ${pedido.listaBebidas[1]}.
// Bom apetite! `);
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:
// const perfil = {
//     apelido: lerTeclado.question("Me diga qual seu Nick no game: "),
//     jogoFavorito: lerTeclado.question("Me diga qual seu game favorito: "),
//     horasTotaisJogadas: lerTeclado.question("Quantas horas voce tem nesse jogo: "),
//     jogaEmTime: lerTeclado.keyInYN("Voce joga em time?: ")
// }
// console.log (`${perfil.jogaEmTime ? 'Jogo' : 'não jogo'} em time.`);
// console.table(perfil)
// console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.")
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:
const pessoa1 = {
    nome: lerTeclado.question("Me informe seu nome: "),
    cidade: lerTeclado.question("Me diga qual sua cidade favorita: ")
}
const pessoa2 = {
    nome: lerTeclado.question("Me informe seu nome: "),
    cidade: lerTeclado.question("Me diga qual sua cidade favorita: ")
}
const pessoa3 = {
    nome: lerTeclado.question("Me informe seu nome: "),
    cidade: lerTeclado.question("Me diga qual sua cidade favorita: ")
}
console.table(pessoa1)
const viajantes = [pessoa1, pessoa2, pessoa3]
console.table(viajantes)
console.info(`Quantidade de viajantes: ${viajantes.length}`)
console.log(`A cidade favorita do(a) ${pessoa2.nome} é ${pessoa2.cidade}`)
console.log(`Oie ${pessoa1.nome}`)
console.log("_______________________________");