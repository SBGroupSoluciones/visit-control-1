import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Auth, API } from "aws-amplify";
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
  CInvalidFeedback,
  CRow,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import AuthErrorsNotification from "./AuthErrorsNotification";
import Notification from "./Notification";
import { createAccount } from "../../graphql/mutations";
import {
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidPassword,
  isValidCompanyName,
  isValidPhoneNumber,
} from "./utils";

Auth.configure(awsconfig);

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState();
  const [notify, setNotify] = useState(false);
  const [showGuestData, setShowGuestData] = useState(false);
  const [notyButton, setNotyButton] = useState();
  const [guestData, setGuestData] = useState();
  const [passValid, setPassValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [companyValid, setCompanyValid] = useState(false);

  useEffect(() => {
    onPreviousDate();
  }, [error, notyButton]);

  const onSignUp = async () => {
    // ve()
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
      console.log("ELUSUARIO ", user);
    } catch (e) {
      console.log("ERROR ", e);
      setError(e.code);
      setNotify(true);
    }
  };

  const onFirstNameValidation = (firstName) => {
    setFirstNameValid(isValidFirstName(firstName) && firstName);
    setFirstName(firstName);
  };

  const onLastNameValidation = (lastName) => {
    setLastNameValid(isValidLastName(lastName) && lastName);
    setLastName(lastName);
  };

  const onEmailValidation = (email) => {
    setEmailValid(isValidEmail(email));
    setEmail(email);
  };

  const onPassValidation = (password) => {
    setPassValid(isValidPassword(password));
    setPassword(password);
  };

  const onCompanyValidation = (company) => {
    setCompanyValid(isValidCompanyName(company) && company);
    setCompany(company);
  };

  const onPhoneValidation = (phone) => {
    setPhoneValid(isValidPhoneNumber(phone));
    setPhone(phone);
  };

  const ve = async () => {
    const fileName = "product-image-1";
    // await Storage.put(fileName, file);
    const account = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      custom: { company: company, phone: phone },
    };

    const addedAccount = await API.graphql({
      query: createAccount,
      variables: { input: account },
    });

    console.log("LA CUENTA ", addedAccount);
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
                        onFirstNameValidation(e.target.value);
                      }}
                      valid={firstNameValid}
                      invalid={!firstNameValid && firstName}
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
                        onLastNameValidation(e.target.value);
                      }}
                      valid={lastNameValid}
                      invalid={!lastNameValid && lastName}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Correo electrónico"
                      autoComplete="username"
                      value={email ? email : null}
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
                        onCompanyValidation(e.target.value);
                      }}
                      valid={companyValid}
                      invalid={!companyValid && company}
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
                        onPhoneValidation(e.target.value);
                      }}
                      valid={phoneValid}
                      invalid={!phoneValid && phone}
                    />
                    <CInvalidFeedback>
                      Introduzca un numero de telefono valido
                    </CInvalidFeedback>
                  </CInputGroup>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CButton
                  color="success"
                  block
                  onClick={(e) => onSignUp()}
                  disabled={
                    !(
                      firstNameValid &&
                      lastNameValid &&
                      emailValid &&
                      passValid &&
                      companyValid &&
                      phoneValid
                    )
                  }
                >
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
