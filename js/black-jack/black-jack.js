let cards = []
let sum = 0
let isBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "chips",
    credit: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + player.credit

function getRandomNumber() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame () {
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    sum = firstCard + secondCard 
    isAlive = true 
    isBlackJack = false
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame () {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i+= 1) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
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
}

function newCard () {
    if (isAlive === true && isBlackJack === false) {
        let freshCard = getRandomNumber()
    sum += freshCard
    cards.push(freshCard)
    renderGame()
    }
}

