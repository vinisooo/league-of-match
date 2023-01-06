import logo from "assets/logo.svg";
import { StyledHeader } from "./StyledHeader";
import { NavList } from "./NavList/NavList";
import { MenuModal } from "./MenuModal/MenuModal";
import { useState } from "react";



export function Header() {
  
  const [mobMenu, setMobMenu] = useState(false);

  return (
    <>
      {mobMenu && <MenuModal/>}
      <StyledHeader>
        <img src={logo} alt="Logo do Site" />

        <button onClick={()=>setMobMenu(!mobMenu)} className={mobMenu ? "close-modal-icon": ""}>
          <span></span>
          <span></span>
        </button>

        <NavList/>
      </StyledHeader>
    </>
    
  );
}
