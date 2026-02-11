function Product({Id, name, Price, discount}){
    return(
        <>
            <h4>Id:{Id}</h4>
            <h4>Product: {name}</h4>
            <h4>Actual Price: {Price}</h4>
            <h4>Price after discount : {Price - discount}</h4>
        </>
    )
}

export default Product;