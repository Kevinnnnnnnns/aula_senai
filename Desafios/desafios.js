// ============================================================
//   DESAFIOS (para quem já terminou a atividade 10) – While
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================
const readlineSync = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial
//    - Taxa de juros mensal em % — ex: 1.5
//    - Meta de saldo a atingir
// b) Usando while, calcule quantos meses são necessários para
//    atingir a meta. A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
//    Exiba cada mês: "Mês <mes>: R$ <saldo>"
// c) Ao atingir a meta, exiba:
//    "Meta atingida em <mes> meses! Saldo final: R$ <saldo>"
// d) Armazene cada mês como objeto { mes, saldo } em um array
//    e exiba com console.table().
// e) Desafio extra: ao invés de exibir mês 1, mês 2, mês 3, etc.
//    exiba Janeiro, Fevereiro, Março, etc.
//    Atenção para casos que ultrapassem 12 meses...

// → Seu código aqui:
let saldo = readlineSync.questionFloat("Saldo inicial: ");
let taxa = readlineSync.questionFloat("Taxa de juros mensal (%): ");
let meta = readlineSync.questionFloat("Meta de saldo: ");

let mesesNomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mes = 0;
let historico = [];

while (saldo < meta) {
    saldo = saldo * (1 + taxa / 100);
    mes++;
    let nomeMes = mesesNomes[(mes - 1) % 12];
    let anoOffset = Math.floor((mes - 1) / 12);
    let nomeExibicao = anoOffset > 0 ? `${nomeMes} (Ano ${anoOffset + 1})` : nomeMes;
    
    console.log(`Mês ${nomeExibicao}: R$ ${saldo.toFixed(2)}`);
    historico.push({ mes: nomeExibicao, saldo: parseFloat(saldo.toFixed(2)) });
}
console.log(`Meta atingida em ${mes} meses! Saldo final: R$ ${saldo.toFixed(2)}`);
console.table(historico);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Sequência de Fibonacci
// ------------------------------------------------------------
// A sequência de Fibonacci começa com 0 e 1.
// Cada número seguinte é a soma dos dois anteriores:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// a) Peça ao usuário um limite N.
// b) Usando while, gere e exiba todos os números da sequência
//    de Fibonacci menores ou iguais a N.
// c) Conte quantos números foram gerados.
// d) Exiba: "Total de números na sequência até <N>: <qtd>"
// e) Informe se o próprio N é um número de Fibonacci.

// → Seu código aqui:
let N = readlineSync.questionInt("Informe o limite N para a sequência de Fibonacci: ");
let a = 0;
let b = 1;
let count = 0;
let ehFibonacci = false;

console.log("Sequência:");
while (a <= N) {
    console.log(a);
    count++;
    if (a === N) {
        ehFibonacci = true;
    }
    let temp = a + b;
    a = b;
    b = temp;
}

