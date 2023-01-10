import { UserContext } from "contexts/UserContext";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledNavList } from "./StyledNavList";

export function NavList () {
    const location = useLocation();
    const { setPreviousPage } = useContext(UserContext)

    const loggedUser = localStorage.getItem("@league-of-match: token");

    function logOut () {
        localStorage.removeItem("@league-of-match: id");
        localStorage.removeItem("@league-of-match: token");
    }

    function updatePreviousPage () {
        setPreviousPage(location.pathname)
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
                    loggedUser
                    ? <>
                        <li>
                            <Link to={"/myprofile"} className={location.pathname === "/myprofile" ? "emphasis" : ""}>Meu Perfil</Link>
                        </li>

                        <li>
                            <Link to={"/"} onClick={logOut}>Sair</Link>
                        </li>
                    </>
                    : <>
                        <li>
                            <Link to={"/register"} onClick={updatePreviousPage} className={location.pathname === "/register" ? "emphasis" : ""}>Registrar</Link>
                        </li>
                        <li>
                            <Link to={"/login"} onClick={updatePreviousPage} className={location.pathname === "/login" ? "emphasis" : ""}>Logar</Link>
                        </li>
                    </>
                }
            </ul>
        </StyledNavList>
    )
}
