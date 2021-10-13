import React, { useState } from "react";
import * as styled from "./Login.styles";
import { FormError } from "../styled/styledTheme";
import { login } from "../../helpers/api";
import { useError } from "../../hooks/useError";
import { Account } from "../../constants/interfaces";
import { useHistory } from "react-router";

export const Login = ({
  checkForUser,
}: {
  checkForUser: () => Promise<void>;
}) => {
  const [error, checkError] = useError();
  const history = useHistory();
  const [account, setAccount] = useState<Account>({
    username: "",
    password: "",
  });
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (account) {
      try {
        const checkLogin = await login(account);
        if (checkLogin) {
          console.log("Redirecting");
          await checkForUser();
          history.push("/");
        }
      } catch (e: unknown) {
        checkError(e);
      }
    }
  };
  return (
    <>
      <styled.Wrapper>
        <styled.Container>
          <div>
            <h1>Mernbook</h1>
            <p>Connect with friends and the web around you on Mernbook.</p>
          </div>
          <styled.Main className="Main">
            <form onSubmit={handleSubmit}>
              {error && <FormError>{error}</FormError>}
              <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={(e) =>
                  setAccount({ ...account, username: e.target.value })
                }
              ></input>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) =>
                  setAccount({ ...account, password: e.target.value })
                }
              ></input>
              <styled.AccentButton type="submit">Log In</styled.AccentButton>
              <styled.OutlineButton type="submit">
                Log In as Guest
              </styled.OutlineButton>
            </form>
            <styled.AltAccentButton type="button">
              Create New Account
            </styled.AltAccentButton>
          </styled.Main>
        </styled.Container>
      </styled.Wrapper>
    </>
  );
};
