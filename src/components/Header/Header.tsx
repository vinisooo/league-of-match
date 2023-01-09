import logo from "assets/logo.svg";
import { StyledHeader } from "./StyledHeader";
import { NavList } from "./NavList/NavList";
import { MenuModal } from "./MenuModal/MenuModal";
import React, { useState } from "react";
import disableScroll from 'disable-scroll';
import { StyledContainerPlayers } from "styles/Container";

export interface iHeaderProps {
  isMyProfile?: boolean;
}

export function Header ({ isMyProfile }: iHeaderProps) {
  const [mobMenu, setMobMenu] = useState(false);
  if (mobMenu) {
    disableScroll.on();
  } else {
    disableScroll.off();
  }

  return (
    <>
      {mobMenu && <MenuModal/>}
      <StyledHeader isMyProfile={isMyProfile}>
        <StyledContainerPlayers>

          <img src={logo} alt="Logo do Site" />

          <button onClick={() => { setMobMenu(!mobMenu) }} className={mobMenu ? "close-modal-icon" : ""}>
            <span></span>
            <span></span>
          </button>
          <NavList/>
        </StyledContainerPlayers>

      </StyledHeader>
    </>
  );
}
