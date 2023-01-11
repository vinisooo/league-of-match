import React, { useContext } from "react";
import { StyledOnlinePlayers } from "./StyledOnlinePlayers";
import { StyledContainerPlayers } from "styles/Container";
import { Link } from "react-router-dom";

import { UserContext } from "contexts/UserContext";

export function OnlinePlayers () {
    const { players } = useContext(UserContext);

    if (players.length === 0) {
        return <></>
    }
    return (
        <StyledOnlinePlayers>
            <StyledContainerPlayers>
                <ul>
                    {
                        players.map((player, index) => {
                            if (index < 3) {
                                return (
                                    <li key={player.id}>
                                        <Link to={`/players/${player.id}`}>
                                            <figure className={`user-${index}`}>
                                                <img src={player.profileIcon || "https://i.ibb.co/FX7YqmQ/5UOr55q.png"} alt={player.nickname} />
                                            </figure>
                                            <span>{player.nickname}</span>
                                        </Link>
                                    </li>
                                )
                            }
                            return ""
                        })
                    }
                </ul>
                <div>
                    <h2>{players.length} Players disponíveis</h2>
                    <Link className="players-link" to="/players">Ver Players disponíveis</Link>
                </div>
            </StyledContainerPlayers>
        </StyledOnlinePlayers>
    )
}
