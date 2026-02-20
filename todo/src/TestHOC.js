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

function User(props){
    return(
        <>
            <h2>User Component</h2>
            <h3>User Name:{props.username}</h3>
            <h4>Age: {props.age}</h4>
        </>
    )
}

//defaultProps is no longer officially supported for function components in modern React.
//The React team (React) has deprecated this pattern.
User.defaultProps = {
    username: 'NA',
    age: 'NA'
};

//Prop Type warnings are not showing from react version 19.
//PropTypes is now considered legacy for runtime validation.
User.propTypes ={
    username: PropTypes.string.isRequired,
    age: PropTypes.number
}

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
            <User />
        </>
    )
}

export default HOC;