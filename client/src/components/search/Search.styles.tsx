import styled from "styled-components";
import { Container, TextBox, Button } from "../styled/styledTheme";
import { Search } from "@styled-icons/material-rounded";

export const SearchBar = styled.input`
  ${TextBox}
  font-size: 1.25rem;
  font-weight: 600;
  padding-inline: 1.5rem;
  margin: 0;
  border-radius: 1.5rem;
`;

export const SearchContainer = styled(Container)`
  margin-top: 1rem;
  div {
    display: flex;
    position: relative;
  }

  h1 {
    margin-top: 0;
    padding-bottom: 0.5rem;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.btnBg};
  }
`;

export const SearchButton = styled(Search)`
  color: ${({ theme }) => theme.accentBtnText};
  border-radius: 1.75rem;
  position: absolute;
  right: 0.25rem;
  padding: 0.5rem;
  max-height: 2rem;
  &:hover {
    color: ${({ theme }) => theme.accentBtnBg};
    cursor: pointer;
  }
`;
