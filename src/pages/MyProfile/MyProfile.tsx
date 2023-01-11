import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import {
  Container,
  Input,
  SectionChooseIcons,
  ButtonIcon,
  SectionMain,
  WrapperProfile,
  Aside
} from "./styles";

import ImgEdit from "../../assets/edit.svg";
import ImgSearch from "../../assets/search.svg";
import ImgProfile from "../../assets/login-bg.png";

import { Header } from "components/Header/Header";
import { icons } from "./icons";
import { UserContext } from "contexts/UserContext";

import { iCharacter } from "contexts/interfaces";
import { ProfileContext } from "contexts/ProfileContext";

export function MyProfile () {
  const { user, loading } = useContext(UserContext);
  const { changeProfileIcon, updateSearchValue, setInputValue, setMain, filterCharacters } = useContext(ProfileContext)

  if (loading) {
    return null;
  }

  return user.hasOwnProperty("id") ? (
    <>
      <Header isMyProfile={true} />
      <Container className="animate__animated animate__fadeIn">
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
                  <button
                    onClick={async () => {
                      await changeProfileIcon(icon);
                    }}
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

              <form
                onSubmit={(event) => {
                  updateSearchValue(event);
                }}
              >
                <input
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
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
                  <button
                    type="button"
                    onClick={async () => {
                      await setMain(character);
                    }}
                  >
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
