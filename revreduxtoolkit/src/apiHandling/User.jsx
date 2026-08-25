import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./mainstore";
import { useEffect } from "react";

function User(){
    const data = useSelector((state)=>{
        return state;
    })
    console.log(data);
    const dispatch = useDispatch();
    useEffect(
    ()=>{
        dispatch(fetchUsers());
    },[])

    return(
        <>
        </>
    )
}

export default User