
function carregarOS(){
    const lista = load(STORAGE_KEYS.OS);
    const tbody=document.getElementById("tbodyOS");
    tbody.innerHTML="";
    if(lista.length===0){
        tbody.innerHTML="<tr><td colspan='5'>Nenhuma OS registrada.</td></tr>";
        return;
    }
    lista.forEach(o=>{
        const tr=document.createElement("tr");
        tr.innerHTML=`<td>${o.data}</td><td>${o.servico}</td><td>${o.descricao}</td><td>${o.vendedor}</td><td>${o.status}</td>`;
        tbody.appendChild(tr);
    });
}

function registrarOS(event){
    event.preventDefault();
    const servico=document.getElementById("servico").value;
    const desc=document.getElementById("descricao").value;
    const vendedor=document.getElementById("vendedor").value;
    const preco=document.getElementById("preco").value;

    if(!servico||!preco){alert("Serviço e valor são obrigatórios.");return;}

    const lista=load(STORAGE_KEYS.OS);
    lista.push({
        data:new Date().toLocaleString("pt-BR"),
        servico,descricao:desc,vendedor,status:"Aberta",preco
    });
    save(STORAGE_KEYS.OS,lista);
    alert("OS registrada!");
    carregarOS();
}
