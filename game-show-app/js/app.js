
//Hide Overlay When Start Button is clicked

function startGame () = {
    var begin = document.getElementById('startOverlay');
    if (begin.style.display == "flex"){
        begin.style.display = 'none'
    }
    else {
        begin.style.display = 'flex'
    }
}

//phrases array

const phrases = [mountaineering, 
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
                "sleeping bag" ];

//Get Phrase Function

function getRandomPhraseAsArray(arr){
                                           //get random phrase from array [math.random is best option]
                                            //split array into individual letters
                                            //return new array containing only characters.
}

//Add phrase to screen

function addPhraseToDisplay(arr){
                                            //loop through the array (ie use a for loop on getRandomPhrase
                                            //For each character in phrases, creat list item
                                            //place each item into the #phrase ul. If the item is a letter, append the class "letter" to it
}


//Check if the letter is inside of the phrase

function checkLetter(){                     //function needs one parameter equal to the button clicked when player selects a letter
                                            //function will select everything with a class of "letter"
                                            //function should loop over all letters and check to see if selected letter is present
                                            //if match, add class of "show" and then.
                                            //if no match function should return null
}