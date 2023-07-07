const questions = [
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: " Oscar Wilde", correct: false},
            {text: "George Orwell", correct: false},
            {text: "Charles Dickens", correct: false},
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            {text: "Yen", correct: true},
            {text: "Euro", correct: false},
            {text: "Dollar", correct: false},
            {text: "Pound", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Ag", correct: false},
            {text: "Fe", correct: false},
            {text: "Au", correct: true},
            {text: "Cu", correct: false},
        ]
    },
    {
        question: "Who is the author of the Harry Potter book series?",
        answers: [
            {text: "J.K. Rowling", correct: true},
            {text: "Stephen King", correct: false},
            {text: "George R.R. Martin", correct: false},
            {text: "Dan Brown", correct: false},
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Pablo Picasso", correct: false},
            {text: "Vincent van Gogh", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Michelangelo", correct: false},
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