const read = require('readline-sync');

// ============================================================
//   JOGO: Batalha por Turnos
// ============================================================
//
// Um herói enfrenta uma sequência de 3 inimigos em batalhas por turnos.
// A cada turno, herói e inimigo atacam um ao outro simultaneamente.
// O combate continua até que um dos dois chegue a 0 ou menos de HP (pontos de vida).
//
// REGRAS:
//   - O herói começa com 100 HP.
//   - Cada inimigo é um objeto com HP, dano mínimo e dano máximo definidos em um array de inimigos.
//   - A cada turno, o herói escolhe uma ação:
//       1 – Atacar → causa dano aleatório entre seu dano mínimo e máximo
//       2 – Defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//       3 – Curar → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo deve ter por turno:
//     70% de chance de atacar → causa dano aleatório entre seu dano mínimo e máximo
//     20% de chance de defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//     10% de chance de curar  → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo ataca sempre com dano aleatório entre seu dano mínimo e dano máximo.
//   - O ataque tanto do jogador quando do inimigo devem ser realizados simultaneamente.
//   - Há uma chance de 5% do ataque (de ambos) ser um golpe crítico, causando o dobro de dano.
//     Caso isso corra, exiba que foi um dado crítico.
//   - Se o herói vencer, recupera 25 HP (sem ultrapassar 100).
//   - Se o herói perder, o jogo termina.
//
// AO FINAL DE CADA BATALHA:
//   - Exiba o resultado e a vida atual do herói.
//   - Se o herói vencer as 3 batalhas, exiba o resultado final.
//
// Após o desenvolvimento das regras base acima descritas, 
//   sinta-se livre para implementar melhorias e adicionar novos recursos.
//   - Exemplos de mecânicas adicionais:
//      - 2 tipos de armas para o herói, uma possuindo maior dano, mas possui menor precisão e a outra o inverso.
//      - Inimigos gerados aleatoriamente com atributos variados, aumentando exponencialmente a dificuldade.
//      - Sistema de níveis para o herói, permitindo que ele ganhe experiência e aumente suas habilidades.
//      - Itens e equipamentos que podem ser encontrados ou comprados (derrotar inimigos concede ouro), oferecendo bônus e habilidades especiais.
//      - Eventos aleatórios que podem ocorrer durante as batalhas, como a intervenção de aliados ou armadilhas no campo de batalha.
//
// ============================================================

// ============================================================
// HERÓI (não altere a estrutura — altere os valores se quiser)
// ============================================================

const heroi = {
    nome: "", // Deve ser preenchido pelo jogador
    hpAtual: 100,
    hpMax: 100,
    danoMin: 15,
    danoMax: 25
};

// ============================================================
// INIMIGOS (não altere a estrutura — altere os valores se quiser)
// Remova o inimigo da lista se ele for derrotado
// ============================================================

const inimigos = [
    {
        nome: "Goblin",
        hp: 30,
        danoMin: 6,
        danoMax: 12
    },
    {
        nome: "Orc Guerreiro",
        hp: 50,
        danoMin: 10,
        danoMax: 18
    },
    {
        nome: "Dragão Negro",
        hp: 80,
        danoMin: 15,
        danoMax: 25
    }
];

// ============================================================
// INÍCIO DO JOGO
// ============================================================

console.log("╔══════════════════════════╗");
console.log("║   BEM VINDO(A) AO ....   ║");
console.log("╚══════════════════════════╝");

// Peça o nome do herói e exiba as regras do jogo resumidamente.
// → Seu código aqui:
heroi.nome = read.question("Digite o nome do seu heroi: ") || "Heroi Desconhecido";
console.log(`\nSalve, ${heroi.nome}! Prepare-se para 3 batalhas epicas.`);
console.log("REGRAS BÁSICAS:");
console.log("  1. Atacar: Causa dano com base na sua forca (pode dar critico!).");
console.log("  2. Defender: Reduz o dano recebido no turno em 75%.");
console.log("  3. Curar: Restaura de 10 a 20 de HP (apenas 1 vez por batalha!).");
console.log("Ao final de cada vitoria, voce recupera ate 25 de HP.");

console.log("_______________________________");

// ============================================================
// LOOP DE BATALHAS
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║    VAMOS AS BATATALHAS!    ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui:
let ultimoInimigoEnfrentado = "";

