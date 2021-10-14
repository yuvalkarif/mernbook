import { Comment, User as UserType } from "../../constants/interfaces";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useEffect, useContext } from "react";
import { CommentPic, CommentWrapper, DeleteIcon } from "./Post.styles";
import Moment from "react-moment";
import "moment-timezone";
import UserContext from "../../constants/context";
import { removeComment } from "../../helpers/api";
import Skeleton from "react-loading-skeleton";

export const PostComment = ({
  comment,
  setComments,
  postId,
}: {
  comment: Comment;
  setComments: React.Dispatch<React.SetStateAction<[Comment] | []>>;
  postId: string;
}) => {
  const [postUser, setFetchUser] = useFetchUser();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (comment.creator) {
      setFetchUser(comment.creator);
    }
  }, [comment, setComments]);

  const handleRemove = async () => {
    if (user?._id === comment.creator && comment._id) {
      try {
        const newComments: any = await removeComment(comment._id, postId);
        console.log("NewComments", newComments);
        setComments(newComments);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      {postUser ? (
        <CommentWrapper>
          <div>
            {postUser?.picture && <CommentPic src={postUser?.picture} />}
            <div>
              {postUser?.displayname && <h5>{postUser?.displayname}</h5>}
              {comment.body && <p>{comment.body}</p>}
            </div>
            {user?._id === comment.creator && (
              <DeleteIcon onClick={handleRemove} />
            )}
          </div>
          {comment?.date && <Moment fromNow>{comment?.date}</Moment>}
        </CommentWrapper>
      ) : null}
    </>
  );
};
