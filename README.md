# 🤖 CodeQuest AI

> **Learn. Solve. Level Up.**

CodeQuest AI is an interactive coding challenge game that turns programming practice into a simple gamified experience.

Players solve programming and computer science questions, earn XP, build streaks, manage lives, and level up as they progress through challenges.

The project is currently built with HTML, CSS, and JavaScript and is designed to gradually evolve into an **AI-powered personalized coding learning platform**.

---

## 🎮 Live Demo

🚀 **Play CodeQuest AI:**  
https://SimarpreetKaur-04.github.io/codequest-ai/

---

## ✨ Features

### 🧠 Dynamic Coding Challenges

- Multiple-choice programming questions
- Dynamic question rendering using JavaScript
- 15 coding and computer science challenges
- Automatic question progression
- Question progress tracking

### ⭐ XP & Level System

- Earn **100 XP** for every correct answer
- Automatic level progression
- XP progress bar
- Real-time XP and level updates

### ❤️ Lives System

- Start each game with 3 lives
- Lose one life for every incorrect answer
- Game ends when all lives are lost

### 🔥 Streak System

- Correct consecutive answers increase the streak
- Incorrect answers reset the current streak
- Best streak is tracked throughout the game

### 🎯 Answer Feedback

- Correct answers are highlighted in green
- Incorrect answers are highlighted in red
- Correct answer is revealed after an incorrect attempt
- Answers are locked after selection
- Prevents multiple submissions for the same question

### 📊 Progress Tracking

- Current question number
- Total number of challenges
- XP progress toward the next level
- Current level
- Remaining lives
- Current streak

### 💀 Game Over Screen

When all lives are lost, the game displays:

- Final XP
- Final level
- Best streak
- Play Again option

### 🎉 Quest Completion

After completing all available challenges:

- Completion screen is displayed
- Final XP is shown
- Final level is shown
- Best streak is shown
- Player can restart the game

### 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application |
| CSS3 | Styling, layout and responsive design |
| JavaScript | Game logic and dynamic interactions |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Deployment |

---

## 🎮 How the Game Works

```text
                 START GAME
                     │
                     ▼
              Load Challenge
                     │
                     ▼
               Select Answer
                     │
             ┌───────┴───────┐
             │               │
          Correct          Wrong
             │               │
             ▼               ▼
          +100 XP         -1 Life
         +1 Streak       Reset Streak
             │               │
             └───────┬───────┘
                     │
                     ▼
                Update UI
                     │
                     ▼
              Next Challenge
                     │
             ┌───────┴───────┐
             │               │
         More Questions    No Lives
             │               │
             ▼               ▼
          Continue        Game Over
             │
             ▼
        Quest Complete
