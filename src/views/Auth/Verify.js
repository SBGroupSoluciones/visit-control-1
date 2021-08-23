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
  CRow,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
import AuthErrorsNotification from "./AuthErrorsNotification";

Auth.configure(awsconfig);

const Verify = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const [error, setError] = useState();
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    setEmail(localStorage.getItem("user"));
  }, [email, code]);

  const onConfirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, code);
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
                  <p className="">Confirmar Cuenta</p>
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
                        setCode(e.target.value);
                      }}
                    />
                  </CInputGroup>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CButton
                  color="success"
                  block
                  onClick={(e) => onConfirmSignUp()}
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
