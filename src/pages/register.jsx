import { useNavigate } from "react-router-dom";
function Register() {
    const navigator = useNavigate();
    return (
    <div className="full indexpg">
        <h1 className="heading">New Registeration as ? </h1>
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