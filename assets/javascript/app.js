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
];

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
      newDiv.append(newInput);
    }
    $("#mainwrapper").append(newDiv);
  }
  var newBtn= $("<button>");
  newBtn.attr("#submit");
  newBtn.text("Submit");
  $("#mainwrapper").append(newBtn);
};

// add listener for page submit

// *******TIMER*******

function start() {
  intervalId = setInterval(count, 1000);
  renderQuestions();
}

function count(){
  counter--;

  $("#timeDisplay").html("<p>" + counter + "</p>")

  if (counter === 0){
    stopTimer();
  }
}

function stopTimer(){
  clearInterval(intervalId);
}

function scoreRender(){
    var newDivAnswers = $("<div>");
    newDivSubmit.html(correctAnswers);
    $("formId").html(newDivAnswers);

    var newDivUnanswered = $("<div>");
    newDivSubmit.html(unanswerQuestions);
    $("formId").html(newDivUnanswered);

    var newDivIncorrect = $("<div>");
    newDivSubmit.html(incorrectAnswers);
    $("formId").html(newDivIncorrect);
  }

function startGame(){
  var newButton= $("<button>");
  newButton.html("start");
  newButton.attr("id","timer")
  $("#appendStart").append(newButton);
}
// onclick event to log score calculator

// $("input").on("click", function(){
  
//   // for loop to count all the questions

//   // check if question is checked
//   // if checked look at if corrrect OR false
//   // Else increase unanswered ++
//   if(value === qAndABank.correctAnswer){
//     correctAnswers++
//   }
//   else {
//     incorrectAnswers++
//   }


console.log(counter)

// ******GAME SCORE LOGIC********

// Game score function- called within timer FUNCTION
// if (qAndABank[i].correctAnswer===this.val)

// conditional- If radio button is checked && value is correct, else if correct answers ++, if radio button is check incorrect++, else unanswered ++

// ******* MAIN Game *********
$(document).ready(function() {
  startGame();


  $("#timer").on("click", start);

  $("#submit").on("click", scoreRender);

});









