import styled from "styled-components";

export const StyledFormBG = styled.figure`

    display: none;
    
    @media (min-width: 700px) {
        height: 100vh;
        width: 70%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-black-2);
    }
    
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    
`