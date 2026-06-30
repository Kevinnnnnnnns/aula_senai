// ============================================================
//   ATIVIDADE 10 – Estruturas de Controle (Repetição - While)
// ============================================================
const readline = require('readline-sync');


// ------------------------------------------------------------
// EXERCÍCIO 1 – While simples
// ------------------------------------------------------------
// a) Declare uma variável 'n' com valor 1.
// b) Usando while, exiba os números de 1 a 7 no console.
// c) Ao final, exiba: "Fim da contagem!"

// → Seu código aqui:
let n = 1;
while (n <= 7) {
    console.log(n);
    n++;
}
console.log("Fim da contagem!");
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem regressiva
// ------------------------------------------------------------
// a) Declare uma variável 'regressiva' com valor 10.
// b) Usando while, exiba a contagem de 10 até 1.
// c) Ao final, exiba: "Lançamento ON!"

// → Seu código aqui:
let regressiva = 10;
while (regressiva >= 1) {
    console.log(regressiva);
    regressiva--;
}
console.log("Lançamento ON!");
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Validação de entrada
// ------------------------------------------------------------
// a) Usando while, peça ao usuário um número entre 1 e 5 e repita enquanto o valor for inválido.
//    A cada entrada inválida, exiba: "Valor fora do intervalo. Tente novamente."
// b) Quando o valor for válido, exiba: "Você escolheu: <número>"

