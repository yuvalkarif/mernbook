import { useState, useEffect } from "react";
import { Auth } from "../constants/interfaces";
import { checkUser } from "../helpers/api";
export const useAuth = () => {
  const [auth, setAuth] = useState<Auth>({});
  useEffect(() => {
    if (!auth.isAuth) {
      checkForUser();
    }
  }, [auth]);
  const checkForUser = async () => {
    let req;
    try {
      req = await checkUser();
      setAuth({ user: req, isAuth: true });
    } catch (error) {
      setAuth({ isAuth: false });
      console.log(error);
    }
  };
  return [auth, checkForUser, setAuth] as const;
};
