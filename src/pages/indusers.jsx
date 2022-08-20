import axios from "axios";
import { useEffect,useState } from "react";
import {useParams} from "react-router-dom"

function IndUsers() {
    let parms = useParams();
    const [user,setUser] = useState([]);
    useEffect(()=>{
        console.log(parms)
        const getUser = async ()=>{
            let res = await axios.get("https://pollution-app-backend.herokuapp.com/rto/user/"+parms.email,{
                    headers:{
                        "x-access-token":sessionStorage.getItem("rtoToken"), 
                    }
                });
            console.log(res.data);
            setUser(res.data.data);
        }
        getUser()
    },[])
    return ( 
        <section className="rto" style={{"fontSize":"1.5rem"}}>
            <table  border = "1">
                        <tbody>
                            <tr>
                                <td className="names">Address</td>
                                <td>{user?.email}</td>
                            </tr>
                            <tr>
                                <td className="names">Name</td>
                                <td>{user?.name}</td>
                            </tr>
                            <tr>
                                <td className="names" >Address</td>
                                <td>{user?.address}</td>
                            </tr>
                            <tr>
                                <td className="names" >Vehicle Number</td>
                                <td>{user?.vhcNo}</td>
                            </tr>
                            <tr>
                                <td className="names" >Phone Number</td>
                                <td>{user?.phNo}</td>
                            </tr>
                            <tr>
                                <td className="names" >Emission</td>
                                <td>{user?.emission}</td>
                            </tr>
                        </tbody>
                        
            </table>
        </section>
     );
}

export default IndUsers;

