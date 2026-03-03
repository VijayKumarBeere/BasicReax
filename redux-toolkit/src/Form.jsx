import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw,updateFullName, updateMobile, reset, addTransaction } from "./store";

function Form(){
    const dispatch = useDispatch();
    const [amount, setAmount] =useState('');
    const [name, setName] =useState('');
    const [mobile, setMobile] =useState('');
    const accountName= useSelector((state)=>{
        return state.user.fullName;
    })
    return(
        <>
            <div className="container mt-3">
                <h3 className="text-primary">Account Form</h3>
                <div className="row d-flex justify-content-center align-items-center gap-1 mb-3">
                    <div className="col-4">
                        <input type="number" placeholder="Enter Amount" value={amount}
                        onChange={
                            (e)=>{
                                if(e.target.value.length>5)
                                    e.target.value = e.target.value.slice(0,5);
                                setAmount(e.target.value)
                            }
                        }
                        className="form-control"/>
                    </div>
                    <button className="btn btn-primary col-1" onClick={()=>{
                        dispatch(deposit(amount))
                        dispatch(addTransaction({
                            accName:accountName,
                            type:'credit',
                            amount: amount,
                            timeStamp: new Date().toISOString()
                        }))
                        setAmount('');
                    }}>Deposit</button>
                    <button className="btn btn-light border border-secondary col-1"
                    onClick={()=>{
                        dispatch(withdraw(amount))
                        dispatch(addTransaction({
                            accName:accountName,
                            type:'debit',
                            amount: amount,
                            timeStamp: new Date().toISOString()
                        }))
                        setAmount('');
                    }}>Withdraw</button>
                </div>
                <div className="row justify-content-center align-items-cente gap-1 mb-3">
                    <div className="col-4">
                        <input type="text" placeholder="Enter Full Name" value={name}
                        onChange={(e)=>{
                            if(e.target.value.length>50)
                                e.target.value = e.target.value.slice(0,50);
                            setName(e.target.value);
                        }} className="form-control"/>
                    </div>
                    <button className="btn btn-light border border-primary col-2"
                    onClick={()=>{
                        dispatch(updateFullName(name))
                        setName('');
                    }}>Update</button>
                </div>
                <div className="row justify-content-center align-items-center gap-1 mb-3">
                    <div className="col-4">
                        <input type="number" placeholder="Enter Mobile" value={mobile}
                        onChange={(e)=>{
                            if(e.target.value>10)
                                e.target.value = e.target.value.slice(0,10);
                            setMobile(e.target.value);
                        }} className="form-control"/>
                    </div>
                    <button className="btn btn-light border border-primary col-2" onClick={()=>{
                        dispatch(updateMobile(mobile))
                        setMobile('');
                    }}>Update</button>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-danger col-1" onClick={()=>{
                        dispatch(reset())
                    }}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Form;