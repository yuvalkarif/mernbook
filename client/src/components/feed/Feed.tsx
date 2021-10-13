import { Post } from "../post/Post";
export const Feed = ({ posts }: { posts: [string] | undefined }) => {
  return (
    <div>
      {posts &&
        posts.map((post, i) => {
          return <Post key={i} postId={post} />;
        })}
    </div>
  );
};
