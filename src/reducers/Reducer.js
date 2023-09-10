import { ANSWER_QUESTION, RESET_INDEX } from "../actions/actions";
import { questions } from "../constants";
const appData = {
  questions,
  currentIndex: 0,
  score: 0,
  correctAnwsers: 0,
};

const quizReducer = (state = appData, action) => {
  switch (action.type) {
    case ANSWER_QUESTION:
      const currentQuestion = questions[state.currentIndex];
     
      const selectedAnswer = currentQuestion.anwsers[action.payload];
   
      const isAnswerCorrect = selectedAnswer.isCorrect;
      
      return {
        ...state,
        score: isAnswerCorrect ? state.score + 100 : state.score ,
        correctAnwsers: isAnswerCorrect
          ? state.correctAnwsers + 1
          : state.correctAnwsers,
        currentIndex: state.currentIndex + 1, // Przechodzenie do następnego pytania
      };
    case RESET_INDEX:
      return {
        ...state,
        currentIndex: 0,
        score: 0,
        correctAnwsers: 0
      };

    default:
      new Error(`something went wrong with ${action.type}`);
      return state;
  }
};

export default quizReducer;
