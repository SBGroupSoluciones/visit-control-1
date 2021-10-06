import React, { useEffect, useState } from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ConfirmPersona from "./ConfirmPersona";
import ConfirmCargo from "./ConfirmCargo";
import PersonaAppointment from "./PersonaAppointment";
import CargoAppointment from "./CargoAppointment";

const Appointment = () => {
  const [personAlready, setPersonAlready] = useState(false);
  const [active, setActive] = useState(0);
  const [personaConfirm, setPersonaConfirm] = useState(false);
  const [cargoConfirm, setCargoConfirm] = useState(false);
  const [personaAppointment, setPersonaAppointment] = useState();
  const [cargoAppointment, setCargoAppointment] = useState();

  useEffect(() => {}, [personAlready]);

  const onConfirmDate = () => {
    if (personaAppointment) {
      console.log("DATA DE PERSONA ALTA ", personaAppointment)
      setPersonaConfirm(true);
    }
    if (cargoAppointment) {
      console.log("CARGO",cargoAppointment)
      setCargoConfirm(true);
    }
  };

  return (
    <>
      <ConfirmPersona
        show={personaConfirm}
        setPersonaConfirm={setPersonaConfirm}
        appointmentData={personaAppointment}
      />
      <ConfirmCargo
        show={cargoConfirm}
        setCargoConfirm={setCargoConfirm}
        appointmentData={cargoAppointment}
      />
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
                    <PersonaAppointment
                      setAppointmentData={setPersonaAppointment}
                    />
                  </CTabPane>
                  <CTabPane>
                    <CargoAppointment
                      setAppointmentData={setCargoAppointment}
                    />
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
                    disabled={
                      personaAppointment || cargoAppointment ? false : true
                    }
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
