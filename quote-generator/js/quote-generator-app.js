"use Strict"

let quoteChoice = [
    'Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you’re climbing it. - Andy Rooney',
    'Mountains have a way of dealing with overconfidence. - Hermann Buhl',
    'You can’t move mountains by whispering at them. – Pink',
    'Mountains are like the great equalizer. It doesn’t matter who anyone is or what they do. – Jimmy Chin',
    'The hardest mountain to climb is the one within. - J. Lynn',
    'Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddam mountain. - Jack Kerouac',
    'Never measure the height of a mountain until you reach the top. Then you will see how low it was. - Dag Hammerskjold'
]

function pickRandomQuote () {
    let arrayPosition = Math.floor((Math.random() * quoteChoice.length) + 1);
    document.getElementById('quote-output').innerHTML = quoteChoice[arrayPosition];
    console.log(quoteChoice[arrayPosition]);
}