// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js

// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

const lerTeclado = require("readline-sync");
// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"

// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:
// const a1 = true && true;
// const b1 = true && false;
// const c1 = false && true;
// const d1 = false && false;
// console.log(`true && true → ${a1}`);
// console.log(`true && false → ${b1}`);
// console.log(`false && true → ${c1}`);
// console.log(`false && false → ${d1}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"

// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:
// const a2 = true  || true;
// const b2 = true  || false;
// const c2 = false || true;
// const d2 = false || false;
// console.log(`true  || true → ${a2}`);
// console.log(`true  || false → ${b2}`);
// console.log(`false || true → ${c2}`);
// console.log(`false || false → ${d2}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:
// let sistemaAtivo = true;
// let modoManutencao = !sistemaAtivo;
// let lugarVago = false;
// let lugarOcupado = !lugarVago;
// console.log(`sistemaAtivo → ${sistemaAtivo}`);
// console.log(`modoManutencao → ${modoManutencao}`);
// console.log(`lugarVago → ${lugarVago}`);
// console.log(`lugarOcupado → ${lugarOcupado}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:
// let usuario = {};
// usuario.peso = lerTeclado.questionFloat("Digite seu peso (kg): ");
// usuario.altura = lerTeclado.questionFloat("Digite sua altura (m): ");
// usuario.imc = usuario.peso / (usuario.altura ** 2);
// usuario.imcAbaixoDoPeso = usuario.imc < 18.5;
// usuario.imcNormal = usuario.imc >= 18.5 && usuario.imc <= 24.9;
// usuario.imcAcimaDoPeso = usuario.imc >= 25 && usuario.imc <= 29.9;
// console.log(`IMC: ${usuario.imc.toFixed(2)}`);
// console.log(`Abaixo do peso: ${usuario.imcAbaixoDoPeso}`);
// console.log(`Peso normal: ${usuario.imcNormal}`);
// console.log(`Acima do peso: ${usuario.imcAcimaDoPeso}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:
// notaFinal = 4.8;
// const precisaRecuperacao = notaFinal >= 4 && notaFinal < 6;
// const reprovado = notaFinal < 4;
// const precisaDeAjuda = precisaRecuperacao || reprovado;
// console.log(`Nota final: ${notaFinal}`);
// console.log(`Precisa de recuperação: ${precisaRecuperacao}`);
// console.log(`Reprovado: ${reprovado}`);
// console.log(`Precisa de ajuda: ${precisaDeAjuda}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:
// temperatura = 38.2;
// const diagnostico = temperatura >= 37.6 ? "Febre detectada" : "Temperatura normal";
// console.log(`Temperatura: ${temperatura}°C → ${diagnostico}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:
// const velocidade = 110;
// const limiteVelocidade = 100;
// const statusMulta = velocidade > limiteVelocidade ? "Multa aplicada" : "Velocidade regular";
// console.log(`Velocidade: ${velocidade} km/h → ${statusMulta}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:
// console.log("Você é bolsista?");
// const ehEstudante = lerTeclado.keyInYN();
// console.log("Você paga mais que R$ 1000,00 mensais pelo curso?");
// const pagaMaisDeMil = lerTeclado.keyInYN();
// const mensagem = ehEstudante && pagaMaisDeMil ? "Desconto aplicado!" : "Desconto não aplicado.";
// console.log(`${mensagem}`);

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:
// const usuario = {
//     idade: lerTeclado.questionInt("Digite sua idade: "),
//     possuiIngresso: lerTeclado.keyInYN("Você possui ingresso?"),
//     ehAssociado: lerTeclado.keyInYN("Você é associado ao clube?")
// };
// const verificacoes = {
//     podeEntrarNormal: (usuario.idade >= 18 && usuario.possuiIngresso) || usuario.ehAssociado,
//     podeEntrarSocio: usuario.possuiIngresso && usuario.ehAssociado,
//     precisaAcompanhante: usuario.idade < 18,
//     naoPodeEntrar: !usuario.possuiIngresso && !usuario.ehAssociado
// };
// console.log(`Pode entrar normalmente? ${verificacoes.podeEntrarNormal}`);
// console.log(`Pode entrar como sócio? ${verificacoes.podeEntrarSocio}`);
// console.log(`Precisa de acompanhante? ${verificacoes.precisaAcompanhante}`);
// console.log(`Não pode entrar? ${verificacoes.naoPodeEntrar}`);
// const mensagemFinal = verificacoes.podeEntrarNormal || verificacoes.podeEntrarSocio ? "Entrada liberada!" : "Entrada negada.";
// console.log(mensagemFinal);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:
// const produto = {
//     nome: lerTeclado.question("Digite o nome do produto: "),
//     quantidade: lerTeclado.questionInt("Digite a quantidade em estoque: "),
//     estaAtivo: lerTeclado.keyInYN("O produto está ativo no sistema?")
// };
// produto.temEstoque = produto.quantidade > 0;
// produto.produtoDisponivel = produto.temEstoque && produto.estaAtivo;
// produto.produtoIndisponivel = !produto.temEstoque || !produto.estaAtivo;
// console.log(`Produto: ${produto.nome}`);
// console.log(`Tem estoque? ${produto.temEstoque}`);
// console.log(`Produto disponível? ${produto.produtoDisponivel}`);
// console.log(`Produto indisponível? ${produto.produtoIndisponivel}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:
// const usuario = {
//     ehAdmin: lerTeclado.keyInYN("Você é administrador?"),
//     estaLogado: lerTeclado.keyInYN("Você está logado?"),
//     contaAtiva: lerTeclado.keyInYN("Sua conta está ativa?")
// };
// usuario.acessoSistema = usuario.estaLogado && usuario.contaAtiva;
// usuario.acessoAdmin = usuario.acessoSistema && usuario.ehAdmin;
// usuario.acessoNegado = !usuario.estaLogado || !usuario.contaAtiva;
// console.log(`Acesso ao sistema? ${usuario.acessoSistema}`);
// console.log(`Acesso de administrador? ${usuario.acessoAdmin}`);
// console.log(`Acesso negado? ${usuario.acessoNegado}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:
// const credenciaisSistema = {
//     usuario: "admin",
//     senha: "1234"
// };
// const usuarioDigitado = lerTeclado.question("Digite o usuário: ");
// const senhaDigitada = lerTeclado.question("Digite a senha: ", { hideEchoBack: true });
// const usuarioCorreto = usuarioDigitado === credenciaisSistema.usuario;
// const senhaCorreta = senhaDigitada === credenciaisSistema.senha;
// const loginValido = usuarioCorreto && senhaCorreta;
// const mensagemLogin = loginValido ? "Login realizado com sucesso!" : "Usuário ou senha incorretos.";
// console.log(mensagemLogin);
// console.log("_______________________________");