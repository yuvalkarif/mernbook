import { useState } from "react";
import { Post } from "../constants/interfaces";
import { getPost } from "../helpers/api";

export const useFetchPost = () => {
  const [post, setPost] = useState<Post | undefined>();
  const [error, setError] = useState<Boolean | undefined>(false);
  const setFetchPost = async (id: string, likes?: [string] | []) => {
    if (likes) {
      console.log("updating likes");
      let newPost = Object.assign(post, { likes: likes });
      console.log("newpost", newPost);
      setPost(newPost);
    } else {
      console.log("fetching new post");
      try {
        let fetchedPost = await getPost(id);

        if (fetchedPost) {
          setPost(fetchedPost);
        }
      } catch (error) {
        setError(true);
      }
    }
  };

  return [error, post, setFetchPost] as const;
};
