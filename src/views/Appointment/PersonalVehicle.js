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
  CFormGroup,
  CInput,
} from "@coreui/react";
import { vehicleCreate } from "src/util/Vehicle";

const PersonalVehicle = (props) => {
  const [plate, setPlate] = useState();
  const [color, setColor] = useState();
  const [brand, setBrand] = useState();
  const [subBrand, setSubBrand] = useState();
  const [model, setModel] = useState();
  const { show, setNotification, setVehiclePlate } = props;

  const toggle = (e) => {
    setNotification(!show);
  };

  const onCreateVehicle = (e) => {
    const vehicleData = {
      plate: plate,
      color: color,
      brand: brand,
      model: model,
      subBrand: subBrand,
      account: localStorage.getItem("account"),
    };
    vehicleCreate(vehicleData).then((vehicle) => {
      console.log("Se Creo el vehiculo", vehicle);
      setVehiclePlate(plate);
      setNotification(!show);
    });
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
                      setPlate(e.target.value);
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
        <CButton color="success" onClick={(e) => onCreateVehicle(e)}>
          Añadir
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default PersonalVehicle;
