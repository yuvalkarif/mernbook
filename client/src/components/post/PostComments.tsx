import { Comment } from "../../constants/interfaces";
import { Comments, ShowButton } from "./Post.styles";
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
      {comments && showAll && (
        <ShowButton onClick={() => setShowAll(false)}>View less</ShowButton>
      )}
      {comments &&
        showAll &&
        comments.map((comment, i) => (
          <PostComment key={i} comment={comment}></PostComment>
        ))}
      {!showAll && comments && comments?.length > 1 ? (
        <>
          <ShowButton onClick={() => setShowAll(true)}>
            View {comments?.length - 1} previous comments{" "}
          </ShowButton>
          <PostComment comment={comments[0]} />
        </>
      ) : null}
    </Comments>
  );
};
