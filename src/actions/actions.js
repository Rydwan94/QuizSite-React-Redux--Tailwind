export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const RESET_INDEX = "RESET_INDEX"



export const answer = (correct) => ({
    type: ANSWER_QUESTION,
    payload: correct
})
