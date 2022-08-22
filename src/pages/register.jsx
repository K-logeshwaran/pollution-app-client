import { useNavigate } from "react-router-dom";
import Title from "../components/title";
function Register() {
    const navigator = useNavigate();
    return (
    <div className="full indexpg">
        <Title/>
        <h1 className="heading">Register Now  </h1>
        <button className="options"
            onClick={()=>navigator('/userReg')}
        >
            User
        </button>
        <button 
            className="options"
            onClick={()=>navigator('/rtoReg')}
        >
            RTO
        </button>
        <button 
            className="options"
            onClick={()=>navigator('/serviceCenterReg')}
        >
            Service Center 
        </button>
    </div>  
);
}

export default Register;