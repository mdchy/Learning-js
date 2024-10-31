let hands = ["rock", "paper", "scissor"]
player1 = getHand()
player2 = getHand()

// Create a function that returns a random item from the array

function getHand() {
    let randomHand = Math.floor(Math.random()*3)
    let hand = hands[randomHand]
    return hand
}

console.log("player 1: " + player1)
console.log("player 2: " + player2)
if(player1 === "rock" && player2 === "scissor") {
    console.log("player 1 wins!!")
} else if(player1 === "paper" && player2 === "rock") {
    console.log("player 1 wins!!")
}
else if(player1 === "scissor" && player2 === "paper"){
    console.log("player 1 wins!!")
} else if(player1 === player2){
    console.log("It's a draw!")
} else{
    console.log("Player 2 wins!!")
}


