
// Funções para alternar entre as telas iniciais e instruções
function startGame() {
    document.getElementById('instructions-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    loadQuestions(); // Carregar as perguntas da fase inicial
}

function showInstructions() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('instructions-screen').style.display = 'block';
}

function showHelp() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('help-screen').style.display = 'block';
}

function showCredits() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('credits-screen').style.display = 'block';
}

function backToStart() {
    document.getElementById('instructions-screen').style.display = 'none';
    document.getElementById('help-screen').style.display = 'none';
    document.getElementById('credits-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}
