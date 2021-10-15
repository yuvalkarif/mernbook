import styled from "styled-components";
import {
  bigIcon,
  Container,
  MediumImage,
  TextBox,
  WideButton,
} from "../styled/styledTheme";
import { Photo } from "@styled-icons/material-rounded";

export const WriterContainer = styled(Container)`
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.btnBg};
    textarea {
      ${TextBox}
      font-weight: 500;
      font-size: 1.1rem;
      transition: min-height 250ms ease-out;
      min-height: 0;
      &:focus {
        min-height: 6em;
      }
    }
  }
  margin-bottom: 1rem;
`;

export const WriterProfile = styled(MediumImage)``;

export const ActionButton = styled.button`
  ${WideButton}
  margin-block:0.5em;
  max-width: fit-content;
  padding: 0.5rem 1rem;
`;

export const PhotoIcon = styled(Photo)`
  ${bigIcon}
  color: ${({ theme }) => theme.altAccent}
`;
