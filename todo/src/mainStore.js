import {thunk} from 'redux-thunk';
import { applyMiddleware, createStore } from "redux";

let initialState={
    userData:{

    }
}
function userReducer(state=initialState,action){
    switch(action.type){
        case 'add':
            return {...state,userData:action.payload}
        default:
            return state;
    }
}

const store = createStore(userReducer,applyMiddleware(thunk));

export default store;