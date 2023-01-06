import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

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

interface character {
  icon: "string";
  name: "string";
}

export function MyProfile() {
  const { user, loading, getAllPlayers, setUser } = useContext(UserContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const { data } = await api.get("/characters");
      setCharacters(data.splice(0, 18));
    }
    getCharacters();
  }, []);

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

  if (loading) {
    return null;
  }

  return user.hasOwnProperty("id") ? (
    <>
      <Header />
      <Container>
        <Aside url={ImgBackground}>
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

            <SectionChooseIcons>
              <div>
                <p>Ícones</p>
                <p>Selecione um novo ícone</p>
              </div>
              <ul>
                {icons.map((icon, index) => (
                  <ButtonIcon key={index}>
                    <button
                      onClick={() => changeProfileIcon(icon)}
                      type="button"
                    >
                      <img src={icon} alt="" />
                    </button>
                  </ButtonIcon>
                ))}
              </ul>
            </SectionChooseIcons>

            <SectionMain>
              <div>
                <p>Main</p>

                <div>
                  <input type="text" placeholder="Pesquisar campeão" />

                  <button type="button">
                    <img src={ImgSearch} alt="" />
                  </button>
                </div>
              </div>
              <ul>
                {characters.map((character: character, index) => (
                  <ButtonIcon key={index}>
                    <button type="button">
                      <img src={character.icon} alt={character.name} />
                    </button>
                  </ButtonIcon>
                ))}
              </ul>
            </SectionMain>
          </form>
        </main>
      </Container>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
