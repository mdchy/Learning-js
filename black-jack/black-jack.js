let firstCard = 20
let secondCard = 2
let cards = [firstCard, secondCard]
let isBlackJack = false
let isAlive = true 
let sum = firstCard + secondCard 
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame () {
    renderGame()
}

function renderGame () {
    cardsEl.textContent = " "
    for (let i = 0; i < cards.length; i+= 1) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = ("do you want another card?")
    } else if (sum === 21) {
        message = "You've got blackjack!!"
        isBlackJack = true
    } else {
        message = "you've lost!"
        isAlive = false 
    }
    messageEl.textContent = " " + message 
    sumEl.textContent = " " + sum;
}

function newCard () {
    let freshCard = 5
    sum += freshCard
    cards.push(freshCard)
    renderGame()
}

