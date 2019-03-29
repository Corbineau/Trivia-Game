let triviaQs = [];
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

    },
    {
        q: "The word <i>triviae</i> originally meant _________, which ultimately came to mean 'a public place', and finally, 'commonplace'.",
        a: "three lives",
        b: "three roads",
        c: "public roads",
        d: "water of life",
        answer: "b",
    },
    {
        q: "The word 'trivia' came to mean 'trite, unimportant, commonplace, banal' in the ____, largely due to the works of ________",
        a: "1300's, Chaucer",
        b: "1800's, Logan Pearsall Smith",
        c: "1600's, Shakespere",
        d: "1700's, Jonathan Swift",
        answer: "c",
    },
    {
        q: "Fred L Worth, author of the Trivia Encyclopedia, deliberately placed misinformation in his books to catch anyone who attempted to violate his copyright. One of these incorrect answers was used in the original Trivial Pursuit board game, 'what was Columbo's first name?' The wrong answer was ______; Columbo's first name was actually _______",
        a: "George, Columbo", 
        b: "Frank, nonexistant", 
        c: "Frances, Lieutenant", 
        d: "Philip, Frank (never actually stated)", 
        answer: "d",
    },
    {
        q: "Fred L Worth sued <i>Trivial Pursuit</i> for 300 Million dollars for copyright infringment. Trivial Pursuit successfully defeated the suit, arguing that:", 
        a: "Fred L. Worth actually plagarized someone else.", 
        b: "You can't copyright facts.", 
        c: "The Copyright Trap is an invalid tactic, like entrapment.", 
        d: "A Board Game is protected under Fair Use laws.", 
        answer: "b",
    },
    {
        q: "A contemporary slang synonym for trivial is:", 
        a: "bougie", 
        b: "ridic", 
        c: "banjie", 
        d: "triflin'",
        answer: "d",
    },
    {
        q: "The first known labeling of trivia as a casual parlor game was in a February 5th, 1965 column published in which newspaper?",
        a: "The Columbia Daily Spectator",
        b: "The Sacramento News and Review",
        c: "The New York Times",
        d: "The Portland Press Herald",
        Answer: "a", 
    },
    {
        q: "The two longest ongoing trivia contests in the world are the Great Midwest Trivia Contest at Lawrence University and the Williams Trivia Contest, both of which started in the spring of which year?",
        a: "1959",
        b: "1982",
        c: "1979",
        d: "1966",
        answer: "d",
    },
    {
        q: "Which televised trivia competition was the framing device for a popular 2008 movie set in Mumbai, India?",
        a: "Jeopardy",
        b: "Who Wants To Be a Millionaire?",
        c: "The $100,000 Pyramid",
        d: "Bollywood Squares",
        Answer: "b",
        
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
questions.forEach(function(question) {
    const triviaQuestion = new Question(question);
    triviaQs.push(triviaQuestion);
});

console.log(triviaQs);

//set up the timing function

let triviaGame = {
gameOn: false,
isThinking: false,
loadTimer: setTimeout(this.gameStart, 3000),
thinkTimer: setTimeout(this.checkAnswer, 15000),
moveAlong: setTimeout(this.)
setInterval: (this.count, 1000),
count: 15,
numRight: 0,
numWrong: 0,

//On load, show entry modal, after 3 seconds, load first question 
gameStart: function() {
    this.gameOn = true;
    this.questionLoop();
    console.log(this.gameOn);
    


},
// Iterate through questions array while gameOn is true. (possibly do this randomly?)

questionLoop: function() {
    this.isThinking = true;
    this.setInterval;
    this.thinkTimer;
    this.count--;
    //show countdown clock (15 second timer)
    for (let i = 0; i <= triviaQs.length; i++) {
        //map each of the parameters in the question object to the page,
        let currentQuestion = triviaQs[i];
        let {q, a, b, c, d, answer} = currentQuestion;
        //it could be cool to redo this sometime where these are dynamically generated on the page in a random order, by giving them a data-attribute that randomly assigns the letter based on the radio button they're in. 
        $("#question").text(q);
        $("#aBtn").text(a);
        $("#aBtn").text(b);
        $("#aBtn").text(c);
        $("#aBtn").text(d);
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

triviaGame.loadTimer;

});






