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
  const filteredByName = filteredPlayersByMain.filter(({ nickname, elo, route }) => {
    const byNickName = nickname.toLowerCase().includes(inputValue.toLowerCase())
    const byRoute = route.includes(selectValueLane)
    const byElo = elo.includes(selectValueElo)
    return byNickName && byRoute && byElo
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
                <option value={"toplane"}>Topo</option>
                <option value={"jungle"}>Selva</option>
                <option value={"midlane"}>Meio</option>
                <option value={"adc"}>Atirador</option>
                <option value={"suport"}>Suporte</option>
              </select>
              <select value={selectValueElo} onChange={(e) => { setSelectValueElo(e.target.value); }}>
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
