import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 1rem;

  margin-top: 100px;

  section {
    display: flex;
    gap: 0.625rem;
  }

  section > div {
    display: flex;
    gap: 10px;
  }

  select {
    padding: 0 20px;

    height: 49px;

    background-color: transparent;
    border: 2px solid var(--color-grey-3);
    color: var(--color-grey-3);
    outline: none;
  }

  select:hover {
    border-color: var(--color-brand-2);
  }

  select:focus {
    border-color: var(--color-brand-1);
    animation: inputAnimation 2s infinite;
  }

  >ul {
    margin-top: 30px;
    width: 100%;

    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1200px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 920px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 740px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 760px) {
    section {
      display: flex;
      flex-direction: column;
    }

    section > div {      
      justify-content: space-between;
    }

    select {
      width: 50%;
    }

    ul {
      display: flex;

      overflow-x: auto;
    }
  }

  @keyframes inputAnimation {
    0% {
      box-shadow: 0 0 5px 0 var(--color-brand-1);
    }
    50% {
      box-shadow: 0 0 10px 0 var(--color-brand-1);
    }
    100% {
      box-shadow: 0 0 5px 0 var(--color-brand-1);
    }
  }
`
