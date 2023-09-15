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
// THEN I can save my initials and my score
// USED FOR STARTER CODE https://www.sitepoint.com/simple-javascript-quiz/#:~:text=For%20each%20question%2C%20we'll,in%20a%20element.
// const quizContainer = document.getElementById('quiz');
// const resultsConatiner = document.getElementById('results');
// const submitButton = document.getElementById('submit');


// function buildQuiz(){}// function showResults(){}
// submitButton.addEventListener('click', showResults);
//Questions that will be put througn the system

// questions to be asked 
const questions = [
    {
        question: "Which of the following is not a data type in JavaScript? ",
        answers: [
            {text: "Boolean", correct:false},
             {text: "String", correct:false},
             {text:"Number", correct:false},
             {text:"Character", correct:true},
        
        ]
    }, 
     

    {
        question: "What is the difference between “var” and “let” keywords in JavaScript?",
        answers: [
             {text: "They are interchangeable", correct: false},
             {text: "var” variables cannot be reassigned, while “let” variables can",  correct: false},
             {text:" “let” variables have block scope, while “var” variables have function scope",correct: true},
             {text:" “var” and “let” both refer to constant variables", correct: false},
        ]
         
    }, 
    {
        question: "Which of the following is not a comparison operator in JavaScript?",
        answers: [
             {text:" ==", correct:false},
            {text:"===", correct:false},
             {text:"!=", correct:false},
             {text:"=<",correct:true},
        ]
        }
];

// ids from the html turned in to const variables
const questionElement = document.getElementById("question");
const answerButtons =  document.getElementById("answer-buttons");
const nextButton = document.getElementById("Submit-btn")


let currentQuestionIndex = 0;
let score = 0;

//keeps users score
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "submit";
    showQuestion();
}
// shows next question and displays answers 
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    //displays answer 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("Submit-btn");
        answerButtons.appendChild(button);
    });
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "submit";
    showQuestion();
}
//add event listener 
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("answerButtons");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}
{
    button.dataset.correct = answer.correct;
}        if(answer.correct ){
        button.dataset.correct = answer.correct
}
        button.addEventListener("click", selectAnswer);
    
// // removes all of the previous answers
// function resetState(){
//     submitButton.style.display = "none"
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectanswer(e){
//     const selectedButton = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedButton.classlist.add("correct");
// }else{
//     selectedButton.classList.add("incorrect");
// }
// button,disabled = true;
// Array.from(nserButtons.children).forEach(button => {
//     if(button.dataset.correct === "true"){
//         button.classList.add("correct");
//     }
// })
// }
startQuiz();

// function buildQuiz(){
//     // variable to store the HTML output
//     const output = [];
  
//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {
  
//         // variable to store the list of possible answers
//         const answers = ["A", "B", "C","D"];
  
//         // and for each available answer...
//         for(letter in currentQuestion.answers){
  
//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }
  
//         // add this question and its answers to the output
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join('')} </div>`
//         );
//       }
//     )
  
//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//   }

//   myQuestions.forEach( (currentQuestion, questionNumber) => {
//     // the code we want to run for each question goes here
//   });
//   quizContainer.innerHTML = output.join('');

// Event listeners
submitButton.addEventListener('click', showResults);