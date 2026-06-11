// ====================================
// JOGO DA FORCA - 2 JOGADORES
// ====================================

// Importa o módulo readline para ler dados digitados no terminal
const readline = require("readline");

// Cria a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ===============================
// VARIÁVEIS DO JOGO
// ===============================

// Palavra escolhida pelo Jogador 1
let palavraSecreta;

// Palavra que será exibida ao Jogador 2
let palavraOculta = [];

// Guarda as letras já utilizadas
let letrasUsadas = [];

// Quantidade de erros do jogador
let erros = 0;

// Quantidade máxima de erros permitidos
let maxErros = 6;


// ===============================
// FUNÇÃO PARA INICIAR O JOGO
// ===============================

function iniciarJogo() {

    // Reinicia as variáveis caso o jogador escolha jogar novamente
    palavraOculta = [];
    letrasUsadas = [];
    erros = 0;

    // Pede para o Jogador 1 digitar a palavra secreta
    rl.question("Jogador 1, digite a palavra secreta: ", function(palavra) {

        // Armazena a palavra digitada
        palavraSecreta = palavra;

        // Limpa a tela para esconder a palavra do Jogador 2
        console.clear();

        // Cria os traços (_)
        for (let i = 0; i < palavraSecreta.length; i++) {

            // Se existir espaço, mantém o espaço
            if (palavraSecreta[i] === " ") {

                palavraOculta.push(" ");

            } else {

                palavraOculta.push("_");

            }

        }

        // Inicia as rodadas
        jogarRodada();

    });

}


// ===============================
// MOSTRA O ESTADO ATUAL DO JOGO
// ===============================

function mostrarJogo() {

    console.log("\n================================");
    console.log("PALAVRA: " + palavraOculta.join(" "));
    console.log("LETRAS USADAS: " + letrasUsadas.join(", "));
    console.log("ERROS: " + erros + "/" + maxErros);
    console.log("================================");

}


// ===============================
// VERIFICA SE O JOGADOR VENCEU
// ===============================

function venceu() {

    // Compara a palavra oculta com a palavra secreta
    if (palavraOculta.join("") === palavraSecreta) {

        return true;

    }

    return false;

}


// ===============================
// EXECUTA UMA RODADA DO JOGO
// ===============================

function jogarRodada() {

    // Mostra o estado atual
    mostrarJogo();

    // Pede uma letra ao jogador
    rl.question("Digite uma letra: ", function(letra) {

        let acertou = false;

        // Verifica se a letra já foi utilizada
        for (let i = 0; i < letrasUsadas.length; i++) {

            if (letrasUsadas[i] === letra) {

                console.log("\nVocê já utilizou essa letra!");

                jogarRodada();

                return;
            }

        }

        // Adiciona a letra ao vetor de letras utilizadas
        letrasUsadas.push(letra);

        // Procura a letra na palavra secreta
        for (let i = 0; i < palavraSecreta.length; i++) {

            if (palavraSecreta[i] === letra) {

                // Revela a letra encontrada
                palavraOculta[i] = letra;

                acertou = true;

            }

        }

        // Se não encontrou a letra, conta um erro
        if (acertou === false) {

            erros++;

            console.log("\nLetra incorreta!");

        }

        // Verifica se venceu
        if (venceu()) {

            console.log("\n🎉 PARABÉNS!");
            console.log("Você descobriu a palavra: " + palavraSecreta);

            jogarNovamente();

            return;

        }

        // Verifica se perdeu
        if (erros >= maxErros) {

            console.log("\n💀 GAME OVER!");
            console.log("A palavra era: " + palavraSecreta);

            jogarNovamente();

            return;

        }

        // Continua o jogo
        jogarRodada();

    });

}


// ===============================
// PERGUNTA SE O JOGADOR DESEJA
// JOGAR NOVAMENTE
// ===============================

function jogarNovamente() {

    rl.question("\nDeseja jogar novamente? (s/n): ", function(resposta) {

        if (resposta === "s") {

            console.clear();

            iniciarJogo();

        } else {

            console.log("\nObrigado por jogar!");

            rl.close();

        }

    });

}


// ===============================
// INICIA O PROGRAMA
// ===============================

iniciarJogo();