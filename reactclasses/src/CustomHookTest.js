import GetAllProducts from "./utils";


function CustomTest(){
    let products = GetAllProducts('https://fakestoreapi.com/products');
    // console.log(products);
    return(
        <>
            {
                products.map((product)=>
                    <div>{Object.keys(product)}</div>
                )
            }
            {/* <h1>Heading</h1> */}
        </>
    )
}

export default CustomTest;