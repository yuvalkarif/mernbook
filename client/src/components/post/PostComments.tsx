import { Comment } from "../../constants/interfaces";
import { Comments } from "./Post.styles";
import { PostComment } from "./PostComment";
import { useState } from "react";
export const PostComments = ({
  comments,
}: {
  comments: [Comment] | undefined;
}) => {
  const [showAll, setShowAll] = useState<Boolean>(false);
  return (
    <Comments>
      {comments &&
        showAll &&
        comments.map((comment, i) => (
          <PostComment key={i} comment={comment}></PostComment>
        ))}
      {!showAll && comments && comments?.length > 1 ? (
        <>
          <p onClick={() => setShowAll(true)}>
            View {comments?.length - 1} previous comments{" "}
          </p>
          <PostComment comment={comments[0]} />
        </>
      ) : null}
    </Comments>
  );
};
