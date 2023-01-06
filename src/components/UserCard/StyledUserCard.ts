import styled from "styled-components";

export const StyledCard = styled.div`
  box-sizing: border-box;

  display: flex;

  height: 240px;
  width: 580px;
  max-width: 100%;

  background-color: var(--color-black-2);

  position: relative;
  z-index: 0;

  border: 2px solid var(--color-brand-4);

  
  transition: 0.5s;

  .main_img {
    height: 100%;

    overflow: hidden;
  }

  .main_img img {
    height: 100%;

    transition: 0.5s;
  }

  .main_img img:hover {
    scale: 1.1;
  }

  .user_icon {
    width: 125px;
    height: 125px;

    position: absolute;
    top: 50px;
    left: 65px;
    border-radius: 50%;
    border: 3px solid var(--color-black-2);

    overflow: hidden;
  }

  .user_icon img {
    width: 100%;
    height: 100%;
  }

  .user_info {
    padding: 0 20px 0 80px;

    width: 446px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .info_persona {
    height: 20%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info_bio {
    height: 30%;

    display: flex;
    align-items: center;

    overflow: hidden;
  }

  .info_btns {

    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    color: var(--color-brand-1);
  }

  span {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-brand-2);
  }

  p {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-3);
  }

  :hover {
    border: 2px solid var(--color-brand-1);
    box-shadow: 0px 0px 5px 1px var(--color-brand-1);
  }
`;
