let xp = 0;
let streak = 0;

function checkAnswer(answer) {

    const correctAnswer = 1;

    const feedback = document.getElementById("feedback");

    if (answer === correctAnswer) {

        xp += 100;
        streak++;

        feedback.textContent = "✅ Correct! +100 XP";

    } else {

        streak = 0;

        feedback.textContent = "❌ Wrong answer. Try the next challenge!";

    }

    document.getElementById("xp").textContent = xp;
    document.getElementById("streak").textContent = streak;

    document.getElementById("nextButton").style.display = "block";
}


function nextQuestion() {

    alert("Next challenge coming soon! 🚀");

}
