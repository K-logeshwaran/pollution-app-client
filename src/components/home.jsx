function Home({userData}) {
    return ( 
        <div className=" rto " style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
            <table border = "1">
                <tr>
                    <td className="names">Name</td>
                    <td>{userData.name}</td>
                </tr>
                <tr>
                    <td className="names">Vehicle No :</td>
                    <td>{userData.vhcNo}</td>
                </tr>
                <tr>
                    <td className="names" >Email-Id</td>
                    <td>{userData.email}</td>
                </tr>
                <tr>
                    <td className="names" >Service Center</td>
                    <td>userData.email</td>
                </tr>
                <tr>
                    <td className="names" >Service Date</td>
                    <td>userData.email</td>
                </tr>
            </table>
        </div>
     );
}

export default Home;

{/* <div className="fields">
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
        </div> */}