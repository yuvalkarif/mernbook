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
          ...state.postsIds.splice(-5).reverse(),
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
  const [ref, inView] = useInView({ threshold: 1 });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (state?.postsToRender.length === 0) {
      dispatchPosts({ type: "load_posts" });
      console.log("Loading Initial");
      console.log(state.postsIds, state.postsToRender);
      console.log("POSTS", posts);
    }
  });

  useEffect(() => {
    if (inView && state.postsIds.length >> 0 && isLoaded) {
      setIsLoaded(false);
      handleMore();
      console.log("Handling loading");
    }
  }, [inView, isLoaded]);

  useEffect(() => {
    console.log("Total", state.postsIds);
    // console.log("To Render", state.postsToRender);
    console.log(...state.postsIds.slice(-5));
  }, [state.postsToRender, state.postsIds]);

  const handleMore = async () => {
    dispatchPosts({ type: "load_posts" });
    console.log(state.postsIds, state.postsToRender);
    console.log("Getting more ");
  };
  const handleLoaded = () => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  };

  return (
    <div>
      <PostWriter dispatchPosts={dispatchPosts} />
      <FeedWrapper>
        {state?.postsToRender &&
          state?.postsToRender.map((post, i) => {
            if (state.postsToRender.length - 1 === i) {
              handleLoaded();
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
      {/* <button type="button" onClick={handleMore}></button> */}
      {isLoaded && <div ref={ref} style={{ marginTop: "1rem" }}></div>}
    </div>
  );
};
