import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import {
  CContainer,
  CRow,
  CBadge,
  CDataTable,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CImg,
  CForm,
  CLabel,
  CInput,
  CInputFile,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInvalidFeedback,
  CFormGroup,
  CSelect,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
  CTextarea,
  CButton,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
import CIcon from "@coreui/icons-react";
import usersData from "../users/UsersData";
import CarbonDatePicker from "react-carbon-datepicker";
import Notification from "../custom/Notification";
import PersonalVehicle from "../Appointment/PersonalVehicle";
import {
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidCompanyName,
  isValidPhoneNumber,
} from "../Auth/utils";
import { accountCreate, GetAccount } from "../Auth/Account";

const CreateAccount = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [role, setRole] = useState("USER");
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

  useEffect(() => {}, []);

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

  const onCompanyValidation = (company) => {
    setCompanyValid(isValidCompanyName(company) && company);
    setCompany(company);
  };

  const onPhoneValidation = (phone) => {
    setPhoneValid(isValidPhoneNumber(phone));
    setPhone(phone);
  };

  const onCreateAccount = async () => {
    const accountData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      company: company,
      phone: phone,
      role: role,
    };
    onRetriveAccount(accountData)
      .then((account) => {
        console.log(account);
        // localStorage.setItem("account", account.email);
        history.push({
          pathname: "/account/list",
        });
      })
      .catch((e) => {
        console.log("==ERROR== al crear cuenta ", e);
      });
  };

  const onRetriveAccount = async (accountData) => {
    return GetAccount(email).then((account) => {
      if (!account) {
        return accountCreate(accountData).then((newAccount) => {
          return newAccount;
        });
      } else {
        return account;
      }
    });
  };

  return (
    <>
      <Notification show={false} />
      <CRow>
        <CCol md="6">
          <CCard accentColor="success">
            <CCardHeader>Crear Cuenta</CCardHeader>
            <CCardBody>
              <CForm>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName" className="ln-top">
                      Nombre
                    </CLabel>
                    <CInput
                      type="text"
                      autoComplete="firstName"
                      value={firstName ? firstName : null}
                      onChange={(e) => {
                        onFirstNameValidation(e.target.value);
                      }}
                      valid={firstNameValid}
                      invalid={!firstNameValid && firstName}
                    />
                  </CCol>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="lastName" className="ln-top">
                      Apellido
                    </CLabel>
                    <CInput
                      type="text"
                      autoComplete="lastName"
                      value={lastName ? lastName : null}
                      onChange={(e) => {
                        onLastNameValidation(e.target.value);
                      }}
                      valid={lastNameValid}
                      invalid={!lastNameValid && lastName}
                    />
                  </CCol>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName" className="ln-top">
                      Correo
                    </CLabel>
                    <CInput
                      type="text"
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
                  </CCol>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName" className="ln-top">
                      Empresa
                    </CLabel>
                    <CInput
                      type="text"
                      autoComplete="company"
                      value={company ? company : null}
                      onChange={(e) => {
                        onCompanyValidation(e.target.value);
                      }}
                      valid={companyValid}
                      invalid={!companyValid && company}
                    />
                  </CCol>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName" className="ln-top">
                      Teléfono
                    </CLabel>
                    <CInput
                      type="text"
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
                  </CCol>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="role" className="ln-top">
                      Rol
                    </CLabel>
                    <CSelect
                      custom
                      name="select"
                      id="role"
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    >
                      <option value="USER">Usuario</option>
                      <option value="HOST">Anfitrión</option>
                      <option value="OPERATOR">Operador</option>
                      <option value="ADMIN">Administrador</option>
                      {/* <option value="SUPER_ADMIN"></option> */}
                    </CSelect>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                color="success"
                onClick={(e) => onCreateAccount()}
                disabled={
                  !(
                    firstNameValid &&
                    lastNameValid &&
                    emailValid &&
                    companyValid &&
                    phoneValid
                  )
                }
              >
                Crear Cuenta
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default CreateAccount;
