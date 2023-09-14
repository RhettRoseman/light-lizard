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
const quizDiv = document.getElementById('quiz');
const resultsDiv = document.getElementById('results');
const submitButton = document.getElementById('submit')

function buildQuiz(){}

function showResults(){}

buildQuiz();

submitButton.addEventListener('click', showResults);

const questions = [
    {
        question: ""
        answers: {
            A: "",
            B: "",
            C: "",
            D: "",
        }
         
    }, 
    correctAnswer: ""
    {
        question: ""
        answers: {
            A: "",
            B: "",
            C: "",
            D: "",
        }
         
    }, 
    correctAnswer: ""
    {
        question: ""
        answers: {
            A: "",
            B: "",
            C: "",
            D: "",
        }
         
    }, 
    correctAnswer: ""
    {
        question: ""
        answers: {
            A: "",
            B: "",
            C: "",
            D: "",
        }
         
    }, 
    correctAnswer: ""
    {
        question: ""
        answers: {
            A: "",
            B: "",
            C: "",
            D: "",
        }
         
    }, 
    correctAnswer: ""

]