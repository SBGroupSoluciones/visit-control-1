import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  CBadge,
  CDataTable,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";
import { accountList } from "../Auth/Account";

const getBadge = (status) => {
  switch (status) {
    case "SUPER_ADMIN":
      return "success";
    case "AUTHORITY":
      return "danger";
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
    case "AUTHORITY":
      return "AUTORIDAD"
    default:
      return "DESCONOCIDO";
  }
};

const fields = ["firstName", "lastName", "email", "company", "phones", "role"];
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

const ListAccount = () => {
  const history = useHistory();
  const [accounts, setAccounts] = useState();
  const [account, setAccount] = useState();
  const [editAccount, setEditAccount] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const accounts = await accountList();
      setAccounts(accounts);
    };
    if (!accounts) {
      fetchData();
    }
  }, [accounts]);

  const onAccountSelected = (item) => {
    history.push(`/account/${item.id}`);
  };

  return (
    <>
      <CCard accentColor="info">
        <CCardHeader>Lista de Cuentas</CCardHeader>
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
            columnHeaderSlot={spanishFieds}
            onRowClick={(item) => onAccountSelected(item)}
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

export default ListAccount;
