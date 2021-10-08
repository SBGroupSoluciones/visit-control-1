import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CForm,
  CLabel,
  CInput,
  CInvalidFeedback,
  CButton,
} from "@coreui/react";

import Notification from "../custom/Notification";
import {
  isValidText,
  isValidPhoneNumber,
  isValidWarehouseCode,
} from "../Auth/utils";
import { warehouseCreate } from "../custom/Warehouse";

const CreateWarehouse = () => {
  const history = useHistory();
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [codeValid, setCodeValid] = useState();
  const [nameValid, setNameValid] = useState(false);
  const [addressValid, setAddressValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  // const [error, setError] = useState();
  // const [notify, setNotify] = useState(false);

  useEffect(() => {


  }, []);

  const onNameValidation = (name) => {
    setNameValid(isValidText(name) && name);
    setName(name);
  };

  const onAddressValidation = (address) => {
    setAddressValid(isValidText(address) && address);
    setAddress(address);
  };

  const onPhoneValidation = (phone) => {
    setPhoneValid(isValidPhoneNumber(phone));
    setPhone(phone);
  };

  const onCodeValidation = (code) => {
    setCodeValid(isValidWarehouseCode(code));
    setCode(code);
  };

  const onCreateWarehouse = async () => {
    const whData = {
      code:code, 
      name: name,
      address: address,
      phone: phone,
    };

    warehouseCreate(whData)
      .then((warehouse) => {
        console.log("Se creo el Warehouse correctamente ", warehouse);
        history.push({
          pathname: "/warehouse/list",
        });
      })
      .catch((e) => {
        console.log("Error al crear warehouse ", e);
      });
  };

  return (
    <>
      {/* <Notification show={false} /> */}
      <CRow>
        <CCol md="6">
          <CCard accentColor="success">
            <CCardHeader>Crear Recinto</CCardHeader>
            <CCardBody>
              <CForm>
                <CRow>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="name" className="ln-top">
                      Código
                    </CLabel>
                    <CInput
                      type="text"
                      autoComplete="code"
                      value={code ? code : null}
                      onChange={(e) => {
                        onCodeValidation(e.target.value);
                      }}
                      valid={codeValid}
                      invalid={!codeValid && code}
                    />
                  </CCol>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="name" className="ln-top">
                      Nombre
                    </CLabel>
                    <CInput
                      type="text"
                      autoComplete="name"
                      value={name ? name : null}
                      onChange={(e) => {
                        onNameValidation(e.target.value);
                      }}
                      valid={nameValid}
                      invalid={!nameValid && name}
                    />
                  </CCol>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="address" className="ln-top">
                      Dirección
                    </CLabel>
                    <CInput
                      type="text"
                      autoComplete="address"
                      value={address ? address : null}
                      onChange={(e) => {
                        onAddressValidation(e.target.value);
                      }}
                      valid={addressValid}
                      invalid={!addressValid && address}
                    />
                  </CCol>
                  <CCol xs="12" md="12">
                    <CLabel htmlFor="phone" className="ln-top">
                      Teléfono
                    </CLabel>
                    <CInput
                      type="text"
                      autoComplete="phone"
                      value={phone ? phone : null}
                      onChange={(e) => {
                        onPhoneValidation(e.target.value);
                      }}
                      valid={phoneValid}
                      invalid={!phoneValid && phone}
                    />
                    <CInvalidFeedback>
                      Introduzca un numero de telefono valido
                    </CInvalidFeedback>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                color="success"
                onClick={(e) => onCreateWarehouse()}
              >
                Crear Recinto
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default CreateWarehouse;
