const questions = [
    {
        question: "Which company developed the JavaScript programming language?",
        answers: [
            {text: "Google", correct: false},
            {text: "Microsoft", correct: false},
            {text: "Sun Microsystems", correct: false},
            {text: " Netscape", correct: true},
        ]
    },
    {
        question: "Which of the following is an example of cloud storage service?",
        answers: [
            {text: "Dropbox", correct: true},
            {text: "1icrosoft Word", correct: false},
            {text: "Adobe Photoshop", correct: false},
            {text: "Google Chrome", correct: false},
        ]
    },
    {
        question: "Which programming language is often used for creating mobile applications?",
        answers: [
            {text: "Java", correct: true},
            {text: "Python", correct: false},
            {text: "C++", correct: false},
            {text: "Ruby", correct: false},
        ]
    },
    {
        question: "What does VPN stand for?",
        answers: [
            {text: "Virtual Personal Network", correct: false},
            {text: "Virtual Public Network", correct: false},
            {text: "Virtual Private Network", correct: true},
            {text: "Visual Private Network", correct: false},
        ]
    },
    {
        question: "What is the process of transferring data from a computer to a remote server called?",
        answers: [
            {text: "Downloading", correct: false},
            {text: "Uploading", correct: true},
            {text: "Syncing", correct: false},
            {text: "Installing", correct: false},
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