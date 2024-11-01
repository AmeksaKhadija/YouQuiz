const questions = [
  {
    questions: "5 + 5 ?",
    answers: [
      { text: "10", correct: "true" },
      { text: "1", correct: "false" },
      { text: "11", correct: "false" },
      { text: "7", correct: "false" },
    ],
  },
  {
    questions: "15 - 1 Combien ?",
    answers: [
      { text: "15", correct: false },
      { text: "20", correct: false },
      { text: "14", correct: true },
      { text: "13", correct: false },
    ],
  },
  {
    questions: "7 * 3 Combien ?",
    answers: [
      { text: "15", correct: false },
      { text: "21", correct: true },
      { text: "14", correct: false },
      { text: "13", correct: false },
    ],
  },
  {
    questions: "-2-8 Combien ?",
    answers: [
      { text: "15", correct: false },
      { text: "20", correct: false },
      { text: "-14", correct: false },
      { text: "-10", correct: true },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const previewButton = document.getElementById("preview-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  ShowQuestion();
}

function ShowQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.questions;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  if (currentQuestionIndex == 0 || currentQuestionIndex == questions.length) {
    previewButton.style.display = "none";
  }else{
    previewButton.style.display = "block";
  }
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
  // previewButton.style.display = "block";

}

function ShowScore() {
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    ShowQuestion();
  } else {
    ShowScore();
  }
}

function handlePreviousButton() {
  --currentQuestionIndex;
  ShowQuestion();
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

previewButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    handlePreviousButton();
  } else {
    startQuiz();
  }
});

startQuiz();
