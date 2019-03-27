const questions = [
    {
        q: "In Latin eduction, The <i>Trivia<i> are the three foundational liberal arts:",   
        a: "reading, writing, and arithmetic",
        b: "history, literature, and philosophy",
        c: "grammar, logic, and rhetoric",
        d: "blood, love, and rhetoric",
        answer: "c",
    },
    {
        q: "The board game <i>Trivial Pursuit</i> was first released in:",
        a: "1982",
        b: "1973",
        c: "1979",
        d: "1984",
        answer: "a",

    }
]


function Question({ q, a, b, c, d, answer }, rightModal, wrongModal) {
    this.q = q;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer; //this is the letter of the correct answer
}
const triviaQs = [];
questions.forEach(function(question) {
    const triviaQuestion = new Question(question);
    triviaQs.push(triviaQuestion);
});

console.log(triviaQs);

 // [q1 = new Question("In Latin eduction, The <i>Trivia<i> are the three foundational liberal arts:", "reading, writing, and arithmetic", "history, literature, and philosophy", "grammar, logic, and rhetoric", "blood, love, and rhetoric", c), q2 = new Question("The board game <i>Trivial Pursuit</i> was first released in:", "1982", "1973", "1979", "1984", a), q3 = new Question("The word <i>triviae</i> originally meant _________, which ultimately came to mean 'a public place', and finally, 'commonplace'.", "three lives", "three roads", "third water", "well-travelled roads", b), q4 = new Question("The word 'trivia' came to mean 'trite, unimportant, commonplace, banal' in the ____, largely due to the works of ________", "1300's, Chaucer", "1800's, Logan Pearsall Smith", "1600's, Shakespere", "1700's, Jonathan Swift", c), q4 = new Question("Fred L Worth, author of the Trivia Encyclopedia, deliberately placed misinformation in his books to catch anyone who attempted to violate his copyright. One of these incorrect answers was used in the original Trivial Pursuit board game, 'what was Columbo's first name?' The wrong answer was ______; Columbo's first name was actually _______", "George, Columbo", "Frank, nonexistant", "Frances, Lieutenant", "Philip, Frank (never actually stated)", d), q5 = new Question("Fred L Worth sued <i>Trivial Pursuit</i> for 300 Million dollars for copyright infringment. Trivial Pursuit successfully defeated the suit, arguing that:", "Fred L. Worth actually plagarized someone else.", "You can't copyright facts.", "The Copyright Trap is an invalid tactic, like entrapment.", "A Board Game is protected under Fair Use laws.", b), q6 = new Question("A contemporary slang synonym for trivial is:", "bougie", "ridic", "banjie", "triflin'", d)];

//set up the timing function

let triviaGame = {
gameOn: false,
isThinking: false,
loadTimer: setTimeout(gameStart, 3000),
thinkTimer: setTimeout(checkAnswer, 15000),
setInterval: (this.count, 1000),
count: 0,
numRight: 0,
numWrong: 0,

//On load, show entry modal, after 3 seconds, load first question 
gameStart: function() {
    this.gameOn = true;
    this.questionLoop();

},
// Iterate through questions array while gameOn is true. (possibly do this randomly?)

questionLoop: function() {
    this.isThinking = true;
    this.count--;
    //show countdown clock (15 second timer)
    for (let i = 0; i <= trivia.length; i++) {
        //map each of the parameters in the question object to the page, 
        //create submit button & attach click event(run checkAnswer)
    }
    //while isThinking is true? Maybe this isn't needed.
    if (this.count === 0) {
        this.checkAnswer();
    }
},



checkAnswer: function() {
    clearInterval(this.intervalId);
    isThinking = false;
    if((this.selectedAnswer === null) && (this.count === 0)) {
        $("#timeUp").show;
        this.count === 15;
        nextQuestion();
    } else if(Question.answer === selectedAnswer) {
        $(Question.rightAnswer)
    }

    //if submit is not clicked before the time is up, show time up modal, and automatically move to next question
//if answer is selected and submit is clicked before the time is up, check for correctness, show correct/incorrect modal, and automatically move to the next question. 
// if answer is not chosen and submit is clicked, nothing happens.
},


//once all of the questions have gone, display game-end modal, with number of answers right, number wrong, and something pithy based on how many they got.

//display button to play again on click, run initializer. 
gameInit: function() {
    this.gameOn = false;
    this.count = 15;
    this.numRight = 0;
    numWrong = 0;

},
}

$(document).ready( function() {

triviaGame.loadTimer();

});






