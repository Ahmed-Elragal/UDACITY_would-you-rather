import {GET_QUESTIONS} from '../actions/questions'

export default function questions (state = {} ,action){
    switch (action.type) {
        case GET_QUESTIONS:
            console.log('GET_QUESTIONS: state',action );
            return {
                ...state,
                ...action.questions
            }     
default:
            return state
    }
}