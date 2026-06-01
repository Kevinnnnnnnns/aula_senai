// Importa a biblioteca 'readline-sync' para receber o que você digita
const input = require("readline-sync");

// Mostra o título do programa
console.log("=== CALCULADORA SIMPLES ===");
// Mostra as opções de operação
console.log("1. Somar");
console.log("2. Subtrair");
console.log("3. Multiplicar");
console.log("4. Dividir");
console.log("0. Sair");

// Pergunta qual opção você quer (converte para número inteiro)
let opcao = input.questionInt("\nEscolha uma opcao: ");

// Se escolher 0 ou uma opção inválida, o programa para aqui
if (opcao === 0) {
    console.log("Saindo...");
} else if (opcao < 1 || opcao > 4) {
    console.log("Opção inválida!");
} else {
    // Se a opção for válida, pede os dois números
    let n1 = input.questionInt("Digite o primeiro numero: ");
    let n2 = input.questionInt("Digite o segundo numero: ");
    let resultado;
    let operador;

    // Faz a conta e define o símbolo do operador
    if (opcao === 1) {
        resultado = n1 + n2;
        operador = "+";
    } else if (opcao === 2) {
        resultado = n1 - n2;
        operador = "-";
    } else if (opcao === 3) {
        resultado = n1 * n2;
        operador = "*";
    } else if (opcao === 4) {
        if (n2 === 0) {
            resultado = "Erro: Não pode dividir por zero!";
        } else {
            resultado = n1 / n2;
            operador = "/";
        }
    }

    // Exibe o resultado final com a expressão completa
    if (typeof resultado === "number") {
        console.log(`\nO resultado é: ${n1} ${operador} ${n2} = ${resultado}`);
    } else {
        console.log("\n" + resultado);
    }
}

// O programa termina aqui automaticamente após realizar uma única conta
