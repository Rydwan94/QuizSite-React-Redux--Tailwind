import { ANSWER_QUESTION } from "../actions/actions";
import { questions } from "../constants";
const appData = {
  questions,
  currentIndex: 0,
  score: 0,
};

const quizReducer = (state = appData, action) => {
  
  switch (action.type) {
    case ANSWER_QUESTION:
        const currentQuestion = questions[state.currentIndex];
      const selectedAnswer = currentQuestion.anwsers[state.currentIndex];
      const isAnswerCorrect = selectedAnswer.isCorrect;

      return {
        ...state,
        score: isAnswerCorrect ? state.score + 1 : state.score - 1,
        currentIndex: state.currentIndex + 1, // Przechodzenie do następnego pytania
      };

    default:
      new Error(`something went wrong with ${action.type}`);
      return state;
  }
};

export default quizReducer;
