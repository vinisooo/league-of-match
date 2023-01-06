import { Link } from "react-router-dom";
import { StyledMenuModal } from "./StyledMenuModal";

export function MenuModal () {

    return (
        <StyledMenuModal>
            <section>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/players"}>Players</Link>
                        </li>
                        <li>
                            <Link to={"/myprofile"}>Meu Perfil</Link>
                        </li>
                        <li>
                            <Link to={"/login"}>Sair</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </StyledMenuModal>
    )
}