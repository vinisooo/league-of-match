import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { StyledForm } from "./StyledForm";
import { Link } from "react-router-dom";
import { UserContext } from "contexts/UserContext";

interface iFormProps {
  children: React.ReactNode;
  left?: boolean;
  leftImg?: boolean;
  formTitle?: string;
  callback: () => void;
}

export function Form ({ children, formTitle, left, leftImg, callback }: iFormProps) {
  const { previousPage } = useContext(UserContext)
  return (
    <StyledForm noValidate onSubmit={callback}>
      <img
        className={leftImg ? "align-img-left" : ""}
        src={logo}
        alt="league of match"
      />
      <div>
        <header className={left ? "align-title-left" : ""}>
          <h1>{formTitle}</h1>
        </header>
        {children}
      </div>
      <Link to={previousPage} className={left ? "left-home" : ""} >← Voltar para {previousPage === "/players" ? "Players" : "Home"}</Link>
    </StyledForm>
  );
}
