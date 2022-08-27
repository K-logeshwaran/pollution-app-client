import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {checkPhno,checkPincode,checkVhcNo} from "../utils/verification"
import play from "../utils/util";
import Title from "../components/title";

function UserReg() {
    const navigator = useNavigate();
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
            onSubmit={async e=>{
                e.preventDefault()
                if(password!==conPassword){
                    setErr("Plz Enter Confirm Password Correctly")
                    return
                }
                let vals = {name,address,phno,email,password,vhcNo,dob,district,country,pincode,state}

                // if(checkPhno(phno)===false){
                //     await play()
                //     alert("Enter a valid Phone Number");
                //     console.log();
                //     return 0
                // }
                if(checkVhcNo(vhcNo)===false){
                    await play();
                    alert("Enter a valid Vehicle Number");
                    return 0
                }
                else if(checkPincode(pincode)===false){
                    await play()
                    alert("Enter a valid Pincode");
                    return 0
                }else{
                    let res = await axios.post("https://pollution-app-backend.herokuapp.com/user",vals)
                    console.log(res.data);
                    console.log(vals);
                    if(res.data.status==200){
                        alert("Account created");
                        navigator("/login",{replace:true})
                    }else if(res.data.status==409){
                        alert(res.data.message)
                    };
                }
            }}
        >   
            <Title/>
            <h2 className="heading">Register Here</h2>
            <h3 className="err">{error}</h3>
            <div className="fields">
                <label htmlFor="name">Name</label>
                <input required onChange={e=>setName(e.target.value)} id="name"  />
            </div>
            <div className="fields">
                <label htmlFor="email">Email Id</label>
                <input required onChange={e=>setEmail(e.target.value)} id="email" type="email" />
            </div>

            <div className="fields">
                <label htmlFor="phno">Phone Number</label>
                <input required onChange={e=>setPhno(e.target.value)} id="phno" />
            </div>

            <div className="fields">
                <label htmlFor="Address">Address</label>
                <input required onChange={e=>setAddress(e.target.value)} id="Address"  />
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
            <div className="fields">
                <label htmlFor="dob">D.O.B</label>
                <input required onChange={e=>setDob(e.target.value)} id="dob" type="date" />
            </div>
           
            <div className="fields">
                <label htmlFor="VehicleNumber">Vehicle Number</label>
                <input required placeholder="  eg : TN 45 BD 4932" onChange={e=>setVhcNo(e.target.value)} id="VehicleNumber" />
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

export default UserReg;