import { useRef } from "react";
import './MultiRef.css'

function MultiRef(){
    let arr = new Array(10).fill(null);
    let headings = useRef([]);

    function changeStyle(e){
        for(let ele of headings.current)
        {
            ele.classList.remove('primary');
        }
        e.target.classList.add('primary');
    }

    return (
        <>
            {
                arr.map((e,index)=>{
                    return(<h1 ref={(e)=>headings.current[index]=e} onClick={
                        (e) =>changeStyle(e)
                    }>Heading {index+1}</h1>)
                })
            }
        </>
    )
}

export default MultiRef;