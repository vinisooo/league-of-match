import { StyledPlayerModal } from "./StyledPlayerModal";

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "contexts/UserContext";
import { Link, useParams } from "react-router-dom";
import { iPlayers } from "contexts/interfaces";
import disableScroll from "disable-scroll";

import closeModalIcon from "../../assets/close-modal-icon.svg";
import "animate.css";

export function PlayerModal () {
    const { players, getRouteIcon } = useContext(UserContext);
    const { userId } = useParams();
    const [modalPlayer, setModalPlayer] = useState({} as iPlayers);

    useEffect(() => {
        const foundUser: iPlayers | undefined = players.find((player) => {
            return player.id === Number(userId)
        })
        if (foundUser) {
            setModalPlayer(foundUser)
        }
    })

    disableScroll.on()

    return (
        <StyledPlayerModal mainSplashArt={modalPlayer.main?.splashart}>
            <div className="animate__animated animate__fadeInUp">
                <div className="modal-container">
                    <header>
                        <figure>
                            <img src={modalPlayer.profile_icon || "https://i.imgur.com/5UOr55q.png"} alt={modalPlayer.username} />
                        </figure>
                        <h2>{modalPlayer.username}</h2>

                        <Link to="/players">
                            <img src={closeModalIcon}/>
                        </Link>
                    </header>
                    <div className="user-info">
                        <h3>Elo: <span>{modalPlayer.elo}</span></h3>
                        {
                            modalPlayer.main &&
                            <h3>Main: <span>{modalPlayer.main?.name}</span></h3>
                        }
                        <div className="user-route">
                            <h3>Rota Preferida: <span>{modalPlayer.route}</span></h3>
                            <img src={getRouteIcon(modalPlayer.route)} alt="" />
                        </div>
                        {
                            modalPlayer.discord &&
                            <h3>Discord: <span>{modalPlayer.discord}</span></h3>
                        }
                        {
                            modalPlayer.bio &&
                            <p>
                                <span>Bio: </span>
                                {modalPlayer.bio}
                            </p>
                        }
                    </div>
                    <a className="bottom-btn" target="_blank" href={`https://www.leagueofgraphs.com/pt/summoner/br/${modalPlayer.username?.replace(" ", "+")}`}>
                        Ver histórico de partidas
                    </a>
                </div>
            </div>
        </StyledPlayerModal>
    )
}
