import styled, { css } from "styled-components";
import { School } from "@styled-icons/material-rounded/School";
import { LocationOn } from "@styled-icons/material-rounded/LocationOn";
import { AccessTime } from "@styled-icons/material-rounded/AccessTime";
import { BirthdayCake } from "@styled-icons/fa-solid";
import { Container } from "../styled/styledTheme";
import { Work } from "@styled-icons/material-rounded";

export const ProfilePicBig = styled.img`
  border-radius: 100%;
  max-width: 168px;
  border: 0.3rem solid ${({ theme }) => theme.containerBg};
`;

export const HeaderContainer = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    p {
      margin: 0;
    }
    padding-bottom: 1em;
    border-bottom: 1px solid ${({ theme }) => theme.btnBg};
  }
  background: linear-gradient(
      to top,
      rgb(36, 37, 38),
      rgb(36, 37, 38),
      rgb(36, 37, 38),
      rgba(36, 37, 38, 0.9),
      rgba(36, 37, 38, 0.7),
      rgba(36, 37, 38, 0.4),
      rgba(36, 37, 38, 0)
    ),
    ${({ theme }) => theme.btnBg};
`;
export const BarContainer = styled.div`
  background-color: ${({ theme }) => theme.containerBg};
  & > div {
    &:first-child {
      display: flex;
      justify-content: space-between;

      span {
        padding: 1rem;
        display: inline-block;
        font-weight: 600;
        font-size: 0.9rem;
        background-color: ${({ theme }) => theme.containerBg};
        border-radius: 0.3rem;

        &:hover {
          cursor: pointer;
          filter: brightness(110%);
        }
      }
    }
  }
`;

export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: bottom;
    font-weight: 500;
    strong {
      margin-left: 0.5ch;
      font-weight: 600;
      color: ${({ theme }) => theme.btnText};
    }
  }
`;
const miniIcon = css`
  fill: ${({ theme }) => theme.btnTxt};
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-right: 0.5em;
`;
export const EduIcon = styled(School)`
  ${miniIcon}
`;
export const LocationIcon = styled(LocationOn)`
  ${miniIcon}
`;
export const TimeIcon = styled(AccessTime)`
  ${miniIcon}
`;
export const BirthdayIcon = styled(BirthdayCake)`
  ${miniIcon}
`;
export const WorkIcon = styled(Work)`
  ${miniIcon}
`;

export const ProfileBody = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  & > :nth-child(1) {
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    & > :nth-child(1) {
      width: 100%;
      max-width: min(40.5rem, 35%);
      height: fit-content;
    }
    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      max-width: min(40.5rem, 65%);
      width: 100%;
    }
  }
`;
