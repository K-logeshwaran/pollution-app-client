import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Rtopg() {
    const usrContext = useContext(AuthContext)
    return ( 
        <>
        {
            usrContext.token == undefined ?
            <h1>No Access</h1>
            :
            <section className="rto">
            <table border = "1">
                <tr>
                    <td className="names">Name</td>
                    <td>Value</td>
                </tr>
                <tr>
                    <td className="names">Vehicle No</td>
                    <td>Value</td>
                </tr>
                <tr>
                    <td className="names" >Unique Id</td>
                    <td>Value</td>
                </tr>
            </table>
            <div className="section-2">
                <div className="fields" >
                    <label htmlFor="name">Name</label>
                    <input style={{"width":"70%"} } required  id="name"  />
                </div>
                <div className="fields" >
                    <label htmlFor="name">Name</label>
                    <input style={{"width":"70%"} } required  id="name"  />
                </div>
                <div className="fields">
                    <label htmlFor="name">Name</label>
                    <input style={{"width":"70%"} } required  id="name"  />
                </div>
            </div>
       </section>

        }
       </>
     );
}

export default Rtopg;
{/* <form 
            className="indexpg userpg"
            onSubmit={async e=>{
                e.preventDefault()
                if(password!==conPassword){
                    setErr("Plz Enter Confirm Password Correctly")
                    return
                }
                let vals = {name,address,phno,email,password,vhcNo,dob,district,country,pincode,state}
                let res = await axios.post("http://localhost:5000/user",vals)
                console.log(res.data);
                console.log(vals);
                if(res.status==200){
                    alert("Account created");
                    navigator("/login",{replace:true})
                };
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
        </form> */}