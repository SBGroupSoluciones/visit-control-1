import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./scss/style.scss";
import { isLogin, isGuest } from "./utils";
import useToken from "./useToken";
import { withAuthenticator } from 'aws-amplify-react';

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
const Forgot = React.lazy(()=> import("./views/Auth/ForgotPass"));
const Guest = React.lazy(() => import("./views/Auth/Guest"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const Change = React.lazy(()=> import("./views/Auth/VerifyForgotPass"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
          <Route exact path="/verify" name="Verify Account Page" render={props => <Verify {...props}/>} />
          <Route exact path="/signup" name="Signup Page" render={props => <SignUp {...props}/>} />
          <Route exact path="/signin" name="Signin Page" render={props => <SignIn {...props}/>} />
          <Route exact path="/guest" name="Guest Page" render={props => <Guest {...props}/>} />
          <Route exact path="/forgot" name="Forgot Pass Page" render={props => <Forgot {...props}/>} />
          <Route exact path="/changepass" name="Change Pass Page" render={props => <Change {...props}/>} />


            <Route path="/" render={props => (
             !isLogin() ? <Redirect to="/signin" />:<TheLayout {...props}/>
            )} />
            {/* <Route exact path="/" name="Authentication" render={(props) => <Authentication {...props} />}/> */}
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
            {/* <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
