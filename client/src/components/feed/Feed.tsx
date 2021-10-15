import { PostWriter } from "../post-writer/PostWriter";
import { Post } from "../post/Post";
export const Feed = ({ posts }: { posts: [string] | undefined }) => {
  return (
    <div>
      <PostWriter />
      {posts &&
        posts.map((post, i) => {
          return <Post key={i} postId={post} />;
        })}
    </div>
  );
};
