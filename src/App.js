import {
  Routes,
  Route,
} from "react-router-dom"
import IndexPage from "./pages/indexPage";
import Login from "./pages/login";
import Register from "./pages/register";
import ROTReg from "./pages/rtoRes";
import Rtopg from "./pages/rtoView";
import ServiceReg from "./pages/serviceCenter";
import ServiceCenter from "./pages/serviceCenterView";
import UserReg from "./pages/userRes";
import UserView from "./pages/userView";
import { useState } from 'react';
import { AuthContext } from "./context/AuthContext";

function App() {
  const [token,setToken] = useState();
  const [rtoToken,setRtoToken] = useState();
  const [serCentoken,setSerCenToken] = useState();
  return (
    <AuthContext.Provider value={{token,setToken,rtoToken,setRtoToken,serCentoken,setSerCenToken}}>
      <Routes>
        <Route element={<IndexPage/>} path="/"/>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Register/>} path="/register"/>
        <Route element={<UserReg/>} path="/userReg"/>
        <Route element={<ROTReg/>} path="/rtoReg"/>
        <Route element={<ServiceReg/>} path="/serviceCenterReg"/>
        <Route element={<UserView/>} path="/userView"/>
        <Route element={<Rtopg/>} path="/rtoView"/>
        <Route element={<ServiceCenter/>} path="/serviceCenterView"/>
      
     </Routes>
    </AuthContext.Provider>
  );
}

export default App;
