import axios from "axios";
import { useState} from "react";
function Edit() {
    const [name,setName] = useState(null);
    const [Vhcno,setVhcno] = useState(null);
    const [serviceCenter,setServiceCenter] = useState(null);
    async function handler(e) {
        e.preventDefault();
        console.log({name,Vhcno,serviceCenter});
        let res = await axios.put("https://pollution-app-backend.herokuapp.com/user/update",
            {name,Vhcno,serviceCenter},
            {
                headers:{
                    "x-access-token":sessionStorage.getItem("userToken")
                }
            }
        )
        console.log(res);
        alert("Updated!")
        window.location.reload()
    }
    return ( 
        <form  className="form2 full " onSubmit={handler} style={{"paddingBottom":"2rem","marginTop":"6rem"}}>
                <h1  className="heading" style={{"padding":"1rem"}}>Edit:</h1>
                    <div className="fields sercen" >
                        <label htmlFor="name">Your Name </label>
                        <input 
                            onChange={e=>setName(e.target.value)}
                            style={{"width":"70%"} } 
                            required  
                            id="name"
                        />
                    </div>
                    <div className="fields sercen" >
                        <label htmlFor="name"> Vehicle Number:</label>
                        <input 
                            style={{"width":"70%"} }
                            required  
                            id="name"  
                            onChange={e=>setVhcno(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit"
                        className="options"
                        style={{"width":"90%","margin":"auto"}}
                    >upload</button>
        </form>
            
     );
}

export default Edit;