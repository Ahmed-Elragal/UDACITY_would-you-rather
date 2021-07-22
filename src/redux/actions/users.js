export const GET_USERS = 'GET_USERS'
export const GET_USER_SCORE = 'GET_USER_SCORE'
export const ANSWER_QUESTION ='ANSWER_QUESTION'

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
function handleUserAnswer (authedUser,qid,answer)
export function getUserScore (uid){

    return(dispatch) =>{
        // dispatch(showLoading())
        console.log('Action/getuserScore :uid :' ,uid);
        dispatch(handleUserScore)

        // dispatch(hideLoading())
    }
}