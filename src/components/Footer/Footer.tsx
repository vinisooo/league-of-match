import React from "react";
import { StyledFooter } from "./StyledFooter";
import logo from "../../assets/logo.svg";
import { StyledContainerPlayers } from "styles/Container";

export function Footer () {
    return (
        <StyledFooter>
            <StyledContainerPlayers isFooter={true}>
                <div>
                    <img src={logo} alt="Logo" />
                    <p>Feito com ❤️ por alunos da <span>Kenzie Academy Brasil</span></p>
                </div>

                <ul>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/gabrielgpavao/">
                            Gabriel Pavão - PO
                        </a>
                    </li>

                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/bernardo-guimaraes-59aa6320a/">
                            Bernardo Guimaraes - SM
                        </a>
                    </li>

                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/iago-pinto-1b07aa208/">
                            Iago Pereira - TL
                        </a>
                    </li>

                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/vin%C3%ADcius-lira-a6294b244/">
                            Vinícius Lira - QA
                        </a>
                    </li>

                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/typhonn003/">
                            Diego Lima - QA
                        </a>
                    </li>

                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/mauibuarque/">
                            Maui Buarque - QA
                        </a>
                    </li>

                    <li>
                        <a target="_blank" href="">
                            Kaique Amorim - QA
                        </a>
                    </li>
                </ul>
            </StyledContainerPlayers>
        </StyledFooter>
    )
}
