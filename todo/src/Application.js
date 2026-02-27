// import Account from "./AccountDetails";
// import Form from "./Form";

import { useDispatch, useSelector } from 'react-redux';
import './Application.css'
function App(){
    const dispatch = useDispatch();
    let data = useSelector((state)=>state);
    console.log(data);
    function fetchData(dispatch,getState){
        // console.log(getState());
        fetch('https://jsonplaceholder.typicode.com/users/2')
        .then(res=>res.json()).then(data=>{
            // console.log(data)
            dispatch({type:'add',payload:data});
        })
    }
    return(
        <>
        {/* <div className="w-75 m-3 mx-auto justify-content-center align-items-center border border-secondary rounded">
            <Form></Form>
            <Account></Account>
        </div> */}
        <button className='btn btn-primary' onClick={()=>{
            dispatch(fetchData)
        }}>Get</button>
        </>
    )
}

export default App;