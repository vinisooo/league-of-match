import { NavList } from "../NavList/NavList";
import { StyledMenuModal } from "./StyledMenuModal";
import logo from "assets/logo.svg";

import "animate.css"

export function MenuModal () {

    return (
        <StyledMenuModal>
            <section className="animate__animated animate__fadeInRight">
                <NavList/>
                
                <img src={logo} alt="" />
            </section>
        </StyledMenuModal>
    )
}