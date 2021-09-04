// Select html elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("pregress");
const scoreDiv = document.getElementById("scoreContainer");

// Create array of quiz questions
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
        question : "A very useful tool used in development and debugging for printing content to the debugger is: ",  
        choiceA : "Javascript",
        choiceB : "terminal bash",
        choiceC : "for-loops",
        choiceD : "console log",
        correct : "D"
       }
    ];

    const lastQuestion = questions.length - 1;
    let runningQuestion = 0;
    let count = 0;
    const questionTime = 10; // 10 secs
    const gaugeWidth = 150;
    const gaugeUnit = gaugeWidth / questionTime;
    let TIMER;
    let score = 0;

    // Create function to display questions
    function renderQuestion(){
        let q = questions[runningQuestion];
            question.innerHTML = "<p>" + q.question + "</p>";
            choiceA.innerHTML = q.choiceA;
            choiceB.innerHTML = q.choiceB;
            choiceC.innerHTML = q.choiceC;
    } 

    start.addEventListener("click", startQuiz);
    
        // Start quiz
    function startQuiz() {
        // Hide start button    
            start.style.display = "none";
            renderQuestion();
            quiz.style.display = "block"; 
            renderCounter();
            TIMER = setInterval(renderCounter, 1000);
        }


        function renderProgress() {
            for(let qIndex = 0; qIndex <= lastQuestion; 
                qIndex++) {
                    progress.innerHTML += "<div  class='progress' id="+ qIndex +"></div>";  
            }
        }
                renderProgress();



        // Set up variables and function for counter
        

        function renderCounter() {
            if(count <= questionTime) {
                counter.innerHTML = count;
                timeGauge.style.width = gaugeUnit * count + "px";
                count++;
            }
            else {
                count = 0;
                // Change progress bar
                answerIsWrong(); 
                if(runningQuestion < lastQuestion) {
                    runningQuestion++;
                    renderQuestion();
                } else {
                    clearInterval(TIMER);
                    scoreRender();
                }
            }
        }

        function checkAnswer(answer) {
            if(answer == questions[runningQuestion].correct) {
                // correct answer
                score++;
                answerIsCorrect();
            } else {
                answerIsWrong();
            }
            count = 0;
            if(runningQuestion < lastQuestion) {
                runningQuestion++;
                renderQuestion();
            } else {
                //End quiz
                clearInterval(TIMER);
                scoreRender();
            }
        }


        function answerIsCorrect() {
            document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
        }

        function answerIsWrong() {
            document.getElementById(runningQuestion).style.backgroundColor = "#f00";
        }

        function scoreRender(){
            scoreDiv.style.display = "block";

            // Calculate status of all questions
            const scorePercent = Math.round(100* score/questions.length);
            scoreDiv.innerHTML = "<p>"+ scorePercent+"%</p>";
        }