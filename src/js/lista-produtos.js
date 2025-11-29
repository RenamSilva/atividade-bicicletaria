
function carregarProdutosLista() {
    const container = document.getElementById("listaProdutos");
    const produtos = carregarLista(STORAGE_KEYS.PRODUTOS);

    if (produtos.length === 0) {
        container.innerHTML = "<p>Nenhum produto cadastrado até o momento.</p>";
        return;
    }

    container.innerHTML = "";

    produtos.forEach((p, index) => {
        const card = document.createElement("div");
        card.className = "produto-card";

        const img = document.createElement("img");
        img.src = p.imagem || "https://via.placeholder.com/300x200?text=Produto";
        img.alt = p.descricao;

        const titulo = document.createElement("h4");
        titulo.textContent = p.descricao;

        const preco = document.createElement("p");
        preco.textContent = "Preço: " + formatarMoeda(p.precoVenda);

        const btn = document.createElement("button");
        btn.className = "btn-primary";
        btn.textContent = "Adicionar ao Carrinho";
        btn.onclick = () => adicionarAoCarrinho(index);

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(preco);
        card.appendChild(btn);

        container.appendChild(card);
    });
}

function adicionarAoCarrinho(indiceProduto) {
    const produtos = carregarLista(STORAGE_KEYS.PRODUTOS);
    const produto = produtos[indiceProduto];
    if (!produto) return;

    const carrinho = carregarLista(STORAGE_KEYS.CARRINHO);
    carrinho.push({
        tipo: "produto",
        descricao: produto.descricao,
        preco: Number(produto.precoVenda || 0)
    });

    salvarLista(STORAGE_KEYS.CARRINHO, carrinho);
    alert("Produto adicionado ao carrinho!");
}
