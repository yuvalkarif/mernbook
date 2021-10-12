import styled, { css } from "styled-components";
import { Container } from "../styled/styledTheme";
import { Like } from "@styled-icons/boxicons-regular";
import { Comment } from "@styled-icons/boxicons-regular";
import { Comment as SolidComment } from "@styled-icons/boxicons-solid";
import { Like as SolidLike } from "@styled-icons/boxicons-solid";

export const PostContainer = styled(Container)`
  max-width: 40.5rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  span {
    display: flex;
    align-items: center;
    h4 {
      &:hover {
        text-decoration: underline;
        max-width: fit-content;
      }
    }
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
    margin-top: 0;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  align-self: center;
  overflow: hidden;
  width: 100%;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.btnBg};
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.3rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.btnBg};
  }
`;
const smallIcon = css`
  fill: ${({ theme }) => theme.btnTxt};
  max-width: 1rem;
  max-height: 1rem;
`;
const bigIcon = css`
  fill: ${({ theme }) => theme.mainTxt};
  max-width: 1.5rem;
  max-height: 1.5rem;
`;
export const BigLikeIcon = styled(Like)`
  ${bigIcon}
`;

export const ActionButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.containerBg};
  color: ${({ theme }) => theme.mainText};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0;
  border-radius: 0.5em;
  & :first-child {
    margin-right: 0.5ch;
  }
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`;

export const SmallLikeIcon = styled(SolidLike)`
  ${smallIcon}
  background: ${({ theme }) => theme.accentBtnBg};
  fill: ${({ theme }) => theme.accentBtnText};
  border-radius: 100%;
  padding: 0.2em;
  margin-right: 0.5em;
`;
export const SmallCommentIcon = styled(SolidComment)`
  ${smallIcon}
  margin-left: 0.5em;
`;
