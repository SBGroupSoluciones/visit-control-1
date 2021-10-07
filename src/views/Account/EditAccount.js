import React, { useState, useEffect } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CLabel,
  CForm,
  CInput,
  CInvalidFeedback,
  CSelect,
} from "@coreui/react";
import {
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidCompanyName,
  isValidPhoneNumber,
} from "../Auth/utils";
import { set } from "core-js/core/dict";

const EditAccount = (props) => {
  const { show, account, showHandler } = props;

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [role, setRole] = useState();
  const [firstNameValid, setFirstNameValid] = useState();
  const [lastNameValid, setLastNameValid] = useState();
  const [emailValid, setEmailValid] = useState();
  const [companyValid, setCompanyValid] = useState();
  const [phoneValid, setPhoneValid] = useState();

  useEffect(() => {
    const { firstName, lastName, email, company, phones, role } = account;

    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setCompany(company);
    setPhone(phones[0]);
    setRole(role);
  }, []);

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

  const toggle = (e) => {
    showHandler(!show);
  };

  return (
    <CModal color="success" show={show} size="lg">
      <CModalHeader closeButton>
        <p className="h4">Editar Cuenta</p>
      </CModalHeader>
      <CModalBody>
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
                disabled
              />
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
                <option value="AUTHORITY">Autoridad</option>
                {/* <option value="SUPER_ADMIN"></option> */}
              </CSelect>
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={(e) => toggle(e)}>
          Cancelar
        </CButton>
        <CButton color="success" onClick={(e) => toggle(e)}>
          Guardar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default EditAccount;
