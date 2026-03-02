
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
let n = "Kevin";
let i = 19;
let fav = "Jogar Vôlei";

let frase = `Meu nome é  ${n}, eu tenho ${i} anos e eu gosto de ${fav} no meu tempo livre.`;

console.log (frase);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
let c = "Jarágua do Sul";
let temp = 21;
let perf = "praticar um esporte";
let fra = `Hoje em ${c} está fazendo ${temp}°C, perfeito para ${perf}`;
console.log (fra);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:

let str = "Kevin"
let num = 18
let estouDeCasaco = true
let unde 
let nul = null

console.log (typeof str);
console.log (typeof num);
console.log (typeof estouDeCasaco);
console.log (typeof unde);
console.log (typeof nul);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.


// → Seu código aqui:
let pers = "Batman"
let idad = 35
let cid = "Gotham"
let miss = "Salvar o mundo"
let fr = `Uma bela noite eu estava em ${cid} city quando o presidente chegou em mim e disse bem assim "${pers} eu preciso de você para ${miss}"
e como eu to na flor da idade com ${idad} eu aceitei a missão me sentindo o heroi mais top de todos`
 console.log (fr)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
let mn = "Kevin"
let obj = "Conseguir me destacar na minha turma do CTW"
let fras = `Eu ${mn} vou estar me dedicando muito mais para ${obj}`
console.log (fras)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:
console.log ("==============================");
console.log ("    SISTEMA DO USUÁRIO    "    );
console.log ("==============================");
console.log ("1 - Ver Perfil"                );
console.log ("2 - Editar Perfil"             );
console.log ( "3 - Configurações"            );
console.log ("4 - Notificações"              );
console.log ("5 - Relátorio"                 );
console.log ( "6 - Ajuda"                    );
console.log ("7 - Sobre o Sistema"           );
console.log ("0 - Sair"                      );
console.log ("==============================");
console.log ("Digite o número da opção desejada");
console.log ("==============================");

console.log("_______________________________");