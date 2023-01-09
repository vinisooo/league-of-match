import styled from "styled-components";

export const StyledNavList = styled.nav`
    width: 100%;
    
    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        
    }

    li {
        width: 100%;
        padding-bottom: 30px;
        border-bottom: 2px solid var(--color-grey-1);
        text-align: end;
        position: relative;
    }

    li::after{
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 2px;
        width: 0;
        background-color: var(--color-brand-1);
        transition: 0.3s ease;
    }

    li a:hover{
        color: var(--color-brand-1);
    }
    
    li:hover:after{
        width: 100%;
        box-shadow: 0 0 15px 1px var(--color-brand-1);
    }

    a{
        color: var(--color-white);
        font-weight: 300;
        font-size: 18px;
        transition: 0.3s ease;
    }
    
    .emphasis{
        color: var(--color-brand-1);
    }


    @media (min-width: 700px){
        width: auto;
        
        ul{
            display: flex;
            flex-direction: row;
            gap: 50px;
            
        }

        li {
            width: auto;
            padding-bottom: 0;
            border: none;
        }

        a{
            font-size: 16px;
        }

        .emphasis{
            color: var(--color-brand-1);
        }

        .emphasis::after{
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 2px;
        width: 100%;
        background-color: var(--color-brand-1);
        transition: 0.3s ease;
    }
    }
`
