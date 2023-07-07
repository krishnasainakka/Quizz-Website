const questions = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "Venus", correct: false},
            {text: "Mars", correct: true},
            {text: "Neptune", correct: false},
            {text: "Mercury", correct: false},
        ]
    },
    {
        question: "What is the name of the largest moon in our solar system?",
        answers: [
            {text: "Ganymede", correct: true},
            {text: "Titan", correct: false},
            {text: "1Europa", correct: false},
            {text: "Callisto", correct: false},
        ]
    },
    {
        question: "What is the brightest star in the night sky?",
        answers: [
            {text: "Polaris", correct: false},
            {text: "Alpha Centauri", correct: false},
            {text: "Sirius", correct: true},
            {text: "Betelgeuse", correct: false},
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
            {text: "Mars", correct: false},
            {text: "Earth", correct: false},
        ]
    },
    {
        question: "Which space probe was the first to reach Pluto?",
        answers: [
            {text: "Voyager 1", correct: false},
            {text: " New Horizons", correct: true},
            {text: "Cassini", correct: false},
            {text: "Pioneer 10", correct: false},
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