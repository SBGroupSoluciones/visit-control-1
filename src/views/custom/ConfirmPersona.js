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
import { S3Image, PhotoPicker } from "aws-amplify-react";
moment.locale("es");

const ConfirmPersona = (props) => {
  const { show, setPersonaConfirm, appointmentData } = props;
  const [appointment, setAppointment] = useState();
  useEffect(() => {
    if (appointmentData) {
      const {
        firstName,
        lastName,
        email,
        company,
        reason,
        vehicle,
        hostId,
        appointmentDate,
        appointmentHour,
        warehouse,
        image,
        imageUrl,
      } = appointmentData;
      const appointmentConfirmData = {
        type: "PERSON",
        firstName: firstName,
        lastName: lastName,
        email: email,
        company: company,
        reason: reason,
        phone: "1111111111",
        vehicle: vehicle ? vehicle : null,
        host: hostId,
        date: appointmentData.appointmentDate,
        time: appointmentHour,
        cDate: appointmentDate + "T" + appointmentHour,
        warehouse: warehouse,
        imgUrl: imageUrl,
        ineFUrl: "",
        ineBUrl: "",
      };
      setAppointment(appointmentConfirmData);
    }
    console.log("LACITA", appointmentData);
  }, [appointmentData, show]);

  const onEditButton = (e) => {
    setPersonaConfirm(!show);
  };

  const onConfirmData = () => {
    visitCreate(appointment);

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
                        value={JSON.stringify(appointment)}
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
                    <S3Image
                      imgKey={appointment.image}
                      onLoad={(url) => console.log(url)}
                    />
                    <PhotoPicker
                      onPick={(data) => console.log(data)}
                      preview
                      title="Seleccione una Imagen"
                      headerText="Foto"
                      headerHint="Añade tus fotos dando click al botón"
                      onLoad={(dataURL) => console.log(dataURL)}
                    />
                    <CImg
                      src={appointment.imageUrl}
                      shape="rounded-circle"
                      thumbnail
                      className="mb-2"
                      align="right"
                      fluidGrow
                    />
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
        <CButton color="success" onClick={(e) => onConfirmData(e)}>
          Confirmar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ConfirmPersona;
