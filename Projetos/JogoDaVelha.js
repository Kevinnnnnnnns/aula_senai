// ============================================================
console.log("=== JOGO DA VELHA ===");
// ============================================================

const lerTeclado = require('readline-sync');

// ============================================================
// 1. DECLARAÇÃO DA MATRIZ DO TABULEIRO
// ============================================================
// Matriz 3x3 onde:
// " " = vazio, "X" = jogador 1, "O" = jogador 2

const tabuleiro = [
  [" ", " ", " "],  // linha 0
  [" ", " ", " "],  // linha 1
  [" ", " ", " "]   // linha 2
];

// ============================================================
// 2. VARIÁVEIS DO JOGO
// ============================================================
// Controla qual jogador é a vez: "X" ou "O"
let jogadorAtual = "X";

// Variável para controlar se o jogo continua
let jogo = true;

// ============================================================
// 3. LOOP PRINCIPAL DO JOGO
// ============================================================
// Enquanto o jogo não terminou, continue pedindo jogadas
while (jogo) {
  
  // Limpa a tela
  console.clear();
  console.log("=== JOGO DA VELHA ===");
  console.log();
  
  // ============================================================
  // EXIBE O TABULEIRO
  // ============================================================
  // console.table() mostra a matriz de forma visual com linhas e colunas
  console.table(tabuleiro);
  
  console.log();
  
  // ============================================================
  // ENTRADA DO JOGADOR
  // ============================================================
  // Pede a linha onde o jogador quer jogar (0, 1 ou 2)
  let linha = lerTeclado.question(`Jogador ${jogadorAtual} - escolha a LINHA (0, 1 ou 2): `);
  // Converte a entrada de string para número
  linha = parseInt(linha);
  
  // Pede a coluna onde o jogador quer jogar (0, 1 ou 2)
  let coluna = lerTeclado.question(`Jogador ${jogadorAtual} - escolha a COLUNA (0, 1 ou 2): `);
  // Converte a entrada de string para número
  coluna = parseInt(coluna);
  
  // ============================================================
  // VALIDAÇÃO DA JOGADA
  // ============================================================
  // Verifica se a posição está dentro dos limites da matriz
  if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
    console.log("Posição inválida! Digite números entre 0 e 2.");
    continue; // Volta ao início do loop
  }
  
  // Verifica se a célula [linha][coluna] já está ocupada
  if (tabuleiro[linha][coluna] !== " ") {
    console.log("Essa posição já está ocupada! Escolha outra.");
    continue; // Volta ao início do loop
  }
  
  // ============================================================
  // MARCA A JOGADA NA MATRIZ
  // ============================================================
  // Coloca o símbolo do jogador na posição [linha][coluna]
  tabuleiro[linha][coluna] = jogadorAtual;
  
  // ============================================================
  // 4. VERIFICA VITÓRIA – LINHAS
  // ============================================================
  // Usa for aninhado para percorrer a matriz
  let vitoria = false;
  
  // Verifica LINHAS
  for (let i = 0; i < 3; i++) {
    // Se toda a linha i tem o mesmo símbolo do jogador
    if (tabuleiro[i][0] === jogadorAtual && 
        tabuleiro[i][1] === jogadorAtual && 
        tabuleiro[i][2] === jogadorAtual) {
      vitoria = true; // Encontrou uma linha vencedora
    }
  }
  
  // ============================================================
  // 5. VERIFICA VITÓRIA – COLUNAS
  // ============================================================
  // Verifica COLUNAS (inverte a ordem dos índices)
  for (let j = 0; j < 3; j++) {
    // Se toda a coluna j tem o mesmo símbolo do jogador
    if (tabuleiro[0][j] === jogadorAtual && 
        tabuleiro[1][j] === jogadorAtual && 
        tabuleiro[2][j] === jogadorAtual) {
      vitoria = true; // Encontrou uma coluna vencedora
    }
  }
  
  // ============================================================
  // 6. VERIFICA VITÓRIA – DIAGONAL PRINCIPAL
  // ============================================================
  // Diagonal do canto superior esquerdo até canto inferior direito
  if (tabuleiro[0][0] === jogadorAtual && 
      tabuleiro[1][1] === jogadorAtual && 
      tabuleiro[2][2] === jogadorAtual) {
    vitoria = true;
  }
  
  // ============================================================
  // 7. VERIFICA VITÓRIA – DIAGONAL SECUNDÁRIA
  // ============================================================
  // Diagonal do canto superior direito até canto inferior esquerdo
  if (tabuleiro[0][2] === jogadorAtual && 
      tabuleiro[1][1] === jogadorAtual && 
      tabuleiro[2][0] === jogadorAtual) {
    vitoria = true;
  }
  
  // ============================================================
  // 8. SE VENCEU, MOSTRA RESULTADO
  // ============================================================
  if (vitoria) {
    console.clear();
    console.log("=== JOGO DA VELHA ===");
    console.log();
    console.table(tabuleiro);
    console.log(`🎉 Jogador ${jogadorAtual} VENCEU! 🎉`);
    jogo = false; // Encerra o jogo
  } else {
    // ============================================================
    // 9. VERIFICA EMPATE
    // ============================================================
    // Percorre TODA a matriz com dois for aninhados
    let empate = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Se encontrar alguma célula vazia, ainda há espaço
        if (tabuleiro[i][j] === " ") {
          empate = false; // Não é empate
        }
      }
    }
    
    // ============================================================
    // 10. SE EMPATOU, MOSTRA RESULTADO
    // ============================================================
    if (empate) {
      console.clear();
      console.log("=== JOGO DA VELHA ===");
      console.log();
      console.table(tabuleiro);
      console.log("Empate! Nenhum jogador venceu.");
      jogo = false; // Encerra o jogo
    } else {
      // ============================================================
      // 11. ALTERNA O JOGADOR
      // ============================================================
      // Se era "X", vira "O". Se era "O", vira "X".
      if (jogadorAtual === "X") {
        jogadorAtual = "O";
      } else {
        jogadorAtual = "X";
      }
    }
  }
}
