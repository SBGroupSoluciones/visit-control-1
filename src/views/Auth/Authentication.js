import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import Confirm from "./Verify";
import SignUp from "./SignUp";
import Notification from "./Notification";
import SignIn from "./SignIn";

Auth.configure(awsconfig);

const Authentication = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [code, setCode] = useState();
  const [notification, setNotification] = useState(false);
  const [notifTitle, setNotifTitle] = useState();
  const [notifBody, setNotifBody] = useState();

  useEffect(() => {}, [
    email,
    password,
    firstName,
    lastName,
    company,
    phone,
    code,
    notification,
    notifTitle,
    notifBody,
  ]);

  const signUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
        },
      });
      console.log("EL USUARIO ", user);
    } catch (error) {
      errorHandler(error.code);
      console.log("error signing up:", error, error.code);
    }
  };

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, code);
    } catch (error) {
      errorHandler(error.code);
      console.log("error confirming sign up", error);
    }
  }

  async function signIn() {
    try {
      console.log("email: ", email, " pass: ", password);
      const user = await Auth.signIn(email, password);
      console.log(user);
    } catch (error) {
      // errorHandler(error.code);
      console.log("error signing in", error.code);
    }
  }

  const errorHandler = (code) => {
    switch (code) {
      // -Correo ya registrado
      // -contraseña no cumple con patron (mayusculas minusculas y numeros)
      // -codigo de verificacion incorrecto(momento de verificar correo)
      // -usuario no a verificado su cuenta
      // -contraseña incorrecta
      // -cuenta inexistente
      case "UsernameExistsException":
        setNotifTitle("Intenta de nuevo");
        setNotifBody("El correo que ingresaste ya existe");
        setNotification(!notification);
        break;

      case "ExpiredCodeException":
        setNotifTitle("Intenta de nuevo");
        setNotifBody("Codigo de verificacion incorrecto, ingreselo de nuevo.");
        setNotification(!notification);
        break;

      case "UserNotConfirmedException":
        setNotifTitle("Intenta de nuevo");
        setNotifBody("Codigo de verificacion incorrecto, ingreselo de nuevo.");
        setNotification(!notification);
        break;

      case "NotAuthorizedException":
        setNotifTitle("Intenta de nuevo");
        setNotifBody("Contraseña incorrecta.");
        setNotification(!notification);
        break;

      case "UserNotFoundException":
        setNotifTitle("Intenta de nuevo");
        setNotifBody("El Usuario no existe.");
        setNotification(!notification);
        break;

      default:
        break;
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      {/* <Signup
        setEmail={setEmail}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPassword={setPassword}
        setCompany={setCompany}
        setPhone={setPhone}
        onSignUp={signUp}
      /> */}
      {notification ? (
        <Notification
          title={notifTitle}
          body={notifBody}
          activated={notification}
          setNotification={setNotification}
        />
      ) : null}
      {/* <Confirm
        setCode={setCode}
        email={email}
        onConfirmSignUp={confirmSignUp}
      /> */}
      <SignIn setEmail={setEmail} setPassword={setPassword} onSignIn={signIn} />
    </div>
  );
};

export default Authentication;
