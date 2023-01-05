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

export function MyProfile() {
  return (
    <Container>
      <Aside url={ImgTest}>
        <WrapperProfile>
          <div>
            <img src={ImgX} alt="" />
          </div>

          <p>Meu nome</p>
        </WrapperProfile>
      </Aside>

      <main>
        <form action="">
          <Input>
            <div>
              <label>Nickname</label>
              <input type="text" placeholder="Escreva seu nome..." />
            </div>

            <button>
              <img src={ImgEdit} alt="" />
            </button>
          </Input>

          <Input>
            <div>
              <label>Bio</label>
              <input type="text" placeholder="Escreva aqui sua bio..." />
            </div>

            <button>
              <img src={ImgEdit} alt="" />
            </button>
          </Input>

          <Input>
            <div>
              <label>Elo</label>
              <input type="text" placeholder="Escreva aqui ..." />
            </div>

            <button>
              <img src={ImgEdit} alt="" />
            </button>
          </Input>

          <Input>
            <div>
              <label>Rota de prederência</label>
              <input type="text" placeholder="Escreva aqui..." />
            </div>

            <button>
              <img src={ImgEdit} alt="" />
            </button>
          </Input>

          <Input>
            <div>
              <label>Discod</label>
              <input
                type="text"
                placeholder="Escreva seu link do discord   ..."
              />
            </div>

            <button>
              <img src={ImgEdit} alt="" />
            </button>
          </Input>

          <SectionChooseIcons>
            <div>
              <p>Ícones</p>
              <p>Selecione um novo ícone</p>
            </div>
            <ul>
              <ButtonIcon>
                <button>
                  <img src={ImgX} alt="" />
                </button>
              </ButtonIcon>

              <ButtonIcon>
                <button>
                  <img src={ImgX} alt="" />
                </button>
              </ButtonIcon>

              <ButtonIcon>
                <button>
                  <img src={ImgX} alt="" />
                </button>
              </ButtonIcon>
            </ul>
          </SectionChooseIcons>

          <SectionMain>
            <div>
              <p>Ícones</p>

              <div>
                <input type="text" placeholder="Pesquisar campeão" />

                <button>
                  <img src={ImgSearch} alt="" />
                </button>
              </div>
            </div>
            <ul>
              <ButtonIcon>
                <button>
                  <img src={ImgX} alt="" />
                </button>
              </ButtonIcon>

              <ButtonIcon>
                <button>
                  <img src={ImgX} alt="" />
                </button>
              </ButtonIcon>

              <ButtonIcon>
                <button>
                  <img src={ImgX} alt="" />
                </button>
              </ButtonIcon>
            </ul>
          </SectionMain>
        </form>
      </main>
    </Container>
  );
}
