const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul')
const startButton = document.getElementsByClassName('btn__reset');
const overlay = document.getElementById('overlay');
const heading = document.getElementById('banner');
let lives = document.getElementsByTagName('img');
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
    question = document.getElementsByTagName('h3')[0];
    question.textContent = '';
    let ul = phrase.firstElementChild;
    ul.innerHTML = '';
    const button = document.getElementsByTagName('button');
        for (let i = 0; i < button.length; i += i) {
            if (button.className === 'chosen') {
                button.classList.remove('chosen');
            }
        }

    missed = 0;
}

// Check if player got the phrase correct
function checkWin() {
    const phraseLetter = document.getElementsByClassName('letter');
    const correctLetter = document.getElementsByClassName('show');
    if (phraseLetter.length === correctLetter.length) {
        overlay.className = 'win';
        overlay.firstElementChild.innerHTML = 'Congratulations! You win!'
        overlay.style.display = 'flex';
        reset();
    } else if (missed > 4) {
        overlay.className = 'lose';
        overlay.firstElementChild.innerHTML = `Sorry, the correct answer was "${phrases[questionNumber][1]}"`
        overlay.style.display = 'flex';
        reset();
    }
}

getRandomPhraseAsQuestion(phrases);
addPhraseToDisplay(phrases);