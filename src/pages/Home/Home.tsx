import React, { useContext, useEffect } from "react";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import logo from "../../assets/logo.svg";
import { StyledContainerPlayers } from "styles/Container";
import { StyledDiv } from "./StyledHome";
import { AboutDev } from "components/AboutDevelopment/AboutDev";
import { Purpose } from "components/Purpose/Purpose";
import { Link } from "react-router-dom";
import { OnlinePlayers } from "components/OnlinePlayersCTA/OnlinePlayers";

import { UserContext } from "contexts/UserContext";

export function Home () {
  const { getAllPlayers } = useContext(UserContext);

  useEffect(() => {
   getAllPlayers();
  }, []);

  return (
    <StyledDiv className="animate__animated animate__fadeIn">
      <Header />

      <main>
        <div className="home_bg"></div>
        <section className="home_info">
          <StyledContainerPlayers>
            <div>
              <img src={logo} alt="Imagem de logo" />
              <h1>
                Encontre o parceiro perfeito para a sua partida de{" "}
                <span>League of Legends</span>
              </h1>
              <p>
                Cadastre-se agora e comece sua jornada rumo à vitória com o time
                ideal ao seu lado.
              </p>
              <Link to="/register" className="header-btn">COMEÇAR</Link>
            </div>
          </StyledContainerPlayers>
        </section>
        <Purpose/>
        <OnlinePlayers/>
        <AboutDev/>
      </main>

      <Footer />
    </StyledDiv>
  );
}
