import React from "react";
import { StyledFormBG } from "./StyledFormBG";
import loginBG from "../../assets/login-bg.png";
import registerBG from "../../assets/register-bg.png";

interface iFormBGProps{
    imageBG?: "login" | "register";
}

export function FormBG({imageBG}:iFormBGProps){

    return(
        <StyledFormBG>
            <img src={imageBG === "login"? loginBG : registerBG} />
        </StyledFormBG>
    )
    
}