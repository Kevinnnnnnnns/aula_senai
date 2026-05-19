// ============================================================
//   JOGO: Adivinhe o Número
// ============================================================
//
// O jogo tem DOIS modos, ambos devem ser implementados:
//
//   MODO 1 – Computador pensa, você adivinha
//     O computador sorteia um número de 1 a 100.
//     O jogador tem até 7 tentativas para descobrir qual é.
//     A cada erro, o programa diz se o palpite foi alto ou baixo.
//
//   MODO 2 – Você pensa, computador adivinha
//     O jogador pensa em um número de 1 a 100 (não digita).
//     O computador tenta adivinhar usando busca binária:
//        sempre chuta o meio do intervalo restante.
//     O jogador responde: 1 = correto | 2 = muito alto | 3 = muito baixo
//     O computador deve acertar em no máximo 7 tentativas.
//
// Para números aleatórios, utilize a função Math.random() do Javascript
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CONFIGURAÇÕES DO JOGO (não altere)
// ============================================================

const MAX_TENTATIVAS = 7;
const NUM_MIN = 1;
const NUM_MAX = 100;

// ============================================================
// MENU PRINCIPAL
// ============================================================

console.log("|==============================|");
console.log("|     ADIVINHE O NÚMERO        |");
console.log("|==============================|");
console.log("|  1 – Eu adivinho o número    |");
console.log("|  2 – Computador adivinha     |");
console.log("|  3 – Sair                    |");
console.log("|==============================|");

const modo = lerTeclado.questionInt("\nEscolha o modo: ");

console.log("_______________________________");


// ============================================================
// MODO 1 – Computador pensa, jogador adivinha
// ============================================================
//
// Instruções para implementação do Modo 1:
//
// PASSO 1 – Gere o número secreto do computador Math.random();
// PASSO 2 – Passe as instruções do jogo.
// PASSO 3 – Use um for para as tentativas.
//  - Se acertou, exiba: "Parabéns! Você acertou em <i> tentativa(s)!", e encerre o jogo.
//  - Se o palpite for maior que o secreto, exiba: "Muito alto! Tente um número menor."
//  - Se o palpite for menor que o secreto, exiba: "Muito baixo! Tente um número maior."
//  - Ao final de cada tentativa errada, exiba quantas tentativas restam.
//  - Se o jogador NÃO acertou, exiba: "Fim de jogo! O número era <secreto>."
// PASSO 4 – Exiba um resumo:
//           "Número secreto: <secreto>"
//           "Tentativas usadas: <i>"
//           "Resultado: Vitória" ou "Resultado: Derrota"

// → Seu código do MODO 1 aqui:


// ============================================================
// MODO 2 – Jogador pensa, computador adivinha
// ============================================================
//
// Instruções para implementação do Modo 2:
//
// PASSO 1 – Instrua o jogador a digitar um número inteiro entre 1 e 100;
// PASSO 2 – Inicialize o intervalo de busca:
//           let min = NUM_MIN;
//           let max = NUM_MAX;
// PASSO 3 – Use um for para as tentativas.
//   a) Calcule o palpite do computador: meio do intervalo
//   b) Exiba: "Tentativa <i>: Meu palpite é <palpite>!"
//   c) Pergunte ao jogador o resultado com questionInt():
//        "1 – Acertei | 2 – Muito alto | 3 – Muito baixo"
//   d) De acordo com a resposta, busque pelo meio do novo intervalo.
// PASSO 4 – Se o computador acertar, exiba uma mensagem de vitória, exiba quantas tentativas o computador usou e finalize o jogo.
// PASSO 5 – Se o computador não acertar, exiba uma mensagem de derrota e o número que o jogador estava pensando.

// Implemente seu código abaixo:

if (modo === 1) {
    // PASSO 1 – Gerar número secreto
    const secreto = Math.floor(Math.random() * (NUM_MAX - NUM_MIN + 1)) + NUM_MIN;
    let acertou = false;
    let i = 0;

    // PASSO 2 – Instruções
    console.log(`\nEu pensei em um número de ${NUM_MIN} a ${NUM_MAX}.`);
    console.log(`Você tem ${MAX_TENTATIVAS} tentativas para adivinhar!`);

    // PASSO 3 – Loop de tentativas
    for (i = 1; i <= MAX_TENTATIVAS; i++) {
        let palpite = lerTeclado.questionInt(`\nTentativa ${i} - Qual o seu palpite? `);

        if (palpite === secreto) {
            console.log(`\nParabéns! Você acertou em ${i} tentativa(s)!`);
            acertou = true;
            break;
        } else if (palpite > secreto) {
            console.log("Muito alto! Tente um número menor.");
        } else {
            console.log("Muito baixo! Tente um número maior.");
        }

        let restantes = MAX_TENTATIVAS - i;
        if (restantes > 0 && !acertou) {
            console.log(`Restam ${restantes} tentativas.`);
        }
    }

    if (!acertou) {
        console.log(`\nFim de jogo! O número era ${secreto}.`);
    }

    // PASSO 4 – Resumo
    console.log("\n--------- RESUMO ---------");
    console.log(`Número secreto: ${secreto}`);
    console.log(`Tentativas usadas: ${i > MAX_TENTATIVAS ? MAX_TENTATIVAS : i}`);
    console.log(`Resultado: ${acertou ? "Vitória" : "Derrota"}`);
    console.log("--------------------------");

} else if (modo === 2) {
    // PASSO 1 – Instrução
    console.log(`\nPense em um número entre ${NUM_MIN} e ${NUM_MAX} e eu vou tentar adivinhar.`);
    lerTeclado.keyInPause("Pressione qualquer tecla quando estiver pronto...");

    // PASSO 2 – Inicializar intervalo
    let min = NUM_MIN;
    let max = NUM_MAX;
    let acertou = false;
    let i = 0;

    // PASSO 3 – Loop de tentativas
    for (i = 1; i <= MAX_TENTATIVAS; i++) {
        // a) Calcular palpite (meio do intervalo)
        let palpite = Math.floor((min + max) / 2);

        // b) Exibir palpite
        console.log(`\nTentativa ${i}: Meu palpite é ${palpite}!`);

        // c) Perguntar resultado
        console.log("1 – Acertei | 2 – Muito alto | 3 – Muito baixo");
        let resposta = lerTeclado.questionInt("Escolha uma opcao: ");

        // d) Ajustar intervalo
        if (resposta === 1) {
            // PASSO 4 – Vitória do computador
            console.log(`\nHA! Eu sabia! Acertei em ${i} tentativas.`);
            acertou = true;
            break;
        } else if (resposta === 2) {
            max = palpite - 1;
        } else if (resposta === 3) {
            min = palpite + 1;
        } else {
            console.log("Opção inválida! Vou considerar que errei.");
        }

        if (min > max) {
            console.log("\nEi! Você deve ter se enganado nas respostas. O intervalo não faz mais sentido!");
            break;
        }
    }

    // PASSO 5 – Derrota do computador
    if (!acertou) {
        console.log("\nNão consegui adivinhar em 7 tentativas... Você venceu desta vez!");
        let numeroPensado = lerTeclado.questionInt("Em qual número você estava pensando? ");
        console.log(`Hum, ${numeroPensado}... vou praticar mais!`);
    }

} else if (modo === 3) {
    console.log("\nSaindo do jogo... Até a próxima!");
} else {
    console.log("\nOpção inválida. Reinicie o programa.");
}
