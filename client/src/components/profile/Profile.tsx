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
import { useParams } from "react-router";
import { Header } from "../header/Header";

export const Profile: React.FC = () => {
  const id = "616d4ffeae3c6e194632c815";
  const [user, setFetchUser] = useFetchUser();
  useTitle((user?.displayname || "Profile") + " | Mernbook");
  const [edit, setEdit] = useState(false);
  const { user: loggedUser } = useUserContext();
  const { username } = useParams<{ username?: string }>();
  useEffect(() => {
    if (username && !user) {
      setFetchUser(username, false);
    }
  });

  return (
    <>
      <Header user={loggedUser} />
      <ProfileWrapper>
        <ProfileHeader
          user={user}
          setEdit={setEdit}
          isUser={loggedUser?._id === user?._id}
        />

        {user !== undefined && edit && (
          <ProfileEditor
            user={user}
            setEdit={setEdit}
            setFetchUser={setFetchUser}
          />
        )}
        <Wrapper>
          <ProfileBody className="profile-body">
            <ProfileAbout about={user?.about} />
            {user?.posts && (
              <Feed posts={user.posts} isUser={loggedUser?._id === user?._id} />
            )}
          </ProfileBody>
        </Wrapper>
      </ProfileWrapper>
    </>
  );
};
