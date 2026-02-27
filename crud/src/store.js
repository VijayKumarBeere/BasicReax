import {createStore} from 'redux';

let initialState = {
    todos:[],
    nextId:1
}

const todoDispatcher = (state=initialState, action) =>{
    switch(action.type){
        case "ADD_TODO":
            const addTodo = {id:state.nextId,title:action.payload.title};
            
            return{...state, todos:[...state.todos,addTodo],nextId: state.nextId+1};
        case "EDIT_TODO":
            return {
                ...state, todos:state.todos.map((todo)=>
                        todo.id===action.payload.id?{...todo,title:action.payload.title}:todo)
            };
        case "DELETE_TODO":
            return {
                ...state, todos:state.todos.filter((todo)=>todo.id!==action.payload.id)
            };
        
        default:
            return state;
    }
}

const store = createStore(todoDispatcher);

export default store;