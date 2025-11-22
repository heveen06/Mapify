// import { COUNTRIES } from "./Countries.js";

const COUNTRIES = [
  { name: "Japan", flag: "images/japan-flag.png" },
  { name: "Brazil", flag: "images/brazil-flag.png" },
  { name: "Egypt", flag: "images/egypt-flag.png" },
  { name: "France", flag: "images/france-flag.png" },
  { name: "Germany", flag: "images/germany-flag.png" },
  { name: "Italy", flag: "images/italy-flag.png" },
  { name: "United Kingdom", flag: "images/united kingdom-flag.png" },
  { name: "United States", flag: "images/us-flag.webp" },
  { name: "Canada", flag: "images/canada-flag.png" },
  { name: "Turkey", flag: "images/turkey-flag.png" },
  { name: "China", flag: "images/china-flag.png" },
  { name: "South Korea", flag: "images/south korea-flag.png" },
  { name: "India", flag: "images/india-flag.png" },
  { name: "Russia", flag: "images/russia-flag.jpg" },
  { name: "Australia", flag: "images/australia-flag.png" },
  { name: "Mexico", flag: "images/mexico-flag.png" },
  { name: "Argentina", flag: "images/argentina-flag.png" },
  { name: "Spain", flag: "images/spain-flag.png" },
  { name: "Saudi Arabia", flag: "images/saudi arabia-flag.png" },
  { name: "South Africa", flag: "images/south africa-flag.png" },
  { name: "Nigeria", flag: "images/nigeria-flag.png" },
  { name: "Sweden", flag: "images/sweden-flag.png" },
  { name: "Norway", flag: "images/norway-flag.png" },
  { name: "Greece", flag: "images/greece-flag.png" },
];

const flagEl = document.getElementById("flag");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const resultMessage = document.getElementById("resultMessage");

let currentQuestion = null;
let score = 0;
let questionCount = 0;
const maxQuestions = 10; 
let selectedAnswer = null;


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function loadQuestion() {
  if (questionCount >= maxQuestions) {
    showResults();
    return;
  }

 
  const correct = COUNTRIES[getRandomInt(COUNTRIES.length)];
  currentQuestion = correct;
  flagEl.src = correct.flag;

 
  const wrong = [];
  while (wrong.length < 3) {
    const cand = COUNTRIES[getRandomInt(COUNTRIES.length)];
    if (cand.name !== correct.name && !wrong.includes(cand)) {
      wrong.push(cand);
    }
  }


  const options = [correct, ...wrong].sort(() => Math.random() - 0.5);
  optionButtons.forEach((btn, i) => {
    btn.textContent = options[i].name;
    btn.style.backgroundColor = "#eedd91";
    btn.disabled = false;
    btn.onclick = () => {
      selectedAnswer = options[i].name;
      // highlight chosen button
      optionButtons.forEach(b => (b.style.backgroundColor = "#eedd91"));
      btn.style.backgroundColor = "#c5b34e";
    };
  });
}


nextBtn.onclick = () => {
  if (!selectedAnswer) {
    alert("Please choose an answer before moving to the next question!");
    return;
  }


  if (selectedAnswer === currentQuestion.name) {
    score += 10;
  }

  questionCount++;
 
  selectedAnswer = null;

  if (questionCount < maxQuestions) {
    loadQuestion();
  } else {
    showResults();
  }
};

function showResults() {
  quizBox.style.display = "none";
  resultBox.style.display = "flex";
  resultMessage.textContent = `You finished ${maxQuestions} countries and scored ${score} points!`;
  let scores = JSON.parse(localStorage.getItem("gameScores") || "[]");
scores.push(score);
localStorage.setItem("gameScores", JSON.stringify(scores));
localStorage.setItem("totalScore", scores.reduce((a, b) => a + b, 0));
}


loadQuestion();
