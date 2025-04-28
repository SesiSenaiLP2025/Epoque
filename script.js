const questions = [
    {
        question: "Sobre as vanguardas europeias, é correto afirmar, exceto:",
        image: "",
        answers:[
            { text: "a) Entre suas principais manifestações estão o Cubismo, o Futurismo, o Expressionismo, o Dadaísmo e o Surrealismo, todos surgidos na Europa no início do século XX.", correct: false},
            { text: "b) As tendências literárias que compuseram as vanguardas europeias estavam unidas por um único projetor artístico, cuja proposta era a de retomar os ideais clássicos nas artes e na literatura.", correct: "true"},
            { text: "c) As vanguardas europeias influenciaram as artes no mundo ocidental de maneira contundente. No Brasil, as inovações nas artes e na literatura ficaram conhecidas como Modernismo.", correct: "false"},
            { text: "d) Não havia um projeto artístico em comum que agregasse os artistas de vanguarda em torno de uma única proposta, contudo, estavam unidos por uma mesma causa: a de inovar as artes e romper com os padrões clássicos vigentes.", correct: "false"},
        ]
    },
    
    {
        question: "(ENEM) O Futurismo foi um movimento artístico do início do século XX que rompeu com a tradição e exaltou a modernidade. Sobre esse movimento, assinale uma alternativa que apresenta uma de suas características:",
        image: "",
        answers:[
            { text:"a) Valorização do equilíbrio e da simetria nas composições.", correct:"false"},
            { text:"b) Rejeição das inovações tecnológicas e industriais.", correct:"false"},
            { text:"c) Representação objetiva da realidade, sem distorções.", correct:"false"},
            { text:"d) Exaltação da velocidade, das máquinas e da tecnologia.", correct:"true"},
        ]
    },

    {
        question: "(FUVEST) O Expressionismo foi um movimento artístico que privilegiou a subjetividade e a intensidade emocional. Sobre esse movimento, assinale a alternativa correta:",
        image: "",
        answers:[
            { text:"a) Buscava representar a realidade de maneira objetiva e racional.", correct:"false"},
            { text:"b) Utilize núcleos fortes e formas distorcidas para expressar emoções.", correct:"true"},
            { text:"c) Priorizava a harmonia e o equilíbrio das composições.", correct:"false"},
            { text:"d) Foi um movimento que rejeitou a influência da subjetividade.", correct:"false"},
        ]
    },

    {
        question: "(UFPR) O Manifesto Futurista, publicado por Filippo Tommaso Marinetti em 1909, defende a destruição do passado e a glorificação do futuro. Qual das alternativas abaixo melhor expressa um princípio fundamental do Futurismo?",
        image: "",
        answers:[
            { text:"a) A exaltação da guerra como forma de renovação social.", correct:"true"},
            { text:"b) A preservação dos valores históricos e culturais tradicionais.", correct:"false"},
            { text:"c) A valorização da natureza e da contemplação artística.", correct:"false"},
            { text:"d) O uso exclusivo de técnicas clássicas na pintura e na literatura.", correct:"false"},
        ]
    },

    {
        question: "(PUC-SP) O Expressionismo se destacou nas artes plásticas, na literatura e no cinema. Sobre as características desse movimento, assinale a alternativa correta:",
        image: "",
        answers:[
            { text:"a) Representação fiel da realidade, sem interferências emocionais.", correct:"false"},
            { text:"b) Resgate de padrões clássicos e idealização da figura humana.", correct:"false"},
            { text:"c) Valorização da estética neoclássica e do rigor técnico.", correct:"false"},
            { text:"d) Uso de traços e núcleos que transmitem angústia e subjetividade.", correct:"true"},
        ]
    },

    {
        question: "Os movimentos de vanguarda Surrealismo e Dadaísmo tiveram uma estreita relação e características parecidas. Entretanto, nota-se algumas diferenças. Uma delas é:",
        image: "",
        answers:[
            { text:"O dadaísmo se preocupava com aspectos objetivos da sociedade, trazendo a tecnologia e o progresso como forma de emacipação. Já o surrealismo tinha como intenção pintar os sonhos de cada artista para valorizar a realidade.", correct:"false"},
            { text:"O surrealismo surgiu muitos anos antes do dadaísmo, trazendo uma estética simples e geometrizada. No movimento dadá o objetivo era retomar uma atmosfera de sonho e caráter ilógico.", correct:"false"},
            { text:"O movimento surrealista usava como ferramenta de criação o inconsciente e questões de ordem mais subjetiva dos indivíduos. Já o movimento dadá usava o absurdo e a incoerência para questionar a sociedade de forma mais ampla.", correct:"true"},
            { text:"Enquanto o movimento dadá buscava fragmentar a imagem e ressignificar a realidade, o surrealismo procurava uma estética realista e pautada na vida cotidiana.", correct:"false"},
        ]
    },
    {
        question: "UNESP/2010 - A peça “A fonte” foi criada pelo francês Marcel Duchamp e apresentada em Nova Iorque em 1917. A transformação de um urinol em obra de arte representou, entre outras coisas:",
        image: "dada1.png",
        answers:[
            { text:"a) O esforço de tirar a arte dos espaços públicos e a insistência de que ela só podia existir na intimidade.", correct:"false"},
            { text:"b) A alteração do sentido de um objeto do cotidiano e uma crítica às convenções artísticas então vigentes.", correct:"true"},
            { text:"c) O fim da verdadeira arte, do conceito de beleza e importância social da produção artística.", correct:"false"},
            { text:"d) A vontade de expulsar os visitantes dos museus, associando a arte a situações constrangedoras.", correct:"false"},
        ]
    },

    {
        question: "Enem(2015) - O Surrealismo configurou-se como uma das vanguardas artísticas europeias do início do século XX. René Magritte, pintor belga, apresenta elementos dessa vanguarda em suas produções. Um traço do Surrealismo presente nessa pintura é o(a)",
        image:"surre1.png",
        answers:[
            { text:"a) Processo de automatismo, indicado na repetição da imagem do homem. ", correct:"false"},
            { text:"b) Crítica ao passadismo, exposta na dupla imagem do homem olhando sempre para frente.", correct:"false"},
            { text:"c) Construção de perspectiva, apresentada na sobreposição de planos visuais.", correct:"false"},
            { text:"d) Justaposição de elementos díspares, observada na imagem do homem no espelho.", correct:"true"},
        ]
    },


    {
        question: "Enem/2010 - ",
        image:"surre2.png",
        answers:[
            { text:"a) Do fantástico, impregnado de civismo pelo governo espanhol, em que a busca pela emoção e pela dramaticidade desenvolveram um estilo incomparável.", correct:"false"},
            { text:"b) Do onírico, que misturava sonho com realidade e inconsciente como um universo único ou pessoal.", correct:"true"},
            { text:"c) Da linha inflexível da razão, dando vazão a uma forma de produção despojada no traço, na temática e nas formas vinculadas ao real.", correct:"false"},
            { text:"d) Do reflexo que, apesar do termo 'paranoico', possui sobriedade e elegância advindas de uma técnica de cores discretas e desenhos precisos.", correct:"false"},
        ]
    },


    {
        question: "Uerj(2024) - O quadro de Dalí, ao contrário do que muitos pensam, é bastante pequeno (24 x 33 cm). Segundo o próprio pintor, duas foram as suas fontes de inspiração para a obra: Os queijos Camembert e a teoria da relatividade de Einstein. A obra de Salvador Dalí associa tempo e memória. Essa associação pode ser estabelecida de acordo com o princípio da:",
        image:"ultima.png",
        answers:[
            { text:"a) Linearidade", correct:"false"},
            { text:"b) Progressividade", correct:"false"},
            { text:"c) Mensurabilidade", correct:"false"},
            { text:"d) Condicionalidade", correct:"true"},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Próximo";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    if(currentQuestion.image != ""){
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question + "<br/>";
        img = document.createElement("img");
        img.src = currentQuestion.image;
        img.alt = "Imagem referente à questão";
        if(currentQuestion.image == "surre2.png"){
            img.style.width = "100%";
        }
        else{
            img.style.display = "block";
            img.style.marginLeft = "auto";
            img.style.marginRight = "auto";
        }
        questionElement.appendChild(img);
    }
    else{
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = ` Sua pontuação foi ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
       showQuestion() ;
    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();






