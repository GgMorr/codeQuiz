const start = document.getElementById("start");

const start = document.getElementById("quiz");

const start = document.getElementById("question");

const start = document.getElementById("container");

const start = document.getElementById("timeLine");


const start = document.getElementById("A");
const start = document.getElementById("B");
const start = document.getElementById("C");

const start = document.getElementById("pregress");

const start = document.getElementById("scoreContainer");

let questions = [
    {
        question : "Commonly used data types include: ",  
        choiceA : "strings",
        choiceB : "Booleans",
        choiceC : "alerts",
         choiceD : "numbers",
        correct : "C"
    },

    {
        question : "The condition in an if-else statement is enclosed with: ",  
        choiceA : "quotes",
        choiceB : "curly brackets",
        choiceC : "parenthesis",
        choiceD : "square brackets",
        correct : "B"
       },

       {
        question : "Arrays in Javascript can be used to store: ",  
        choiceA : "numbers & strings",
        choiceB : "other arrays",
        choiceC : "Booleans",
        choiceD : "all of the above",
        correct : "D"
       },

       {
        question : "String values must be enclosed within ______ when being assigned to variables.: ",  
        choiceA : "commas",
        choiceB : "curly brackets",
        choiceC : "quotes",
        choiceD : "parenthesis",
        correct : "C"
       },

       {
        question : "A very useful tool used development and debugging for printing content to the debugger is: ",  
        choiceA : "Javascript",
        choiceB : "terminal bash",
        choiceC : "for-loops",
        choiceD : "console log",
        correct : "D"
       },

]

let lasQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

    function giveQuestion(){
        let q = questions[runningQuestionsIndex];
            question.innerHTML = "<p>" + q.question + "<p>";
            choiceA.innerHTML = q.choiceA;
            choiceB.innerHTML = q.choiceB;
            choiceC.innerHTML = q.choiceC;
    }

    runningQuestionIndex = 0;
    giveQuestion()

    runningQuestionIndex++;
    giveQuestion()

    function progressRender() {
        for(let qIndex = 0; qIndex <=lastQuestionIndex; qIndex++) {
            progress.innerHTML += "<section  id=" +   + "></section>";  
        }
    }

    function answerIsCorrect() {
        document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
    }

    function answerIsWrong() {
        document.getElementById(runningQuestionIndex).style.backgroundColor = "red"; 
    }

    const questionTime = 10;
    const gaugeWidth = 150;
    let count = 0;
    const gaugeProgressUnit = gaugeWidth/questionTime;

        function counterRender() {
            if(count <= questionTime) {
                counter.innerHTML = count;
                timeGauge.style.width = gaugeProgressUnit * count + "px";
                count++;
            } else {
                count = 0;
                answerIsWrong();
                    if(runningQuestionIndex < lastQuestionIndex) {
                        runningQuestionIndex++;
                        questionRender();
                    } 
                    else {clearInterval(TIMER);
                        scoreRender();
                    }
            }
        }
    let TIMER = 
        setInterval(counterRender, 1000);
        // Stop clock
        setInterval()
        clearInterval(TIMER);

        // Check answers
        function checkAnswer(answer) {}