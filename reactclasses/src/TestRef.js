import { useRef } from "react";

function TestRef(){
    let ele = useRef(null);
    let x = useRef(10);
    let z =100;
    // let [y,setY] = useState(0);
    // useRef Hook is used to 
    //1. access and manipulate DOM elements
    //2. store mutable values that don't cause re renders (stores values without re-rendering)
    //3. persist values between renders(storing previous state value)

    return(
        <>
            <h1 ref={ele}>This is heading</h1>
            <button onClick={()=>{
                console.log(ele);
                console.dir(ele.current);
                ele.current.innerHTML = 'Changed';
            }}>Click</button>

            <h1>x:{x.current}</h1>
            {/* <h1>y:{y}</h1> */}
            <h1>z:{z}</h1>
            <button onClick={()=>{
                x.current = x.current+10; 
                // setY(y+1);        
                z= z+100;        
                console.log(x.current);
            }}>Change</button>
        </>
    )
}

export default TestRef;