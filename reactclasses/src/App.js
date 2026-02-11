// import Header from './header'
import './App.css'
import User from './User'
import React from 'react'
// export let person={
//     name:'Vijay',
//     age:'25',
//     job:'Designer'
// };

// export let x=10;

// export default person;
function App(props){
    // return(
    //     <div>
    //         <Header></Header>
    //         <h1>Hello World</h1>
    //     </div>
        
    // )
    // let s1={
    //     background:'green',
    //     color:'black',
    //     marginTop:'100px'
    // }
    // return(
    //     <>
    //         <h1 style={s1}>This is Heading</h1>
    //         <p style={{
    //     background:'green',
    //     color:'black',
    //     marginTop:'100px'
    // }}>This is paragraph</p>
    //     </>
    // )
    let users =[
        {
            Id: 1,
            name: 'Vijay',
            age: 25,
            place:'Hyderabad'
        },
        {
            Id: 2,
            name: 'Hema',
            age:24,
            place:'Bangalore'
        },
        {
            Id:3,
            name: 'Vikram',
            age:21,
            place: 'Dharmavaram'
        },
        {
            Id:4,
            name:'Savithri',
            age: 17,
            place:'Anantapur'
        },
    ]
    // console.log(props);
    return(
        <>
            <div className='container'>
                {/* <User name = 'Vijay' age = '25' place = 'Bangalore' />
                <User name='Hema' age='24' place='Hyderabad'/> */}
                {
                    users.map(
                        (u)=>{
                            return <User key={u.Id} userDetail={u} />
                        }
                    )
                }
                
            </div>
            <div id='children'>
                {props.children}
            </div>
        </>
    )
}
// export function ClickCounter(){
//     let [counter, updateCounter] =useState(0);
//     return(
//         <>
//             <h4>Total Count:{counter}</h4>
//             <button onClick={()=>{
//                 updateCounter(++counter)
//             }}>Click</button>
//         </>
//     )
    
// }
export class ClickCounter extends React.Component{
    state={
        counter:0
    }
    render(){
        return(
            <>
                <h4>Counter Value:{this.state.counter}</h4>
                <button onClick={()=>{
                    this.setState({
                        counter: this.state.counter+1
                    })
                }}>Click</button>
            </>
        )
    }
}

export default App;