let triviaQs = [];
const questions = [
    {
        q: "In Latin eduction, The <i>Trivia<i> are the three foundational liberal arts:",
        a: "reading, writing, and arithmetic",
        b: "history, literature, and philosophy",
        c: "grammar, logic, and rhetoric",
        d: "blood, love, and rhetoric",
        answer: "c",
        rightA: "src='resources/images/correct.jpg",
        wrongA: "src'resources/images/incorrect.jpg'"
    },
    {
        q: "The board game <i>Trivial Pursuit</i> was first released in:",
        a: "1982",
        b: "1973",
        c: "1979",
        d: "1984",
        answer: "a",
        rightA: "src='resources/images/correct.jpg",
        wrongA: "src='resources/images/incorrect.jpg'"

    },
    {
        q: "The word <i>triviae</i> originally meant _________, which ultimately came to mean 'a public place', and finally, 'commonplace'.",
        a: "three lives",
        b: "three roads",
        c: "public roads",
        d: "water of life",
        answer: "b",
        rightA: "src='resources/images/correct.jpg",
        wrongA: "src'resources/images/incorrect.jpg'"
    },
    {
        q: "The word 'trivia' came to mean 'trite, unimportant, commonplace, banal' in the ____, largely due to the works of ________",
        a: "1300's, Chaucer",
        b: "1800's, Logan Pearsall Smith",
        c: "1600's, Shakespere",
        d: "1700's, Jonathan Swift",
        answer: "c",
        rightA: "src='resources/images/correct.jpg",
        wrongA: "src'resources/images/incorrect.jpg'"
    },
    {
        q: "Fred L Worth, author of the Trivia Encyclopedia, deliberately placed misinformation in his books to catch anyone who attempted to violate his copyright. One of these incorrect answers was used in the original Trivial Pursuit board game, 'what was Columbo's first name?' The wrong answer was ______; Columbo's first name was actually _______",
        a: "George, Columbo",
        b: "Frank, nonexistant",
        c: "Frances, Lieutenant",
        d: "Philip, Frank (never actually stated)",
        answer: "d",
        rightA: "src='resources/images/correct.jpg",
        wrongA: "src'resources/images/incorrect.jpg'"
    },
    {
        q: "Fred L Worth sued <i>Trivial Pursuit</i> for 300 Million dollars for copyright infringment. Trivial Pursuit successfully defeated the suit, arguing that:",
        a: "Fred L. Worth actually plagarized someone else.",
        b: "You can't copyright facts.",
        c: "The Copyright Trap is an invalid tactic, like entrapment.",
        d: "A Board Game is protected under Fair Use laws.",
        answer: "b",
        rightA: "src='resources/images/correct.jpg",
        wrongA: "src'resources/images/incorrect.jpg'"
    },
    {
        q: "A contemporary slang synonym for trivial is:",
        a: "bougie",
        b: "ridic",
        c: "banjie",
        d: "triflin'",
        answer: "d",
        rightA: "src='resources/images/correct.jpg",
        wrongA: "src'resources/images/incorrect.jpg'"
    },
    {
        q: "The first known labeling of trivia as a casual parlor game was in a February 5th, 1965 column published in which newspaper?",
        a: "The Columbia Daily Spectator",
        b: "The Sacramento News and Review",
        c: "The New York Times",
        d: "The Portland Press Herald",
        Answer: "a",
        rightA: "src='resources/images/correct.jpg",
        wrongA: "src'resources/images/incorrect.jpg'"
    },
    {
        q: "The two longest ongoing trivia contests in the world are the Great Midwest Trivia Contest at Lawrence University and the Williams Trivia Contest, both of which started in the spring of which year?",
        a: "1959",
        b: "1982",
        c: "1979",
        d: "1966",
        answer: "d",
        rightA: "src='resources/images/correct.jpg",
        wrongA: "src'resources/images/incorrect.jpg'"
    },
    {
        q: "Which televised trivia competition was the framing device for a popular 2008 movie set in Mumbai, India?",
        a: "Jeopardy",
        b: "Who Wants To Be a Millionaire?",
        c: "The $100,000 Pyramid",
        d: "Bollywood Squares",
        Answer: "b",
        rightA: "src='resources/images/correct.jpg'",
        wrongA: "src='resources/images/incorrect.jpg'"

    }
]


