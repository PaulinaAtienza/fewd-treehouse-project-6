// Variables in order of appearance
const overlay = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset');
const heading = document.getElementById('banner');
const phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul');
const qwerty = document.getElementById('qwerty');
let lives = document.getElementsByTagName('img');

// Player's life counter
let missed = 0;

// Phrases for the game
const phrases = [
    ['Google Chrome, Safari and Firefox are types of what?', 'Web browsers'],
    ['What phrase describes best practice when coding?', 'Keep your code DRY'],
    ['What programming language allows you to add interactivity to a web page?', 'JavaScript'],
    ['HTML stands for?', 'HyperText Markup Language'],
    ['Where is the best place to learn front-end web development?', 'Treehouse']
]

// Random number generator to store as parameter for both question and answer
function getRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
}

getRandomNumber(phrases);
const randomNumber = getRandomNumber(phrases);

// Start game button listener
overlay.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        overlay.style.display = 'none';
    }
});

// Choose random array and display question for phrase
function getRandomPhraseAsQuestion(arr, questionNumber) {
    const question = arr[questionNumber][0];
    const questionHeading = document.createElement('h3');
    questionHeading.textContent = question;
    heading.append(questionHeading);
}

// Choose random array and split phrase into array of letters
function getRandomPhraseAsArray(arr, questionNumber) {
    const splitPhrase = arr[questionNumber][1].split('');
    return splitPhrase;
}

getRandomPhraseAsQuestion(phrases, randomNumber);
getRandomPhraseAsArray(phrases, randomNumber);

// Display the random phrase
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let character = arr[i];
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

const phraseArray = getRandomPhraseAsArray(phrases, randomNumber);
addPhraseToDisplay(phraseArray);

// Check letters to random phrase chosen
function checkLetter(button) {
    let list = document.getElementsByClassName('letter');
    let match = null;
    for (let i = 0; i < list.length; i += 1) {
        let letter = list[i];
        let letterCheck = letter.textContent.toLowerCase();
        if (letterCheck === button) {
            letter.classList.add('show');
            match = true;
        }
    }
    return match;
}

// Keyboard button listener
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        button.classList.add('chosen');
        if (button.className === 'chosen') {
            button.disabled = 'true';
        }
        let letterFound = checkLetter(button.textContent);
        if (letterFound === null) {
            missed += 1;
            lives[missed - 1].setAttribute('src', 'images/lostHeart.png');
        }
    }
    checkWin();
});

// Add reset button to success and failure screens
// Remove question, phrase, chosen buttons, and lost hearts from screen
function reset() {
    overlay.children[1].text = 'Play Again?'
    const question = document.getElementsByTagName('h3')[0];
    question.parentNode.removeChild(question);
    let ul = phrase.querySelector('ul');
    ul.innerHTML = '';
    const keyboard = document.getElementsByTagName('button');
    for (let i = 0; i < keyboard.length; i += 1) {
        let key = keyboard[i];
        if (key.className === 'chosen') {
            key.classList.remove('chosen');
            key.removeAttribute('class');
            key.removeAttribute('disabled');
        }
    }
    const lostLives = document.getElementsByTagName('img');
    for (let i = 0; i < lostLives.length; i += 1) {
        let heart = lostLives[i];
        if (heart.hasAttribute('src', 'images/lostHeart.png')) {
            heart.setAttribute('src', 'images/liveHeart.png');
        }
    }
    missed = 0;
    getRandomNumber(phrases);
    const randomNumber = getRandomNumber(phrases);
    getRandomPhraseAsQuestion(phrases, randomNumber);
    getRandomPhraseAsArray(phrases, randomNumber);
    const phraseArray = getRandomPhraseAsArray(phrases, randomNumber);
    addPhraseToDisplay(phraseArray);
}

// Check if player got the phrase correct
function checkWin() {
    const phraseLetter = document.getElementsByClassName('letter');
    const correctLetter = document.getElementsByClassName('show');
    if (phraseLetter.length === correctLetter.length) {
        overlay.className = 'win';
        overlay.firstElementChild.innerHTML = 'Congratulations, you win!'
        overlay.style.display = 'flex';
        reset();
    } else if (missed > 4) {
        overlay.className = 'lose';
        overlay.firstElementChild.innerHTML = 'Sorry, that is incorrect.'
        overlay.style.display = 'flex';
        reset();
    }
}