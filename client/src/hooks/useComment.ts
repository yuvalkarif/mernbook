import { useState, useContext } from "react";
import { Comment } from "../constants/interfaces";
import UserContext from "../constants/context";
import { postComment } from "../helpers/api";
const useComment = () => {
  const [comments, setComments] = useState<[Comment] | []>([]);
  const user = useContext(UserContext);

  const writeComment = async (postId: string, body: string) => {
    try {
      if (user.user?._id) {
        const newComments: any = await postComment(
          user.user?._id,
          postId,
          body
        );
        setComments(newComments);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [user, comments, writeComment] as const;
};

export default useComment;
