import React, { useState, useEffect } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CRow,
  CCol,
  CLabel,
  CContainer,
  CImg,
  CFormGroup,
  CInput,
} from "@coreui/react";
import QRCode from "react-qr-code";

const PersonalVehicle = (props) => {
  const [color, setColor] = useState();
  const [brand, setBrand] = useState();
  const [subBran, setSubBrand] = useState();
  const [model, setModel] = useState();
  const { show, setNotification } = props;



  const toggle = (e) => {
    setNotification(!show);
  };

  return (
    <CModal color="success" show={show} size="sm">
      <CModalHeader closeButton>
        <p className="h4">Añadir Nuevo Vehículo</p>
      </CModalHeader>
      <CModalBody>
        <CRow>
          <CContainer>
            <CRow>
            <CCol xs="12" md="12">
                <CFormGroup>
                  <CLabel htmlFor="name">Placa</CLabel>
                  <CInput
                    id="name"
                    placeholder=""
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                    required
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="12">
                <CFormGroup>
                  <CLabel htmlFor="color">Color</CLabel>
                  <CInput
                    id="Color"
                    placeholder=""
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                    required
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="12">
                <CFormGroup>
                  <CLabel htmlFor="color">Marca</CLabel>
                  <CInput
                    id="Color"
                    placeholder=""
                    onChange={(e) => {
                      setBrand(e.target.value);
                    }}
                    required
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="12">
                <CFormGroup>
                  <CLabel htmlFor="color">Sub-Marca</CLabel>
                  <CInput
                    id="Color"
                    placeholder=""
                    onChange={(e) => {
                      setSubBrand(e.target.value);
                    }}
                    required
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="12">
                <CFormGroup>
                  <CLabel htmlFor="color">Modelo</CLabel>
                  <CInput
                    id="Color"
                    placeholder=""
                    onChange={(e) => {
                      setModel(e.target.value);
                    }}
                    required
                  />
                </CFormGroup>
              </CCol>
            </CRow>
          </CContainer>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={(e) => toggle(e)}>
          Cancelar
        </CButton>
        <CButton color="success" onClick={(e) => toggle(e)}>
          Añadir
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default PersonalVehicle;
