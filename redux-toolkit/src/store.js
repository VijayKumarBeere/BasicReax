import {configureStore, createSlice} from '@reduxjs/toolkit';

const state={
    balance:0,
    fullName:'',
    mobile:''
}
const transactions=[]

const tranSlicer = createSlice(
{
    name:'transaction',
    initialState:transactions,
    reducers:{
        addTransaction:((state,action)=>{
            state.push(action.payload);
        })
    }
}
)

const userSlicer = createSlice(
{
    name:'user',
    initialState:state,
    reducers:{
        updateMobile:(state,action)=>{
            state.mobile = action.payload;
        },
        updateFullName:(state,action)=>{
            state.fullName = action.payload;
        },
        deposit:(state,action)=>{
            state.balance += +action.payload;
        },
        withdraw:(state,action)=>{
            state.balance-= +action.payload;
        },
        reset:(state)=>{
            // state.mobile='',
            // state.fullName='',
            // state.balance=0
            return (
                {
                    balance:0,
                    fullName:'',
                    mobile:''
                }
            )
        }
    }
}
)
// console.log(userSlicer)
const store = configureStore(
    {
        reducer:{
            user: userSlicer.reducer,
            transaction:tranSlicer.reducer
        }
    }
)

export const {updateMobile,updateFullName,deposit,withdraw,reset} = userSlicer.actions;
export const {addTransaction} = tranSlicer.actions;
export default store;
