
import footerTweeter from '../assets/icons/footerIcon2.png'
import footerLinkedin from '../assets/icons/footerIcon3.png'
import footerInstagram from '../assets/icons/footerIcon4.png'

export const questions = [
    {
    question: "Czy Monciu kocha?",
        anwsers: [
            {anwser: "Tak",letter:"A", isCorrect: false},
            {anwser: "Nad życie",letter:"B", isCorrect: true},
            {anwser: "Nie",letter:"C", isCorrect: false},
            {anwser: "Za brzydki jesteś",letter:"D", isCorrect: false}
        ]
    },
    {
        question: "Ile monciu chce mieć dzieci",
        anwsers: [
            {anwser: 1,letter:"A", isCorrect: false},
            {anwser: 2,letter:"B", isCorrect: true},
            {anwser: 3,letter:"C", isCorrect: false},
            {anwser: 4,letter:"D", isCorrect: false},           
        ]
    },
    {
        question: "Czy mońć chce mnie poślubić",
        anwsers: [
            {anwser: "Może",letter:"A", isCorrect: false},
            {anwser: "Tak",letter:"B", isCorrect: true},
            {anwser: "Nie",letter:"C", isCorrect: false},
            {anwser: "Nigdy",letter:"D", isCorrect: false},           
        ]
    },
    
]


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


export const footerIcons = [footerTweeter, footerLinkedin, footerInstagram ]
