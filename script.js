// ===============================
// CODEQUEST AI - GAME ENGINE
// ===============================

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
        question: "Which algorithm is commonly used for an unweighted shortest path?",
        options: ["DFS", "BFS", "Binary Search", "Merge Sort"],
        answer: 1
    }

];


// ===============================
// GAME STATE
// ===============================

let currentQuestion = 0;
let xp = 0;
let level = 1;
let lives = 3;
let streak = 0;

// NEW: prevents multiple answers
let answered = false;


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

    answered = false;

    const questionData =
        questions[currentQuestion];

    // Display question

    document.getElementById("question").textContent =
        questionData.question;


    // Update progress

    document.getElementById("progress").textContent =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        questions.length;


    // Create answer buttons

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";


    questionData.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.textContent = option;


            button.onclick = function () {

                checkAnswer(index, button);

            };


            optionsContainer.appendChild(button);

        }
    );


    // Reset feedback

    document.getElementById("feedback").textContent = "";


    // Hide next button

    document.getElementById("nextButton").style.display =
        "none";
}


// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(selectedAnswer, selectedButton) {

    // Prevent multiple answers

    if (answered) {
        return;
    }

    answered = true;


    const correctAnswer =
        questions[currentQuestion].answer;


    const feedback =
        document.getElementById("feedback");


    const optionButtons =
        document.querySelectorAll("#options button");


    // Disable all buttons

    optionButtons.forEach(
        button => {

            button.disabled = true;

        }
    );


    // Correct answer

    if (selectedAnswer === correctAnswer) {

        xp += 100;

        streak++;


        selectedButton.classList.add("correct");


        feedback.textContent =
            "✅ Correct! +100 XP";


        checkLevelUp();

    }


    // Wrong answer

    else {

        lives--;

        streak = 0;


        selectedButton.classList.add("wrong");


        // Highlight correct answer

        optionButtons[correctAnswer]
            .classList.add("correct");


        feedback.textContent =
            "❌ Wrong answer! You lost a life.";

        
        if (lives <= 0) {

            updateGameUI();

            setTimeout(gameOver, 800);

            return;

        }

    }


    updateGameUI();


    document.getElementById("nextButton")
        .style.display = "block";
}


// ===============================
// LEVEL SYSTEM
// ===============================

function checkLevelUp() {

    const newLevel =
        Math.floor(xp / 300) + 1;


    if (newLevel > level) {

        level = newLevel;


        document.getElementById("feedback")
            .textContent =
            "🎉 LEVEL UP! You reached Level " +
            level;

    }

}


// ===============================
// UPDATE UI
// ===============================

function updateGameUI() {

    document.getElementById("xp").textContent =
        xp;

    document.getElementById("level").textContent =
        level;

    document.getElementById("lives").textContent =
        lives;

    document.getElementById("streak").textContent =
        streak;

}


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    currentQuestion++;


    if (currentQuestion >= questions.length) {

        alert(
            "🎉 Level Complete!\n\n" +
            "XP: " + xp +
            "\nLevel: " + level +
            "\nStreak: " + streak
        );


        currentQuestion = 0;

    }


    loadQuestion();

}


// ===============================
// GAME OVER
// ===============================

function gameOver() {

    alert(
        "💀 GAME OVER!\n\n" +
        "Final XP: " + xp +
        "\nLevel: " + level
    );


    // Reset game

    xp = 0;
    level = 1;
    lives = 3;
    streak = 0;
    currentQuestion = 0;


    updateGameUI();

    loadQuestion();

}


// ===============================
// START GAME
// ===============================

loadQuestion();
