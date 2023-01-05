import { DefaultBtn, DefaultLink } from "styles/DefaultBtn";
import { StyledCard } from "./StyledUserCard";

export function UserCard() {
  return (
    <StyledCard>
      <div className="main_img">
        <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Irelia_0.jpg" alt="Imagem do campeão" />
      </div>
      <div className="user_icon">
        <img src="https://i.imgur.com/DGcUc2Q.png" alt="Icone do usuário" />
      </div>
      <div className="user_info">
        <div className="info_persona">
          <h2>Nome do usuário</h2>
          <span>Main do usuário | Elo do usuário | Lane do usuário</span>
        </div>
        <div className="info_bio">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            distinctio tenetur, quis sint minus officia magnam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Esse distinctio
            tenetur, quis sint minus officia magnam.</p>
        </div>
        <div className="info_btns">
          <DefaultBtn size="40%" green>Vamos Jogar!</DefaultBtn>
          <DefaultLink size="55%" to={"/login"}>Histórico de partidas</DefaultLink>
        </div>
      </div>
    </StyledCard>
  );
}
