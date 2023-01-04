import { StyledInputBox } from "./StyledInputBox";

interface iInputBoxProps{
    type?:string;
    label: string;
    errors?: string;
    register?: object;
}

export function InputBox({type, label, errors, register}:iInputBoxProps){

    return(
            <StyledInputBox>
                <input type={type} required/>
                <label htmlFor="">{label}</label>
                {errors && <span>{errors}</span>}
            </StyledInputBox>
    )

}