import axios from "axios";
import { useState,useEffect } from "react";
import {useNavigate,NavLink} from 'react-router-dom'
import NotiComp from '../components/notification';

function Rtopg() {
    const nav = useNavigate();
    const [rtoData,setRtodata]= useState(null);
    const [persons,setPersons] = useState(()=>[]);
    useEffect(()=>{
        const getData = async ()=>{
                let res = await axios.get("https://pollution-app-client.herokuapp.com/rto",{
                    headers:{
                        "x-access-token":sessionStorage.getItem("rtoToken"), 
                    }
                });
                console.log(res.data);
                setRtodata(res.data.rto);
        }
        const getUsers = async ()=>{
            let res = await axios.get("https://pollution-app-client.herokuapp.com/rto/users",{
                headers:{
                    "x-access-token":sessionStorage.getItem("rtoToken"), 
                }
            });
            console.log(res.data);
            setPersons(res.data.vals);
        }
        getData();
        getUsers();
        console.log("MOUNTED");
    },[]);
    return ( 
        <>
        {
            sessionStorage.getItem("rtoToken") == undefined ?
            <h1>No Access</h1>
            :
            <section className="rto" >
                <div 
                className="lgout"
                style={{"cursor":"pointer"}}
                onClick={()=>{
                    console.log(persons);
                    sessionStorage.removeItem("rtoToken")
                    nav("/login",{replace:true})
                }}>
                    <span style={{"fontSize":"30px","fontSize":"2.5rem"}} className="material-symbols-outlined" >
                        person
                    </span>
                    <h4>Logout</h4>   
                </div>
                <table border = "1">
                    <tbody>
                        <tr>
                            <td className="names">Name</td>
                            <td>{rtoData?.rtoName}</td>
                        </tr>
                        <tr>
                            <td className="names">RTO ID</td>
                            <td>{rtoData?.rtoId}</td>
                        </tr>
                        <tr>
                            <td className="names" >Email-Id</td>
                            <td>{rtoData?.email}</td>
                        </tr>
                    </tbody>
                    
                </table>
                <NotiComp/>
                <div className="section-2">
                    <h1>All Users</h1>
                    <table border = "1">
                        <tbody>
                        <tr>
                                    <td style={{"padding":".5rem"}} className="names" >Vehicle Number</td>
                                    <td>Emission</td>
                        </tr>
                        {
                        persons.length !=0 ?persons.map(e=>{
                            console.log(e);
                            return (
                            
                                <tr>
                                    <td style={{"padding":".5rem"}} className="names" ><NavLink className="persons" to={`/users/${e.email}`}>{e.vhcNo}</NavLink></td>
                                    <td>{e.emission}</td>
                                    <button
                                        onClick={async ele=>{
                                            let res = await axios.post("https://pollution-app-client.herokuapp.com/rto/fine",
                                                {
                                                    token:sessionStorage.getItem("rtoToken"),
                                                    to:e.email,
                                                    fine:5000
                                                }
                                            )
                                        }}
                                    >Set Fine</button>
                                </tr>
                                
                            
                            
                            )
                        }
                        ):
                        <h1>Loading..</h1>
                    }
                        </tbody>
                    </table>
                    
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
                let res = await axios.post("https://pollution-app-client.herokuapp.com/user",vals)
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
                Submit 
            </button>
        </form> */}