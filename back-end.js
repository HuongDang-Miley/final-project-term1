// HELPER FUNCTIONS
//Create a new array from the original arr, shuffle it
function shuffle(a) {
    let result = [...a]
    let j, x, i;
    for (i = result.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = result[i];
        result[i] = result[j];
        result[j] = x;
    }
    return result
}

// MAIN FUNCTIONS

let currentQuestion = 0
// const correctAnswer = questions[currentQuestion].answers[0]

//load question when game start
const startGame = function (currentQuestion) {
    const objQuest = questions[currentQuestion]
    // print question to question field
    const printQuest = objQuest.question
    document.querySelector('#question').innerText = printQuest
    // shuffle answer, then print to choice field.
    const shuffledAnswerArr = shuffle(objQuest.answers)
    document.querySelector('#answer-a').innerText = shuffledAnswerArr[0]
    document.querySelector('#answer-b').innerText = shuffledAnswerArr[1]
    document.querySelector('#answer-c').innerText = shuffledAnswerArr[2]
    document.querySelector('#answer-d').innerText = shuffledAnswerArr[3]
}

startGame(currentQuestion)

// // When user Click: 1. show clicked option, 2/ show correct answer, 3/ show prize earn or game end

// const prizeList = document.querySelectorAll('li')
// const choices = document.querySelectorAll('.choice')

// let totalQuestionPass = 15
// let currentPrize = 0


// // Run through choice of answers. If user click on any of them, add a class to change the button.
// choices.forEach(function (choice) {
//     choice.addEventListener('click', function (event) {
//         event.target.classList.add("choice-clicked")
//         if (event.target.innerText === correctAnswer) {
//             setTimeout(function () {
//                 // show correct answer in green
//                 event.target.classList.replace("choice-clicked", "show-correct-answer")
//                 // turn on correct-answer music
//                 document.querySelector('iframe').src = './music/correct-answer.mp3'
//                 // Update number of passed questions and add border to money tier
//                 totalQuestionPass = totalQuestionPass - 1
//                 console.log({ totalQuestionPass })
//                 prizeList[totalQuestionPass].classList.add('pass-question')
//                 // Update current prize
//                 currentPrize = prizeArr[totalQuestionPass]
//                 console.log({ currentPrize })
//                 // Deactivate all button
//                 document.querySelector('#answer-a').classList.add('deactivate-btn')
//                 document.querySelector('#answer-b').classList.add('deactivate-btn')
//                 document.querySelector('#answer-c').classList.add('deactivate-btn')
//                 document.querySelector('#answer-d').classList.add('deactivate-btn')
//             }, 1000)
//         }

//         else {
//             setTimeout(function () {
//                 // show correct answer in green
//                 document.querySelector('.correct-answer').classList.add('show-correct-answer')
//                 // turn on correct-answer music
//                 document.querySelector('iframe').src = './music/wrong-answer.mp3'
//                 // deactivate all buttons
//                 document.querySelector('#answer-a').classList.add('deactivate-btn')
//                 document.querySelector('#answer-b').classList.add('deactivate-btn')
//                 document.querySelector('#answer-c').classList.add('deactivate-btn')
//                 document.querySelector('#answer-d').classList.add('deactivate-btn')
//                 // Check current prize
//                 console.log({ currentPrize })
//                 console.log({ questionPass })
//             }, 1000)
//         }
//     })
// })



// // console.log({ prize })
// // console.log({ questionPass })





//     // const correctAnswer = questions[0].answer[0]


// // Get right answer by index 0
// // const shuffledAnswerArr = shuffle(questions[0].answer)

// // function getCorrectAnswer(ans) {
// //     if (ans === correctAnswer) {
// //         return true
// //     } else {
// //         return false  
// //     }
// // }





// // Helper function









