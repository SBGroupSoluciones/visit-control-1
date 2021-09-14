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
import PersonaAppointment from "./PersonaAppointment";
import CargoAppointment from "./CargoAppointment";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["name", "registered", "role", "status"];

const Appointment = () => {
  const [personAlready, setPersonAlready] = useState(false);
  const [active, setActive] = useState(0);
  const [newVehicle, setNewVehicle] = useState(false);
  const [personaConfirm, setPersonaConfirm] = useState(false);

  useEffect(() => {}, [personAlready]);

  const onConfirmDate = () => {
    setPersonaConfirm(true);
  };

  return (
    <>
      <Notification show={personaConfirm} confirmHandler={setPersonaConfirm} />
      <PersonalVehicle show={newVehicle} setNotification={setNewVehicle} />
      <CRow>
        <CCol md="12">
          <CCard accentColor="success">
            <CCardHeader>Agendar Cita</CCardHeader>
            <CCardBody>
              <CTabs
                activeTab={active}
                onActiveTabChange={(idx) => setActive(idx)}
              >
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-user" />
                      {active === 0 && " Persona"}
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink>
                      <CIcon name="cil-truck" />
                      {active === 1 && " Vehiculo de Carga"}
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane>
                    <PersonaAppointment />
                  </CTabPane>
                  <CTabPane>
                    <CargoAppointment />
                  </CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
            <CCardFooter className="p-4">
              <CRow>
                <CCol xs="12" sm="11"></CCol>
                <CCol xs="12" sm="1">
                  <CButton
                    color="primary"
                    className="mb-1"
                    onClick={(e) => onConfirmDate(e)}
                    block
                  >
                    <span>Agendar</span>
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Appointment;
