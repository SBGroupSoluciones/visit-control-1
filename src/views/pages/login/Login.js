import React from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
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

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="4">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <CImg
                      src={"logos/SBG.png"}
                      className="img-fluid"
                      alt="https://sbgroup.com.mx"
                    />
                    <p className="text-muted">Iniciar Sesión</p>
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
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4">
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
                      <Link to="/register">
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
              {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Registro</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquid! Qui maiores aliquid facilis rerum, rem provident officiis accusantium quasi! Quas doloribus officia totam impedit dignissimos minus velit ad perspiciatis.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Crear Cuenta</CButton>
                    </Link>
                    <Link to="/guest">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Ingresar como invitado</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
