import styled from "styled-components";

interface AsideProps {
  url: string;
}

export const Container = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  main {
    width: 50%;
    padding-right: 2rem;
    margin-top: 100px;
  }
`;

export const Aside = styled.aside<AsideProps>`
  width: 40%;
  height: 100vh;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  .fade {
    position: absolute;
    bottom: 0;
    height: 60vh;
    width: 100%;
    background-color: red;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 87%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const WrapperProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 4;

  div {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: var(--color-black-1);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: calc(5rem - 2px);
      height: calc(5rem - 2px);
      border-radius: 50%;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-brand-1);
    padding: 0.5rem 0;
  }
`;

export const Input = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-grey-3);
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 90%;

    label {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--color-grey-3);
    }

    input {
      width: 100%;
      background-color: transparent;
      padding: 0.5rem;
      outline: none;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-white);

      &::placeholder {
        color: var(--color-white);
      }
    }
  }

  button {
    padding: 0.5rem;
    background-color: transparent;
  }
`;

export const SectionChooseIcons = styled.section`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--color-grey-3);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--color-grey-3);
    }
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const SectionMain = styled.section`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--color-grey-3);

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    p {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--color-grey-3);
    }

    form {
      width: 11.5rem;
      border: 1px solid var(--color-grey-3);

      display: flex;

      input {
        width: 100%;
        background-color: transparent;
        padding: 0.5rem;
        outline: none;
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--color-grey-3);

        &::placeholder {
          color: var(--color-grey-3);
        }
      }

      button {
        padding: 0.4rem;
        background-color: transparent;
      }
    }
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: scroll;
    overflow-x: hidden;
    padding: 22px 0;
    gap: 1rem;
  }
`;

export const ButtonIcon = styled.li`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--color-brand-2);
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  button {
    width: calc(2.5rem - 2px);
    height: calc(2.5rem - 2px);
    border-radius: 50%;
    background: none;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    span {
      position: absolute;
      color: var(--color-grey-2);
      background-color: var(--color-brand-1);
      top: -10px;
      padding: 4px;
      left: 0;
      display: none;
      z-index: 5;
      white-space: nowrap;
    }

    * {
      pointer-events: none;
    }
  }

  button:hover {
    box-shadow: 0 0 10px 2px var(--color-brand-1);

    span {
      display: flex;
    }
  }
`;
