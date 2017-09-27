var qAndABank= [
    {
      question: "object 1 question 1",
      answer: ["tis is answer1","tis is answer2","tis is answer3","tis is answer4"],
      correctAnswer: 1,
    },
    {
      question: "object 2 question 1",
      answer: ["tis is answer1","tis is answer2","tis is answer3","tis is answer4"],
      correctAnswer: 1,
    },
    {
      question: "object 3 question 1",
      answer: ["tis is answer1","tis is answer2","tis is answer3","tis is answer4"],
      correctAnswer: 1,
    }
]

var correctAnswers;
var unanswerQuestions;
var incorrectAnswers;


var appendDiv = $("#mainwrapper")



// Create fucntion for looping through elemetns that Calls the HMTL 

function renderQuestions(){
  qAndABank.forEach(function(questionObj) {
    var questions = renderToScreen(questionObj);
    $("#questionContainer").append(questions);
})
};


// Need to have a function for rendering HTML ONLY
function renderToScreen(questionObj){
  console.log(questionObj);
  var newDiv= document.createElement("div");
  newDiv.className = "question";
  newDiv.innerText = questionObj.question;
  for( var i = 0; i < questionObj.answer.length;i++){
    console.log(questionObj.answer.length);
  }
  // inputs maybe need to do a for loop
  // target questionObj.answer

  return newDiv;

  // add a child for H1
  // add childinput 1

  // return varible that is the element
}

renderQuestions();

    // createCharHTML: function(player){
    //     // var characterHTML = "<p class='character'>" + player.characterName + "</p>";
    //     var characterHTML = document.createElement('p');
    //     characterHTML.className = "character";
    //     characterHTML.innerText = player.characterName;
    //     characterHTML.setAttribute('data-id', player.characterName);
        
    //     return characterHTML;
    // },


// console.log(questionOrAnswer);

// function SendToRenderfunction () {
//   for( var i = 0; i < qAndABank.length; i++)
//     renderToScreen(qAndABank[i].question,qAndABank[i].answer1, qAndABank[i].answer2, qAndABank[i].answer3,qAndABank[i].answer4,qAndABank[i].correctAnswer);
// }

// SendToRenderfunction();



// will need to wrap the entire contents

