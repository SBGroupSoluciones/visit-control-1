import React, { useEffect, useState } from "react";
import {
  CRow,
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CLabel,
  CInput,
  CFormGroup,
  CSelect,
  CTextarea,
  CModalFooter,
} from "@coreui/react";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const IngressPersona = (props) => {
  const { setAppointmentData, show, visit } = props;

  const [visitData, setVisitData] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    if (visit) {
      console.log("LA visita seleccioanada", visit);
      const {
        id,
        dateTimestamp,
        checkInTimestamp,
        reason,
        status,
        adminApprove,
        operApprove,
        hostName,
        hostWarehouse,
        account,
        person,
        privateVehicle
      } = visit;
      const { firstName, lastName, email, phone, company } = person;
      const { role } = account;

      setVisitData({
        id: id,
        dateTimestamp: dateTimestamp,
        checkInTimestamp: checkInTimestamp,
        reason: reason,
        status: status,
        adminApprove: adminApprove,
        operApprove: operApprove,
        hostName: hostName,
        hostWarehouse: hostWarehouse,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        company: company,
        brand:privateVehicle? privateVehicle:null,
        color:privateVehicle?privateVehicle:null,
        model:privateVehicle?privateVehicle:null,
        plate:privateVehicle?privateVehicle:null,
        subBrand:privateVehicle? privateVehicle:null,
      });

      setRole(role);
    }
  }, [visit]);

  const v = {
    id: "1aab4381-ed36-438a-8e35-efd5072d28d4",
    dateTimestamp: "2021-10-20T10:00:00",
    checkInTimestamp: null,
    checkOutTimestamp: null,
    reason: "Prueba",
    status: "SCHEDULED",
    qr: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiYW9qZWRhQHNiZ3JvdXAuY29tLm14IiwiZW1haWwiOiJzZ2F5dGFuQHNiZ3JvdXAuY29tLm14In0.kU9HAwqEpREikmlNcPHF_wVepoagZersvuw5Dc_RJao",
    timestamp: "",
    adminApprove: false,
    operApprove: false,
    type: "PERSON",
    createdAt: "2021-10-05T16:59:31.840Z",
    updatedAt: "2021-10-05T16:59:31.840Z",
    account: {
      id: "afcf58da-291f-4d10-adb3-d409dff374b8",
      firstName: "Angel de Jesus",
      lastName: "Ojeda Castro",
      imgUrl: null,
      company: "SBGroup",
      email: "aojeda@sbgroup.com.mx",
      role: "SUPER_ADMIN",
      phones: ["6122308184"],
      createdAt: "2021-09-14T19:11:56.090Z",
      updatedAt: "2021-09-14T19:11:56.090Z",
      owner: null,
    },
    owner: null,
    person: {
      id: "dddb6423-42be-473d-a652-301af84afed3",
      firstName: "Susana",
      lastName: "Gaytan",
      email: "sgaytan@sbgroup.com.mx",
      imgUrl: "Screenshot from 2021-06-10 13-00-56.png",
      phone: "5577638496",
      company: "SBGroup",
      idFrontPath: "Screenshot from 2021-06-11 10-59-22.png",
      idBackPath: "Screenshot from 2021-06-16 08-16-14.png",
      createdAt: "2021-10-05T16:59:31.234Z",
      updatedAt: "2021-10-05T16:59:31.234Z",
      owner: null,
    },
    privateVehicle: null,
    cargoVehicle: null,
    host: {
      id: "649db2be-db2c-4384-8570-e41e93919975",
      createdAt: "2021-09-15T13:27:38.260Z",
      updatedAt: "2021-09-15T13:27:38.260Z",
      owner: null,
    },
    hostName: "Prescott Errichiello",
    hostWarehouse: "ARBRUS",
  };

  return (
    <>
      <CModal color="success" show={show} size="lg">
        <CModalHeader closeButton>
          <p className="h4">Confirmar Cita</p>
        </CModalHeader>
        <CModalBody>
          {visitData ? (
            <CRow>
              <CCol xs="12" md="12">
                <CRow>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Nombre</CLabel>
                      <div>
                        <CInput
                          id="firstName"
                          placeholder=""
                          disabled
                          required
                          value={visitData.firstName}
                        />
                      </div>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="lastName">Apellido</CLabel>
                      <CInput
                        id="lastName"
                        placeholder=""
                        disabled
                        required
                        value={visitData.lastName}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="email">Correo</CLabel>
                      <CInput
                        id="email"
                        placeholder=""
                        disabled
                        required
                        value={visitData.email}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Empresa</CLabel>
                      <CInput
                        id="firstName"
                        placeholder=""
                        disabled
                        required
                        value={visitData.company}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="phone">Telefono</CLabel>
                      <CInput
                        id="phone"
                        placeholder=""
                        disabled
                        required
                        value={visitData.phone}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  {/* <CCol xs="12" md="3">
                  <CFormGroup>
                    <CLabel htmlFor="firstName">Vechículo</CLabel>
                    <CSelect
                      custom
                      name="select"
                      id="select"
                      onChange={(e) => {
                        onVehicleSelect(e.target.value);
                      }}
                    >
                      <option value="none">Ninguno</option>
                      <option value="new">Añadir nuevo</option>
                      {vehicleList
                        ? vehicleList.map((x, y) => (
                            <option key={y}>{x.plate}</option>
                          ))
                        : null}
                    </CSelect>
                  </CFormGroup>
                </CCol> */}
                  <CCol xs="12" md="6">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Motivo de la visita</CLabel>
                      <CTextarea
                        name="textarea-input"
                        id="textarea-input"
                        rows="1"
                        disabled
                        required
                        value={visitData.reason}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Recinto</CLabel>
                      <CInput
                        id="lastName"
                        placeholder=""
                        disabled
                        required
                        value={visitData.hostWarehouse}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Anfitrión</CLabel>
                      <CInput
                        id="lastName"
                        placeholder=""
                        disabled
                        required
                        value={visitData.hostName}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="date-input">Fecha</CLabel>
                      <CInput
                        type="text"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                        value={moment(visitData.dateTimestamp).format(
                          "DD-MMM-YYYY"
                        )}
                        // min={moment().format("YYYY-MM-DD")}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Hora</CLabel>
                      <CInput
                        id="lastName"
                        placeholder=""
                        disabled
                        required
                        value={moment(visitData.dateTimestamp).format("h:mm a")}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCol>
              <hr />
              <CCol xs="12" md="12">
                <CLabel htmlFor="firstName">Datos del Vehiculo</CLabel>
                <CRow>
                  <CCol xs="12" md="3">
                    <CFormGroup>
                      <CLabel htmlFor="firstName">Hora</CLabel>
                      <CInput
                        id="lastName"
                        placeholder=""
                        disabled
                        required
                        value={moment(visitData.dateTimestamp).format("h:mm a")}
                        required
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          ) : null}
        </CModalBody>
        <CModalFooter></CModalFooter>
      </CModal>
    </>
  );
};

export default IngressPersona;
