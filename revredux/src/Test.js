// import { useEffect, useReducer } from "react";
import { useDispatch, useSelector} from "react-redux";

function Test(){
    useSelector(
        (state)=>state
    );
    // console.log(data);
    const dispatch = useDispatch();
    async function fetchData(dispatch, getState){
        let res = await fetch('https://jsonplaceholder.typicode.com/users/2');
        let data = await res.json();
        dispatch({type:'add',payload:data});
        console.log(getState());
    }
    return (
        <>
            <button className="btn btn-primary" onClick={ 
                ()=>{
                    dispatch(fetchData)
                }
            }>Get</button>
        </>
    )
}
export default Test;