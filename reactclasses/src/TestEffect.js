import { useEffect, useState } from "react"

function TestEffect(){
    let [timer, setTimer] = useState(0);
    

    useEffect(()=>{
        console.log('In call back method')
    },[timer])


    

    return(
        <>
            <h2>Timer:{timer} {console.log('In component')}</h2>
            <button onClick={()=>{
                setTimer(timer+1);
            }} >Update Timer</button>
        </>
    )
}
export default TestEffect;