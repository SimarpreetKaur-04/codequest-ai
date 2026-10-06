// ===============================
// CODEQUEST AI - QUESTION SYSTEM
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

let currentQuestion = 0;
let xp = 0;
let streak = 0;


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

    const questionData = questions[currentQuestion];

    document.getElementById("question").textContent =
        questionData.question;

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = function () {
            checkAnswer(index);
        };

        optionsContainer.appendChild(button);
    });

    document.getElementById("feedback").textContent = "";

    document.getElementById("nextButton").style.display = "none";
}


// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(selectedAnswer) {

    const correctAnswer =
        questions[currentQuestion].answer;

    const feedback =
        document.getElementById("feedback");

    if (selectedAnswer === correctAnswer) {

        xp += 100;
        streak++;

        feedback.textContent =
            "✅ Correct! +100 XP";

    } else {

        streak = 0;

        feedback.textContent =
            "❌ Wrong answer!";
    }

    document.getElementById("xp").textContent = xp;

    document.getElementById("streak").textContent = streak;

    document.getElementById("nextButton").style.display =
        "block";
}


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        alert(
            "🎉 Game Complete! Your XP: " + xp
        );

        currentQuestion = 0;
        xp = 0;
        streak = 0;
    }

    loadQuestion();
}


// ===============================
// START GAME
// ===============================

loadQuestion();
