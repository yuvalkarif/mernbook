import { PostWriter } from "../post-writer/PostWriter";
import { Post } from "../post/Post";
import { useEffect, useState } from "react";
import { FeedWrapper } from "./Feed.styles";
export const Feed = ({ posts }: { posts: string[] | undefined }) => {
  const [postsIds, setPostsIds] = useState<string[] | undefined>();
  const [postsToRender, setPostsToRender] = useState<string[] | undefined>();

  useEffect(() => {
    if (!postsIds) {
      setPostsIds(posts);
    } else if (postsIds && !postsToRender) {
      setPostsToRender([...postsIds].slice(-5));
      setPostsIds();
    } else if (postsIds && postsToRender) {
      setPostsToRender([...postsToRender, ...postsIds.slice(-1)]);
    }
  }, [posts, postsIds]);

  const handleMore = () => {
    setPostsToRender;
  };
  return (
    <div>
      <PostWriter setPostsIds={setPostsIds} />
      <FeedWrapper>
        {postsToRender &&
          postsToRender.map((post, i) => {
            console.log(`post ${i} ${post}`);
            return <Post key={i} postId={post} />;
          })}
      </FeedWrapper>
      <button type="button" onClick={handleMore}>
        CLICK FROM MORE
      </button>
    </div>
  );
};
