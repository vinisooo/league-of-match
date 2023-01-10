import { Header } from "components/Header/Header";
import { UserContext } from "contexts/UserContext";
import React, { useContext, useEffect } from "react";
import { StyledContainerPlayers } from "styles/Container";
import { Footer } from "components/Footer/Footer";
import { StyledMain } from "./StyledPlayers";
import { InputBox } from "components/InputBox/InputBox";
import { PlayerCard } from "components/PlayerCard/PlayerCard";
import { Outlet } from "react-router-dom";

export function Players () {
  const { players, getAllPlayers } = useContext(UserContext);

  const filteredPlayersByMain = players.filter(player => player.main)

  useEffect(() => {
    function handleGetAllPlayers () {
      getAllPlayers();
    }
    handleGetAllPlayers();
  }, []);
  return (
    <>
      <Header />
      <StyledContainerPlayers className="animate__animated animate__fadeIn">

        <StyledMain>
          <section>
            <InputBox type="text" label="Pesquisar usuário" />
            <div>
              <select>
                <option value="">Rota</option>
                <option value={"toplane"}>Topo</option>
                <option value={"jungle"}>Selva</option>
                <option value={"midlane"}>Meio</option>
                <option value={"adc"}>Atirador</option>
                <option value={"suport"}>Suporte</option>
              </select>
              <select>
                <option value="">Elo</option>
                <option value={"ferro"}>Ferro</option>
                <option value={"bronze"}>Bronze</option>
                <option value={"prata"}>Prata</option>
                <option value={"ouro"}>Ouro</option>
                <option value={"platina"}>Platina</option>
                <option value={"diamante"}>Diamante</option>
                <option value={"mestre"}>Mestre</option>
                <option value={"grão-mestre"}>Grão-Mestre</option>
                <option value={"desafiante"}>Desafiante</option>
              </select>
            </div>
          </section>

          <ul>
            {filteredPlayersByMain.map((user) => (
              <PlayerCard key={user.id} user={user} />
            ))}
          </ul>
        </StyledMain>
      </StyledContainerPlayers>

      <Outlet/>
      <Footer />
    </>
  );
}
