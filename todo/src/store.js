import { createStore } from "redux";

const defState={
    balance:0,
    mobile:null,
    name:''
}

function accountDispatcher(state=defState,action){
    switch(action.type){
        case 'deposit':
            return {...state,balance:state.balance+action.payload};
        case 'withdraw':
            return {...state, balance:state.balance-action.payload};
        case 'nameUpdate':
            return {...state, name:action.payload};
        case 'mobileUpdate':
            return {...state,mobile:action.payload};
        default:
            return state;
    }
}

const store = createStore(accountDispatcher);
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({type:'deposit', payload:10000});
store.dispatch({type:'withdraw', payload:2000});
store.dispatch({type:'nameUpdate',payload:'Vijay Kumar'});
store.dispatch({type:'mobileUpdate',payload:'6893888772'});
