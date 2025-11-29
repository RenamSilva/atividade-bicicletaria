
const STORAGE_KEYS = {
    PRODUTOS: "produtosBicicletaria",
    CARRINHO: "carrinhoBicicletaria",
    VENDAS: "vendasBicicletaria"
};

function carregarLista(chave) {
    try {
        return JSON.parse(localStorage.getItem(chave) || "[]");
    } catch (e) {
        console.error("Erro ao carregar lista do localStorage", e);
        return [];
    }
}

function salvarLista(chave, lista) {
    localStorage.setItem(chave, JSON.stringify(lista));
}

function formatarMoeda(valor) {
    const numero = Number(valor || 0);
    return numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function obterDataAtualISO() {
    return new Date().toISOString();
}
