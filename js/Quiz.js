<<<<<<< HEAD
import { COUNTRIES } from "./Countries.js";


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
}


loadQuestion();
=======
import { COUNTRIES } from "./Countries.js";


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
}


loadQuestion();
>>>>>>> 0407b5e (added all countries)
