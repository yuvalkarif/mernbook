import React, { useEffect, useState } from "react";
import { ProfileHeader } from "./ProfileHeader";
import { useFetchUser } from "../../hooks/useFetchUser";

export const Profile: React.FC = () => {
  const id = "615ef566e9be20f1898e44ax";
  const [error, user, setFetchUser] = useFetchUser();
  useEffect(() => {
    if (id) {
      setFetchUser(id);
    }
  }, [id]);
  return (
    <>
      <h1>Profile</h1>
      {error && <p>Error {error}</p>}
      {user && <p>User fetched</p>}
      <ProfileHeader />
    </>
  );
};
