import { useSelector } from "react-redux";

function Account(){
    const data = useSelector( (state)=>
        {
            return state.user;
        });
    console.log(data);
    return(
        <>
         <div className="container w-50">
            <h2 className="text-primary">Account Details</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>full name</td>
                        <td>Mobile</td>
                        <td>Balance</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.fullName}</td>
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