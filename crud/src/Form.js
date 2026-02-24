import { useState } from "react";

function Form(props){

    const [product, setProduct] = useState(props.default);
    const [isInvalidData, setFlag] = useState(false);
    
    const changeProduct = (e)=>{
        const {name ,value} = e.target;
        setProduct({...product,[name]:value});
        if(value.trim()==='' || (name === 'category' && value==='-1'))
        {
            setFlag(true)
            return;
        }
        else if(product.name.trim()==='' || product.price==='' || product.category==='-1')
        {
            setFlag(true)
            return;
        }
        setFlag(false)
    }

    function UpdateProduct(){
        console.log(product);
        if(product.name.trim()==='' || product.price==='' || product.category==='-1')
        {
            setFlag(true)
            return;
        }
        else
            setFlag(false)
        props.save(product)
    }

    return(
        <div className="form-overlay">
            <form>
                <h3 className="text-primary text-center">Product</h3>
                <div className="form-group mt-3">
                    <label className="form-label fw-bold">
                        Product Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" onChange={changeProduct} className="form-control mt-2" value={product.name} name="name" placeholder="Enter Product Name"/>
                    {
                        (isInvalidData && product.name.trim() === "") && <span className="text-danger">Product name required</span>
                    }
                </div>
                <div className="form-group mt-3">
                    <label className="form-label fw-bold">Price
                        <span className="text-danger">*</span>
                    </label>
                    <input type="number" onChange={changeProduct} className="form-control mt-2" value={product.price} name="price" placeholder="Enter Price"/>
                    {
                        (isInvalidData && product.price === "") && <span className="text-danger">Product Price required</span>
                    }
                </div>
                <div className="form-group mt-3">
                    <label className="form-label fw-bold">Category
                        <span className="text-danger">*</span>
                    </label>
                    <select className="form-control mt-2" onChange={changeProduct} value={product.category} name="category">
                        <option value='-1'>--Select Category--</option>
                        <option value={'mobiles'}>Mobiles</option>
                        <option value={'accessories'}>Accessories</option>
                        <option value={'electronics'}>Electronics</option>
                    </select>
                    {
                        (isInvalidData && product.category === "-1") && <span className="text-danger">Specify Category</span>
                    }
                </div>
                <button className="btn btn-success w-25 mt-3" onClick={
                    (e)=>{
                        e.preventDefault();
                        UpdateProduct();
                    }
                }>Save</button>
                <button className="btn btn-danger w-25 float-end mt-3" onClick={
                    (e)=>{
                        e.preventDefault();
                        props.close()
                    }
                }>Cancel</button>
            </form>
        </div>
    )
}

export default Form;