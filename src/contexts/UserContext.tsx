import { createContext, useEffect, useState } from "react";
import {
  iContextChildrenProps,
  iPlayers,
  iUserProviderValue,
} from "./interfaces";
import { api } from "services/api";
import { iUserLogin } from "./interfaces";
import { toast } from "react-toastify";
import { request } from "http";

export const UserContext = createContext({} as iUserProviderValue);

export function UserProvider({ children }: iContextChildrenProps) {
  const [players, setPlayers] = useState<iPlayers[]>([]);

  async function login(data: iUserLogin) {
    try {
      const request = await api.post("/login", data);

      localStorage.setItem(
        "@league-of-match: logged-user",
        JSON.stringify(request.data)
        );
        toast.success("Logado com sucesso");
        setPlayers(request.data.ac)
    } catch (err) {
      toast.error("Email ou senha incorretos");
      console.log(err);
    }
  }

  async function getAllPlayers() {
    try {
      const token = localStorage.getItem("@league-of-match: bearer-token");
      if (token) {
        const response = await api.get("/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setPlayers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <UserContext.Provider value={{ login, players }}>
      {children}
    </UserContext.Provider>
  );
}
