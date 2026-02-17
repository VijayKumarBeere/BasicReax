import { useEffect, useState } from "react";

function GetAllProducts(url){
    let [data, setData] = useState([]);
    useEffect(
        ()=>{getData()},[]
    )
    async function getData(){
        await fetch(url).then(resp=>resp.json()).then(result=>setData(result));
        // console.log(data);
        // setData(result);
    }
    // console.log(data);
    return data;
}

export default GetAllProducts;