var tempArr = [
  {
  food: "taco",
  vegan: false
},
{
  food: "burrito",
  vegan: false
},
{
  food: "salsa",
  vegan: true
},
]
tempArr[2].vegan
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
function startTimer(){
    var counter = 120;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }
  function start()
  {
      document.getElementById("count").style="color:green;";
      startTimer();
      
  };
function createDiv(){
let div = document.createElement("div");
div.append(question[0]);
console.log(question[0])
}

function openArray(){
    let pEl = document.getElementById("question");
    
     pEl.textContent = question[0].title;

     for (let index = 0; index < question[0].answers.length; index++) {
      let button =   document.createElement("button");
      button.textContent = question[0].answers[index];
      console.log( document.getElementsByClassName("button-holder"))
      document.getElementsByClassName("button-holder")[0].appendChild(button);
      
     }
     pEl.textContent 

} 
// question[0]
// question array
const question = [
    {
    title: "Which of the following is not a data type in JavaScript? ",
    answers: [ "Boolean", "String", "Number", "Character"],
    //correct array[3],
    }
    // title: "",
]
// function vstar () {
//    var start = document.getElementById('start')
//     start.addEventListener("click", start())
    
// }


function showQuestion (){
    document.getElementsById("question").textcontent = "Which of the following is not a data type in JavaScript ?"
} 
// for( var i = 0 ; i < question.length; i++) {
//  var pEl = document.getElementsByClassName("answer")
// pEl.textcontent = question++ ;
//   document.write("This is the third line.") 

// ****************
    


    // return question[0].title[0];
    // function log() {
    //     document.getElementById('questions-container')
    //     questio
    //     // document.write(question1);
    // document.write(question);  
    //   document.write("<br>");    
    //   document.write("This is the second line which is divided using break line.").getElementById("li");  
    //   document.write("<br>");    
    //   document.write("This is the third line.")  
// const question = document.getElementById('question')
 
//     }]
// // // Dom Element 


    
//     function showQuestion(q) {
//         let titleDiv = document.getElementById('title').textContent= question

//     }
    
//     showQuestion();
    
//     {
//     question: "What is the difference between “var” and “let” keywords in JavaScript?",
//     answers: [
//     { text: "They are interchangeable", correct: false },
//     { text: "var” variables cannot be reassigned, while “let” variables can", correct: false },
//     { text: " “let” variables have block scope, while “var” variables have function scope", correct: true },
//     { text: " “var” and “let” both refer to constant variables", correct: false },
//     // correct answer array[2]
//     ]

//     },
//     {
//     question: "Which of the following is not a comparison operator in JavaScript?",
//     answers: [
//     { text: " ==", correct: false },
//     { text: "===", correct: false },
//     { text: "!=", correct: false },
//     { text: "=<", correct: true },
//     // corrrect answer array[4]
//     ]
//     }
    
    
