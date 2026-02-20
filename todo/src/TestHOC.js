function AuthCheck(Component){
    let flag =true;
    return (props)=>{
        if(flag===true)
            return(<Component {...props}></Component>)
        else
            return (<Login></Login>)
    }
}

function User(props){
    return(
        <>
            <h2>User Component</h2>
            <h3>User Name:{props.username}</h3>
        </>
    )
}

function Login(){
    return(
        <>
            <h3>Login Component</h3>
        </>
    )
}

const Authentication = AuthCheck(User);

function HOC(){
    return(
        <>
            <Authentication username={'john'}></Authentication>
        </>
    )
}

export default HOC;