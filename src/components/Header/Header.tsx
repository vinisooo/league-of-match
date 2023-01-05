import logo from "../../assets/logo.svg";
import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";

export function Header() {
  
  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />

      <button>
        <div></div>
        <div></div>
      </button>

      <div>
        <Link to={"/"}>Home</Link>
        <Link className="emphasis" to={"/"}>Dashboard</Link>
        <Link to={"/"}>Meu Perfil</Link>
        <Link to={"/"}>Sair</Link>
      </div>
    </StyledHeader>
  );
}
