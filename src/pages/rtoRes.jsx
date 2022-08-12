import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ROTReg() {
    const navigator = useNavigate();
    const [rtoName,setRtoName] = useState("");
    const [rtoID,setRtoID] = useState("");
    const [rtoAddress,setRtoAddress] = useState("");
    const [password,setPassword] = useState("");
    const [conPassword,setConPassword] = useState("");
    const [district,setDistrict] = useState("");
    const [country,setCountry] = useState("");
    const [pincode,setPincode] = useState("");
    const [state,setSta] = useState("");
    const [error,setErr] = useState("");
    const [email,setEmail] = useState("");
    useEffect(()=>{
        setErr("");
    },[password,conPassword]);
    return ( 
        <form 
            className="indexpg userpg"
            onSubmit={async e=>{
                e.preventDefault()
                console.log("hi");
                console.log(rtoAddress);
                if(password!==conPassword){
                    alert("Plz Enter Confirm Password Correctly")
                    setErr("Plz Enter Confirm Password Correctly")
                    return
                }
                let vals = {rtoName,rtoAddress,rtoID,password,district,country,pincode,state,email}
                let res =await axios.post("http://localhost:5000/rto",vals);
                console.log(res);
                console.log(vals);
                if(res.data.status==200){
                    alert("Account created");
                    navigator("/login",{replace:true})
                }else if(res.data.status==409){
                    alert(res.data.message)
                };
            }}
        >
            <h2 className="heading">Fill up the form to Register</h2>
            <h3>{error}</h3>
            <div className="fields">
                <label htmlFor="rtoid">RTO-ID</label>
                <input required onChange={e=>setRtoID(e.target.value)} id="rtoid"  />
            </div>
            <div className="fields">
                <label htmlFor="rtoaddress">RTO-Address</label>
                <input required onChange={e=>setRtoAddress(e.target.value)} id="rtoaddress"  />
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
                <label htmlFor="password">Password</label>
                <input required onChange={e=>setPassword(e.target.value)} id="password" type="password" />
            </div>
            <div className="fields">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input required onChange={e=>setConPassword(e.target.value)} id="confirmpassword" type="password" />
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
                <label htmlFor="rtoname">RTO Name</label>
                <input required onChange={e=>setRtoName(e.target.value)} id="rtoname" />
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

export default ROTReg;