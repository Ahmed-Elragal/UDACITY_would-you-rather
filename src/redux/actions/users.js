import {showLoading,hideLoading} from 'react-redux-loading-bar'
export const GET_USERS = 'GET_USERS'
export const GET_USER_SCORE = 'GET_USER_SCORE'
export const USER_ANSWER_QUESTION ='USER_ANSWER_QUESTION'
export const USER_QUESTION_ADD = 'USER_QUESTION_ADD'

export function receiveUsers(users)
{
    return {
        type:GET_USERS,
        users
    }
}
function handleUserScore (uid) {
    return {
        type:GET_USER_SCORE,
        uid,
    }
}
export function handleUserAnswer ({authedUser,qid,answer}){
    return{
        type:USER_ANSWER_QUESTION,
        payload :{
            authedUser,
            qid,
            answer
        }
    }
}
export function handleUserQuestionAdd(question) {
    // console.log(`ACTION.User: handleUserQuestionAdd : `,question);
    return {
        type :USER_QUESTION_ADD,
        payload :{
            question,
        }
    }
}
export function getUserScore (uid){

    return(dispatch) =>{
        dispatch(showLoading())
        // console.log('Action/getuserScore :uid :' ,uid);
        dispatch(handleUserScore)
        dispatch(hideLoading())
    }
}