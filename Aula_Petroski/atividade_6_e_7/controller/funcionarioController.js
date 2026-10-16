import { Funcionario } from "../model/Funcionario.js";

import {
    cadastrarFuncionario as salvarFuncionario,
    listarFuncionarios as obterFuncionarios,
    buscarFuncionarioPorIndice,
    atualizarFuncionario as substituirFuncionario,
    excluirFuncionario as removerFuncionario
} from "../repository/funcionarioRepository.js";

export function cadastrar(matricula, nome, setor, cargo) {
    const funcionario = new Funcionario(matricula, nome, setor, cargo);
    salvarFuncionario(funcionario);
    console.log("Funcionário cadastrado com sucesso!");
}

export function listar() {
    const funcionarios = obterFuncionarios();

    console.log("\n===== LISTA DE FUNCIONÁRIOS =====");

    for (let i = 0; i < funcionarios.length; i++) {
        console.log(
            `Índice: ${i} | ` +
            `Matrícula: ${funcionarios[i].matricula} | ` +
            `Nome: ${funcionarios[i].nome} | ` +
            `Setor: ${funcionarios[i].setor} | ` +
            `Cargo: ${funcionarios[i].cargo} | ` +
            `Status: ${funcionarios[i].status}`
        );
    }

    if (funcionarios.length === 0) {
        console.log("Nenhum funcionário cadastrado.");
    }
}

export function buscar(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (funcionario === undefined) {
        console.log("Funcionário não encontrado nesse índice.");
        return;
    }

    console.log("\n===== FUNCIONÁRIO ENCONTRADO =====");
    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Setor: ${funcionario.setor}`);
    console.log(`Cargo: ${funcionario.cargo}`);
    console.log(`Status: ${funcionario.status}`);
}

export function atualizar(indice, matricula, nome, setor, cargo) {
    if (buscarFuncionarioPorIndice(indice) === undefined) {
        console.log("Funcionário não encontrado para atualização.");
        return;
    }

    const funcionario = new Funcionario(matricula, nome, setor, cargo);

    if (substituirFuncionario(indice, funcionario)) {
        console.log("Funcionário atualizado com sucesso!");
    }
}

export function excluir(indice) {
    if (buscarFuncionarioPorIndice(indice) === undefined) {
        console.log("Funcionário não encontrado para exclusão.");
        return;
    }

    removerFuncionario(indice);
    console.log("Funcionário excluído com sucesso!");
}

export function ativar(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (funcionario === undefined) {
        console.log("Funcionário não encontrado para ativação.");
        return;
    }

    funcionario.ativar();
    console.log("Funcionário ativado com sucesso!");
}

export function desativar(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (funcionario === undefined) {
        console.log("Funcionário não encontrado para desativação.");
        return;
    }

    funcionario.desativar();
    console.log("Funcionário desativado com sucesso!");
}

export {
    cadastrar as cadastrarFuncionario,
    listar as listarFuncionarios,
    buscar as buscarFuncionario,
    atualizar as atualizarFuncionario,
    excluir as excluirFuncionario,
    ativar as ativarFuncionario,
    desativar as desativarFuncionario
};

