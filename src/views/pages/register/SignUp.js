import React from "react";
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

const SignUp = (props) => {
  const {
    setEmail,
    setPassword,
    setFirstName,
    setLastName,
    setCompany,
    setPhone,
    onSignUp,
  } = props;

  return (
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
                    autoComplete="username"
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
  );
};

export default SignUp;
