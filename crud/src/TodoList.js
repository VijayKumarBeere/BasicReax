import { useSelector } from "react-redux";
import Todo from "./Todo";

function List(props){
    let data = useSelector((state)=>{
        return state.todos;
    })

    return (
        <>
            <div className="border rounded-4 border-3 overflow-hidden">

                <ul className="list-group">
                    {
                        data.map((todo,index)=>{
                            return (
                                <div key={todo.id} className={`p-1 border-2 ${index !== data.length - 1 ? "border-bottom" : ""}`}>
                                
                                <Todo {...todo}></Todo>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default List;