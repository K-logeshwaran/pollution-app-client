import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function ServiceCenter() {
    const usrContext = useContext(AuthContext)
    return ( 
        <>
            {
                usrContext.token != undefined ?
                <section className="serviceCenter">
                <form  className="form1">
                <h1 className="heading" style={{"padding":"1rem","marginTop":".5rem"}} >Service Center</h1>
                    <div className="fields sercen" style={{"width":"70%"}} >
                        <label htmlFor="name">Enter Unique Id: </label>
                        <input required  id="name"  />
                    </div>
                    <div className="fields sercen" style={{"width":"70%"}} >
                        <label htmlFor="name"> Bill of Payment: </label>
                        <input type="file"  name="file" id="file" />
                    </div>
                    
                    <button 
                        type="submit"
                        className="options"
                        style={{"width":"90%","margin":"auto"}}
                    >upload</button>
                </form>
                <form    className="form2" style={{"paddingBottom":"2rem"}}>
                <h1  className="heading" style={{"padding":"1rem"}}>Edit:</h1>
                    <div className="fields sercen" >
                        <label htmlFor="name">Service Status </label>
                        <input style={{"width":"70%"} }required  id="name"  />
                    </div>
                    <div className="fields sercen" >
                        <label htmlFor="name"> Date of Service </label>
                        <input style={{"width":"70%"} } required  id="name"  />
                    </div>
                    <div className="fields sercen">
                        <label htmlFor="name">Next Date of Service </label>
                        <input style={{"width":"70%"} } required  id="name"  />
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