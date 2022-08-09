import NavBar from "../components/navbar";
import { useState } from "react";
import Home from "../components/home";
import Edit from "../components/edit";
function UserView() {
    const [location,setLocation] = useState("home")
    const useLoc = (name)=>setLocation(name)
    return ( 
        <div className="userView">
            {
                location === "home"?
                <Home/>
                :
                <Edit/>
            }
            <NavBar
                Loc={useLoc}
            />
        </div>
     );
}

export default UserView;