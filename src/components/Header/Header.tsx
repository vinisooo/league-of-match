import logo from "assets/logo.svg";
import { StyledHeader } from "./StyledHeader";
import { NavList } from "./NavList/NavList";
import { MenuModal } from "./MenuModal/MenuModal";
import { useState } from "react";

interface iHeaderProps{
  mobMenu: boolean;
  setMobMenu: any;
}

export function Header({mobMenu, setMobMenu}: iHeaderProps) {
  
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