console.log(`Total de números na sequência até ${N}: ${count}`);
if (ehFibonacci) {
    console.log(`${N} é um número de Fibonacci.`);
} else {
    console.log(`${N} NÃO é um número de Fibonacci.`);
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Caixa registradora
// ------------------------------------------------------------
// Simule o caixa de uma loja.
//
// a) Utilizando a lista de produtos:
let produtos = [
    { nome: "Caneta", preco: 2.5, estoque: 50 },
    { nome: "Caderno", preco: 18.9, estoque: 25 },
    { nome: "Mochila", preco: 89.0, estoque: 15 },
    { nome: "Régua", preco: 4.75, estoque: 35 },
    { nome: "Estojo", preco: 12.3, estoque: 10 }
]
// b) Usando do...while, repita o fluxo de compra:
//    - Exiba o menu de produtos com preços usando console.table().
//    - Pergunte qual produto deseja (número de 1 a 5).
//    - Pergunte a quantidade.
//    - Se possuir estoque necessário, adicione ao carrinho[] no seguinte formato: { produto, quantidade, subtotal } e atualize o estoque.
//    - Pergunte: "Continuar comprando?" (keyInYN()).
// c) Ao sair do loop, exiba o carrinho com console.table().
// d) Calcule e exiba o total da compra.
// e) Pergunte se vai pagar com desconto de funcionário (keyInYN()).
//    Se sim, aplique 15% de desconto.
// f) Exiba o valor final com e sem desconto.

// → Seu código aqui:
let carrinho = [];
let continuar = true;

do {
    console.table(produtos);
    let escolha = readlineSync.questionInt("Qual produto deseja (1 a 5)? ");
    
    if (escolha >= 1 && escolha <= 5) {
        let produtoIndex = escolha - 1;
        let qtd = readlineSync.questionInt(`Quantidade de ${produtos[produtoIndex].nome}: `);
        
        if (qtd > 0 && produtos[produtoIndex].estoque >= qtd) {
            produtos[produtoIndex].estoque -= qtd;
            let subtotal = produtos[produtoIndex].preco * qtd;
            carrinho.push({
                produto: produtos[produtoIndex].nome,
                quantidade: qtd,
                subtotal: subtotal
            });
            console.log("Produto adicionado ao carrinho!");
        } else {
            console.log("Estoque insuficiente ou quantidade inválida.");
        }
    } else {
        console.log("Opção inválida.");
    }
    
    continuar = readlineSync.keyInYN("Continuar comprando?");
} while (continuar);

console.log("\nSeu carrinho:");
if (carrinho.length > 0) {
    console.table(carrinho);
} else {
    console.log("Carrinho vazio.");
}

let total = 0;
for (let item of carrinho) {
    total += item.subtotal;
}

console.log(`Total da compra: R$ ${total.toFixed(2)}`);

if (total > 0) {
    let descontoFuncionario = readlineSync.keyInYN("Pagar com desconto de funcionário (15%)?");
    if (descontoFuncionario) {
        let totalDesconto = total * 0.85;
        console.log(`Valor final (sem desconto): R$ ${total.toFixed(2)}`);
        console.log(`Valor final (com desconto): R$ ${totalDesconto.toFixed(2)}`);
    } else {
        console.log(`Valor final: R$ ${total.toFixed(2)}`);
    }
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Validador de senha
// ------------------------------------------------------------
// O usuário tem 3 tentativas para acertar a senha correta.
//
// a) Defina a senha correta como: "js2025"
// b) Usando while, peça a senha ao usuário e:
//    - Conte as tentativas.
//    - Se acertar: exiba "Acesso liberado!" e encerre.
//    - Se errar e ainda tiver tentativas: informe quantas restam.
//    - Se esgotar as 3 tentativas: exiba "Conta bloqueada!" e encerre.
// c) Ao final, exiba um objeto com console.table():
//    { tentativasUsadas, resultado: "Liberado" ou "Bloqueado" }

// → Seu código aqui:
const senhaCorreta = "js2025";
let tentativas = 0;
let liberado = false;

while (tentativas < 3 && !liberado) {
    let tentativa = readlineSync.question("Digite a senha: ", { hideEchoBack: true });
    tentativas++;
    
    if (tentativa === senhaCorreta) {
        console.log("Acesso liberado!");
        liberado = true;
    } else {
        if (tentativas < 3) {
            console.log(`Senha incorreta. Restam ${3 - tentativas} tentativas.`);
        } else {
            console.log("Conta bloqueada!");
        }
    }
}

console.table([{ tentativasUsadas: tentativas, resultado: liberado ? "Liberado" : "Bloqueado" }]);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Calculadora persistente
// ------------------------------------------------------------
// Uma calculadora que continua operando até o usuário sair.
//
// a) Inicialize 'resultado' com 0.
// b) Usando do...while, repita:
//    - Exiba o resultado atual.
//    - Exiba o menu de operações:
//      1 – Somar | 2 – Subtrair | 3 – Multiplicar | 4 – Dividir | 5 – Zerar | 0 – Sair
//    - Peça a operação.
//    - Para 1 a 4, peça um número e aplique ao resultado.
//      Na divisão, trate (não permita) divisão por zero.
//    - Para 5, zere o resultado.
//    - Para 0, encerre.
// c) Ao sair, exiba: "Resultado final: <resultado>"
// Observação: Realize os cálculos conforme solicitado, não se preocupando com a ordem/sequência lógica matemática

// → Seu código aqui:
let resultado = 0;
let operacao;

do {
    console.log(`\nResultado atual: ${resultado}`);
    console.log("1 - Somar | 2 - Subtrair | 3 - Multiplicar | 4 - Dividir | 5 - Zerar | 0 - Sair");
    operacao = readlineSync.questionInt("Escolha uma operacao: ");
    
    if (operacao >= 1 && operacao <= 4) {
        let num = readlineSync.questionFloat("Digite um numero: ");
        if (operacao === 1) resultado += num;
        else if (operacao === 2) resultado -= num;
        else if (operacao === 3) resultado *= num;
        else if (operacao === 4) {
            if (num === 0) {
                console.log("Erro: Não é permitida divisão por zero.");
            } else {
                resultado /= num;
            }
        }
    } else if (operacao === 5) {
        resultado = 0;
        console.log("Resultado zerado.");
    } else if (operacao !== 0) {
        console.log("Opção inválida.");
    }
} while (operacao !== 0);

console.log(`Resultado final: ${resultado}`);

console.log("_______________________________");