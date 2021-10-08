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
import IngressPersona from "./IngressPersona";
import { GetVisit } from "src/util/Visit";

const Appointment = () => {
  const [active, setActive] = useState(0);
  const [ingressPerson, setIngressPerson] = useState(false);
  const [visit, setVisit] = useState();

  useEffect(() => {}, []);
  const onHandleScan = (data) => {
    if (data && !ingressPerson) {
      console.log(data);
      GetVisit(data).then((visit) => {
        setVisit(visit);
        setIngressPerson(true);
      });
    }
  };
  const onHandleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <IngressPersona show={ingressPerson} visit={visit} />
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
