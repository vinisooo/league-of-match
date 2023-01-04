import logo from "../../assets/logo.svg";
import { StyledForm } from "./StyledForm";

interface iFormProps{
    children: React.ReactNode;
    left?: boolean;
    formTitle?: string;
}

export function Form({children,formTitle, left}:iFormProps){

    return(
        <StyledForm>
            <img className={left ? "align-img-left": ""} src={logo} alt="league of match" />
            <div>
                <header className={left ? "align-title-left": ""}>
                    <h1>{formTitle}</h1>
                </header>
                {children}
            </div>
        </StyledForm>
    )

}