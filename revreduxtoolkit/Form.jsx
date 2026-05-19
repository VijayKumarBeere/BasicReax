import { useState } from "react";
import { deposit, reset, updateFullName, updateMobile, withdraw } from "./src/store";
import { useDispatch } from "react-redux";

function Form(){
    const [fullName, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [balance, setBalance] = useState('');
    const dispatch = useDispatch();
    return(
        <>
            <div className="container">
                <h2 className="text-primary">Account form</h2>
                <div className="row">
                    <div className="col-5">
                    <input type="number" className="form-control" placeholder="Enter Amount" 
                    value={balance} onChange={(e)=>setBalance(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary col-2 mx-2" onClick={
                        ()=>{
                            dispatch(deposit(balance))
                            setBalance('');
                        }
                    }>Deposit</button>
                    <button className="btn btn-danger col-2" onClick={
                        ()=>{
                            dispatch(withdraw(balance))
                            setBalance('');
                        }
                    }>Withdraw</button>
                </div>
                <div className="row mt-2">
                    <div className="col-5">
                    <input type="text" className="form-control" placeholder="Enter Full Name"
                    value={fullName} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary col-2" onClick={
                        ()=>{
                            dispatch(updateFullName(fullName));
                            setName('');
                        }
                    }>Update</button>
                </div>
                <div className="row mt-2">
                    <div className="col-5">
                    <input type="number" className="form-control" placeholder="Enter Mobile"
                    value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary col-2" onClick={
                        ()=>{
                            dispatch(updateMobile(mobile));
                            setMobile('');
                        }
                    }>Update</button>
                </div>
                <div className="row mt-2">
                    <button className="btn btn-danger col-2" onClick={
                        ()=>{
                            dispatch(reset())
                        }
                    }>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Form;