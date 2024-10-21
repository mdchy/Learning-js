let firstCard = 20
let secondCard = 2
let cards = [firstCard, secondCard]
let isBlackJack = false
let isAlive = true 
let sum = firstCard + secondCard 
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame () {
    renderGame()
}

function renderGame () {

    for (let i = 0; i <= cards.length; i++) {
        cardsEl.textContent = cards[i] + " "
    }

    if (sum < 21) {
        message = ("do you want another card?")
    } else if (sum === 21) {
        message = "You've got blackjack!!"
        isBlaskJack = true
    } else {
        message = "you've lost!"
        isAlive = false 
    }
    messageEl.textContent = " " + message 
    sumEl.textContent = " " + sum;
}

function newCard () {
    let freshCard = 5
    cards.push(freshCard)
    renderGame()
}

