import React from "react"
class TestCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:this.props.data+10
        }
        console.log('inside constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('inside getDerived');
        return {
            count:props.data+10
        }
        // return null;
    }
    
    componentDidMount(){
        fetch('https://fakestoreapi.com/products/1')
            .then(resp=>resp.json())
            .then(data=>{
                console.log('inside did Mount')
                console.log(data)
            })
    }
    
    shouldComponentUpdate(){
        console.log('inside should component update')
        // return false;
        return true;
    }

    componentWillUnmount(){
        console.log('Unmounted')
    }

    getSnapshotBeforeUpdate(){
        console.log('inside snap shot before update')
        return null
    }

    componentDidUpdate(){
        console.log('inside component did update')
    }

    render(){
        return(
            <>
                <h3>Child Component</h3>
                {console.log('inside render')}
                <h4>X: {this.props.data}</h4>
                <h4>Count: {this.state.count}</h4>
            </>
        )
    }
}

export default TestCycle;