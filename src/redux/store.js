import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MiddleWares from './middlewares/index'


import reducers from './reducers/rootReducer'

export function configureStore(initialState={}){
    // const store = createStore(reducers , initialState );
    const store = createStore(reducers , initialState , MiddleWares);
    return store
}
export const store = configureStore()
