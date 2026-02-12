import './Product-card.css'
function ProductCard({title, price, image, rating}){
    return(
        <div className="product-item">
            <img src={image} className='card'/>
            <p>{title}</p>
            <desc>⭐{+ rating.rate + '(' + rating.count + ')'}</desc>
            <p>${price}</p>
            {/* {console.log(product)} */}
        </div>
    )
}

export default ProductCard;