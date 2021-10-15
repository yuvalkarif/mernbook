import { useState } from "react";
import { User } from "../constants/interfaces";
import { getUser } from "../helpers/api";

export const useFetchUser = () => {
  const [user, setUser] = useState<User | undefined>();
  const [error, setError] = useState<Boolean | undefined>(false);
  const setFetchUser = async (id: string) => {
    try {
      let fetchedUser = await getUser(id);
      if (fetchedUser) {
        setUser(fetchedUser);
      }
    } catch (error) {
      setError(true);
    }
  };

  return [user, setFetchUser, error] as const;
};
