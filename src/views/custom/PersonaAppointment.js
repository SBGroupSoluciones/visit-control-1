import React, { useEffect, useState, createRef } from "react";
import QRCode from "react-qr-code";
import classNames from "classnames";
import {
  CContainer,
  CRow,
  CBadge,
  CDataTable,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CImg,
  CForm,
  CLabel,
  CInput,
  CInputFile,
  CFormGroup,
  CSelect,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
  CTextarea,
  CButton,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
import CIcon from "@coreui/icons-react";
import usersData from "../users/UsersData";
import CarbonDatePicker from "react-carbon-datepicker";
import Notification from "./Notification";
import PersonalVehicle from "./PersonalVehicle";

const PersonaAppointment = () => {
  const [personAlready, setPersonAlready] = useState(false);
  const [active, setActive] = useState(0);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [reason, setReason] = useState();
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentHour, setAppointmentHour] = useState();
  const [hostId, setHostId] = useState();
  const [newVehicle, setNewVehicle] = useState(false);

  let qrCode = {
    recinto: {
      id: "",
      name: "",
      address: "",
      phone: "",
      lat: "",
      lon: "",
    },
  };

  const changeHandler = (e) => {
    console.log(e);
    if (e == "new") {
      setPersonAlready(false);
    }
  };

  useEffect(() => {}, [personAlready]);

  const onVehicleSelect = (e) => {
    console.log("data", e);
    if (e == "new") {
      setNewVehicle(true);
    }
  };
  return (
    <>
      <div className="custom-separation"></div>
      <CRow>
        <CCol xs="12" md="12">
          <CRow>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="firstName">Nombre</CLabel>
                {personAlready ? (
                  <CSelect
                    custom
                    name="select"
                    id="select"
                    onChange={(e) => {
                      changeHandler(e.target.value);
                    }}
                  >
                    <option value="0">Seleccione una Persona...</option>
                    <option value="new">Nueva Persona</option>
                  </CSelect>
                ) : (
                  <div>
                    <CInput
                      id="firstName"
                      placeholder=""
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      required
                    />
                  </div>
                )}
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="lastName">Apellido</CLabel>
                <CInput
                  id="lastName"
                  placeholder=""
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="firstName">Empresa</CLabel>
                {personAlready ? (
                  <CSelect custom name="select" id="select">
                    <option value="0">Seleccione una Persona...</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                ) : (
                  <CInput
                    id="firstName"
                    placeholder=""
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                    required
                  />
                )}
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="6">
              <CFormGroup>
                <CLabel htmlFor="firstName">Motivo de la visita</CLabel>
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="3"
                  placeholder="Escriba el motivo de su visita..."
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="6">
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
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="firstName">Recinto</CLabel>
                <CSelect
                  custom
                  name="select"
                  id="select"
                  onChange={(e) => {
                    setHostId(e.target.value);
                  }}
                >
                  <option value="0">Selecciona un recinto...</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>{" "}
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="firstName">Anfitrión</CLabel>
                <CSelect
                  custom
                  name="select"
                  id="select"
                  onChange={(e) => {
                    setHostId(e.target.value);
                  }}
                >
                  <option value="0">Selecciona a tu Anfitrión...</option>
                  <option value="any">Cualquiera</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </CSelect>{" "}
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="date-input">Fecha</CLabel>
                <CInput
                  type="date"
                  id="date-input"
                  name="date-input"
                  placeholder="date"
                  min="2021-09-03"
                  onChange={(e) => {
                    setAppointmentDate(e.target.value);
                  }}
                />
              </CFormGroup>
            </CCol>
            <CCol xs="12" md="3">
              <CFormGroup>
                <CLabel htmlFor="firstName">Hora</CLabel>
                <CSelect
                  custom
                  name="select"
                  id="select"
                  onChange={(e) => {
                    setAppointmentHour(e.target.value);
                  }}
                >
                  <option value="0">Seleccione una hora...</option>
                  <option value="09:00:00">09:00 a.m.</option>
                  <option value="09:30:00">09:30 a.m.</option>
                  <option value="10:00:00">10:00 a.m.</option>
                  <option value="10:30:00">10:30 a.m.</option>
                  <option value="11:00:00">11:00 a.m.</option>
                  <option value="11:30:00">11:30 a.m.</option>
                  <option value="12:00:00">12:00 p.m.</option>
                  <option value="12:30:00">12:30 p.m.</option>
                  <option value="13:00:00">01:00 p.m.</option>
                  <option value="13:30:00">01:30 p.m.</option>
                  <option value="14:00:00">02:00 p.m.</option>
                  <option value="14:30:00">02:30 p.m.</option>
                  <option value="15:00:00">03:00 p.m.</option>
                  <option value="15:30:00">03:30 p.m.</option>
                  <option value="16:00:00">04:00 p.m.</option>
                  <option value="16:30:00">04:30 p.m.</option>
                  <option value="17:00:00">05:00 p.m.</option>
                  <option value="17:30:00">05:30 p.m.</option>
                </CSelect>{" "}
              </CFormGroup>
            </CCol>

            <CCol xs="12" md="12">
              <CRow>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="file-input">Imagen</CLabel>
                  <CInputFile id="file-input" name="file-input" />
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="file-input">INE Frente</CLabel>
                  <CInputFile id="file-input" name="file-input" />
                </CCol>{" "}
                <CCol xs="12" md="4">
                  <CLabel htmlFor="file-input">INE Reverso</CLabel>
                  <CInputFile id="file-input" name="file-input" />
                </CCol>
              </CRow>
            </CCol>
            {/* <CCol xs="12" md="12">
              <CRow>

                <CCol xs="12" md="11"></CCol>
                <CCol xs="12" md="1">
                  <div className="custom-separation"></div>
                  <CButton type="submit" color="primary">
                    Agendar
                  </CButton>
                </CCol>
              </CRow>
            </CCol> */}
          </CRow>
        </CCol>
      </CRow>
    </>
  );
};

export default PersonaAppointment;
