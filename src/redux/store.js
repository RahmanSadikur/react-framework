import RootReducer from "./reducer/rootReducer";

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const Store=createStore(RootReducer, composedEnhancer);
export default Store;