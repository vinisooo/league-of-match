import styled from "styled-components";

export const StyledPurpose = styled.section`

    height: 80vh;
    background-color: var(--color-black-1);


    >div{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        gap: 30px;
        
        div{
            display: flex;
            flex-direction: column;
            gap: 30px;
            max-width: 500px;
        }
    }

    @media (min-width: 700px) {
        >div{
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    figure{
        width: 600px;
        max-width: 100%;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0.7;
        transition: 0.3s ease;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    figure:hover{
        opacity: 1;
    }

    h2{
        font-size: 24px;
        color: var(--color-brand-1);
        font-weight: 700;
    }

    p{
        font-size: 16px;
        color: var(--color-white);
        line-height: 150%;
    }

`
