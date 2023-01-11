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

    useEffect(() => {
        async function getCharacters () {
          try {
            const { data } = await api.get("/characters");
            setCharacters(data);
          } catch (error) {
            console.error(error);
          }
        }
        if (characters.length > 0) {
          if (searchValue === "" || searchValue === undefined) {
            setFilterCharacters(characters);
          } else {
            setFilterCharacters(
              characters.filter((character: iCharacter) =>
                character.name.toLowerCase().includes(searchValue.toLowerCase())
              )
            );
          }
        }
        getCharacters();
      }, [characters, searchValue]);

      async function changeProfileIcon (img: string) {
        const data = {
          profileIcon: img
        };
        try {
          const token = localStorage.getItem("@league-of-match: token");
          await api.patch(`/users/${user.id}`, data, {
            headers: {
              authorization: `Bearer ${token}`
            }
          });
          const newUser = user;
          newUser.profileIcon = img;
          setUser(newUser);
          getAllPlayers();
        } catch (error) {
          console.error(error);
        }
      }

      async function setMain (character: iCharacter) {
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

      function updateSearchValue (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSearchValue(inputValue);
      }

    return (
        <ProfileContext.Provider value={{
            changeProfileIcon, updateSearchValue, setInputValue, setMain, filterCharacters
        }}>
            {children}
        </ProfileContext.Provider>
    )
}
