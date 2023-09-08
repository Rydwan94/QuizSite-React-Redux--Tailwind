import { combineReducers } from "redux";
import quizReducer from "./Reducer";

const rootReducer = combineReducers({
    anwsersReducer: quizReducer
})

export default rootReducer