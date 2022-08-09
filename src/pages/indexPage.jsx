import { useNavigate } from "react-router-dom";
function IndexPage() {
    const navigator = useNavigate();
    return ( 
        <div className="full indexpg">
            <h1 className="heading">Login or Register </h1>
            <button className="options"
                onClick={()=>navigator('/login')}
            >
                
                Login 
            </button>
            <button 
                className="options"
                onClick={()=>navigator('/register')} 
            >
                New Register 
            </button>
        </div> 
    );
}

export default IndexPage;