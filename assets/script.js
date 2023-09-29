
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score'
//starts timer
// var textArea = document.getElementById('text-area').innerHTML = "";
var startBtn = document.getElementById('start');
var scoreBoard = document.getElementById('userScore');
var score = 0;
function startTimer() {
  var counter = 120;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      clearInterval(counter);
    }
  }, 1000);
}
function start() {
  document.getElementById("count").style = "color:green;";
  startTimer();
  document.getElementById('text-area').innerHTML= "";


};


  function userScore() {
  scoreBoard.innerHTML= "score";
    if (selectedAnswer === 'correct') {
        userScore = score + 1; // increases scoreCounter by 

        // sets the element text to the current score
        scoreCounterElement.innerText = scoreCounter; 
    }
    console.log('Increase Score')
} 


const question = [
  {
    title: "Which of the following is not a data type in JavaScript? ",
    answers: ["Boolean", "String", "Number", "Character"],
    //correct array[3],
    correctAnswer: "Character",
  },
  {
    title: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    answers: ["Position", "Window", "Standard", "Location"],
    // correct array[1]
    correctAnswer: "Window",
  },
  {
    title: "Which of the following scoping type does JavaScript use?",
    answers: ["Sequential", "Segmental", "Lexical", "Literal"],
    //correct array[2]
    correctAnswer: "Lexical",
  },

]
// function vstar () {
//    var start = document.getElementById('start')
//     start.addEventListener("click", start())

// }
function createDiv() {
  let div = document.createElement("div");
  div.append(question[0]);
  console.log(question[0])
}
// function that shows the questions
function openArray() {
  let pEl = document.getElementById("question");

  pEl.textContent = question[0].title;

  for (let index = 0; index < question[0].answers.length; index++) {
    let button = document.createElement("button");
    button.textContent = question[0].answers[index];
    console.log(document.getElementsByClassName("button-holder"));
    document.getElementsByClassName("button-holder")[0].appendChild(button);
    button.addEventListener('click', function () {
      if (button.innerText == question[0].correctAnswer) {
        console.log('correct');
        scoreBoard.innerHTML = + 1;


      }
      else (console.log('incorrectAnswer')
      )
    })
  } 

};

function nextQuestion(){

}

