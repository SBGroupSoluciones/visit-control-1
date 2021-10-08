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
  CSelect,
  CButton,
} from "@coreui/react";
import Notification from "../custom/Notification";
import { getAccountByRole } from "../Auth/Account";
import { warehouseList } from "../custom/Warehouse";
import { hostCreate } from "../custom/Host";

const CreateHost = () => {
  const history = useHistory();
  const [accounts, setAccounts] = useState();
  const [warehouses, setWarehouses] = useState();
  const [hostNameId, setHostNameId] = useState();
  const [warehouseId, setWarehouseId] = useState();

  useEffect(() => {
    const fetchAccounts = async () => {
      getAccountByRole("HOST")
        .then((hosts) => {
          setAccounts(hosts.items);
        })
        .catch((error) => console.log(error));
    };
    const fetchWarehouses = async () => {
      warehouseList()
        .then((whs) => {
          console.log(whs);
          setWarehouses(whs);
        })
        .catch((error) => console.log(error));
    };
    if (!accounts) {
      fetchAccounts();
    }
    if (!warehouses) {
      fetchWarehouses();
    }
  }, [accounts, warehouses]);

  const onUserSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setHostNameId(event.target.options[selectedIndex].getAttribute("data-key"));
  };

  const onWarehouseSelect = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    setWarehouseId(
      event.target.options[selectedIndex].getAttribute("data-key")
    );
  };

  const onCreateHost = () => {
    const hostData = {
      hostNameId: hostNameId,
      warehouseId: warehouseId,
    };

    hostCreate(hostData)
      .then((host) => {
        console.log("Se creo el Host correctamente ", host);
        history.push({
          pathname: "/host/list",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Notification show={false} />
      <CRow>
        <CCol md="6">
          <CCard accentColor="success">
            <CCardHeader>Crear Anfitrión</CCardHeader>
            <CCardBody>
              <CForm>
                <CRow>
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="role" className="ln-top">
                      Usuario
                    </CLabel>
                    <CSelect
                      custom
                      name="select"
                      id="user"
                      // value={role}
                      onChange={(e) => {
                        onUserSelect(e);
                      }}
                    >
                      <option>Seleccione una opcion...</option>
                      {accounts
                        ? accounts.map((x, y) => (
                            <option key={y} data-key={x.email}>
                              {x.firstName + " " + x.lastName}
                            </option>
                          ))
                        : null}
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CLabel htmlFor="role" className="ln-top">
                      Recinto
                    </CLabel>
                    <CSelect
                      custom
                      name="select"
                      id="warehouse"
                      // value={role}
                      onChange={(e) => {
                        onWarehouseSelect(e);
                      }}
                    >
                      <option>Seleccione una opcion...</option>
                      {warehouses
                        ? warehouses.map((x, y) => (
                            <option key={y} data-key={x.code}>
                              {x.name}
                            </option>
                          ))
                        : null}
                    </CSelect>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                color="success"
                onClick={(e) => onCreateHost()}
              >
                Añadir
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default CreateHost;
