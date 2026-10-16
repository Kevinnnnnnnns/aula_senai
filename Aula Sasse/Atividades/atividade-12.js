const lerTeclado = require('readline-sync');


// Dica: Faça os exercícios utilizando funções de array,
//       mas também tente resolver os desafios sem essas funções

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador"];

console.log("Lista de cidades:");
for (let i = 0; i < cidades.length; i++) {
    console.log(`${i + 1} - ${cidades[i]}`);
}

console.log(`Primeira cidade: ${cidades[0]}`);
console.log(`Última cidade: ${cidades[cidades.length - 1]}`);
console.log(`Total de cidades: ${cidades.length}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Soma e média
// ------------------------------------------------------------
// a) Utilizando o vetor:
const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
// b) Calcule a SOMA de todos os números.
// c) Calcule a MÉDIA (soma / quantidade).
// d) Exiba: "Soma: <soma> | Média: <média>" (use toFixed(2) na média).

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
const media = soma / numeros.length;

console.log(`Soma: ${soma} | Média: ${media.toFixed(2)}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor
// ------------------------------------------------------------
// a) Utilizando o vetor:
const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
// b) Encontre a MAIOR e a MENOR temperatura.
// c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

console.log(`Maior: ${maior}°C | Menor: ${menor}°C`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Pares e ímpares
// ------------------------------------------------------------
// a) Utilizando o vetor:
const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
// b) Conte quantos números são pares e quantos são ímpares.
// c) Crie dois vetores: paresVetor[] e imparesVetor[], e adicione os números em cada um.
// d) Exiba:
//    "Pares (<qtd>): <paresVetor>"
//    "Ímpares (<qtd>): <imparesVetor>"

const paresVetor = [];
const imparesVetor = [];

for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 === 0) {
        paresVetor.push(listaNumeros[i]);
    } else {
        imparesVetor.push(listaNumeros[i]);
    }
}

console.log(`Pares (${paresVetor.length}): ${paresVetor.join(", ")}`);
console.log(`Ímpares (${imparesVetor.length}): ${imparesVetor.join(", ")}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Inversão de vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
const vetorOriginal = ["A", "B", "C", "D", "E"];
// b) Usando for(), crie um novo vetor 'vetorInvertido' com os elementos em ordem reversa.
// c) Exiba ambos os vetores:
//    "Original:  <original>"
//    "Invertido: <invertido>"
// d) Inverta o vetorOriginal, mas utilizando função de array,
//    salve o resultado em vetorInvertido2 e exiba o resultado.

const vetorInvertido = [];
for (let i = vetorOriginal.length - 1; i >= 0; i--) {
    vetorInvertido.push(vetorOriginal[i]);
}

console.log(`Original:  ${vetorOriginal.join(", ")}`);
console.log(`Invertido: ${vetorInvertido.join(", ")}`);

const vetorInvertido2 = [...vetorOriginal].reverse(); // spread to not mutate original if needed, though reverse() mutates
console.log(`Invertido (função): ${vetorInvertido2.join(", ")}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Cadastro dinâmico
// ------------------------------------------------------------
// a) Crie um vetor vazio para produtos;
// b) Pergunte ao usuário quantos produtos deseja cadastrar.
// c) Usando for(), peça o nome de cada produto e adicione ao vetor.
// d) Ao final, também utilizando for() exiba o vetor completo e a mensagem:
//    "<qtd> produtos cadastrados."

const produtos = [];
const qtdCadastrar = lerTeclado.questionInt("Quantos produtos deseja cadastrar? ");

for (let i = 0; i < qtdCadastrar; i++) {
    const nomeProd = lerTeclado.question(`Nome do produto ${i + 1}: `);
    produtos.push(nomeProd);
}

console.log("\nLista de produtos cadastrados:");
for (let i = 0; i < produtos.length; i++) {
    console.log(`- ${produtos[i]}`);
}
console.log(`${produtos.length} produtos cadastrados.`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Busca em vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
// b) Pergunte ao usuário o nome de um aluno.
// c) Usando for e break, verifique se o nome existe na lista.
//    - Se existir: "<nome> está matriculado(a) (índice <i>)."
//    - Se não:     "<nome> não foi encontrado(a)."

const buscaNome = lerTeclado.question("Digite o nome do aluno para buscar: ");
let encontrado = false;

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].toLowerCase() === buscaNome.toLowerCase()) {
        console.log(`${alunos[i]} está matriculado(a) (índice ${i}).`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(`${buscaNome} não foi encontrado(a).`);
}


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Vetor de objetos
// ------------------------------------------------------------
// a) Utilizando o vetor:
const livros = [
    { titulo: "Dom Casmurro", paginas: 256 },
    { titulo: "O Cortiço", paginas: 304 },
    { titulo: "Memórias Póstumas", paginas: 208 },
    { titulo: "Capitães da Areia", paginas: 280 },
];
// b) Exiba a lista com console.table().
// c) Usando for, calcule:
//    - Total de páginas de todos os livros.
//    - Média de páginas por livro.
// d) Exiba o título do livro com MAIS páginas.

console.table(livros);

let totalPaginas = 0;
let livroMaiorPaginas = livros[0];

for (let i = 0; i < livros.length; i++) {
    totalPaginas += livros[i].paginas;
    if (livros[i].paginas > livroMaiorPaginas.paginas) {
        livroMaiorPaginas = livros[i];
    }
}

const mediaPaginas = totalPaginas / livros.length;

console.log(`Total de páginas: ${totalPaginas}`);
console.log(`Média de páginas: ${mediaPaginas.toFixed(2)}`);
console.log(`Livro com mais páginas: ${livroMaiorPaginas.titulo} (${livroMaiorPaginas.paginas} págs)`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Filtro com push
// ------------------------------------------------------------
// a) Utilizando o vetor:
const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];
// b) Usando for, separe o vetor acima em dois vetores:
//    - menores[]: pessoas com idade < 18
//    - adultos[]: pessoas com idade >= 18
// c) Exiba:
//    "Menores (<qtd>): <menores>"
//    "Adultos (<qtd>): <adultos>"

const menores = [];
const adultos = [];

for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        menores.push(idades[i]);
    } else {
        adultos.push(idades[i]);
    }
}

