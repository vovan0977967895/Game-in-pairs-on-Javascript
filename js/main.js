const game = document.getElementById('game');



function startGame(game, cardCount){
const cardNumberArray = [];
let firstCard = null;
let secondCard = null;


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
//Настройка сетки
let colums = 2;
if(cardCount === 3 || cardCount === 6 || cardCount === 9){
    colums =3;
}
if(cardCount === 4 || cardCount === 8 || cardCount === 12){
    colums =4;
}
if( cardCount === 10 || cardCount === 15){
    colums = 5;
}
game.style = `grid-template-columns: repeat(${colums}, 1fr);`

//Создание масива карточек

for(const cardNumber of cardNumberArray){
    let card = document.createElement('div');
    console.log(card);
    card.textContent = cardNumber;
    card.classList.add('card')

    // Клик по карточке
    card.addEventListener('click', function(){
        if(card.classList.contains('open') || card.classList.contains('success')){
            return
        };


        if(firstCard !== null && secondCard !== null){
            firstCard.classList.remove('open');
            secondCard.classList.remove('open');
            firstCard = null;
            secondCard = null;
        }
       card.classList.add('open') 
       console.log('Карточка по которой произошел клик', card);

       if(firstCard === null){
        firstCard = card;
       }else{
        secondCard = card;
       }
       if(firstCard !== null && secondCard !== null){
        let firstCardNumber = firstCard.textContent;
        let secondCardNumber = secondCard.textContent;
        if(firstCardNumber === secondCardNumber){
            firstCard.classList.add('success');
            secondCard.classList.add('success');
            console.log('Обе карточки совпали');
        }
        console.log('Обе карточки відкриті');

       }
       if(cardNumberArray.length === document.querySelectorAll('.success').length){
        setTimeout(function() {
            game.innerHTML = "";
            alert('Victory!!!')
            let cardCount = Number(prompt('Новая игра! Введите кол-во пар от 4 до 10.', 6));
            startGame(game, cardCount);
        }, 400)
       }
       console.log('firstCard',firstCard);
       console.log('secondCard',secondCard);
    })
    

   game.append(card);
}
}
let cardCount = Number(prompt('Новая игра! Введите кол-во пар от 4 до 10.', 6));
startGame(game, cardCount);

