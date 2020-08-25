// HELPER FUNCTIONS

// Reset all button
const resetChoices = function () {
    document.querySelector('#answer-a').classList.remove("deactivate-btn", "choice-clicked", "show-correct-answer")
    document.querySelector('#answer-b').classList.remove("deactivate-btn", "choice-clicked", "show-correct-answer")
    document.querySelector('#answer-c').classList.remove("deactivate-btn", "choice-clicked", "show-correct-answer")
    document.querySelector('#answer-d').classList.remove("deactivate-btn", "choice-clicked", "show-correct-answer")
}

// show popup

const showPopup = function () {
    document.querySelector('#popup-wrapper').style.zIndex = '1'
    document.querySelector('#popup-wrapper').style.opacity = '100'
    document.querySelector('#popup').style.opacity = '100'
}

const hidePopup = function () {
    document.querySelector('#popup-wrapper').style.zIndex = '-1'
    document.querySelector('#popup-wrapper').style.opacity = '0'
    document.querySelector('#popup').style.opacity = '0'
    // document.querySelector('#popup-wrapper').style.width = '0'
    // document.querySelector('#popup').style.display = 'none'
    // document.querySelector('#popup').style.opacity = '100'
}

const deActivateAllButton = function () {
    document.querySelector('#answer-a').classList.add('deactivate-btn')
    document.querySelector('#answer-b').classList.add('deactivate-btn')
    document.querySelector('#answer-c').classList.add('deactivate-btn')
    document.querySelector('#answer-d').classList.add('deactivate-btn')
}


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

// default value
let users = []
let totalQuestionLeft = 15
let currentPrize = 0
let currentQuestion = 0

let correctAnswer = questions[currentQuestion].answers[0]

// Login
let name = document.querySelector("#enter-name")








//load question when game start
const loadQuestion = function (currentQuestion) {
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
    // put music according to number of question passed.
    if (10 < totalQuestionLeft && totalQuestionLeft <= 15) {
        document.querySelector('iframe').src = './music/50-1.000-music.mp3'
    }
    else if (5 <= totalQuestionLeft && totalQuestionLeft <= 10) {
        document.querySelector('iframe').src = './music/2.000-32.000-music.mp3'
    }
    else if (3 <= totalQuestionLeft && totalQuestionLeft <= 4) {
        document.querySelector('iframe').src = './music/65.000-125.000-music.mp3'
    }
    else if (totalQuestionLeft === 2) {
        document.querySelector('iframe').src = './music/500.000-music.mp3'
    }
    else if (totalQuestionLeft === 1) {
        document.querySelector('iframe').src = './music/1.000.000-music.mp3'
    }
}


loadQuestion(currentQuestion);

// When user Click: 1. show clicked option, 2/ show correct answer, 3/ show prize earn or game end

const prizeList = document.querySelectorAll('li')
const choices = document.querySelectorAll('.choice')


// Run through choice of answers. If user click on any of them, add a class to change the button.
choices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
        event.target.classList.add("choice-clicked")
        if (event.target.innerText === correctAnswer) {
            setTimeout(function () {
                // show correct answer in green
                event.target.classList.replace("choice-clicked", "show-correct-answer")
                // turn on correct-answer music
                document.querySelector('iframe').src = './music/correct-answer.mp3'
                // Update number of passed questions and add border to new money tier, delete border of old money tier. 
                if (totalQuestionLeft !== 15) {
                    prizeList[totalQuestionLeft].classList.remove('pass-question')
                    totalQuestionLeft--
                    prizeList[totalQuestionLeft].classList.add('pass-question')
                } else {
                    totalQuestionLeft--
                    prizeList[totalQuestionLeft].classList.add('pass-question')
                }
                // Update current prize
                currentPrize = prizeArr[totalQuestionLeft]
                console.log({ currentPrize })
                // Deactivate all button
                deActivateAllButton()
                document.querySelector('.fifty-fifty').classList.add("deactivate-btn")


                // Activate next button
                document.querySelector('.next').classList.remove('deactivate-btn')
            }, 1000)
        }
        else {
            // setTimeout(function () {
                const showResultAfterWrongAnswerSelected = function() {
                    // Loop through all choice elements, if a choice has innerText that match correct answer, add class show-correct-answer to it
                    for (const choice of choices) {
                        if (choice.innerText === correctAnswer) {
                            choice.classList.add('show-correct-answer')
                        }
                    }
                    // turn on correct-answer music
                    document.querySelector('iframe').src = './music/wrong-answer.mp3'
                    // deactivate all buttons
                    deActivateAllButton()
                    // Activate next button
                    document.querySelector('.next').classList.remove('deactivate-btn')
                    // Check current prize
                    console.log({ currentPrize })
                    console.log({ totalQuestionLeft })
                }

                setTimeout(function(){
                    showResultAfterWrongAnswerSelected()
                    gameOver()
                }, 700)

                // setTimeout(showResultAfterWrongAnswerSelected(),500) 
                // setTimeout(gameOver(),6000)
            // }, 1000)
            // Show pop up
            // setTimeout(gameOver(), 700)
        }
    })
})


