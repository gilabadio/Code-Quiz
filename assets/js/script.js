var scores = 0;
var timer = 45;
var interval;
var index = 0;
var highOption;
var saveHighScore = [];
var saveHighScoreObj;
var containerBtn = document.querySelector(".textAction");
var container = document.querySelector(".container");
var textQuestion = document.querySelector(".textCenter");
var answer = document.querySelector(".answer");
var remainTime = document.querySelector(".timer");
var linkScore = document.querySelector(".a-points");
var textCnt = "left";
var firstColor = "rgb(199,120,235)";
var secondaryColor = "rgb(53,28,117)";

answer.style.fontSize = "50px";

initialContent();

var questions = [
    {
        q: "Commonly used data types DO NOT include:",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        answer: "C",
      },
      {
        q: "The condition in an if/else statement is enclosed with ____.",
        a: "Quotes",
        b: "Curly brackets",
        c: "Parentheses",
        d: "Square brackets",
        answer: "C",
      },
      {
        q: "Arrays in JavaScript can be used to store ____.",
        a: "Numbers and strings",
        b: "Booleans",
        c: "Other arrays",
        d: "All of the above",
        answer: "D",
      },
      {
        q:
          "String values must be enclosed within ____ when being assigned to variables.",
        a: "Quotes",
        b: "Curly brackets",
        c: "Commas",
        d: "Parantheses",
        answer: "A",
      },
      {
        q:
          "A very useful tool during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "Terminal/Bash",
        c: "For loops",
        d: "Console.log",
        answer: "D",
      },
    ];

function createButton(id, txt) {
        var button = document.createElement("button");
        button.setAttribute("id", id);
        button.textContent = txt;
        button.style.background = firstColor;
        button.style.color = secondaryColor;
        button.style.borderRadius = "10px";
        button.style.outline = "none";
        button.style.fontSize = "50px";
        button.style.marginRight = "15px";
        containerBtn.appendChild(button);
      }
function initialContent() {
        createButton("start", "Start Quiz");
        highOption = 0;}
    
var checkingTimer = function () {
            var eval = false;
            if (timer <= 0) {
              timer = 0;
              eval = true;
            }
            return eval;};
