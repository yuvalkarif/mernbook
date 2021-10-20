import { Wrapper } from "../styled/styledTheme";
import { Feed } from "../feed/Feed";
import { useUserContext } from "../../hooks/useUserContext";
import { useState, useEffect } from "react";
import { getPostsByFollowed } from "../../helpers/api";
import { Header } from "../header/Header";

export const Dashboard = () => {
  const { user } = useUserContext();
  const [posts, setPosts] = useState<string[] | undefined>();

  useEffect(() => {
    const fetchPosts = async () => {
      if (user?._id) {
        try {
          const fetchedPosts = await getPostsByFollowed(user?._id);
          setPosts(fetchedPosts);
        } catch (error) {
          console.log(error);
        }
      }
    };
    if (!posts) fetchPosts();
  });
  return (
    <>
      <Header user={user} />
      <Wrapper>
        {posts ? <Feed posts={posts} /> : <p>No posts found</p>}
      </Wrapper>
    </>
  );
};
