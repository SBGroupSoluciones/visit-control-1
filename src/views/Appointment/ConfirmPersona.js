import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import { visitCreate } from "../custom/Visit";
import { S3Image, PhotoPicker } from "aws-amplify-react";
import { jwtEncode } from "src/util/Utils";
import { personCreate } from "src/util/Persona";
moment.locale("es");

const ConfirmPersona = (props) => {
  const { show, setPersonaConfirm, appointmentData } = props;
  const history = useHistory();
  const [appointment, setAppointment] = useState();
  const [qrJson, setQrJson] = useState();
  useEffect(() => {
    if (appointmentData) {
      const {
        firstName,
        lastName,
        email,
        phone,
        company,
        reason,
        plate,
        appointmentDate,
        appointmentHour,
        host,
        imageName,
        ineFrontName,
        ineBackName,
      } = appointmentData;
      const appointmentConfirmData = {
        type: "PERSON",
        firstName: firstName,
        lastName: lastName,
        email: email,
        company: company,
        reason: reason,
        phone: phone,
        plate: plate ? plate : null,
        host: host,
        date: appointmentDate,
        time: appointmentHour,
        cDate: `${appointmentDate}T${appointmentHour}`,
        imgUrl: imageName,
        ineFUrl: ineFrontName,
        ineBUrl: ineBackName,
      };
      setAppointment(appointmentConfirmData);
      setQrJson(
        jwtEncode({
          account: localStorage.getItem("account"),
          email: appointmentData.email,
          date: appointmentData.cDate,
        })
      );
    }
  }, [appointmentData, show]);

  const onEditButton = (e) => {
    setPersonaConfirm(!show);
  };

  const onConfirmData = () => {
    const personaData = {
      persona: {
        firstName: appointment.firstName,
        lastName: appointment.lastName,
        email: appointment.email,
        imgUrl: appointment.imgUrl,
        phone: appointment.phone,
        company: appointment.company,
        idFrontPath: appointment.ineFUrl,
        idBackPath: appointment.ineBUrl,
        personAccountId: localStorage.getItem("account"),
      },
    };
    personCreate(personaData).then((createdPerson) => {
      console.log("Se creo la persona ", createdPerson);
      const visit = {
        reason: appointment.reason,
        dateTimestamp: appointment.cDate,
        status: "SCHEDULED",
        qr: qrJson,
        timestamp: "",
        adminApprove: false,
        operApprove: false,
        type: "PERSON",
        visitHostId: appointment.host.id,
        visitAccountId: localStorage.getItem("account"),
        visitPersonId: createdPerson.id,
        visitPrivateVehicleId: appointment.plate ? appointment.plate : null,
      };
      visitCreate(visit).then((visitCreated) => {
        console.log("VISiTA CREADA", visitCreated);
        history.push("/appointment/list")
      });
    });

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
                      {`${appointment.firstName} ${appointment.lastName}`}
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
                {appointment.plate ? (
                  <CRow>
                    <CCol xs="12" md="12">
                      <CLabel htmlFor="firstName">
                        <strong>Vehiculo Personal</strong>
                      </CLabel>
                      <p className="h5">{appointment.plate}</p>
                    </CCol>
                  </CRow>
                ) : null}
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Recinto</strong>
                    </CLabel>
                    <p className="h5">{appointment.host.warehouse.name}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="firstName">
                      <strong>Anfitrión</strong>
                    </CLabel>
                    <p className="h5">{`${appointment.host.hostName.firstName} ${appointment.host.hostName.lastName}`}</p>
                  </CCol>
                </CRow>
              </CContainer>
            </CCol>
            <CCol xs="12" md="6">
              <CContainer>
                <CRow>
                  {/* <CCol xs="12" md="6">
                    <CLabel htmlFor="firstName">
                      <strong>QR</strong>
                    </CLabel>
                    <p className="h5">
                      <QRCode
                        value={JSON.stringify(qrJson)}
                        level="L"
                        fgColor="#212121"
                        size="128"
                      />
                    </p>
                  </CCol> */}
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="firstName">
                      <strong>Imagen</strong>
                    </CLabel>
                    <S3Image
                      imgKey={appointment.imageUrl}
                      onLoad={(url) => console.log(url)}
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="firstName">
                      <strong>INE Frente</strong>
                    </CLabel>
                    <S3Image
                      imgKey={appointment.ineFUrl}
                      onLoad={(url) => console.log(url)}
                    />
                  </CCol>
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="firstName">
                      <strong>INE Atras</strong>
                    </CLabel>
                    <S3Image
                      imgKey={appointment.ineBUrl}
                      onLoad={(url) => console.log(url)}
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
