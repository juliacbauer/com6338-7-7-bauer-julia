// Your code here
// Set up questions
var questionsArr = [
    {
        question: 'What is the mascot of UF?',
        answer: 'Gator',
        options: [
          'Crocodile',
          'Lizard',
          'Gator',
      ]
    },
    {
        question: 'What colors represent UF?',
        answer: 'Orange and blue',
        options: [
          'Orange and blue',
          'Pink and purple',
          'Red and green',
        ]
    },
    {
        question: 'Where is UF located?',
        answer: 'Gainesville',
        options: [
          'Tampa',
          'Gainesville',
          'Miami',
        ]
    },
    {
        question: 'What is the best college at UF?',
        answer: 'CJC',
        options: [
          'Business',
          'Liberal Arts',
          'CJC',
        ]
    },
    {
        question: 'Is UF the best school ever?',
        answer: 'Of course',
        options: [
          'No',
          'Yes',
          'Of course',
        ]
    }
  ]

//Set up vars
var quizContainer = document.querySelector('#quiz')
var score = 0 
var currentQuestion = 0 
var startButton = document.createElement('button')
var remainingTime
var timerId = document.querySelector('#timer')
var timer = document.createElement('p')
//I have this code but test 7 is still failing
var previousScore = localStorage.getItem('previous-score')
var previousScoreP = document.createElement('p')
var question = document. createElement('p')
var answerButton
var unansweredQuestion
var answers

//Set up button
startButton.id = 'start-quiz'
startButton.textContent = 'Start quiz!'
quizContainer.appendChild(startButton)

//Show previous score
  if (previousScore) {
    previousScoreP = document.createElement('p')
    previousScoreP.textContent = 'Previous Score: ' + previousScore
    quizContainer.appendChild(previousScoreP)
  } else {
    previousScoreP = document.createElement('p')
    previousScoreP.textContent = 'Good luck!'
    quizContainer.appendChild(previousScoreP)
  }

//Timer function
function startTime() {
  timerId = setInterval(function() {
    remainingTime--
    if (remainingTime >= '0') {
      timer.textContent = remainingTime
    } else {
      //I have this code but it won't move to next question
      clearInterval(timerId)
      currentQuestion++
    }
  }, 1000)
}

//Start quiz
startButton.onclick = function(e) {
  showQuestions()
  startTime()
  //Get rid of start button and previous score
  quizContainer.removeChild(startButton)
  quizContainer.removeChild(previousScoreP)
}

//Show question function
function showQuestions() {
  //Set timer
  //The timer shows up delayed at 29 seconds instead of 30?
  remainingTime = '30'
  //Display questions
  //This works when clicking start button but test 1 is failing
  var unansweredQuestion = questionsArr[currentQuestion]
  question.textContent = unansweredQuestion.question
  quizContainer.appendChild(question)
  //Display answers
  var answers = document.createElement('div')
  quizContainer.appendChild(answers)
  unansweredQuestion.options.forEach(function(option){
  var answerButton = document.createElement('button')
  answerButton.textContent = option
  answers.appendChild(answerButton)
  })
  //Show timer
  quizContainer.appendChild(timer)
  }

//Move to next question
//This isn't correct but this is how I was attempting to move to next Q
//Tried to use if/else with target answer = correct answer, didn't work
//Stuck on this
answerButton.target.onclick = function(e) {
  currentQuestion++
  score++
  startTime
} 

//End quiz function
//I have this code but test 6 is failing
function endQuiz() {
  var percent = Math.round(score / questionsArr.length * 100) + '%'
  quizContainer.appendChild(startButton)
  quizContainer.appendChild(previousScoreP)
  previousScoreP.textContent = 'Previous Score: ' + percent
}