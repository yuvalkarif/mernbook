import React from "react";
import * as styled from "./Login.styles";

export const Login: React.FC = () => {
  return (
    <>
      <styled.Wrapper>
        <styled.Container>
          <div>
            <h1>Mernbook</h1>
            <p>Connect with friends and the web around you on Mernbook.</p>
          </div>
          <styled.Main className="Main">
            <form>
              <input type="text" id="username" placeholder="Username"></input>
              <input
                type="password"
                id="password"
                placeholder="Password"
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