// Add an event listener to the next button, so that it load the next question

const nextBtn = document.querySelector('.next')
nextBtn.addEventListener('click', loadNewQuestion)

function loadNewQuestion() {
    // update current question by 1
    currentQuestion++
    correctAnswer = questions[currentQuestion].answers[0]
    console.log({ currentQuestion })
    console.log({ correctAnswer })
    console.log({ totalQuestionLeft })
    console.log({ currentPrize })
    if (hintCount > 0) {
        document.querySelector(".fifty-fifty").classList.remove("deactivate-btn")
        document.querySelector('.three-times').classList.remove(".deactivate-hint-count")
    }
    // load game again pass in new current question number
    loadQuestion(currentQuestion)
    // deactivate next button again
    document.querySelector('.next').classList.add('deactivate-btn')
    // reset all button to default
    document.querySelector('#answer-a').classList.remove("deactivate-btn", "choice-clicked", "show-correct-answer")
    document.querySelector('#answer-b').classList.remove("deactivate-btn", "choice-clicked", "show-correct-answer")
    document.querySelector('#answer-c').classList.remove("deactivate-btn", "choice-clicked", "show-correct-answer")
    document.querySelector('#answer-d').classList.remove("deactivate-btn", "choice-clicked", "show-correct-answer")

}

//GAME OVER SCENARIO

const gameOver = function () {
    // Display popup
    setTimeout(showPopup(), 1000)
    // showPopup()

    // Show text according to how many question left
    if (totalQuestionLeft <= 10) {
        document.querySelector('#popup-text').innerText = `Congratulation!\n You still won ${prizeList[10]}`
    }
    else if (totalQuestionLeft <= 5) {
        document.querySelector('#popup-text').innerText = `Congratulation!\n You still Won $ ${prizeList[5]}`
    }
    else {
        document.querySelector('#popup-text').innerText = `Good Luck Next Time!`
    }

}

// USER ACTIVELY QUIT

document.querySelector('.quit').addEventListener('click', function () {
    setTimeout(showPopup(), 1000)
    if (totalQuestionLeft === 15) {
        document.querySelector('#popup-text').innerText = `Good Luck Next Time!`
    } else {
        document.querySelector('#popup-text').innerText = `Congratulation!\nYou Won $ ${currentPrize}`
    }
    // Display popup
})



// USER CLICK PLAY AGAIN

document.querySelector('.play-again').addEventListener('click', function (event) {
    // Hide popup
    hidePopup();
    // Reset all variable
    totalQuestionLeft = 15
    currentPrize = 0
    currentQuestion = 0
    correctAnswer = questions[currentQuestion].answers[0]
    // Reset all choices
    resetChoices()
    // Load first question again
    loadQuestion(currentQuestion);
})


// eleminate options
// loop through all choice, if choice doesn't has correct answer, make 2 of them empty
const fiftyFifty = function () {
    let count = 0
    for (const choice of choices) {
        if (choice.innerText !== correctAnswer) {
            if (count < 2) {
                choice.innerText = ''
                count++
            }
        }
    }
}


let hintCount = 3

document.querySelector('.fifty-fifty').addEventListener('click', function () {
    fiftyFifty()
    if (hintCount > 0) {
        hintCount--
        document.querySelector('.three-times').innerText = `x${hintCount}`
        document.querySelector('.fifty-fifty').classList.add("deactivate-btn")
        document.querySelector('.three-times').classList.add(".deactivate-hint-count")
    } else {
        document.querySelector('.three-times').innerText = ''
        document.querySelector('.fifty-fifty').classList.add("deactivate-btn")
        document.querySelector('.three-times').classList.add(".deactivate-hint-count")
    }
})


console.log({ currentQuestion })
console.log({ correctAnswer })
console.log({ totalQuestionLeft })
console.log({ currentPrize })
















