// Displaying questions and answers 
const question = ['What is the largest planet in our solar system?', 'Which country is famous for its sushi cuisine?', 'What is the capital of Canada?', 'Who painted the Mona Lisa?', 'In Greek mythology, who is the god of thunder?', 'What is the largest ocean on Earth?', 'Who is known as the "King of Pop"?', 'What is the name of the fictional wizarding school in the "Harry Potter" series?', 'In which sport would you perform a slam dunk?', 'Who co-founded Microsoft along with Bill Gates?', 'What is the value of π (pi) to two decimal places?', 'Who wrote the play "Romeo and Juliet"?', 'In which year did Christopher Columbus reach the Americas?', 'Which element has the chemical symbol "O"?', 'What is the capital of France?'];

const answers = [['Mars', 'Venus', 'Jupiter', 'Saturn'], ['Italy', 'Japan', 'Mexico', 'India'], ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'], ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'], ['Poseidon', 'Hades', 'Zeus', 'Apollo'], ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], ['Madonna', 'Prince', 'Michael Jackson', 'Elvis Presley'], ['Neverland Academy', 'Hogwarts School of Witchcraft and Wizardry', 'Starfleet Academy', 'Xaviers School for Gifted Youngsters'], ['Soccer', 'Basketball', 'Tennis', 'Golf'], ['Steve Jobs', 'Paul Allen', 'Larry Page', 'Mark Zuckerberg'], ['3.14', '2.71', '1.61', '4.20'], ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'], ['1492', '1588', '1776', '1620'], ['Oxygen', 'Gold', 'Silver', 'Iron'], ['Rome', 'Berlin', 'Paris', 'Madrid']];
const correctAnswers = [2, 1, 0, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 2];
let currentQuestionIndex = 14;
let fiftyFiftyUsed = false; // Tracks if 50/50 lifeline has been used

/* To reset game back to start */
function resetGame() {
  shuffleArrays(question, answers, correctAnswers); //Shuffle all elements 
  currentQuestionIndex = question.length - 1; // Replacing 0 to set a highlight start from bottom to top
  displayQuestion();
  highlightTableRow();
  fiftyFiftyUsed = false; //Reset the 50/50 lifeline availability
}
/* Setting a highlight to the table */
function highlightTableRow() {
  const tableRows = document.querySelectorAll('table tr');
  tableRows.forEach(row => row.classList.remove('highlighted'));
  tableRows[currentQuestionIndex].classList.add('highlighted');
}

function shuffleArrays(...arrays) {
  const length = arrays[0].length;

  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    for (const array of arrays) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
/* Welcoming message to the user once their name is entered */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('startForm').addEventListener('submit', (event) => {
      event.preventDefault(); 
      const userName = document.getElementById('user').value; // Get the user's name from the input field
      alert(`Hello, ${userName}! Let the game begin!`);
      startContainer.style.display = 'none'; // To hide the start form after name input
      resetGame(); 
  });
});

/* displayig a question and answer options */
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

/* Checks if the selected answer is correct */
function checkAnswer(choiceIndex) {
  if (choiceIndex === correctAnswers[currentQuestionIndex]) {
    // Correct answer
    nextQuestion();
  } else {
    // Incorrect answer
    alert('Wrong answer! Game over.');
    resetGame(); // Reset the game when it's over
  }
}

/* a 50/50 button to remove two incorrect answers */
function useFiftyFifty() {
  if (!fiftyFiftyUsed) {
  const choices = document.querySelectorAll('#choices button');
  const correctAnswerIndex = correctAnswers[currentQuestionIndex];

  const incorrectIndices = [...Array(choices.length).keys()] //To randomly select two incorrect options 
    .filter(index => index !== correctAnswerIndex);
  const randomIncorrectIndices = getRandomElements(incorrectIndices, 2) //Selects two random incorrect options 

  choices[randomIncorrectIndices[0]].style.textDecoration = 'line-through'; 
  choices[randomIncorrectIndices[1]].style.textDecoration = 'line-through';
  choices[randomIncorrectIndices[0]].disabled = true;
  choices[randomIncorrectIndices[1]].disabled = true;

  fiftyFiftyUsed = true;
  } else {
    document.getElementById('buttonId').classList.remove('highlighted');
    document.getElementById('buttonId').disabled = false; //disables the button until the rest of the game
  }
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
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    displayQuestion();
    highlightTableRow();
  } else if (currentQuestionIndex === -1){
    alert ('You Won! Congratulations');
    resetGame(); //Reset the game after completing 
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
highlightTableRow();
displayQuestion();  // Goes back to initial display
