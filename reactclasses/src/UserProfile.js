import { Outlet, Link } from "react-router-dom";
import {useLocation, useParams} from 'react-router-dom';
function User(){
    
    return(
        <>
            <div>
                <button><Link to='orders'>Orders</Link></button>
                <button><Link to='profile'>Profile</Link></button>
            </div>
            <h2>User page</h2>
            
            <h3>Routing demo</h3>
            <Outlet/>
        </>
    )
}

export function Orders(){
    return(
        <h2>Orders page</h2>
    )
}

export function Profile(){
    return(
        <h2>User Profile page</h2>
    )
}

export function UserAccess(){
    let {id,name} = useParams();
    let queries = useLocation();
    console.log(queries);
    let queryParams = new URLSearchParams(queries.search);
    console.log(queryParams.get('category'));
    console.log(queryParams.get('posts'));
    return(
        <>
            <h2>Id:{id}</h2>
            <h2>Name:{name}</h2>
            <h2>Category:{queryParams.get('category')}</h2>
            <h2>Posts:{queryParams.get('posts')}</h2>
        </>
    )
}

export default User;