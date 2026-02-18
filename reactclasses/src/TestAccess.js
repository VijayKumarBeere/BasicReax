import { useState } from "react";
import Search from "./Search";

function TestAccess(){
    const [todoList,updateToDo] = useState([]);

    const addToDo =(newTodo)=>{
        updateToDo([...todoList,newTodo]);
    }

    return(
        <>
            <Search add={addToDo}></Search>
            <ul>
                {
                    todoList.map((todo)=><li>{todo}</li>)
                }
            </ul>
        </>
    )
}

export default TestAccess;