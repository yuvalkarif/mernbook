import styled from "styled-components";
import {
  bigIcon,
  smallIcon,
  Container,
  MediumImage,
  TextBox,
  WideButton,
  Button,
} from "../styled/styledTheme";
import { Photo, Upload } from "@styled-icons/material-rounded";

export const WriterContainer = styled(Container)`
  margin-bottom: 1rem;
  & > div:last-of-type {
    margin-top: 0.5em;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
  &:focus-within {
    textarea {
      min-height: 6em;
    }
  }
`;

export const TopContainer = styled.div`
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.btnBg};
    > textarea {
      ${TextBox}
      font-weight: 500;
      font-size: 1.1rem;
      transition: min-height 250ms ease-out;
      min-height: 0;
      &:focus-within {
        min-height: 6em;
      }
    }
  }
  & > img {
    margin: 0 auto;
    align-self: center;
    overflow: hidden;
    width: 100%;
  }
`;

export const WriterProfile = styled(MediumImage)``;

export const ActionButton = styled.button`
  ${WideButton}
  width:unset;
  min-width: fit-content;
  padding: 0.5rem 1rem;
  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const PhotoIcon = styled(Photo)`
  ${bigIcon}
  color: ${({ theme }) => theme.altAccent};
  @media (max-width: 768px) {
    margin-right: 0 !important;
  }
`;
export const PostButton = styled.button`
  ${WideButton}
  max-width: fit-content;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.accentBtnBg};
  color: ${({ theme }) => theme.accentBtnText};
  height: 100%;
`;
export const LinkInput = styled.input`
  ${TextBox}
  width: 100%;
`;

export const UploadIcon = styled(Upload)`
  ${bigIcon}
  margin: .5rem;
  width: 100%;
  :hover {
    color: ${({ theme }) => theme.altAccent};
    cursor: pointer;
  }
`;

export const LinkContainer = styled.div``;
