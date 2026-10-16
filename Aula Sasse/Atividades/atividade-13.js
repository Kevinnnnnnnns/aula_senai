const readline = require("readline-sync");

// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:
const m1 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

console.log("EXERCÍCIO 1");
console.log(`Número de linhas: ${m1.length}`);
console.log(`Número de colunas: ${m1[0].length}`);
console.log(`Elemento central: ${m1[1][1]}`);
console.log(`Canto inferior direito: ${m1[m1.length - 1][m1[0].length - 1]}`);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:
const m2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let somaTotal = 0;
console.log("EXERCÍCIO 2");
for (let i = 0; i < m2.length; i++) {
  for (let j = 0; j < m2[i].length; j++) {
    console.log(`m[${i}][${j}] = ${m2[i][j]}`);
    somaTotal += m2[i][j];
  }
}
console.log(`Soma de todos os elementos: ${somaTotal}`);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
//   const m = [
//     [12,  7, 25],
//     [ 3, 18,  9],
//     [31, 14, 22],
//   ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:
const m3 = [
  [12, 7, 25],
  [3, 18, 9],
  [31, 14, 22],
];

let maiorValor = m3[0][0];
let menorValor = m3[0][0];
let posMaior = { linha: 0, coluna: 0 };
let posMenor = { linha: 0, coluna: 0 };

for (let i = 0; i < m3.length; i++) {
  for (let j = 0; j < m3[i].length; j++) {
    const valor = m3[i][j];

    if (valor > maiorValor) {
      maiorValor = valor;
      posMaior = { linha: i, coluna: j };
    }
    if (valor < menorValor) {
      menorValor = valor;
      posMenor = { linha: i, coluna: j };
    }
  }
}

console.log("EXERCÍCIO 3");
console.log(`Maior valor: ${maiorValor} (linha ${posMaior.linha}, coluna ${posMaior.coluna})`);
console.log(`Menor valor: ${menorValor} (linha ${posMenor.linha}, coluna ${posMenor.coluna})`);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:
console.log("EXERCÍCIO 4");

for (let i = 0; i < m3.length; i++) {
  let somaLinha = 0;
  for (let j = 0; j < m3[i].length; j++) {
    somaLinha += m3[i][j];
  }
  console.log(`Linha ${i}: ${somaLinha}`);
}

for (let j = 0; j < m3[0].length; j++) {
  let somaColuna = 0;
  for (let i = 0; i < m3.length; i++) {
    somaColuna += m3[i][j];
  }
  console.log(`Coluna ${j}: ${somaColuna}`);
}

let somaDiagonal = 0;
for (let i = 0; i < m3.length; i++) {
  somaDiagonal += m3[i][i];
}
console.log(`Soma da diagonal principal: ${somaDiagonal}`);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:
console.log("EXERCÍCIO 5");
const linhas = readline.questionInt("Quantas linhas terá a matriz? ");
const colunas = readline.questionInt("Quantas colunas terá a matriz? ");

const m5 = [];
for (let i = 0; i < linhas; i++) {
  m5[i] = [];
  for (let j = 0; j < colunas; j++) {
    m5[i][j] = readline.questionInt(`Digite m[${i}][${j}]: `);
  }
}

console.table(m5);
console.log("_______________________________");
