import styled, { css } from "styled-components";
import { iHeaderProps } from "./Header";

export const StyledHeader = styled.header<iHeaderProps>`
    width: 100%;
    height: 70px;
    margin-bottom: 50px;

    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    >div >nav{
        display: none;
    }

    position: fixed;

    background-color: var(--color-grey-1);
    top: 0;
    z-index: 4;

    ${({ isMyProfile }) => {
        if (isMyProfile) {
            return css`
                margin-bottom: 0;
            `
        }
    }}

    img{
        height: 35px;
    }

    > nav {
        display: none;
    }

    button{
        background-color: transparent;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: relative;
        z-index: 10;
    }

    button span{
        background-color: white;
        height: 3px;
        width: 40px;
        transition: 0.4s ease;
    }
    
    .close-modal-icon span{
        transform: rotate(45deg) translateY(10px);
    }

    .close-modal-icon span + span{
        transform: rotate(-45deg) translateY(-8px);
    }


    @media (min-width: 700px){
        height: 80px;

        img{
            height: 40px;
        }

        button{
            display: none;
        }
        
        nav {
            display: unset;
        }

        >div >nav{
            display: flex;
        }
    }
`
