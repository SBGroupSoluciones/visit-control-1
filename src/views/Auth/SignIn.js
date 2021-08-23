import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCardGroup,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import AuthErrorsNotification from "./AuthErrorsNotification";

Auth.configure(awsconfig);

const SignIn = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [notify, setNotify] = useState(false);

  useEffect(() => {}, [email, password, history]);

  const onSignIn = async () => {
    try {
      const user = await Auth.signIn(email, password);
      localStorage.setItem("jwt", user.signInUserSession.idToken.jwtToken);
      history.push("/");
    } catch (e) {
      setError(e.code);
      setNotify(true);
    }
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
          <CCol md="4">
            <CCardGroup>
              <CCard className="p-4">
                <CCardHeader>
                  <CImg
                    src={"logos/SBG.png"}
                    className="img-fluid"
                    alt="https://sbgroup.com.mx"
                  />
                </CCardHeader>
                <CCardBody>
                  <CForm>
                    <p className="">Iniciar Sesión</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Correo electrónico"
                        autoComplete="username"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Contraseña"
                        autoComplete=""
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={(e) => onSignIn()}
                        >
                          Ingresar
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          ¿Olvidó su contraseña?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
                <CCardFooter className="p-4">
                  <p className="text-muted">¿No tiene cuenta?</p>
                  <CRow>
                    <CCol xs="12" sm="6">
                      <Link to="/signup">
                        <CButton color="primary" className="mb-1" block>
                          <span>Crear Cuenta</span>
                        </CButton>
                      </Link>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <Link to="/guest">
                        <CButton color="primary" className="mb-1" block>
                          <span>Visitante</span>
                        </CButton>
                      </Link>
                    </CCol>
                  </CRow>
                </CCardFooter>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SignIn;
