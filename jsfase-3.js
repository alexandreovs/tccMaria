// Variáveis Globais
let questions = [];
let currentQuestionIndex = 0;

// Carregar Perguntas do JSON
async function loadQuestions() {
    try {
        const response = await fetch('qfase-3.json'); // Nome do arquivo JSON com as perguntas
        questions = await response.json(); // Carrega o JSON como uma lista simples
        displayQuestion(); // Exibe a primeira pergunta
    } catch (error) {
        console.error("Erro ao carregar perguntas:", error);
    }
}

// Função para Mostrar Perguntas e Ocultar História
function showQuestions() {
    document.getElementById('story-screen').style.display = 'none';
    document.getElementById('fase2-screen').style.display = 'block';
    displayQuestion();
}

// Exibir Pergunta Atual
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.text;
}

// Verificar Resposta e Exibir Feedback
function checkAnswer(isCorrect) {
    const question = questions[currentQuestionIndex];
    
    if (isCorrect === question.correct) {
        document.getElementById('fase2-screen').style.display = 'none';
        document.getElementById('correct-feedback-text').textContent = question.feedback;
        document.getElementById('correct-feedback').style.display = 'block';
    } else {
        document.getElementById('fase2-screen').style.display = 'none';
        document.getElementById('incorrect-feedback-text').textContent = question.feedback;
        document.getElementById('incorrect-feedback').style.display = 'block';
    }
}

// Função para exibir a próxima pergunta ou ir para a próxima fase
function goToNext() {
    currentQuestionIndex++;
    
    // Checa se ainda há perguntas na fase atual
    if (currentQuestionIndex < questions.length) {
        document.getElementById('correct-feedback').style.display = 'none';
        document.getElementById('incorrect-feedback').style.display = 'none';
        document.getElementById('fase2-screen').style.display = 'block';
        displayQuestion(); // Exibe a próxima pergunta
    } else {
        goToNextPhase(); // Redireciona para a próxima fase se não houver mais perguntas
    }
}

// Função para Próxima Fase
function goToNextPhase() {
    window.location.href = 'fase-4.html'; // Redireciona para a próxima fase
}

// Carregar perguntas ao iniciar o jogo
window.onload = loadQuestions;