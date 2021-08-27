import React, { useEffect } from "react";
import Notification from "./Notification";

const AuthErrorsNotification = (props) => {
  const { code, email, setNotify, show } = props;
  const errors = [];

  useEffect(() => {onSetErrors()}, []);

  const onSetErrors = () => {
    errors["UsernameExistsException"] = {
      title: "Correo Invalido",
      body: `Ya existe una cuenta con la direccion de correo: ${email}`,
      primaryButton: "",
      secundaryButton: "",
    };
    errors["ExpiredCodeException"] = {
      title: "Contraseña Invalida",
      body: "La contraseña que has escrito no cumple los requisitos de complejidad. Asegurate de utilizar al menos una mayuscula, una minuscula y un número.",
      primaryButton: "",
      secundaryButton: "",
    };
    errors["UserNotConfirmedException"] = {
      title: "Codigo de verficación Invalido",
      body: "El codigo que has escrito es incorrecto.",
      primaryButton: "",
      secundaryButton: "Reenviar código",
    };
    errors["NotAuthorizedException"] = {
      title: "Contraseña Incorrecta",
      body: "Contraseña Incorrecta. Vuelva a intentarlo o selecciona ¿Olvidó su contraseña? para cambiarla.",
      primaryButton: "",
      secundaryButton: "",
    };
    errors["UserNotFoundException"] = {
      title: "Cuenta Inexistente",
      body: "No pudimos encontrar tu cuenta. Selecciona Crear una cuenta para obtener su cuenta o Entrar como visitante para acceder al sistema.",
      primaryButton: "",
      secundaryButton: "",
    };
  };

  return (
    <div>
      {!code ? null : (
        <Notification
          show={show}
          title={errors[code].title}
          body={errors[code].body}
          secundaryButton={errors[code].secundaryButton            }
          setNotification={setNotify}
          color="warning"
        />
      )}
    </div>
  );
};

export default AuthErrorsNotification;
