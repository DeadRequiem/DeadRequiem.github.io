let clickPower = 1;
let gp = 0;
let isClicked = false;

const clickImage = document.getElementById('clickImage');
const clickRateDisplay = document.getElementById('clickRate');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const gpDisplay = document.getElementById('gpDisplay');

// Function to update the upgrade cost based on click power
function updateUpgradeCost() {
    const newUpgradeCost = clickPower * 10;
    upgradeCostDisplay.textContent = newUpgradeCost;
}

// Load saved game data when the page loads
const savedData = loadGameData();
gp = savedData.gp || gp;
clickPower = savedData.clickPower || clickPower;

// Event listener for the click image
clickImage.addEventListener('click', () => {
    if (!isClicked) {
        isClicked = true;
        clickImage.src = 'https://i14.servimg.com/u/f14/17/55/69/45/greenj11.png'; // Replace with the URL of the clicked image
        setTimeout(() => {
            isClicked = false;
            clickImage.src = 'https://i14.servimg.com/u/f14/17/55/69/45/greenj10.png'; // Replace with the URL of the idle image
        }, 100); // Adjust the duration (milliseconds) for how long the clicked image is displayed

        // Update the GP directly here
        gp += clickPower;
        updateGPDisplay();

        // Create a game data object and save it
        const gameData = { gp, clickPower };
        saveGameData(gameData);
    }
});

// Event listener for the upgrade button
upgradeButton.addEventListener('click', () => {
    const upgradeCost = clickPower * 10;
    if (gp >= upgradeCost) {
        gp -= upgradeCost;
        clickPower++;
        clickRateDisplay.textContent = `GP Rate: ${clickPower} per click`;
        updateUpgradeCost();

        // Create a game data object and save it
        const gameData = { gp, clickPower };
        saveGameData(gameData);
    } else {
        alert("Not enough GP to buy the upgrade!");
    }
});

// Function to update the GP display
function updateGPDisplay() {
    gpDisplay.textContent = `GP: ${gp}`;
}

// Initialize the GP display
updateGPDisplay();

// Regularly update the upgrade cost
setInterval(updateUpgradeCost, 5000);
