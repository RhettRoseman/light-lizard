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
const quizContainer = document.getElementById('quiz');
const resultsConatiner = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

buildQuiz();

submitButton.addEventListener('click', showResults);

var questions = [
    {
        question: "Which of the following is not a data type in JavaScript? ",
        answers: {
            A: "Boolean",
            B: "String",
            C: "Number",
            D: "Character"
        },
        correctAnswer: "D"
        
    }, 
     

    // {
    //     question: "",
    //     answers: {
    //         A: "",
    //         B: "",
    //         C: "",
    //         D: "",
    //     }
         
    // }, 
    // correctAnswer: "",
    // {
    //     question: ""
    //     answers: {
    //         A: "",
    //         B: "",
    //         C: "",
    //         D: "",
    //     }
         
    // }, 
    // correctAnswer: "",
    // {
    //     question: "",
    //     answers: {
    //         A: "",
    //         B: "",
    //         C: "",
    //         D: "",
    //     }
         
    // }, 
    // correctAnswer: "",
function buildQuiz(){
    // variable to store the HTML output
    
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = ["A", "B", "C","D"];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }]

  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // the code we want to run for each question goes here
  });
  quizContainer.innerHTML = output.join('');

// Event listeners
submitButton.addEventListener('click', showResults);