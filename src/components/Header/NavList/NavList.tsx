import { Link, useLocation, useNavigate } from "react-router-dom";
import { StyledNavList } from "./StyledNavList";

export function NavList () {
    const location = useLocation();

    const navigate = useNavigate();

    const loggedUser = localStorage.getItem("@league-of-match: logged-user");

    function logOut(){
        localStorage.removeItem("@league-of-match: id");
        localStorage.removeItem("@league-of-match: token");
        localStorage.removeItem("@league-of-match: logged-user");
    }

    return (
        <StyledNavList>
            <ul>
                <li>
                    <Link to={"/"} className={location.pathname === "/" ? "emphasis" : ""}>Home</Link>
                </li>

                <li>
                    <Link to={"/players"} className={location.pathname === "/players" ? "emphasis" : ""}>Players</Link>
                </li>
                {
                    loggedUser?
                    <>
                        <li>
                            <Link to={"/myprofile"} className={location.pathname === "/myprofile" ? "emphasis" : ""}>Meu Perfil</Link>
                        </li>

                        <li>
                            <Link to={"/login"} onClick={logOut}>Sair</Link>
                        </li>
                    </>
                    :
                    <>
                        <li>
                                <Link to={"/register"} className={location.pathname === "/register" ? "emphasis" : ""}>Registrar</Link>
                        </li>
                        <li>
                                <Link to={"/login"} className={location.pathname === "/login" ? "emphasis" : ""}>Logar</Link>
                        </li>
                    </>
                    
                }
            </ul>
        </StyledNavList>
    )
}