import styled from "styled-components";

export const StyledForm = styled.div`

    width: 100vw;
    height: 100vh;

    padding: 20px;

    background-color: var(--color-grey-1);

    display: flex;
    align-items: center;

    position: relative;
    
    
    @media (min-width: 700px) {
        width: 50%;
        padding: 55px;
    }
    @media (min-width: 1000px) {
        width: 35%;
    }

    >img{
        width: 135px;
        position: absolute;
        top: 55px;
        right: 55px;
    }

    .align-img-left{
        left: 55px;
    }

    >div{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 27px;

        >form{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 27px;
        }
    }

    h1{
        width: 100%;
        text-align: right;
    }

    .align-title-left{
        text-align: left;
    }

    h1{
        font-size: 24px;
        font-weight: 700;
        color: var(--color-brand-1);
    }

    >a{
        position: absolute;
        bottom: 40px;
        right: 60px;

        color: var(--color-grey-3);

        transition: 0.3s ease;
    }

    @media (max-width:500px){
        a{
            bottom: 15px;
            right: 15px;
        }
    }

    >a:hover{
        filter: brightness(1.5);
    }

    .left-home{
        left: 60px;
    }

    @media (max-width: 500px) {
        .left-home{
            left: 15px;
        }
    }

`
