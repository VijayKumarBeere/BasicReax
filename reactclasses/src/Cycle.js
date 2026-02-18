import React from "react"
import TestCycle from "./TestCycle";

class Cycle extends React.Component{
    constructor(){
        super()
        this.state={
            x:10, 
            show:true
        }
    }
    render(){
        return(
            <>
                {/* {console.log('render')} */}
                <h3>Parent Component</h3>
                {this.state.show && <TestCycle data={this.state.x}></TestCycle>}
                <button onClick={()=>{
                    this.setState({
                        ...this.state,
                        show:false
                    })
                }}>Hide</button>
                <button onClick={()=>{
                    this.setState({
                        ...this.state,
                        show:true
                    })
                }}>Show</button>
                <button onClick={()=>{
                    this.setState({
                        ...this.state,
                        x:this.state.x+10
                    })
                }}>Update</button>
            </>
        )
    }
}

export default Cycle;