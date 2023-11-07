import throttle from "lodash.throttle";

const FB_FORM = "feedback-form-state";
let email = document.querySelector("[name=email]");
let message = document.querySelector("[name=message]");
const submitAuth = document.querySelector(".feedback-form");
submitAuth.addEventListener("submit", checkAndSend);
email.addEventListener("input", handlerBackUp);
message.addEventListener("input", handlerBackUp);
autoGetItems();

function autoGetItems(){
    const fbFormValue = JSON.parse(localStorage.getItem(FB_FORM));
    email.value = fbFormValue.email ?? " ";
    message.value = fbFormValue.message ?? " ";
}

const throttleBackUp = throttle( function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}, 500);

function handlerBackUp(event) {
    const user = {
      email: email.value,
      message: message.value,
    };

    throttleBackUp(FB_FORM, user);
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
    let user = {
        "email": email.value,
        "message": message.value,
    };
    console.log(user);
    submitAuth.reset();
    localStorage.removeItem("feedback-form-state");
}