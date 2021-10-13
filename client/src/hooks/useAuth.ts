import { useState, useEffect } from "react";
import { Auth } from "../constants/interfaces";
import { checkUser } from "../helpers/api";
export const useAuth = () => {
  const [user, setUser] = useState<Auth>({});
  useEffect(() => {
    checkForUser();
  }, []);
  const checkForUser = async () => {
    let req;
    try {
      req = await checkUser();
      setUser({ user: req, isAuth: true });
    } catch (error) {
      console.log("useAuthError", error);
    }
  };
  return [user, checkForUser] as const;
};
