import { useState } from "react";
import { useDispatch } from "react-redux";
import { Delete, Edit } from "./actions";

function Todo({id,title}){
    const [isEditMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle]= useState(title);
    const dispatch = useDispatch();
    return(
    <>
        <div>
            {
                isEditMode?(
                    <div className="form-group d-flex justify-content-center gap-2">
                        <input type="text" className="form-control" value={newTitle} onChange={
                            (e)=>setNewTitle(e.target.value)
                        }/>
                        <button className="btn btn-success col-2" onClick={
                            ()=>{
                                if(newTitle.trim().length!==0)
                                {
                                    dispatch(Edit({id:id,title:newTitle.trim()}))
                                    setEditMode(false);
                                }
                            }
                        }>Save</button>
                        <button className="btn btn-danger col-2" onClick={()=>setEditMode(false)}>Cancel</button>
                    </div>
                ):(
                    <div className="d-flex justify-content-center gap-2">
                        <li className="list-group-item col-7 py-0">
                            <p>{title}</p>
                        </li>
                        <button className="btn btn-warning col-2" onClick={()=>setEditMode(true)}>Edit</button>
                        <button className="btn btn-danger col-2" onClick={
                            ()=> dispatch(Delete({id:id,title:newTitle}))
                        }>Remove</button>
                    </div>
                )
            }
        </div>
    </>
    )
}

export default Todo;