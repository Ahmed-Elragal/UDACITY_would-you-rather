import{GET_USERS,GET_USER_SCORE,USER_ANSWER_QUESTION,USER_QUESTION_ADD} from '../actions/users'

export default function  users (state ={},action){
    switch (action.type) {
        case GET_USERS:
            // console.log('GET_USERS: state',action );
            return {
                ...state,
                ...action.users
            }
        case GET_USER_SCORE:
            // console.log(`REDUCER: user.GET_USER_SCORE : Action : `,action);
            return {
                ...state,
                
            }             
        case  USER_ANSWER_QUESTION :
            // console.log(`REDUCER: user.answerQuestion : action ` ,action);
            const {answer,authedUser,qid} = action.payload
            return {
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    answers :{
                        ...state[authedUser].answers,
                        [qid] : answer
                    }
                }
            }
        case USER_QUESTION_ADD :
            // console.log(`REDUCER: user.QuestionAdd : action ` ,action);
            const {author,id} = action.payload.question
            return{
                ...state,
                [author] :{
                    ...state[author],
                    questions :[
                       ...state[author].questions,
                       id
                     ]              
                    }
            }

        default:
            return state
            
    }
}