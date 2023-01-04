import { StyledInputBox } from "./StyledInputBox";

interface iInputBoxProps{
    type?:string;
    label: string;
    errors?: any;
    register?: object;
}

export function InputBox({type, label, errors, register}:iInputBoxProps){

    return(
            <StyledInputBox>
                <input {...register} type={type} required/>
                <label htmlFor="">{label}</label>
                {errors && <span>{errors}</span>}
            </StyledInputBox>
    )

}