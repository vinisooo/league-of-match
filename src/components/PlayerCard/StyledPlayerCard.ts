import styled from "styled-components";

export const StyledCard = styled.div`
  box-sizing: border-box;

  width: 320px;
  height: 460px;

  background-color: var(--color-black-2);

  position: relative;

  border: 2px solid var(--color-brand-4);

  transition: 0.5s;

  .main_bg {
    height: 30%;

    overflow: hidden;
  }

  .main_bg img {
    width: 100%;
    transition: 0.5s;
  }

  .main_bgshadow {
    height: 30%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    box-shadow: inset 0px 0px 14px 16px var(--color-black-2);
  }

  .user_icon {
    width: 120px;
    height: 120px;

    position: absolute;
    top: 75px;
    left: 100px;

    overflow: hidden;
  }

  .user_icon img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
    border: 2px solid var(--color-brand-1);
  }

  .user_info {
    padding: 70px 30px 30px;

    height: 70%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info_persona {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .info_bio {
    height: 40%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info_btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
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

  a {
    color: var(--color-grey-3);
    font-size: 12px;
  }

  a:hover {
    text-decoration: underline;
  }

  :hover {
    border: 2px solid var(--color-brand-1);
    box-shadow: 0px 0px 5px 1px var(--color-brand-1);
  }

  :hover .main_bg img {
    scale: 1.1;
  }
`;
