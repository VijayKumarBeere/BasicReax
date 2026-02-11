import Product from "./Product"

function ProductDetails(){
    let product = {
        Id:24,
        name:'Lambhorgini',
        Price: 2500000,
        discount: 100000
    }
    return(
        <Product {...product} />
        // <Product Id={product.Id} name={product.name} Price={product.Price} discount={product.discount} ></Product>
    )
}
export default ProductDetails;