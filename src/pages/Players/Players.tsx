import { Header } from "components/Header/Header";
import { UserContext } from "contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { StyledContainerPlayers } from "styles/Container";
import { Footer } from "components/Footer/Footer";
import { StyledMain } from "./StyledPlayers";
import { InputBox } from "components/InputBox/InputBox";
import { PlayerCard } from "components/PlayerCard/PlayerCard";
import { Outlet } from "react-router-dom";

export function Players () {
  const { players, getAllPlayers } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const [selectValueLane, setSelectValueLane] = useState("");
  const [selectValueElo, setSelectValueElo] = useState("");

  const filteredPlayersByMain = players.filter(player => player.main)
  const filteredByName = filteredPlayersByMain.filter(({ username, elo, route }) => {
    const byUserName = username.toLowerCase().includes(inputValue.toLowerCase())
    const byRoute = route.includes(selectValueLane)
    const byElo = elo.includes(selectValueElo)
    return byUserName && byRoute && byElo
  })
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

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
            <InputBox value={inputValue} onChange={(e) => { changeValue(e); }} type="text" label="Pesquisar usuário" />
            <div>
              <select value={selectValueLane} onChange={(e) => { setSelectValueLane(e.target.value); }}>
                <option value="">Rota</option>
                <option value={"Toplane"}>Topo</option>
                <option value={"Jungle"}>Selva</option>
                <option value={"Midlane"}>Meio</option>
                <option value={"Adc"}>Atirador</option>
                <option value={"Support"}>Suporte</option>
              </select>
              <select value={selectValueElo} onChange={(e) => { setSelectValueElo(e.target.value); }}>
                <option value="">Elo</option>
                <option value={"Ferro"}>Ferro</option>
                <option value={"Bronze"}>Bronze</option>
                <option value={"Prata"}>Prata</option>
                <option value={"Ouro"}>Ouro</option>
                <option value={"Platina"}>Platina</option>
                <option value={"Diamante"}>Diamante</option>
                <option value={"Mestre"}>Mestre</option>
                <option value={"Grão-Mestre"}>Grão-Mestre</option>
                <option value={"Desafiante"}>Desafiante</option>
              </select>
            </div>
          </section>
          {
            filteredByName.length === 0 ? <h2>Nenhum player foi encontrado!</h2> : <ul>
            {filteredByName.map((user) => (
              <PlayerCard key={user.id} user={user} />
            ))}
          </ul>
          }
        </StyledMain>
      </StyledContainerPlayers>

      <Outlet/>
      <Footer />
    </>
  );
}
