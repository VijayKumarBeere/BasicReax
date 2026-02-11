import React from "react";
// function User(props){ ->named function component
//     console.log(props)
//     return(
//         <div>
//             <h1>name:{props.name}</h1>
//             <h1>age:{props.age}</h1>
//         </div>
//     )
// }
// class User extends React.Component //->class component
// {
//     render(){
//         return(
//             <div className="box">
//                 <h4>Id: {this.props.userDetail.Id}</h4>
//                 <h4>User: {this.props.userDetail.name}</h4>
//                 <h4>Age: {this.props.userDetail.age}</h4>
//                 <h4>Place: {this.props.userDetail.place}</h4>
//             </div>
//         )
//     }
// }
let User=(props)=>{  //-> Arrowed function component
    // console.log(props);
    return (
        <div className="box">
            <h4>Id: {props.userDetail.Id}</h4>
            <h4>User: {props.userDetail.name}</h4>
            <h4>Age: {props.userDetail.age}</h4>
            <h4>Place: {props.userDetail.place}</h4>
        </div>
    )
}
export default User;