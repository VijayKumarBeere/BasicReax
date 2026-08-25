import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialData={
    users:[],
    status:'',
    error:false
}

export const fetchUsers = createAsyncThunk('users/fetch', async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }
    catch(error){
        throw error;
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState:initialData,
    // reducers:{
    //     fetchUsers:(state, action)=>{
    //         state.users
    //     }
    // }
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.status='pending'
        })
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.status='completed',
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state,action)=>{
            state.users=[],
            state.status='error',
            state.error = action.error.message;
        })
    }
})

export const store = configureStore({
        reducer: userSlice.reducer
    }
)
