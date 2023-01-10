import styled from "styled-components";

export const SeeMore = styled.div`
    padding: 35px 20px;
    background-color: var(--color-grey-1);
    width: 100vw;

    display: flex;
    justify-content: center;
    
    span{
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        line-height: 150%;
        color: var(--color-grey-3);

        button{
            background-color: transparent;
            border: none;

            color: var(--color-brand-1);
        }

        button:hover{
            text-decoration: underline;
        }
    }
`

export const StyledAboutDev = styled.section`
    background-color: var(--color-black-2);
    width: 100vw;

    position: relative;
    display: flex;
    align-items: flex-start;

    h2{
       font-size: 32px;
       color: var(--color-brand-1);
       font-weight: 700;
    }

    h3{
        font-size: 16px;
        color: var(--color-brand-1);
        margin-bottom: 25px;
    }

    >div{
        max-width: 870px;
        margin: 50px auto;
    }

    .about-text{
        display: flex;
        flex-direction: column;
        gap: 30px;

        p{
            font-size: 16px;
            color: var(--color-grey-3);
            line-height: 150%;
        }
    }

    .used-technologies{

        margin-top: 90px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        
        ul{
            max-width: 600px;
            display: flex;
            gap: 80px;
            flex-wrap: wrap;
            align-items: center;
        }

        li{
            width:  70px;
            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        li img{
            width: 70px;
        }

        li span{
            display: none;
            white-space: nowrap;
            color: var(--color-black-1);

            transition: 0.3s ease;
            animation: displayTechName 0.3s ease;
        }

        li:hover span{
            top: -25px;
            display: flex;
            position: absolute;
            padding: 10px 15px;
            background-color: var(--color-brand-1);
        }
    }

    .project-devs{
        margin-top: 90px;

        ul{
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-between;
        }

        >div{
            display: flex;
            align-items: center;
            gap: 10px;

            margin-top: 30px;
        }

        >div > p{
            font-size: 14px;
            line-height: 150%;
            font-weight: 500;
            color: var(--color-grey-3);
        }

        >div >p span{
            color: var(--color-white);
        }
    }

    aside{
        display: none;

        position: sticky;
        top: 0;
        width: 350px;
        height: 100vh;
        right: 0;
        overflow: hidden;


        img{
            height: 100%;
        }
    }

    @media (min-width: 700px) {
        aside{
            display: flex;
            justify-content: center;
        }
    }


    @keyframes displayTechName {
        0%{
            opacity: 0;
            transform: translateY(20px);
        }100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
`
