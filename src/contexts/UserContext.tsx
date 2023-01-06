import { createContext, useEffect, useState } from "react";
import {
  iContextChildrenProps,
  iPlayers,
  iUserProviderValue,
  iUserRegister,
} from "./interfaces";
import { api } from "services/api";
import { iUserLogin } from "./interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const UserContext = createContext({} as iUserProviderValue);

export function UserProvider({ children }: iContextChildrenProps) {
  const navigate = useNavigate();

  const [players, setPlayers] = useState<iPlayers[]>([]);
  const [user, setUser] = useState({} as iPlayers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@league-of-match: token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.patch(`/users/${user.id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  async function login(data: iUserLogin) {
    try {
      const request = await api.post("/login", data);

      localStorage.setItem("@league-of-match: token", request.data.accessToken);

      setUser(request.data.user);

      toast.success("Logado com sucesso");

      setUser(request.data.accessToken);

      navigate("/players");
    } catch (err) {
      toast.error("Email ou senha incorretos");
      console.log(err);
    }
  }

  async function registerUser(data: iUserRegister) {
    try {
      const request = await api.post("/register", data);
      toast.success("Usuário registrado com sucesso");
    } catch (error) {
      toast.error("Registro não efetuado");
      console.log(error);
    }
  }

  async function getAllPlayers() {
    try {
      const token = localStorage.getItem("@league-of-match: token");
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
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        login,
        players,
        user,
        loadUser,
        getAllPlayers,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
