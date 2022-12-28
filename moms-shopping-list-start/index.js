const form = document["addItem"]
const button = document.getElementById("myButton")
const list = document.getElementById("list")
const input = document.getElementById("title")

button.addEventListener("click", function(event){
    event.preventDefault()
    console.log(input.value)
    const li = document.createElement("li")
    const div = document.createElement("div")
    div.textContent = form.title.value
    li.append(div)
    list.append(li)
    form.title.value = " "
    const deleteBtn = document.createElement("deleteBtn")
    deleteBtn.innerText = "X"
    li.append(deleteBtn)
    deleteBtn.addEventListener("click", (event) => li.remove())
})






/*const form = document.formWindow
//grabbing button
const addItem = getElementById("addItem")
form.addEventListener("submit", function(event){
    event.preventDefault()
    const name = form.formText.value
    form.formText.value = " "

    const li = document.createElement("li")
    li.textContent = name
    document.getElementsByTagName("ul")[0].append(li)

    
*/


