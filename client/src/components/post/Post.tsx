import { useEffect } from "react";
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
} from "./Post.styles";
import Moment from "react-moment";
import "moment-timezone";
export const Post = ({ postId }: { postId: string }) => {
  const [error, post, setFetchPost] = useFetchPost();
  const [userError, user, setFetchUser] = useFetchUser();
  useEffect(() => {
    if (postId && !post) {
      setFetchPost(postId);
    }
    if (post) {
      setFetchUser(post.creator);
    }
  }, [postId, post]);
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
                {post?.likes?.length}
              </span>
              <span>
                {post?.likes?.length}
                <SmallCommentIcon />
              </span>
            </div>
            <div>
              <ActionButton>
                <BigLikeIcon />
                Like
              </ActionButton>
              <ActionButton>
                <BigLikeIcon />
                Comment
              </ActionButton>
            </div>
          </Actions>
        </div>
      </PostContainer>
    </>
  );
};