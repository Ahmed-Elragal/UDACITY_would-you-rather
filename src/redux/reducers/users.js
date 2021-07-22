import{GET_USERS,GET_USER_SCORE} from '../actions/users'

export default function  users (state ={},action){
    switch (action.type) {
        case GET_USERS:
            console.log('GET_USERS: state',action );
            return {
                ...state,
                ...action.users
            }
        case GET_USER_SCORE:
            console.log(`REDUCER: user.GET_USER_SCORE : Action : `,action);
            return {
                ...state,
                
            }             
        default:
            return state
            
    }
}