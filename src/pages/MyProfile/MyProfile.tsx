import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Container,
  Input,
  SectionChooseIcons,
  ButtonIcon,
  SectionMain,
  WrapperProfile,
  Aside,
} from "./styles";

import ImgTest from "../../assets/register-bg.png";
import ImgEdit from "../../assets/edit.svg";
import ImgSearch from "../../assets/search.svg";
import ImgX from "../../assets/login-bg.png";

import { Header } from "components/Header/Header";
import { icons } from "./icons";
import { api } from "services/api";

interface character {
  icon: "string";
  name: "string";
}

export function MyProfile() {
  const getUserLocalStorageJSON = localStorage.getItem(
    "@league-of-match: logged-user"
  );

  const getUserLocalStorage = JSON.parse(getUserLocalStorageJSON!);

  const user = getUserLocalStorage.user;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      nickname: user.nickname,
      bio: user.bio,
      elo: user.elo,
      route: user.route,
      discord: user.discord,
    },
  });

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const { data } = await api.get("/characters");
      setCharacters(data.splice(0, 18));
    }
    getCharacters();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Aside url={ImgTest}>
          <WrapperProfile>
            <div>
              <img src={ImgX} alt="" />
            </div>

            <p>{user.nickname}</p>
          </WrapperProfile>
        </Aside>

        <main>
          <form>
            <Input>
              <div>
                <label>Nickname</label>
                <input type="text" disabled {...register("nickname")} />
              </div>

              <button type="button">
                <img src={ImgEdit} alt="" />
              </button>
            </Input>

            <Input>
              <div>
                <label>Bio</label>
                <input type="text" disabled {...register("bio")} />
              </div>

              <button type="button">
                <img src={ImgEdit} alt="" />
              </button>
            </Input>

            <Input>
              <div>
                <label>Elo</label>
                <input type="text" disabled {...register("elo")} />
              </div>

              <button type="button">
                <img src={ImgEdit} alt="" />
              </button>
            </Input>

            <Input>
              <div>
                <label>Rota de prederência</label>
                <input type="text" disabled {...register("route")} />
              </div>

              <button type="button">
                <img src={ImgEdit} alt="" />
              </button>
            </Input>

            <Input>
              <div>
                <label>Discord</label>
                <input type="text" disabled {...register("discord")} />
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
                    <button type="button">
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
                      <img src={character.icon} alt="" />
                    </button>
                  </ButtonIcon>
                ))}
              </ul>
            </SectionMain>
          </form>
        </main>
      </Container>
    </>
  );
}
