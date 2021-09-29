import React, { useEffect, useState } from "react";
import {
  CBadge,
  CDataTable,
  CCard,
  CCardHeader,
  CCardBody,
} from "@coreui/react";
import { warehouseList } from "../custom/Warehouse";

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

const fields = ["id", "name", "address", "phone"];
const spanishFieds = {
  id: "ID",
  name: "Nombre",
  address: "Dirección",
  phone: "Teléfono",
};

const ListWarehouse = () => {
  const [warehouses, setWarehouses] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const wh = await warehouseList();
      setWarehouses(wh);
    };
    if (!warehouses) {
      fetchData();
    }
  }, [warehouses]);

  return (
    <>
      <CCard accentColor="info">
        <CCardHeader>Lista de Recintos</CCardHeader>
        <CCardBody>
          <CDataTable
            items={warehouses}
            fields={fields}
            striped
            itemsPerPage={10}
            responsive={true}
            clickableRows={true}
            onRowClick={e=>{console.log("se pico e",e)}}
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
