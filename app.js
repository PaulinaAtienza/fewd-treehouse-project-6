const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

const phrasesArray = [
    'I love JavaScript',
    'Keep your code DRY',
    '',
    '',
    ''
]

// Start game button listener
overlay.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        overlay.style.display = 'none';
    }
});

// Choose random array and split into array of letters
function getRandomPhraseAsArray(arr) {

}

// Display the random phrase
function addPhraseToDisplay(arr) {

}

// Check letters to random phrase chosen
function checkLetter(button) {

}

// Check if player got the phrase correct
function checkWin() {

}
