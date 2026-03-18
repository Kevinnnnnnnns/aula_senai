// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');
const { execSync } = require('child_process');
execSync('chcp 65001', { stdio: 'ignore' }); // ← força UTF-8 no terminal
// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:
// let a1 = 10, b1 = 10;
// console.log(`${a1} == ${b1} → ${a1 == b1}`);    
// console.log(`${a1} === ${b1} → ${a1 === b1}`);
// let a2 = 10, b2 = "10";
// console.log(`${a2} == ${b2} → ${a2 == b2}`);    
// console.log(`${a2} === ${b2} → ${a2 === b2}`);
// let a3 = 0, b3 = false;
// console.log(`${a3} == ${b3} → ${a3 == b3}`);
// console.log(`${a3} === ${b3} → ${a3 === b3}`);
// let a4 = null, b4 = undefined;
// console.log(`${a4} == ${b4} → ${a4 == b4}`);
// console.log(`${a4} === ${b4} → ${a4 === b4}`);
// let a5 = "JS", b5 = "JS";
// console.log(`${a5} == ${b5} → ${a5 == b5}`);  
// console.log(`${a5} === ${b5} → ${a5 === b5}`);  
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:
// EXERCÍCIO 2 – Comparando com != e !==
// let a1 = 5, b1 = 5;
// console.log(`${a1} != ${b1} → ${a1 != b1}`);
// console.log(`${a1} !== ${b1} → ${a1 !== b1}`);
// let a2 = 5, b2 = "5";
// console.log(`${a2} != ${b2} → ${a2 != b2}`);
// console.log(`${a2} !== ${b2} → ${a2 !== b2}`);
// let a3 = 7, b3 = 3;
// console.log(`${a3} != ${b3} → ${a3 != b3}`);
// console.log(`${a3} !== ${b3} → ${a3 !== b3}`);
// let a4 = true, b4 = 1;
// console.log(`${a4} != ${b4} → ${a4 != b4}`);
// console.log(`${a4} !== ${b4} → ${a4 !== b4}`);
 console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
