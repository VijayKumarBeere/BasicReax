import { useContext } from "react";
import { context } from ".";

function GChild(){
    let result = useContext(context);
    return(
        <>
            <h3>Grand Child Comp</h3>
            <div>
                <h5>Id:{result.id}</h5>
                <h5>Name:{result.name}</h5>
                <h5>Price:{result.price}</h5>
            </div>
        </>
    )
}

export default GChild;