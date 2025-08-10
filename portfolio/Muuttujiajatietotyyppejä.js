console.log("Muuttujia ja tietotyyppejä avattu!")
let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;

function laskin_summa() {
    let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;
    alert(a + b);
}
function laskin_vähennys() {
    let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;
    alert(a - b);
}
function laskin_kerto() {
    let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;
    alert(a * b);
}
function laskin_jako() {
    let a = parseFloat(document.getElementById("1").value) || 0;
let b = parseFloat(document.getElementById("2").value) || 0;
    alert(a / b);
}
