// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
const aluno = {
    nome : "Brian",
    idade : 18,
    curso : "Lógica de programação"
}
console.log(`Nome da pessoa: ${aluno.nome}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
aluno.endereco = {
     cidade: "Rio de Janeiro",
     rua: "Fazendinha"
}
console.log(`Cidade do aluno: ${aluno.endereco.cidade}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
aluno.habilidades = ["Programar", "Jogar", "Correr", "Cantar", "Dançar"]
console.log(`Habilidade do aluno: ${aluno.habilidades[0]}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:

aluno.notas = [9, 10, 8, 7, 10, 10]
console.log(`Nome do aluno: ${aluno.nome}, e essas são suas notas: ${aluno.notas}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
aluno.responsaveis = {
    nome: "Angela Dos Santos",
    parentesco: "Mãe"
}
console.log(`Os responsaveis são: ${aluno.responsaveis.nome}`)
aluno.responsaveis.nome = "Aline Veriato"
console.log(`Os responsaveis são: ${aluno.responsaveis.nome}`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
const listaDeAlunos = [];
listaDeAlunos.push(aluno)
const aluno2 = {
    nome : "João",
    idade : 19,
    curso : "Lógica de programação"
}
const aluno3 = {
    nome : "Pedro",
    idade : 20,
    curso : "Lógica de programação"
}
listaDeAlunos.push(aluno2)
listaDeAlunos.push(aluno3)
console.log (listaDeAlunos)
console.log(`Segundo Aluno da chamada: ${listaDeAlunos[1].nome}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:
const ListaDeEstudantes = [];
const Kevin = {
    nome : "Kevin",
    idade : 18,
    notas : [9, 9, 10, 10]
}
const William = {
    nome : "William",
    idade : 18,
    notas : [6, 8, 8, 8]
}
const Gustavo = {
    nome : "Gustavo",
    idade : 18,
    notas : [6, 7, 8, 9]
};
ListaDeEstudantes.push(Kevin);
ListaDeEstudantes.push(William);
ListaDeEstudantes.push(Gustavo);
console.log(`Nome do aluno: ${ListaDeEstudantes[0].nome}, e essas são suas notas: ${ListaDeEstudantes[0].notas}`);
console.log(`Nome do aluno: ${ListaDeEstudantes[1].nome}, e essas são suas notas: ${ListaDeEstudantes[1].notas}`);
console.log(`Nome do aluno: ${ListaDeEstudantes[2].nome}, e essas são suas notas: ${ListaDeEstudantes[2].notas}`);
console.log("_______________________________");