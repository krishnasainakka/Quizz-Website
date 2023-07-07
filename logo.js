const questions = [
    {
        question: "<img src='img/logo1.jpg' style='width:250px; height:150px; display: block; margin-left: auto; margin-right: auto;'>",
        answers: [
            {text: "Titan", correct: false},
            {text: "Fasttrack", correct: true},
            {text: "Casico", correct: false},
            {text: "Timex", correct: false},
        ]
    },
    {
        question: "<img src='img/logo2.jpg' style='width:250px; height:150px; display: block; margin-left: auto; margin-right: auto;'>",
        answers: [
            {text: "Google Drive", correct: false},
            {text: "Dropbox", correct: true},
            {text: "Share IT", correct: false},
            {text: "Cisco Systems", correct: false},
        ]
    },
    {
        question: "<img src='img/logo3.jpg' style='width:250px; height:150px; display: block; margin-left: auto; margin-right: auto;'>",
        answers: [
            {text: "NVIDIA", correct: true},
            {text: "NIKON", correct: false},
            {text: "AMD", correct: false},
            {text: "WESTERN DIGITAL", correct: false},
        ]
    },
    {
        question: "<img src='img/logo4.jpg' style='width:250px; height:150px;display: block; margin-left: auto; margin-right: auto;'>",
        answers: [
            {text: "AOL", correct: false},
            {text: "ADOBE", correct: true},
            {text: "AMD", correct: false},
            {text: "AIRBNB", correct: false},
        ]
    },
    {
        question: "<img src='img/logo5.jpg' style='width:250px; height:150px;display: block; margin-left: auto; margin-right: auto;'>",
        answers: [
            {text: "ENCARTA", correct: false},
            {text: "SAFARI", correct: false},
            {text: "OPERA", correct: false},
            {text: "WIKEPEDIA", correct: true},
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