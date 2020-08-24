
// Require files
// const questions = require('./question-list.js')
// // console.log(questions[0].answer)
// const prizeArr = require('./prize-list.js')
// // console.log({prizeArr})



// Get right answer by index 0
const correctAnswer = questions[0].answer[0]
console.log({ correctAnswer })
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

function getCorrectAnswer(ans) {
    if (ans === correctAnswer) {
        return true
    } else {
        return false  
    }
}

const shuffledAnswerArr = shuffle(questions[0].answer)

document.querySelector('#answer-a').innerText = shuffledAnswerArr[0]
document.querySelector('#answer-b').innerText = shuffledAnswerArr[1]
document.querySelector('#answer-c').innerText = shuffledAnswerArr[2]
document.querySelector('#answer-d').innerText = shuffledAnswerArr[3]
document.querySelector('#question').innerText = questions.question



console.log({ shuffledAnswerArr })
console.log(shuffledAnswerArr[0])
let test = getCorrectAnswer("1st")
console.log({test})










