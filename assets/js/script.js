function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isOver = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}
 
function populate() {
    if(quiz.isOver()) {
        showScore();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
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
    var currentQuestion = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestion + "of " + quiz.questions.length;
}

function showScore() {
    var gameOver = "<h1>Final Score!</h1>";
    gameOver += <h2 id='score'>Your Score: " + quiz.score + "</h2>;
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver;
};

var myQuestions = [
        new Question("What date did 'Friends' premier on TV?", ["August 5, 2010", "September 22, 1994", "January 1, 1999", "February 14, 1996"], "September 22, 1994"), 
        new Question("How many times was Ross married?", ["1", "0", "5", "3"], "3"),
        new Question("What was Joey's casting agents name?", ["Betty White", "Rachel Green", "Estelle Leonard", "Bea Arthur"], "Estelle Leonard"),
        new Question("When Phoebe married Mike, what did she change her name to?", ["Princess Leia", "Princess Consuela Banana Hammock", "Crap Bag", "Phoebe Buffay Hannigan"], "Princess Consuela Banana Hammock"),
        new Question("What did Monica and Chandler name their twins?", ["Erica & Jack", "Jack & Diane", "Ross & Rachel", "Brad & Jennifer"], "Erica & Jack")   
];

var quiz = new quiz(myQuestions);

populate(),