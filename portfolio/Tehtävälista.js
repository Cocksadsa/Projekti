var lista = ["Tehtävä1", "Tehtävä2"]
function paivitaLista() {
var ulField = document.querySelector("ul")
var vanhaul = ulField.innerHTML;
ulField.innerHTML = ""
for (var list of lista) {
    let li = document.createElement("li");
    li.innerHTML = list;
    ulField.appendChild(li);
}};
function lisaa() {
let inputField = document.getElementById("lisaa");
let lisaa = inputField.value;
lista.push(lisaa);
paivitaLista();
}