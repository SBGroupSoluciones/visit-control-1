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
import { GetHost } from "../custom/Host";

import moment from "moment";
import "moment/locale/es";

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
      console.log("CNOHOST ", getHostData(allVisits));

      setVisits(allVisits)
      // getHostData(allVisits).then((visitWithHost) => setVisits(visitWithHost));
      console.log("Las visitas ", allVisits);
    };
    if (!visits) {
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
    const visitHost = [];
    visit.map((item) => {
      return GetHost(item.host.id).then((host) => {
        item.hostName = `${host.hostName.firstName} ${host.hostName.lastName}`;
        item.hostWarehouse = host.warehouse.name;
        visitHost.push(item);
      });
    });
    return visitHost;
  };

  const objecto = {
    id: "4be57ce3-a2ac-41fa-94b6-8f360a6396d1",
    dateTimestamp: "2021-10-04T11:00:00",
    checkInTimestamp: null,
    checkOutTimestamp: null,
    reason: "Visita de prueba",
    status: "SCHEDULED",
    qr: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiYW9qZWRhQHNiZ3JvdXAuY29tLm14IiwiZW1haWwiOiJhb2plZGFjc0BnbWFpbC5jb20ifQ.TPOwCxIOan1gEUT4MUkJYZI1KtdVAi4D6okrgpL32qI",
    timestamp: "",
    adminApprove: false,
    operApprove: false,
    type: "PERSON",
    createdAt: "2021-10-03T21:48:32.675Z",
    updatedAt: "2021-10-03T21:48:32.675Z",
    account: {
      id: "afcf58da-291f-4d10-adb3-d409dff374b8",
      firstName: "Angel de Jesus",
      lastName: "Ojeda Castro",
      imgUrl: null,
      company: "SBGroup",
      email: "aojeda@sbgroup.com.mx",
      role: "SUPER_ADMIN",
      phones: ["6122308184"],
      createdAt: "2021-09-14T19:11:56.090Z",
      updatedAt: "2021-09-14T19:11:56.090Z",
      owner: null,
    },
    owner: null,
    person: {
      id: "6ea0eac0-2b5e-43f0-883a-42a1342b2650",
      firstName: "Angel ",
      lastName: "Ojeda",
      email: "aojedacs@gmail.com",
      imgUrl: "b9b820a2d84c530126b1e92efba9f8b5.jpg",
      phone: "6122308184",
      company: "SBGroup.com",
      idFrontPath: "aaaaaaaa.jpg",
      idBackPath: "user-profile-defoult.jpg",
      createdAt: "2021-10-03T21:48:32.091Z",
      updatedAt: "2021-10-03T21:48:32.091Z",
      owner: null,
    },
    privateVehicle: null,
    cargoVehicle: null,
    host: {
      id: "b844c298-705d-4db0-b60c-91ac6db13e46",
      createdAt: "2021-09-15T09:56:38.863Z",
      updatedAt: "2021-09-15T09:56:38.863Z",
      owner: null,
    },
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
      case "FINISHED":
        return "unregistered";
      case "REJECTED_BY_ADMIN":
        return "danger";
      case "REJECTED_BY_OPER":
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
      case "FINISHED":
        return "Finalizada";
      case "REJECTED_BY_ADMIN":
        return "Rechazada por Admin";
      case "REJECTED_BY_OPER":
        return "Rechazada por Operador";
      case "CANCELLED":
        return "Cancelada";
      default:
        return "";
    }
  };

  const fields = [
    "dateTimestamp",
    "person",
    "company",
    "hostWarehouse",
    "hostName",
    "status",
    "type",
  ];
  const spanishFieds = {
    dateTimestamp: "Fecha y Hora",
    person: "Nombre",
    company: "Empresa",
    hostWarehouse: "Recinto",
    hostName: "Anfitrión",
    status: "Status",
    type: "Categoria",
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
            columnHeaderSlot={spanishFieds}
            // onRowClick={(item) => onAccountSelected(item)}
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
                  <td></td>
                ),
              cargoVehicle: (item) =>
                item.cargoVehicle ? <td>{`${item.driverName}`}</td> : <td></td>,
              dateTimestamp: (item) => (
                <td>
                  {moment(item.dateTimestamp).format("MMMM Do YYYY, h:mm a")}
                </td>
              ),
              company: (item) =>
                item.person ? <td>{item.person.company}</td> : <td></td>,
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Appointment;
