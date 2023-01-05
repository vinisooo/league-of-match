import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100vw;
  height: 100vh;

  padding: 55px;

  background-color: var(--color-grey-1);

  display: flex;
  align-items: center;

  position: relative;

  @media (min-width: 700px) {
    width: 50%;
  }
  @media (min-width: 1000px) {
    width: 35%;
  }

  > img {
    width: 135px;
    position: absolute;
    top: 55px;
    right: 55px;
  }

  .align-img-left {
    left: 55px;
  }

  .align-img-right {
    right: 55px;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 27px;
  }

  header {
    width: 100%;
    text-align: right;
  }

  .align-title-left {
    text-align: left;
  }

  .align-title-right {
    text-align: right;
  }

  header h1 {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-brand-1);
  }
`;
