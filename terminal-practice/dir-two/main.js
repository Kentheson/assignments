const h1 = document.createElement("h1");

h1.textContent = "JavaScript made this!"

document.getElementById("header").appendChild(h1);

h1.className = "header";

subTitle.innerHTML = '<span class="name">Eric</span> wrote the JavaScript';

const messages = document.getElementsByClassName("message");

element.classList.toggle("theme-two");

for(let i = 0; < messages.length; i++) {
    messages[i].classList.toggle("theme-two");
}
