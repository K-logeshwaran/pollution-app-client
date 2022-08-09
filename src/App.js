import {
  Routes,
  Route,
} from "react-router-dom"
import IndexPage from "./pages/indexPage";
import Login from "./pages/login";
import Register from "./pages/register";
import ROTReg from "./pages/rtoRes";
import ServiceReg from "./pages/serviceCenter";
import UserReg from "./pages/userRes";
import UserView from "./pages/userView";
function App() {
  return (
    <Routes>
      <Route element={<IndexPage/>} path="/"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Register/>} path="/register"/>
      <Route element={<UserReg/>} path="/userReg"/>
      <Route element={<ROTReg/>} path="/rtoReg"/>
      <Route element={<ServiceReg/>} path="/serviceCenterReg"/>
      <Route element={<UserView/>} path="/userView"/>
    </Routes>
  );
}

export default App;
