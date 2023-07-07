const questions = [
    {
        question: "Which Telugu movie won the National Film Award for Best Feature Film in Telugu in 2019?",
        answers: [
            {text: "Rangasthalam", correct: true},
            {text: "Jersey", correct: false},
            {text: "F2: Fun and Frustration", correct: false},
            {text: "Mahanati", correct: false},
        ]
    },
    {
        question: "Who directed the Telugu movie 'Baahubali: The Beginning'?",
        answers: [
            {text: "Rajamouli", correct: true},
            {text: "Trivikram Srinivas", correct: false},
            {text: "Sukumar", correct: false},
            {text: "Boyapati Srinu", correct: false},
        ]
    },
    {
        question: "Who composed the music for the Telugu movie 'Magadheera'?",
        answers: [
            {text: "Anirudh Ravichander", correct: false},
            {text: "Thaman S", correct: false},
            {text: "Devi Sri Prasad", correct: true},
            {text: "Mani Sharma", correct: false},
        ]
    },
    {
        question: "Which Telugu movie is a remake of the Tamil film 'Vikram Vedha'?",
        answers: [
            {text: "Gentleman", correct: true},
            {text: "Nannaku Prematho", correct: false},
            {text: "Arjun Reddy", correct: false},
            {text: "Officer", correct: false},
        ]
    },
    {
        question: "Who played the lead role in the Telugu movie 'Mayabazar' (1957)?",
        answers: [
            {text: "N.T. Rama Rao", correct: false},
            {text: "Akkineni Nageswara Rao", correct: false},
            {text: "S.V. Ranga Raoe", correct: true},
            {text: "Savitri", correct: false},
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn")
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    }
    else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
    if(score === 5){
        const medalImage = document.createElement('img');
        const medalContainer = document.createElement('div');

        medalImage.src = 'img/1.jpg'
        medalImage.style.background = 'none';
        medalImage.style.width = '200px';
        medalImage.style.height = '300px';
        medalImage.style.display = 'block';
        medalImage.style.marginLeft = 'auto';
        medalImage.style.marginRight = 'auto';

        medalContainer.appendChild(medalImage);
        questionElement.insertAdjacentElement('afterend', medalContainer);
    }
    else if(score === 4){
        const medalImage = document.createElement('img');
        const medalContainer = document.createElement('div');
        medalImage.src = 'img/2.jpg'
        medalImage.style.background = 'none';
        medalImage.style.width = '200px';
        medalImage.style.height = '300px';
        medalImage.style.display = 'block';
        medalImage.style.marginLeft = 'auto';
        medalImage.style.marginRight = 'auto';

        medalContainer.appendChild(medalImage);
        questionElement.insertAdjacentElement('afterend', medalContainer);
    }
    else if(score === 3){
        const medalImage = document.createElement('img');
        const medalContainer = document.createElement('div');
        medalImage.src = 'img/3.jpg'
        medalImage.style.background = 'none';
        medalImage.style.width = '200px';
        medalImage.style.height = '300px';
        medalImage.style.display = 'block';
        medalImage.style.marginLeft = 'auto';
        medalImage.style.marginRight = 'auto';

        medalContainer.appendChild(medalImage);
        questionElement.insertAdjacentElement('afterend', medalContainer);
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();