import PropTypes from 'prop-types';
import React from 'react';
// function AuthCheck(Component){
//     let flag =true;
//     return (props)=>{
//         if(flag===true)
//             return(<Component {...props}></Component>)
//         else
//             return (<Login></Login>)
//     }
// }

function User({username, age}){
    return(
        <>
            <h2>User Component</h2>
            <h3>User Name:{username}</h3>
            <h4>Age: {age}</h4>
        </>
    )
}

//Prop Type warnings are not showing from react version 19.
//PropTypes is now considered legacy for runtime validation.
User.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number
};

// function Login(){
//     return(
//         <>
//             <h3>Login Component</h3>
//         </>
//     )
// }

// const Authentication = AuthCheck(User);

function HOC(){
    return(
        <>
            <User age = {24}></User>
        </>
    )
}

export default HOC;