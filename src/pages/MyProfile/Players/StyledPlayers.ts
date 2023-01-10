import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 1rem;

  margin-top: 120px;

  section {
    display: flex;
    gap: 0.625rem;
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

  >ul{
    margin-top: 50px;
    display: grid;
    grid-gap: 130px;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit,300px);
  }

  @media (max-width: 700px) {
    >div{
      grid-gap: 30px;
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
