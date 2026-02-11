import { useState } from "react"

function Product(){
    let [product, updateProduct] = useState({
        productName:'iPhone',
        price:75000
    });
    // let price=80000;
    return(
        <>
            <h5>Product:{product.productName}</h5>
            <h5>Price: {product.price}</h5>
            <input type="text" id="pName"></input> <br/>
            <input type="number" id="pPrice"></input> <br/>
            <button onClick={()=>{
                // let pname = document.getElementById('pName').value;
                // console.log(pname);
                // updateProduct(pname);
                updateProduct({
                    // productName: document.getElementById('pName').value,
                    ...product, //using ...objectName, we can change only the necessary properties in the object.
                    price: document.getElementById('pPrice').value
                    }
                )
            }}>Change</button>
        </>
    )

    // function updateProduct(){
    //     return(
    //         <>
    //             let pName = document.getElementById('pName');
    //             console.log(pName);
    //             updateProduct(pName);
    //         </>
    //     )
    // }
}
export default Product;