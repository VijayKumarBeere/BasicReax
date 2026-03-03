import { useSelector } from "react-redux";

function Account(){
   const data = useSelector((state)=>{
        return state;
    });
    return(
        <>
            {console.log(data)}
            <div className="container w-75 mt-5">
                <h3 className="text-center justify-content-center">Account Details</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Account Holder</th>
                            <th>Mobile number</th>
                            <th>Balance amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.user.fullName}</td>
                            <td>{data.user.mobile}</td>
                            <td>{data.user.balance}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container mt-5">
                <h3>Statement</h3>
                <table className="table mx-auto table-bordered w-75">
                    <thead>
                        <tr>
                            <th>Transaction Type</th>
                            <th>Amount</th>
                            <th>Transaction Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.transaction.map((tran,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{
                                            tran.type} (
                                            {tran.type==='credit'?(<span className="text-success fw-bold">+</span>)
                                                :(<span className="text-danger fw-bold">-</span>)}
                                            )
                                            </td>
                                        <td>{tran.amount}</td>
                                        <td>{tran.timeStamp.toString()}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Account;