import { Link, useLocation } from "react-router-dom";
import { StyledNavList } from "./StyledNavList";

export function NavList () {
    const location = useLocation()
    console.log(location);
    
    
    return (
        <StyledNavList>
            <ul>
                <li>
                    <Link to={"/"} className={location.pathname === "/" ? "emphasis" : ""}>Home</Link>
                </li>

                <li>
                    <Link to={"/players"} className={location.pathname === "/players" ? "emphasis" : ""}>Players</Link>
                </li>

                <li>
                    <Link to={"/myprofile"} className={location.pathname === "/myprofile" ? "emphasis" : ""}>Meu Perfil</Link>
                </li>

                <li>
                    <Link to={"/login"}>Sair</Link>
                </li>
            </ul>
        </StyledNavList>
    )
}