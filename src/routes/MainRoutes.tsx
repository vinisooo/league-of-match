import React from "react";
import { Home } from "pages/Home/Home";
import { Login } from "pages/Login/Login";
import { MyProfile } from "pages/MyProfile/MyProfile";
import { Players } from "pages/Players/Players";
import { Register } from "pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import { PlayerModal } from "components/PlayerModal/PlayerModal";
import { ProfileProvider } from "contexts/ProfileContext";
import { AuthProvider } from "contexts/AuthContext";
import { ProtectedRoutes } from "./ProtectedRoutes";

export function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={<AuthProvider><ProtectedRoutes/></AuthProvider>}>
                <Route path="/myprofile" element={<ProfileProvider><MyProfile/></ProfileProvider>}/>
            </Route>
            <Route path="/players" element={<Players/>}>
                <Route path=":userId" element={<PlayerModal/>}/>
            </Route>
            <Route path="*" element={<p>Not Found</p>}/>
        </Routes>
    )
}
