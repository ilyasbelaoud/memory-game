const cardsCollection = [
    { name: 'kanae', art: 'kanae.png' },
    { name: 'kyojuro', art: 'kyojuro.png' },
    { name: 'nezuko', art: 'nezuko.png' },
    { name: 'tanjiro', art: 'tanjiro.png' },
    { name: 'tengen', art: 'tengen.png' },
    { name: 'zenitsu', art: 'zenitsu.png' },
    { name: 'inosuke', art: 'inosuke.png' },
    { name: 'muzan', art: 'muzan.png' },
    { name: 'kanae', art: 'kanae.png' },
    { name: 'kyojuro', art: 'kyojuro.png' },
    { name: 'nezuko', art: 'nezuko.png' },
    { name: 'tanjiro', art: 'tanjiro.png' },
    { name: 'tengen', art: 'tengen.png' },
    { name: 'zenitsu', art: 'zenitsu.png' },
    { name: 'inosuke', art: 'inosuke.png' },
    { name: 'muzan', art: 'muzan.png' }
];

const cardsContainer = document.querySelector('.cards-container');

shuffle(cardsCollection).forEach(card => generateCard(card));

// Generate Card Element + Add it to Dom
function generateCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'flipped');
    cardElement.setAttribute('data-name', card.name);

    const front = document.createElement('div');
    front.classList.add('front');
    cardElement.appendChild(front);

    const back = document.createElement('div');
    back.classList.add('back');
    const img = document.createElement('img');
    img.src = `img/${card.art}`;
    back.appendChild(img);
    cardElement.appendChild(back);

    cardsContainer.appendChild(cardElement);
}

// Shuffle Array - Fisher Yates Algorithm
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
