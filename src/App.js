import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./scss/style.scss";
import Amplify, { Hub } from "aws-amplify";
import awsconfig from "./aws-exports";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const SignUp = React.lazy(() => import("./views/Auth/SignUp"));
const SignIn = React.lazy(() => import("./views/Auth/SignIn"));
const Verify = React.lazy(() => import("./views/Auth/Verify"));
const Forgot = React.lazy(() => import("./views/Auth/ForgotPass"));
const Guest = React.lazy(() => import("./views/Auth/Guest"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const Change = React.lazy(() => import("./views/Auth/VerifyForgotPass"));

Amplify.configure(awsconfig);

const App = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUSer] = useState();

  // const assessLoggedInState = () => {
  //   Auth.currentAuthenticatedUser()
  //     .then((sess) => {
  //       console.log("logged in");
  //       setLoggedIn(true);
  //     })
  //     .catch((err) => {
  //       console.log("not logged in because ", err);
  //       setLoggedIn(false);
  //     });
  // };

  useEffect(() => {
    // assessLoggedInState();
    // Hub.listen("auth", (event) => {
    //   console.log("auth event ", event);
    //   setCurrentUSer(event.payload.data);
    // });
  }, [currentUser]);

  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/verify"
            name="Verify Account Page"
            render={(props) => <Verify {...props} />}
          />
          <Route
            exact
            path="/signup"
            name="Signup Page"
            render={(props) => <SignUp {...props} />}
          />
          <Route
            exact
            path="/signin"
            name="Signin Page"
            render={(props) => <SignIn loggedIn = {setCurrentUSer} />}
          />
          <Route
            exact
            path="/guest"
            name="Guest Page"
            render={(props) => <Guest {...props} />}
          />
          <Route
            exact
            path="/forgot"
            name="Forgot Pass Page"
            render={(props) => <Forgot {...props} />}
          />
          <Route
            exact
            path="/changepass"
            name="Change Pass Page"
            render={(props) => <Change {...props} />}
          />

          <Route
            path="/"
            render={(props) =>
              currentUser ? <TheLayout {...props} /> : <Redirect to="/signin" />
            }
          />
          {/* <Route exact path="/" name="Authentication" render={(props) => <Authentication {...props} />}/> */}
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
          {/* <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
