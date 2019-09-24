const triviaQs = [];
const questions = [
    {
        q: "In Latin eduction, The 'Trivia' are the three foundational liberal arts:",
        a: "reading, writing, and arithmetic",
        b: "history, literature, and philosophy",
        c: "grammar, logic, and rhetoric",
        d: "blood, love, and rhetoric",
        answer: "c",
        fact: "In addition to the 'Trivia' of Grammar, Logic, and Rhetoric are the 'Quadrivia' Arithmetic, Geometry, Music, and Astronomy. Eat your heart out, Common Core.",
        
    },
    {
        q: "The board game <i>Trivial Pursuit</i> was first released in:",
        a: "1981",
        b: "1973",
        c: "1979",
        d: "1984",
        answer: "a",
        fact: "1981 is the correct answer for when the game was released. However, Trivial Pursuit was initially created in 1979 by two friends who decided to make up their game when they saw that pieces of their scrabble game missing. So they made a game with even more pieces to lose.",
        

    },
    {
        q: "The word 'triviae' originally meant _________, which ultimately came to mean 'a public place', and finally, 'commonplace'.",
        a: "three lives",
        b: "three roads",
        c: "public roads",
        d: "water of life",
        answer: "b",
        fact: "The ancient Romans used this word to describe a place where one road split, or forked into two roads- that is, where three roads met. Don't tell Robert Frost.",
        
    },
    {
        q: "The word 'trivia' came to mean 'trite, unimportant, commonplace, banal' in the ____, largely due to the works of ________",
        a: "1300's, Chaucer",
        b: "1800's, Logan Pearsall Smith",
        c: "1600's, Shakespere",
        d: "1700's, Jonathan Swift",
        answer: "c",
        fact: "Of course it was Shakespere! I mean, he made up or repurposed half of the english language.",
        
    },
    {
        q: "Fred L Worth, author of the Trivia Encyclopedia, deliberately placed misinformation in his books to catch anyone who attempted to violate his copyright. One of these incorrect answers was used in the original Trivial Pursuit board game, 'what was Columbo's first name?' The wrong answer was ______; Columbo's first name was actually _______",
        a: "George, Columbo",
        b: "Frank, nonexistant",
        c: "Frances, Lieutenant",
        d: "Philip, Frank",
        answer: "d",
        fact: "Fred L. Worth listed Colombo's first name as Philip as a copyright trap. Although Colombo's first name is never actually spoken in the show, there are several places where it is written, in particular, on his police ID.",
        
    },
    {
        q: "Fred L Worth sued <i>Trivial Pursuit</i> for 300 Million dollars for copyright infringment. Trivial Pursuit successfully defeated the suit, arguing that:",
        a: "Fred L. Worth actually plagarized someone else.",
        b: "You can't copyright facts.",
        c: "The Copyright Trap is an invalid tactic, like entrapment.",
        d: "A Board Game is protected under Fair Use laws.",
        answer: "b",
        fact: "Facts are Facts, and you can't claim ownership of them! Which doesn't mean you should make up your own for money. Looking at you, Fox News.",
        
    },
    {
        q: "The how much was largest prize pot for the trivia-game app, HQTrivia?",
        a: "175,237",
        b: "15,000",
        c: "500,000",
        d: "250,000",
        answer: "d",
        fact: "A dozen people split the $250,000 pot, amounting to $20,833.33 each. Which, after taxes, will just about cover code camp tuition!",
        
    },
    {
        q: "The first known labeling of trivia as a casual parlor game was in a February 5th, 1965 column published in which newspaper?",
        a: "The Columbia Daily Spectator",
        b: "The Sacramento News and Review",
        c: "The New York Times",
        d: "The Portland Press Herald",
        Answer: "a",
        fact: "The Columbia Daily Spectator is also the longest continuously operating college newspaper, and is still more respected than Fox News.",
        
    },
    {
        q: "The two longest ongoing trivia contests in the world are the Great Midwest Trivia Contest at Lawrence University and the Williams Trivia Contest, both of which started in the spring of which year?",
        a: "1959",
        b: "1982",
        c: "1979",
        d: "1966",
        answer: "d",
        fact: "1982 also saw the launch of the Commodore 64- and the first known computer virus, the Elk Cloner. So y'know, a good year.",
        
    },
    {
        q: "Which televised trivia competition was the framing device for a popular 2008 movie set in Mumbai, India?",
        a: "Jeopardy",
        b: "Who Wants To Be a Millionaire?",
        c: "The $100,000 Pyramid",
        d: "Bollywood Squares",
        Answer: "b",
        fact: "Funfact: 'b' is also the letter of the fake answer that the host, Prem, gives to the protagonist, Jamal to test whether he is cheating.",
        

    }
]


let count = 15;
const interval = 15000; // how much time should the delay between two iterations be (in milliseconds)?


function Question({ q, a, b, c, d, answer, fact }) {
    this.q = q;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer; //this is the letter of the correct answer
    this.fact = fact;
};
questions.forEach(function (question) {
    const triviaQuestion = new Question(question);
    triviaQs.push(triviaQuestion);
});