// let salarioA = 3500;
// let salarioB = 4200;
// let aMaiorQueB = salarioA > salarioB;
// let aMenorQueB = salarioA < salarioB;
// let aMaiorIgualB = salarioA >= salarioB;
// let aMenorIgualB = salarioA <= salarioB;
// let aIgualB = salarioA === salarioB;
// console.log(`Salário A (R$ ${salarioA}) >  Salário B (R$ ${salarioB}): ${aMaiorQueB}`);
// console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}): ${aMenorQueB}`);
// console.log(`Salário A (R$ ${salarioA}) >=  Salário B (R$ ${salarioB}): ${aMaiorIgualB}`);
// console.log(`Salário A (R$ ${salarioA}) <=  Salário B (R$ ${salarioB}): ${aMenorIgualB}`);
// console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}): ${aIgualB}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
// let estoque = 0;
// let temEstoque    = estoque > 0;
// let estoqueZerado = estoque === 0;
// let temperatura = 36.5;
// let febre = temperatura >= 37.6;
// console.log(`Estoque: ${estoque}`);
// console.log(`Tem estoque (estoque > 0): ${temEstoque}`);
// console.log(`Estoque zerado (estoque === 0): ${estoqueZerado}`);
// console.log(`Temperatura: ${temperatura}°C`);
// console.log(`Com febre (temperatura >= 37.6): ${febre}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:
// const num1 = Number(lerTeclado.questionFloat("Digite o primeiro número: "));
// const num2 = Number(lerTeclado.questionFloat("Digite o segundo número: "));
// const num1MaiorQueNum2  = num1 > num2;
// const num1MenorQueNum2 = num1 < num2;
// const num1IgualANum2 = num1 === num2;
// const num1MaiorIgualNum2 = num1 >= num2;
// console.log(`num1 (${num1}) > num2 (${num2}): ${num1MaiorQueNum2}`);
// console.log(`num1 (${num1}) < num2 (${num2}): ${num1MenorQueNum2}`);
// console.log(`num1 (${num1}) = num2 (${num2}): ${num1IgualANum2}`);
// console.log(`num1 (${num1}) >= num (${num2}): ${num1MaiorIgualNum2}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:
// {
//     const preco      = lerTeclado.questionFloat("Preco do produto: R$ ");
//     const precoMaximo = 100;
//     const estaDentroDoOrcamento = preco <= precoMaximo;
//     const esteItemEhCaro        = preco > precoMaximo;
//     console.log(`Preco informado: R$ ${preco}`);
//     console.log(`Dentro do orcamento (<= R$ ${precoMaximo})? : ${estaDentroDoOrcamento ? "Sim" : "Nao"}`);
//     console.log(`Item caro (> R$ ${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Nao"}`);
// }
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
// {
//     const cadastro = [
//       {
//         nome:  lerTeclado.question("Nome da pessoa 1: "),
//         idade: lerTeclado.questionInt("Idade da pessoa 1: ")
//       },
//       {
//         nome:  lerTeclado.question("Nome da pessoa 2: "),
//         idade: lerTeclado.questionInt("Idade da pessoa 2: ")
//       }
//     ];
//     const idadePessoa1 = cadastro[0].idade;
//     const idadePessoa2 = cadastro[1].idade;
//     const nomePessoa1  = cadastro[0].nome;
//     const nomePessoa2  = cadastro[1].nome;
//     const pessoa1MaisVelha  = idadePessoa1 > idadePessoa2;
//     const mesmaIdade        = idadePessoa1 === idadePessoa2;
//     const pessoa1MaiorIdade = idadePessoa1 >= 18;
//     const pessoa2MaiorIdade = idadePessoa2 >= 18;
//     console.log(`${nomePessoa1} tem ${idadePessoa1} anos e e ${pessoa1MaiorIdade ? "maior de idade" : "menor de idade"}.`);
//     console.log(`${nomePessoa2} tem ${idadePessoa2} anos e e ${pessoa2MaiorIdade ? "maior de idade" : "menor de idade"}.`);
//     console.log(`As duas pessoas tem a mesma idade? ${mesmaIdade ? "Sim" : "Nao"}`);
//     console.log(`Pessoa mais velha: ${pessoa1MaisVelha ? nomePessoa1 : mesmaIdade ? "Mesma idade" : nomePessoa2}`);
//   }
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:

    const alunos = [
      {
        nome:  lerTeclado.question("Nome do aluno 1: "),
        nota1: lerTeclado.questionFloat("Nota 1 do aluno 1: "),
        nota2: lerTeclado.questionFloat("Nota 2 do aluno 1: "),
        nota3: lerTeclado.questionFloat("Nota 3 do aluno 1: ")
      },
      {
        nome:  lerTeclado.question("Nome do aluno 2: "),
        nota1: lerTeclado.questionFloat("Nota 1 do aluno 2: "),
        nota2: lerTeclado.questionFloat("Nota 2 do aluno 2: "),
        nota3: lerTeclado.questionFloat("Nota 3 do aluno 2: ")
      }
    ];
    const nomeAluno1  = alunos[0].nome;
    const nomeAluno2  = alunos[1].nome;
    const nota1aluno1 = alunos[0].nota1;
    const nota2aluno1 = alunos[0].nota2;
    const nota3aluno1 = alunos[0].nota3;
    const nota1aluno2 = alunos[1].nota1;
    const nota2aluno2 = alunos[1].nota2;
    const nota3aluno2 = alunos[1].nota3;
    const mediaAluno1 = (nota1aluno1 + nota2aluno1 + nota3aluno1) / 3;
    const mediaAluno2 = (nota1aluno2 + nota2aluno2 + nota3aluno2) / 3;
    const mediasIguais = mediaAluno1 === mediaAluno2;
    console.log(`Media de ${nomeAluno1}: ${mediaAluno1.toFixed(2)}`);
    console.log(`Media de ${nomeAluno2}: ${mediaAluno2.toFixed(2)}`);
    console.log(`Aluno com maior media: ${mediasIguais ? "Mesma media" : mediaAluno1 > mediaAluno2 ? nomeAluno1 : nomeAluno2}`);
    console.log(`Aluno com primeira maior nota:  ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nota1aluno1 === nota1aluno2 ? "Empate" : nomeAluno2}`);
    console.log(`Aluno com segunda maior nota:   ${nota2aluno1 > nota2aluno2 ? nomeAluno1 : nota2aluno1 === nota2aluno2 ? "Empate" : nomeAluno2}`);
    console.log(`Aluno com terceira maior nota:  ${nota3aluno1 > nota3aluno2 ? nomeAluno1 : nota3aluno1 === nota3aluno2 ? "Empate" : nomeAluno2}`);
  }
console.log("_______________________________");