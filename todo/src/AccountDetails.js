import { useSelector } from "react-redux";
function Account(){
    let data = useSelector((state)=>{
        return state;
    })

    return(
        <>
            <div className="container w-75 mt-5">
                
                <table className="table table-bordered w-75">
                    <thead>
                        <h3 className="text-center">Account Details</h3>
                        <tr>
                            <th>Account Holder</th>
                            <th>Mobile number</th>
                            <th>Balance amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.mobile}</td>
                            <td>{data.balance}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Account;