console.log(triviaQs);

trivia = {
    gameOn: false,
    isThinking: false,
    numRight: 0,
    numWrong: 0,
    startModal: $("#startGame"),
    rightModal: $("#rightAnswer"),
    wrongModal: $("#wrongAnswer"),
    endModal: $("#endGame"),
    timeUp: $("#timeUp"),
    qNum: 0,
    selectedAnswer: "",
    rightAnswer: "",


    gameLoop: function () {
        if (this.gameOn === true) {
            return new Promise(outerResolve => { //promises, promises
                let promise = Promise.resolve();
                // let i = 0;
                let next = () => {
                    $(".modal").hide();
                    let currentQuestion = triviaQs[this.qNum];
                    console.log(currentQuestion);
                    this.rightAnswer = currentQuestion.answer;
                    // the actual game activity
                    $(".radioBtn").prop("checked", false);
                    count = 15;
                    this.isThinking = true;
                    countdown();
                    $("#question").html(currentQuestion.q);
                    $("#aText").html(currentQuestion.a);
                    $("#bText").html(currentQuestion.b);
                    $("#cText").html(currentQuestion.c);
                    $("#dText").html(currentQuestion.d);
                    $("#rightAnswer").html(`Correct!<br/> ${currentQuestion.fact}`);
                    $("#wrongAnswer").html(`Wrong!<br /> The correct answer is <strong>${currentQuestion.answer}</strong><br /> ${currentQuestion.fact}`);
                    // console.log(currentQuestion);
                    if (this.qNum < triviaQs.length) {
                        promise = promise.then(() => {
                            return new Promise((resolve) => {
                                setTimeout(() => {
                                    console.log(this.qNum);
                                    resolve();
                                    next();
                                }, interval);
                            });
                        });
                    } else {
                        setTimeout(outerResolve, interval);
                    }
                };
                next();
            });
        };
    },

    checkAnswer: function () {
        console.log(`I'm checking an answer - ${this.rightAnswer} vs ${this.selectedAnswer}`);
        //if submit is not clicked before the time is up, show time up modal, and automatically move to next question
<<<<<<< HEAD
        isThinking = false;
        // if ((selectedAnswer === null) && (count === 0)) {
        //     this.timeUp.css("display", "flex");
        //     //if answer is selected and submit is clicked before the time is up, check for correctness, show correct/incorrect modal, and automatically move to the next question. 
        // } else if 
        //TODO: there is something super wrong in this checker-- it only works the first time, ant then shows the wrong modal even if the answers are correct. Wtf.
        if (qObj.answer === selectedAnswer) {
=======
        this.isThinking = false;
        if ((this.selectedAnswer === null) && (count === 0)) {
            this.timeUp.css("display", "flex");
            //if answer is selected and submit is clicked before the time is up, check for correctness, show correct/incorrect modal, and automatically move to the next question. 
        } else if (this.rightAnswer === this.selectedAnswer) {

>>>>>>> 1efa9c3d518cc3c03a6a14572113c0ace651f2b7
            this.rightModal.css("display", "flex");
            ++this.numRight;
            console.log(`Correct: ${this.numRight}`);
        } else {
<<<<<<< HEAD
            this.wrongModal.css("display", "flex");;
            this.numWrong++;
=======
            this.wrongModal.css("display", "flex");

            ++this.numWrong;
>>>>>>> 1efa9c3d518cc3c03a6a14572113c0ace651f2b7
            console.log(`Wrong: ${this.numWrong}`);
        }
        this.qNum++
    },

    gameInit: () => {
        this.gameOn = false;
        this.numRight = 0;
        this.numWrong = 0;

    },

    gameStart: function () {
        // console.log(this);
        this.gameOn = true;
        $(this.startModal).hide();
        this.gameLoop().then(() => {
            console.log('Loop finished.');
            $("#numRight").html(this.numRight);
            $("#numWrong").html(this.numWrong);
            $(this.endModal).css("display", "flex");
        });

    },

   

}


//show countdown clock (15 second timer)
countdown = () => {
    if (trivia.isThinking === true) {
        count--;
        $("#clock").text(`00:${count}`);
        if (count === 0) {
            stop();
        }
    }
};

const intervalId = setInterval(countdown, 1000),
    stop = () => {
        clearInterval(intervalId);
    };


// //display button to play again on click, run initializer. 




    $(".radioBtn").on("click", function () {
        // console.log(this);
        trivia.selectedAnswer = $(this).attr("id");
        console.log(trivia.selectedAnswer);
    })

    $("#startUp").on("click", function () {
        // console.log("clicky!");
        trivia.gameStart();
        
    })

    $("#restart").on("click", function () {
        trivia.gameInit();
        trivia.gameStart();
    })

    $("#submitA").on("click", (event) => {
        event.preventDefault();
        trivia.checkAnswer();
        
        
    });
