import NavBar from "../components/navbar";
import { useState , useContext} from "react";
import Home from "../components/home";
import Edit from "../components/edit";
import {AuthContext} from '../context/AuthContext'
function UserView() {
    const [location,setLocation] = useState("home")
    const useLoc = (name)=>setLocation(name)
    const usrContext = useContext(AuthContext)
    console.log(usrContext);
    return ( 
        <>
        {
            usrContext.token == undefined ?
            <h1>Access Denied</h1>
            :
            <><div className="userView">

                        {location === "home" ?
                            <Home />
                            :
                            <Edit />}
                        <NavBar
                            Loc={useLoc} />
                    </div></>
        }
            
        </>
     );
}

export default UserView;