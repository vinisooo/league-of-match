import styled from "styled-components";

export const StyledMenuModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    background-color: rgba(19, 19, 22, 0.5);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 4;

    section {
        width: 70%;
        height: 100vh;
        padding: 120px 15px 45px 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        background-color: var(--color-black-2);

        animation-duration: 0.4s;
    }
    
    img {
        height: 35px;
    }
    
    @media (min-width: 700px) {
        display: none;
    }
`
