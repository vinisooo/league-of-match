import styled  from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        height: 35px;
    }

    nav {
        display: none;
    }

    button{
        background-color: transparent;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    button span{
        background-color: white;
        height: 3px;
        width: 40px;
        transition: 0.4s ease;
    }
    
    button:hover span{
        transform: rotate(45deg) translateY(10px);
    }

    button:hover span + span{
        transform: rotate(-45deg) translateY(-8px);
    }


    @media (min-width: 700px){
        height: 80px;

        img{
            height: 40px;
        }

        button{
            display: none;
        }
        
        nav {
            display: unset;
        }
        
        ul{
            display: flex;
            gap: 50px;
            
            a{
                font-size: 16px;
                font-weight: 300;
                color: var(--color-white);
            }
    
            .emphasis{
                color: var(--color-brand-1);
                border-bottom: 1px solid var(--color-brand-1);
            }
        }
    }
`