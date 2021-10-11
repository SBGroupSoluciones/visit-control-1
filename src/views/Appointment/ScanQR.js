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
import IngressCargo from "./IngressCargo";
import { GetVisit } from "src/util/Visit";
import { GetHost } from "../custom/Host";

const Appointment = () => {
  const [active, setActive] = useState(0);
  const [ingressPerson, setIngressPerson] = useState(false);
  const [ingressCargo, setIngressCargo] = useState(false);
  const [visit, setVisit] = useState();

  useEffect(() => {}, []);
  const onHandleScan = (data) => {
    if (data && !ingressPerson) {
      GetVisit(data).then((visit) => {
        console.log("LA VISITA QUE SE ESCANEOO ", visit.type);
        GetHost(visit.host.id).then((host) => {
          visit.hostName = `${host.hostName.firstName} ${host.hostName.lastName}`;
          visit.hostWarehouse = host.warehouse.name;
          setVisit(visit);
          if (visit.type == "PERSON") {
            setIngressPerson(true);
          }
          if (visit.type == "CARGO") {
            setIngressCargo(true);
          }
        });
      });
    }
  };
  const onHandleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <IngressPersona show={ingressPerson} visit={visit} />
      <ingressCargo show={ingressCargo} visit={visit} />
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
