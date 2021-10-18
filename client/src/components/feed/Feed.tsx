import { PostWriter } from "../post-writer/PostWriter";
import { Post } from "../post/Post";
import { useEffect, useReducer, useState } from "react";
import { FeedWrapper } from "./Feed.styles";
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
        // postsIds: [...state.postsIds].splice(0, state.postsIds.length - 5),
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
  // const [postsIds, setPostsIds] = useState<string[] | undefined>();
  // const [postsToRender, setPostsToRender] = useState<string[] | undefined>();
  // const [numOfPosts, setNumOfPosts] = useState<number>(5);

  const [state, dispatchPosts] = useReducer(reducer, {
    postsToRender: [],
    postsIds: posts,
  });

  // useEffect(() => {
  //   if (postsIds) {
  //     setPostsToRender([...postsIds].splice(-5, 5).reverse());
  //     setPostsIds([...postsIds].splice(0, postsIds.length - 5));
  //   }
  // }, [posts, numOfPosts]);

  useEffect(() => {
    if (state.postsToRender.length === 0) {
      dispatchPosts({ type: "load_posts" });
    }
  }, [state.postsToRender]);

  const handleMore = async () => {
    // if (postsIds) {
    //   setPostsToRender((posts) => posts?.concat([...postsIds].splice(-5, 5)));
    //   setPostsIds([...postsIds].splice(0, postsIds.length - 5));
    // }
    dispatchPosts({ type: "load_posts" });
  };

  return (
    <div>
      <PostWriter dispatchPosts={dispatchPosts} />
      <FeedWrapper>
        {state.postsToRender &&
          state.postsToRender.map((post, i) => {
            return (
              <Post
                key={post + i}
                postId={post}
                dispatchPosts={dispatchPosts}
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
