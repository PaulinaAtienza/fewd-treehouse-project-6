const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul')
const startButton = document.getElementsByClassName('btn__reset');
const overlay = document.getElementById('overlay');
const heading = document.getElementById('banner');
let missed = 0;

const phrases = [
    ['Google Chrome, Safari and Firefox are types of what?', 'Web browsers'],
    ['What phrase describes best practice when coding?', 'Keep your code DRY'],
    ['What programming language allows you to add interactivity to a web page?', 'JavaScript'],
    ['HTML stands for?', 'HyperText Markup Language'],
    ['Where is the best place to learn front-end web development?', 'Treehouse']
]

const questionNumber = Math.floor(Math.random() * phrases.length);

// Start game button listener
overlay.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        overlay.style.display = 'none';
    }
});

// Choose random array and display question
function getRandomPhraseAsQuestion(arr) {
    const question = arr[questionNumber][0];
    const questionHeading = document.createElement('h3');
    questionHeading.textContent = question;
    heading.append(questionHeading);
}

// Choose random array and split into array of letters
function getRandomPhraseAsArray(arr) {
    const splitPhrase = arr[questionNumber][1].split('');
    return splitPhrase;
}

// Display the random phrase
function addPhraseToDisplay(arr) {
    const phrasesArray = getRandomPhraseAsArray(arr);
    for (let i = 0; i < phrasesArray.length; i += 1) {
        let character = phrasesArray[i];
        const li = document.createElement('li');
        li.textContent = character;
        ul.append(li);
        if (character !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

// Check letters to random phrase chosen
function checkLetter(button) {
    let currentCharacters = document.querySelector('.letter');
    let match = null;
}

// Keyboard button listener

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {

    }
});

// Check if player got the phrase correct
function checkWin() {

}

getRandomPhraseAsQuestion(phrases);
addPhraseToDisplay(phrases);