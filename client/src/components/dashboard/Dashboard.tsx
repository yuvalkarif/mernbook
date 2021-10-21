import { Wrapper } from "../styled/styledTheme";
import { Feed } from "../feed/Feed";
import { useUserContext } from "../../hooks/useUserContext";
import { useState, useEffect } from "react";
import { getPostsByFollowed } from "../../helpers/api";
import { Header } from "../header/Header";
import { DashboardWrapper } from "./Dashboard.styles";

export const Dashboard = () => {
  const { user } = useUserContext();
  const [posts, setPosts] = useState<string[]>([]);

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
      <Header />
      <DashboardWrapper>
        {posts ? <Feed posts={posts} isUser={true} /> : <p>No posts found</p>}
        {posts.length <= 1 && (
          <>
            <p>Seems quite empty in here...</p>
            <h2>Follow other users to see more posts !</h2>
          </>
        )}
      </DashboardWrapper>
    </>
  );
};
