import { UserCard } from "components/UserCard/UserCard";
import { Header } from "components/Header/Header";
import { UserContext } from "contexts/UserContext";
import { useContext, useState } from "react";
import { StyledContainerPlayers } from "styles/Container";
import { Footer } from "components/Footer/Footer";

export function Players() {

  const { players } = useContext(UserContext);

  console.log(players)
  return (
    <>
      <StyledContainerPlayers>
        <Header/>
        
        <section>
          <input type="text" placeholder="Pesquisar usuário" />
          <div>
            <select>
              <option value="">Rota</option>
            </select>
            <select>
              <option value="">Elo</option>
            </select>
          </div>
        </section>

        <main>
          <div>
            {players.map(user => <UserCard user={user} />)}
          </div>
        </main>
      </StyledContainerPlayers>

      <Footer/>
    </>
  );
}
