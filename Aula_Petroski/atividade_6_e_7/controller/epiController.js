
import { Epi } from "../model/Epi.js";

import {
    cadastrarEpi as salvarEpi,
    listarEpis as obterEpis,
    buscarEpiPorIndice,
    atualizarEpi as substituirEpi,
    excluirEpi as removerEpi
} from "../repository/epiRepository.js";

export function cadastrar(codigo, nome, ca, quantidade) {
    const epi = new Epi(codigo, nome, ca, quantidade);
    salvarEpi(epi);
    console.log("EPI cadastrado com sucesso!");
}

export function listar() {
    const epis = obterEpis();

    console.log("\n===== LISTA DE EPIs =====");

    for (let i = 0; i < epis.length; i++) {
        console.log(
            `Índice: ${i} | ` +
            `Código: ${epis[i].codigo} | ` +
            `Nome: ${epis[i].nome} | ` +
            `CA: ${epis[i].ca} | ` +
            `Quantidade: ${epis[i].quantidade}`
        );
    }

    if (epis.length === 0) {
        console.log("Nenhum EPI cadastrado.");
    }
}

export function buscar(indice) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado nesse índice.");
        return;
    }

    console.log("\n===== EPI ENCONTRADO =====");
    console.log(`Código: ${epi.codigo}`);
    console.log(`Nome: ${epi.nome}`);
    console.log(`CA: ${epi.ca}`);
    console.log(`Quantidade: ${epi.quantidade}`);
}

export function atualizar(indice, codigo, nome, ca, quantidade) {
    if (buscarEpiPorIndice(indice) === undefined) {
        console.log("EPI não encontrado para atualização.");
        return;
    }

    const epi = new Epi(codigo, nome, ca, quantidade);

    if (substituirEpi(indice, epi)) {
        console.log("EPI atualizado com sucesso!");
    }
}

export function excluir(indice) {
    if (buscarEpiPorIndice(indice) === undefined) {
        console.log("EPI não encontrado para exclusão.");
        return;
    }

    removerEpi(indice);
    console.log("EPI excluído com sucesso!");
}

export function adicionarEstoque(indice, valor) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado.");
        return;
    }

    if (epi.adicionarQuantidade(valor)) {   
        console.log("Quantidade adicionada com sucesso!");
    } else {
        console.log("Valor inválido para adicionar ao estoque.");
    }
}

export function retirarEstoque(indice, valor) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado.");
        return;
    }

    if (epi.retirarQuantidade(valor)) {
        console.log("Quantidade retirada com sucesso!");
    } else {
        console.log("Retirada inválida. Verifique o valor e o estoque disponível.");
    }
}