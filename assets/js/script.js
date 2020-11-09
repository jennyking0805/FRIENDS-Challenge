
var question = [
        ["Q: What date did 'Friends' premier on TV?", "August 5, 2010", "September 22, 1994", "January 1, 1999", "February 14, 1996", 2], 
        ["Q: How many times was Ross married?", "1", "0", "5", "3", 4],
        ["Q: What was Joey's casting agents name?", "Betty White", "Rachel Green", "Estelle Leonard", "Bea Arthur", 3],
        ["Q:When Phoebe married Mike, what did she change her name to?", "Princess Leia", "Princess Consuela Banana Hammock", "Crap Bag", "Phoebe Buffay Hannigan", 2],
        ["Q: What did Monica and Chandler name their twins?", "Erica & Jack", "Jack & Diane", "Ross & Rachel", "Brad & Jennifer", 1]  
];

var score = 0;
var questionNumber = 0;

function displayQuiz() {

var quest = document.getElementById("question");
quest.innerHTML = question[questionNumber][0];

    for (i=1; i <=4; i++) {
        var option = document.getElementById("choice" + i);
        option.innerHTML = question[questionNumber][i];
    }
}

(function () {
    displayQuiz();
})();

function validate(item) {

    if(item === "choice" + question[questionNumber][i]){

        score++;
    }

    if(item === "btn" + question[questionNumber][i]){

        score++;
    }

    if(questionNumber === i++){
        var mainBody = document.getElementById("quiz");
        mainBody.innerHTML = "<h1>" + "Your Score is:" + score + "/5" + "</h1>";
    }

    questionNumber++;
}

var container = document.getElementById("buttons");


function listenMe(answer) {
    if (answer.target !== answer.currentTarget) {
        var clickedItem = answer.target.id;
        validate(clickedItem);
    }
    e.stopPropagation();
    if(questionNumber < 5){
        displayQuiz();
    }
}
container.addEventListener(click, listenMe, false);

