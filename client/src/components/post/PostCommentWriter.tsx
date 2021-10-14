import { CommentWriter, CommentPic } from "./Post.styles";
import TextareaAutosize from "react-textarea-autosize";
import useComment from "../../hooks/useComment";
export const PostCommentWriter = () => {
  const [user, comments, writeComment] = useComment();
  return (
    <>
      <CommentWriter>
        <CommentPic src={user.user?.picture} />
        <TextareaAutosize placeholder="Write a comment..." />
      </CommentWriter>
    </>
  );
};
