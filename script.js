const images = document.querySelector(".dice");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const p1Section = document.querySelector(".player--0");
const p2Section = document.querySelector(".player--1");

const player1 = document.querySelector("#score--0");
const player2 = document.querySelector("#score--1");

const p1Current = document.querySelector("#current--0");
const p2Current = document.querySelector("#current--1");

let p1TotalScore = 0;
let p2TotalScore = 0;

let p1CurrentScore = 0;
let p2CurrentScore = 0;

let currentPlayer = 1;

images.classList.add("hidden");

const switcharo = function(){

    if (currentPlayer == 1) {
        p1CurrentScore = 0;
        p1Current.textContent = p1CurrentScore;
        currentPlayer = 2;
        
        p1Section.classList.remove("player--active");
        p2Section.classList.add("player--active");
    } 
    
    else if (currentPlayer == 2) {
        p2CurrentScore = 0;
        p2Current.textContent = p2CurrentScore;
        currentPlayer = 1;

        p2Section.classList.remove("player--active");
        p1Section.classList.add("player--active");
    }
}

btnRoll.addEventListener("click", function(){
    
    images.classList.remove("hidden");

    let randomNumber = Math.trunc(Math.random() * 6 + 1);

    if(p1TotalScore < 100 && p2TotalScore < 100) { 

        images.src = `dice-${randomNumber}.png`;

        if(randomNumber == 1) {
            switcharo();
        } 
        else {

            if(currentPlayer == 1) {
                p1CurrentScore += randomNumber;
                p1Current.textContent = p1CurrentScore;
            } 

            if(currentPlayer == 2) {
                p2CurrentScore += randomNumber;
                p2Current.textContent = p2CurrentScore;
            }
        }
    }

});

btnHold.addEventListener("click", function(){

    if(p1TotalScore < 100 && p2TotalScore < 100) { 

        if(currentPlayer == 1) {
            p1TotalScore += p1CurrentScore;
            player1.textContent = p1TotalScore;

            if(p1TotalScore >= 100) {
                p1Section.classList.add("player--winner");
            } else {
                switcharo();
            }
        } 
        
        else if (currentPlayer == 2) {
            p2TotalScore += p2CurrentScore;
            player2.textContent = p2TotalScore;

            if(p2TotalScore >= 100) {
                p2Section.classList.add("player--winner");
            } else {
                switcharo();
            }
        }
    }
})

btnNew.addEventListener("click", function(){

    images.classList.add("hidden");
    
    p1TotalScore = 0;
    p2TotalScore = 0;

    p1CurrentScore = 0;
    p2CurrentScore = 0;

    currentPlayer = 1;

    p1Current.textContent = "0";
    p2Current.textContent = "0";

    player1.textContent = "0";
    player2.textContent = "0";

    p2Section.classList.remove("player--active");
    p1Section.classList.add("player--active");

    p1Section.classList.remove("player--winner");
    p2Section.classList.remove("player--winner");
})






