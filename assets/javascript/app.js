var qAndABank= [
    {
      question: "Which option is not an array function?",
      answer: ["this is answer1 obj 1","this is answer2 obj1","this is answer3 obj1","this is answer4 obj1"],
      correctAnswer: "q0a1",
    },
    {
      question: "What is the correct syntax for accessing an object?",
      answer: ["this is answer1 obj 2","this is answer2 obj2","this is answer3 obj2","this is answer4 obj2"],
      correctAnswer: "q0a3",
    },
    {
      question: "How many days did it take to create Javascript?",
      answer: ["5 days","35 days","10 days","60 days"],
      correctAnswer: "q0a3", 
    }
];

var correctAnswers=9;
var unanswerQuestions=3;
var incorrectAnswers=2;

var counter= 5;

var intervalId;

var appendDiv = $("#mainwrapper")



// ********Functions*******

function start() {
  intervalId = setInterval(count, 1000);
  renderQuestions();
  renderSubmit();
}

function startGame(){
  var newButton= $("<button>");
  newButton.html("start");
  newButton.attr("id","start")
  $("#appendStart").append(newButton);

}

function renderSubmit(){
  var newBtn= $("<button>");
  newBtn.html("Submit");
  newBtn.attr("type","submit");
  newBtn.attr("value","Submit");
  newBtn.attr("form","formWrapper");
  newBtn.attr("id","submit");
  $("#appendSubmit").append(newBtn);
}

function renderQuestions(){
  for (var i = 0; i < qAndABank.length; i++) 
  {
      // create a new div, ID question + 1;
      var newDiv= $("<div>");
      newDiv.html("<h1>" + qAndABank[i].question + "</h1>");
    for (var j = 0; j < qAndABank[i].answer.length; j++) 
    {
      var newInput = $("<input type='radio'/>"+qAndABank[i].answer[j]+"<br>");
      newInput.attr("class", "radio-btn");
      newInput.attr("name", "radio" + i );
      newInput.val("q" + i + "a" + j);
      newDiv.append(newInput);
      $("br").removeAttr("class", "radio-btn")
      $("br").removeAttr("name", "radio")
    }
    $("#mainwrapper").append(newDiv);
  }
};

function count(){
  counter--;

  $("#timeDisplay").html("<p>" + counter + "</p>")

  if (counter === 0){
    stopTimer();
    // scoreRender();
  }
}

function stopTimer(){
  clearInterval(intervalId);
}

function scoreRender(){
    
    var newDivAnswers = $("<div>");
    newDivAnswers.attr("id", "correct-answer")
    newDivAnswers.html("You have "+ correctAnswers + " correct answers ");
    $("#mainwrapper").replaceWith(newDivAnswers);
    console.log(newDivAnswers);

    var newDivUnanswered = $("<div>");
    newDivUnanswered.html("You have "+ unanswerQuestions + " unanswered questions");
    $("#correct-answer").append(newDivUnanswered);
    console.log(newDivUnanswered);

    var newDivIncorrect = $("<div>");
    newDivIncorrect.html("You have "+ incorrectAnswers + " incorrect answers");
    $("#correct-answer").append(newDivIncorrect);
    console.log(newDivIncorrect);

};

// Make function for conditional 

// function submitBtnListener(){
  
//   console.log(scoreRender);
// }

// ******* MAIN Game *********
  
  $(document).ready(function() {
    
    //renders start button 
    startGame();

    // Once start is clicked, the start function will be called. 
    // Start function calls 3 functions that: start timer, render questions/answers and submit button.
    $("#start").one("click", start);

    // This function is meant to listen for clicks on radio buttons and use a conditional to determine if the answer was correct or incorrect or unanswered
    // ********  May not need  ********
   //  $("input[type='radio']").on("click",function(){
   //    $(this).attr("value", "true");
   //    console.log(this);
   // })

    // The function is mean to render the scores when user clicks submit button
    // ********  NOT WORKING  ********
    $("#formWrapper").submit(function(event){

      event.preventDefault();

      var values = $(this).serialize();

      scoreRender();
 
      console.log(values);
    });

  });






 








