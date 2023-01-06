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
    }
    
    a{
        color: var(--color-white);
        font-weight: 300;
        font-size: 18px;
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
            border-bottom: 1px solid var(--color-brand-1);
        }
    }
`