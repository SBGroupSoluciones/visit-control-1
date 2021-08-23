import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
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
import AuthErrorsNotification from "./AuthErrorsNotification";
import Notification from "./Notification";
Auth.configure(awsconfig);

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState();
  const [notify, setNotify] = useState(false);
  const [showGuestData, setShowGuestData] = useState(false);
  const [notyButton, setNotyButton] = useState();
  const [guestData, setGuestData] = useState();

  useEffect(() => {
    onPreviousDate();
  }, [error, notyButton]);

  const onSignUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
        },
      });
      localStorage.setItem("user", email);
      history.push("/verify");
    } catch (e) {
      setError(e.code);
      setNotify(true);
    }
  };

  const onPreviousDate = () => {
    if (localStorage.getItem("guest")) {
      setGuestData(localStorage.getItem("guest"));
      setShowGuestData(true);
      localStorage.removeItem("guest");
    }
    if (notyButton == "primary") {
      let guest = JSON.parse(guestData);
      setFirstName(guest.firstName);
      setLastName(guest.lastName);
      setEmail(guest.email);
      setCompany(guest.company);
      setPhone(guest.phone);
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <AuthErrorsNotification
        show={notify}
        code={error}
        email={email}
        setNotify={setNotify}
      />
      <Notification
        show={showGuestData}
        title="Datos de visitante"
        body="¿Desea utilizar los datos de visitante?"
        buttonText="Si"
        secundaryButton="No"
        setNotification={setShowGuestData}
        setPressedButton={setNotyButton}
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
                  <p className="text-muted">Crear cuenta</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Nombre"
                      autoComplete="firstName"
                      value={firstName ? firstName : null}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Apellido"
                      autoComplete="lastName"
                      value={lastName ? lastName : null}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Correo electrónico"
                      // autoComplete="email"
                      autoComplete="username"
                      value={email ? email : null}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Contraseña"
                      autoComplete="new-password"
                      onChange={(e) => {
                        setPassword(e.target.value);
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
                      placeholder="Repetir contraseña"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-building" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Empresa"
                      autoComplete="company"
                      value={company ? company : null}
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Teléfono"
                      autoComplete="phone"
                      value={phone ? phone : null}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </CInputGroup>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CButton color="success" block onClick={(e) => onSignUp()}>
                  Crear
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SignUp;
