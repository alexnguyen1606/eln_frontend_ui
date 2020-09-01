import thunk from 'redux-thunk';


import { createStore, applyMiddleware } from 'redux';
import mainReducers from './../reducers/MainReducer';


const store = createStore(mainReducers, applyMiddleware(thunk));
export default store;