console.log(`Menores (${menores.length}): ${menores.join(", ")}`);
console.log(`Adultos (${adultos.length}): ${adultos.join(", ")}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio para notas;
// b) Usando do...while e switch, exiba o menu:
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
// c) Realize as funções escolhidas até o usuário escolher 0.
// d) Ao sair: "Encerrando. Total de notas registradas: <qtd>"

const notas = [];
let opcao;

do {
    console.log("\n--- MENU DE NOTAS ---");
    console.log("1 - Adicionar nota");
    console.log("2 - Listar notas");
    console.log("3 - Estatísticas");
    console.log("4 - Remover última");
    console.log("5 - Limpar todas");
    console.log("0 - Sair");
    opcao = lerTeclado.questionInt("Escolha uma opcao: ");

    switch (opcao) {
        case 1:
            const novaNota = lerTeclado.questionFloat("Digite a nota (0-10): ");
            if (novaNota >= 0 && novaNota <= 10) {
                notas.push(novaNota);
                console.log("Nota adicionada.");
            } else {
                console.log("Nota inválida.");
            }
            break;
        case 2:
            if (notas.length === 0) {
                console.log("Nenhuma nota registrada.");
            } else {
                console.log("Notas: " + notas.join(" | "));
            }
            break;
        case 3:
            if (notas.length === 0) {
                console.log("Sem dados para estatísticas.");
            } else {
                let somaN = 0;
                let maiorN = notas[0];
                let menorN = notas[0];
                for (let n of notas) {
                    somaN += n;
                    if (n > maiorN) maiorN = n;
                    if (n < menorN) menorN = n;
                }
                console.log(`Média: ${(somaN / notas.length).toFixed(2)}`);
                console.log(`Maior: ${maiorN} | Menor: ${menorN}`);
            }
            break;
        case 4:
            if (notas.length > 0) {
                const removida = notas.pop();
                console.log(`Nota ${removida} removida.`);
            } else {
                console.log("Vetor vazio.");
            }
            break;
        case 5:
            notas.length = 0;
            console.log("Todas as notas foram removidas.");
            break;
        case 0:
            console.log(`Encerrando. Total de notas registradas: ${notas.length}`);
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 0);


console.log("_______________________________");