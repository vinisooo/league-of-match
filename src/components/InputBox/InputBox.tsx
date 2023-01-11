import React from "react";
import { StyledInputBox } from "./StyledInputBox";

interface iInputBoxProps {
    type?: string;
    label: string;
    errors?: any;
    register?: object;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function InputBox ({ type, label, errors, register, value, onChange }: iInputBoxProps) {
    return (
        <StyledInputBox>
            <input {...register} type={type} required value={value} onChange={onChange}/>
            <label htmlFor="">{label}</label>
            {errors && <span>{errors}</span>}
        </StyledInputBox>
    )
}
