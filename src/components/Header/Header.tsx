import logo from "assets/logo.svg";
import { StyledHeader } from "./StyledHeader";
import { NavList } from "./NavList/NavList";
import { MenuModal } from "./MenuModal/MenuModal";

export function Header() {
  
  return (
    <>
      <MenuModal/>
      
      <StyledHeader>
        <img src={logo} alt="Logo do Site" />

        <button>
          <span></span>
          <span></span>
        </button>

        <NavList/>
      </StyledHeader>
    </>
    
  );
}
