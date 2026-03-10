// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');
// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:
// console.log ("Iniciando o programa");
// console.info ("Info : isto é um exemplo de console.info");
// console.warn ("Aviso : Sempre lembrar de iniciar o programa com o nome e mais o nome do arquivo");
// console.error ("Erro : !Ops, algo deu errado!")
 console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:
// const nameuser = lerTeclado.question ('Digite o seu nome: ');
// const usaridade = lerTeclado.questionInt ('Digite sua idade: ');
// console.log(`Olá ${nameuser}! Você tem ${usaridade} anos`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:
// const nameuser = lerTeclado.question ('Me diga o seu nome: ');
// const useridade = lerTeclado.questionInt ('Me diga sua idade: ');
// const userCidade = lerTeclado.question ('Me diga qual sua cidade: ');
// const ficha = {
//     nome: nameuser,
//     idade: useridade,
//     Cidade : userCidade
// }
// console.table (ficha)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
// const gostaDeVolei = lerTeclado.keyInYN ('Voce gosta de volei? (s/n) ');
// const gostaDeComer = lerTeclado.keyInYN ('Voce gosta de comer? (s/n) ');
// console.log (`${gostaDeVolei ? 'gosta' : 'não gosta'} de jogar volei.`);
// console.log (`${gostaDeComer ? 'Claro' : 'não gosta'} de comer.`);
 console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:
// const comida1 = lerTeclado.question ('Me diga a sua comida favorita: ');
// const comida2 = lerTeclado.question ('Me diga outra comida favorita: ');
// const comida3 = lerTeclado.question ('Me diga mais uma comida favorita: ');
// const comidasFavoritas = [comida1, comida2, comida3];
// console.table(comidasFavoritas);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
// const nameuser = lerTeclado.question ('Me diga o seu nome: ');
// const jobUser = lerTeclado.question ('Me diga sua profissao: ');
// const cidadeUser = lerTeclado.question ('Me diga sua cidade: ');
// const cadastroPessoal = {
//     nome: nameuser,
//     profissao : jobUser,
//     cidade : cidadeUser
// }
// console.log(`Me chamo ${cadastroPessoal.nome}. Profissao: ${cadastroPessoal.profissao} e moro na cidade de: ${cadastroPessoal.cidade}.`)
// console.table(cadastroPessoal);
 console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
// const nameuser1 = lerTeclado.question ('Nome do usuario 1: ');
// const idade1 = lerTeclado.questionInt ('Qual sua idade:')
// const cidade1 = lerTeclado.question ('Me diga sua cidade: ')
// const rua1 = lerTeclado.question ('Me diga sua rua: ')
// const number1 = lerTeclado.questionInt ('Qual numero da sua casa: ')

// const nameuser2 = lerTeclado.question ('Nome do usuario 2: ');
// const idade2 = lerTeclado.questionInt ('Qual sua idade:')
// const cidade2 = lerTeclado.question ('Me diga sua cidade: ')
// const rua2 = lerTeclado.question ('Me diga sua rua: ')
// const number2 = lerTeclado.questionInt ('Qual numero da sua casa: ')

// const nameuser3 = lerTeclado.question ('Nome do usuario 3: ');
// const idade3 = lerTeclado.questionInt ('Qual sua idade:')
// const cidade3 = lerTeclado.question ('Me diga sua cidade: ')
// const rua3 = lerTeclado.question ('Me diga sua rua: ')
// const number3 = lerTeclado.questionInt ('Qual numero da sua casa: ')

// const usuario1 = {
//     nome: nameuser1,
//     idade: idade1,
//     endereco: {
//         cidade: cidade1,
//         rua: rua1,
//         numero: number1
//     }
// };

// const usuario2 = {
//     nome: nameuser2,
//     idade: idade2,
//     endereco: {
//         cidade: cidade2,
//         rua: rua2,
//         numero: number2
//     }
// };

// const usuario3 = {
//     nome: nameuser3,
//     idade: idade3,
//     endereco: {
//         cidade: cidade3,
//         rua: rua3,
//         numero: number3
//     }
// };

