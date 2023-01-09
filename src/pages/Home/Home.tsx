import React from "react";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import logo from "../../assets/logo.svg";
import { DefaultBtn } from "styles/DefaultBtn";
import { StyledContainerPlayers } from "styles/Container";
import { StyledDiv } from "./StyledHome";

export function Home () {
  return (
    <StyledDiv>
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
              <DefaultBtn green>COMEÇAR</DefaultBtn>
            </div>
          </StyledContainerPlayers>
        </section>
      </main>

      <Footer />
    </StyledDiv>
  );
}
