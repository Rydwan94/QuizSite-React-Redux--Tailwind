export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const RESET_INDEX = "RESET_INDEX"



export const answer = (correctAnwser) => ({
    type: ANSWER_QUESTION,
    payload: correctAnwser
})
