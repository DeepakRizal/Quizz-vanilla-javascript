const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au",
  },
  {
    question: "Which country is the largest by land area?",
    choices: ["Canada", "China", "Russia", "United States"],
    correctAnswer: "Russia",
  },
  {
    question: "In which year did the Titanic sink?",
    choices: ["1905", "1912", "1920", "1935"],
    correctAnswer: "1912",
  },
  {
    question: "What is the smallest prime number?",
    choices: ["1", "2", "3", "5"],
    correctAnswer: "2",
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Vincent van Gogh",
      "Claude Monet",
      "Pablo Picasso",
      "Leonardo da Vinci",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    choices: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
  },
];

const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".options");
const nextBtn = document.querySelector(".next");
const quizzBox = document.querySelector(".quizz-box");
const selectedOption = document.querySelector(".choice");
const reset = document.querySelector(".reset");

let questionIndex = 0;
let score = 0;

function loadQuestion() {
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  let currentQuestion = questions[questionIndex];
  if (questionIndex < questions.length) {
    questionEl.textContent = currentQuestion.question;

    currentQuestion.choices.forEach((choice) => {
      const choiceLi = document.createElement("li");
      const choiceLabel = document.createElement("label");
      const choiceInput = document.createElement("input");
      choiceInput.classList.add("choice");
      choiceInput.type = "radio";
      choiceInput.name = "choice";
      choiceInput.value = choice;

      choiceLabel.appendChild(choiceInput);
      choiceLabel.appendChild(document.createTextNode(choice));

      choiceLi.appendChild(choiceLabel);

      optionsEl.appendChild(choiceLi);
      optionsEl.appendChild(document.createElement("br"));
    });
  }
}

function getSelectedOption() {
  const choices = document.querySelectorAll('input[name="choice"]');
  let selectedOption;
  choices.forEach((choice) => {
    if (choice.checked) {
      selectedOption = choice.value;
    }
  });
  return selectedOption;
}

nextBtn.addEventListener("click", () => {
  const selectedOption = getSelectedOption();
  if (selectedOption) {
    let currentQuestion = questions[questionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }

    questionIndex++;

    if (questionIndex < questions.length) {
      loadQuestion();
    } else {
      quizzBox.innerHTML = "";
      let scoreH1 = document.createElement("h1");
      scoreH1.textContent = `Score: ${score}`;
      quizzBox.appendChild(scoreH1);
      reset.style.display = "block";
      quizzBox.appendChild(reset);
    }
  }
});

reset.addEventListener("click", () => {
  location.reload();
});

loadQuestion();
