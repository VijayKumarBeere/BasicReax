import { combineReducers, createStore } from "redux";


const defState={
    balance:0,
    mobile:null,
    name:''
}

function accountDispatcher(state=defState,action){
    switch(action.type){
        case 'deposit':
            return {...state,balance:state.balance+ +action.payload};
        case 'withdraw':
            return {...state, balance:state.balance- +action.payload};
        case 'nameUpdate':
            return {...state, name:action.payload};
        case 'mobileUpdate':
            return {...state,mobile:action.payload};
        case 'reset':
            return {balance:0,
    mobile:null,
    name:''};
        default:
            return state;
    }
}

function transactionDispatcher(state=[],action){
    switch(action.type){
        case 'Credit':
        case 'Debit':
            return [...state,{
                id:action.payload.id,
                amount: action.payload.amount, 
                Type: action.payload.Type, 
                date: action.payload.date 
            }];
        case 'reset':
            return [];
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    account: accountDispatcher,
    statement: transactionDispatcher
})

const store = createStore(rootReducer);
// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch({type:'deposit', payload:10000});
// store.dispatch({type:'withdraw', payload:2000});
// store.dispatch({type:'nameUpdate',payload:'Vijay Kumar'});
// store.dispatch({type:'mobileUpdate',payload:'6893888772'});
export default store;