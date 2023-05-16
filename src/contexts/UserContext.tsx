import React, { createContext, useState } from "react";
import {
  iContextChildrenProps,
  iPlayers,
  iUserProviderValue,
  iUserRegister,
  iUserLogin
} from "./interfaces";
import { api } from "services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import top from "../assets/routeIcons/top.svg";
import mid from "../assets/routeIcons/mid.svg";
import adc from "../assets/routeIcons/adc.svg";
import jungle from "../assets/routeIcons/jungle.svg";
import sup from "../assets/routeIcons/sup.svg";

export const UserContext = createContext({} as iUserProviderValue);

export function UserProvider ({ children }: iContextChildrenProps) {
  const navigate = useNavigate();

  const [players, setPlayers] = useState<iPlayers[]>([]);
  const [user, setUser] = useState({} as iPlayers);
  const [previousPage, setPreviousPage] = useState('/')

  async function login (data: iUserLogin) {
    try {
      const request = await api.post("/users/login/", data);

      localStorage.setItem("@league-of-match: token", request.data.access);


      toast.success("Logado com sucesso");

      navigate("/players");
    } catch (err) {
      toast.error("Nome de usuário ou senha incorretos");
      console.log(err);
    }
  }

  async function registerUser (data: iUserRegister) {
    console.log(data);
    try {
      const request = await api.post("/register/", data, {
        headers: {
          "Content-Type": "application/json"
        },
      });

      console.log(request);
      toast.success("Usuário registrado com sucesso");
      navigate("/login");
    } catch (error) {
      toast.error("Registro não efetuado");
      console.log(error);
    }
  }

  async function getAllPlayers () {
    try {
      const response = await api.get("/users/");
      setPlayers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function getRouteIcon (route: string) {
    if (route === "Toplane") {
      return top;
    } if (route === "Midlane") {
      return mid;
    } if (route === "Adc") {
      return adc;
    } if (route === "Jungle") {
      return jungle;
    } if (route === "Support") {
      return sup;
    }
    return "";
  }

  return (
    <UserContext.Provider
      value={{
        login,
        players,
        user,
        previousPage,
        setPreviousPage,
        getAllPlayers,
        registerUser,
        setUser,
        getRouteIcon
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
