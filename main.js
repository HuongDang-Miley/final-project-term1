// // convert json to array
// const fs = require('fs')
// const data = fs.readFileSync('./questions.json', 'utf8')
// const obj = JSON.parse(data)

const questions = [
    {
        "question": "You're 3rd place right now in a race. What place are you in?",
        "correctAnswer": "1st",
        "choice1": "2nd",
        "choice2": "3rd",
        "choice3": "None"
    },
    {
        "question": "How many months have 28 days?",
        "correctAnswer": "All of them",
        "choice1": "One",
        "choice2": "Two",
        "choice3": "Depends on if there’s a leap of year or not"
    },
    {
        "question": "The answer is really big",
        "correctAnswer": "THE ANSWER",
        "choice1": "Really Big",
        "choice2": "An Elephent",
        "choice3": "The data given is insufficient."
    }
]


// const prizeArr = [50, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 65000, 125000, 500000, 1000000000]
const prizeArr = [1000000000, 500000, 125000, 65000, 32000, 16000, 8000, 4000, 2000, 1000, 500, 300, 200, 100, 50]


const question1 = questions[1].question
const correctChoice = questions[1].correctAnswer
const choice1 = questions[1].choice1
const choice2 = questions[1].choice2
const choice3 = questions[1].choice3



const questText = document.querySelector("#question")
const answerA = document.querySelector("#answer-a")
const answerB = document.querySelector("#answer-b")
const answerC = document.querySelector("#answer-c")
const answerD = document.querySelector("#answer-d")
questText.innerText = question1
answerA.innerText = correctChoice;
answerA.classList.add('correct-answer')
answerB.innerText = choice1;
answerC.innerText = choice2;
answerD.innerText = choice3;

const prizeList = document.querySelectorAll('li')
const choices = document.querySelectorAll('.choice')


let questionPass = 15
let currentPrize = 0

choices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
        event.target.classList.add("choice-clicked")
        if (event.target.innerText === correctChoice) {
            setTimeout(function () {
                // show correct answer in green
                event.target.classList.replace("choice-clicked", "show-correct-answer")
                // turn on correct-answer music
                document.querySelector('iframe').src = './music/correct-answer.mp3'
                // Update number of passed questions and add border to money tier
                questionPass = questionPass - 1
                console.log({ questionPass })
                prizeList[questionPass].classList.add('pass-question')
                // Update current prize
                currentPrize = prizeArr[questionPass]
                console.log({ currentPrize })
                // Deactivate all button
                document.querySelector('#answer-a').classList.add('deactivate-btn')
                document.querySelector('#answer-b').classList.add('deactivate-btn')
                document.querySelector('#answer-c').classList.add('deactivate-btn')
                document.querySelector('#answer-d').classList.add('deactivate-btn')
            }, 1000)
        }

        else {
            setTimeout(function () {
                // show correct answer in green
                document.querySelector('.correct-answer').classList.add('show-correct-answer')
                // turn on correct-answer music
                document.querySelector('iframe').src = './music/wrong-answer.mp3'
                // deactivate all buttons
                document.querySelector('#answer-a').classList.add('deactivate-btn')
                document.querySelector('#answer-b').classList.add('deactivate-btn')
                document.querySelector('#answer-c').classList.add('deactivate-btn')
                document.querySelector('#answer-d').classList.add('deactivate-btn')
                // Check current prize
                console.log({ currentPrize })
                console.log({ questionPass })
            }, 1000)
        }
    })
})



console.log({ prize })
console.log({ questionPass })




