import styled from "styled-components";
import {Link} from "react-router-dom";


interface iStyledButtonProps{
    green?: boolean
    size?: string;
    small?: boolean;
}

export const DefaultBtn = styled.button<iStyledButtonProps>`

    background-color: ${props=> props.green? "var(--color-brand-1)" :"var(--color-grey-2)"};
    color: ${props=> props.green? "var(--color-black-1)" :"var(--color-grey-3)"};

    width: ${props=> props.size? props.size : "50%"};
    height: ${props=> props.small ? "32px": "49px"};

    font-weight: 500;
    font-size: 14px;

    padding: 15px;

    white-space: nowrap;

    :hover{
        filter: brightness(1.1);
    }
    
`

export const DefaultLink = styled(Link)<iStyledButtonProps>`

    background-color: ${props=> props.green? "var(--color-brand-1)" :"var(--color-grey-2)"};

    color: ${props=> props.green? "var(--color-brand-1)" :"var(--color-grey-3)"};

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    font-weight: 500;
    font-size: 14px;

    padding: 15px;

    white-space: nowrap;

    width: ${props=> props.size? props.size : "50%"};

    height: ${props=> props.small ? "32px": "49px"};

    :hover{
        filter: brightness(1.1);
    }
`