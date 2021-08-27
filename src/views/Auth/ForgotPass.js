import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInvalidFeedback,
  CRow,
  CImg,
} from "@coreui/react";
import { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import AuthErrorsNotification from "./AuthErrorsNotification";
import { isValidEmail } from "./utils";

Auth.configure(awsconfig);

const ForgotPass = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const [error, setError] = useState();
  const [notify, setNotify] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  useEffect(() => {
    setEmail(localStorage.getItem("user"));
  }, []);

  const onEmailValidation = (email) => {
    setEmailValid(isValidEmail(email));
    setEmail(email);
  };

  const onConfirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, code);
      // history.push("/");
      history.push({
        pathname: "/changepass",
        data: email,
      });
    } catch (e) {
      setError(e.code);
      setNotify(true);
    }
  };

  const onValidateEmail = () => {
    Auth.forgotPassword(email)
      .then((data) => {
        history.push({
          pathname: "/changepass",
          data: { email: email },
        });
        console.log("LADATAES ", data);
      })
      .catch((err) => console.log("ERROR", err));
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <AuthErrorsNotification
        show={notify}
        code={error}
        setNotify={setNotify}
      />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="4" lg="4" xl="4">
            <CCard className="mx-4">
              <CCardHeader className="p-4">
                <div class="text-center">
                  <CImg
                    src={"logos/SBG.png"}
                    className="img-fluid"
                    alt="https://sbgroup.com.mx"
                  />
                </div>
              </CCardHeader>
              <CCardBody className="p-4">
                <CForm>
                  <p className="">Recuperar contraseña</p>
                  <p className="text-muted">Ingresa tu correo eletronico:</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Correo Electrónico"
                      onChange={(e) => {
                        onEmailValidation(e.target.value);
                      }}
                      valid={emailValid}
                      invalid={!emailValid && email}
                    />
                    <CInvalidFeedback>
                      Introduzca una dirección de correo electrónico válida
                    </CInvalidFeedback>
                  </CInputGroup>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CButton
                  color="success"
                  block
                  onClick={(e) => onValidateEmail()}
                  disabled={!emailValid }
                >
                  Aceptar
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ForgotPass;
