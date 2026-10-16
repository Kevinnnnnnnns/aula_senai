import {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir,
    adicionarEstoque,
    retirarEstoque
} from "./controller/epiController.js";

import {
    cadastrarFuncionario,
    listarFuncionarios,
    buscarFuncionario,
    atualizarFuncionario,
    excluirFuncionario,
    ativarFuncionario,
    desativarFuncionario
} from "./controller/funcionarioController.js";

console.log("===== SAFESTOCK =====");

cadastrar(1, "Capacete de segurança", "12345", 20);
cadastrar(2, "Luva de proteção", "23456", 50);
cadastrar(3, "Óculos de proteção", "34567", 30);

listar();

buscar(0);

adicionarEstoque(0, 10);

retirarEstoque(1, 5);

retirarEstoque(2, 100);

atualizar(1, 2, "Luva de proteção reforçada", "23456", 45);

excluir(2);

listar();

console.log("\n===== TESTES FUNCIONÁRIOS =====");

cadastrarFuncionario(101, "Carlos Silva", "Produção", "Operador de Máquinas");
cadastrarFuncionario(102, "Mariana Souza", "Logística", "Assistente de Almoxarifado");
cadastrarFuncionario(103, "Roberto Gomes", "Segurança", "Técnico de Segurança");

listarFuncionarios();

buscarFuncionario(1);

desativarFuncionario(1);

buscarFuncionario(1);

ativarFuncionario(1);

atualizarFuncionario(1, 102, "Mariana Souza Santos", "Logística", "Supervisora de Almoxarifado");

excluirFuncionario(2);

listarFuncionarios();