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
  | { type: "load_last" }
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
    case "load_last":
      return {
        postsToRender: [
          ...state.postsToRender,
          ...state.postsIds.slice(0).reverse(),
        ],
        postsIds: [],
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

export const Feed = ({
  posts,
  isUser,
}: {
  posts: string[] | [];
  isUser?: boolean;
}) => {
  const [state, dispatchPosts] = useReducer(reducer, {
    postsToRender: [],
    postsIds: posts,
  });
  const [ref, inView] = useInView({ threshold: 1 });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  console.log(posts);
  const loadSelector = () => {
    if (state.postsIds.length >= 5) {
      dispatchPosts({ type: "load_posts" });
      console.log("loading 5");
    } else if (state.postsIds.length >> 0) {
      dispatchPosts({ type: "load_last" });
      console.log("loading all");
    }
  };

  useEffect(() => {
    if (state?.postsToRender.length === 0) {
      loadSelector();
      console.log(posts);
    }
  });

  useEffect(() => {
    if (inView && state.postsIds.length >> 0 && isLoaded) {
      setIsLoaded(false);
      loadSelector();
      console.log("Handling loading");
    }
  }, [inView, isLoaded]);

  // const handleMore = async () => {
  //   loadSelector();
  // };
  const handleLoaded = () => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  };

  return (
    <div>
      {isUser && <PostWriter dispatchPosts={dispatchPosts} />}
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
      {isLoaded && <div ref={ref} style={{ marginTop: "1rem" }}></div>}
    </div>
  );
};
