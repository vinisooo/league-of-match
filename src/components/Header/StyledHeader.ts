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


    button{
        background-color: transparent;
        border: none;

        display: flex;
        flex-direction: column;

        align-items: center;
        gap: 10px;
    }

    button div{
        height: 3px;
        width: 40px;
        background-color: white;
        transition: 0.3s ease;
    }
    
    button:hover div{
        transform: rotate(45deg) translateY(10px);
    }
    :hover div + div{
        transform: rotate(-45deg) translateY(10px);
    }

    > div{
        display: none;
    }


    @media (min-width: 700px){
        height: 80px;

        
        img{
            height: 40px;
        }

        button{
            display: none;
        }

        div{
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