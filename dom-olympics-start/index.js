const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("subTitle");
subTitle.innerHTML = '<span class="name">Kenson </span>wrote the JavaScript';
document.getElementById("subTitle").appendChild(subTitle);
subTitle.className = "subTitle";


//const messages = document.getElementsByClassName("message");
//const button = document.getElementById("clear-button");
messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent =  "you're welcome";
messages[3].textContent =  "you're great";

function deleteItem() {
    const messages = document.getElementsByClassName("messages")[0];
    messages.parentNode.removeChild(messages);
}



 /* button.addEventListener("click", function(event){
    event.preventDefault()
    button.addEventListener("click", (event) => messages[0].remove())
     button.addEventListener("click", (event) => messages[1].remove())
     button.addEventListener("click", (event) => messages[2].remove())
     button.addEventListener("click", (event) => messages[3].remove()) 

})

/* button.addEventListener("click", function(event){
    event.preventDefault()
    button.addEventListener("click", (event) => messages[0].remove())
    button.addEventListener("click", (event) => messages[1].remove())
    button.addEventListener("click", (event) => messages[2].remove())
    button.addEventListener("click", (event) => messages[3].remove())

}) */