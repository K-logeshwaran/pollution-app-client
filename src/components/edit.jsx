function Edit() {
    return ( 
        <form  className="form2 full " style={{"paddingBottom":"2rem"}}>
                <h1  className="heading" style={{"padding":"1rem"}}>Edit:</h1>
                    <div className="fields sercen" >
                        <label htmlFor="name">Your Name </label>
                        <input style={{"width":"70%"} }required  id="name"  />
                    </div>
                    <div className="fields sercen" >
                        <label htmlFor="name"> Vehicle Number:</label>
                        <input style={{"width":"70%"} } required  id="name"  />
                    </div>
                    <div className="fields sercen">
                        <label htmlFor="name">Service Center </label>
                        <input style={{"width":"70%"} } required  id="name"  />
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