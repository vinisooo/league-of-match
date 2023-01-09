import styled from "styled-components";

interface iStyledPlayerModalProps{
    mainSplashArt?: string
}

export const StyledPlayerModal = styled.div<iStyledPlayerModalProps>`

    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0;

    background-color: rgba(0,0,0,0.5);

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    >div{
        height: 50vh;
        width: 100vw;
        background-color: var(--color-black-1);
        position: relative;
    }

    >div::before{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        
        background-image: url(${props=> props.mainSplashArt});
        opacity: 0.2;
        pointer-events: none;
    }
    
    .image-bg{
        height: 100vh;
        width: 100vw;
    
    }

    .modal-container{
        margin: 0 auto;

        padding: 20px;
        width: 100vw;

        max-width: 1220px;

        header{
            display: flex;
            justify-content: center;
        }

        header figure{
            width: 140px;
            height: 140px;
            overflow: hidden;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;
            border: 4px solid var(--color-brand-1);

            position: absolute;
            top: -70px;

            transition: 0.3s ease;
        }

        @media (min-width: 700px) {
            width: 170px;
            height: 170px;
            top: -100px;
        }

        header figure img{
            width: 100%;
            height: 100%;
            object-fit: cover;

            transition: 0.3s ease;
        }

        header figure:hover{

            box-shadow: 0 0 32px 0 var(--color-brand-1);

            img{
                transform: scale(1.05);
            }
        }
        

        header a{
            color: var(--color-brand-1);
            position: absolute;
            right: 30px;
            background: transparent;
            font-size: 30px;
            opacity: .7;
            transition: 0.3s ease;
        }

        header a:hover{
            opacity: 1;
        }

        header h2{
        color: var(--color-brand-1);
        font-size: 30px;
        margin-top: 60px;

        font-weight: 700;
        }

        header .user-route{
            display: flex;
            align-items: center;
        }


        .user-info{

            position: relative;
            width: 400px;
            padding-right: 20px;
            margin: 0 auto;
            margin-top: 30px;

            display: flex;
            flex-direction: column;
            gap: 20px;

            overflow-y: auto;

            a{
                width: 100%;
                padding: 15px;
                text-align: center;

                text-decoration: none;
                color: var(--color-black-1);
                background-color: var(--color-brand-1);
                transition: 0.3s ease;
            }

            
            a:hover{
                filter: brightness(1.1);
            }

            h3{
                font-size: 16px;
                color: var(--color-white);
            }

            h3 span{
                font-weight: 600;
                color: var(--color-brand-1);
            }

            p{
                font-size: 16px;
                color: var(--color-white);
            }

            p span{
                color: var(--color-grey-3);
            }

            .user-route{
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .user-route img{
                width: 16px;
                height: 16px;
            }
        
        }
    }

    .animate__fadeInUp{
        animation-duration: 0.5s;
    }

`