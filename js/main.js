const game = document.getElementById('game')


let cardCount = 4;
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

//Создание масива карточек

for(const cardNumber of cardNumberArray){
    let card = document.createElement('div');
    console.log(card);
    card.textContent = cardNumber;
    card.classList.add('card')

    // Клик по каточке
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
            alert('Victory!!!')
        }, 400)
       }
       console.log('firstCard',firstCard);
       console.log('secondCard',secondCard);
    })
    

   game.append(card);
}

console.log(cardNumberArray);