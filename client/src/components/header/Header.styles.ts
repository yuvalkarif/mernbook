import styled from "styled-components";
import { bigIcon, smallIcon, TextBox, WideButton } from "../styled/styledTheme";
import { Search, Logout } from "@styled-icons/material-rounded";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.containerBg};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  & > div {
    display: flex;
    align-items: center;
  }

  padding-block: 0.2rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const HeaderProfile = styled.div`
  justify-self: flex-end;
  margin-right: 1rem;
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.btnText};
    margin-left: 0.25rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const SearchInput = styled.input`
  ${TextBox}
  max-width: 20rem;
  max-height: 2.5rem;
  border-radius: 1.5rem;
  margin: 0 auto;
  padding-right: 2rem;
`;
export const HeaderSearch = styled.div`
  justify-self: center;
  width: 100%;
  div {
    position: relative;
    margin: 0 auto;
  }
`;

export const SearchIcon = styled(Search)`
  ${smallIcon}
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
`;
export const LogoutIcon = styled(Logout)`
  ${bigIcon}
  ${WideButton}
  border-radius: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.btnBg};
  margin-left: 0.5rem;
  min-width: 1.5rem;
`;

export const ProfileButton = styled(Link)`
  ${WideButton}
  text-decoration: none;
  border-radius: 2.5rem;
  padding: 0.35rem;
  @media (max-width: 768px) {
    padding: 0;
    margin-left: 0.5rem;
  }
`;
