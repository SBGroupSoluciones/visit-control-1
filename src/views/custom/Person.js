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
  CForm,
  CLabel,
  CInput,
  CInputFile,
  CFormGroup,
  CSelect,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
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

const Person = () => {
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
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>Agregar Persona</CCardHeader>
            <CCardBody>
              {/* <QRCode value={JSON.stringify(qrCode)}/> */}
              <CRow>
                <CCol xs="12" md="6">
                  <CFormGroup>
                    <CLabel htmlFor="firstName">Nombre</CLabel>
                    <CInput id="firstName" placeholder="Nombre" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="6">
                  <CLabel htmlFor="lastName">Apellido</CLabel>
                  <CInput id="lastName" placeholder="Apellido" required />
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="email">Correo Electronico</CLabel>
                  <CInput
                    id="email"
                    placeholder="Correo Electronico"
                    required
                  />
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="phone">Telefono</CLabel>
                  <CInput id="phone" placeholder="Teléfono" required />
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="nacompanyme">Empresa</CLabel>
                  <CInput id="company" placeholder="Empresa" required />
                </CCol>
              </CRow>
              <div className="custom-separation"></div>
              <CRow>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="file-input">Imagen</CLabel>
                  <CInputFile id="file-input" name="file-input" />
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="file-input">INE Frente</CLabel>
                  <CInputFile id="file-input" name="file-input" />
                </CCol>{" "}
                <CCol xs="12" md="4">
                  <CLabel htmlFor="file-input">INE Reverso</CLabel>
                  <CInputFile id="file-input" name="file-input" />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCard>
        <CCardHeader>Lista de Personas</CCardHeader>
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
      <CCard>
        <CCardHeader>Agregar Vehiculo</CCardHeader>
        <CCardBody>
          {/* <QRCode value={JSON.stringify(qrCode)}/> */}
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="name">Name</CLabel>
                <CInput id="name" placeholder="Enter your name" required />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="ccnumber">Credit Card Number</CLabel>
                <CInput
                  id="ccnumber"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="ccmonth">Month</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="ccyear">Year</CLabel>
                <CSelect custom name="ccyear" id="ccyear">
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">CVV/CVC</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Lista de Vehiculos</CCardHeader>
        <CCardBody>
          <CRow className="mb-3"></CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Person;
