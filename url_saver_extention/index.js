let myLeads = []
let listItems = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const printBtn = document.getElementById("print-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value) 
        inputEl.value = ""
        console.log(myLeads)
    }
)

printBtn.addEventListener("click", function(){
    ulEl.innerHTML = " "
    listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
        }
    console.log(listItems)
    ulEl.innerHTML = listItems 
    }
)
