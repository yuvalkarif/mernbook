import React, { useEffect, useState } from "react";
import { ProfileHeader } from "./ProfileHeader";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useTitle } from "../../hooks/useTitle";
import { Wrapper } from "../styled/styledTheme";

export const Profile: React.FC = () => {
  const id = "615ef566e9be20f1898e44a6";
  const [error, user, setFetchUser] = useFetchUser();
  useTitle("Profile");
  useEffect(() => {
    if (id) {
      setFetchUser(id);
    }
  }, [id]);
  return (
    <>
      {/* <Wrapper> */}
      {/* <h1>Profile</h1>
        {error && <p>Error {error}</p>}
        {user && <p>User fetched</p>} */}
      {user && <ProfileHeader user={user} />}
      {/* </Wrapper> */}
    </>
  );
};