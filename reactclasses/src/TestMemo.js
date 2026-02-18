import { useEffect, useMemo, useState } from "react";
import './TestMemo.css'

function TestMemo(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [products, setProducts]=useState([{id:1,mobile:'One Plus X6 CE', price:27000},
        {id:2,mobile:'Poco F6 800', price:31000},
        {id:3,mobile:'iPhone 17 Pro', price:86000}]);
    
    const [searchText,setText] = useState('');

    const filteredProducts =useMemo(
        ()=>{
            console.log(products);
            return products.filter(
                (prod) => {
                    return prod.mobile.toLowerCase().includes(searchText.toLowerCase());
                }
            )
        },[products, searchText]
    )


    useEffect(
        ()=>{
            setInterval(()=>{
                setTime(new Date().toLocaleTimeString())
            },1000)
        },[]
    )

    return(
        <>
            <div>{time}</div>
            <input type="text" name="primary" value={searchText} onChange={(e)=>{
                setText(e.target.value);
            }} />
            <table>
                <thead>
                    <tr>
                        <td>S No.</td>
                        <td>Mobile</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                {
                    filteredProducts.map(
                        (prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td>{prod.id}</td>
                                    <td>{prod.mobile}</td>
                                    <td>{prod.price}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export default TestMemo;