function Home() {
    return ( 
        <div className="indexpg userpg home">
             <div className="fields">
                <h3 >Name :</h3>
                <h3 style={{"margin":"1rem"}} >Value</h3>
            </div>
             <div className="fields">
                <h3 >Vehicle No :</h3>
                <h3 style={{"margin":"1rem"}} >Value</h3>
            </div>
             <div className="fields">
                <h3 >Unique Id :</h3>
                <h3 style={{"margin":"1rem",}} >Value</h3>
            </div>
             <div className="fields">
                <h3 >Service Date :</h3>
                <h3 style={{"margin":"1rem"}} >Value</h3>
            </div>
             <div className="fields">
                <h3 >Service Center :</h3>
                <h3 style={{"margin":"1rem"}} >Value</h3>
            </div>
        </div>
     );
}

export default Home;