let score = 0;
let clickRate = 1;

const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const clickRateDisplay = document.getElementById('clickRate');

clickButton.addEventListener('click', () => {
    score += clickRate;
    scoreDisplay.textContent = `Score: ${score}`;
});

// Add an upgrade feature
const upgradeButton = document.createElement('button');
upgradeButton.textContent = 'Upgrade (+1 Click Rate)';
upgradeButton.addEventListener('click', () => {
    const upgradeCost = Math.pow(2, clickRate);
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickRate++;
        scoreDisplay.textContent = `Score: ${score}`;
        clickRateDisplay.textContent = `Click Rate: ${clickRate} per click`;
        upgradeButton.textContent = `Upgrade (+${Math.pow(2, clickRate)} Click Rate)`;
    } else {
        alert("Not enough score to upgrade!");
    }
});

document.body.appendChild(upgradeButton);
