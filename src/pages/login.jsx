import {useState,useContext
} from 'react'
import { AuthContext } from '../context/AuthContext';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [changePassword,setChangePassword] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const usrContext = useContext(AuthContext);
    const navigator = useNavigate();
    return ( 
        <div className="center">
        <h2 className="heading">Login!</h2>
        {
            changePassword === true ? 
            <form className="indexpg userpg">
                <div className="fields">
                    <label htmlFor="emailid">Email Id</label>
                    <input required id="emailid"  />
                </div>
                <div className="fields">
                    <label htmlFor="otp">OTP</label>
                    <input required id="otp" type="password"  />
                </div>
            </form>
            : 
            <form className="indexpg userpg">
                <div className="fields">
                    <label htmlFor="sername">Email Id</label>
                    <input onChange={e=>setEmail(e.target.value)} required id="sername"  />
                </div>
                <div className="fields">
                    <label htmlFor="aadno">Password</label>
                    <input onChange={e=>setPassword(e.target.value)} required id="aadno" type="password"  />
                </div>
                <h4 style={{"fontSize":"1.6rem"}}>Choose your Role</h4>
                <div className=" fields" onChange={e=>setRole(e.target.value)}>
                    <div className="fields role ">
                        <label for="User">User </label>
                        <input required name='role' type="radio" id="User"  value="User"/>
                    </div>
                   <div className="fiel role">
                    <label for="RTO">RTO </label>
                    <input required name='role' type="radio" id="RTO"  value="RTO"/>
                    </div>
                    <div className="fields role">
                        <label for="Service Center">Service Center </label>
                        <input required name='role' type="radio" id="Service Center"  value="Service Center"/>
                    </div>
                    
                </div>
                <button 
                    type="submit" 
                    className="options" 
                    style={{"width":"100%"}} 
                    onClick = {async (e)=>{
                        e.preventDefault()
                        let type = ""
                        let vals = {email,password,role}
                        if(role=="USER"){
                            type="user"
                        }else if(role=="RTO"){
                            type="rto"
                        }else if (role=="Service Center"){
                            type="sercen"
                        }

                        console.log(vals);
                        let res = await axios.post("http://localhost:5000/login/"+type,vals)
                        console.log(res.data);
                        console.log(vals);
                        usrContext.setToken(res.data.token)
                        if(res.data.type=="user"){
                            navigator("/userView",{replace:true})
                        }
                        else if(res.data.type=="sercen"){
                            navigator("/serviceCenterView",{replace:true})
                        }
                        if(res.data.type=="rto"){
                            navigator("/rtoView",{replace:true})
                        }
                        // if(res.data.status==200){
                        //     alert("Account created");
                        //     navigator("/rtoView",{replace:true})
                        // }else if(res.data.status==409){
                        //     alert(res.data.message)
                        // };
                    }}
                >Submit</button>
                <h3 onClick={()=>setChangePassword(true)}>Forgot Password</h3>
            </form>
        }
        </div>
     );
}

export default Login;
