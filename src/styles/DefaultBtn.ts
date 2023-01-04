import styled from "styled-components";
import {Link} from "react-router-dom";


interface iStyledButtonProps{
    green: boolean
    size: string;
    small: boolean;
}

export const DefaultBtn = styled.button<iStyledButtonProps>`

    background-color: ${props=> props.green? "var(--color-brand-1)" :"var(--color-grey-2)"};
    color: ${props=> props.green? "var(--color-black-1)" :"var(--color-grey-3)"};

    width: ${props=> props.size? props.size : "50%"};
    height: ${props=> props.small ? "32px": "49px"};
    
`

export const DefaultLink = styled(Link)<iStyledButtonProps>`

    background-color: ${props=> props.green? "var(--color-brand-1)" :"var(--color-grey-1)"};

    color: ${props=> props.green? "var(--color-brand-1)" :"var(--color-grey-1)"};

    width: ${props=> props.size? props.size : "50%"};

    height: ${props=> props.small ? "32px": "49px"};
`