function Question({ q, a, b, c, d, answer, rightA, wrongA }) {
    this.q = q;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer; //this is the letter of the correct answer
    this.rightA = rightA;
    this.wrongA = wrongA;
}
questions.forEach(function (question) {
    const triviaQuestion = new Question(question);
    triviaQs.push(triviaQuestion);
});

console.log(triviaQs);

//Question.prototype.run

//game Object

var triviaGame = {
    gameOn: false,
    isThinking: false,
    //thinkTimer: setTimeout(this.checkAnswer, 15000),
    intervalId: "",
    count: 15,
    numRight: 0,
    numWrong: 0,
    selectedAnswer: "",
    currentQuestion: "",

    //On load, show entry modal, after 3 seconds, load first question 
    gameStart: function () {

        this.gameOn = true;
        console.log(this.gameOn);
        console.log(this);
        this.questionLoop();

    },
    // Iterate through questions 

    questionLoop: async function () {

        //for (let i = 0; i <= triviaQs.length; i++) {
        const interval = 150000;
        triviaQs.forEach(function (parent, index) {
            
            setTimeout(function loopy() {
                loopy.bind(triviaGame);
                console.log(this);
                this.isThinking = true;
                this.currentQuestion = triviaQs[index];
                this.countdown();
                console.log(this.currentQuestion);
                $("#question").html(this.currentQuestion.q);
                $("#aText").html(this.currentQuestion.a);
                $("#bText").html(this.currentQuestion.b);
                $("#cText").html(this.currentQuestion.c);
                $("#dText").html(this.currentQuestion.d);
                $("#rightAnswer").html(`<img ${this.currentQuestion.rightA} />`);
                $("#wrongAnswer").html(`<img ${this.currentQuestion.wrongA} />`);
                while(this.count > 0) {
                    if($("input[name='possAnswer'").is(":checked")) {
                        console.log("checked!");
                        console.log(this);
                        console.log($(this).attr("id"));
                        triviaGame.selectedAnswer = $(this).attr("id");
                        console.log(triviaGame.selectedAnswer);
                    };
                }
                $.when(triviaGame.count === 0).then(triviaGame.checkAnswer());      
                    
                }, index * interval);
        });

        //this.intervalId = setInterval(this.countdown(), 1000);
        //map each of the parameters in the question object to the page,

        //let {q, a, b, c, d, answer, rightA, wrongA } = this.currentQuestion;
        //it could be cool to redo this sometime where these are dynamically generated on the page in a random order, by giving them a data-attribute that randomly assigns the letter based on the radio button they're in. 


    },

    //show countdown clock (15 second timer)

    countdown: function() {
        this.count--;
        $("#clock").text(`00:${this.count}`);
    },
    checkAnswer: function() {
        clearInterval(this.intervalId);
        //if submit is not clicked before the time is up, show time up modal, and automatically move to next question
        this.isThinking = false;
        if ((this.selectedAnswer === null) && (this.count === 0)) {
            $("#timeUp").show;
            this.count = 15;
            //if answer is selected and submit is clicked before the time is up, check for correctness, show correct/incorrect modal, and automatically move to the next question. 
        } else if (currentQuestion.answer === selectedAnswer) {
            $("#rightAnswer").show;
        } else if (currentQuestion.answer != selectedAnswer) {
            $("wrongAnswer").show;
        }
        // if answer is not chosen and submit is clicked, nothing happens.
    },

    gameInit: function() {
        this.gameOn = false;
        this.count = 15;
        this.numRight = 0;
        numWrong = 0;
    
    },
    }


    




//once all of the questions have gone, display game-end modal, with number of answers right, number wrong, and something pithy based on how many they got.

//display button to play again on click, run initializer. 


for (let key in triviaGame) {
    if (typeof triviaGame[key] == 'function') {
        triviaGame[key] = triviaGame[key].bind(triviaGame);
    }
}

$(document).ready(function () {

    setTimeout(triviaGame.gameStart, 3000);
    //triviaGame.loadTimer();
    //if triviaGame.isThinking = true?


    // $(".radioBtn").on("click", function () {
    //     console.log(this);
    //     triviaGame.selectedAnswer = $(this).attr("id");
    //     console.log(selectedAnswer);
    // })

    
        

    $("#submitA").on("click", function (event) {
        event.preventDefault();
        triviaGame.checkAnswer();
    })

});






