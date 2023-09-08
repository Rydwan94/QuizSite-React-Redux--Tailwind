
import footerTweeter from '../assets/icons/footerIcon2.png'
import footerLinkedin from '../assets/icons/footerIcon3.png'
import footerInstagram from '../assets/icons/footerIcon4.png'

export const questions = [
    {
    question: "Who is Better",
        anwsers: [
            {anwser: "Me", isCorrect: false},
            {anwser: "You", isCorrect: false},
            {anwser: "Jezus", isCorrect: true},
            {anwser: "Neighbour", isCorrect: true}
        ]
    },
    {
        question: "How many finger has monkey",
        anwsers: [
            {anwser: 1, isCorrect: false},
            {anwser: 2, isCorrect: false},
            {anwser: 3, isCorrect: false},
            {anwser: 4, isCorrect: true},           
        ]
    },
    {
        
    }
]


export const NavBar = [
    {
        path : '#howItWorks',
        label: "How it works"
    },
    {
        path : '#features',
        label: "Features"
    },
    {
        path : '#About us',
        label: "About us"
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
