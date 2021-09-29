import React, { useEffect, useState, createRef } from "react";
import { useHistory } from "react-router-dom";

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
import { visitList } from "../custom/Visit";

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
  const history = useHistory();
  const [visits, setVisits] = useState();
  const [account, setAccount] = useState();
  const [editAccount, setEditAccount] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const allVisits = await visitList();
      setVisits(allVisits);
      console.log("Las visitas ", allVisits);
    };
    if (!visits) {
      fetchData();
    }
  }, [visits]);

  const getBadge = (status) => {
    switch (status) {
      case "SUPER_ADMIN":
        return "success";
      case "Inactive":
        return "unregistered";
      case "HOST":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  const getSpanishRole = (role) => {
    switch (role) {
      case "SUPER_ADMIN":
        return "SUPER ADMIN";
      case "ADMIN":
        return "ADMINISTRADOR";
      case "OPERATOR":
        return "OPERADOR";
      case "HOST":
        return "ANFITRIÓN";
      case "USER":
        return "USUARIO";
      default:
        return "DESCONOCIDO";
    }
  };

  const fields = [
    "firstName",
    "lastName",
    "email",
    "company",
    "phones",
    "role",
  ];
  const spanishFieds = {
    id: "ID",
    firstName: "Nombre",
    lastName: "Apellido",
    company: "Empresa",
    email: "Correo",
    phones: "Telefono",
    role: "Rol",
    status: "Status",
  };
  return (
    <>
      <CCard>
        <CCardHeader>Lista de Citas</CCardHeader>
        <CCardBody>
          <CDataTable
            items={visits}
            fields={fields}
            striped
            itemsPerPage={10}
            responsive={true}
            clickableRows={true}
            pagination
            columnFilter
            tableFilter={{
              label: "Filtro",
              placeholder: "Escribe una palabra...",
            }}
            itemsPerPageSelect={{ label: "Registros por Página" }}
            noItemsView={{
              noResults: "Sin resultados de filtrado",
              noItems: "No hay elementos",
            }}
            hover
            sorter
            // columnHeaderSlot={spanishFieds}
            // onRowClick={(item) => onAccountSelected(item)} 
            scopedSlots={{
              role: (item) => (
                <td>
                  <CBadge color={getBadge(item.role)}>
                    {getSpanishRole(item.role)}
                  </CBadge>
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
