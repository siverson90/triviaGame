var qAndABank= [
    {
      question: "object 1 question 1",
      answer: ["this is answer1 obj1","this is answer2obj1","this is answer3 obj1","this is answer4 obj1"],
      correctAnswer: 1,
    },
    {
      question: "object 2 question 1",
      answer: ["this is answer1 obj2","this is answer2 obj2","this is answer3 obj2","this is answer4 obj2"],
      correctAnswer: 1,
    },
    {
      question: "object 3 question 1",
      answer: ["this is answer1 obj3","this is answer2 obj3","this is answer3 obj3","this is answer4 obj3"],
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
  // Set question and answer(s) variables
  var questionHeader= document.createElement("h1");
  var createRadioBtn = document.createElement("INPUT");
  createRadioBtn.setAttribute("type","radio");

  // give class of questions to the questions
  questionHeader.className = "question";
  // Add content from parameter to the content of H1's which is the question.
  questionHeader.textContent= questionObj.question;
  // Append the question H1 to the div the wrapper all Q's and A's. 
  $("#questionContainer").append(questionHeader);
  
  // give class of answer to all answers, BUT need to a way to identify which answer is correct
  createRadioBtn.className= "answer";

  //For loop should take each question in a give object and append 4 potential answers AND identify which answer is the correct one, with a VALUE attribute.
  // console.log(questionObj);
  // console.log(questionObj.question);
  // console.log(questionObj.answer);

for( var i = 0; i < questionObj.answer.length; i++){
  console.log(questionObj.answer[i]);
  // createRadioBtn.textContent = questionObj.question.answer[i];
  // $("#question").append(createRadioBtn);
  }
// for each answr add to y.appendChild z
// in FOR loop if variable i === correctAnswer index in object, then append correct
};

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





