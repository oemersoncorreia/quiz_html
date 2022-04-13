function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + " points</h2> <br> <p><i class='mdi mdi-replay'></i> <a href='index.html'>Redo the test</a>.</p> <br><br> <div class='col-lg-12'> <div class='card'> <div class='card-body'> <div class='tab-content' id='v-pills-tabContent'> <div class='tab-pane fade show active' id='v-pills-gen-ques' role='tabpanel' aria-labelledby='v-pills-gen-ques-tab'> <h4 class='card-title mb-5'>Compare with your Result</h4> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bx-star font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>0 to 4 points</h5> <p class='text-muted'>Low Learning Agility.</p> </div> </div> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bxs-star-half font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>5 to 7 points</h5> <p class='text-muted'>Middle Learning Agility.</p> </div> </div> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bxs-star-half font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>8 to 9 points</h5> <p class='text-muted'>High Potential Learning Agility.</p> </div> </div> <div class='faq-box media mb-4'> <div class='faq-icon mr-3'> <i class='bx bxs-star font-size-20 text-success'></i> </div> <div class='media-body'> <h5 class='font-size-15'>10 pontos</h5> <p class='text-muted'>Level of Excellence in Learning Agility.</p> </div> </div> </div> </div> </div> </div> </div>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

};

// create questions
var questions = [
    new Question("Do I know my life purpose (personal and professional)?", ["Yes", "No","I don't know"], "Yes"),
    new Question("Do I learn strongly from my mistakes, seeing them as an opportunity to learn and grow?", ["Yes", "No","I don't know"], "Yes"),
    new Question("Do I consider other people's ideas, suggestions and opinions, even if they are different from mine?", ["Yes", "No","I don't know"], "Yes"),
    new Question("Can I adapt my communication to different people and situations?", ["Yes", "No","I don't know"], "Yes"),
    new Question("Can I quickly develop solutions to new problems based on my previous experience?", ["Yes", "No","I don't know"], "Yes"),
];

function onLoad(){
   var node = document.getElementsByTagName('div');
   var divLength=node.length;
   alert("There are "+divLength+" div tags in the html code");
   var randomDiv=Math.random()*divLength;
}

// create quiz
var quiz = new Quiz(questions);


// display quiz
populate();
