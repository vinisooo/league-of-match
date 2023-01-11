import styled from "styled-components";

export const StyledOnlinePlayers = styled.section`

    width: 100%;

    padding: 40px;

    overflow-x: hidden;

    >div{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    >div div{
        width: 100%;
        max-width: 350px;

        text-align: end;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media (min-width: 800px) {
        >div{
            flex-direction: row;
        }
    }

    ul{
        display: flex;
        align-items: center;
        position: relative;
        width: 450px;

        max-width: 100%;
    }

    ul::after{
        position: absolute;
        right: 0;
        content: "";
        height: 100%;
        width: 80%;
        
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(22,219,101,0.5587907037815126) 38%, rgba(22,219,101,1) 88%);

        pointer-events: none;
    }

    @media (max-width: 400px) {
        ul::after{
            right: -100px;
        }
    }

    h2{
        font-size: 32px;
        color: var(--color-black-1);
        font-weight: 700;
    }

    .players-link{
        text-align: center;
        width: 100%;
        padding: 15px;
        
        color: var(--color-black-1);
        border: 3px solid var(--color-black-1);

        transition: 0.3s ease;
    }

    .players-link:hover{
        background-color: var(--color-black-1);
        color: var(--color-brand-1);
    }

    li{
        position: relative;

        figure{
            height: 200px;
            width: 200px;
            border-radius: 50%;
            overflow: hidden;

            border: 7px solid var(--color-brand-1);
        }

        figure img{
            width: 100%;
            height: 100%;
        }

        figure:hover ~ span{
            display: inline-block;
        }

        span{
            padding: 15px;
            position: absolute;
            bottom: 0;
            text-align: center;
            background-color: var(--color-white);

            color: var(--color-black-1);
            font-weight: 600;
            left: 0;
            right: 0;
            z-index: 3;

            display: none;

            animation: displayNickName 0.3s ease;
        }

        .user-1{
            transform: translateX(-80px);
        }

        .user-2{
            transform: translateX(-160px);
        }

        .user-1 ~ span{
            transform: translateX(-80px);
        }

        .user-2 ~ span{
            transform: translateX(-160px);
        }
    }

    @media (max-width: 600px) {
        li figure{
            width: 150px;
            height: 150px;
        }
    }

    @keyframes displayNickName {
        0%{
            opacity: 0;
        }100%{
            opacity: 1;
        }
    }

    background-color: var(--color-brand-1);
`
