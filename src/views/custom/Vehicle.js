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
  CButton,
  CForm,
  CCardFooter,
  CLabel,
  CInput,
  CInputFile,
  CInputCheckbox,
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

const Vehicle = () => {
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
        <CCol md="8">
          <CCard>
            <CCardHeader>Agregar Vehiculo de Carga</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="line">Linea Transportista</CLabel>
                  <CInput id="line" placeholder="" required />
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="platformPlate">
                    Placa de la plataforma
                  </CLabel>
                  <CInput id="platformPlate" placeholder="" required />
                </CCol>
                <CCol xs="12" md="4">
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox1"
                      name="inline-checkbox1"
                      value="option1"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox1"
                    >
                      Carga
                    </CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox2"
                      name="inline-checkbox2"
                      value="option2"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox2"
                    >
                      Descarga
                    </CLabel>
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="petition">Pedimento</CLabel>
                  <CInput id="petition" placeholder="" required />
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="packs">Número de Bultos</CLabel>
                  <CInput id="packs" placeholder="" required />
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="containerNumber">
                    Número de Contenedor
                  </CLabel>
                  <CInput id="containerNumber" placeholder="" required />
                </CCol>
                <CCol xs="12" md="4">
                  <CLabel htmlFor="tractNumber">
                    Número Económico del Tracto
                  </CLabel>
                  <CInput id="tractNumber" placeholder="" required />
                </CCol>

                <CCol xs="12" md="4">
                  <CLabel htmlFor="sealsNumber">Número de Sellos</CLabel>
                  <CInput id="sealsNumber" placeholder="" required />
                </CCol>
                <CCol xs="12" md="4">
                  <CFormGroup>
                    <CLabel htmlFor="firstName">Documento Adicional</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Seleccione un documento...</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>{" "}
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" color="primary">
                Guardar
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol md="4">
          <CCard>
            <CCardHeader>Agregar Vehiculo Privado</CCardHeader>
            <CCardBody>
              {/* <QRCode value={JSON.stringify(qrCode)}/> */}
              <CRow>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="line">Color</CLabel>
                  <CInput id="line" placeholder="" required />
                </CCol>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="platformPlate">Marca</CLabel>
                  <CInput id="platformPlate" placeholder="" required />
                </CCol>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="petition">Sub Marca</CLabel>
                  <CInput id="petition" placeholder="" required />
                </CCol>
                <CCol xs="12" md="12">
                  <CLabel htmlFor="packs">Modelo</CLabel>
                  <CInput id="packs" placeholder="" required />
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" color="primary">
                Guardar
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>

      <CCard>
        <CCardHeader>Lista de Vehiculos de Carga</CCardHeader>
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
        <CCardHeader>Lista de Vehiculos Privados</CCardHeader>
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

export default Vehicle;
