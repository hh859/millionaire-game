let currentQuestionIndex = 1;

const question = ['What is the largest planet in our solar system?', 'Which country is famous for its sushi cuisine?', 'What is the capital of Canada?', 'Who painted the Mona Lisa?', 'In Greek mythology, who is the god of thunder?', 'What is the largest ocean on Earth?', 'Who is known as the "King of Pop"?', 'What is the name of the fictional wizarding school in the "Harry Potter" series?', 'In which sport would you perform a slam dunk?', 'Who co-founded Microsoft along with Bill Gates?', 'What is the value of π (pi) to two decimal places?', 'Who wrote the play "Romeo and Juliet"?', 'In which year did Christopher Columbus reach the Americas?', 'Which element has the chemical symbol "O"?', 'What is the capital of France?'];

const answers = [['Mars', 'Venus', 'Jupiter', 'Saturn'], ['Italy', 'Japan', 'Mexico', 'India'], ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'], ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'], ['Poseidon', 'Hades', 'Zeus', 'Apollo'], ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], ['Madonna', 'Prince', 'Michael Jackson', 'Elvis Presley'], ['Neverland Academy', 'Hogwarts School of Witchcraft and Wizardry', 'Starfleet Academy', 'Xaviers School for Gifted Youngsters'], ['Soccer', 'Basketball', 'Tennis', 'Golf'], ['Steve Jobs', 'Paul Allen', 'Larry Page', 'Mark Zuckerberg'], ['3.14', '2.71', '1.61', '4.20'], ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'], ['1492', '1588', '1776', '1620'], ['Oxygen', 'Gold', 'Silver', 'Iron'], ['Rome', 'Berlin', 'Paris', 'Madrid']];
const correctAnswers = [2, 1, /*... other correct answer indices ...*/];

const currentQuestion = question[currentQuestionIndex];

const choices = answers[currentQuestionIndex];

const questionTitle = document.getElementById('questions')
const choiceButtons = document.getElementsByName('choices');

//for loop for choices 
// for loop for choiceButtons 
// 
console.log(choices)


<script>
const question = ['What is the largest planet in our solar system?', 'Which country is famous for its sushi cuisine?', /*... other questions ...*/];
const answers = [['Mars', 'Venus', 'Jupiter', 'Saturn'], ['Italy', 'Japan', 'Mexico', 'India'], /*... other answers ...*/];
let currentQuestionIndex = 0;

function displayQuestion() {
  const currentQuestion = question[currentQuestionIndex];
  const choices = answers[currentQuestionIndex];

  const questionTitle = document.getElementById('question');
  const choicesContainer = document.getElementById('choices');

  questionTitle.textContent = currentQuestion;
  choicesContainer.innerHTML = '';

  choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => checkAnswer(index));
    choicesContainer.appendChild(button);
  });
}
----> initial version (goes to the next question) - to be updated

function checkAnswer(choiceIndex) {
  // Add your logic for checking the answer here
  // You might want to compare choiceIndex with the correct answer index
  console.log('Selected answer:', choiceIndex);
  // Move to the next question
  nextQuestion();
}

update it to ->

function checkAnswer(choiceIndex) {
      if (choiceIndex === correctAnswers[currentQuestionIndex]) {
        // Correct answer
        alert('Correct! Moving to the next question.');
        nextQuestion();
      } else {
        // Incorrect answer
        alert('Wrong answer! Game over.');
        // You can add more actions for ending the game here
      }
    }

    < ------


function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    displayQuestion();
  } else {
    alert('Quiz completed!');
    // Add any other actions you want to perform when the quiz is completed
  }
}

// Initial display
displayQuestion();
</script>

