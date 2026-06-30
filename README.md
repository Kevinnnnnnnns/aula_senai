# aula_senai

Repositorio com exercicios, desafios, jogos e atividades avaliativas desenvolvidos nas aulas de logica de programacao com JavaScript no SENAI.

## Visao geral

O projeto e focado em pratica de fundamentos, com scripts de terminal usando Node.js e a biblioteca `readline-sync` para entrada de dados.

Topicos trabalhados:

- Variaveis e tipos de dados
- Arrays e objetos
- Input e output no terminal
- Operadores aritmeticos, relacionais e logicos
- Estruturas condicionais (`if/else` e `switch/case`)
- Estruturas de repeticao (`while` e `do...while`)
- Simulacoes e jogos em modo texto

## Tecnologias

- JavaScript (Node.js)
- readline-sync

## Estrutura do repositorio

### Dependencias

- `package.json`: dependencia do projeto (`readline-sync`)
- `package-lock.json`: lockfile gerado pelo npm

### Atividades e desafios

- `Atividade-operadores-arit.js`: atividade de operadores aritmeticos (atividade 04)
- `atividade_05.js`: atividade de operadores relacionais
- `atividade-06.js`: atividade de operadores logicos
- `desafios_06.js`: desafios de operadores logicos
- `desafios_06,1.js`: desafios integrados (aritmeticos, relacionais e logicos)
- `atividade-07.js`: atividade de estruturas condicionais com `if/else`
- `atividade_switch_case.js`: atividade de estruturas condicionais com `switch/case`
- `desafios_switch_Case.js`: desafios com `switch/case`
- `atividade-10.js`: atividade de repeticao com `while` e `do...while`
- `revisao.js`: desafios de revisao sobre entrada/saida, arrays e objetos
- `desafio.quiz.js`: quiz com 5 perguntas, pontuacao e resultado final

### Jogos

- `jogo02-adivinha.js`: jogo de adivinhacao com 2 modos (jogador adivinha e computador adivinha)
- `jogo03-batalha.js`: jogo de batalha por turnos contra 3 inimigos

### Avaliacoes

- `atividade-avaliativa-n4.js`: avaliativa sobre variaveis, arrays, objetos e I/O
- `atividade_avaliativa_n5.js`: avaliativa com fluxo condicional para recomendacao de viagem

### Pasta adicionada por instalacao

- `node_modules/`: dependencias instaladas localmente (geralmente nao deve ser versionada)

## Como executar

### 1. Pre-requisitos

- Node.js instalado (recomendado 18+)

### 2. Instalar dependencias

```bash
npm install
```

### 3. Executar um arquivo

```bash
node nome-do-arquivo.js
```

Exemplos:

```bash
node atividade-06.js
node atividade_switch_case.js
node jogo02-adivinha.js
node jogo03-batalha.js
```

## Objetivo educacional

Este repositorio funciona como trilha de pratica progressiva:

- atividades guiadas para fixacao dos conceitos
- desafios para aplicar regras sem estruturas mais avancadas
- jogos para consolidar logica, validacao e controle de fluxo
- avaliativas para medir dominio dos conteudos

## Observacoes

- A maior parte dos arquivos contem enunciados e blocos de resolucao no mesmo script.
- Alguns exercicios estao comentados para facilitar execucao por partes durante a aula.
- Caso queira evoluir o projeto, uma boa proxima etapa e organizar os arquivos por modulo/pasta (`operadores`, `condicionais`, `loops`, `jogos`, `avaliativas`).