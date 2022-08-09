import { useState,useEffect } from "react";

function UserReg() {
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [phno,setPhno] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [conPassword,setConPassword] = useState("");
    const [vhcNo,setVhcNo] = useState("");
    const [dob,setDob] = useState("");
    const [district,setDistrict] = useState("");
    const [country,setCountry] = useState("");
    const [pincode,setPincode] = useState("");
    const [state,setSta] = useState("");
    const [error,setErr] = useState("");
    useEffect(()=>{
        setErr("");
    },[password,conPassword]);
    return ( 
        <form 
            className="indexpg userpg"
            onSubmit={e=>{
                e.preventDefault()
                if(password!==conPassword){
                    setErr("Plz Enter Confirm Password Correctly")
                    return
                }
                let vals = {name,address,phno,email,password,conPassword,vhcNo,dob,district,country,pincode,state}
                console.log(vals);
            }}
        >
            <h2 className="heading">Fill up the form to Register</h2>
            <h3 className="err">{error}</h3>
            <div className="fields">
                <label htmlFor="name">Name</label>
                <input required onChange={e=>setName(e.target.value)} id="name"  />
            </div>
            <div className="fields">
                <label htmlFor="Address">Address</label>
                <input required onChange={e=>setAddress(e.target.value)} id="Address"  />
            </div>
            <div className="fields">
                <label htmlFor="phno">Phone Number</label>
                <input required onChange={e=>setPhno(e.target.value)} id="phno" />
            </div>
            <div className="fields">
                <label htmlFor="email">Email Id</label>
                <input required onChange={e=>setEmail(e.target.value)} id="email" type="email" />
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
                <label htmlFor="VehicleNumber">Vehicle Number</label>
                <input required onChange={e=>setVhcNo(e.target.value)} id="VehicleNumber" />
            </div>
            <div className="fields">
                <label htmlFor="dob">D.O.B</label>
                <input required onChange={e=>setDob(e.target.value)} id="dob" type="date" />
            </div>
            <div className="fields">
                <label htmlFor="District">District</label>
                <input required onChange={e=>setDistrict(e.target.value)} id="District" />
            </div>
            <div className="fields">
                <label htmlFor="State">State</label>
                <input required onChange={e=>setSta(e.target.value)} id="State" />
            </div>
            <div className="fields">
                <label htmlFor="Country">Country</label>
                <input required onChange={e=>setCountry(e.target.value)} id="Country" />
            </div>
            <div className="fields">
                <label htmlFor="pincode">Pincode</label>
                <input required onChange={e=>setPincode(e.target.value)} id="pincode" />
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

export default UserReg;