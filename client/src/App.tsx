import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { lazily } from "react-lazily";
import { User } from "./constants/interfaces";
import "./App.css";
import { checkUser } from "./helpers/api";
import { useAuth } from "./hooks/useAuth";
import UserContext from "./constants/context";
import ProtectedRoute from "./components/routes/ProtectedRoute";

// import Login from "./components/login/Login";
const { Login } = lazily(() => import("./components/login/Login"));
const { Signup } = lazily(() => import("./components/signup/Signup"));
const { Profile } = lazily(() => import("./components/profile/Profile"));
const { Dashboard } = lazily(() => import("./components/dashboard/Dashboard"));

function App() {
  const [user, checkForUser] = useAuth();

  return (
    <>
      <UserContext.Provider value={user}>
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <ProtectedRoute path={"/"} exact>
                <Dashboard />
              </ProtectedRoute>
              <ProtectedRoute path={"/p/:username"} exact>
                <Profile />
              </ProtectedRoute>
              <ProtectedRoute path="/login" exact alt>
                <Login checkForUser={checkForUser} />
              </ProtectedRoute>
              <Route path="/signup" exact>
                <Signup />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
