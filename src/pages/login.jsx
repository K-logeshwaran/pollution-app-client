import {useState,useEffect} from 'react'
function Login() {
    const [changePassword,setChangePassword] = useState(false);

    return ( 
        <div className="center">
        <h2 className="heading">Login!</h2>
        {
            changePassword === true ? 
            <form className="indexpg userpg">
                <div className="fields">
                    <label htmlFor="emailid">Email Id</label>
                    <input id="emailid"  />
                </div>
                <div className="fields">
                    <label htmlFor="otp">OTP</label>
                    <input id="otp" type="password"  />
                </div>
            </form>
            : 
            <form className="indexpg userpg">
                <div className="fields">
                    <label htmlFor="sername">Unique Id</label>
                    <input id="sername"  />
                </div>
                <div className="fields">
                    <label htmlFor="aadno">Password</label>
                    <input id="aadno" type="password"  />
                </div>
                <h3 onClick={()=>setChangePassword(true)}>Forgot Password</h3>
            </form>
        }
        </div>
     );
}

export default Login;