// convert json to array
const fs = require('fs')
const data = fs.readFileSync('./questions.json', 'utf8')
const obj = JSON.parse(data)



let question1 = obj.questions[1].question

document.querySelector("#question").innerText = question1

