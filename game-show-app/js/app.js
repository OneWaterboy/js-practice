
//Hide Overlay When Start Button is clicked

function startGame () {
    document.getElementById('startOverlay').style.display = 'none';
}

//phrases array - need to pick a random phrase from this array

const phrases = ["mountaineering", 
                "squirrel", 
                "glacier", 
                "summit", 
                "mountain", 
                "trailhead", 
                "tarn", 
                "abseil", 
                "harness",
                "rappel", 
                "scramble",
                "ice axe",
                "mountain goat",
                "himalaya",
                "bivy sack",
                "sleeping bag",
                "tent site",
                "abseil",
                "snow couloir",
                "fishermans bend" ];

//variables

let wordChoice = Math.floor(Math.random() * (phrases.length + 1))
let gamePhrase = phrases[wordChoice];
let gameArray = Array.from(gamePhrase);

console.log(gameArray);

// Add <li> elements to <ul> for each letter in the phrase

function wordOutlay (arr) {
    arr.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;

        if (element === " "){
            li.className = "space";
        } else {
            li.className = "letter";
        }
        ul.appendChild(li);
    });
}

wordOutlay(gameArray);