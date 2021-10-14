import { Comment } from "../../constants/interfaces";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useEffect } from "react";
import { CommentPic, CommentWrapper } from "./Post.styles";
import Moment from "react-moment";
import "moment-timezone";
export const PostComment = ({ comment }: { comment: Comment }) => {
  const [user, setFetchUser] = useFetchUser();
  useEffect(() => {
    if (comment.creator) {
      setFetchUser(comment.creator);
    }
  }, [comment]);
  return (
    <CommentWrapper>
      <div>
        {user?.picture && <CommentPic src={user?.picture} />}
        <div>
          {user?.displayname && <h5>{user?.displayname}</h5>}
          {comment.body && <p>{comment.body}</p>}
        </div>
      </div>
      {comment?.date && <Moment fromNow>{comment?.date}</Moment>}
    </CommentWrapper>
  );
};
