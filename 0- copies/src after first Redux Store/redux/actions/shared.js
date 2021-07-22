import {_getUsers, _getQuestions} from '../../utils/api'
// import {getInitialData} from '../utils/api'
// import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import {receiveQuestions} from './questions'
// import { setAuthedUser } from './authedUser'
import {showLoading,hideLoading} from 'react-redux-loading-bar'

const AUTHED_ID = 'tylermcginnis'

export const getInitialData = () =>{
    return Promise.all([
        _getUsers(),_getQuestions()
    ])
    .then ( ([users,questions]) => ({users,questions}))
    .catch((er) => alert (`error occured @ getInitialData : `,er))
}

export function handleInitialData (){
    return (dispatch) => {
        dispatch (showLoading())
        return getInitialData()
        .then( ({users,questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))            
            dispatch(hideLoading())           
        } )
        
    }
}