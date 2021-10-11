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
import { visitList } from "../../util/Visit";
import { GetHost } from "../custom/Host";
import IngressPersona from "./IngressPersona";

import moment from "moment";
import "moment/locale/es";
import { GetAccount } from "../custom/PrivateVehicle";

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
  const [role, setRole] = useState();
  const [visit, setVisit] = useState();
  const [ingressPerson, setIngressPerson] = useState();

  useEffect(() => {
    const fetchData = async () => {
      return GetAccount(localStorage.getItem("account")).then((account) => {
        if (account) {
          setRole(account.role);
          return visitList().then((allVisits) => {
            console.log("SI LLEGO? ", allVisits);
            return getHostData(allVisits).then((visitsWHost) => {
              console.log("DESPUS DE GETHOST", visitsWHost);
              let filteredList = [];
              visitsWHost.map((visit) => {
                // rol de host
                if (
                  account.company == visit.id.split("-")[0] &&
                  account.email == visit.hostEmail
                ) {
                  filteredList.push(visit);
                }
                if (account.role == "SUPER_ADMIN") {
                  filteredList.push(visit);
                }
                if (
                  account.role == "AUTHORITY" &&
                  account.company == visit.id.split("-")[0]
                ) {
                  if(visit.status == "IN_PROGRESS_ADMIN" ||
                  visit.status == "FINISHED"){
                    filteredList.push(visit);
                  }
                }
                if (
                  account.role == "AUTHORITY" &&
                  account.company == visit.id.split("-")[0]
                ) {
                  if(visit.status == "IN_PROGRESS_OPERATOR" ||
                  visit.status == "FINISHED_OPERATOR"){
                    filteredList.push(visit);
                  }
                }
              });
              setVisits(filteredList);
            });
          });
        }
      });

      // getHostData(allVisits).then((visitWithHost) => setVisits(visitWithHost));
      // console.log("Las visitas ", allVisits);
    };
    if (!visits && !role) {
      fetchData();
    }
  }, [visits]);

  const getVisitData = (list) => {
    const outputList = [];
    list.map((item) => {
      console.log(
        "FECHA ",
        moment(item.dateTimestamp).format("MMMM Do YYYY, h:mm a")
      );
      console.log(item.person.firstName);
      // outputList.push({
      //   fullName: `${item.person.firstName} ${item.person.lastName}`,

      // });
    });
  };

  const getHostData = async (visit) => {
    if (visit) {
      var visitHost = [];

      await Promise.all(
        visit.map(async (item) => {
          const host = await GetHost(item.host.id);
          console.log("LOS TIMASADA SD", host);
          item.hostName = `${host.hostName.firstName} ${host.hostName.lastName}`;
          item.hostEmail = host.hostName.email;
          item.hostWarehouse = host.warehouse.name;
          item.hostWarehouseCode = host.warehouse.code;
          visitHost.push(item);
        })
      );
      return visitHost;
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case "PERSON":
        return "primary";
      case "CARGO":
        return "success";
      default:
        return "primary";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "SCHEDULED":
        return "success";
      case "IN_PROGRESS":
        return "warning";
      case "IN_PROGRESS_ADMIN":
        return "warning";
      case "IN_PROGRESS_OPERATOR":
        return "warning";
      case "FINISHED_OPERATOR":
        return "warning";
      case "FINISHED":
        return "unregistered";
      case "REJECTED_BY_ADMIN":
        return "danger";
      case "REJECTED_BY_OPERATOR":
        return "danger";
      case "CANCELLED":
        return "danger";
      default:
        return "primary";
    }
  };

  const getSpanishType = (type) => {
    switch (type) {
      case "PERSON":
        return "Persona";
      case "CARGO":
        return "Vehiculo de Carga";
      default:
        return "DESCONOCIDO";
    }
  };

  const getSpanishStatus = (status) => {
    switch (status) {
      case "SCHEDULED":
        return "Agendado";
      case "IN_PROGRESS":
        return "En Progreso";
      case "IN_PROGRESS_ADMIN":
        return "En Progreso Admin";
      case "IN_PROGRESS_OPERATOR":
        return "En Progreso Operador";
      case "FINISHED":
        return "Finalizada";
      case "REJECTED_BY_ADMIN":
        return "Rechazada por Admin";
      case "REJECTED_BY_OPERATOR":
        return "Rechazada por Operador";
      case "CANCELLED":
        return "Cancelada";
      default:
        return "";
    }
  };

  const fields = [
    "id",
    "dateTimestamp",
    "person",
    "company",
    "hostWarehouse",
    "hostName",
    "status",
    "type",
  ];
  const spanishFieds = {
    id:"ID",
    dateTimestamp: "Fecha y Hora",
    person: "Nombre",
    company: "Empresa",
    hostWarehouse: "Recinto",
    hostName: "Anfitrión",
    status: "Status",
    type: "Categoria",
  };

  const onRowSelected = (item) => {
    setVisit(item);
    setIngressPerson(!ingressPerson);
  };

  return (
    <>
      <IngressPersona show={ingressPerson} visit={visit} />
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
            columnHeaderSlot={spanishFieds}
            // onRowClick={(item) => onRowSelected(item)}
            scopedSlots={{
              type: (item) => (
                <td>
                  <CBadge color={getTypeBadge(item.type)}>
                    {getSpanishType(item.type)}
                  </CBadge>
                </td>
              ),
              status: (item) => (
                <td>
                  <CBadge color={getStatusBadge(item.status)}>
                    {getSpanishStatus(item.status)}
                  </CBadge>
                </td>
              ),
              person: (item) =>
                item.person ? (
                  <td>{`${item.person.firstName} ${item.person.lastName}`}</td>
                ) : (
                  <td>{`${item.cargoVehicle.driverName}`}</td>
                ),
              cargoVehicle: (item) =>
                item.cargoVehicle ? <td>{`${item.driverName}`}</td> : <td></td>,
              dateTimestamp: (item) => (
                <td>
                  {moment(item.dateTimestamp).format("MMMM Do YYYY, h:mm a")}
                </td>
              ),
              company: (item) =>
                item.person ? (
                  <td>{item.person.company}</td>
                ) : (
                  <td>{`${item.cargoVehicle.company}`}</td>
                ),
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Appointment;
