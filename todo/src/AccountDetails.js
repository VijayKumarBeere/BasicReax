import { useSelector } from "react-redux";
function Account(){
    let data = useSelector((state)=>{
        return state;
    })
    // console.log(data);
    return(
        <>
            <div className="container mt-5">
                <h3 className="text-center col-9 justify-content-center">Account Details</h3>
                <table className="table table-bordered mx-auto col-9 w-75">
                    <thead>
                        <tr>
                            <th>Account Holder</th>
                            <th>Mobile number</th>
                            <th>Balance amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.account.name}</td>
                            <td>{data.account.mobile}</td>
                            <td>{data.account.balance}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container mt-5">
                <h3 className="text-center col-9 justify-content-center">Statement</h3>
                <table className="table mx-auto table-bordered w-75">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Transaction Type</th>
                            <th>Amount</th>
                            <th>Transaction Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.statement.map((transaction,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{transaction.id}</td>
                                        <td>{
                                            transaction.Type} (
                                            {transaction.Type==='Credit'?(<span className="text-success fw-bold">+</span>)
                                                :(<span className="text-danger fw-bold">-</span>)}
                                            )
                                            </td>
                                        <td>{transaction.amount}</td>
                                        <td>{transaction.date.toString()}</td>
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