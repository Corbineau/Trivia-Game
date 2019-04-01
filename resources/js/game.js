let triviaQs = [];
const questions = [
    {
        q: "In Latin eduction, The 'Trivia' are the three foundational liberal arts:",
        a: "reading, writing, and arithmetic",
        b: "history, literature, and philosophy",
        c: "grammar, logic, and rhetoric",
        d: "blood, love, and rhetoric",
        answer: "c",
        fact: "In addition to the 'Trivia' of Grammar, Logic, and Rhetoric are the Quadrivium ",
        
    },
    {
        q: "The board game <i>Trivial Pursuit</i> was first released in:",
        a: "1982",
        b: "1973",
        c: "1979",
        d: "1984",
        answer: "a",
        fact: "src='resources/images/correct.jpg",
        

    },
    {
        q: "The word 'triviae' originally meant _________, which ultimately came to mean 'a public place', and finally, 'commonplace'.",
        a: "three lives",
        b: "three roads",
        c: "public roads",
        d: "water of life",
        answer: "b",
        fact: "src='resources/images/correct.jpg",
        
    },
    {
        q: "The word 'trivia' came to mean 'trite, unimportant, commonplace, banal' in the ____, largely due to the works of ________",
        a: "1300's, Chaucer",
        b: "1800's, Logan Pearsall Smith",
        c: "1600's, Shakespere",
        d: "1700's, Jonathan Swift",
        answer: "c",
        fact: "src='resources/images/correct.jpg",
        
    },
    {
        q: "Fred L Worth, author of the Trivia Encyclopedia, deliberately placed misinformation in his books to catch anyone who attempted to violate his copyright. One of these incorrect answers was used in the original Trivial Pursuit board game, 'what was Columbo's first name?' The wrong answer was ______; Columbo's first name was actually _______",
        a: "George, Columbo",
        b: "Frank, nonexistant",
        c: "Frances, Lieutenant",
        d: "Philip, Frank (never actually stated)",
        answer: "d",
        fact: "src='resources/images/correct.jpg",
        
    },
    {
        q: "Fred L Worth sued <i>Trivial Pursuit</i> for 300 Million dollars for copyright infringment. Trivial Pursuit successfully defeated the suit, arguing that:",
        a: "Fred L. Worth actually plagarized someone else.",
        b: "You can't copyright facts.",
        c: "The Copyright Trap is an invalid tactic, like entrapment.",
        d: "A Board Game is protected under Fair Use laws.",
        answer: "b",
        fact: "src='resources/images/correct.jpg",
        
    },
    {
        q: "A contemporary slang synonym for trivial is:",
        a: "bougie",
        b: "ridic",
        c: "banjie",
        d: "triflin'",
        answer: "d",
        fact: "src='resources/images/correct.jpg",
        
    },
    {
        q: "The first known labeling of trivia as a casual parlor game was in a February 5th, 1965 column published in which newspaper?",
        a: "The Columbia Daily Spectator",
        b: "The Sacramento News and Review",
        c: "The New York Times",
        d: "The Portland Press Herald",
        Answer: "a",
        fact: "src='resources/images/correct.jpg",
        
    },
    {
        q: "The two longest ongoing trivia contests in the world are the Great Midwest Trivia Contest at Lawrence University and the Williams Trivia Contest, both of which started in the spring of which year?",
        a: "1959",
        b: "1982",
        c: "1979",
        d: "1966",
        answer: "d",
        fact: "src='resources/images/correct.jpg",
        
    },
    {
        q: "Which televised trivia competition was the framing device for a popular 2008 movie set in Mumbai, India?",
        a: "Jeopardy",
        b: "Who Wants To Be a Millionaire?",
        c: "The $100,000 Pyramid",
        d: "Bollywood Squares",
        Answer: "b",
        fact: "src='resources/images/correct.jpg'",
        

    }
]

let selectedAnswer = "";
let isThinking = false;
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
    numRight: 0,
    numWrong: 0,
    startModal: $("#startGame"),
    rightModal: $("#rightAnswer"),
    wrongModal: $("#wrongAnswer"),
    endModal: $("#endGame"),
    timeUp: $("#timeUp"),

    gameStart: function () {
        console.log(this);
        this.gameOn = true;
        $(this.startModal).hide();
        gameLoop().then(() => {
            console.log('Loop finished.');
            $(trivia.endModal).css("display", "flex");
            trivia.gameOn = false;
        });

    },

    gameInit: () => {
        this.gameOn = false;
        this.numRight = 0;
        this.numWrong = 0;

    },

}


//show countdown clock (15 second timer)
countdown = () => {
    if (isThinking === true) {
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

//check the answers
let checkAnswer = (qObj) => {
    console.log(qObj);
    //if submit is not clicked before the time is up, show time up modal, and automatically move to next question
    isThinking = false;
    if ((selectedAnswer === null) && (count === 0)) {
        trivia.timeUp.css("display", "flex");
        //if answer is selected and submit is clicked before the time is up, check for correctness, show correct/incorrect modal, and automatically move to the next question. 
    } else if (qObj.answer === selectedAnswer) {
        trivia.rightModal.css("display", "flex");
        trivia.numRight++;
        console.log(`Correct: ${trivia.numRight}`);
    } else if (qObj.answer != selectedAnswer) {
        trivia.wrongModal.css("display", "flex");;
        trivia.numWrong++;
        console.log(`Wrong: ${trivia.numWrong}`);
    }
    // gameLoop.next();
};




var gameLoop = () => {
    if (trivia.gameOn === true) {
        return new Promise(function (outerResolve) { //promises, promises
            var promise = Promise.resolve();
            var i = 0;
            var next = () => {
                $(".modal").hide();
                var currentQuestion = triviaQs[i];
                // the actual game activity
                $(".radioBtn").prop("checked", false);
                count = 15;
                isThinking = true;
                countdown();
                $("#question").html(currentQuestion.q);
                $("#aText").html(currentQuestion.a);
                $("#bText").html(currentQuestion.b);
                $("#cText").html(currentQuestion.c);
                $("#dText").html(currentQuestion.d);
                $("#rightAnswer").html(`Correct!<br/> ${currentQuestion.fact} />`);
                $("#wrongAnswer").html(`Wrong!<br /> The correct answer is <strong>${currentQuestion.answer}</strong><br /> ${currentQuestion.fact} />`);
                console.log(currentQuestion);
                $("#submitA").on("click", (event) => {
                    event.preventDefault();
                    checkAnswer(currentQuestion);
                    
                })
                if (++i < triviaQs.length) {
                    promise = promise.then(() => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
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
}




// //display button to play again on click, run initializer. 


for (let key in trivia) {
    if (typeof trivia[key] == 'function') {
        trivia[key] = trivia[key].bind(trivia);
    }
}

$(document).ready(function () {


    $(".radioBtn").on("click", function () {
        console.log(this);
        selectedAnswer = $(this).attr("id");
        //console.log(selectedAnswer);
    })

    $("#startUp").on("click", function () {
        console.log("clicky!");
        trivia.gameStart();
        
    })

    $("#restart").on("click", function () {
        trivia.gameStart();
    })

})








