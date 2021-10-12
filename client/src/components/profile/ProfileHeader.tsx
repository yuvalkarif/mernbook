import React from "react";
import { User } from "../../constants/interfaces";
import { BarContainer, HeaderContainer, ProfilePicBig } from "./Profile.styles";
import { Wrapper } from "../styled/styledTheme";

export const ProfileHeader = ({ user }: { user: User | undefined }) => {
  return (
    <>
      <HeaderContainer>
        <Wrapper>
          {user?.picture && <ProfilePicBig src={user.picture}></ProfilePicBig>}
          <h1>{user?.displayname}</h1>
          <p>{user?.about?.summary ? user?.about.summary : "Add Bio"}</p>
        </Wrapper>
      </HeaderContainer>

      <BarContainer>
        <Wrapper>
          <div>
            <span>Posts</span>
            <span>About</span>
            <span>Friends {user?.followers?.length}</span>
          </div>
        </Wrapper>
      </BarContainer>
    </>
  );
};
