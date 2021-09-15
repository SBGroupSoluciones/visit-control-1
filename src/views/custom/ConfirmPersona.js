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
import moment from "moment";
import "moment/locale/es";
import { visitCreate } from "./Visit";
moment.locale("es");

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
    appointmentData,
  } = props;
  const [appointment, setAppointment] = useState();
  useEffect(() => {
    console.log("HORARIO MOMENT ", moment().format("YYYY-MM-DD")); // 2021-09-15T12:30:42-06:00);
    if (appointmentData) {
      const appointmentConfirmData = {
        type:"PERSON",
        firstName: appointmentData.firstName,
        lastName: appointmentData.lastName,
        email: appointmentData.email,
        company: appointmentData.company,
        reason: appointmentData.company,
        phone: "1111111111",
        vehicle: appointmentData.vehicle ? appointmentData.vehicle : null,
        host: appointmentData.hostId,
        date: appointmentData.appointmentDate,
        time: appointmentData.appointmentHour,
        cDate:
          appointmentData.appointmentDate +
          "T" +
          appointmentData.appointmentHour,
        warehouse: appointmentData.warehouse,
        imgUrl: appointmentData.image,
        ineFUrl: "",
        ineBUrl: "",
      };
      setAppointment(appointmentConfirmData);
    }
  }, [appointmentData]);

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

  const onEditButton = (e) => {
    setPersonaConfirm(!show);
  };

  const onConfirmData = () => {

    visitCreate(appointment)
    

    // setPressedButton(e.target.value);
    setPersonaConfirm(!show);
  };

  return (
    <CModal color="success" show={show} size="lg">
      <CModalHeader closeButton>
        <p className="h4">Confirmar cita</p>
      </CModalHeader>
      {appointment ? (
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
                      {moment(appointment.cDate).format("LLL a")}
                      {/* {appointment.date + " " + appointment.time} */}
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
                {/* <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Teléfono</strong>
                    </CLabel>
                    <p className="h5">{appointment.phone}</p>
                  </CCol>
                </CRow> */}
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
                      <strong>Recinto</strong>
                    </CLabel>
                    <p className="h5">{appointment.warehouse}</p>
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
                      src={appointment.image}
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
                      src={appointment.image}
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
                      src={appointment.image}
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
      ) : null}
      <CModalFooter>
        <CButton color="secondary" onClick={(e) => onEditButton(e)}>
          Editar
        </CButton>
        <CButton color="success" onClick={(e) => onConfirmData(e)}>Confirmar</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ConfirmPersona;
