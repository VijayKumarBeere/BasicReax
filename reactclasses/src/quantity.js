import { useState } from "react"
import './quantity.css'

function Quantity(){
    let [quantity, setQuantity] = useState(0);
    return(
        <div className="wrapper">
            <h4>Quantity</h4>
            <button className="minus" onClick={
                () =>{
                    if(quantity>0){
                        setQuantity(--quantity);
                    }
                }
            } >-</button>
            <label >{quantity}</label>
            <button className="plus" onClick={
                ()=>{
                    if(quantity<10)
                        setQuantity(++quantity);
                }
            }>+</button>
        </div>
    )
}
export default Quantity;