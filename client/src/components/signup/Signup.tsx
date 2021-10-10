import React from "react";
import * as styled from "./Signup.styles";

export const Signup: React.FC = () => {
  return (
    <>
      <styled.Wrapper>
        <styled.Container>
          <styled.Main className="Main">
            <div>
              <h2>Create a new Account</h2>
              <p> it's quick and easy.</p>
            </div>

            <form>
              <input type="text" id="username" placeholder="Username"></input>
              <input
                type="text"
                id="displayname"
                placeholder="Display Name (will be shown to others)"
              ></input>
              <input
                type="password"
                id="password"
                placeholder="Password"
              ></input>
              <styled.AccentButton type="submit">Sign Up</styled.AccentButton>
            </form>
            <styled.AltAccentButton type="button">
              Already have an account?
            </styled.AltAccentButton>
          </styled.Main>
        </styled.Container>
      </styled.Wrapper>
    </>
  );
};
