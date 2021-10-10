import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.btnText};
  background-color: ${({ theme }) => theme.btnBg};
  border-radius: 0.3rem;
  padding: 0.7rem;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;
export const Wrapper = styled.section`
  width: 90%;
  max-width: 60rem;
  margin: 0 auto;
  font-size: 1rem;
`;

export const Container = styled.div`
  box-shadow: 0 1rem 4rem 0 rgba(00, 00, 00, 0.1);
  border-radius: 0.8rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.containerBg};
`;
