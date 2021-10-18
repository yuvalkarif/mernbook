import { PostWriter } from "../post-writer/PostWriter";
import { Post } from "../post/Post";
import { useEffect, useReducer, useState } from "react";
import { FeedWrapper } from "./Feed.styles";
import { LoadFeed } from "./LoadFeed";
import { useInView } from "react-intersection-observer";

//-----------------Reducer Setup/Types-----------------//
interface ReducerState {
  postsIds: string[] | [];
  postsToRender: string[] | [];
}
type Action =
  | { type: "load_posts" }
  | { type: "add_post"; post: string }
  | { type: "remove_post"; post: string };

const reducer = (state: ReducerState, action: Action): ReducerState => {
  switch (action.type) {
    case "load_posts":
      return {
        ...state,
        postsToRender: [
          ...state.postsToRender,
          ...state.postsIds.splice(-5, 5).reverse(),
        ],
      };
    case "add_post":
      return { ...state, postsToRender: [action.post, ...state.postsToRender] };
    case "remove_post":
      return {
        ...state,
        postsToRender: [...state.postsToRender].filter(
          (postToRender) => postToRender !== action.post
        ),
      };
  }
};

export const Feed = ({ posts }: { posts: string[] | [] }) => {
  const [state, dispatchPosts] = useReducer(reducer, {
    postsToRender: [],
    postsIds: posts,
  });
  const [ref, inView] = useInView({ threshold: 0 });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (state?.postsToRender.length === 0) {
      dispatchPosts({ type: "load_posts" });
    }
    if (inView && state.postsToRender.length >> 0) {
      setIsLoaded(false);
      handleMore();
    }
  }, [inView]);

  const handleMore = async () => {
    dispatchPosts({ type: "load_posts" });
    console.log("Getting more ");
  };

  return (
    <div>
      <PostWriter dispatchPosts={dispatchPosts} />
      <FeedWrapper>
        {state?.postsToRender &&
          state?.postsToRender.map((post, i) => {
            if (state.postsToRender.length - 1 === i) {
              console.log("wo");
              // setIsLoaded(true);
            }
            return (
              <Post
                key={post + i}
                postId={post}
                dispatchPosts={dispatchPosts}
              />
            );
          })}
      </FeedWrapper>
      {isLoaded && <div ref={ref} style={{ marginTop: "100vh" }}></div>}
    </div>
  );
};
