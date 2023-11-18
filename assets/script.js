const question = ['What is the largest planet in our solar system?', 'Which country is famous for its sushi cuisine?', 'What is the capital of Canada?', 'Who painted the Mona Lisa?', 'In Greek mythology, who is the god of thunder?', 'What is the largest ocean on Earth?', 'Who is known as the "King of Pop"?', 'What is the name of the fictional wizarding school in the "Harry Potter" series?', 'In which sport would you perform a slam dunk?', 'Who co-founded Microsoft along with Bill Gates?', 'What is the value of π (pi) to two decimal places?', 'Who wrote the play "Romeo and Juliet"?', 'In which year did Christopher Columbus reach the Americas?', 'Which element has the chemical symbol "O"?', 'What is the capital of France?'];

const answers = [['Mars', 'Venus', 'Jupiter', 'Saturn'], ['Italy', 'Japan', 'Mexico', 'India'], ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'], ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'], ['Poseidon', 'Hades', 'Zeus', 'Apollo'], ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], ['Madonna', 'Prince', 'Michael Jackson', 'Elvis Presley'], ['Neverland Academy', 'Hogwarts School of Witchcraft and Wizardry', 'Starfleet Academy', 'Xaviers School for Gifted Youngsters'], ['Soccer', 'Basketball', 'Tennis', 'Golf'], ['Steve Jobs', 'Paul Allen', 'Larry Page', 'Mark Zuckerberg'], ['3.14', '2.71', '1.61', '4.20'], ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'], ['1492', '1588', '1776', '1620'], ['Oxygen', 'Gold', 'Silver', 'Iron'], ['Rome', 'Berlin', 'Paris', 'Madrid']];
const correctAnswers = [2, 1, 0, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 2];
let currentQuestionIndex = 0;

/* displayig a question and answer options */
function displayQuestion() {
  const currentQuestion = question[currentQuestionIndex];
  const choices = answers[currentQuestionIndex];

  const questionTitle = document.getElementById('questions');
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

/* Checks if the selected answer is correct */
function checkAnswer(choiceIndex) {
  if (choiceIndex === correctAnswers[currentQuestionIndex]) {
    // Correct answer
    alert('Correct! Moving to the next question.');
    nextQuestion();
  } else {
    // Incorrect answer
    alert('Wrong answer! Game over.');
  }
}

/* a 50/50 button to remove two incorrect answers */
function useFiftyFifty() {
  const choices = document.querySelectorAll('#choices button');
  const correctAnswerIndex = correctAnswers[currentQuestionIndex];

  const incorrectIndices = [...Array(choices.length).keys()] //To randomly select two incorrect options 
    .filter(index => index !== correctAnswerIndex);
  const randomIncorrectIndices = getRandomElements(incorrectIndices, 2) //Selects two random incorrect options 

  choices[randomIncorrectIndices[0]].classList.add('highlighted');
  choices[randomIncorrectIndices[1]].classList.add('highlighted');
  choices[randomIncorrectIndices[0]].disabled = true;
  choices[randomIncorrectIndices[1]].disabled = true;
}

/* Get the friend's number from the user to call */
function callAFriend() {
  const phoneNumber = prompt("Enter your friend's phone number:");
  if (phoneNumber !== null && phoneNumber !== "") {
    alert(`Calling ${phoneNumber}...`);
  } else {
    alert('Invalid phone number');
  }
}


function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    displayQuestion();
  } else {
    alert('You won! Congratulations');
  }
}

function resetChoices() {
  const choices = document.querySelectorAll('#choices button');
  choices.forEach(choice => {
    choice.classList.remove('highlighted');
    choice.disabled = false;
  });
}

function getRandomElements(arr, num) { //getting random elements from an array
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);

}

displayQuestion();  // Goes back to initial display
