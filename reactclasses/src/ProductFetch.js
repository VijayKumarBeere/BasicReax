import { useEffect, useState } from "react";
import ProductCard from "./Product-card";

function ProductFetch(){
    let [products, updateProducts]=useState([]);
    useEffect(
        ()=>{
            getProducts();
        }, []
    );

    async function getProducts(){
     let response = await fetch('https://fakestoreapi.com/products');
     let productList = await response.json();
     updateProducts(productList);
    //  console.log(products);
    }

    if(products.length===0){
        return (<h4>Fetching Products...</h4>)
    }

    return(
        <>
            <div className="products-list">
                {
                    products.map((p) => (<ProductCard {...p} key={p.id} ></ProductCard>))
                }
            </div>
        </>
    )
}

export default ProductFetch;