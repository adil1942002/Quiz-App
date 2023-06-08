
var question = document.getElementById("question");
var option = document.getElementById("option")


var questions = [
    {
      question: "HTML Stands for ______________",
      options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
      correctAnswer: "Hypertext Markup Language",
    },
    {
        question: "CSS Stands for ______________",
      options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
      correctAnswer: "Cascading Style Sheet",
    },
    {
        question: "JS Stands for ______________",
        options: ["JS", "JS", "JavaScript", "JS"],
        correctAnswer: "JavaScript",
    },
    {
        question: "RAM Stands for ______________",
        options: ["RAM", "RAM", "Random Access Memory", "RAM"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "SQL Stands for ______________",
        options: ["SQL", "SQL", "Structured Query Language", "SQL"],
        correctAnswer: "Structured Query Language",
    },
    {
        question: "is HTML is Programming Language?",
        options: ["YES", "NO"],
        correctAnswer: "NO",
    },

];


var indexVal = 0; 
function renderQuestion(){
    var que = questions[indexVal]
    option.innerHTML = que.options
    totalQuestion.innerHTML = questions.length
    currentQuestion.innerHTML = indexVal + 1;
    

    option.innerHTML = ""
    for(var i =0; i<que.options.length; i++){
        correctAnswer = que.correctAnswer
        option.innerHTML += `<button id = "btn" onclick="checkAns('${que.correctAnswer}', '${que.options[i]}'  )">${que.options[i]}</button>`
    }
 
};
var btn = document.getElementById("btn")
  renderQuestion();
  var btn = document.getElementById("btn")

  var marks = 0;
  var markshtml = document.getElementById("marks") ;
  function checkAns(a,b){
      if(a == b){
          indexVal++
          markshtml.innerHTML = ++marks
          renderQuestion() 
        }
        



    
  }
