import {combineReducers} from  'redux'
import authedUser from './authedUser'
import questions from './questions'
import users from './users'
import {loadingBarReducer} from 'react-redux-loading-bar'

 const reducers=  combineReducers({
    authedUser,
    questions,
    users,
    loadingBar: loadingBarReducer
})
export default reducers