var qAndABank= [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answer: ["javascript","script","scripting","js"],
      correctAnswer: "q0a0",
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      answer: ["The body section","The head section","Both the head section and the body section are correct","Neither are correct"],
      correctAnswer: "q1a2",
    },
    {
      question: "How many days did it take to create Javascript?",
      answer: ["5 days","35 days","10 days","60 days"],
      correctAnswer: "q2a1", 
    },
    {
      question: "How do you create a function in JavaScript?",
      answer: ["function myFunction()","function:myFunction()","You can not create functions in javascript","function = myFunction()"],
      correctAnswer: "q3a0", 
    },
    {
      question: "How to write an IF statement in JavaScript?",
      answer: ["if i = 5","if i == 5 then","if i = 5 then","if (i == 5)"],
      correctAnswer: "q4a3", 
    }
];

var correctAnswers=0;
var incorrectAnswers=0;
var userHitSubmitBtn=false;

var counter= 45;

var intervalId;

var appendDiv = $("#mainwrapper")



// ********Functions*******

function start() {
  intervalId = setInterval(count, 1000);
  renderQuestions();
  renderSubmit();
}

// Function called via document.ready. Displays start button to the user.
function startGame(){
  var newButton= $("<button>");
  newButton.html("start");
  newButton.attr("id","start")
  $("#appendStart").append(newButton);

}

// Function invoked via Start function. Creats and displays submit button. 
function renderSubmit(){
  var newBtn= $("<button>");
  newBtn.html("Submit");
  newBtn.attr("type","submit");
  newBtn.attr("value","Submit");
  newBtn.attr("form","formWrapper");
  newBtn.attr("id","submit");
  $("#appendSubmit").append(newBtn);
}

// Funciton called by Start function. Loops through and displays all questions to user and contains its object position, which will be matched at the end of the game to determine if user selected correct answers. 
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
      newInput.attr("checked");
      newInput.val("q" + i + "a" + j);
      newDiv.append(newInput);
      $("br").removeAttr("class", "radio-btn");
      $("br").removeAttr("name", "radio");
      // $("br").removeprop("checked", "false");
    }
    $("#mainwrapper").append(newDiv);
  }
};

// function called by Start. Count Func decrements count and contains logic for when to stop timer and render score if the user doesn't click the sumbit button.
function count(){
  counter--;

  $("#timeDisplay").html("<p>" + counter + "</p>")

  if (counter === 0 && userHitSubmitBtn === false){
    stopTimer();
    scoreRender();
  }
  else if(counter === 0 && userHitSubmitBtn === true){
    stopTimer();
  }
  else if(userHitSubmitBtn === true){
    stopTimer();
  }
}

function stopTimer(){
  clearInterval(intervalId);
}

function scoreRender(){
    // Display correct answer count to user
    var newDivAnswers = $("<div>");
    newDivAnswers.attr("id", "correct-answer")
    newDivAnswers.html("You have "+ correctAnswers + " correct answers ");
    $("#mainwrapper").replaceWith(newDivAnswers);
    console.log(newDivAnswers);

    // Display incorrect answer count to user
    var newDivIncorrect = $("<div>");
    newDivIncorrect.html("You have "+ incorrectAnswers + " incorrect answers");
    $("#correct-answer").append(newDivIncorrect);
    console.log(newDivIncorrect);

    // // Display seconds left to user
    var newDivTimer = $("<div>");
    newDivTimer.html("Time remaining "+ counter + " seconds");
    $("#correct-answer").append(newDivTimer);
    console.log(newDivIncorrect);

};

// ******* MAIN Game *********
  
  $(document).ready(function() {
    
    //renders start button 
    startGame();

    // Once start is clicked, the start function will be called. 
    // Start function calls 3 functions that: start timer, render questions/answers and submit button.
    $("#start").one("click", start);

    // This function is meant to capture the values on a radio and pass to an array. That way I am able to provide answers to the user even if they don't submit the form. 
    $('input').change(function(){
      var result = $(this).val();
      console.log(this);
      console.log(result);
    })

    // The function is mean to render the scores when user clicks submit button
    // ********  NOT WORKING  ********
    $("#formWrapper").submit(function(event){

      event.preventDefault();

      var values = $(this).serialize();
 
      var valToStr= values.split("&");

      var answersArr=[];

      for( var i = 0; i <valToStr.length; i++){
        var splitTemp =valToStr[i].split("=");
        answersArr.push(splitTemp[1]);
      }

       for (var i = 0; i < qAndABank.length; i++){
        console.log(qAndABank[i].correctAnswer);
        console.log(answersArr[i]);
          if (qAndABank[i].correctAnswer === answersArr[i]){ 
            correctAnswers++;
            console.log(correctAnswers);
          }
          else {
            incorrectAnswers++;
            console.log(incorrectAnswers);
          }

      }
      userHitSubmitBtn=true;

      scoreRender();
    });

  });






 








