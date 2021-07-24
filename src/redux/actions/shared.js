import {_getUsers, _getQuestions} from '../../utils/api'
import { receiveUsers } from './users'
import {receiveQuestions} from './questions'
import {showLoading,hideLoading} from 'react-redux-loading-bar'

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