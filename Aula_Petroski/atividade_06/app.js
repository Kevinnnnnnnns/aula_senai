
import {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir,
    adicionarEstoque,
    retirarEstoque
} from "./controller/epiController.js";

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