import { useReducer } from "react";

function valueDef(state, input){
    // console.log(state, input)
    switch(input.type){
        case 'INC': return state+1;
        case 'DEC': return state-1;
        case 'RESET': return 0;
        default: return state;
    }
}
function Reducer(){
    const [counter, dispatch] = useReducer(valueDef,0)

    return(
    <>
        <div className="text-center mt-5">
            <button className="btn btn-primary" onClick={()=>{
                dispatch({type:'DEC'})
            }}>-</button>
            <label>Counter:{counter}</label>
            <button className="btn btn-primary" onClick={()=>{
                dispatch({type:'INC'})
            }}>+</button>

        </div>
        <div className="text-center">
            <button className="btn btn-danger mt-3" onClick={()=>{
                dispatch({type:'RESET'})
            }}>Reset</button>
        </div>
    </>
    )
}

export default Reducer;