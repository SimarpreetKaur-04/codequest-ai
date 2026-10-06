/* --------------------------------
   QUESTIONS
--------------------------------- */

const questions = [

    {
        question: "Which data structure follows the FIFO principle?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1
    },

    {
        question: "Which language is mainly used for web page structure?",
        options: ["Python", "HTML", "C++", "Java"],
        answer: 1
    },

    {
        question: "Which algorithm is commonly used to find the shortest path in an unweighted graph?",
        options: ["DFS", "BFS", "Binary Search", "Merge Sort"],
        answer: 1
    },

    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        answer: 1
    },

    {
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "Graph", "Linked List"],
        answer: 1
    },

    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        answer: 2
    },

    {
        question: "Which of the following is NOT a programming language?",
        options: ["Python", "Java", "HTML", "C++"],
        answer: 2
    },

    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Processing Utility",
            "Central Program Unit",
            "Computer Program Unit"
        ],
        answer: 0
    },

    {
        question: "Which data structure is commonly used for BFS?",
        options: ["Stack", "Queue", "Heap", "Array"],
        answer: 1
    },

    {
        question: "Which sorting algorithm has an average time complexity of O(n log n)?",
        options: [
            "Bubble Sort",
            "Selection Sort",
            "Merge Sort",
            "Linear Search"
        ],
        answer: 2
    },

    {
        question: "Which keyword is used to create a function in JavaScript?",
        options: ["function", "def", "fun", "method"],
        answer: 0
    },

    {
        question: "Which of these is a relational database?",
        options: ["MongoDB", "MySQL", "Redis", "Neo4j"],
        answer: 1
    },

    {
        question: "Which protocol is commonly used to transfer web pages?",
        options: ["HTTP", "FTP", "SMTP", "SSH"],
        answer: 0
    },

    {
        question: "What does API stand for?",
        options: [
            "Application Programming Interface",
            "Application Program Internet",
            "Advanced Programming Interface",
            "Applied Programming Integration"
        ],
        answer: 0
    },

    {
        question: "Which machine learning type learns from labeled data?",
        options: [
            "Unsupervised Learning",
            "Supervised Learning",
            "Reinforcement Learning",
            "Random Learning"
        ],
        answer: 1
    }

];


/* --------------------------------
   GAME VARIABLES
--------------------------------- */

let currentQuestion = 0;

let xp = 0;

let level = 1;

let lives = 3;

let streak = 0;

let bestStreak = 0;

let answered = false;


/* --------------------------------
   DOM ELEMENTS
--------------------------------- */

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("nextBtn");

const xpElement =
    document.getElementById("xp");

const levelElement =
    document.getElementById("level");

const livesElement =
    document.getElementById("lives");

const streakElement =
    document.getElementById("streak");

const progressElement =
    document.getElementById("progress");

const questionLevelElement =
    document.getElementById("questionLevel");

const xpProgress =
    document.getElementById("xpProgress");

const xpProgressText =
    document.getElementById("xpProgressText");

const gameOverScreen =
    document.getElementById("gameOverScreen");

const completionScreen =
    document.getElementById("completionScreen");

const finalXP =
    document.getElementById("finalXP");

const finalLevel =
    document.getElementById("finalLevel");

const finalStreak =
    document.getElementById("finalStreak");

const completionXP =
    document.getElementById("completionXP");

const completionLevel =
    document.getElementById("completionLevel");

const completionStreak =
    document.getElementById("completionStreak");

const restartButton =
    document.getElementById("restartBtn");

const completionRestartButton =
    document.getElementById("completionRestartBtn");


/* --------------------------------
   LOAD QUESTION
--------------------------------- */

function loadQuestion() {

    answered = false;

    const current = questions[currentQuestion];

    questionElement.textContent =
        current.question;

    progressElement.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    questionLevelElement.textContent =
        level;

    feedbackElement.textContent = "";

    nextButton.style.display = "none";

    optionsElement.innerHTML = "";


    /* CREATE ANSWER BUTTONS */

    current.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.textContent = option;

        button.onclick = () =>
            checkAnswer(index, button);

        optionsElement.appendChild(button);

    });


    updateGameUI();
}


/* --------------------------------
   CHECK ANSWER
--------------------------------- */

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const correctAnswer =
        questions[currentQuestion].answer;

    const allButtons =
        document.querySelectorAll("#options button");


    /* DISABLE ALL BUTTONS */

    allButtons.forEach(button => {
        button.disabled = true;
    });


    /* CORRECT ANSWER */

    if (selectedIndex === correctAnswer) {

        selectedButton.classList.add("correct");

        xp += 100;

        streak++;

        if (streak > bestStreak) {
            bestStreak = streak;
        }

        feedbackElement.textContent =
            "🎉 Correct! +100 XP";

        feedbackElement.style.color =
            "#22c55e";


        checkLevelUp();

    }


    /* WRONG ANSWER */

    else {

        selectedButton.classList.add("wrong");

        allButtons[correctAnswer]
            .classList.add("correct");

        lives--;

        streak = 0;

        feedbackElement.textContent =
            "❌ Incorrect! The correct answer is highlighted.";

        feedbackElement.style.color =
            "#ef4444";


        if (lives <= 0) {

            updateGameUI();

            setTimeout(() => {
                gameOver();
            }, 1000);

            return;
        }

    }


    updateGameUI();

    nextButton.style.display = "block";
}


/* --------------------------------
   LEVEL SYSTEM
--------------------------------- */

function checkLevelUp() {

    const newLevel =
        Math.floor(xp / 300) + 1;


    if (newLevel > level) {

        level = newLevel;

        feedbackElement.textContent =
            "🎉 LEVEL UP! You reached Level " + level;

        feedbackElement.style.color =
            "#a78bfa";

    }

}


/* --------------------------------
   UPDATE UI
--------------------------------- */

function updateGameUI() {

    xpElement.textContent = xp;

    levelElement.textContent = level;

    livesElement.textContent = lives;

    streakElement.textContent = streak;

    questionLevelElement.textContent = level;


    /* XP PROGRESS */

    const xpInsideLevel =
        xp % 300;

    const percentage =
        (xpInsideLevel / 300) * 100;

    xpProgress.style.width =
        percentage + "%";


    xpProgressText.textContent =
        `${xpInsideLevel} / 300 XP`;

}


/* --------------------------------
   NEXT QUESTION
--------------------------------- */

nextButton.onclick = function () {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showCompletionScreen();

        return;
    }

    loadQuestion();

};


/* --------------------------------
   GAME OVER
--------------------------------- */

function gameOver() {

    finalXP.textContent = xp;

    finalLevel.textContent = level;

    finalStreak.textContent = bestStreak;

    gameOverScreen.style.display =
        "flex";

}


/* --------------------------------
   COMPLETION SCREEN
--------------------------------- */

function showCompletionScreen() {

    completionXP.textContent = xp;

    completionLevel.textContent = level;

    completionStreak.textContent = bestStreak;

    completionScreen.style.display =
        "flex";

}


/* --------------------------------
   RESTART GAME
--------------------------------- */

function restartGame() {

    currentQuestion = 0;

    xp = 0;

    level = 1;

    lives = 3;

    streak = 0;

    bestStreak = 0;

    gameOverScreen.style.display =
        "none";

    completionScreen.style.display =
        "none";

    loadQuestion();

}


/* --------------------------------
   RESTART BUTTONS
--------------------------------- */

restartButton.onclick =
    restartGame;

completionRestartButton.onclick =
    restartGame;


/* --------------------------------
   START GAME
--------------------------------- */

loadQuestion();
