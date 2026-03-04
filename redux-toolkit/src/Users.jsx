import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./mainStore";

function Users(){
    // const data =useSelector((state)=>state);
    const users = useSelector(
        (state)=> state.user.users
    )
    const status=useSelector(
        (state)=> state.user.status
    )
    const error = useSelector(
        (state)=> state.user.error
    )
    // console.log(data);
    // console.log(users);
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch(fetchUsers())
        },[]
    )
    return(
        <>
            <div className="container">
                <h3 className="text-primary mb-4">User Data using redux Toolkit Async Thunk</h3>
                {
                    status === 'pending' && <h4>Obtaining User data. Please wait...</h4>
                }
                {
                    status==='completed' && error ===false && (
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user)=>(
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
                {
                    error && <h4 className="text-danger">{error} (<span>Data not Found</span>)</h4>
                }
                
            </div>
        </>
    )
}

export default Users;