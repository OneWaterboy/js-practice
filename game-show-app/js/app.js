
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
                "fisherman's bend" ];

//variables

let wordChoice = Math.floor(Math.random() * (phrases.length + 1))
let gamePhrase = phrases[wordChoice];