import React, { createContext, useContext, useState } from "react";
import { api } from "services/api";
import { iAuthProviderValue, iContextChildrenProps } from "./interfaces";
import { UserContext } from "./UserContext";

export const AuthContext = createContext({} as iAuthProviderValue)

export function AuthProvider ({ children }: iContextChildrenProps) {
    const { setUser } = useContext(UserContext)
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function authenticateUserToken () {
        const token = localStorage.getItem("@league-of-match: token");
        const userId = localStorage.getItem("@league-of-match: id");

        try {
            const { data } = await api.patch(`/users/${userId}`, {}, {
                headers: {
                  authorization: `Bearer ${token}`
                }
            });
            setIsAuthenticated(true)
            setUser(data)
        } catch (error) {
            console.log(error)
            setIsAuthenticated(false)
            localStorage.removeItem("@league-of-match: token")
            localStorage.removeItem("@league-of-match: id")
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{ loading, authenticateUserToken, isAuthenticated }}>
            { children }
        </AuthContext.Provider>
    )
}
