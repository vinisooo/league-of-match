import logo from "../../assets/logo.svg";
import { StyledHeaderDashBoard } from "./StyledHeader";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <StyledHeaderDashBoard>
      <img src={logo} alt="Logo" />
      <button>
        <div></div>
        <div></div>
      </button>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>DashBoard</Link>
        <Link to={"/"}>Meu Perfil</Link>
        <Link to={"/"}>Sair</Link>
      </div>
    </StyledHeaderDashBoard>
  );
}
