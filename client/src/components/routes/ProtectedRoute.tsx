import { HTMLAttributes, useContext } from "react";
import UserContext from "../../constants/context";
import { Redirect, Route } from "react-router";
interface prProps extends HTMLAttributes<HTMLDivElement> {
  path?: string;
  exact?: true;
}

const ProtectedRoute = ({ children, ...rest }: prProps) => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user.isAuth === true) {
          console.log("Routed Successfully");
          return children;
        } else if (user.isAuth === false) {
          console.log("Routed Failed");
          return (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;
