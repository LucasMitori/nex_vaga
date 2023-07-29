import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterSpace = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--color-navigation);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const RegisterTitle = styled.div`
  width: 90%;
  height: 50px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1001;

  @media screen and (min-width: 480px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 768px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 1024px) {
    & {
      width: 450px;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      width: 450px;
    }
  }
`;

export const BackBtn = styled(Link)`
  width: 80px;
  height: 40px;
  border-radius: var(--radius-4);
  background-color: var(--color-grey-2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--color-grey-0);
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-10);
  font-weight: var(--font-weight-600);
  border: 1px solid var(--color-primary);
  cursor: pointer;
`;

export const RegisterInfo = styled.div`
  width: 350px;
  height: 750px;
  background-color: var(--blur-effect-01);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1001;
`;

export const RegisterForm = styled.form`
  width: 90%;
  height: 90%;
  background-color: var(--blur-effect-01);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-700);
    color: var(--color-grey-0);
  }

  & > button {
    width: 95%;
    height: 40px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-4);
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
  }
`;

export const DataSpaceInput = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: transparent;

  & > label {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-10);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-0);
  }

  & > input,
  & > select {
    width: 100%;
    height: 40px;
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-0);
    border-radius: var(--radius-4);
    color: var(--color-grey-0);
    padding-left: 20px;
  }

  & > input::placeholder {
    color: var(--color-grey-ex-1);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-400);
  }

  & > input:focus {
    outline: none;
    border: 1px solid var(--color-secondary);
  }

  & > p {
    color: var(--color-grey-0);
    margin-top: 5px;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-10);
  }
`;

export const LoginBtn = styled(Link)`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: var(--color-grey-4);
  color: var(--color-grey-0);
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-14);
  font-weight: var(--font-weight-500);
  border: 1px solid var(--color-grey-4);
  border-radius: var(--radius-4);
`;
