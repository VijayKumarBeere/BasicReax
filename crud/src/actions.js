export function Add(todo){
    return ({type:'ADD_TODO', payload:todo})
}
export function Edit(todo){
    return ({type:'EDIT_TODO', payload:todo})
}

export function Delete(todo){
    return ({type:'DELETE_TODO', payload:todo})
}