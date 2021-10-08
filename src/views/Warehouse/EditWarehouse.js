import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CRow,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
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

const EditWarehouse = (props) => {
  const { show, showHandler, warehouse } = props;

  const history = useHistory();
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    if (warehouse) {
      const { code, name, address, phone } = warehouse;
      setCode(code);
      setName(name);
      setAddress(address);
      setPhone(phone);
    }
  }, [warehouse]);

  const onNameValidation = (name) => {
    setName(name);
  };

  const onAddressValidation = (address) => {
    setAddress(address);
  };

  const onPhoneValidation = (phone) => {
    setPhone(phone);
  };

  const onCodeValidation = (code) => {
    setCode(code);
  };

  const onEditWarehouse = async () => {
    const whData = {
      code: code,
      name: name,
      address: address,
      phone: phone,
    };

    // warehouseCreate(whData)
    //   .then((warehouse) => {
    //     console.log("Se creo el Warehouse correctamente ", warehouse);
    //     history.push({
    //       pathname: "/warehouse/list",
    //     });
    //   })
    //   .catch((e) => {
    //     console.log("Error al crear warehouse ", e);
    //   });
  };

  const onCancel = () => {
    showHandler(!show);
  };

  return (
    <CModal color="success" show={show} size="lg">
      <CModalHeader closeButton>
        <p className="h4">Editar Recinto</p>
      </CModalHeader>
      <CModalBody>
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
                disabled
                onChange={(e) => {
                  onCodeValidation(e.target.value);
                }}
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
              />
            </CCol>
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={(e) => onCancel(e)}>
          Cancelar
        </CButton>
        <CButton color="success" onClick={(e) => onEditWarehouse(e)}>
          Guardar
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default EditWarehouse;
