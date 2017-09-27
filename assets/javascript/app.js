var qAndABank= [
    {
      question: "object 1 question 1",
      answer: ["this is answer1","this is answer2","this is answer3","this is answer4"],
      correctAnswer: 1,
    },
    {
      question: "object 2 question 1",
      answer: ["this is answer1","this is answer2","this is answer3","this is answer4"],
      correctAnswer: 1,
    },
    {
      question: "object 3 question 1",
      answer: ["this is answer1","this is answer2","this is answer3","this is answer4"],
      correctAnswer: 1,
    }
]

var correctAnswers;
var unanswerQuestions;
var incorrectAnswers;

var counter= 5;
var intervalId;

var appendDiv = $("#mainwrapper")


// ********Render OBJ's to screen*******
// Create fucntion for looping through elemetns that Calls the HMTL 

function renderQuestions(){
  qAndABank.forEach(function(questionObj) {
    var questionsForUser = renderToScreen(questionObj);
    $("#questionContainer").append(questionsForUser);
  })
};


// // Need to have a function for rendering HTML ONLY
function renderToScreen(questionObj){
  var questionHeader= document.createElement("h1");
  var createRadioBtn = document.createElement("INPUT");
  createRadioBtn.setAttribute("type","radio");
  console.log(questionObj.question);
  questionHeader.textContent= questionObj.question;
  $("#questionContainer").append(questionHeader);
  questionHeader.addClass = "question";
  createRadioBtn.addClass= "answer";
// for( var i = 0; ){}// for each answr add to y.appendChild z
// in FOR loop if variable i === correctAnswer index in object, then append correct
}

renderQuestions();

// This window will prompt the user to start the game and when the user click's Start the timer will start to count down.

// *******TIMER*******
$("#timer").on("click", start)


function start() {
  intervalId = setInterval(count, 1000);
}

function count(){
  counter--;
  console.log(counter);

  $("#timeDisplay").html("<p>" + counter + "</p>")

  if (counter === 0){
    stopTimer();
    alert("game over");
  }

}

function stopTimer(){
  clearInterval(intervalId);
}

console.log(counter);

// ******GAME SCORE LOGIC********

// Game score function- called within timer FUNCTION

// conditional- If radio button is checked && value is correct, else if correct answers ++, if radio button is check incorrect++, else unanswered ++





