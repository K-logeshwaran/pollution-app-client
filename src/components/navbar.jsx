function NavBar({Loc,nav}) {
    return ( 
        <div className="navbar">
            <div onClick={()=>Loc("home")}>
                <span style={{"fontSize":"30px"}} class="material-symbols-outlined">
                    home
                </span>
                <h4>Home</h4>   
            </div>
            <div onClick={()=>Loc("edit")}>
                <span style={{"fontSize":"30px"}} class="material-symbols-outlined">
                    edit
                </span>
                <h4>Edit</h4>   
            </div>
            <div onClick={()=>{
                sessionStorage.removeItem("userToken")
                nav("/login",{replace:true})
                Loc("logout")
            }}>
                <span style={{"fontSize":"30px"}} class="material-symbols-outlined" >
                    person
                </span>
                <h4>Logout</h4>   
            </div>
        </div>
     );
}

export default NavBar;