import { useState } from "react";
import { Post } from "../constants/interfaces";
import { getPost } from "../helpers/api";

export const useFetchPost = () => {
  const [post, setPost] = useState<Post | undefined>();
  const [error, setError] = useState<Boolean | undefined>(false);
  const setFetchPost = async (id: string) => {
    try {
      let fetchedPost = await getPost(id);
      console.log(fetchedPost);
      if (fetchedPost) {
        setPost(fetchedPost);
      }
    } catch (error) {
      setError(true);
    }
  };

  return [error, post, setFetchPost] as const;
};
