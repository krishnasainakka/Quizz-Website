const questions = [
    {
        question: "Who is considered the 'Father of the Nation' in India?",
        answers: [
            {text: "Mahatma Gandhi", correct: true},
            {text: "Jawaharlal Nehru", correct: false},
            {text: "Subhash Chandra Bose", correct: false},
            {text: "Bhagat Singh", correct: false},
        ]
    },
    {
        question: " In which year did India gain independence from British colonial rule?",
        answers: [
            {text: "1945", correct: false},
            {text: "1947", correct: true},
            {text: "1950", correct: false},
            {text: "1962", correct: false},
        ]
    },
    {
        question: " Which Mughal emperor built the Taj Mahal?",
        answers: [
            {text: "Akbar", correct: false},
            {text: "Shah Jahan", correct: true},
            {text: "Aurangzeb", correct: false},
            {text: "Jahangir", correct: false},
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            {text: "Indira Gandhi", correct: false},
            {text: "Rajiv Gandhi", correct: false},
            {text: "Jawaharlal Nehru", correct: true},
            {text: "Narendra Modi", correct: false},
        ]
    },
    {
        question: "Which event marked the beginning of the Indian independence movement?",
        answers: [
            {text: "The Quit India Movement", correct: false},
            {text: "The Salt March", correct: false},
            {text: "The Jallianwala Bagh Massacre", correct: false},
            {text: "The Indian Rebellion of 1857", correct: true},
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
        resetState();
        startQuiz();
    }
})

startQuiz();