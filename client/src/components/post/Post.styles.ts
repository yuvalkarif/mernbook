import styled from "styled-components";
import { Container } from "../styled/styledTheme";
export const PostContainer = styled(Container)`
  max-width: 40.5rem;
  display: flex;
  flex-direction: column;
  span {
    display: flex;
    align-items: center;
    div {
      display: flex;

      flex-direction: column;
      margin-left: 1ch;
    }
  }
  h4 {
    color: ${({ theme }) => theme.btnText};
    font-weight: 600;
    margin: 0;
  }
  & > p {
    color: ${({ theme }) => theme.btnText};
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  align-self: center;
  overflow: hidden;
  width: 100%;
`;
