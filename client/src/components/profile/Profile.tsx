import React, { useEffect, useState } from "react";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileAbout } from "./ProfileAbout";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useTitle } from "../../hooks/useTitle";
import { Wrapper } from "../styled/styledTheme";
import { Feed } from "../feed/Feed";
import { ProfileBody, ProfileWrapper } from "./Profile.styles";
import { ProfileEditor } from "./ProfileEditor";
import { useUserContext } from "../../hooks/useUserContext";

export const Profile: React.FC = () => {
  const id = "616d4ffeae3c6e194632c815";
  const [user, setFetchUser] = useFetchUser();
  useTitle((user?.displayname || "Profile") + " | Mernbook");
  const [edit, setEdit] = useState(false);
  const { user: loggedUser } = useUserContext();

  useEffect(() => {
    if (id && !user) {
      setFetchUser(id);
    }
    console.log(user);
  });

  return (
    <ProfileWrapper>
      <ProfileHeader user={user} setEdit={setEdit} />
      {user !== undefined && edit && (
        <ProfileEditor user={user} setEdit={setEdit} />
      )}
      <Wrapper>
        <ProfileBody className="profile-body">
          <ProfileAbout about={user?.about} />
          {user?.posts && <Feed posts={user.posts} />}
        </ProfileBody>
      </Wrapper>
    </ProfileWrapper>
  );
};
