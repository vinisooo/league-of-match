import { UserCard } from "components/UserCard/UserCard";
import { Header } from "components/Header/Header";
import { UserContext } from "contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { StyledContainerPlayers } from "styles/Container";
import { Footer } from "components/Footer/Footer";
import { StyledMain } from "./StyledPlayers";
import { InputBox } from "components/InputBox/InputBox";
import { PlayerCard } from "components/PlayerCard/PlayerCard";
import { Outlet } from "react-router-dom";

export function Players() {
  const { players, getAllPlayers } = useContext(UserContext);

  useEffect(() => {
    function handleGetAllPlayers() {
      getAllPlayers();
    }
    handleGetAllPlayers();
  }, []);
  return (
    <>
      <Header />  
      <StyledContainerPlayers>

        <StyledMain>
          <section>
            <InputBox type="text" label="Pesquisar usuário" />
            <select name="" id="">
              <option value="">Rota</option>
              <option value="top">Top</option>
              <option value="jungle">Jungle</option>
              <option value="mid">Mid</option>
              <option value="adc">Adc</option>
              <option value="suport">Suport</option>
            </select>
            <select name="" id="">
              <option value="">Elo</option>
              <option value="ferro">Ferro</option>
              <option value="bronze">Bronze</option>
              <option value="prata">Prata</option>
              <option value="ouro">Ouro</option>
              <option value="platina">Platina</option>
              <option value="diamante">Diamante</option>
              <option value="mestre">Mestre</option>
              <option value="graomestre">Grão-Mestre</option>
              <option value="desafiante">Desafiante</option>
            </select>
          </section>

          <div>
            {players.map((user) => (
              <PlayerCard key={user.id} user={user} />
            ))}
          </div>
        </StyledMain>
      </StyledContainerPlayers>

      <Outlet/>
      <Footer />
    </>
  );
}
