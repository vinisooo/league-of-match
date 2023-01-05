import { createContext, useEffect, useState } from "react";
import { iContextChildrenProps, iPlayers, iUserProviderValue } from "./interfaces";
import { api } from "services/api";
import { iUserLogin } from "./interfaces";
import { ToastContainer, toast } from 'react-toastify';

export const UserContext = createContext({} as iUserProviderValue)

export function UserProvider ({ children } : iContextChildrenProps) {

    const [players , setPlayers] = useState<iPlayers[]>([])
    
    async function login(data: iUserLogin){
        try{
            const request = await api.post("/login",data);
        
            console.log(request)
            localStorage.setItem("@league-of-match: bearer-token",request.data.accessToken);
            localStorage.setItem("@league-of-match: logged-user",JSON.stringify(request.data));
            toast.success("Logado com sucesso");

        }catch(err){
            toast.error("Email ou senha incorretos");
            console.log(err)
        }
    }

    async function getAllPlayers(){
        try {
            const token = localStorage.getItem("@league-of-match: bearer-token")
            if(token){
                const response = await api.get("/users",{
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })
                console.log(response.data)
                setPlayers(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllPlayers()
    },[])

    return (
        <UserContext.Provider value={{login, players}}>
            {children}
        </UserContext.Provider>
    )
}