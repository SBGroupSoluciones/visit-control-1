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
import { accountList } from "../Auth/Account";
import { userStatus } from "../Auth/AuthUtil";

const getBadge = (status) => {
  switch (status) {
    case "registered":
      return "success";
    case "Inactive":
      return "unregistered";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const fields = ["name", "warehouse"];
const spanishFieds = {
  // id: "ID",
  name: "Nombre",
  warehouse: "Recinto",
};

const ListWarehouse = () => {
  const [accounts, setAccounts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const accounts = await accountList();
      setAccounts(accounts);
    };
    if (!accounts) {
      fetchData();
    }
  }, [accounts]);

  return (
    <>
      <CCard  accentColor="info" >
        <CCardHeader>Lista de Recintos</CCardHeader>
        <CCardBody>
          <CDataTable
            items={accounts}
            fields={fields}
            striped
            itemsPerPage={10}
            responsive={true}
            clickableRows={true}
            pagination
            columnFilter
            tableFilter={{label:"Filtro",placeholder:"Escribe una palabra..."}}
            itemsPerPageSelect={{label:"Registros por Página"}}
            noItemsView={{noResults:"Sin resultados de filtrado", noItems:"No hay elementos"}}
            hover
            sorter
            columnHeaderSlot={spanishFieds}
            scopedSlots={{
              status: (item) => (
                <td>
                  <CBadge color={getBadge(item)}>{item.status}</CBadge>
                </td>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default ListWarehouse;
