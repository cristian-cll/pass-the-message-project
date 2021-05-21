const form = document.querySelector('#message-form');

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const message = document.querySelector("#message");
    
    updateMessage(message.value, "update");
    !message.value? displayError() : hideError();
 
    setTimeout(()=> {
        updateMessage(message.value);
        hideError();
    }, 2000);

    message.value = ""; 
})


function updateMessage(msg, type){
    const lastMessage = document.querySelector(".message-content");
    type === "update"? lastMessage.textContent = msg : "";
}

function displayError(){
    document.querySelector('.feedback').style.display = "block";
}

function hideError(){
    document.querySelector('.feedback').style.display = "none";
}