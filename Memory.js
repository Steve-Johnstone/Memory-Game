var cardsTaken = 0
var cardsInPlay = []
var score = 0
var cards = 

[
{suit: "Diamonds",
value: "King",
image: "Images/king-of-diamonds.png",
},
{suit: "Hearts",
value: "King",
image: "Images/king-of-hearts.png",
},
{suit: "Diamonds",
value: "Queen",
image: "Images/queen-of-diamonds.png",
},
{suit: "Hearts",
value: "Queen",
image: "Images/queen-of-hearts.png",
}
]

createBoard = function(){

    var shuffledPack = shuffle(cards)

    for (let i = 0; i < shuffledPack.length; i++) {
        var cardDisplay = document.createElement ('img')
        cardDisplay.setAttribute ('src', 'images/back.png')
        cardDisplay.setAttribute ('id', i)
        cardDisplay.addEventListener ('click', turnCard)
        cardDisplay.classList.add("tile")
        cardDisplay.classList.add("is-child")
        cardDisplay.classList.add("box")
        cardDisplay.classList.add("tile")
        cardDisplay.classList.add("is-2")
        document.getElementById('game-board').appendChild(cardDisplay)
    }
}

turnCard = function (){

    var cardID = this.getAttribute('id');
    cardsInPlay.push (cards[cardID].value)
    this.setAttribute('src', cards[cardID].image)
    cardsTaken += 1
}

setInterval (function cardMatch(){
    if (cardsTaken == 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert ("You have a match!")
            score +=1
            clearGame()
        }
        else{
            alert ("No match, please try again")
            score -=1
            clearGame()
        }
        document.getElementById('score').innerHTML = "Score: " + score;
    }
}, 500)

function clearGame(){

    for (let id = 0; id < cards.length; id++) {
        var cardDisplay = document.getElementById (id)     
        cardDisplay.setAttribute('src', 'images/back.png');
    }
    cardsTaken = 0
    cardsInPlay = []
}

function shuffle(array){
    var currentIndex = array.length, tempValue, randomIndex

    while (currentIndex !==0){
        randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex-=1
        tempValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = tempValue
    }
    return array
}

createBoard()
