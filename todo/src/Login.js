import { useState } from "react";

function Login(){
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    // const pwd = useRef();

    const [errors, setErrors] = useState({
        emsg:'',
        pmsg: ''
    })

    const eRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const pRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    function handleSubmit(){
        if(email.trim().length===0)
            setErrors(prev=>({...prev,emsg:'Enter email address'}))
        else if(!eRegex.test(email))
            setErrors(prev=>({...prev, emsg:'Enter valid email address'}))
        else
            setErrors(prev=>({...prev, emsg:''}))

        // console.log(errors.emsg);

        if(pwd.trim().length===0)
            setErrors(prev=>({...prev,pmsg:'Enter Password'}))
        else if(pwd.trim().length<8 || pwd.trim().length>16)
            setErrors(prev=>({...prev,pmsg:'Password should contain 8-16 characters'}))
        else if(!pRegex.test(pwd))
            setErrors(prev=>({...prev, 
                        pmsg:'Enter valid password'
                        }))
        else
            setErrors((errors)=>({...errors, pmsg:''}))
    }
    return(
        <>
            <div className="border w-25 mt-5 m-auto p-3">
                <h3 className="text-primary text-center">Sign In</h3>
                <div className="mt-3">
                    <label htmlFor="txtEmail">Email</label>
                    <input type="email" id="txtEmail" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                    {errors.emsg && <span className="text-danger">{errors.emsg}</span>}
                </div>
                <div className="mt-3">
                    <label htmlFor="txtPwd">Password</label>
                    <input type="password" id="txtPwd" className="form-control" value={pwd} onChange={e=>setPwd(e.target.value)}/>
                    {errors.pmsg && <span className="text-danger">{errors.pmsg}</span>}
                </div>
                <div className="mt-4">
                    <button className="btn btn-primary w-100" 
                    onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login;