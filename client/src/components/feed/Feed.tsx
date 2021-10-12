import { Post } from "../post/Post";
export const Feed = ({ posts }: { posts: [string] | undefined }) => {
  return (
    <>
      <h5>Im a Feed</h5>
      {posts &&
        posts.map((post, i) => {
          return <Post key={i} postId={post} />;
        })}
    </>
  );
};
