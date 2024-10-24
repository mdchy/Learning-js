let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const printBtn = document.getElementById("print-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value) 
        console.log(myLeads)
    }
)

printBtn.addEventListener("click", function(){
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    }
}
)
