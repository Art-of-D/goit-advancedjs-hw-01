let email = document.querySelector("[name=email]");
let message = document.querySelector("[name=message]");
const submitAuth = document.querySelector(".feedback-form");
submitAuth.addEventListener("submit", checkAndSend);
email.addEventListener("input", handlerBackUp);
message.addEventListener("input", handlerBackUp);
autoGetItems();

function autoGetItems(){
    email.value = localStorage.getItem("email") ?? " ";
    message.value = localStorage.getItem("message") ?? " ";
}

function handlerBackUp(event){
    if (event.target.name === "email"){
        backUp("email", email.value);
    } else {
        backUp("message", message.value);
    }
}
function backUp(key, value){
    localStorage.setItem(key, value);
}

function checkAndSend(event){
    event.preventDefault();
    if (email.value.trim() === ""){
        alert("You need to enter email!");
    } else if (message.value.trim() === ""){
        alert("You need to enter message!");
    } else {
        sender();
    }
}

function sender(){
    let user = {};
    user.email = email.value;
    user.message = message.value;
    console.log(user);
    submitAuth.reset();
    removeItems(["email", "message"]);
}

function removeItems(arr){
    for (key in arr){
        localStorage.removeItem(key);
    }
}