import { useEffect, useState } from "react";
// import Product from "./Product-card";
import './Product-card.css'
// import axios from 'axios';
function Products(){
    let [cards, setCards] = useState([]);
    // let rootAPI = axios.create({
    //         baseURL:'https://fakestoreapi.com'
    //     }
    // );

    useEffect(
        () => getProducts(),[]
    )

    function addProduct(){
        // const product = { title: 'New Product', price: 29.99, description:'', category:'', image:"#", rating:{
        //     count:4.2,
        //     rate: 4.0
        // } };
        // fetch('https://fakestoreapi.com/products', {
        // method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(product)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        // })

        
    }

    function removeProduct(id){
        // fetch('https://fakestoreapi.com/products/'+id, {
        //     method: 'DELETE'
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         let details = cards.filter((card)=>card.id!==data.id);
        //         console.log(details);
        //         setCards(details);
        //     });
    }

    async function getProducts(){
        fetch('https://fakestoreapi.com/products')
            .then(resp=>resp.json())
            .then(data=>{
                console.log(data);
                setCards(data)
            });
        // console.log('getProducts')
        // let res = await rootAPI.get('/products');
        // console.log(res.data);
        // setCards(res.data)
    }

    return(
        <>
            <div className="container">
                {
                    cards.map(product=>{
                        return (
                        <div className="row" key={product.id}>
                            <div className="col-12 col-sm-6 col-md-3 mb-5">
                                <div className="card h-100 mt-5" style={{width:'18rem'}}>
                                    <img src={product.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h6 className="card-title">{product.title.substring(0,50)}</h6>
                                        <p className="card-text">{product.description.substring(0,75)}...</p>
                                        <p>⭐{+ product.rating.rate + '(' + product.rating.count + ')'}</p>
                                        <p className='text-success fw-bold mt-3'>${product.price}</p>
                                        <button className="btn btn-danger w-100" onClick={()=>{
                                            removeProduct(product.id)
                                        }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>

            <div className="text-center">
                <button className="btn btn-primary mt-5" onClick={addProduct}>Add New Product</button>
            </div>
        </>
    )
}

export default  Products;