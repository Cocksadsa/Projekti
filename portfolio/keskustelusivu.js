console.log("keskustelusivu avattu");
document.getElementById("avaaDialogi").addEventListener("click", function() {
    document.getElementById("dialogini").showModal();
    });
function send(event) {
event.preventDefault();
let birthdayField = document.getElementById("birthday");
let emailField = document.getElementById("email");
let typeField = document.getElementById("type")
let usageField = document.getElementById("usage");
let bodyField = document.getElementById("body")
let birthday = birthdayField.value;
let email = emailField.value;
let type = typeField.value;
let usage = usageField.value;
let body = bodyField.value;
console.log(birthday, email, type, usage, body)
document.getElementById("dialogini").close();
} 
