import React from "react";
import logo from "../../assets/logo.svg";
import { StyledForm } from "./StyledForm";
import { Link } from "react-router-dom";

interface iFormProps {
  children: React.ReactNode;
  left?: boolean;
  leftImg?: boolean;
  formTitle?: string;
  callback: () => void;
}

export function Form ({ children, formTitle, leftImg, left, callback }: iFormProps) {
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
      <Link to="/" className={left ? "left-home" : ""} >← Voltar para home</Link>
    </StyledForm>
  );
}
