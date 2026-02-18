import { useState } from "react";

function Search(todo){
    const [task,setTask] = useState('');
    return(
        <>
            <input type="text" value={task} onChange={e=>setTask(e.target.value)}/>
            <button onClick={()=>{
                if(task.trim().length>0)
                {
                    todo.add(task);
                    setTask('');
                }
            }}>Add</button> 
        </>
    )
}

export default Search;