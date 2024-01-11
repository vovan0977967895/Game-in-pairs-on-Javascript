const game = document.getElementById('game')


let cardCount = 4;

const cardNumberArray = [];


//Создание массива чисел
for (let i = 1; i <= cardCount; i++){
    cardNumberArray.push(i, i)
}

//Перемешивание массива чисел

for(let i = 0; i < cardNumberArray.length; i++){
    let ranomIndex = Math.floor(Math.random()*cardNumberArray.length);
    //виконуем Перемешивание массива чисел
    let temp = cardNumberArray[i];
    cardNumberArray[i] = cardNumberArray[ranomIndex];
    cardNumberArray[ranomIndex] = temp;
}

//Создание масива карточек

for(const cardNumber of cardNumberArray){
    let card = document.createElement('div');
    card.textContent = cardNumber;

    game.append(card);
}

console.log(cardNumberArray)