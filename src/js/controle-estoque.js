
function carregarEstoque(){
    const vendas = carregarLista(STORAGE_KEYS.VENDAS);
    const tbody = document.getElementById("tbodyEstoque");
    tbody.innerHTML = "";

    if(vendas.length===0){
        tbody.innerHTML = "<tr><td colspan='6'>Nenhuma venda registrada.</td></tr>";
        return;
    }

    vendas.forEach(v=>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${new Date(v.data).toLocaleString("pt-BR")}</td>
            <td>${v.item}</td>
            <td>${v.descricao}</td>
            <td>${v.vendedor}</td>
            <td>${v.formaPagamento}</td>
            <td>${formatarMoeda(v.valor)}</td>
        `;
        tbody.appendChild(tr);
    });
}
