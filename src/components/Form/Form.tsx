import React from "react";
import logo from "../../assets/logo.svg";
import { StyledForm } from "./StyledForm";

interface iFormProps {
  children: React.ReactNode;
  left?: boolean;
  formTitle?: string;
  callback: () => void;
}

export function Form ({ children, formTitle, left, callback }: iFormProps) {
  return (
    <StyledForm noValidate onSubmit={callback}>
      <img
        className={left ? "align-img-left" : ""}
        src={logo}
        alt="league of match"
      />
      <div>
        <header className={left ? "align-title-left" : ""}>
          <h1>{formTitle}</h1>
        </header>
        {children}
      </div>
    </StyledForm>
  );
}
