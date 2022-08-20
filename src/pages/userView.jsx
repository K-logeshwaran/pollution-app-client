import NavBar from "../components/navbar";
import { useState , useContext,useEffect} from "react";
import Home from "../components/home";
import Edit from "../components/edit";
import {AuthContext} from '../context/AuthContext'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import addNotification from "react-push-notification";

function UserView() {
    const [location,setLocation] = useState("home")
    const [usrdata,setUsrdata] = useState("");
    const useLoc = (name)=>setLocation(name)
    const usrContext = useContext(AuthContext)
    console.log(usrContext);
    const navgat = useNavigate()
    useEffect(()=>{
        const getData = async ()=>{
            let res = await axios.get("https://pollution-app-backend.herokuapp.com/user",{
                headers:{
                    "x-access-token":sessionStorage.getItem("userToken"), 
                }
            });
            console.log(res);
            setUsrdata(res.data.user);
        }
        getData();
        console.log("MOUNTED");
        addNotification({
            title: 'Fine',
            message:`Fine ${usrdata.fine}`,
            native:true		
            })
        },[]);
    return ( 
        <>
        {
            sessionStorage.getItem("userToken") == undefined ?
            <h1>Access Denied</h1>
            :
            <><div className="userView">

                        {location === "home" ?
                            <Home
                                userData={usrdata}
                             />
                            :
                            <Edit />}
                        <NavBar
                            Loc={useLoc}
                            nav={navgat}
                         />
                    </div></>
        }
            
        </>
     );
}

export default UserView;