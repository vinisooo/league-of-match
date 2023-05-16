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
    <StyledForm>
      <img
        className={leftImg ? "align-img-left" : ""}
        src={logo}
        alt="league of match"
      />
      <div>
        <h1 className={left ? "align-title-left" : ""}>{formTitle}</h1>
        <form noValidate onSubmit={callback}>
          {children}
          <button type="submit" onClick={callback}></button>
        </form>
      </div>
      <Link to={previousPage} className={left ? "left-home" : ""} >← Voltar para {previousPage === "/players" ? "Players" : "Home"}</Link>
    </StyledForm>
  );
}