import styled from "styled-components";

export const StyledDevCard = styled.li`

    display:flex;
    gap: 10px;
    align-items: center;

    width: 100%;

    @media (min-width: 500px) {
        width: 48%;
    }

    figure{
        width: 62px;
        height: 62px;
        border-radius: 50%;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid var(--color-black-2);
        transition: 0.3s ease;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.3s ease;
        }
    }

    figure:hover{
        border: 3px solid var(--color-brand-1);
        box-shadow:  0 0 10px 0 var(--color-brand-1);

        img{
            transform: scale(1.1);
        }
    }

    >div{
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: flex-start;
        
        h4{
            color: var(--color-brand-1);
            font-size: 16px;
        }

        span{
            font-size: 11px;
            color: var(--color-grey-3);
        }

        span{
            display: flex;
            gap: 5px;
            align-items: center;
        }

        span a{
            color: var(--color-brand-2);
            transition: 0.3s ease;
            text-decoration: none;
        }

        span a:hover{
            color: var(--color-brand-1);
            text-decoration: underline;
        }
    }
`
