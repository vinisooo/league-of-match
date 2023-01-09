import React from "react";
import { DefaultBtn, DefaultLink } from "styles/DefaultBtn";
import { StyledCard } from "./StyledUserCard";
import { iPlayers } from "contexts/interfaces";

interface iUserProps {
  user: iPlayers;
}

export function UserCard ({ user }: iUserProps) {
  return (
    <StyledCard>
      <div className="main_img">
        <img src={user.main?.card} alt={`Foto do personagem ${user.main?.name}`} />
      </div>
      <div className="user_icon">
        <img src={user.profileIcon} alt={`Icone do ${user.nickname}`} />
      </div>
      <div className="user_info">
        <div className="info_persona">
          <h2>{user.nickname}</h2>
          <span>{user.main?.name} | {user.elo} | {user.route}</span>
        </div>
        <div className="info_bio">
          <p>{user.bio}</p>
        </div>
        <div className="info_btns">
          <DefaultBtn size="40%" green>Vamos Jogar!</DefaultBtn>
          <DefaultLink size="55%" to={"/login"}>Histórico de partidas</DefaultLink>
        </div>
      </div>
    </StyledCard>
  );
}
