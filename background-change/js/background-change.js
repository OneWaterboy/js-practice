"use strict"

let colorValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function pickColor() {
    let hexValue = '#';
    for (let i=0; i < 6; i++){
        hexValue += colorValues[Math.floor(Math.random()* colorValues.length)]
    }
    document.body.style.backgroundColor = hexValue;
    document.getElementById('current-color').innerHTML = hexValue;
}

