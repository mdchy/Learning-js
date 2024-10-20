let firstCard = 20
let secondCard = 2
let isBlackJack = false
let isAlive = true 
let sum = firstCard + secondCard 
let message = ""

function startGame () {
    if (sum < 21) {
        console.log("do you want another card?")
    } else if (sum === 21) {
        message = "You've got blackjack!!"
        isBlaskJack = true
    } else {
        message = "you've lost!"
        isAlive = false 
    }
    console.log(message)
    console.log(isAlive)
}

