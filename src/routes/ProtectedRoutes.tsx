import { AuthContext } from "contexts/AuthContext";
import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes () {
    const { loading, isAuthenticated, authenticateUserToken } = useContext(AuthContext);

    useEffect(() => {
        authenticateUserToken()
    }, [])

    if (loading) {
        return null;
    }

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to='/players'/>
    );
}
