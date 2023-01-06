import { Link } from "react-router-dom";
import { StyledNavList } from "./StyledNavList";

export function NavList () {
    return (
        <StyledNavList>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link className="emphasis" to={"/players"}>Players</Link>
                </li>

                <li>
                    <Link to={"/myprofile"}>Meu Perfil</Link>
                </li>

                <li>
                    <Link to={"/login"}>Sair</Link>
                </li>
            </ul>
        </StyledNavList>
    )
}