// const listaDeUsuarios = [usuario1, usuario2, usuario3];
// console.table(listaDeUsuarios)
// console.log(`Nome: ${listaDeUsuarios[1].nome}, idade: ${listaDeUsuarios[1].idade}`)
// console.log(listaDeUsuarios[2].endereco)
// console.log(`Nome: ${listaDeUsuarios[0].nome}, Rua: ${listaDeUsuarios[0].endereco.rua}`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
// const name1 = lerTeclado.question('Nome do aluno 1: ')
// const nota1a = lerTeclado.questionInt('Nota 1: ')
// const nota2a = lerTeclado.questionInt('Nota 2: ')
// const nota3a = lerTeclado.questionInt('Nota 3: ')
// const aluno1 = {
//     nome: name1,
//     notas: [nota1a, nota2a, nota3a]
// };
// const name2 = lerTeclado.question('Nome do aluno 2: ')
// const nota1b = lerTeclado.questionInt('Nota 1: ')
// const nota2b = lerTeclado.questionInt('Nota 2: ')
// const nota3b = lerTeclado.questionInt('Nota 3: ')
// const aluno2 = {
//     nome: name2,
//     notas: [nota1b, nota2b, nota3b]
// };
// const name3 = lerTeclado.question('Nome do aluno 3: ')
// const nota1c = lerTeclado.questionInt('Nota 1: ')
// const nota2c = lerTeclado.questionInt('Nota 2: ')
// const nota3c = lerTeclado.questionInt('Nota 3: ')
// const aluno3 = {
//     nome: name3,
//     notas: [nota1c, nota2c, nota3c]
// };
// const turma = [aluno1, aluno2, aluno3];
// console.table(turma)
// console.log(`Aluno: ${turma[1].nome}, 1ª nota: ${turma[1].notas[0]}`);
// console.log(`Aluno: ${turma[2].nome}, 2ª nota: ${turma[2].notas[1]}`);
// console.log(`Aluno: ${turma[0].nome}, 1ª nota: ${turma[0].notas[2]}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
// const nomeProduto = lerTeclado.question('Nome do produto: ');
// const categoriaProduto = lerTeclado.question('Categoria do produto: ');
// const precoProduto = lerTeclado.questionFloat('Preco do produto: ');
// const quantidadeEstoque = lerTeclado.questionInt('Quantidade em estoque: ');
// const disponivelProduto = lerTeclado.keyInYN('Esta disponivel para venda? (s/n): ');
// const produto = {
//     nome: nomeProduto,
//     categoria: categoriaProduto,
//     preco: precoProduto,
//     quantidade: quantidadeEstoque,
//     disponivel: disponivelProduto
// };
// console.table(produto);
// console.log(`Produto: ${produto.nome} | Categoria: ${produto.categoria} | Estoque: ${produto.quantidade} un`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

// → Seu código aqui:
// const nomeMed1 = lerTeclado.question('Me informe o nome do medicamento: ')
// const precoMed1 = lerTeclado.questionFloat('Informe o preco do medicamento: ')
// const estoque1 = lerTeclado.keyInYN ('Esta em estoque? s/n')
// const medicamento1 ={
//     nome: nomeMed1,
//     preço: precoMed1,
//     estoque: estoque1
// };
// const nomeMed2 = lerTeclado.question('Me informe o nome do medicamento: ')
// const precoMed2 = lerTeclado.questionFloat('Informe o preco do medicamento: ')
// const estoque2 = lerTeclado.keyInYN ('Esta em estoque? s/n')
// const medicamento2 ={
//     nome: nomeMed2,
//     preço: precoMed2,
//     estoque: estoque2
// }
// const estoqueFarmacia = [];
// estoqueFarmacia.push(medicamento1);
// estoqueFarmacia.push(medicamento2);
// console.table(estoqueFarmacia);
// console.log(`Medicamento: ${estoqueFarmacia[1].nome} | Preço: ${estoqueFarmacia[1].preco}`);
// console.log(`Medicamento: ${estoqueFarmacia[0].nome} | Em estoque: ${estoqueFarmacia[0].emEstoque}`);
console.log("_______________________________");