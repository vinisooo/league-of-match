import styled from "styled-components";
export const RegisterPage = styled.div`
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;
export const DivSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  >div{
    display: flex;
    flex-direction: column;
    width: 49%;
  }

  select {
    height: 49px;
    width: 100%;
    background-color: transparent;
    border: 2px solid var(--color-grey-3);
    color: var(--color-grey-3);

    outline: none;
  }

  option {
    font-size: 16px;
    font-weight: 500;
    font-family: "Montserrat";
    color: var(--color-grey-3);
  }

  span{
    font-size: 12px;
    width: 100%;
    top: 10px;

    color: var(--color-error);
  }
`;
