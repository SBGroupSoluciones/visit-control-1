import React, { useEffect, useState, createRef } from "react";
import QRCode from "react-qr-code";
import classNames from "classnames";
import {
  CRow,
  CBadge,
  CDataTable,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
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
import { Calendar, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
const localizer = momentLocalizer(moment);

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

const Appointment = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <CCard>
        <CCardHeader>Lista de Citas</CCardHeader>
        <CCardBody>
          <Calendar
            localizer={localizer}
            events={{
              title: "string",
              start: Date,
              end: Date,
            }}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />

          {/* <Calendar 
            localizer={localizer}
            // events={myEventsList}
            startAccessor="start"
            endAccessor="end"
          /> */}
        </CCardBody>
      </CCard>
    </>
  );
};

export default Appointment;
