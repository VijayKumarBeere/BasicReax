import React from "react";

class Test extends React.Component{
    // state={
    //     Product:"iPhone",
    //     Price: 75000
    // }
    constructor(){
        super();
        this.updatePrice=this.updatePrice.bind(this);
        this.state={
            Product:"iPhone",
            Price: 75000
        }
    }

    render(){
        return(
            <>
                <h4>Product Name: {this.state.Product}</h4>
                <h5>Price:{this.state.Price}</h5>
                <input type="number" id="price"></input>
                <button onClick={this.updatePrice}>Change</button>
            </>
        )
    }
    updatePrice(){
        let p = document.getElementById('price').value;
        this.setState({ //setState method is an asynchronous method, That's why this.state value is showing first
            Price:p
        },()=>{
            console.log(this.state) // Adding console.log() as parameter with arrow function.
        })
        //console.log(this.state);
    }
}

export default Test;