import { PostWriter } from "../post-writer/PostWriter";
import { Post } from "../post/Post";
import { useEffect, useState } from "react";
import { FeedWrapper } from "./Feed.styles";
export const Feed = ({ posts }: { posts: string[] | undefined }) => {
  const [postsIds, setPostsIds] = useState<string[] | undefined>();
  const [postsToRender, setPostsToRender] = useState<string[] | undefined>();
  const [numOfPosts, setNumOfPosts] = useState<number>(5);

  useEffect(() => {
    if (!postsIds) {
      setPostsIds(posts);
    }
  }, [posts, postsIds]);

  const handleMore = async () => {
    if (postsIds) {
      setNumOfPosts(numOfPosts + 5);
    }
  };
  return (
    <div>
      <PostWriter setPostsIds={setPostsIds} />
      <FeedWrapper>
        {postsIds &&
          postsIds.slice(-numOfPosts).map((post, i) => {
            return (
              <Post key={post + i} postId={post} setPostsIds={setPostsIds} />
            );
          })}
      </FeedWrapper>
      <button type="button" onClick={handleMore}>
        CLICK FROM MORE
      </button>
    </div>
  );
};
