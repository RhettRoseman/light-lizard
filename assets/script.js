
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
var startBtn = document.getElementById('start'); // targets start button
var scoreBoard = document.getElementById('userScore');
var label = document.createElement("label");
var score = 0;
var q = 0;
let pEl = document.getElementById("question");
var quest = document.getElementById('question-holder');
// let thisBtn = document.getElementById("button-holder").innerHTML = "";

//start timer function 
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
      document.getElementById("textandquestion").innerHTML = "Times up!! How did you do?";
    }
    if (quest === ""){
      clearInterval(counter);
      document.getElementById("textandquestion").innerHTML = "";
    }

  }, 1000);
}
function start() {
  document.getElementById("count").style = "color:green;";
  startTimer();
  document.getElementById('text-area').innerHTML = "";


};


// function userScore() {
//   scoreBoard.innerHTML = "score";
//   if (selectedAnswer === 'correct') {
//     userScore = score + 1; // increases scoreCounter by 

//     // sets the element text to the current score
//     scoreCounterElement.innerText = scoreCounter;
//   }
//   console.log('Increase Score')
// }

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
  {
  title: "",
  }
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
// QUESTION FUNCTIONS 
// Open Question 0
// function openArray() {
//   // let pEl = document.getElementById("question");

//   pEl.textContent = question[0].title;

//   for (let index = 0; index < question[0].answers.length; index++) {
//     let button = document.createElement("button");
//     button.textContent = question[0].answers[index];
//     console.log(document.getElementsByClassName("button-holder"));
//     document.getElementsByClassName("button-holder")[0].appendChild(button);
//     button.addEventListener('click', function () {
//       if (button.innerText == question[0].correctAnswer) {
//         console.log('correct');
//         // scoreBoard.innerHTML = score;
//         console.log(score);
//         document.getElementById("btnholder").innerHTML = "";
//         score += 1;
//         console.log(score);
//         scoreBoard.innerHTML = score;
//         nextQuestion()
//       }
//      else (
//       console.log('incorrect')
//       console.log()
//      )
// Open questions until end
function nextQuestion() {
  pEl.textContent = question[q].title;

  for (let index = 0; index < question[q].answers.length; index++) {

    let button = document.createElement("button");
    // button.textContent = "";
    button.textContent = question[q].answers[index];
    // console.log(document.getElementById("btnhlder2"));
    document.getElementById("btnhlder2").appendChild(button);
    button.addEventListener('click', function () {
      if (button.innerText == question[q].correctAnswer) {
        console.log(score);
        document.getElementById('btnhlder2').innerHTML = "";
        score += 1;
        console.log(score);
        scoreBoard.innerHTML = score;
        q += 1;
        nextQuestion();
      }
      else {
        console.log('incorrectAnswer')
        document.getElementById("btnhlder2").innerHTML = "";
        scoreBoard.innerHTML = score;
        console.log(score);
        scoreBoard.innerHTML = score;
        q += 1;
        nextQuestion();
      }
      if (question[3]){
      console.log(quizover);
    }
  })}};
