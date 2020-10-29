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

overlay.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        overlay.style.display = 'none';
    }
});

