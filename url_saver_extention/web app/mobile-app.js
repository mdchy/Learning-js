import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js"
const firebaseConfig = {

}
const app = initializeApp(firebaseConfig)
let myLeads = []
let listItems = []
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(data){
    listItems = ""
    for (let i = 0; i < data.length; i++) {
        listItems += 
            `
                <li> 
                    <a target='_blank' href='${data[i]}'> 
                        ${data[i]}
                    </a> 
                </li>
            `
        }
    console.log(listItems)
    ulEl.innerHTML = listItems
}

tabBtn.addEventListener("click", function(){
        chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)      
            }
        )
    }
)

deleteBtn.addEventListener("click", function(){
        localStorage.clear()
        myLeads = []
        ulEl.innerHTML = ""
    }
)

inputBtn.addEventListener("click", function(){
        myLeads.push(inputEl.value) 
        inputEl.value = ""
        console.log(myLeads)
        render(myLeads)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        console.log(localStorage.getItem("myLeads"))
    }
)



