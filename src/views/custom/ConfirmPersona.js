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
  CContainer,
  CImg,
} from "@coreui/react";
import QRCode from "react-qr-code";

const ConfirmPersona = (props) => {
  const {
    title,
    body,
    buttonText,
    secundaryButton,
    show,
    setNotification,
    setPressedButton,
    setPersonaConfirm,
  } = props;

  const qrCode = {
    recinto: {
      id: "",
      name: "",
      address: "",
      phone: "",
      lat: "",
      lon: "",
    },
  };

  const appointment = {
    firstName: "Angel",
    lastName: "Ojeda",
    email: "aojeda@sbgroup.com.mx",
    company: "SBGroup",
    reason: "Visita al recinto",
    phone: "6122308184",
    vehicle: "SKD-1234",
    warehouse: "Irapuato",
    host: "Marcela Rodriguez",
    date: "20/10/2021",
    time: "10:29",
    imgUrl: "",
    ineFUrl: "",
    ineBUrl: "",
  };

  const toggle = (e) => {
    setPressedButton(e.target.value);
    setPersonaConfirm(!show);
  };

  return (
    <CModal color="success" show={show} size="lg">
      <CModalHeader closeButton>
        <p className="h4">Confirmar cita</p>
      </CModalHeader>
      <CModalBody>
        <CRow>
          <CCol xs="12" md="6">
            <CContainer>
              <CRow>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="firstName">
                    <strong>Fecha y Hora</strong>
                  </CLabel>
                  <p className="h5">
                    {appointment.date + " " + appointment.time}
                  </p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="firstName">
                    <strong>Nombre</strong>
                  </CLabel>
                  <p className="h5">
                    {appointment.firstName + " " + appointment.lastName}
                  </p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="firstName">
                    <strong>Correo</strong>
                  </CLabel>
                  <p className="h5">{appointment.email}</p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="firstName">
                    <strong>Empresa</strong>
                  </CLabel>
                  <p className="h5">{appointment.company}</p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="firstName">
                    <strong>Teléfono</strong>
                  </CLabel>
                  <p className="h5">{appointment.phone}</p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="firstName">
                    <strong>Motivo</strong>
                  </CLabel>
                  <p className="h5">{appointment.reason}</p>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="firstName">
                    <strong>Anfitrión</strong>
                  </CLabel>
                  <p className="h5">{appointment.host}</p>
                </CCol>
              </CRow>
            </CContainer>
          </CCol>
          <CCol xs="12" md="6">
            <CContainer>
              <CRow>
                <CCol xs="12" md="6">
                  <CLabel htmlFor="firstName">
                    <strong>QR</strong>
                  </CLabel>
                  <p className="h5">
                    <QRCode
                      value={JSON.stringify(qrCode)}
                      level="L"
                      fgColor="#212121"
                      size="128"
                    />
                  </p>
                </CCol>
                <CCol xs="12" md="6">
                  <CLabel htmlFor="firstName">
                    <strong>Imagen</strong>
                  </CLabel>
                  <CImg
                    src="https://images.generated.photos/wTiSoFr_r3EULmE2aKYB0Xh7rzjjTtjkTetI4Q_An5c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMzYyMTgy/NTYtMGM3MC00ZTVi/LWFlZDQtZGUwYmEw/NzdjMGNjLmpwZw.jpg"
                    shape="rounded-circle"
                    thumbnail
                    className="mb-2"
                    align="right"
                    fluidGrow
                  />{" "}
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md="6">
                  <CLabel htmlFor="firstName">
                    <strong>INE Frente</strong>
                  </CLabel>
                  <CImg
                    src="https://images.generated.photos/wTiSoFr_r3EULmE2aKYB0Xh7rzjjTtjkTetI4Q_An5c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMzYyMTgy/NTYtMGM3MC00ZTVi/LWFlZDQtZGUwYmEw/NzdjMGNjLmpwZw.jpg"
                    shape="rounded"
                    thumbnail
                    className="mb-2"
                    align="right"
                    fluidGrow
                  />
                </CCol>
                <CCol xs="12" md="6">
                  <CLabel htmlFor="firstName">
                    <strong>INE Atras</strong>
                  </CLabel>
                  <CImg
                    src="https://images.generated.photos/wTiSoFr_r3EULmE2aKYB0Xh7rzjjTtjkTetI4Q_An5c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvMzYyMTgy/NTYtMGM3MC00ZTVi/LWFlZDQtZGUwYmEw/NzdjMGNjLmpwZw.jpg"
                    shape="rounded"
                    thumbnail
                    className="mb-2"
                    align="right"
                    fluidGrow
                  />
                </CCol>
              </CRow>
            </CContainer>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={(e) => toggle(e)}>
          Editar
        </CButton>
        <CButton color="success" onClick={(e) => toggle(e)}>
          Confirmar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ConfirmPersona;
