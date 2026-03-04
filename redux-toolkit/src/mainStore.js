import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const data={
    users:[],
    status:'',
    error:false
}

export const fetchUsers=createAsyncThunk('user/fetch',async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const userData = response.json()
        return userData;
    }
    catch(error){
        throw error;
    }
})

const userSlice =createSlice({
    name:'user',
    initialState: data,
    reducers:{
        fetchUsersData: (state,action)=>{}
    },

    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.status='pending';
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.status='completed';
            state.users=action.payload;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.status='error';
            state.users=[];
            state.error=action.error.message;
        })
    }
})

const store = configureStore({
    reducer:{
        user: userSlice.reducer
    }
})

export default store;