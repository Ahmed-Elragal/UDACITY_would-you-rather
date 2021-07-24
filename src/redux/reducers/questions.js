import {GET_QUESTIONS,QUESTION_ANSWER_QUESTION,QUESTION_ADD} from '../actions/questions'

export default function questions (state = {} ,action){
    switch (action.type) {
        case GET_QUESTIONS:
            // console.log('GET_QUESTIONS: state',action );
            return {
                ...state,
                ...action.questions
            } 
        case QUESTION_ANSWER_QUESTION:
            const {answer,authedUser,qid} = action.payload
            // console.log(`REDUCER: questions.answerQuestion : action ` ,action);
            return{
                ...state,
                [qid]:{
                    ...state[qid],
                   [answer] : {
                       ...state[qid][answer],
                       votes :[...state[qid][answer].votes,authedUser],
                   } 
                }

            }
        case QUESTION_ADD :
            // console.log('REDUCER: QuestionAdd : ' ,action.payload);
            const {question} = action.payload

            return {
                ...state,
                [question.id]:question,
                

            }
default:
    // console.log('REDUCER:QUESTION :State :',state);
            return state
    }
}