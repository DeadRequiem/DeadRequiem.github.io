let score = 0;
let isClicked = false;

const clickImage = document.getElementById('clickImage');
const scoreDisplay = document.getElementById('score');
const clickRateDisplay = document.getElementById('clickRate');

clickImage.addEventListener('click', () => {
    if (!isClicked) {
        score += 1; // You can adjust the click rate here if needed
        isClicked = true;
        clickImage.src = 'https://i14.servimg.com/u/f14/17/55/69/45/greenj11.png'; // Replace with the URL of the clicked image
        setTimeout(() => {
            isClicked = false;
            clickImage.src = 'https://i14.servimg.com/u/f14/17/55/69/45/greenj10.png'; // Replace with the URL of the idle image
        }, 1000); // Adjust the duration for how long the clicked image is displayed (in milliseconds)
        
        scoreDisplay.textContent = `Score: ${score}`;
    }
});

// Rest of your game logic (e.g., upgrades, etc.) goes here
