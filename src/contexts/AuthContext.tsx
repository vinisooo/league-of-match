import React, { createContext, useState } from "react";
import { api } from "services/api";
import { iAuthProviderValue, iContextChildrenProps } from "./interfaces";

export const AuthContext = createContext({} as iAuthProviderValue)

export function AuthProvider ({ children }: iContextChildrenProps) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function authenticateUserToken () {
        const token = localStorage.getItem("@league-of-match: token");

        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            await api.get(`/auth`);
            setIsAuthenticated(true)
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
