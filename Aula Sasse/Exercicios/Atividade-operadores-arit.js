// ============================================================
//   ATIVIDADE 04 – Operadores Aritméticos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-04.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Operações básicas
// ------------------------------------------------------------
// Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// Calcule e exiba no console, usando template literal, o cálculo e o resultado:
//    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// a) A soma dos dois números.
// b) A subtração (num1 - num2).
// c) A multiplicação.
// d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// e) O resto da divisão (módulo %).
// f) num1 elevado a num2 (potência).

// → Seu código aqui:
// let num1 = 5;
// let num2 = 5;
// console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// console.log(`Cálculo: ${num1} - ${num2} = ${num1 - num2}`);
// console.log(`Cálculo: ${num1} * ${num2} = ${num1 * num2}`);
// console.log(`Cálculo: ${num1} / ${num2} = ${num1 / num2}`);
// let p = num1 / num2 
// console.log("Com toFixed(2) = ", p.toFixed(2));
// console.log(`Cálculo: ${num1} % ${num2} = ${num1 % num2}`);
// console.log(`Cálculo: ${num1} ** ${num2} = ${num1 ** num2}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Área e perímetro
// ------------------------------------------------------------
// a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// d) Exiba no console usando template literal:
//    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// → Seu código aqui:
// let largura = 8;
// let altura = 5;
// let area = largura * altura;
// let perimetro = (2 * largura) + (2 * altura);
// console.log(`Retângulo | Largura: ${largura} | Altura: ${altura} | Área: ${area} | Perimetro: ${perimetro}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculando desconto
// ------------------------------------------------------------
// a) Declare a variável "precoOriginal" com o valor 250.
// b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// c) Calcule o valor do desconto e armazene em "valorDesconto".
//    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// e) Exiba no console usando template literal:
//    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
//    Use toFixed(2) nos valores em reais.

// → Seu código aqui:
// let precoOriginal = 250
// let percentualDesconto = 15
// let valorDesconto = precoOriginal * (percentualDesconto / 100)
// let precoFinal = precoOriginal - valorDesconto 
// console.log(`Preço original: R$ ${precoOriginal.toFixed(2)} | Desconto: R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`)
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Operadores de atribuição composta
// ------------------------------------------------------------
// a) Declare uma variável "pontos" com o valor 100.
// b) Some 50 pontos usando +=. Exiba o resultado.
// c) Subtraia 30 pontos usando -=. Exiba o resultado.
// d) Multiplique por 2 usando *=. Exiba o resultado.
// e) Divida por 4 usando /=. Exiba o resultado.
// f) Para cada operação, use template literal:
//    "Pontos após <tipo da operação>: <valor>"

// → Seu código aqui:
// let ponto = 100
// ponto += 50 
// console.log(`Pontos após adiçao: ${ponto}`);
// ponto -= 30
// console.log(`Pontos após subtraçao: ${ponto}`);
// ponto *= 2
// console.log(`Pontos após multiplicaçao: ${ponto}`);
// ponto /= 4
// console.log(`Pontos após divisao: ${ponto}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Incremento e decremento
// ------------------------------------------------------------
// a) Declare uma variável "vidas" com valor 3.
// b) Exiba o valor atual com console.log().
// c) Use ++ para incrementar "vidas" duas vezes, exibindo após cada incremento.
// d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// e) Declare uma variável "nivel" com valor 1.
// f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// → Seu código aqui:
// let vidas = 3;
// console.log(`Vidas: ${vidas}`);
// vidas++;
// console.log(`Vidas após incremento: ${vidas}`);
// vidas++;
// console.log(`Vidas após incremento: ${vidas}`);
// vidas--;
// console.log(`Vidas após decremento: ${vidas}`);
// let nivel = 1;
// ++nivel;
// console.log(`Nível após incremento: ${nivel}`);
// ++nivel;
// console.log(`Nível após incremento: ${nivel}`);
// ++nivel;
// console.log(`Nível após incremento: ${nivel}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções matemáticas (Math)
// ------------------------------------------------------------
// a) Declare "nota" com o valor 7.3.
// b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
//    Use template literal para identificar cada um.
// c) Declare "temperatura" com o valor -12.5.
// d) Exiba o valor absoluto usando Math.abs(temperatura).
// e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// → Seu código aqui:
// let nota = 7.3;
// console.log(`Math.round: ${Math.round(nota)}`);
// console.log(`Math.floor: ${Math.floor(nota)}`);
// console.log(`Math.ceil: ${Math.ceil(nota)}`);
// let temperatura = -12.5;
// console.log(`Valor absoluto: ${Math.abs(temperatura)}`);
// console.log(`Maior valor: ${Math.max(42, 17, 89, 5, 63)}`);
// console.log(`Menor valor: ${Math.min(42, 17, 89, 5, 63)}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Média de notas
// ------------------------------------------------------------
// a) Peça ao usuário 3 notas (use questionFloat()).
// b) Calcule a média aritmética das 3 notas.
// c) Exiba no console:
//    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
//    "Média: <media>" (com 2 casas decimais usando toFixed(2))

