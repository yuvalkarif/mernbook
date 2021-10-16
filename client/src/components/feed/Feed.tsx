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
    } else if (postsIds && !postsToRender) {
      console.log(postsIds);
      setPostsToRender([...postsIds].slice(-numOfPosts));
    } else if (postsIds && postsToRender) {
      setPostsToRender([...postsToRender, ...postsIds.slice(-1)]);
      setNumOfPosts(numOfPosts + 1);
    }
  }, [posts, postsIds]);

  const handleMore = () => {
    if (postsIds && postsToRender) {
      setNumOfPosts(numOfPosts + 5);

      setPostsToRender([...postsIds.slice(-numOfPosts)]);
    }
  };
  return (
    <div>
      <PostWriter setPostsIds={setPostsIds} />
      <FeedWrapper>
        {postsToRender &&
          postsToRender.slice().map((post, i) => {
            console.log(`post ${i} ${post}`);
            return <Post key={post} postId={post} />;
          })}
      </FeedWrapper>
      <button type="button" onClick={handleMore}>
        CLICK FROM MORE
      </button>
    </div>
  );
};
