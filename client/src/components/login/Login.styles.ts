import styled from "styled-components";
import {
  Button,
  Wrapper as WrapperTheme,
  Container as ContainerTheme,
} from "../styled/styledTheme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;
export const Wrapper = styled(WrapperTheme)`
  margin-top: 7rem;
`;

export const Main = styled(ContainerTheme)`
  display: flex;
  flex-direction: column;
  min-width: 25rem;
  @media (max-width: 768px) {
    min-width: initial;
  }
  & > * {
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    & > * {
      margin-bottom: 1rem;
    }
  }

  input {
    padding: 0.7rem;
    border-radius: 0.3rem;
    border: none;
    color: ${({ theme }) => theme.btnText};
    background-color: ${({ theme }) => theme.btnBg};
  }
`;

//Buttons

export const OutlineButton = styled(Button)`
  background-color: ${({ theme }) => theme.containerBg};
  color: ${({ theme }) => theme.accentBtnBg};
  border: 2px solid ${({ theme }) => theme.accentBtnBg};
`;
export const AccentButton = styled(Button)`
  color: ${({ theme }) => theme.accentBtnText};
  background-color: ${({ theme }) => theme.accentBtnBg};
`;
export const AltAccentButton = styled(Button)`
  color: ${({ theme }) => theme.accentBtnText};
  background-color: ${({ theme }) => theme.altAccent};
  position: relative;

  &:before {
    position: absolute;
    display: block;
    content: "";
    background-color: ${({ theme }) => theme.btnBg};
    width: 100%;
    height: 1.5px;
    top: -1rem;
    left: 0;
  }
`;
