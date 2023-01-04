import { createContext } from "react";
import { iContextChildrenProps, iUserProviderValue } from "./interfaces";

export const UserContext = createContext({} as iUserProviderValue)

export function UserProvider ({ children } : iContextChildrenProps) {
    
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}