import { createContext } from "react";
import { iContextChildrenProps, iUserProviderValue } from "./interfaces";
import { api } from "services/api";
import { iUserLogin } from "./interfaces";

export const UserContext = createContext({} as iUserProviderValue)

export function UserProvider ({ children } : iContextChildrenProps) {
    
    async function login(data: iUserLogin){
        try{
            const request = await api.post("/login",data);

            localStorage.setItem("@league-of-match: bearer-token",request.data.accessToken)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <UserContext.Provider value={{login}}>
            {children}
        </UserContext.Provider>
    )
}