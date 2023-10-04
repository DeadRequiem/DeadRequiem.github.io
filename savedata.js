// saveData.js

// Function to load saved data from localStorage
function loadGameData() {
    const savedData = JSON.parse(localStorage.getItem('clickerGame'));
    return savedData || {}; // Return an empty object if no saved data is found
}

// Function to save the game data to localStorage
function saveGameData(gameData) {
    localStorage.setItem('clickerGame', JSON.stringify(gameData));
}

// Export the functions to be used in other files
export { loadGameData, saveGameData };
