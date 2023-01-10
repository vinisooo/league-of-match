import React, { useState } from "react";
import { StyledAboutDev, SeeMore} from "./StyledAboutDev";
import { StyledContainerPlayers } from "styles/Container";
import { technologies, developers } from "data/data";
import { DevCard } from "components/DevCard/DevCard";
import kenzieLogo from "../../assets/kenzie-logo.svg";

import "animate.css";

export function AboutDev () {
    const [about, setAbout] = useState(false);

    return (
        <>
            <SeeMore>
                <span>Sobre o Desenvolvimento - <button onClick={() => { setAbout(!about) }}>{about ? "Esconder" : "Ver"} mensagem dos desenvolvedores</button></span>
            </SeeMore>
            {
                about &&
                <StyledAboutDev className={"animate__animated animate__fadeIn"}>
                    <StyledContainerPlayers>
                        <div className="about-text">
                            <h2>Sobre o desenvolvimento</h2>
                            <p>Somos um time de estudantes de desenvolvimento web e criamos o website perfeito para quem procura um time para jogar League of Legends. Nossa plataforma é fácil de usar e ajuda você a encontrar jogadores comprometidos e dedicados que querem jogar e crescer juntos. Não importa se você é um jogador iniciante ou experiente.</p>
                            <p>Durante o nosso projeto, não só aprendemos habilidades valiosas de desenvolvimento web, mas também adquirimos importantes habilidades sociais. Trabalhando em equipe, aprendemos a comunicar-nos de maneira eficaz, a colaborar e a resolver problemas de maneira criativa. Estamos orgulhosos do que conseguimos realizar juntos e estamos ansiosos para aplicar essas habilidades em projetos futuros.</p>
                        </div>
                        <div className="used-technologies">
                            <h3>Projeto realizado usando as seguintes ferramentas:</h3>
                            <ul>
                                {
                                    technologies.map((tech) => {
                                        return (
                                            <li key={tech.id}>
                                                <img src={tech.img} alt={tech.name} />
                                                <span>{tech.name}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="project-devs">
                            <h3>Desenvolvedores do Projeto:</h3>
                            <ul>
                                {
                                    developers.map((dev) => {
                                        return (
                                            <DevCard dev={dev} key={dev.id}/>
                                        )
                                    })
                                }
                            </ul>
                            <div>
                                <p>Projeto realizado por estudantes da <span>Kenzie Academy Brasil</span></p>
                                <img src={kenzieLogo}/>
                            </div>
                        </div>
                    </StyledContainerPlayers>
                    <aside>
                        <img src="https://camo.githubusercontent.com/fc59303e8d7b2854316f6e51f024184132a25b7377164a6a7a5c80dd83bf6230/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f30392f63362f32392f30396336323930336265656261333336646339646137366562356339613130372e676966" alt="coding" />
                    </aside>
                </StyledAboutDev>
            }
        </>
    )
}
