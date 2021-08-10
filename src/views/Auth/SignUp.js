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
Auth.configure(awsconfig);

const SignUp = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {}, [email, password, firstName, lastName, company, phone,history]);

  const onSignUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
        },
      });
      console.log("EL USUARIO ", user);
      localStorage.setItem("user", email);
      history.push("/verify")
    } catch (error) {
      // errorHandler(error.code);
      console.log("error signing up:", error, error.code);
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
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
    </div>
  );
};

export default SignUp;