// → Seu código aqui:
let numero3 = readline.questionInt("Digite um numero entre 1 e 5: ");
while (numero3 < 1 || numero3 > 5) {
    console.log("Valor fora do intervalo. Tente novamente.");
    numero3 = readline.questionInt("Digite um numero entre 1 e 5: ");
}
console.log(`Você escolheu: ${numero3}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Acumulador com while
// ------------------------------------------------------------
// a) Usando while, peça ao usuário números até que ele digite 0.
// b) Acumule a soma de todos os números digitados.
// c) Conte quantos números foram digitados (exceto o 0).
// d) Ao final, exiba a soma, a quantidade de numeros digitados e quais foram os números digitados.

// → Seu código aqui:
let soma = 0;
let quantidade = 0;
let numerosDigitados = [];

let numero4 = readline.questionInt("Digite um numero (0 para parar): ");
while (numero4 !== 0) {
    soma += numero4;
    quantidade++;
    numerosDigitados.push(numero4);
    numero4 = readline.questionInt("Digite um numero (0 para parar): ");
}
console.log(`Soma: ${soma}`);
console.log(`Quantidade de numeros digitados: ${quantidade}`);
console.log(`Numeros digitados: ${numerosDigitados.join(", ")}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Média com while e validação
// ------------------------------------------------------------
// a) Usando while, peça ao usuário notas de 0 a 10 até que ele digite -1 para encerrar.
//    Se a nota for inválida (< 0 e diferente de -1, ou > 10), exiba: "Nota inválida." e peça novamente.
// b) Calcule e exiba a média.

// → Seu código aqui:
let nota;
let somaNotas = 0;
let qtdNotas = 0;

nota = readline.questionFloat("Digite uma nota de 0 a 10 (-1 para encerrar): ");
while (nota !== -1) {
    if (nota < 0 || nota > 10) {
        console.log("Nota invalida.");
    } else {
        somaNotas += nota;
        qtdNotas++;
    }
    nota = readline.questionFloat("Digite uma nota de 0 a 10 (-1 para encerrar): ");
}

if (qtdNotas > 0) {
    console.log(`Media: ${(somaNotas / qtdNotas).toFixed(2)}`);
} else {
    console.log("Nenhuma nota valida foi digitada.");
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Do...while: menu simples
// ------------------------------------------------------------
// a) Usando do...while, exiba um menu repetitivo:
//    1 – Exibir hora atual  (use: new Date().toLocaleTimeString())
//    2 – Exibir data atual  (use: new Date().toLocaleDateString())
//    0 – Sair
// b) Processe a opção com switch/case.
// c) O menu deve repetir até o usuário escolher 0.

// → Seu código aqui:
let opcao;
do {
    console.log("\n1 - Exibir hora atual");
    console.log("2 - Exibir data atual");
    console.log("0 - Sair");
    opcao = readline.questionInt("Escolha uma opcao: ");

    switch (opcao) {
        case 1:
            console.log(new Date().toLocaleTimeString());
            break;
        case 2:
            console.log(new Date().toLocaleDateString());
            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Opcao invalida.");
    }
} while (opcao !== 0);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Adivinhe o número (while)
// ------------------------------------------------------------
// a) Gere um número secreto aleatório de 1 a 50 (Math.random())
// b) Peça o nome do jogador.
// c) Usando while, repita até o jogador acertar:
//    - Peça um palpite.
//    - Se muito alto, exiba: "Muito alto! Tente menor."
//    - Se muito baixo, exiba: "Muito baixo! Tente maior."
//    - Se acertou, saia do while.
// d) Ao acertar, exiba:
//    "<nome> acertou após <tentativas> tentativa(s)! O número era <secreto>."

// → Seu código aqui:
const secreto = Math.floor(Math.random() * 50) + 1;
const nome = readline.question("Qual o seu nome? ");
let tentativas = 0;
let palpite;

while (palpite !== secreto) {
    palpite = readline.questionInt("Digite um palpite entre 1 e 50: ");
    tentativas++;
    if (palpite > secreto) {
        console.log("Muito alto! Tente menor.");
    } else if (palpite < secreto) {
        console.log("Muito baixo! Tente maior.");
    } else {
        console.log(`${nome} acertou apos ${tentativas} tentativa(s)! O numero era ${secreto}.`);
    }
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:
let numTabuada = readline.questionInt("Digite um numero inteiro: ");
let i = 1;
while (i <= 10) {
    console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
    i++;
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contador com condição composta
// ------------------------------------------------------------
// a) Declare 'saldo' com valor 1000 e 'rodada' com valor 0.
// b) Usando while, simule saques aleatórios enquanto o saldo for maior que 0 E a rodada for menor que 10:
//    - A cada rodada, gere um saque aleatório de 50 a 200:
//    - Se o saque for maior que o saldo, exiba: "Saldo insuficiente. Fim!" e encerre.
//    - Caso contrário, desconte do saldo e exiba:
//      "Rodada <rodada>: sacou R$ <saque> | Novo saldo: R$ <saldo>"
// c) Ao final, exiba o saldo restante e o total de rodadas.

// → Seu código aqui:
let saldo = 1000;
let rodada = 0;

while (saldo > 0 && rodada < 10) {
    rodada++;
    let saque = Math.floor(Math.random() * (200 - 50 + 1)) + 50;

    if (saque > saldo) {
        console.log("Saldo insuficiente. Fim!");
        break;
    } else {
        saldo -= saque;
        console.log(`Rodada ${rodada}: sacou R$ ${saque} | Novo saldo: R$ ${saldo}`);
    }
}
console.log(`Saldo restante: R$ ${saldo}`);
console.log(`Total de rodadas: ${rodada}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Do...while: cadastro em loop
// ------------------------------------------------------------
// a) Crie um array vazio 'contatos'.
// b) Usando do...while, repita:
//    - Peça nome e telefone do contato.
//    - Adicione um objeto { nome, telefone } ao array.
//    - Pergunte: "Adicionar outro contato?" (keyInYN()).
//    - Repita enquanto o usuário responder que sim.
// c) Ao sair do loop, exiba todos os contatos com console.table().
// d) Exiba: "Total de contatos cadastrados: <qtd>"

// → Seu código aqui:
let contatos = [];
let adicionar;

do {
    let nomeContato = readline.question("Nome do contato: ");
    let telefone = readline.question("Telefone do contato: ");
    contatos.push({ nome: nomeContato, telefone: telefone });
    adicionar = readline.keyInYNStrict("Adicionar outro contato?");
} while (adicionar);

console.table(contatos);
console.log(`Total de contatos cadastrados: ${contatos.length}`);
console.log("_______________________________");