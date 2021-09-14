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
import Notification from "./Notification";
import PersonalVehicle from "./PersonalVehicle";
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
      // role: role,
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
            <CCardHeader>Crear Anfitrión</CCardHeader>
            <CCardBody>
              <CForm>
                <CRow>
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="role" className="ln-top">
                      Usuario
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
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="role" className="ln-top">
                      Recinto
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
                Añadir
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default CreateAccount;
