import { showLoading,hideLoading } from "react-redux-loading-bar"
import {_saveQuestionAnswer,_saveQuestion} from '../../utils/api'
import {handleUserAnswer,handleUserQuestionAdd} from './users'

export const GET_QUESTIONS= 'GET_QUESTIONS'
export const QUESTION_ANSWER_QUESTION ='QUESTION_ANSWER_QUESTION'
export const QUESTION_ADD = 'QUESTION_ADD'

export function receiveQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    }    
}

function AnswerQuestion ({authedUser,qid,answer}){
    return {
        type :QUESTION_ANSWER_QUESTION,
        payload :{
            authedUser,
            qid,
            answer,
        }
    }
}
function addQuestion (question){
    // console.log(`addQuestion : `,question)//optionOneText [${optionOneText}],optionTwoText [${optionTwoText}],author  [${author}]` );
    return {
        type : QUESTION_ADD,
        payload : {question  }
    }

}

export function handleAddQuestion ({optionOneText,optionTwoText,author}){
    // console.log(`handleAddQest: Question: optionOneText [${optionOneText}],optionTwoText [${optionTwoText}],author  [${author}]`);
    return(dispatch) => {
        dispatch(showLoading())
        return _saveQuestion({optionOneText,optionTwoText,author})
        .then ((question) => {
            dispatch (handleUserQuestionAdd (question))
            dispatch(addQuestion(question))
            dispatch(hideLoading())
        } ) 
    }
}

export function handleAnswerQuestion ({authedUser,qid,answer}){
    // console.log(`handleAnswerQuestion: [user : ${authedUser}] 
    //                 [qid : ${qid}] [answer : ${answer}]`);
    return (dispatch) =>{
        dispatch(showLoading)
        return _saveQuestionAnswer({authedUser,qid,answer})
        .then (() => {
            dispatch(AnswerQuestion ({authedUser,qid,answer}))
            dispatch(handleUserAnswer ({authedUser,qid,answer}))
            dispatch(hideLoading())
            })
    }
}
