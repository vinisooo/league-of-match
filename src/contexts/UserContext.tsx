import React, { createContext, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [previousPage, setPreviousPage] = useState('/')

  useEffect(() => {
    async function loadUser () {
      const token = localStorage.getItem("@league-of-match: token");
      const id = localStorage.getItem("@league-of-match: id");

      getAllPlayers();
      if (!token) {
        setLoading(false);
      } else {
        try {
          const { data } = await api.patch(`/users/${id}`, user);
          setUser(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    }

    loadUser();
  });

  async function login (data: iUserLogin) {
    try {
      const request = await api.post("/login", data);

      localStorage.setItem("@league-of-match: token", request.data.accessToken);
      localStorage.setItem("@league-of-match: id", request.data.user.id);

      setUser(request.data.user);

      toast.success("Logado com sucesso");

      navigate("/players");
    } catch (err) {
      toast.error("Email ou senha incorretos");
      console.log(err);
    }
  }

  async function registerUser (data: iUserRegister) {
    try {
       const request = await api.post("/register", data);

      localStorage.setItem("@league-of-match: token", request.data.accessToken);
      localStorage.setItem("@league-of-match: id", request.data.user.id);

      setUser(request.data.user);
      toast.success("Usuário registrado com sucesso");
      navigate("/players");
    } catch (error) {
      toast.error("Registro não efetuado");
      console.log(error);
    }
  }

  async function getAllPlayers () {
    try {
      const response = await api.get("/users");
      setPlayers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function getRouteIcon (route: string) {
    if (route === "TopLane") {
      return top;
    } if (route === "MidLane") {
      return mid;
    } if (route === "Adc") {
      return adc;
    } if (route === "Jungle") {
      return jungle;
    } if (route === "Suporte") {
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
        loading,
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
