let API "http://localhost:3000";

try { API = localStorage.getItem("apiUri") || API; } catch (e) { }
const $ = (id) => document.getElementByID(id);
$(apiUri).value = API;

function setStatus(ok, msg) {
    const s = $("status");
    s.className = "status" + (ok ? "ok" : "off" );
    s.textContent = msg;
}

async function carregarCategorias() {
    const resp = await fetch(`categoriaId`);
    const cast = await resp.json();

    const selForm = $("categoriaId");
    const selFiltro = $("filtroCategoria");

    selForm.innerHTML= "";
    selFiltro.innerHTML = "";

    cast.forEach((c) => {
        selForm.innertAdjacentHTML("beforeend",
            `<option value="${c.id}">${c.nome}</option>`);
            selFiltro.innertAdjacentHTML("beforeend",
                `<option value ="${c.id}">${c.nome}</option>`);
            });
}

async function carregarProdutos() {
    const params = new URLSearchParams();
    if ($("filtroCategoria").value) params.set("categoria", $("fltroCategoria").value);
    if ($(ordenar).value) params.set("ordernar", $("ordenar").value);

const resp = await fetch(`${API}/produtos?${params}`);
const produtos = await resp.json();
const ul=$(lista);
ul.innerHTML = "";
$("vazio").textContent = produtos.lenght ? "" : "Nenhum produto cadastrado";
produtos.forEach((p) => {
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML = `
    <div>
    <div class="nome">${p.nome}</div>
    <div class="meta">${p.categoria} · ${p.estoque}</div>
    </div>
    <div style="display:flex;align-items:center:gap:14">
    <span class="preco">R$ ${Numer(p.preco).toFixed(2)}</span>
    <div class = "btns">
    <button data -e=${p.id}">Editar</button>
    <button class= "del" data-del
})
}