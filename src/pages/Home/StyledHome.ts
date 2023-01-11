import styled from "styled-components";

export const StyledDiv = styled.div`

  overflow-x: hidden;

  main {
    margin-top: 80px;

    position: relative;
  }

  .home_bg {
    height: 550px;

    background-image: url("https://i.ibb.co/R9D5f4G/X9E3vE9.jpg");
    background-position: top center;
    background-size: cover;
  }

  .home_info {
    height: 550px;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    box-shadow: inset 0px -50px 70px 30px var(--color-black-1);
    background-color: rgba(0, 0, 0, 0.5);
  }

  .home_info div {
    width: 100%;
    height: 100%;
  }

  .home_info div > div {
    max-width: 450px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .home_info img {
    width: 200px;
  }

  .home_info h1 {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 150%;
  }

  .home_info h1 > span {

    color: var(--color-brand-1);
  }

  .home_info p {
    font-weight: 400;
    font-size: 0.875rem;

    line-height: 150%;

    color: var(--color-white);
  }

  .header-btn{
    background-color: transparent;
    text-align: center;
    padding: 15px;
    width: 275px;
    color: var(--color-brand-1);
    border: 2px solid var(--color-brand-1);
    
    transition: 0.3s ease;
  }

  .header-btn:hover{
    background-color: var(--color-brand-1);
    color: var(--color-black-1);
  }

  footer {
    margin: 0;
  }
`
