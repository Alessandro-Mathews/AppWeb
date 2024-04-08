import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import Sobre from "./Components/Sobre/Sobre";
import Register from "./Components/Register/register";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginForm/>}> </Route>
            <Route path="/sobre" element={<Sobre/>}> </Route>
            <Route path="/register" element={<Register/>}> </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;