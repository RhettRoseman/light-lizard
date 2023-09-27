
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
      document.getElementById("count").style= "color:green;"
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

     for (let index = 0; index < question[0].answers.length; index++){
      let button = document.createElement("button");
      button.textContent = question[0].answers[index];
      console.log(document.getElementsByClassName("button-holder"));
      document.getElementsByClassName("button-holder")[0].appendChild(button); 
     }
     pEl.textContent ;
    }
    
    function openNxt(){
      document.getElementsByClassName("button-holder")[0].innerHTML="";
      let pElement = document.getElementById("q2");
    
      pElement.textContent = question[1].title;
 
      for (let index = 0; index < question[1].answers.length; index++) {
       let button =   document.createElement("button");
       button.textContent = question[1].answers[index];
       console.log( document.getElementsByClassName("button-holder")); 
      // [div.button-holder]
       document.getElementsByClassName("button-holder")[0].appendChild(button);
      }
      pElement.textContent ;
     }
    // //  function openNxt1(){
    //   let pElement = document.getElementById("q2");
    
    //   pElement.textContent = question[2].title;
 
    //   for (let index = 0; index < question[2].answers.length; index++) {
    //    let button =   document.createElement("button");
    //    button.textContent = question[2].answers[index];
    //    console.log( document.getElementsByClassName("button-holder")); 
    //   //  [div.button-holder]
    //    document.getElementsByClassName("button-holder")[0].appendChild(button);
       
    //   }
    //   pElement.textContent ;
    //  }
 

const question = [
    {
    title: "Which of the following is not a data type in JavaScript? ",
    answers: [ "Boolean", "String", "Number", "Character"],
    //correct array[3],
    
    },

    {
      title: "What is 2 + 2?",
       answers: ["2","5","4","7"],
      //correct array [3]
      },
   {
        title: "What's the tallest tree?",
        answers: ["Redwood", "Sequoia", "Oak", "Hickory"],
        //correct array[0]
  },
       ]



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
    
  
    
    
