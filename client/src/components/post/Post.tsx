import { useEffect, useState } from "react";
import { useFetchPost } from "../../hooks/useFetchPost";
import { useFetchUser } from "../../hooks/useFetchUser";
import { MediumImage } from "../styled/styledTheme";
import {
  PostContainer,
  Image,
  Actions,
  SmallCommentIcon,
  SmallLikeIcon,
  ActionButton,
  BigLikeIcon,
  Comments,
  BigCommentIcon,
  BigLikeIconClicked,
} from "./Post.styles";
import Moment from "react-moment";
import "moment-timezone";
import { PostComment } from "./PostComment";
import { PostComments } from "./PostComments";
import { useLike } from "../../hooks/useLike";
import { PostCommentWriter } from "./PostCommentWriter";
import { Comment } from "../../constants/interfaces";
export const Post = ({ postId }: { postId: string }) => {
  const [post, setFetchPost] = useFetchPost();
  const [user, setFetchUser] = useFetchUser();
  const [likes, isLiked, checkLike, toggleLike] = useLike();
  const [comments, setComments] = useState<[Comment] | []>([]);
  useEffect(() => {
    if (postId && !post) {
      setFetchPost(postId);
    }
    if (post && !user) {
      setFetchUser(post.creator);
      checkLike(post?.likes);
      setComments(post?.comments);
    }
  }, [
    postId,
    post,
    user,
    setFetchPost,
    setFetchUser,
    checkLike,
    comments,
    setComments,
  ]);

  const handleLike = () => {
    toggleLike(postId);
  };
  return (
    <>
      <PostContainer>
        <span>
          <MediumImage src={user?.picture} />
          <div>
            <h4>{user?.displayname}</h4>
            <Moment format={"LL"}>{post?.date}</Moment>
          </div>
        </span>
        <p>{post?.body}</p>
        {post?.picture && <Image src={post.picture} />}
        <div>
          <Actions>
            <div>
              <span>
                <SmallLikeIcon />
                {likes && likes.length}
              </span>
              <span>
                {post?.comments?.length}
                <SmallCommentIcon />
              </span>
            </div>
            <div>
              <ActionButton onClick={handleLike} isLiked={isLiked}>
                {isLiked ? <BigLikeIconClicked /> : <BigLikeIcon />}
                Like
              </ActionButton>
              <ActionButton>
                <BigCommentIcon />
                Comment
              </ActionButton>
            </div>
          </Actions>
          {comments && (
            <PostComments
              comments={comments}
              setComments={setComments}
              postId={postId}
            />
          )}
          {comments && (
            <PostCommentWriter postId={postId} setComments={setComments} />
          )}
        </div>
      </PostContainer>
    </>
  );
};
