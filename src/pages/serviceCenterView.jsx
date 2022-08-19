import axios from "axios";
import { useState,useEffect ,useRef} from "react";

function ServiceCenter() {
    const [serCenData,setSerCenData]= useState(null);
    const [email,setEmail]= useState(null);
    const [dos,setDOS]= useState(null);
    const [ndos,setNDOS]= useState(null);
    let [file,setFile] = useState(null);
    useEffect(()=>{
        const getData = async ()=>{
            let res = await axios.get("https://pollution-app-backend.herokuapp.com/serviceCenter",{
                headers:{
                    "x-access-token":sessionStorage.getItem("serCenToken"), 
                }
            });
            console.log(res.data);
            setSerCenData(res.data.user);
        }
        getData();
        console.log("MOUNTED");
    },[]);

    async function handler(e){
        e.preventDefault();
        let formData = new FormData();
        formData.append("file",file)
        formData.append("vhcno",email)
        formData.append("dos",dos)
        formData.append("ndos",ndos)
        let vals = {email,dos,ndos};
        console.log(file.current?.target?.files);
        console.log(formData.entries());
        let res =await axios.post("https://pollution-app-backend.herokuapp.com/serviceCenter/file",formData,{headers:{"x-access-token":sessionStorage.getItem("serCenToken")}});
        console.log(res.data);
    };
    
    return ( 
        <>
            {
                sessionStorage.getItem("serCenToken") != undefined ?
                <section className="serviceCenter">
                <form  
                    method="POST" 
                    action="https://pollution-app-backend.herokuapp.com/serviceCenter/file" 
                    encType="multipart/form-data" 
                    className="form1"
                    style={{"paddingBottom":"2rem"}}
                    onSubmit={handler}
                >
                <h1 className="heading" style={{"padding":"1rem","marginTop":".5rem"}} >Service Center</h1>
                    <div className="fields sercen" style={{"width":"70%"}} >
                        <label htmlFor="name">Email Id: </label>
                        <h2 className="eee" >{serCenData?.email}</h2>
                    </div>
                    <div className="fields sercen" style={{"width":"70%"}} >
                        <label htmlFor="name"> Bill of Payment: </label>
                        <input type="file" 
                        onChange={e=>{
                            setFile(e.target.files[0]);
                        }} name="file" id="file" />
                    </div>
                    
                
                    {/* className="form2" style={{"paddingBottom":"2rem"}}> */}
                {/* <h1  className="heading" style={{"padding":"1rem"}}>Upload Status:</h1> */}
                    <div className="fields sercen" >
                        <label htmlFor="name">Vehicle Number</label>
                        <input style={{"width":"70%"} } placeholder="  eg : TN 45 BD 4932" onChange={e=>setEmail(e.target.value)} required  id="name"  />
                    </div>
                    <div className="fields sercen" >
                        <label htmlFor="name"> Date of Service </label>
                        <input style={{"width":"70%"} } type="date" onChange={e=>setDOS(e.target.value)} required  id="name"  />
                    </div>
                    <div className="fields sercen">
                        <label htmlFor="name">Next Date of Service </label>
                        <input style={{"width":"70%"} } type="date" required  onChange={e=>setNDOS(e.target.value)} id="name"  />
                    </div>
                    <button 
                        type="submit"
                        className="options"
                        style={{"width":"90%","margin":"auto"}}
                    >upload</button>
                </form>
            </section> 
                :
                <h1>No Access</h1>
            }
        </>
        
    );
}

export default ServiceCenter;