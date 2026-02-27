import { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "./actions";
import List from "./TodoList";

function App(){
    const [showMsg, setFlag] =useState(false);
    const [item, setItem] = useState('');
    let dispatch= useDispatch();

    function handleTodo(){
        if(item.trim()!=='')
        {
            const newTodo ={
                title: item.trim()
            }
            dispatch(Add(newTodo));
            setItem('');
        }
        else
            setFlag(true);
    }

    return(
        <>
            <div className="container w-75 mt-3">
                <div className="w-75 mx-auto">
                    <h3 className="text-primary text-center">To-do Notes</h3>
                    <div className="input-group d-flex justify-content-center">
                        <input type="text" className="form-control" value={item} 
                        onChange={(e)=>{
                                setItem(e.target.value)
                                if(e.target.value.trim().length!==0)
                                    setFlag(false);
                            }
                            }></input>
                        <button className="btn btn-primary mx-2 col-2" onClick={handleTodo}>Add</button>
                    </div>
                    {
                        showMsg && <span className="text-danger">Enter To-do Note</span>
                    }
                    <div className="mt-5">
                        <List></List>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;