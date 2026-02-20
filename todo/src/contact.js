import { lazy, Suspense, useState } from "react";
// import Login from "./Login";

const Login = lazy(()=>import('./Login'))
function Contact(){
    const [show, setShow] = useState(false)
    return(
        <>
            <div className="text-center mt-3">
                <h4 className="text-primary">Lazy Loading</h4>
                <button className="btn btn-primary" onClick={()=>{setShow(true)}}>Open</button>
            </div>
            {/* <Login></Login> */}
            {
                show===true && //<Login/> //This is not lazy loading
                (<Suspense>
                    <Login/>
                </Suspense>)
                
            }
        </>
    )
}

export default Contact;