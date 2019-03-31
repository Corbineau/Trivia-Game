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
        q: "The word 'triviae' originally meant _________, which ultimately came to mean 'a public place', and finally, 'commonplace'.",
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

let selectedAnswer = "";
let isThinking = false;
let count = 15;


function Question({ q, a, b, c, d, answer, rightA, wrongA }) {
    this.q = q;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer; //this is the letter of the correct answer
    this.rightA = rightA;
    this.wrongA = wrongA;
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

    gameStart: () => {
        this.gameOn = true;
        this.startModal.hide;
        gameLoop();

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
        trivia.timeUp.show;
        //this.count = 15;
        //if answer is selected and submit is clicked before the time is up, check for correctness, show correct/incorrect modal, and automatically move to the next question. 
    } else if (qObj.answer === selectedAnswer) {
        trivia.rightModal.show;
        trivia.numRight++;
    } else if (qObj.answer != selectedAnswer) {
        trivia.wrongModal.show;
        trivia.numWrong++;
    }
};










var interval = 15000; // how much time should the delay between two iterations be (in milliseconds)?

var gameLoop = () => {
    if (trivia.gameOn === true) {
        return new Promise(function (outerResolve) { //promises, promises
            var promise = Promise.resolve();
            var i = 0;
            var next = () => {
                var currentQuestion = triviaQs[i];
                // the actual game activity
                count = 15;
                isThinking = true;
                countdown();
                $("#question").html(currentQuestion.q);
                $("#aText").html(currentQuestion.a);
                $("#bText").html(currentQuestion.b);
                $("#cText").html(currentQuestion.c);
                $("#dText").html(currentQuestion.d);
                $("#rightAnswer").html(`<img ${currentQuestion.rightA} />`);
                $("#wrongAnswer").html(`<img ${currentQuestion.wrongA} />`);
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

gameLoop().then(() => {
    console.log('Loop finished.');
    trivia.endModal.show;
    trivia.gameOn = false;
});











//     //On load, show entry modal, after 3 seconds, load first question 
//     gameStart: function () {

//         this.gameOn = true;
//         console.log(this.gameOn);
//         console.log(this);
//         this.questionLoop();

//     },
//     // Iterate through questions 

//     questionLoop: async function () {

//         //for (let i = 0; i <= triviaQs.length; i++) {

//         triviaQs.forEach(function (index) {
//             triviaGame.intervalId = 150000;
//             setTimeout(function () {
//                 console.log(index);
//                 console.log(triviaGame.count);
//                 triviaGame.isThinking = true;
//                 triviaGame.currentQuestion = triviaQs[index];
//                 triviaGame.countdown();
//                 console.log(triviaGame.currentQuestion);
//                 $("#question").html(triviaGame.currentQuestion.q);
//                 $("#aText").html(triviaGame.currentQuestion.a);
//                 $("#bText").html(triviaGame.currentQuestion.b);
//                 $("#cText").html(triviaGame.currentQuestion.c);
//                 $("#dText").html(triviaGame.currentQuestion.d);
//                 $("#rightAnswer").html(`<img ${triviaGame.currentQuestion.rightA} />`);
//                 $("#wrongAnswer").html(`<img ${triviaGame.currentQuestion.wrongA} />`);
//    storeAnswer = () =>{ while(trivia.count > 0) {
//                 if($("input[name='possAnswer'").is(":checked")) {
//                     console.log("checked!");
//                     console.log(this);
//                     console.log($("input[name='possAnswer'").attr("id"));
//                     var selectedAnswer = $("input[name='possAnswer'").attr("id");
//                     return selectedAnswer;
//                 };
//             }
//         }     

//                 }, index * triviaGame.intervalId);
//             });
//     },

//     


//     gameInit: function() {
//         this.gameOn = false;
//         this.count = 15;
//         this.numRight = 0;
//         numWrong = 0;

//     },
//     }







// //once all of the questions have gone, display game-end modal, with number of answers right, number wrong, and something pithy based on how many they got.

// //display button to play again on click, run initializer. 


// for (let key in triviaGame) {
//     if (typeof triviaGame[key] == 'function') {
//         triviaGame[key] = triviaGame[key].bind(triviaGame);
//     }
// }

$(document).ready(function () {


    $(".radioBtn").on("click", function () {
        console.log(this);
        selectedAnswer = $(this).attr("id");
        //console.log(selectedAnswer);
    })

    $("#startUp").on("click", function () {
        trivia.gameStart();
    })

    $("#restart").on("click", function () {
        trivia.gameStart();
    })

})








