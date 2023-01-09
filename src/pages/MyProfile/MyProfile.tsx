import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { StyledContainerPlayers } from "styles/Container";

import {
  Container,
  Input,
  SectionChooseIcons,
  ButtonIcon,
  SectionMain,
  WrapperProfile,
  Aside,
} from "./styles";

import ImgBackground from "../../assets/register-bg.png";
import ImgEdit from "../../assets/edit.svg";
import ImgSearch from "../../assets/search.svg";
import ImgProfile from "../../assets/login-bg.png";

import { Header } from "components/Header/Header";
import { icons } from "./icons";
import { api } from "services/api";
import { UserContext } from "contexts/UserContext";
import { toast } from "react-toastify";

interface iCharacter {
  icon: "string";
  name: "string";
}

export function MyProfile() {
  const { user, loading, getAllPlayers, setUser } = useContext(UserContext);
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filterCharacters, setFilterCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      try {
        const { data } = await api.get("/characters");

        setCharacters(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (characters.length > 0) {
      if (searchValue == "" || searchValue == undefined) {
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

  async function changeProfileIcon(img: string) {
    const data = {
      profileIcon: img,
    };

    try {
      const token = localStorage.getItem("@league-of-match: token");

      await api.patch(`/users/${user.id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const newUser = user;

      newUser.profileIcon = img;

      setUser(newUser);

      getAllPlayers();
    } catch (error) {
      console.error(error);
    }
  }

  async function setMain(character: iCharacter) {
    const data = {
      main: character,
    };
    try {
      const token = localStorage.getItem("@league-of-match: token");
      const userID = localStorage.getItem("@league-of-match: id");

      const response = await api.patch(`/users/${userID}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success("Seu main foi alterado");
      setUser(response.data);
      getAllPlayers();
    } catch (err) {
      console.log(err);
    }
  }

  function updateSearchValue(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchValue(inputValue);
  }

  if (loading) {
    return null;
  }

  return user.hasOwnProperty("id") ? (
    <>
      <Header isMyProfile={true} />
      <Container>
        <Aside
          url={
            user.main?.splashart ||
            "https://sirus.b-cdn.net/wp-content/uploads/2021/05/league-of-legends-01.jpg"
          }
        >
          <WrapperProfile>
            {user?.profileIcon ? (
              <div>
                <img src={user?.profileIcon} alt="" />
              </div>
            ) : (
              <div>
                <img src={ImgProfile} alt="" />
              </div>
            )}

            <p>{user && user.nickname}</p>
          </WrapperProfile>
          <span className="fade"></span>
        </Aside>

        <main>
          <form>
            <Input>
              <div>
                <label>Nickname</label>

                <input type="text" value={user?.nickname} disabled />
              </div>

              <button type="button">
                <img src={ImgEdit} alt="" />
              </button>
            </Input>

            <Input>
              <div>
                <label>Bio</label>
                <input type="text" value={user?.bio} disabled />
              </div>

              <button type="button">
                <img src={ImgEdit} alt="" />
              </button>
            </Input>

            <Input>
              <div>
                <label>Elo</label>
                <input type="text" value={user?.elo} disabled />
              </div>

              <button type="button">
                <img src={ImgEdit} alt="" />
              </button>
            </Input>

            <Input>
              <div>
                <label>Rota de prederência</label>
                <input type="text" value={user?.route} disabled />
              </div>

              <button type="button">
                <img src={ImgEdit} alt="" />
              </button>
            </Input>

            <Input>
              <div>
                <label>Discord</label>
                <input type="text" value={user?.discord} disabled />
              </div>

              <button type="button">
                <img src={ImgEdit} alt="" />
              </button>
            </Input>
          </form>
          <SectionChooseIcons>
            <div>
              <p>Ícones</p>
              <p>Selecione um novo ícone</p>
            </div>
            <ul>
              {icons.map((icon, index) => (
                <ButtonIcon key={index}>
                  <button onClick={() => changeProfileIcon(icon)} type="button">
                    <img src={icon} alt="" />
                  </button>
                </ButtonIcon>
              ))}
            </ul>
          </SectionChooseIcons>

          <SectionMain>
            <div>
              <p>Main</p>

              <form onSubmit={(event) => updateSearchValue(event)}>
                <input
                  onChange={(event) => setInputValue(event.target.value)}
                  type="text"
                  placeholder="Pesquisar campeão"
                />

                <button type="submit">
                  <img src={ImgSearch} alt="" />
                </button>
              </form>
            </div>
            <ul>
              {filterCharacters.map((character: iCharacter, index) => (
                <ButtonIcon key={index}>
                  <button type="button" onClick={() => setMain(character)}>
                    <img src={character.icon} alt={character.name} />
                    <span>{character.name}</span>
                  </button>
                </ButtonIcon>
              ))}
            </ul>
          </SectionMain>
        </main>
      </Container>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
