const quizData = [
    {
        question:"Which language run in web browser?",
        a:"java",
        b:"c",
        c:"python",
        d:"javascript",
        correct:"d",
    },
    {
        question:"What does Css stand for?",
        a:"Central style sheets",
        b:"cascading style sheets",
        c:"cascading simple sheets",
        d:"cars SUVs sailboats",
        correct:"b",
    },
    {
        question:"What does HTML stand for?",
        a:"Hypertext markup language",
        b:"Hypertext markdown language",
        c:"Hyperloop machine language",
        d:"Helicopters Terminals Motorboats",
        correct:"a",
    },
    {
        question:"What year was javscript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of these",
        correct:"b",
    },
    {
        question:"Which tag is used to scrolling data?",
        a:"scroll",
        b:"maequee",
        c:"a",
        d:"bold",
        correct:"b",
    },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0 
loadQuiz()
function loadQuiz() {
    deselectAnswers()
const currentQuizData = quizData[currentQuiz]
questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getselected() {
let answer
answerEls.forEach(answerEl => {
    if(answerEl.checked) {
answer = answerEl.id
    }
})
return answer
}
submitBtn.addEventListener('click',() => {
    const answer = getselected()
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2> You answer at ${score}/${quizData.length}questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})



