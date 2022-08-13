function Home({userData}) {
    return ( 
        <div className="indexpg userpg home">
             <div className="fields">
                <h3 >Name :</h3>
                <h3 style={{"margin":"1rem"}} >{userData.name}</h3>
            </div>
             <div className="fields">
                <h3 >Vehicle No :</h3>
                <h3 style={{"margin":"1rem"}} >{userData.vhcNo}</h3>
            </div>
             <div className="fields">
                <h3 >Email Id :</h3>
                <h3 style={{"margin":"1rem",}} >{userData.email}</h3>
            </div>
             <div className="fields">
                <h3 >Service Date :</h3>
                <h3 style={{"margin":"1rem"}} >userData.</h3>
            </div>
             <div className="fields">
                <h3 >Service Center :</h3>
                <h3 style={{"margin":"1rem"}} >khhjk</h3>
            </div>
        </div>
     );
}

export default Home;