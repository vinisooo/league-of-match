import { Header } from "components/Header/Header"
import { UserContext } from "contexts/UserContext"
import { useContext } from "react"

export function Players () {
    const {players} = useContext(UserContext)


    return (
        <div>
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
        </div>
    )
}