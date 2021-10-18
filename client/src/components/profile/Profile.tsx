import React, { useEffect, useState } from "react";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileAbout } from "./ProfileAbout";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useTitle } from "../../hooks/useTitle";
import { Wrapper } from "../styled/styledTheme";
import { Feed } from "../feed/Feed";
import { ProfileBody } from "./Profile.styles";

export const Profile: React.FC = () => {
  const id = "616d4ffeae3c6e194632c815";
  const [user, setFetchUser] = useFetchUser();
  useTitle((user?.displayname || "Profile") + " | Mernbook");

  useEffect(() => {
    if (id && !user) {
      setFetchUser(id);
    }
  });

  return (
    <>
      {/* <Wrapper> */}
      {/* <h1>Profile</h1>
        {error && <p>Error {error}</p>}
        {user && <p>User fetched</p>} */}
      <ProfileHeader user={user} />
      <Wrapper>
        <ProfileBody className="profile-body">
          <ProfileAbout about={user?.about} />
          {user?.posts && <Feed posts={user.posts} />}
        </ProfileBody>
      </Wrapper>

      {/* </Wrapper> */}
    </>
  );
};

// user?.posts?.reverse()
