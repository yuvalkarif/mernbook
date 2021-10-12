import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { lazily } from "react-lazily";
import "./App.css";
// import Login from "./components/login/Login";
const { Login } = lazily(() => import("./components/login/Login"));
const { Signup } = lazily(() => import("./components/signup/Signup"));
const { Profile } = lazily(() => import("./components/profile/Profile"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/">
            <Profile />
            {/* <Signup />
            <Login /> */}
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