// → Seu código aqui:
// let n1 = questionFloat("Digite a nota 1: ");
// let n2 = questionFloat("Digite a nota 2: ");
// let n3 = questionFloat("Digite a nota 3: ");
// let media = (n1 + n2 + n3) / 3;
// console.log(`Nota 1: ${n1} | Nota 2: ${n2} | Nota 3: ${n3}`);
// console.log(`Média: ${media.toFixed(2)}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Calculadora de troco
// ------------------------------------------------------------
// a) Peça ao usuário o valor total da compra (questionFloat()).
// b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// c) Calcule o troco (valorEntregue - totalCompra).
// d) Exiba no console:
//    "Total da compra:  R$ <total>"
//    "Valor entregue:   R$ <entregue>"
//    "Troco:            R$ <troco>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:
// let totalCompra = questionFloat("Digite o valor total da compra: ");
// let valorEntregue = questionFloat("Digite o valor entregue pelo cliente (deve ser maior que o total da compra): ");
// let troco = valorEntregue - totalCompra;
// console.log(`Total da compra:  R$ ${totalCompra.toFixed(2)}`);
// console.log(`Valor entregue:   R$ ${valorEntregue.toFixed(2)}`);
// console.log(`Troco:            R$ ${troco.toFixed(2)}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// a) Dada uma lista de preços, calcule e exiba o total.
let precos = [29.90, 49.99, 15.75, 99.90];
// b) Dada uma lista de notas, calcule e exiba a média.
let notas = [7.5, 8.2, 6.5, 9.0];
// c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
let idades = [15, 22, 30, 18, 25];

// → Seu código aqui:
// {
//     let precos = [29.90, 49.99, 15.75, 99.90];

//     let total = precos[0] + precos[1] + precos[2] + precos[3];
//     console.log(`Total: R$ ${total.toFixed(2)}`);
// }
// {
//     let notas = [7.5, 8.2, 6.5, 9.0];

//     let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
//     console.log(`Média: ${media.toFixed(2)}`);
// }
// {
//     let idades = [15, 22, 30, 18, 25];

