import { UserCard } from "components/UserCard/UserCard";
import { Header } from "components/Header/Header";
import { UserContext } from "contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StyledContainerPlayers } from "styles/Container";
import { Footer } from "components/Footer/Footer";

export function Players() {
  const { players } = useContext(UserContext);

  return (
    <>
      <StyledContainerPlayers>
        <Header />
        
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
          <ul>
            {players.map((elem) => (
              <li key={elem.id}>
                <h2>{elem.nickname}</h2>
                <h2>{elem.route}</h2>
                <h2>{elem.elo}</h2>
                <h2>Main {elem.main}</h2>
                <h2>{elem.bio}</h2>
              </li>
            ))}
          </ul>
        </main>
      </StyledContainerPlayers>    

      <Footer/>
    </>
  );
}
