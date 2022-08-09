import { useState,useEffect } from "react";

function ServiceReg() {
    const [serCenName,setSerCenName] = useState("");
    const [serCenAddress,setSerCenAddress] = useState("");
    const [password,setPassword] = useState("");
    const [conPassword,setConPassword] = useState("");
    const [district,setDistrict] = useState("");
    const [country,setCountry] = useState("");
    const [pincode,setPincode] = useState("");
    const [state,setSta] = useState("");
    const [error,setErr] = useState("");
    return ( 
        <form 
            className="indexpg userpg"
            onSubmit={e=>{
                e.preventDefault()
                if(password!==conPassword){
                    setErr("Plz Enter Confirm Password Correctly")
                    return
                }
                let vals = {serCenAddress,serCenName,password,conPassword,district,country,pincode,state}
                console.log(vals);
            }}
        >
            <h2 className="heading">Fill up the form to Register</h2>
            <div className="fields">
                <label htmlFor="sername">Service Center Name</label>
                <input required id="sername" onChange={e=>setSerCenName(e.target.value)}  />
            </div>
            <div className="fields">
                <label htmlFor="aadno">Address</label>
                <input required onChange={e=>setSerCenAddress(e.target.value)} id="aadno"  />
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