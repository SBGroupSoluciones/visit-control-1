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
import QrReader from "react-qr-reader";

const Appointment = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {}, []);
  const onHandleScan = (data) => {
    if (data) {
      console.log(data);
    }
  };
  const onHandleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <CRow>
        <CCol md="4">
          <CCard accentColor="success">
            <CCardHeader>Escanear QR</CCardHeader>
            <CCardBody>
              <QrReader
                delay={300}
                onError={onHandleError}
                onScan={onHandleScan}
                style={{ width: "100%" }}
              />
            </CCardBody>
            <CCardFooter className="p-4"></CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Appointment;
