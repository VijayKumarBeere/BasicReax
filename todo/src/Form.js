import { useState } from "react";
import { useDispatch } from "react-redux";
import { Credit, Debit, Deposit, Reset, UpdateMobile, UpdateName, Withdraw } from "./actions";


function Form(){
    let dispatch = useDispatch();
    const [amount, setAmount] =useState('');
    const [name, setName] =useState('');
    const [mobile, setMobile] =useState('');
    const [tranId, setId] =useState(1);
    return(
    <>
        <div className="container text-center w-75 mt-3">
            <h2 className="text-primary col-9 justify-content-center text-center">Form</h2>
            <div className="row w-100 mt-2">
                <div className="col-7">
                    <input type="number" className="form-control" value={amount} onChange={(e)=>{
                        if(e.target.value.length>5)
                           e.target.value= e.target.value.slice(0,5);
                        setAmount(e.target.value)}} placeholder="Enter Amount"/>
                </div>
                <button className="btn btn-primary col-2" onClick={
                    ()=>{
                        dispatch(Deposit(amount))
                        dispatch(Credit(amount,tranId))
                        setId(tranId+1)
                        setAmount('');
                    }
                }>Deposit</button>
                <button className="btn btn-light border-secondary d-flex justify-content-center col-2 mx-2"
                onClick={
                    ()=>{
                        dispatch(Withdraw(amount,tranId));
                        dispatch(Debit(amount,tranId));
                        setId(tranId+1);
                        setAmount('');
                    }
                }>Withdraw</button>
            </div>
            <div className="row w-100 mt-3">
                <div className="col-7">
                    <input type="text" className="form-control" value={name} onChange={(e)=>{
                        if(e.target.value.length>75)
                           e.target.value= e.target.value.slice(0,75);
                        setName(e.target.value)
                        }} placeholder="Enter Full Name"/>
                </div>
                <button className="btn btn-primary col-2" onClick={
                    ()=>{
                        dispatch(UpdateName(name));
                        setName('');
                    }
                }>Update</button>
            </div>
            <div className="row w-100 mt-3">
                <div className="col-7">
                    <input type="number" className="form-control" value={mobile} onChange={(e)=>{
                        if(e.target.value.length>10)
                           e.target.value= e.target.value.slice(0,10);
                        setMobile(e.target.value)
                        }} placeholder="Enter Mobile Number"/>
                </div>
                <button className="btn btn-primary col-2" onClick={
                    ()=>{
                        dispatch(UpdateMobile(mobile));
                        setMobile('');
                    }
                }>Update</button>
            </div>
            <div className="row justify-content-center mt-3">
                <button className="btn btn-danger mx-auto col-2" onClick={
                    ()=>{
                        dispatch(Reset())
                    }
                }>Reset</button>
            </div>
        </div>
    </>)
}

export default Form;