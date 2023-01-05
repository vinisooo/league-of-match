import { Header } from "components/Header/Header"
import { UserContext } from "contexts/UserContext"
import { useContext } from "react"
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { StyledContainerPlayers } from "styles/Container";

export function Players () {
    const {players} = useContext(UserContext)


    return (
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
                <ul>
                    {players.map((elem)=>(
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
            <footer>
                <div>
                    <div>
                        <img src={logo} alt="Logo" />
                        <p>Feito com ❤️ por alunos da Kenzie Academy Brasil</p>
                    </div>
                    <div>
                        <a target="_blank" href="">Gabriel Galvao Pavao - PO</a>
                        <a target="_blank" href="https://www.linkedin.com/in/bernardo-guimaraes-59aa6320a/">Bernardo Guimaraes Oliveira Nogueira - SM</a>
                        <a target="_blank" href="https://www.linkedin.com/in/vin%C3%ADcius-lira-a6294b244/">Carlos Vinícius Lira Moreira - QA</a>
                        <a target="_blank" href="https://www.linkedin.com/in/typhonn003/">Diego Lima - QA</a>
                        <a target="_blank" href="https://www.linkedin.com/in/mauibuarque/">Maui Andrade Buarque - QA</a>
                        <a target="_blank" href="">Kaique Amorim Vasconcelos Da Silva - QA</a>
                    </div>
                </div>
            </footer>
        </StyledContainerPlayers>
    )
}