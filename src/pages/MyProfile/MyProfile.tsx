import React, { useContext, useState } from "react";

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
import { AuthContext } from "contexts/AuthContext";

export function MyProfile () {
  const { user } = useContext(UserContext);
  const { loading } = useContext(AuthContext);
  const { changeProfileIcon, updateSearchValue, setInputValue, changeMain, changeRoute, changeElo, changeUserData, filterCharacters } = useContext(ProfileContext)

  const [inputDisabled, setInputDisabled] = useState(true)
  const [teste, setTeste] = useState("")

  const arrayInputs = [{ label: "Nickname", userData: user.nickname }, { label: "Bio", userData: user.bio }, { label: "Discord", userData: user.discord }]

  if (loading) {
    return null;
  }

  return (
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
            {arrayInputs.map((data, index) => (
              <Input key={index}>
                <div>
                  <label>{data.label}</label>
                  <input onChange={(event) => { setTeste(event.target.value); }} type="text" defaultValue={data.userData} disabled={inputDisabled} />
                </div>

                <button onClick={() => { setInputDisabled(false); }} type="button">
                  <img src={ImgEdit} />
                </button>

                <button onClick={() => { changeUserData(teste, index); setInputDisabled(true); }} type="button">
                  Alterar
                </button>
              </Input>
            ))}

            <select defaultValue={user.elo} onChange={async (event) => { changeElo(event.target.value) }}>
              <option value={"ferro"}>Ferro</option>
              <option value={"bronze"}>Bronze</option>
              <option value={"prata"}>Prata</option>
              <option value={"ouro"}>Ouro</option>
              <option value={"platina"}>Platina</option>
              <option value={"diamante"}>Diamante</option>
              <option value={"mestre"}>Mestre</option>
              <option value={"grão-mestre"}>Grão-Mestre</option>
              <option value={"desafiante"}>Desafiante</option>
            </select>

            <select defaultValue={user.route} onChange={async (event) => { changeRoute(event.target.value) }}>
              <option value="topo">Topo</option>
              <option value="selva">Selva</option>
              <option value="meio">Meio</option>
              <option value="atirador">Atirador</option>
              <option value="suporte">Suporte</option>
            </select>
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
                      await changeMain(character);
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
  )
}
