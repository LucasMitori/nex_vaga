import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginSpace = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--color-navigation);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const LoginInfo = styled.div`
  width: 350px;
  height: 450px;
  background-color: var(--blur-effect-01);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1001;
`;

export const LoginForm = styled.form`
  width: 90%;
  height: 80%;
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

export const RegisterBtn = styled(Link)`
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