for (let i = 0; i < inimigos.length; i++) {
    let inimigo = inimigos[i];
    let curasHeroi = 1;
    let curasInimigo = 1;
    ultimoInimigoEnfrentado = inimigo.nome;

    console.log(`\n================================`);
    console.log(` BATALHA ${i + 1}: ${heroi.nome} vs ${inimigo.nome}`);
    console.log(`================================`);

    while (heroi.hpAtual > 0 && inimigo.hp > 0) {
        console.log(`\n--- STATUS DO TURNO ---`);
        console.log(`${heroi.nome}: ${heroi.hpAtual}/${heroi.hpMax} HP`);
        console.log(`${inimigo.nome}: ${inimigo.hp} HP`);
        console.log(`-----------------------`);
        
        console.log("Sua vez. Escolha uma acao:");
        console.log("1 - Atacar");
        console.log("2 - Defender");
        console.log(`3 - Curar (${curasHeroi > 0 ? "1 restante" : "ESGOTADO"})`);
        
        let acaoHeroi = read.questionInt("Opcao: ");
        while (acaoHeroi < 1 || acaoHeroi > 3 || (acaoHeroi === 3 && curasHeroi <= 0)) {
            if (acaoHeroi === 3 && curasHeroi <= 0) {
                console.log("Voce ja usou sua cura nesta batalha!");
            } else {
                console.log("Opcao invalida.");
            }
            acaoHeroi = read.questionInt("Opcao: ");
        }

        let acaoInimigo = 0;
        let rolagemInimigo = Math.random();
        
        if (rolagemInimigo <= 0.70) {
            acaoInimigo = 1; 
        } else if (rolagemInimigo <= 0.90) {
            acaoInimigo = 2; 
        } else {
            if (curasInimigo > 0) {
                acaoInimigo = 3; 
            } else {
                acaoInimigo = 1; 
            }
        }

        let danoHeroi = Math.floor(Math.random() * (heroi.danoMax - heroi.danoMin + 1)) + heroi.danoMin;
        let danoInimigo = Math.floor(Math.random() * (inimigo.danoMax - inimigo.danoMin + 1)) + inimigo.danoMin;

        if (acaoHeroi === 1 && Math.random() <= 0.05) {
            console.log(">>> GOLPE CRITICO DO HEROI! <<<");
            danoHeroi *= 2;
        }
        if (acaoInimigo === 1 && Math.random() <= 0.05) {
            console.log(`>>> GOLPE CRITICO DO ${inimigo.nome.toUpperCase()}! <<<`);
            danoInimigo *= 2;
        }

        if (acaoHeroi === 3) {
            let cura = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
            heroi.hpAtual = Math.min(heroi.hpAtual + cura, heroi.hpMax);
            curasHeroi--;
            console.log(`\n[!] ${heroi.nome} usou Cura e recuperou ${cura} HP!`);
            danoHeroi = 0;
        } else if (acaoHeroi === 2) {
            console.log(`\n[!] ${heroi.nome} assumiu postura de Defesa!`);
            danoInimigo = Math.floor(danoInimigo * 0.25); 
            danoHeroi = 0;
        }

        if (acaoInimigo === 3) {
            let cura = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
            inimigo.hp += cura;
            curasInimigo--;
            console.log(`[!] ${inimigo.nome} usou Cura e recuperou ${cura} HP!`);
            danoInimigo = 0;
        } else if (acaoInimigo === 2) {
            console.log(`[!] ${inimigo.nome} assumiu postura de Defesa!`);
            danoHeroi = Math.floor(danoHeroi * 0.25); 
            danoInimigo = 0;
        }

        if (acaoHeroi === 1) {
            inimigo.hp -= danoHeroi;
            console.log(`*  ${heroi.nome} ataca causando ${danoHeroi} de dano!`);
        }
        
        if (acaoInimigo === 1) {
            heroi.hpAtual -= danoInimigo;
            console.log(`*  ${inimigo.nome} ataca causando ${danoInimigo} de dano!`);
        }
    }

    if (heroi.hpAtual > 0) {
        console.log(`\n>>> VOCE DERROTOU O ${inimigo.nome.toUpperCase()}! <<<`);
        let recuperacao = 25;
        heroi.hpAtual = Math.min(heroi.hpAtual + recuperacao, heroi.hpMax);
        console.log(`${heroi.nome} descansou e recuperou ${recuperacao} HP. HP Atual: ${heroi.hpAtual}/${heroi.hpMax}`);
    } else {
        break; 
    }
}

console.log("_______________________________");

// ============================================================
// RESULTADO FINAL
// ============================================================
//
// PASSO 5 – Após o for de batalhas:
//
//   a) Se heroi.hp > 0 (venceu todas as batalhas):
//        Exiba:
//        "══════════════════════════════"
//        "VOCÊ VENCEU O JOGO!"
//        "<heroi.nome> sobreviveu a todas as batalhas!"
//        "HP final: <heroi.hp>/<heroi.hpMax>"
//        "══════════════════════════════"
//
//   b) Se heroi.hp <= 0 (foi derrotado):
//        Exiba:
//        "══════════════════════════════"
//        "GAME OVER"
//        "<heroi.nome> caiu em batalha contra o <nome do inimigo>"
//        "══════════════════════════════"

// → Seu código aqui:
console.log("\n");
if (heroi.hpAtual > 0) {
    console.log("══════════════════════════════");
    console.log("VOCÊ VENCEU O JOGO!");
    console.log(`${heroi.nome} sobreviveu a todas as batalhas!`);
    console.log(`HP final: ${heroi.hpAtual}/${heroi.hpMax}`);
    console.log("══════════════════════════════");
} else {
    console.log("══════════════════════════════");
    console.log("GAME OVER");
    console.log(`${heroi.nome} caiu em batalha contra o ${ultimoInimigoEnfrentado}`);
    console.log("══════════════════════════════");
}