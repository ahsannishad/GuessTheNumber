let number = Math.floor(Math.random() * 10) + 1;
let usersGuess;
let attampt = 1;
let notify = document.getElementById("notify");
let points = 0;
let gameOver = false;
let userName = prompt("whats your name?");
document.getElementById("userName").innerHTML = userName;


document.getElementById("btn").addEventListener("click", function () {

    usersGuess = document.getElementById("userInput").value;
    checkLogic();
    document.getElementById("points").innerHTML = points;









});


//check logic
function checkLogic() {


    if (usersGuess > number) {
        attampt++;
        alert("The number is lower than you thought");
        setTimeout(function () {
            notify.innerHTML = "";
        }, 4000)




    } else if (usersGuess < number) {
        attampt++;
        alert("The number is higher than you thought");
        setTimeout(function () {
            notify.innerHTML = "";

        }, 4000)




    } else {
        alert("Congratulation you have guessed the number correct in " + attampt + " attampt ");
        checkPoints();
        playAgain();
    }

}

//check points

function checkPoints() {
    if (attampt == 1) {
        points = points + 100;
    } else if (attampt == 2) {
        points = points + 50;
    } else if (attampt == 3) {
        points = points + 25;
    } else {
        points = points + 0;
    }

}

//play again
function playAgain() {
    number = Math.floor(Math.random() * 10) + 1;
    attampt = 1;

}