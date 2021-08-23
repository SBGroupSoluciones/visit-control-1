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

const Guest = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [disabledButton, setDisabledButton] = useState(true);

  const onGuest = () => {
    const guestData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      company: company,
      phone: phone,
    };
    localStorage.setItem("guest", JSON.stringify(guestData));
    history.push("/");
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="4" lg="4" xl="4">
            <CCard className="mx-4">
              <CCardHeader>
                <CImg
                  src={"logos/SBG.png"}
                  className="img-fluid"
                  alt="https://sbgroup.com.mx"
                />
              </CCardHeader>
              <CCardBody className="p-4">
                <CForm>
                  <p className="text-muted">Registrarse como visitanste</p>
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
                      autoComplete="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
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
                      type="tel"
                      placeholder="Teléfono"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      autoComplete="phone"
                    />
                  </CInputGroup>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CButton color="success" block onClick={(e) => onGuest()}>
                  Ingresar
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Guest;
