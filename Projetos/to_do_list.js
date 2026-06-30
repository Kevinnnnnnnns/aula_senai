const rl = require("readline-sync");

let tarefas = [];

let opcao;

do {
    console.clear();
    console.log("===== TO-DO LIST =====");
    console.log("1 - Adicionar tarefa");
    console.log("2 - Visualizar tarefas");
    console.log("3 - Ver descrição");
    console.log("4 - Editar tarefa");
    console.log("5 - Excluir tarefa");
    console.log("6 - Filtrar tarefas");
    console.log("7 - Sair");

    opcao = rl.questionInt("Escolha uma opcao: ");

    switch (opcao) {

        // ADICIONAR
        case 1:
            let titulo = rl.question("Titulo: ");
            let descricao = rl.question("Descricao: ");

            if (titulo == "" || descricao == "") {
                console.log("Preencha todos os campos!");
            } else {
                tarefas.push({
                    titulo: titulo,
                    descricao: descricao
                });

                console.log("Tarefa adicionada!");
            }
            break;

        // LISTAR TITULOS
        case 2:

            if (tarefas.length == 0) {
                console.log("Nenhuma tarefa cadastrada.");
            } else {

                console.log("\nLista de tarefas:");

                for (let i = 0; i < tarefas.length; i++) {
                    console.log(i + " - " + tarefas[i].titulo);
                }
            }

            break;

        // VER DESCRIÇÃO
        case 3:

            if (tarefas.length == 0) {
                console.log("Nenhuma tarefa.");
            } else {

                for (let i = 0; i < tarefas.length; i++) {
                    console.log(i + " - " + tarefas[i].titulo);
                }

                let indice = rl.questionInt("Qual tarefa deseja ver? ");

                if (indice >= 0 && indice < tarefas.length) {
                    console.log("Descricao:");
                    console.log(tarefas[indice].descricao);
                } else {
                    console.log("Indice invalido!");
                }

            }

            break;

        // EDITAR
        case 4:

            if (tarefas.length == 0) {
                console.log("Nenhuma tarefa.");
            } else {

                for (let i = 0; i < tarefas.length; i++) {
                    console.log(i + " - " + tarefas[i].titulo);
                }

                let editar = rl.questionInt("Qual tarefa deseja editar? ");

                if (editar >= 0 && editar < tarefas.length) {

                    console.log("1 - Editar titulo");
                    console.log("2 - Editar descricao");

                    let escolha = rl.questionInt("Opcao: ");

                    if (escolha == 1) {
                        tarefas[editar].titulo = rl.question("Novo titulo: ");
                    } else if (escolha == 2) {
                        tarefas[editar].descricao = rl.question("Nova descricao: ");
                    } else {
                        console.log("Opcao invalida.");
                    }

                } else {
                    console.log("Indice invalido.");
                }

            }

            break;

        // EXCLUIR
        case 5:

            if (tarefas.length == 0) {
                console.log("Nenhuma tarefa.");
            } else {

                for (let i = 0; i < tarefas.length; i++) {
                    console.log(i + " - " + tarefas[i].titulo);
                }

                let excluir = rl.questionInt("Qual tarefa deseja excluir? ");

                if (excluir >= 0 && excluir < tarefas.length) {
                    tarefas.splice(excluir, 1);
                    console.log("Tarefa excluida!");
                } else {
                    console.log("Indice invalido.");
                }

            }

            break;

        // FILTRAR
        case 6:

            let busca = rl.question("Digite uma palavra: ");

            let encontrou = false;

            for (let i = 0; i < tarefas.length; i++) {

                if (tarefas[i].titulo.toLowerCase().includes(busca.toLowerCase())) {
                    console.log(i + " - " + tarefas[i].titulo);
                    encontrou = true;
                }

            }

            if (!encontrou) {
                console.log("Nenhuma tarefa encontrada.");
            }

            break;

        case 7:
            console.log("Programa encerrado.");
            break;

        default:
            console.log("Opcao invalida.");

    }

    if (opcao != 7) {
        rl.question("\nPressione ENTER para continuar...");
    }

} while (opcao != 7);