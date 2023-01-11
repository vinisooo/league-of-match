import React, { createContext, useContext, useEffect, useState } from "react";
import { iCharacter, iContextChildrenProps, iProfileProviderValue } from "./interfaces";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { api } from "services/api";

export const ProfileContext = createContext({} as iProfileProviderValue);

export function ProfileProvider ({ children }: iContextChildrenProps) {
    const { user, getAllPlayers, setUser } = useContext(UserContext);

    const [characters, setCharacters] = useState([]);
    const [filterCharacters, setFilterCharacters] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [userInputValue, setUserInputValue] = useState({})

    useEffect(() => {
        async function getCharacters () {
          try {
            const { data } = await api.get("/characters");
            setCharacters(data);
          } catch (error) {
            console.error(error);
          }
        }
        getCharacters();
      }, []);

    useEffect(() => {
        if (searchValue === "" || searchValue === undefined) {
            setFilterCharacters(characters);
        } else {
            setFilterCharacters(
                characters.filter((character: iCharacter) =>
                    character.name.toLowerCase().includes(searchValue.toLowerCase())
                )
            );
        }
    }, [characters, searchValue]);

      async function changeProfileIcon (img: string) {
        const data = {
          profileIcon: img
        };
        try {
          const token = localStorage.getItem("@league-of-match: token");
          const response = await api.patch(`/users/${user.id}`, data, {
            headers: {
              authorization: `Bearer ${token}`
            }
          });
          setUser(response.data);
          getAllPlayers();
        } catch (error) {
          console.error(error);
        }
      }

      async function changeMain (character: iCharacter) {
        const data = {
          main: character
        };
        try {
          const token = localStorage.getItem("@league-of-match: token");
          const userID = localStorage.getItem("@league-of-match: id");
          const response = await api.patch(`/users/${userID}`, data, {
            headers: {
              authorization: `Bearer ${token}`
            }
          });
          toast.success("Seu main foi alterado");
          setUser(response.data);
          getAllPlayers();
        } catch (err) {
          console.log(err);
        }
      }

      async function changeRoute (selectValue: string) {
        const data = {
            route: selectValue
        }
        try {
            const token = localStorage.getItem("@league-of-match: token");
            const response = await api.patch(`/users/${user.id}`, data, {
              headers: {
                authorization: `Bearer ${token}`
              }
            });
            setUser(response.data);
            toast.success("Sua rota foi alterada")
          } catch (error) {
            console.error(error);
          }
      }

      async function changeElo (selectValue: string) {
        const data = {
            elo: selectValue
        }
        try {
            const token = localStorage.getItem("@league-of-match: token");
            const response = await api.patch(`/users/${user.id}`, data, {
              headers: {
                authorization: `Bearer ${token}`
              }
            });
            setUser(response.data);
            toast.success("Seu elo foi alterado")
          } catch (error) {
            console.error(error);
          }
      }

      async function changeUserData (inputValue: string, id: number) {
        if (id === 1) {
            const data = {
                nickname: inputValue
            }
            setUserInputValue(data)
        } else if (id === 2) {
            const data = {
                bio: inputValue
            }
            setUserInputValue(data)
        } else if (id === 3) {
            const data = {
                discord: inputValue
            }
            setUserInputValue(data)
        }

        try {
            const token = localStorage.getItem("@league-of-match: token");
            const response = await api.patch(`/users/${user.id}`, userInputValue, {
              headers: {
                authorization: `Bearer ${token}`
              }
            });
            setUser(response.data);
            toast.success("Alteração realizada com sucesso")
          } catch (error) {
            console.error(error);
          }
      }

      function updateSearchValue (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSearchValue(inputValue);
      }

    return (
        <ProfileContext.Provider value={{
            changeProfileIcon, updateSearchValue, setInputValue, changeMain, changeRoute, changeElo, changeUserData, filterCharacters
        }}>
            {children}
        </ProfileContext.Provider>
    )
}
