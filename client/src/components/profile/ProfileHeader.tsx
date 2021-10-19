import React from "react";
import { User } from "../../constants/interfaces";
import { BarContainer, HeaderContainer, ProfilePicBig } from "./Profile.styles";
import { Wrapper } from "../styled/styledTheme";

export const ProfileHeader = ({
  user,
  setEdit,
}: {
  user: User | undefined;
  setEdit: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <>
      <HeaderContainer>
        <Wrapper>
          {user?.picture && <ProfilePicBig src={user.picture} />}
          <h1>{user?.displayname}</h1>
          <p>{user?.about?.summary ? user?.about.summary : "Add Bio"}</p>
        </Wrapper>
      </HeaderContainer>

      <BarContainer>
        <Wrapper>
          <div>
            <span>Posts</span>
            <span onClick={() => setEdit(true)}>About</span>
            <span>Friends {user?.followers?.length}</span>
          </div>
        </Wrapper>
      </BarContainer>
    </>
  );
};
