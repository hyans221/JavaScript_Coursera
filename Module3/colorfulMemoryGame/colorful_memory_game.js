// Array of colors, duplicated to create pairs for matching
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

// Shuffling the array to mix the colors randomly
let cards = shuffle(colors.concat(colors));

// Initializing variables for score, timer, selected cards, and game interval
let score = 0;
let timeLeft = 30;
let selectedCards = [];
let gameInterval;

// Getting references to the HTML elements for game container, start button, score, and timer
const gameContainer = document.getElementById('game-container');
const startbtn = document.getElementById('startbtn');
const scoreE = document.getElementById('score');
const timerE = document.getElementById('timer');

// Function to generate cards and add them to the game container
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to handle card clicks
function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return; // Ignore clicks on non-cards or already matched cards
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length == 2) {
        setTimeout(checkMatch, 500); // Check for a match after a short delay
    }
}

// Function to check if two selected cards match
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2; // Increase the score for a match
        scoreE.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

// Function to start the game
function startGame() {
    startbtn.disabled = true; // Disable the start button
    score = 0; // Reset score to zero
    scoreE.textContent = `Score: ${score}`;
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = ''; // Clear the game container
    generateCards(); // Generate new cards
    gameContainer.addEventListener('click', handleCardClick); // Add click event listener
    startGameTimer(); // Start the game timer
}

// Function to start the game timer
function startGameTimer() {
    let timeLeft = 30; // Initialize time left
    timerE.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerE.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert('Game Over!'); // Alert when time runs out
            startbtn.disabled = false; // Re-enable the start button
        }
    }, 1000);
}

// Add click event listener to the start button
startbtn.addEventListener('click', startGame);
