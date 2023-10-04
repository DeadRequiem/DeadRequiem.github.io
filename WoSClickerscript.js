let score = 0;
let clickPower = 1;
let gp = 0;
let isClicked = false;

const clickImage = document.getElementById('clickImage');
const scoreDisplay = document.getElementById('score');
const clickRateDisplay = document.getElementById('clickRate');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const gpDisplay = document.getElementById('gpDisplay');

// Function to update the upgrade cost based on click power
function updateUpgradeCost() {
    const newUpgradeCost = clickPower * 10;
    upgradeCostDisplay.textContent = newUpgradeCost;
}

// Event listener for the click image
clickImage.addEventListener('click', () => {
    if (!isClicked) {
        score += clickPower;
        isClicked = true;
        clickImage.src = 'https://i14.servimg.com/u/f14/17/55/69/45/greenj11.png'; // Replace with the URL of the clicked image
        setTimeout(() => {
            isClicked = false;
            clickImage.src = 'https://i14.servimg.com/u/f14/17/55/69/45/greenj10.png'; // Replace with the URL of the idle image
        }, 1000); // Adjust the duration for how long the clicked image is displayed (in milliseconds)
        
        scoreDisplay.textContent = `Score: ${score}`;
    }
});

// Event listener for the upgrade button
upgradeButton.addEventListener('click', () => {
    const upgradeCost = clickPower * 10;
    if (gp >= upgradeCost) {
        gp -= upgradeCost;
        clickPower++;
        scoreDisplay.textContent = `Score: ${score}`;
        clickRateDisplay.textContent = `GP Rate: ${clickPower} per click`;
        updateUpgradeCost();
    } else {
        alert("Not enough GP to buy the upgrade!");
    }
});

// Function to update the GP display
function updateGPDisplay() {
    gpDisplay.textContent = `GP: ${gp}`;
}

// Regularly update the GP display
setInterval(updateGPDisplay, 1000);

// Regularly update the upgrade cost
setInterval(updateUpgradeCost, 5000);
