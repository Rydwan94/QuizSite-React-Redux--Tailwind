
import footerGithub from '../assets/icons/githubIcone.png'
import footerLinkedin from '../assets/icons/footerIcon3.png'


export const questions = [
    {
        question: "Co to jest galaktyka?",
        answers: [
            { answer: "Zbiór gwiazd, pyłów i gazów przestrzennych", letter: "A", isCorrect: true },
            { answer: "Planeta w naszym Układzie Słonecznym", letter: "B", isCorrect: false },
            { answer: "Księżyc", letter: "C", isCorrect: false },
            { answer: "Kometa", letter: "D", isCorrect: false }
        ]
    },
    {
        question: "Jaka jest najbliższa gwiazda Ziemi?",
        answers: [
            { answer: "Księżyc", letter: "A", isCorrect: false },
            { answer: "Słońce", letter: "B", isCorrect: true },
            { answer: "Mars", letter: "C", isCorrect: false },
            { answer: "Wenus", letter: "D", isCorrect: false }
        ]
    },
    {
        question: "Co to jest czarna dziura?",
        answers: [
            { answer: "Nieskończenie mały punkt w kosmosie", letter: "A", isCorrect: true },
            { answer: "Najjaśniejsza gwiazda na niebie", letter: "B", isCorrect: false },
            { answer: "Skupisko pyłu i gazów", letter: "C", isCorrect: false },
            { answer: "Planeta poza naszym Układem Słonecznym", letter: "D", isCorrect: false }
        ]
    },
    {
        question: "Która planeta jest znana z atmosfery bogatej w dwutlenek siarki i kwas siarkowy?",
        answers: [
            { answer: "Mars", letter: "A", isCorrect: false },
            { answer: "Jowisz", letter: "B", isCorrect: false },
            { answer: "Wenus", letter: "C", isCorrect: true },
            { answer: "Saturn", letter: "D", isCorrect: false }
        ]
    },
    {
        question: "Co to jest pulsar?",
        answers: [
            { answer: "Mała planeta w Układzie Słonecznym", letter: "A", isCorrect: false },
            { answer: "Rodzaj czarnej dziury", letter: "B", isCorrect: false },
            { answer: "Rotujący neutronowy gwiazdokształtny obiekt emitujący promieniowanie elektromagnetyczne", letter: "C", isCorrect: true },
            { answer: "Kosmiczny teleskop", letter: "D", isCorrect: false }
        ]
    },
    {
        question: "Jaka planeta jest największa w naszym Układzie Słonecznym?",
        answers: [
            { answer: "Mars", letter: "A", isCorrect: false },
            { answer: "Saturn", letter: "B", isCorrect: false },
            { answer: "Jowisz", letter: "C", isCorrect: true },
            { answer: "Uran", letter: "D", isCorrect: false }
        ]
    },
    {
        question: "Która z księżycowych misji była pierwsza i przyniosła ludzi na powierzchnię Księżyca?",
        answers: [
            { answer: "Apollo 11", letter: "A", isCorrect: true },
            { answer: "Apollo 13", letter: "B", isCorrect: false },
            { answer: "Apollo 17", letter: "C", isCorrect: false },
            { answer: "Apollo 8", letter: "D", isCorrect: false }
        ]
    }
];


export const NavBar = [
    {
        path : 'hero',
        label: "How it works"
    },
    {
        path : 'features',
        label: "Features"
    },
    {
        path : 'learn',
        label: "How to learn"
    },
]


export const infoList = [
    {
        number: "1",
        title: "Choose your subject",
        text: "Choose your favourite subject from the vast selection of subjects and continnue your journey"
    },
    {
        number: "2",
        title: "Select the difficulty",
        text: "Select difficulty of your choice and get the difficulty of questions according to your difficulty"
    },
    {
        number: "3",
        title: "Increasing difficulty",
        text: "Difficulty of questions will increase for the upcoming question irrespective of result of a previous question"
    },
    {
        number: "4",
        title: "Detailed overview of scores",
        text: "Get the detailed overview of your question answer session and tips on how you can improve"
    },
]


export const footerIcons = [
    {
        path: "https://www.linkedin.com/in/%C5%82ukasz-rydwa%C5%84ski-237469173/",
        img: footerLinkedin
    },
    {
        path: "https://github.com/Rydwan94?tab=repositories",
        img: footerGithub
    }

 ]
