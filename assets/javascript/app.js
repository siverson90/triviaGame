var qAndABank= [
    {
      question: "object 1 question 1",
      answer: ["this is answer1 obj 1","this is answer2 obj1","this is answer3 obj1","this is answer4 obj1"],
      correctAnswer: "q0a1",
    },
    {
      question: "object 2 question 1",
      answer: ["this is answer1 obj 2","this is answer2 obj2","this is answer3 obj2","this is answer4 obj2"],
      correctAnswer: "q0a3",
    },
    {
      question: "object 3 question 1",
      answer: ["this is answer1 obj3","this is answer2 obj3","this is answer3 obj3","this is answer4 obj3"],
      correctAnswer: "q0a3", 
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
  for (var i = 0; i < qAndABank.length; i++) {
      // create a new div, ID question + 1;
      var newDiv= $("<div>");
      newDiv.html("<h1>" + qAndABank[i].question + "</h1>");
    for (var j = 0; j < qAndABank[i].answer.length; j++) {
      var newInput = $("<input type='radio' name='test'>"+qAndABank[i].answer[j]+"<br>");
      newInput.val("q" + i + "a" + j);
      // console.log(qAndABank[i].answer[j]);
      // newInput.text(qAndABank[i].answer[j]);
      newDiv.append(newInput);
    }
    $("#mainwrapper").append(newDiv);
  }
  var newBtn= $("<button>");
  newBtn.
};

// add listener for page submit

// *******TIMER*******
$("#timer").on("click", start)


function start() {
  intervalId = setInterval(count, 1000);
  renderQuestions();
}

function count(){
  counter--;

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
// if (qAndABank[i].correctAnswer===this.val)

// conditional- If radio button is checked && value is correct, else if correct answers ++, if radio button is check incorrect++, else unanswered ++

// ******* MAIN Game *********
$( document ).ready(function() {
  var newButton= $("<button>");
  newButton.html("start");

  $("#timer").on("click", start);

  $("input").on()
});








