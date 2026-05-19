import {configureStore, createSlice} from '@reduxjs/toolkit';

const data={
    fullName:'',
    mobile:'',
    balance:0
}


const userSlice = createSlice(
    {
        name: 'user',
        initialState: data,
        reducers: {
            updateMobile: (state, action)=>{
                state.mobile = action.payload;
            },
            updateFullName:(state,  action)=>{
                state.fullName = action.payload;
            },
            deposit: (state, action) =>{
                state.balance += +action.payload;
            },
            withdraw: (state, action)=>{
                state.balance-= +action.payload;
            },
            reset: (state)=>{
                return({
                    balance:0,
                    fullName:'',
                    mobile:''
                })
            }
        }
    }
)

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export const {updateFullName, updateMobile, withdraw, deposit, reset} = userSlice.actions;