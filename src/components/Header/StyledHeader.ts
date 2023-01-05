import styled  from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    img{
        width: 50%;
        height: 50%;
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

    div{
        a{
            display: none;
        }

    }


    @media (min-width: 700px){
        justify-content: space-around;
        padding: 50px;
        gap: 20rem;
        img{
            width: 15%;
            height: 15%;
        }
        button{
            display: none;
        }

        div{
            display: flex;
            gap: 20px;
            a{
                font-size: 30px;
                text-decoration: none;
                display: flex;
            }

        }

    }
`