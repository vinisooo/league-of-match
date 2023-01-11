import React from "react";
import { StyledPurpose } from "./StyledPurpose";
import { StyledContainerPlayers } from "styles/Container";

export function Purpose () {
    return (
        <StyledPurpose>
            <StyledContainerPlayers>
                <div>
                    <h2>Não procure mais!</h2>
                    <p>Nossa plataforma conecta você com jogadores talentosos e dispostos a se juntar a você na batalha</p>
                </div>
                <figure>
                    <img src="https://media.tenor.com/xdEL4liHGSUAAAAd/seraphine-karthus.gif" alt="duo dançando em summoners rift" />
                </figure>
            </StyledContainerPlayers>
        </StyledPurpose>
    )
}