var checkAnswer = function (str, x) {
        if (x < questions.length) {
            var showAnswer = "";
                if (str === questions[x].answer) {
                if (!checkingTimer()) {
                    showAnswer = "Correct!";
                    scores += 10;}
                 } else {
                    if (!checkingTimer()) {
                      timer -= 10;
                    }
                    showAnswer = "Wrong!";}
var elementNode = document.querySelector("#question-id");
    deleteChildNode(elementNode);
    index = showQuestion(index);
    answer.textContent = showAnswer;} 
    else {
    var elementNode = document.querySelector("#question-id");
    deleteChildNode(elementNode);
    answer.textContent = "";
    showInitialsScore();}
};
var showQuestion = function (x) {
    if (x < questions.length) {
      textQuestion.textContent = questions[x].q;
  
      var listUnOrdered = document.createElement("ul");
      listUnOrdered.setAttribute("id", "question-id");
      var op1 = document.createElement("li");
      var op2 = document.createElement("li");
      var op3 = document.createElement("li");
      var op4 = document.createElement("li");
  
      listUnOrdered.style.color = secondaryColor;
      listUnOrdered.style.justifyContent = "space-between";
      listUnOrdered.style.listStyle = "none";
      op1.style.background = firstColor;
      op1.style.justifyContent = textCnt;
      op1.style.borderRadius = "10px";
      op2.style.background = firstColor;
      op2.style.justifyContent = textCnt;
      op2.style.borderRadius = "10px";
      op3.style.background = firstColor;
      op3.style.justifyContent = textCnt;
      op3.style.borderRadius = "10px";
      op4.style.background = firstColor;
      op4.style.justifyContent = textCnt;
      op4.style.borderRadius = "10px";      

      op1.innerHTML =
      "<a href='#' onclick=checkAnswer('A'," +
      x +
      ") style = 'text-decoration: none; color: #ffffff; '><div style = 'text-align: left;'>1. " +
      questions[x].a +
      "</div></a>";

    op2.innerHTML =
      "<a href='#' onclick=checkAnswer('B'," +
      x +
      ") style = 'text-decoration: none; color: #ffffff; '><div style = 'text-align: left;'>2. " +
      questions[x].b +
      "</div></a>";

    op3.innerHTML =
      "<a href='#' onclick=checkAnswer('C'," +
      x +
      ") style = 'text-decoration: none; color: #ffffff; '><div style = 'text-align: left;'>3. " +
      questions[x].c +
      "</div></a>";

    op4.innerHTML =
      "<a href='#' onclick=checkAnswer('D'," +
      x +
      ") style = 'text-decoration: none; color: #ffffff; '><div style = 'text-align: left;'>4. " +
      questions[x].d +
      "</div></a>";

    listUnOrdered.appendChild(op1);
    listUnOrdered.appendChild(op2);
    listUnOrdered.appendChild(op3);
    listUnOrdered.appendChild(op4);
    container.appendChild(listUnOrdered);

    var button = document.querySelector("#start");
    deleteChildNode(button);
    deleteChildNode(document.querySelector("#go-back"));
    deleteChildNode(document.querySelector("#clear"));

    x++;
    } else {
    showInitialsScore();}
    return x;};
    var deleteChildNode = function (elementNode) {
        if (elementNode) {
          elementNode.parentNode.removeChild(elementNode);}
      };
    var displayErrorMessage = function (msg) {
        alert(msg);}; 
    var gettingArrayLocalStore = function () {
        var user = [];
        user = JSON.parse(localStorage.getItem("userScore"));
        return user;};
    var clearLocalStore = function () {
            localStorage.clear();};
            var retrieveHighScore = function () {
                saveHighScore = gettingArrayLocalStore();
                timer = 0;
              
                textQuestion.textContent = "High Scores";
                remainTime.textContent = "";
                linkScore.textContent = "";
                answer.textContent = "";
              
                if (!highOption) {
                  container.textContent = "";
                  deleteChildNode(document.querySelector("#start"));
                } else {
                  deleteChildNode(document.querySelector(".p-store"));
                  deleteChildNode(document.querySelector(".form-store"));
                  deleteChildNode(document.querySelector("#score-id"));
                }
    if (saveHighScore != null) {
    console.log(saveHighScore.length);        
    var listUnOrdered = document.createElement("ul");
    listUnOrdered.style.background = secondaryColor;
    listUnOrdered.style, (justifyContent = "space-between");
    listUnOrdered.style.listStyle = "none";
    listUnOrdered.style.color = "#fff";
    listUnOrdered.style.fontWeight = "bold";

    for (var i = 0; i < saveHighScore.length; i++) {
        var li = document.createElement("li");
        li.innerHTML =
          "<div style = 'text-align: left;'>" +
          (i + 1) +
          ". " +
          JSON.stringify(saveHighScore[i].user) +
          " - " +
          JSON.stringify(saveHighScore[i].score) +
          "</div>";
        li.style.textAlign = textCnt;
        li.style.background = firstColor;
        li.style.borderBottom = "10px";
        li.style.borderRadius = "15px";
        listUnOrdered.appendChild(li);
      }
  
      container.appendChild(listUnOrdered);
    }
    createButton("go-back", "Go Back");
  createButton("clear", "Clear High Scores");
  var btn1 = document.querySelector("#go-back");
  var btn2 = document.querySelector("#clear");
  btn1.addEventListener("click", function () {
    location.reload();
  });
  btn2.addEventListener("click", function () {
    clearLocalStore();
  });

  deleteChildNode(document.querySelector("#question-id"));
};
var saveScore = function () {
    event.preventDefault();
  
    var input = document.querySelector("#initials").value;
  
    if (input === "") {
      displayErrorMessage("You must enter your initials to register your score!");
    } else {
      displayErrorMessage("Registered your score successfully!");
  
      saveHighScore = gettingArrayLocalStore();
  
      if (saveHighScore == null) {
        saveHighScore = [];
      }
  
      saveHighScoreObj = {
        user: input,
        score: scores,
      };
  
      saveHighScore.push(saveHighScoreObj);
  
      localStorage.setItem("userScore", JSON.stringify(saveHighScore));
      retrieveHighScore();
    }
  };
  var showInitialsScore = function () {
    textQuestion.textContent = "All done!";
    remainTime.textContent = "Time left :" + timer;
    answer.textContent = "";
  
    var msg = document.createElement("p");
    msg.setAttribute("id", "score-id");
    msg.textContent =
      "Your final Score is: " + scores + " out of " + questions.length * 10;
  
    var span = document.createElement("span");
    span.setAttribute("id", "form-id");
    span.style.display = "flex";
    span.style.flexWrap = "wrap";
    span.style.justifyContent = "center";
    span.style.flex = "flex-wrap";
    span.innerHTML =
      "<p class='p-store' style ='text-align:left'> Enter Initials: </p>" +
      "<form class='form-store' style='padding:12px'><input type='text' name='initials placeholder='Enter initials' id='initials'/>" +
      "<button id='save' type='submit' onclick='saveScore()' style = 'background:" +
      firstColor +
      "; color:" +
      secondaryColor +
      "; border-radius:10px; outline:none;'>Submit</button></form>";
  
    container.appendChild(msg);
    container.appendChild(span);
  };
  
  var clockTime = function () {
    if (checkingTimer()) {
      clearInterval(interval);
  
      var elementNode = document.querySelector("#question-id");
      if (elementNode != null && answer != null) {
        deleteChildNode(elementNode);
        answer.textContent = "";
  
        showInitialsScore();
      }
    } else {
      if (index < questions.length) {
        timer--;
        remainTime.textContent = "Time left :" + timer;
      }
    }
  };
  
  var startHandler = function () {
    container.textContent = "";
    highOption = 1;
  
    interval = setInterval(clockTime, 1000);
  
    index = showQuestion(index);
  };
  
  var button = document.querySelector("#start");
  button.addEventListener("click", startHandler);
  linkScore.addEventListener("click", retrieveHighScore);