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

var correctAnswers=9;
var unanswerQuestions=3;
var incorrectAnswers=2;

var counter= 5;

var intervalId;

var appendDiv = $("#mainwrapper")

var sumbitScoreCheck= false;


// ********Render OBJ's to screen*******

// Create fucntion for looping through elemetns that Calls the HMTL 

function renderQuestions(){
  for (var i = 0; i < qAndABank.length; i++) 
  {
      // create a new div, ID question + 1;
      var newDiv= $("<div>");
      newDiv.html("<h1>" + qAndABank[i].question + "</h1>");
    for (var j = 0; j < qAndABank[i].answer.length; j++) 
    {
      var newInput = $("<input type='radio'>"+qAndABank[i].answer[j]+"<br>");
      newInput.attr("id", "radio-btn");
      newInput.val("q" + i + "a" + j);
      newDiv.append(newInput);
      $("br").removeAttr("id", "radio-btn")
    }
    $("#mainwrapper").append(newDiv);
  }
};

function renderSubmit(){
  var newBtn= $("<button>");
  newBtn.html("submit");
  newBtn.attr("id", "submit");
  $("#mainwrapper").after(newBtn);
}

// *******TIMER*******

function start() {
  intervalId = setInterval(count, 1000);
  renderQuestions();
  renderSubmit();
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
    newDivAnswers.html(1);
    $("#mainwrapper").replaceWith(newDivAnswers);
    console.log(newDivAnswers);

    var newDivUnanswered = $("<div>");
    newDivUnanswered.html(2);
    $("#mainwrapper").replaceWith(newDivUnanswered);
    console.log(newDivUnanswered);

    var newDivIncorrect = $("<div>");
    newDivIncorrect.html(3);
    $("#mainwrapper").replaceWith(newDivIncorrect);
    console.log(newDivIncorrect);
    alert("connected");

    var sumbitScoreCheck = true;
}

function startGame(){
  var newButton= $("<button>");
  newButton.html("start");
  newButton.attr("id","start")
  $("#appendStart").append(newButton);

}

function(countChecked){
  
}

// console.log(counter);

// ******GAME SCORE LOGIC********


// ******* MAIN Game *********
$(document).ready(function() {
  
  startGame();

$("#start").one("click", start);

$( "input[type=checkbox]" ).on( "click", countChecked );

$("#submit").on("click", function(){
  alert("connected");
});

  console.log(sumbitScoreCheck);

});





 








