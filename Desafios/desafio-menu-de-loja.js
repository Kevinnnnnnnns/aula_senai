// ============================================================
// Loja de Itens – Menu Persistente
// ============================================================
//
// INSTRUÇÕES e REGRAS:
// Uma loja vende itens de um catálogo.
// O menu principal repete até o usuário escolher "Sair".
// O usuário começa com nenhum item e 200 reais.
// O usuário deve poder:
//   Visualizar o catálogo
//   Comprar itens do catálogo
//   Vender itens do inventário
//   Visualizar seus itens
// O valor de revenda de itens deve ser 70% do preço original, arredondado.
// Após o usuário escolher "Sair", exiba um resumo do cliente: nome, dinheiro restante e itens no inventário.
//
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CATÁLOGO DA LOJA - Altere a vontade, mantendo a estrutura { id, nome, preco, estoque }
// ============================================================

const catalogo = [
    { id: 1, nome: "Espada de Ferro", preco: 80, estoque: 2 },
    { id: 2, nome: "Escudo de Madeira", preco: 50, estoque: 5 },
    { id: 3, nome: "Poção de Cura", preco: 30, estoque: 10 },
    { id: 4, nome: "Arco Longo", preco: 65, estoque: 3 },
    { id: 5, nome: "Botas Velozes", preco: 45, estoque: 4 },
    { id: 6, nome: "Batata", preco: 15, estoque: 20 },
    { id: 7, nome: "Cajado Mágico", preco: 95, estoque: 1 },
    { id: 8, nome: "Armadura de Couro", preco: 85, estoque: 2 }
];

// ============================================================
// ESTADO DO CLIENTE - não altere a estrutura
// ============================================================

const Cliente = {
    nome: "", // deve ser preenchido pelo usuário
    moedas: 200,
    inventario: []
};

// ============================================================
// INÍCIO
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║        LOJA LOJINHA        ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui:

Cliente.nome = lerTeclado.question("Qual o seu nome, aventureiro? ");

let opcao;
do {
    console.log("\n==============================");
    console.log(`Moedas: ${Cliente.moedas} | Inventário: ${Cliente.inventario.length} item(s)`);
    console.log("1 - Visualizar o catálogo");
    console.log("2 - Comprar itens");
    console.log("3 - Vender itens");
    console.log("4 - Visualizar seu inventário");
    console.log("0 - Sair");
    opcao = lerTeclado.questionInt("Escolha uma opção: ");

    switch (opcao) {
        case 1:
            console.log("\n--- CATÁLOGO ---");
            console.table(catalogo);
            break;
        case 2:
            console.log("\n--- COMPRAR ITEM ---");
            console.table(catalogo);
            let idCompra = lerTeclado.questionInt("Digite o ID do item que deseja comprar (0 para cancelar): ");
            if (idCompra === 0) break;
            
            let itemCompra = catalogo.find(i => i.id === idCompra);
            if (!itemCompra) {
                console.log("Item não encontrado!");
            } else if (itemCompra.estoque <= 0) {
                console.log("Item esgotado!");
            } else if (Cliente.moedas < itemCompra.preco) {
                console.log("Moedas insuficientes!");
            } else {
                Cliente.moedas -= itemCompra.preco;
                itemCompra.estoque--;
                Cliente.inventario.push({ id: itemCompra.id, nome: itemCompra.nome, preco: itemCompra.preco });
                console.log(`Você comprou ${itemCompra.nome}!`);
            }
            break;
        case 3:
            console.log("\n--- VENDER ITEM ---");
            if (Cliente.inventario.length === 0) {
                console.log("Seu inventário está vazio.");
                break;
            }
            
            Cliente.inventario.forEach((item, index) => {
                let valorRevenda = Math.round(item.preco * 0.7);
                console.log(`${index + 1} - ${item.nome} (Revenda: ${valorRevenda} moedas)`);
            });
            
            let indexVenda = lerTeclado.questionInt("Digite o número do item que deseja vender (0 para cancelar): ");
            if (indexVenda === 0) break;
            
            if (indexVenda > 0 && indexVenda <= Cliente.inventario.length) {
                let itemVendido = Cliente.inventario.splice(indexVenda - 1, 1)[0];
                let valorRevenda = Math.round(itemVendido.preco * 0.7);
                Cliente.moedas += valorRevenda;
                
                let itemNoCatalogo = catalogo.find(i => i.id === itemVendido.id);
                if (itemNoCatalogo) {
                    itemNoCatalogo.estoque++;
                }
                
                console.log(`Você vendeu ${itemVendido.nome} por ${valorRevenda} moedas.`);
            } else {
                console.log("Opção inválida.");
            }
            break;
        case 4:
            console.log("\n--- SEU INVENTÁRIO ---");
            if (Cliente.inventario.length === 0) {
                console.log("Vazio.");
            } else {
                console.table(Cliente.inventario);
            }
            break;
        case 0:
            console.log("\nSaindo da loja...");
            break;
        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);

console.log("\n=== RESUMO DO CLIENTE ===");
console.log(`Nome: ${Cliente.nome}`);
console.log(`Moedas restantes: ${Cliente.moedas}`);
console.log("Itens no inventário:");
if (Cliente.inventario.length > 0) {
    console.table(Cliente.inventario);
} else {
    console.log("Nenhum item.");
}