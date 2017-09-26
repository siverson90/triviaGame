var questionAndAnswerBank= [
    {
      question: "object 1 question 1",
      answer1: "tis is answer1",
      answer2: "tis is answer2",
      answer3: "tis is answer3",
      answer4: "tis is answer4",
      correctanswer: "this is correct answer"
    },
    {
      question: "object 2 question 1",
      answer1: "tis is answer1",
      answer2: "tis is answer2",
      answer3: "tis is answer3",
      answer4: "tis is answer4",
      correctanswer: "this is correct answer"
    },
    {
      question: "object 3 question 1",
      answer1: "tis is answer1",
      answer2: "tis is answer2",
      answer3: "tis is answer3",
      answer4: "tis is answer4",
      correctanswer: "this is correct answer"
    }
]

var appendDiv = $("#mainwrapper")

function renderToScreen(question,a1,a2,a3,a4){
  var newDiv = $("<div>");
  newDiv.html("<h1>"+ question + "</h1>" + "<input type=radio>" + a1 + "<input type=radio>"+ a2 + "<input type=radio>"+ a3 + "<input type=radio>"+ a4 + "</button>");
  appendDiv.append(newDiv);
}

// "<input type='radio'"+  "question=''" "value="''" "checked>

function SendToRenderfunction (){
  for( var i = 0; i < questionAndAnswerBank.length; i++)
    renderToScreen(questionAndAnswerBank[i].question,questionAndAnswerBank[i].answer1, questionAndAnswerBank[i].answer2, questionAndAnswerBank[i].answer3,questionAndAnswerBank[i].answer4);
}

SendToRenderfunction();

