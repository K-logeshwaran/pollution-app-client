import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import play from "../utils/util";
import {checkPincode} from "../utils/verification"
function ServiceReg() {
    const navigator = useNavigate();
    const [serCenName,setSerCenName] = useState("");
    const [serCenAddress,setSerCenAddress] = useState("");
    const [password,setPassword] = useState("");
    const [conPassword,setConPassword] = useState("");
    const [district,setDistrict] = useState("");
    const [country,setCountry] = useState("");
    const [pincode,setPincode] = useState("");
    const [state,setSta] = useState("");
    const [email,setEmail] = useState("");
    const [error,setErr] = useState("");
    return ( 
        <form 
            className="indexpg userpg"
            onSubmit={async e=>{
                e.preventDefault()
                if(password!==conPassword){
                    setErr("Plz Enter Confirm Password Correctly")
                    return
                }
                let vals = {serCenAddress,serCenName,password,district,country,pincode,state,email}
                console.log(vals);
                let res =await axios.post("https://pollution-app-backend.herokuapp.com/serviceCenter",vals);
                console.log(res);
                console.log(vals);
                if(checkPincode(pincode)==false){
                    await play();
                    return alert("Enter a valid Pincode");
                }
                if(res.data.status==200){
                    await play();
                    alert("Account created");
                    navigator("/login",{replace:true})
                }else if(res.data.status==409){
                    await play();
                    alert(res.data.message)
                };
            }}
        >
            <h2 className="heading">Register Here</h2>
            <div className="fields">
                <label htmlFor="sername">Service Center Name</label>
                <input required id="sername" onChange={e=>setSerCenName(e.target.value)}  />
            </div>
            <div className="fields">
                <label htmlFor="aadno">Address</label>
                <input required onChange={e=>setSerCenAddress(e.target.value)} id="aadno"  />
            </div>
            <div className="fields">
                <label htmlFor="email">Email-Id</label>
                <input required onChange={e=>setEmail(e.target.value)} type="email" id="email"  />
            </div>
            <div className="fields">
                <label htmlFor="pincode">Pincode</label>
                <input required onChange={e=>setPincode(e.target.value)} id="pincode" />
            </div>
            <div className="fields">
                <label htmlFor="Country">Country</label>
                <input required onChange={e=>setCountry(e.target.value)} id="Country" />
            </div>
            <div className="fields">
                <label htmlFor="State">State</label>
                <input required onChange={e=>setSta(e.target.value)} id="State" />
            </div>
            <div className="fields">
                <label htmlFor="District">District</label>
                <input required onChange={e=>setDistrict(e.target.value)} id="District" />
            </div>
            <div className="fields">
                <label htmlFor="password">Password</label>
                <input required onChange={e=>setPassword(e.target.value)} id="password" type="password" />
            </div>
            <div className="fields">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input required onChange={e=>setConPassword(e.target.value)} id="confirmpassword" type="password" />
            </div>
            <button 
                className="options"
                style={{"width":"100%"}}
                type="submit"
                >
                Submit 
            </button>
        </form>
     );
}

export default ServiceReg;