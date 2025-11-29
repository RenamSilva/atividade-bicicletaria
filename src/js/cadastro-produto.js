
function salvarProduto(event) {
    event.preventDefault();

    const produto = {
        descricao: document.getElementById("descricao").value.trim(),
        imagem: document.getElementById("imagem").value.trim(),
        precoVenda: document.getElementById("precoVenda").value,
        precoCusto: document.getElementById("precoCusto").value,
        fabricante: document.getElementById("fabricante").value.trim(),
        categoria: document.getElementById("categoria").value
    };

    if (!produto.descricao || !produto.precoVenda || !produto.precoCusto) {
        exibirMensagem("mensagemProduto", "Preencha pelo menos Descrição, Preço de Venda e Preço de Custo.", true);
        return;
    }

    // Armazena em memória no navegador (futuras etapas usarão isso)
    let lista = [];
    try {
        lista = JSON.parse(localStorage.getItem("produtosBicicletaria") || "[]");
    } catch (e) {
        console.error("Erro ao recuperar lista de produtos", e);
    }

    lista.push(produto);
    localStorage.setItem("produtosBicicletaria", JSON.stringify(lista));

    exibirMensagem("mensagemProduto", "Produto salvo com sucesso!", false);
    limparFormularioProduto(false);
}

function limparFormularioProduto(limparMensagem = true) {
    document.getElementById("descricao").value = "";
    document.getElementById("imagem").value = "";
    document.getElementById("precoVenda").value = "";
    document.getElementById("precoCusto").value = "";
    document.getElementById("fabricante").value = "";
    document.getElementById("categoria").value = "";
    if (limparMensagem) {
        exibirMensagem("mensagemProduto", "", false);
    }
}

function exibirMensagem(idElemento, texto, erro) {
    const el = document.getElementById(idElemento);
    el.textContent = texto;
    el.className = erro ? "mensagem-erro" : "mensagem-sucesso";
}