//     let maiorIdade = Math.max(idades[0], idades[1], idades[2], idades[3], idades[4]);
//     let menorIdade = Math.min(idades[0], idades[1], idades[2], idades[3], idades[4]);
//     console.log(`Maior idade: ${maiorIdade}`);
//     console.log(`Menor idade: ${menorIdade}`);
// }
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:
let turma = {
  aluno1: {
    nome: "João",
    notas: []
  },
  aluno2: {
    nome: "Maria",
    notas: []
  },
  aluno3: {
    nome: "Pedro",
    notas: []
  }
}
// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:
// let turma = {
//     aluno1: { nome: "João",  notas: [] },
//     aluno2: { nome: "Maria", notas: [] },
//     aluno3: { nome: "Pedro", notas: [] }
// };
// turma.aluno1.notas.push(questionFloat(`Digite a nota 1 de ${turma.aluno1.nome}: `));
// turma.aluno1.notas.push(questionFloat(`Digite a nota 2 de ${turma.aluno1.nome}: `));
// turma.aluno1.notas.push(questionFloat(`Digite a nota 3 de ${turma.aluno1.nome}: `));
// turma.aluno2.notas.push(questionFloat(`Digite a nota 1 de ${turma.aluno2.nome}: `));
// turma.aluno2.notas.push(questionFloat(`Digite a nota 2 de ${turma.aluno2.nome}: `));
// turma.aluno2.notas.push(questionFloat(`Digite a nota 3 de ${turma.aluno2.nome}: `));
// turma.aluno3.notas.push(questionFloat(`Digite a nota 1 de ${turma.aluno3.nome}: `));
// turma.aluno3.notas.push(questionFloat(`Digite a nota 2 de ${turma.aluno3.nome}: `));
// turma.aluno3.notas.push(questionFloat(`Digite a nota 3 de ${turma.aluno3.nome}: `));
// let mediaJoao  = (turma.aluno1.notas[0] + turma.aluno1.notas[1] + turma.aluno1.notas[2]) / 3;
// let mediaMaria = (turma.aluno2.notas[0] + turma.aluno2.notas[1] + turma.aluno2.notas[2]) / 3;
// let mediaPedro = (turma.aluno3.notas[0] + turma.aluno3.notas[1] + turma.aluno3.notas[2]) / 3;
// console.log(`Média de ${turma.aluno1.nome}: ${mediaJoao.toFixed(2)}`);
// console.log(`Média de ${turma.aluno2.nome}: ${mediaMaria.toFixed(2)}`);
// console.log(`Média de ${turma.aluno3.nome}: ${mediaPedro.toFixed(2)}`);
// let mediaGeral = (mediaJoao + mediaMaria + mediaPedro) / 3;
// console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
// console.log(`${turma.aluno1.nome} | Maior nota: ${Math.max(turma.aluno1.notas[0], turma.aluno1.notas[1], turma.aluno1.notas[2])} | Menor nota: ${Math.min(turma.aluno1.notas[0], turma.aluno1.notas[1], turma.aluno1.notas[2])}`);
// console.log(`${turma.aluno2.nome} | Maior nota: ${Math.max(turma.aluno2.notas[0], turma.aluno2.notas[1], turma.aluno2.notas[2])} | Menor nota: ${Math.min(turma.aluno2.notas[0], turma.aluno2.notas[1], turma.aluno2.notas[2])}`);
// console.log(`${turma.aluno3.nome} | Maior nota: ${Math.max(turma.aluno3.notas[0], turma.aluno3.notas[1], turma.aluno3.notas[2])} | Menor nota: ${Math.min(turma.aluno3.notas[0], turma.aluno3.notas[1], turma.aluno3.notas[2])}`);
// let maiorNota = Math.max(
//     turma.aluno1.notas[0], turma.aluno1.notas[1], turma.aluno1.notas[2],
//     turma.aluno2.notas[0], turma.aluno2.notas[1], turma.aluno2.notas[2],
//     turma.aluno3.notas[0], turma.aluno3.notas[1], turma.aluno3.notas[2]
// );
// let menorNota = Math.min(
//     turma.aluno1.notas[0], turma.aluno1.notas[1], turma.aluno1.notas[2],
//     turma.aluno2.notas[0], turma.aluno2.notas[1], turma.aluno2.notas[2],
//     turma.aluno3.notas[0], turma.aluno3.notas[1], turma.aluno3.notas[2]
// );
// console.log(`Turma | Maior nota: ${maiorNota} | Menor nota: ${menorNota}`);
console.log("_______________________________");