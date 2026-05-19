import { applyMiddleware, createStore } from 'redux';
import {thunk} from 'redux-thunk';

const initialState={
    userData: {}
};

function reducer(state = initialState, action){
    switch(action.type)
    {
        case 'add':
            return {...state, userData: action.payload}
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;