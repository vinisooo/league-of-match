import { DefaultBtn, DefaultLink } from "styles/DefaultBtn";
import { StyledCard } from "./StyledUserCard";

interface iUserCard {
  nickname: string,
  elo: string,
  route: string,
  bio: string,
  icon: string,
  main: {
    name: string,
    card: string
  }
}

export function UserCard({nickname, elo, route, bio, icon, main}: iUserCard) {
  return (
    <StyledCard>
      <div className="main_img">
        <img src={main.card} alt={`Foto do personagem ${main.name}`} />
      </div>
      <div className="user_icon">
        <img src={icon} alt={`Icone do ${nickname}`} />
      </div>
      <div className="user_info">
        <div className="info_persona">
          <h2>{nickname}</h2>
          <span>{main.name} | {elo} | {route}</span>
        </div>
        <div className="info_bio">
          <p>{bio}</p>
        </div>
        <div className="info_btns">
          <DefaultBtn size="40%" green>Vamos Jogar!</DefaultBtn>
          <DefaultLink size="55%" to={"/login"}>Histórico de partidas</DefaultLink>
        </div>
      </div>
    </StyledCard>
  );
}
