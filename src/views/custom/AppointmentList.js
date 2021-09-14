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

const appointList = [
  {
    "id": "4aa3bb65-f42d-492d-8d98-84e81c9088bb",
    "dateTimestamp": "1234",
    "checkInTimestamp": "1231",
    "checkOutTimestamp": "1231",
    "reason": null,
    "status": null,
    "qrUrl": null,
    "timestamp": null,
    "adminApprove": null,
    "operApprove": null,
    "createdAt": "2021-09-06T15:29:43.886Z",
    "updatedAt": "2021-09-06T15:29:43.886Z",
    "owner": "c24f995f-9d77-4555-aaa4-3565ed3e1796"
  }
]

const Appointment = () => {
  const [active, setActive] = useState(1);
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.";

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
  return (
    <>
      <CCard>
        <CCardHeader>Lista de Citas</CCardHeader>
        <CCardBody>
          <CDataTable

            items={usersData}
            fields={fields}
            striped
            itemsPerPage={5}
            pagination
            columnHeaderSlot={{ name: "Nombre" }}
            scopedSlots={{
              status: (item) => (
                <td>
                  <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                </td>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Appointment;
