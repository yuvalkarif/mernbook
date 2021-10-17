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
      setPostsToRender(posts?.splice(-5, 5).reverse());
    }
  }, [posts, postsIds]);

  useEffect(() => {
    if (postsIds) {
      setPostsToRender([...postsIds].splice(-5, 5).reverse());
      setPostsIds([...postsIds].splice(0, postsIds.length - 5));
    }
  }, [posts, numOfPosts]);

  const handleMore = async () => {
    if (postsIds) {
      setPostsToRender((posts) => posts?.concat([...postsIds].splice(-5, 5)));
      setPostsIds([...postsIds].splice(0, postsIds.length - 5));
    }
  };
  return (
    <div>
      <PostWriter setPostsIds={setPostsIds} setNumOfPosts={setNumOfPosts} />
      <FeedWrapper>
        {postsToRender &&
          postsToRender.map((post, i) => {
            return (
              <Post
                key={post + i}
                postId={post}
                setPostsToRender={setPostsToRender}
              />
            );
          })}
      </FeedWrapper>
      <button type="button" onClick={handleMore}>
        CLICK FROM MORE
      </button>
    </div>
  );
};
