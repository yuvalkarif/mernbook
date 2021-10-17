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
  SkeletonPostContainer,
  BigDeleteIcon,
} from "./Post.styles";
import Moment from "react-moment";
import "moment-timezone";
import { PostComment } from "./PostComment";
import { PostComments } from "./PostComments";
import { useLike } from "../../hooks/useLike";
import { PostCommentWriter } from "./PostCommentWriter";
import { Comment } from "../../constants/interfaces";
import { deletePost } from "../../helpers/api";
import { useUserContext } from "../../hooks/useUserContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export const Post = ({
  postId,
  setPostsIds,
}: {
  postId: string;
  setPostsIds: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}) => {
  const [post, setFetchPost] = useFetchPost();
  const [user, setFetchUser] = useFetchUser();
  const [likes, isLiked, checkLike, toggleLike] = useLike();
  const [comments, setComments] = useState<Comment[] | []>([]);
  const loggedUser = useUserContext();
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
  const handleDelete = async () => {
    if (loggedUser?.user?._id) {
      let posts: any;
      try {
        posts = await deletePost(loggedUser.user._id, postId);
        setPostsIds(posts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      {user && post ? (
        <PostContainer>
          {post?.creator === loggedUser.user?._id && (
            <BigDeleteIcon onClick={handleDelete}>DELETE</BigDeleteIcon>
          )}
          <span>
            <MediumImage src={user?.picture} />
            <div>
              <h4>{user?.displayname}</h4>
              <Moment format={"LL"}>{post?.date}</Moment>
            </div>
          </span>
          <p>{post?.body}</p>
          {post?.picture && <Image src={post?.picture} />}
          <div>
            <Actions>
              <div>
                <span>
                  <SmallLikeIcon />
                  {likes && likes.length}
                </span>
                <span>
                  {comments.length}
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
      ) : (
        <SkeletonPostContainer>
          <SkeletonTheme color="#3a3b3c" highlightColor="#b0b3b8">
            <div className="s-title">
              <Skeleton duration={1.5} circle={true} height={40} width={40} />
              <div>
                {" "}
                <Skeleton height={10} />
                <Skeleton height={10} />
              </div>
            </div>
            <div className="s-body">
              <Skeleton height={10} />
              <Skeleton height={10} />
              <Skeleton height={10} />
            </div>
          </SkeletonTheme>
        </SkeletonPostContainer>
      )}
    </>
  );
};
