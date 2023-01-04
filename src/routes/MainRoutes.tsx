import { Login } from "pages/Login";
import { MyProfile } from "pages/MyProfile";
import { Players } from "pages/Players";
import { Register } from "pages/Register";
import { Route, Routes } from "react-router-dom";

export function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<div>Home</div>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/myprofile" element={<MyProfile/>}/>
            <Route path="/players" element={<Players/>}/>
        </Routes>
    )
}