import { Home } from "pages/Home/Home";
import { Login } from "pages/Login/Login";
import { MyProfile } from "pages/MyProfile/MyProfile";
import { Players } from "pages/Players/Players";
import { Register } from "pages/Register/Register";
import { Route, Routes } from "react-router-dom";

export function MainRoutes () {
 
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>            
            <Route path="/myprofile" element={<MyProfile/>}/>
            <Route path="/players" element={<Players/>}/>
            <Route path="*" element={<p>Not Found</p>}/>
        </Routes>
    )
}