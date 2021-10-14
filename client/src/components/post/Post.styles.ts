import styled, { css } from "styled-components";
import { Container } from "../styled/styledTheme";
import { Like } from "@styled-icons/boxicons-regular";
import { Comment } from "@styled-icons/boxicons-regular";
import { Comment as SolidComment } from "@styled-icons/boxicons-solid";
import { Like as SolidLike } from "@styled-icons/boxicons-solid";
import { Send } from "@styled-icons/material-rounded";
import { DeleteOutline } from "@styled-icons/material-rounded";

export const PostContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  time {
    font-size: 0.85rem;
    font-weight: 600;
  }
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
    font-weight: 500;
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

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5em;
`;
export const CommentWrapper = styled.div`
  position: relative;
  margin-top: 0.5em;

  time {
    margin-left: 3rem;
    font-weight: 400;
    font-size: 0.75rem;
  }
  & > div {
    display: flex;
    //Post body container
    & > div {
      background-color: ${({ theme }) => theme.btnBg};
      padding: 0.25em 0.75em;
      border-radius: 1rem;
      margin-left: 0.5em;
      max-width: 100%;
      overflow-wrap: break-word;
      min-width: 0;

      p,
      h5 {
        margin: 0;
      }
    }
  }
`;

export const ActionButton = styled.button.attrs(
  (props: { isLiked: Boolean }) => props
)`
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.containerBg};
  color: ${(props) =>
    props.isLiked
      ? ({ theme }) => theme.accentBtnBg
      : ({ theme }) => theme.mainText};

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
export const CommentPic = styled.img`
  max-width: 2.15rem;
  max-height: 2.15rem;
  border-radius: 100%;
`;

export const ShowButton = styled.span`
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CommentWriter = styled.form`
  display: flex;
  margin-top: 0.25rem;
  position: relative;
  textarea {
    line-height: inherit;
    max-width: 100%;
    width: 100%;
    resize: none;
    box-sizing: border-box;
    border-radius: 1rem;
    border: none;
    margin-left: 0.5em;
    padding: 0.5rem 0.75rem;
    background: ${({ theme }) => theme.btnBg};
    color: ${({ theme }) => theme.btnText};
    :focus {
      outline: none;
    }
  }
`;

//-------------------------------------------ICONS---------------------------------------------//
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
export const BigLikeIconClicked = styled(SolidLike)`
  ${bigIcon}
  fill: ${({ theme }) => theme.accentBtnBg};
`;
export const BigCommentIcon = styled(Comment)`
  ${bigIcon}
`;
export const SmallLikeIcon = styled(SolidLike)`
  ${smallIcon}
  background: ${({ theme }) => theme.accentBtnBg};
  fill: ${({ theme }) => theme.accentBtnText};
  border-radius: 100%;
  padding: 0.2em;
  margin-right: 0.5ch;
`;
export const SmallCommentIcon = styled(SolidComment)`
  ${smallIcon}
  margin-left: 0.5ch;
`;

export const SendIcon = styled(Send)`
  position: absolute;
  max-width: 1.5rem;
  right: 0.5rem;
  top: 0.5em;
  &:hover {
    cursor: pointer;
  }
`;
export const DeleteIcon = styled(DeleteOutline)`
  max-width: 1.5rem;
  margin-left: 0.5rem;
  right: 0.5rem;
  top: 0.5em;
  &:hover {
    cursor: pointer;
  }
`;
