import {createStore} from 'redux';  
import MiddleWares from './middlewares/index'


import reducers from './reducers/rootReducer'

export function configureStore(initialState={}){
    
    const store = createStore(reducers , initialState , MiddleWares);
    return store
}
export const store = configureStore()
