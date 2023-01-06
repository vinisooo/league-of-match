import { NavList } from "../NavList/NavList";
import { StyledMenuModal } from "./StyledMenuModal";
import logo from "assets/logo.svg";

export function MenuModal () {

    return (
        <StyledMenuModal>
            <section>
                <NavList/>
                
                <img src={logo} alt="" />
            </section>
        </StyledMenuModal>
    )
}