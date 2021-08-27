import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
import CIcon from "@coreui/icons-react";
import { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import AuthErrorsNotification from "./AuthErrorsNotification";
import { isValidPassword, isValidVerificationCode } from "./utils";
import Notification from "./Notification";

Auth.configure(awsconfig);

const Verify = () => {
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const [error, setError] = useState();
  const [notify, setNotify] = useState(false);
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [passValid, setPassValid] = useState(false);
  const [codeValid, setCodeValid] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  const [pressedButton, setPressetButton] = useState();

  useEffect(() => {
    if (location.data) {
      setEmail(location.data.email);
    }
    if (pressedButton == "primary") {
      history.push("/");
    }
  }, [pressedButton]);

  const onPassValidation = (password) => {
    setPassValid(isValidPassword(password));
    setPassword(password);
  };
  const onCodeValidation = (code) => {
    setCodeValid(isValidVerificationCode(code));
    setCode(code);
  };

  const onChangePassword = () => {
    Auth.forgotPasswordSubmit(email, code, password)
      .then((data) => setSuccessShow(true))
      .catch((err) => setError(err.code));
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <AuthErrorsNotification
        show={notify}
        code={error}
        setNotify={setNotify}
      />
      <Notification
        show={successShow}
        title="Cambio de contraseña"
        body="Contraseña cambiada exitosamente"
        setNotification={setSuccessShow}
        setPressedButton={setPressetButton}
        color="primary"
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
                  <p className="">Cambiar contraseña</p>
                  <p className="text-muted">
                    Ingresa el código que se envió a tu correo: <br />
                    <br />
                    {email}
                  </p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Código"
                      onChange={(e) => {
                        onCodeValidation(e.target.value);
                      }}
                      valid={codeValid}
                      invalid={!codeValid && code}
                    />
                    <CInvalidFeedback>
                      El código debe tener 6 digitos
                    </CInvalidFeedback>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Contraseña nueva"
                      autoComplete="new-password"
                      onChange={(e) => {
                        onPassValidation(e.target.value);
                      }}
                      valid={passValid}
                      invalid={!passValid && password}
                    />
                    <CInvalidFeedback>
                      La contraseña debe contener:
                      <ul>
                        <li>8 caracteres como mínimo.</li>
                        <li>Mayúsculas y minúsculas.</li>
                        <li>Números.</li>
                      </ul>
                    </CInvalidFeedback>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Repetir contraseña"
                      autoComplete="new-password"
                      onChange={(e) => {
                        setRepeatPassword(e.target.value);
                      }}
                      invalid={
                        password != repeatPassword && password && repeatPassword
                      }
                      valid={
                        password == repeatPassword && password && repeatPassword
                      }
                    />
                    <CInvalidFeedback>
                      Las contraseñas no coinciden
                    </CInvalidFeedback>
                  </CInputGroup>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CButton
                  color="success"
                  block
                  onClick={(e) => onChangePassword()}
                  disabled={!(codeValid && passValid && repeatPassword)}
                >
                  Confirmar
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Verify;
