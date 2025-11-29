
let carrinhoAtual = [];

function carregarCarrinho() {
    carrinhoAtual = carregarLista(STORAGE_KEYS.CARRINHO);
    const tbody = document.getElementById("tbodyCarrinho");
    const totalEl = document.getElementById("totalCarrinho");

    tbody.innerHTML = "";
    let total = 0;

    if (carrinhoAtual.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3'>Nenhum item no carrinho.</td></tr>";
        totalEl.textContent = formatarMoeda(0);
        return;
    }

    carrinhoAtual.forEach((item, index) => {
        total += Number(item.preco || 0);

        const tr = document.createElement("tr");

        const tdDesc = document.createElement("td");
        tdDesc.textContent = item.descricao;

        const tdPreco = document.createElement("td");
        tdPreco.textContent = formatarMoeda(item.preco);

        const tdAcoes = document.createElement("td");
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.className = "btn-secondary";
        btnRemover.onclick = () => removerItem(index);
        tdAcoes.appendChild(btnRemover);

        tr.appendChild(tdDesc);
        tr.appendChild(tdPreco);
        tr.appendChild(tdAcoes);

        tbody.appendChild(tr);
    });

    totalEl.textContent = formatarMoeda(total);
}

function removerItem(indice) {
    carrinhoAtual.splice(indice, 1);
    salvarLista(STORAGE_KEYS.CARRINHO, carrinhoAtual);
    carregarCarrinho();
}

function finalizarCompra(event) {
    event.preventDefault();
    if (carrinhoAtual.length === 0) {
        alert("Carrinho vazio. Adicione itens antes de finalizar.");
        return;
    }

    const formaPagamento = document.getElementById("formaPagamento").value;
    const vendedor = document.getElementById("vendedor").value.trim() || "Funcionário não informado";

    const vendas = carregarLista(STORAGE_KEYS.VENDAS);
    const dataVenda = obterDataAtualISO();

    carrinhoAtual.forEach(item => {
        vendas.push({
            data: dataVenda,
            item: "Produto",
            descricao: item.descricao,
            vendedor: vendedor,
            formaPagamento: formaPagamento,
            valor: Number(item.preco || 0)
        });
    });

    salvarLista(STORAGE_KEYS.VENDAS, vendas);

    carrinhoAtual = [];
    salvarLista(STORAGE_KEYS.CARRINHO, carrinhoAtual);
    carregarCarrinho();

    alert("Venda finalizada com sucesso!");
}
