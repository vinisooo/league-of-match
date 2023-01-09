import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin-top: 50px;
    padding: 35px 0;
    background-color: var(--color-black-1);
    font-size: 10px;
    font-weight: 600;
    color: var(--color-grey-3);
    
    div > div:first-child{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    
    div img {
        height: 30px;
    }
    
    div p{
        max-width: 170px;
        line-height: 17px;
        
        span {
            font-weight: 700;
        }
    }

    div ul{
        max-width: 320px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    a {
        display: block;
        text-align: end;
        color: var(--color-grey-3);
    }

    @media (min-width: 410px) {
        font-size: 12px;

        div p{
            max-width: 210px;
        }
        
        div img{
            height: 35px;
        }
    }
    
    @media (min-width: 540px) {
        padding: 50px 0;
        font-size: 14px;
    }
    
    @media (min-width: 700px) {
        div p{
            max-width: none;
        }

        div img{
            height: 40px;
        }
    }
`
