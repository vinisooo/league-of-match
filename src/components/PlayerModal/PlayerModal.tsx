import { StyledPlayerModal } from "./StyledPlayerModal";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "contexts/UserContext";
import React, { Link, useParams } from "react-router-dom";
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
            return player.id === userId
        })
        if (foundUser) {
            setModalPlayer(foundUser)
        }
    })

    disableScroll.on();

    return (
        <StyledPlayerModal mainSplashArt={modalPlayer.main?.splashart}>
            <div className="animate__animated animate__fadeInUp">
                <div className="modal-container">
                    <header>
                        <figure>
                            <img src={modalPlayer.profileIcon || "data:image/jpeg;base64,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"} alt={modalPlayer.nickname} />
                        </figure>
                        <h2>{modalPlayer.nickname}</h2>

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
                            <a target="_blank" href={`https://www.leagueofgraphs.com/pt/summoner/br/${modalPlayer.nickname?.replace(" ", "+")}`}>
                                Ver histórico de partidas
                            </a>
                    </div>
                </div>
            </div>
        </StyledPlayerModal>
    )
}
