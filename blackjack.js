let cards = []
let sum = 0;

let balance = 1000;
let bal_el = document.getElementById("balance");

let card_el = document.getElementById("cards");
let sum_el = document.getElementById("sum");


let isAlive = false;
let isBlackJack = false;

let result = document.getElementById("result");
let bet = 50;

function renderGame() {

    sum_el.textContent = "Sum: " + sum;

    if(sum === 21){
        isAlive = false;
        isBlackJack = true;
        balance+=bet*2;
        result.textContent = "You Have Got BlackJack !!!";
    }
    else if(sum < 21){
        result.textContent = "Want to Draw New Card ?";
    }
    else{
        isAlive = false;
        isBlackJack = false;
        result.textContent = "You Lost/ Missed BlackJack !!!";
    }

    bal_el.textContent = "Balance: " + balance + "$";
    card_el.textContent = "Cards: " + cards.join(", ");
}

function newGame() {
    if(isAlive){
        return;
    }
    else{
        if(bet>balance){
            result.textContent = "Game Over! You are out of money.";
            return;
        }
        balance -= bet;
        sum=0;
        cards = [];
        isAlive = true;
        isBlackJack = false;
        cards.push(cardGen(Math.floor(Math.random()*13) + 1));
        cards.push(cardGen(Math.floor(Math.random()*13) + 1));
        sum+=cards[0]+cards[1];
        renderGame();
    }
}

function newCard() {
    if(isBlackJack === false && isAlive===true){
        let card = cardGen(Math.floor(Math.random()*13) + 1);
        cards.push(card);
        sum += card;
        renderGame();
    }
}

function cardGen(num) {
    if(num>10) return 10;
    else if(num === 1) return 11;
    return num;
}