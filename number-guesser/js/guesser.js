
let generatedNumber;
let userGuesses = [];
let attempts = 0;
let maxAttempts;

let low = 1;
let high = 100;

function updateRange () {
    const rangeOutput = document.getElementById('rangeOutput');
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + '%';
    rangeOutput.style.marginRight = 100 - high + '%';
    rangeOutput.classList.add('flash');

   const lowValue = document.getElementById('low');
   lowValue.style.flex = low + '%';
   lowValue.style.background = '#6a0dad';

   const space = document.getElementById('space');
   space.style.flex = high - low + '%';
   space.style.background = '#f5ec42';

   const highValue = document.getElementById('high');
   highValue.style.flex = 100 - high + '%';
   highValue.style.background = '#6a0dad';
}

function gameEnded () {
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute('readonly' , 'readonly');
}

function newGame() {
    window.location.reload();
}

function init() {
    generatedNumber = Math.floor(Math.random() * 100 + 1);
    console.log(generatedNumber);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none"
}

function startGameView () {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function easyMode () {
    maxAttempts = 20;
    startGameView ()
}

function mediumMode () {
    maxAttempts = 10;
    startGameView ()
}

function hardMode () {
    maxAttempts = 3;
    startGameView ()
}

function compareGuess () {
    const userGuess = Number(document.getElementById("inputBox").value);
    userGuesses.push(' ' + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;

    attempts++
    document.getElementById('attempts').innerHTML = attempts;
    if(attempts < maxAttempts){
        if (userGuess > generatedNumber){
            if(userGuess < high) high = userGuess;
            document.getElementById("textOutput").innerHTML = "Your Guess Is Too High!";
            document.getElementById("inputBox").value = " ";
        }else if (userGuess < generatedNumber){
            if(userGuess > low) low = userGuess;
            document.getElementById("textOutput").innerHTML = "Your Guess Is Too Low!";
            document.getElementById("inputBox").value = " ";
        }else {
            document.getElementById("textOutput").innerHTML = "Correct! You Got It In " + attempts + " attempts";
            gameEnded ();
        }

    }else {
        if (userGuess > generatedNumber){
            document.getElementById("textOutput").innerHTML = "YOU LOSE!, <br> The Correct Answer Was " + generatedNumber;
            gameEnded ();
        }else if (userGuess < generatedNumber){
            document.getElementById("textOutput").innerHTML = "YOU LOSE!, <br> The Correct Answer Was " + generatedNumber;
            gameEnded ();
        }else {
            document.getElementById("textOutput").innerHTML = "Correct! You Got It In " + attempts + " attempts";
            gameEnded ();
        }
    }
    updateRange ();
}