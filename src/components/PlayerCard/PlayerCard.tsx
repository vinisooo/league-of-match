import React, { useContext } from "react";
import { DefaultLink } from "styles/DefaultBtn";
import { StyledCard } from "./StyledPlayerCard";
import { iPlayers } from "contexts/interfaces";
import { UserContext } from "contexts/UserContext";

interface iPlayerCardProps {
    user: iPlayers
}

export function PlayerCard ({ user }: iPlayerCardProps) {
    const { getRouteIcon } = useContext(UserContext);

    const userNameAux = user.nickname.replace(" ", "+");

    return (
        <StyledCard>
            <figure className="main_bg">
                <img src={user.main?.splashart || "https://sirus.b-cdn.net/wp-content/uploads/2021/05/league-of-legends-01.jpg"} alt="Foto do personagem" />
            </figure>
            <div className="main_bgshadow" ></div>
            <figure className="user_icon">
                <img src={user.profileIcon || "https://i.imgur.com/5UOr55q.png"} alt="Icone do usuário" />
            </figure>
            <div className="user_info">
                <div className="info_persona">
                    <div>
                        <h2>{user.nickname}</h2>
                        <img src={getRouteIcon(user.route) || ""}></img>
                    </div>
                    <span>{user.elo} {user.main && `| Main ${user.main.name}`}</span>
                </div>
                <p>{user?.bio}</p>
                <div className="info_btns">
                    <DefaultLink to={`${user.id}`} green="true" size="100%">Vamos jogar!</DefaultLink>
                    <a className="historic" target="_blank" href={`https://www.leagueofgraphs.com/pt/summoner/br/${userNameAux}`}>Ver histórico de partida</a>
                </div>
            </div>
        </StyledCard>
    )
}
